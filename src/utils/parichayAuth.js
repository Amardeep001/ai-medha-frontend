import axios from "axios";
import swal from "sweetalert";
import { BASE_URL } from "../config/apiConfig";
import axiosInstance from "./axiosInstance";
axios.defaults.withCredentials = true;

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

const checkParichayTokenSession = async () => {
    try {
        // 1️⃣ Get logged-in user (using backend JWT cookie)
        const userResponse = await axiosInstance.get(`${BASE_URL}/api/auth/me`);

        const parichayAccessToken = userResponse.data?.parichayAccessToken;
        if (!parichayAccessToken) {
            console.log("No Parichay access token found for this user.");
            return false;
        }

        // 2️⃣ Validate Parichay token with your backend
        const parichayResponse = await axiosInstance.get(
            `${BASE_URL}/api/auth/parichay/userdetails`,
            {
                headers: { Authorization: parichayAccessToken },
            }
        );

        return parichayResponse.data?.status === "success";
    } catch (error) {
        console.error("Error fetching details:", error);
        return false;
    }
};

// ---------- Step 1: Redirect user to Parichay ----------
export async function loginWithParichay() {
    const isValid = await checkParichayTokenSession();
    if (isValid) {
        window.location.href = "/dashboard";
    } else {
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
export async function logout() {
    try {
        await axiosInstance.post(`${BASE_URL}/api/auth/logout`);
        localStorage.clear();
    } catch (error) {
        console.error("Logout failed:", error);

        swal.fire({
            icon: "error",
            title: "Logout Failed",
            text: error.response?.data?.message || "Something went wrong while logging out.",
            confirmButtonColor: "#d33"
        });
    }
}


