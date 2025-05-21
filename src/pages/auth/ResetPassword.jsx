import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import indianFlag from "../../images/ind_flag.png";
import bgImg from "../../images/inibg.svg";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pwd);

  const isPasswordValid = validatePassword(password);
  const isConfirmValid = password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ password: true, confirmPassword: true });
    setSubmitted(true);

    const validPassword = validatePassword(password);
    const validConfirm = password === confirmPassword;

    if (!validPassword || !validConfirm) {
      return; // prevent submission if validation fails
    }

    alert("Password reset successfully!");
    navigate("/auth/login"); // Redirect to login page after reset
    // Proceed with password reset logic
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

      {/* Reset Password Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Reset Password
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Enter a new password for your account.
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* New Password Field */}
            <div>
              <label className="block text-gray-700 font-semibold">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                    touched.password &&
                    (isPasswordValid ? "border-green-500" : "border-red-500")
                  }`}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, password: true }))
                  }
                />
                {touched.password && (
                  <span className="absolute right-3 top-4 text-lg">
                    {isPasswordValid ? "✅" : "❌"}
                  </span>
                )}
              </div>
              {(touched.password || submitted) && !isPasswordValid && (
                <p className="text-sm text-red-600 mt-1">
                  Password must be at least 8 characters, include 1 uppercase
                  letter, 1 lowercase letter, 1 number, and 1 special character.
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                    touched.confirmPassword &&
                    (isConfirmValid ? "border-green-500" : "border-red-500")
                  }`}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, confirmPassword: true }))
                  }
                />
                {touched.confirmPassword && (
                  <span className="absolute right-3 top-4 text-lg">
                    {isConfirmValid ? "✅" : "❌"}
                  </span>
                )}
              </div>
              {(touched.confirmPassword || submitted) && !isConfirmValid && (
                <p className="text-sm text-red-600 mt-1">
                  Passwords do not match.
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full px-4 py-2 mt-4 rounded-md transition text-white ${
                isPasswordValid
                  ? "bg-blue-900 hover:bg-blue-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isPasswordValid}
            >
              Reset Password
            </button>
          </form>

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

export default ResetPassword;
