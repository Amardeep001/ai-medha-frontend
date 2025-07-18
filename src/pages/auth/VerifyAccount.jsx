import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import bgImg from "../../images/inibg.svg";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";

const VerifyAccount = () => {
  const navigate = useNavigate();
  const [emailCode, setEmailCode] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const isEmailCodeValid = emailCode.length === 6;
  const isMobileOtpValid = /^[0-9]{6}$/.test(mobileOtp);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailCodeValid && isMobileOtpValid) {
      navigate("/auth/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <HeaderBeforeLogin />

      {/* Verification Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-16 pb-16"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Verify Your Account
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Enter the OTP and verification code sent to your mobile and email.
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email Verification Code */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold">
                Email Verification Code
              </label>
              <input
                type="text"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                placeholder="Enter the code sent to your email"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  isEmailCodeValid
                    ? "border-green-500"
                    : emailCode
                    ? "border-red-500"
                    : ""
                }`}
              />
              {emailCode &&
                (isEmailCodeValid ? (
                  <FaCheckCircle className="text-green-500 absolute top-10 right-3 text-xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 absolute top-10 right-3 text-xl" />
                ))}
              {!isEmailCodeValid && emailCode && (
                <p className="text-red-500 text-sm mt-1">
                  Code must be 6 digits
                </p>
              )}
              <button
                type="button"
                className="mt-2 text-sm text-blue-900 underline hover:text-blue-700"
              >
                Resend Email Code
              </button>
            </div>

            {/* Mobile OTP */}
            <div className="mt-4 relative">
              <label className="block text-gray-700 font-semibold">
                Mobile OTP
              </label>
              <input
                type="text"
                value={mobileOtp}
                onChange={(e) => setMobileOtp(e.target.value)}
                placeholder="Enter the OTP sent to your mobile"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  isMobileOtpValid
                    ? "border-green-500"
                    : mobileOtp
                    ? "border-red-500"
                    : ""
                }`}
              />
              {mobileOtp &&
                (isMobileOtpValid ? (
                  <FaCheckCircle className="text-green-500 absolute top-10 right-3 text-xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 absolute top-10 right-3 text-xl" />
                ))}
              {!isMobileOtpValid && mobileOtp && (
                <p className="text-red-500 text-sm mt-1">
                  OTP must be 6 digits
                </p>
              )}
              <button
                type="button"
                className="mt-2 text-sm text-blue-900 underline hover:text-blue-700"
              >
                Resend Mobile OTP
              </button>
            </div>

            <button
              type="submit"
              disabled={!(isEmailCodeValid && isMobileOtpValid)}
              className={`w-full px-4 py-2 mt-6 rounded-md transition ${
                isEmailCodeValid && isMobileOtpValid
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Verify Account
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VerifyAccount;
