import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import OtpVerification from "./pages/auth/OtpVerification";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyAccount from "./pages/auth/VerifyAccount";
import ForgotOtpVerification from "./pages/auth/ForgotOtpVerification";
import DashboardLayout from "./layout/DashboardLayout";
import OverviewPage from "./pages/OverviewPage";
import AiNibhritDetailPage from "./pages/AINibhritDetailPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ServicesPage from "./pages/ServicesPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import ModelDetailPage from "./pages/ModelDetailPage";
import AiPaniniDetailPage from "./pages/AiPaniniDetailPage";
import AiShrutiDetailPage from "./pages/AiShrutiDetailPage";
import AiMatraDetailPage from "./pages/AiMatraDetailPage";
import AIParkhi from "./pages/AiParkhiDetailPage";
import AiVihangamDrishtiDetail from "./pages/AiVihangamDrishtiDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/verify-account" element={<VerifyAccount />} />
        <Route path="auth/otp-verification" element={<OtpVerification />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />
        <Route path="auth/verify-otp" element={<ForgotOtpVerification />} />
        <Route path="auth/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<OverviewPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/services/ai_nibhrit" element={<AiNibhritDetailPage />} />
        <Route path="/services/ai_panini" element={<AiPaniniDetailPage />} />
        <Route path="/services/ai_shruti" element={<AiShrutiDetailPage />} />
        <Route path="/services/ai_matra" element={<AiMatraDetailPage />} />
        <Route path="/services/ai_parkhi" element={<AIParkhi />} />
        <Route path="/services/ai_vihangam_drishti" element={<AiVihangamDrishtiDetail />} />
        <Route path="services/model/:modelId" element={<ModelDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
