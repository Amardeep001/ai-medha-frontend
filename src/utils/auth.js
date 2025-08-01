import { jwtDecode } from "jwt-decode";

export const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        localStorage.setItem("userId", decoded.userId);
        localStorage.setItem("email", decoded.sub);
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.exp * 1000 > Date.now(); // valid if token not expired
    } catch (err) {
        return false;
    }
};
