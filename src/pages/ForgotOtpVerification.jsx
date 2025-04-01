import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import indianFlag from "../images/ind_flag.png";
import bgImg from "../images/inibg.svg";

const ForgotOtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    navigate("/reset-password");
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
      {/* Navbar */}
      {/* <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 xl:px-20">
          <h1 className="text-2xl font-bold">AI MEDHA</h1>
        </div>
      </nav> */}

      <nav className=" w-full z-50 bg-white shadow-md text-[#003366]">
        {/* Top Header */}
        <div className="w-full bg-[#003366] text-white text-sm py-2">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 xl:px-20">
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
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-6 xl:px-20 py-4">
          <h1 className="text-2xl font-bold">AI MEDHA</h1>
          <ul className="flex flex-wrap space-x-6">
            <li>
              <Link to="/" className="hover:text-[#FF9933] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-[#FF9933] transition">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* OTP Verification Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover "
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
            <div>
              <label className="block text-gray-700 font-semibold">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter your OTP"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800 transition"
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
