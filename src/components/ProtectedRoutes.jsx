// components/ProtectedRoutes.jsx
import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "../utils/auth";

const ProtectedRoutes = () => {
  const isLoggedIn = isTokenValid();
  // {
  //   /* <Navigate to="/auth/login" replace /> */
  // }
  return isLoggedIn ? <Outlet /> : <Outlet />;
};

export default ProtectedRoutes;
