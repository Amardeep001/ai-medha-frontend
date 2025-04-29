import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import indianFlag from "../../images/ind_flag.png";
import bgImg from "../../images/inibg.svg";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";

const Login = () => {
  const [loginWithEmail, setLoginWithEmail] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/auth/otp-verification");
  };

  const handleParichayLogin = () => {
    // navigate("/parichay-login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className=" w-full z-50 bg-white shadow-md text-[#003366]">
        {/* Top Header */}
        <div className="w-full bg-[#003366] text-white text-sm py-2">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 xl:px-20">
            <div className="flex items-center space-x-2">
              <img
                src={indianFlag || "/india-flag.png"}
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
                  to="/auth/register"
                  className="hover:text-[#FF9933] transition"
                >
                  Register
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

      {/* Login Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Login to AI MEDHA
          </h2>
          <p className="text-center text-gray-600 mt-2">Government AI Portal</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">
                {loginWithEmail ? "Email" : "Mobile Number"}
              </label>
              <input
                type={loginWithEmail ? "email" : "tel"}
                placeholder={
                  loginWithEmail
                    ? "Enter your email"
                    : "Enter your mobile number"
                }
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <p className="mt-2 text-right text-blue-900 font-semibold cursor-pointer hover:underline">
              <Link to="/auth/forgot-password">Forgot Password?</Link>
            </p>

            {/* Normal Login Button */}
            <button
              type="submit"
              className="w-full bg-[#FF9933] text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800 transition"
            >
              Login
            </button>

            {/* Parichay Login Button */}
            <button
              type="button"
              onClick={handleParichayLogin}
              className="w-full bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-700 transition"
            >
              Login with Parichay
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-blue-900 font-semibold">
              Register here
            </Link>
          </p>

          <p
            className="mt-4 text-center text-gray-700 cursor-pointer hover:underline"
            onClick={() => setLoginWithEmail(!loginWithEmail)}
          >
            {loginWithEmail ? "Login with Mobile Number" : "Login with Email"}
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
