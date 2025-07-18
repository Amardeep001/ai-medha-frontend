import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import bgImg from "../../images/inibg.svg";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";

const ForgotOtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    navigate("/auth/reset-password");
  };

  const handleResendOTP = () => {
    setResendDisabled(true);
    setTimeout(() => setResendDisabled(false), 60000); // Enable after 60 seconds
    console.log("OTP Resent");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/gov-bg.jpg')" }}
    >
      <HeaderBeforeLogin />

      {/* OTP Verification Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-16 pb-16"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Verify Your Account
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Enter the OTP sent to your email or mobile
          </p>

          <form className="mt-6" onSubmit={handleOTPSubmit}>
            <div className="relative">
              <label className="block text-gray-700 font-semibold">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value;
                  setOtp(value);
                  setIsOtpValid(/^\d{6}$/.test(value));
                }}
                placeholder="Enter your OTP"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  isOtpValid ? "border-green-500" : otp ? "border-red-500" : ""
                }`}
              />
              {otp &&
                (isOtpValid ? (
                  <FaCheckCircle className="text-green-500 absolute top-10 right-3 text-xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 absolute top-10 right-3 text-xl" />
                ))}

              {!isOtpValid && otp && (
                <p className="text-red-500 text-sm mt-1">
                  OTP must be a 6-digit number.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isOtpValid}
              className={`w-full px-4 py-2 mt-6 rounded-md transition ${
                isOtpValid
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Verify OTP
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Didn't receive an OTP?{" "}
            <button
              onClick={handleResendOTP}
              className={`text-blue-900 font-semibold ${
                resendDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={resendDisabled}
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForgotOtpVerification;
