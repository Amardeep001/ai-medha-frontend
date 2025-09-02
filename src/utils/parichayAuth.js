import axios from "axios";
import { BASE_URL } from "../config/apiConfig";
import { jwtDecode } from "jwt-decode";

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

export const checkParichayTokenSession = async () => {
    try {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const userId = decoded.userId;

        if (!userId || !token) {
            return false;
        }

        // 1️⃣ First call: get user details
        const userResponse = await axios.get(`${BASE_URL}/api/auth/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        const parichayAccessToken = userResponse.data?.parichayAccessToken;

        if (!parichayAccessToken) {
            console.log("No Parichay access token found for this user.");
            return false;
        }

        const parichayResponse = await axios.get(
            `${BASE_URL}/api/auth/parichay/userdetails`,
            {
                headers: { Authorization: `${parichayAccessToken}` },
            }
        );

        if (parichayResponse.data?.status === "success") {
            return true;
        }

        return false;
    } catch (error) {
        console.error("Error fetching details:", error);
        return false;
    }
};

// ---------- Step 1: Redirect user to Parichay ----------
export async function loginWithParichay() {

    const checkParichayToken = await checkParichayTokenSession();
    if (checkParichayToken) {
        window.location.href = "/dashboard";
    }
    else {
        await redirectToParichay();
    }

}

async function redirectToParichay() {
    const { codeVerifier, codeChallenge } = await buildPkce();
    const state = crypto.randomUUID();

    // Save state + verifier for callback
    sessionStorage.setItem("parichay_code_verifier", codeVerifier);
    sessionStorage.setItem("parichay_state", state);

    const url = `${PARICHAY_BASE}/pnv1/oauth2/authorize` +
        `?response_type=code` +
        `&client_id=${encodeURIComponent(CLIENT_ID)}` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
        `&scope=${encodeURIComponent(SCOPE)}` +
        `&code_challenge_method=S256` +
        `&code_challenge=${encodeURIComponent(codeChallenge)}` +
        `&state=${encodeURIComponent(state)}`;

    window.location.href = url;
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

