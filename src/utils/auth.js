import { jwtDecode } from "jwt-decode";
import swal from "sweetalert";

export const isTokenValid = () => {

    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        localStorage.setItem("userId", decoded.userId);
        localStorage.setItem("email", decoded.sub);

        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.exp * 1000 > Date.now(); // valid if token not expired
    } catch (error) {
        console.error("Token or user validation failed:", error);
        swal({
            title: "Authentication Error",
            text: "Your session is invalid or expired. Please login again.",
            icon: "error",
            button: "OK",
        })
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
        return false;
    }
};
