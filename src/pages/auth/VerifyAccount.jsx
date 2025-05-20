import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import indianFlag from "../../images/ind_flag.png";
import bgImg from "../../images/inibg.svg";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";

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
      <nav className="fixed w-full z-50 bg-white shadow-md text-[#003366]">
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
          <div className="flex items-center space-x-6">
            <img
              src={NicLogo}
              alt="Logo"
              className="w-[200px] object-contain" // increased to h-32 w-32
            />
            <h1 className="text-2xl font-bold">AI MEDHA</h1>
          </div>
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

      {/* Verification Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-48 pb-16"
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

          {/* <p className="mt-4 text-center text-gray-700">
            Didn't receive the code?{" "}
            <button className="text-blue-900 font-semibold">Resend Code</button>
          </p> */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VerifyAccount;
