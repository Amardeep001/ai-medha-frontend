import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";
import swal from "sweetalert";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = checking, true/false after check

  useEffect(() => {
    const checkAuth = async () => {
      const valid = await isTokenValid();
      if (!valid) {
        setIsLoggedIn(false);
        swal({
          title: "Authentication Error",
          text: "Your session is invalid or expired. Please login again.",
          icon: "error",
          button: "OK",
        });
        return;
      }

      const userId = localStorage.getItem("userId");

      // Skip API call if userId is missing
      if (!userId) {
        setIsLoggedIn(false);
        return;
      }

      try {
        const response = await axiosInstance.get(`/api/auth/user/${userId}`);
        const userData = response.data;

        localStorage.setItem("firstName", userData.firstName || "");
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Fetching user details failed:", error);

        swal({
          title: "Error!",
          text: "Unable to fetch user details",
          icon: "error",
          button: "OK",
        }).then(() => {
          navigate("/auth/login");
        });
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoggedIn === null) {
    // Optional: loader until check completes
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoutes;
