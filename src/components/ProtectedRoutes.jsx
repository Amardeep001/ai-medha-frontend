import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "../utils/auth";
import swal from "sweetalert";
import axiosInstance from "../utils/axiosInstance";

const ProtectedRoutes = () => {
  const isLoggedIn = isTokenValid();

  const userDetailsApi = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await axiosInstance.get(`/api/auth/user/${userId}`);
      const userData = response.data;

      localStorage.setItem("firstName", userData.firstName || "");
      return true;
    } catch (error) {
      console.error("Token or user validation failed:", error);

      swal({
        title: "Authentication Error",
        text: "Your session is invalid or expired. Please login again.",
        icon: "error",
        button: "OK",
      });

      localStorage.clear();
    }
  };

  if (isLoggedIn) {
    userDetailsApi();
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoutes;
