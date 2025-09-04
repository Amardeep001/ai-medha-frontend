import axios from "axios";
import swal from "sweetalert";
import { BASE_URL } from "../config/apiConfig";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // ✅ send HttpOnly cookies automatically
});

let isRefreshing = false; // prevent multiple refresh calls

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // another refresh is in progress → reject
                return Promise.reject(error);
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                await axios.post(`${BASE_URL}/api/auth/refresh`, {}, { withCredentials: true });

                isRefreshing = false;
                return axiosInstance(originalRequest); // retry once
            } catch (refreshError) {
                isRefreshing = false;
                console.error("Refresh token failed:", refreshError);

                swal({
                    title: "Session Expired",
                    text: "Your session has expired. Please log in again.",
                    icon: "error",
                    button: "OK",
                }).then(() => {
                    localStorage.clear();
                    window.location.href = "/auth/login";
                });
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
