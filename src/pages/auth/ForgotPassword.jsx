import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import indianFlag from "../../images/ind_flag.png";
import bgImg from "../../images/inibg.svg";

const ForgotPassword = () => {
  const [useEmail, setUseEmail] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call for sending OTP or email verification code goes here
    navigate("/auth/verify-otp"); // Redirect to OTP Verification page
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/gov-bg.jpg')" }}
    >
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
              <Link
                to="/auth/login"
                className="hover:text-[#FF9933] transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Forgot Password Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Forgot Password?
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Enter your {useEmail ? "email" : "mobile number"} to receive a
            verification code.
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">
                {useEmail ? "Email" : "Mobile Number"}
              </label>
              <input
                type={useEmail ? "email" : "tel"}
                placeholder={
                  useEmail ? "Enter your email" : "Enter your mobile number"
                }
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800 transition"
            >
              Send Code
            </button>
          </form>

          <p
            className="mt-4 text-center text-gray-700 cursor-pointer hover:underline"
            onClick={() => setUseEmail(!useEmail)}
          >
            {useEmail ? "Use Mobile Number Instead" : "Use Email Instead"}
          </p>

          <p className="mt-4 text-center text-gray-700">
            Remembered your password?{" "}
            <Link to="/auth/login" className="text-blue-900 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForgotPassword;
