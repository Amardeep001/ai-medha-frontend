import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import bgImg from "../../images/inibg.svg";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false,
  });
  const [submitted, setSubmitted] = useState(false);
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
      <HeaderBeforeLogin />

      {/* Reset Password Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-16 pb-16"
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
