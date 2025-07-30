import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import bgImg from "../../images/inibg.svg";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("admin@aimedha.gov.in");
  const [password, setPassword] = useState("Admin@1234");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <HeaderBeforeLogin />

      {/* Login Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-16 pb-16"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Admin Login
          </h2>

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold">
                Admin Email
              </label>
              <input
                type="email"
                value={emailOrPhone}
                readOnly
                className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-100 rounded-md text-gray-600 cursor-not-allowed"
              />
            </div>

            {/* Password */}
            <div className="mt-4 relative">
              <label className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                value={password}
                readOnly
                className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-100 rounded-md text-gray-600 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 mt-6 rounded-md transition flex justify-center items-center gap-2 ${
                loading
                  ? "bg-orange-400 cursor-not-allowed"
                  : "bg-[#FF9933] hover:bg-blue-800"
              } text-white`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminLogin;
