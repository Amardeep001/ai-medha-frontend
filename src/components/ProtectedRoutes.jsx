import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "../utils/auth";
import axios from "axios";
import swal from "sweetalert";
import { BASE_URL } from "../config/apiConfig";

const ProtectedRoutes = () => {
  const isLoggedIn = isTokenValid();

  const userDetailsApi = async () => {
    try {
      const userId = localStorage.getItem("userId");

      // Fetch user details
      const response = await axios.get(`${BASE_URL}/api/auth/user/${userId}`);
      const userData = response.data;

      localStorage.setItem("firstName", userData.firstName || "");

      return true;
    } catch (error) {
      console.error("Token or user validation failed:", error);

      // Show SweetAlert error popup
      swal({
        title: "Authentication Error",
        text: "Your session is invalid or expired. Please login again.",
        icon: "error",
        button: "OK",
      });

      // Optional: clear localStorage
      localStorage.clear();
    }
  };

  if (isLoggedIn) {
    userDetailsApi();
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoutes;
