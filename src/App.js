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
import AiNibhritDetailPage from "./pages/serviceDetailPages/AINibhritDetailPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ServicesPage from "./pages/ServicesPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import ModelDetailPage from "./pages/ModelDetailPage";
import AiPaniniDetailPage from "./pages/serviceDetailPages/AiPaniniDetailPage";
import AiShrutiDetailPage from "./pages/serviceDetailPages/AiShrutiDetailPage";
import AiMatraDetailPage from "./pages/serviceDetailPages/AiMatraDetailPage";
import AiParkhiDetail from "./pages/serviceDetailPages/AiParkhiDetailPage";
import AiVihangamDrishtiDetail from "./pages/serviceDetailPages/AiVihangamDrishtiDetailPage";
import AiAnveshikaDetail from "./pages/serviceDetailPages/AiAnveshikaPage";
import AiSatyapikaananDetailPage from "./pages/serviceDetailPages/AiSatyapikaananDetailPage";
import AiVaniDetailPage from "./pages/serviceDetailPages/AiVaniDetailPage";
import AiSaranshDetailPage from "./pages/serviceDetailPages/AiSaranshDetailPage";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import ExploreServices from "./pages/ExploreServices";
import FirstTimeProfileForm from "./pages/OnBoardingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore-services" element={<ExploreServices />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/verify-account" element={<VerifyAccount />} />
        <Route path="auth/otp-verification" element={<OtpVerification />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />
        <Route path="auth/verify-otp" element={<ForgotOtpVerification />} />
        <Route path="auth/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding" element={<FirstTimeProfileForm />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<OverviewPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/services/ai_nibhrit" element={<AiNibhritDetailPage />} />
        <Route path="/services/ai_panini" element={<AiPaniniDetailPage />} />
        <Route path="/services/ai_vani" element={<AiVaniDetailPage />} />
        <Route path="/services/ai_shruti" element={<AiShrutiDetailPage />} />
        <Route path="/services/ai_matra" element={<AiMatraDetailPage />} />
        <Route path="/services/ai_parkhi" element={<AiParkhiDetail />} />
        <Route path="/services/ai_vihangam_drishti" element={<AiVihangamDrishtiDetail />} />
        <Route path="/services/ai_satyapikaanan" element={<AiSatyapikaananDetailPage />} />
        <Route path="/services/ai_anveshika" element={<AiAnveshikaDetail />} />
        <Route path="/services/ai_saransh" element={<AiSaranshDetailPage />} />
        <Route path="services/model/:modelId" element={<ModelDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
