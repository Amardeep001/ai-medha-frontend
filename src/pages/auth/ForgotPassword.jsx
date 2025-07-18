import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import bgImg from "../../images/inibg.svg";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";

const ForgotPassword = () => {
  const [useEmail, setUseEmail] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Basic validation logic
    if (useEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailRegex.test(value));
    } else {
      const mobileRegex = /^[0-9]{10}$/;
      setIsValid(mobileRegex.test(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Call API or continue to next step
      console.log("Send code to:", inputValue);
      navigate("/auth/verify-otp");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/gov-bg.jpg')" }}
    >
      <HeaderBeforeLogin />

      {/* Forgot Password Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-16 pb-16"
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
            <div className="relative">
              <label className="block text-gray-700 font-semibold">
                {useEmail ? "Email" : "Mobile Number"}
              </label>
              <input
                type={useEmail ? "email" : "tel"}
                placeholder={
                  useEmail ? "Enter your email" : "Enter your mobile number"
                }
                value={inputValue}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  isValid
                    ? "border-green-500"
                    : inputValue
                    ? "border-red-500"
                    : ""
                }`}
              />
              {/* Icon */}
              {inputValue &&
                (isValid ? (
                  <FaCheckCircle className="text-green-500 absolute top-10 right-3 text-xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 absolute top-10 right-3 text-xl" />
                ))}

              {/* Error Message */}
              {!isValid && inputValue && (
                <p className="text-red-500 text-sm mt-1">
                  {useEmail
                    ? "Please enter a valid email address."
                    : "Please enter a valid 10-digit mobile number."}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full px-4 py-2 mt-4 rounded-md transition ${
                isValid
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Send Code
            </button>
          </form>

          <p
            className="mt-4 text-center text-gray-700 cursor-pointer hover:underline"
            onClick={() => {
              setUseEmail(!useEmail);
              setInputValue("");
              setIsValid(false);
            }}
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
