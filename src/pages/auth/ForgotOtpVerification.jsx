import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import indianFlag from "../../images/ind_flag.png";
import bgImg from "../../images/inibg.svg";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";

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
      <nav className=" w-full z-50 bg-white shadow-md text-[#003366]">
        {/* Top Header */}
        <div className="w-full bg-[#003366] text-white text-sm py-2">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 xl:px-20">
            <div className="flex items-center space-x-2">
              <img
                src={indianFlag}
                alt="Indian Flag"
                className="w-6 h-4 sm:h-6"
              />
              <span className="font-medium text-xs sm:text-sm hover:text-[#B35400]">
                भारत सरकार | <span className="ml-1">Government of India</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#main-content" className="underline">
                Skip to Content
              </a>
              <div className="flex items-center space-x-3">
                <button className="text-base font-semibold">A+</button>
                <button className="text-base font-semibold">A</button>
                <button className="text-base font-semibold">A-</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center px-6 xl:px-20 py-4">
          <Link to="/">
            <div className="flex items-center space-x-6">
              <img
                src={NicLogo}
                alt="Logo"
                className="w-[200px] object-contain" // increased to h-32 w-32
              />
              <h1 className="text-2xl font-bold">AI MEDHA</h1>
            </div>
          </Link>
          <div className="flex items-center space-x-6">
            <ul className="flex flex-wrap space-x-6">
              <li>
                <Link to="/" className="hover:text-[#FF9933] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/auth/login"
                  className="hover:text-[#FF9933] transition"
                >
                  Login
                </Link>
              </li>
            </ul>
            {/* Image on the Right Side */}
            <img
              src={NicLogo2}
              alt="Right Logo"
              className="w-[160px] object-contain"
            />
          </div>
        </div>
      </nav>

      {/* OTP Verification Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover"
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
