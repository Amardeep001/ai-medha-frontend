import axios from "axios";

// ---------- Common Config ----------
const PARICHAY_BASE = "https://parichay.staging.nic.in";
const CLIENT_ID = "Lsb5YBifC2reXvevQZB6CfUgzqPunIik";
const REDIRECT_URI = "https://aimedha.nic.gov.in/auth/login";
const SCOPE = "user_details";

// ---------- PKCE Helpers ----------
function base64Url(bytes) {
    return btoa(String.fromCharCode(...Array.from(bytes)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

async function sha256(input) {
    const data = new TextEncoder().encode(input);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return base64Url(new Uint8Array(hash));
}

function randomString(bytes = 32) {
    const array = new Uint8Array(bytes);
    crypto.getRandomValues(array);
    return base64Url(array);
}

async function buildPkce() {
    const codeVerifier = randomString(32);
    const codeChallenge = await sha256(codeVerifier);
    return { codeVerifier, codeChallenge };
}

// ---------- Step 1: Redirect user to Parichay ----------
export async function loginWithParichay() {
    const { codeVerifier, codeChallenge } = await buildPkce();
    const state = crypto.randomUUID();

    // Save state + verifier for callback
    sessionStorage.setItem("parichay_code_verifier", codeVerifier);
    sessionStorage.setItem("parichay_state", state);

    const url =
        `${PARICHAY_BASE}/pnv1/oauth2/authorize` +
        `?response_type=code` +
        `&client_id=${encodeURIComponent(CLIENT_ID)}` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
        `&scope=${encodeURIComponent(SCOPE)}` +
        `&code_challenge_method=S256` +
        `&code_challenge=${encodeURIComponent(codeChallenge)}` +
        `&state=${encodeURIComponent(state)}`;

    window.location.href = url;
}

// ---------- Step 2: Handle callback ----------
export async function handleParichayCallback() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    const savedState = sessionStorage.getItem("parichay_state");
    const codeVerifier = sessionStorage.getItem("parichay_code_verifier");

    // Cleanup
    sessionStorage.removeItem("parichay_state");
    sessionStorage.removeItem("parichay_code_verifier");

    if (!code || !state || state !== savedState) {
        throw new Error("Invalid callback or state mismatch");
    }

    // ---------- Step 3: Exchange code for tokens ----------
    const tokenUrl = `${PARICHAY_BASE}/pnv1/salt/api/oauth2/token`;

    const body = {
        client_id: CLIENT_ID,
        code_verifier: codeVerifier,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
        code: code,
    };

    const { data: tokens } = await axios.post(tokenUrl, body, {
        headers: { "Content-Type": "application/json" },
    });

    // ---------- Step 4: Fetch user details ----------
    const { data: user } = await axios.get(`${PARICHAY_BASE}/pnv1/salt/api/oauth2/userdetails`, {
        headers: {
            Authorization: tokens.access_token, // spec: raw token (not Bearer)
        },
    });

    localStorage.setItem("parichay_tokens", JSON.stringify(tokens));
    localStorage.setItem("parichay_user", JSON.stringify(user));

    return { tokens, user };
}

// ---------- Step 5: Refresh token ----------
export async function refreshParichayToken() {
    const tokens = JSON.parse(localStorage.getItem("parichay_tokens") || "{}");
    if (!tokens.refresh_token) throw new Error("No refresh token available");

    const refreshUrl = `${PARICHAY_BASE}/pnv1/salt/api/oauth2/token`;

    const { data: newTokens } = await axios.post(
        refreshUrl,
        { grant_type: "refresh_token" },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: tokens.refresh_token,
            },
        }
    );

    localStorage.setItem("parichay_tokens", JSON.stringify(newTokens));
    return newTokens;
}

// ---------- Step 6: Logout ----------
export async function logoutParichay() {
    const tokens = JSON.parse(localStorage.getItem("parichay_tokens") || "{}");
    if (!tokens.access_token) return;

    await axios.get(`${PARICHAY_BASE}/pnv1/salt/api/oauth2/revoke`, {
        headers: { Authorization: tokens.access_token },
    });

    localStorage.removeItem("parichay_tokens");
    localStorage.removeItem("parichay_user");
}

