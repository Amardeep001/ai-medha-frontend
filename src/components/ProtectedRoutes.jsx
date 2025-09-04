import { Navigate, Outlet, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get("/api/auth/me");

        localStorage.setItem("firstName", response.data.firstName || "");
        localStorage.setItem("userId", response.data.userId || "");

        setIsLoggedIn(true);
      } catch (error) {
        console.error("Auth check failed:", error);

        if (error.response?.status === 401) {
          // Let interceptor handle refresh → retry will resolve
          return;
        } else {
          swal({
            title: "Authentication Error",
            text: "Your session is invalid or expired. Please login again.",
            icon: "error",
            button: "OK",
          }).then(() => {
            navigate("/auth/login");
          });
          setIsLoggedIn(false);
        }
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoggedIn === null) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoutes;
