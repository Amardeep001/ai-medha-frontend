// src/components/ProtectedRoutes.js
import React from "react";
import { useDevAccess } from "../context/DevAccessContext";
import DevPasswordGate from "../pages/DevPasswordGate";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { hasAccess } = useDevAccess();

  return hasAccess ? <Outlet /> : <DevPasswordGate />;
};

export default ProtectedRoutes;
