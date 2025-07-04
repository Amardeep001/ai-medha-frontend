import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import bgImg from "../../images/inibg.svg";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";

const Login = () => {
  const [loginWithEmail, setLoginWithEmail] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

  const validate = (field, value) => {
    const newErrors = { ...errors };

    if (field === "emailOrPhone") {
      if (loginWithEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          newErrors.emailOrPhone = "Email is required";
        } else if (!emailRegex.test(value)) {
          newErrors.emailOrPhone = "Invalid email format";
        } else {
          delete newErrors.emailOrPhone;
        }
      } else {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!value) {
          newErrors.emailOrPhone = "Mobile number is required";
        } else if (!phoneRegex.test(value)) {
          newErrors.emailOrPhone = "Invalid mobile number";
        } else {
          delete newErrors.emailOrPhone;
        }
      }
    }

    if (field === "password") {
      if (!value) {
        newErrors.password = "Password is required";
      } else if (!strongPasswordRegex.test(value)) {
        newErrors.password =
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (field, value) => {
    console.log("hello", "inee19");
    if (field === "emailOrPhone") setEmailOrPhone(value);
    if (field === "password") setPassword(value);

    setTouched((prev) => ({ ...prev, [field]: true }));
    validate(field, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      emailOrPhone: true,
      password: true,
    });

    // Validate all fields
    validate("emailOrPhone", emailOrPhone);
    validate("password", password);

    // After short delay (to ensure state update), check for errors
    setTimeout(() => {
      const currentErrors = {};
      if (loginWithEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailOrPhone) {
          currentErrors.emailOrPhone = "Email is required";
        } else if (!emailRegex.test(emailOrPhone)) {
          currentErrors.emailOrPhone = "Invalid email format";
        }
      } else {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!emailOrPhone) {
          currentErrors.emailOrPhone = "Mobile number is required";
        } else if (!phoneRegex.test(emailOrPhone)) {
          currentErrors.emailOrPhone = "Invalid mobile number";
        }
      }

      if (!password) {
        currentErrors.password = "Password is required";
      } else if (password.length < 6) {
        currentErrors.password = "Password must be at least 6 characters";
      }

      if (!password) {
        currentErrors.password = "Password is required";
      } else if (!strongPasswordRegex.test(password)) {
        currentErrors.password =
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
      }

      setErrors(currentErrors);

      if (Object.keys(currentErrors).length === 0) {
        console.log("Form submitted:", { emailOrPhone, password });
        navigate("/auth/otp-verification");
        // proceed with login
      } else {
        console.log("Validation failed:", currentErrors);
      }
    }, 0);
  };

  const handleParichayLogin = () => {
    // Your Parichay login logic
  };

  const isValid = (field) => {
    return (
      touched[field] &&
      !errors[field] &&
      ((field === "emailOrPhone" && emailOrPhone.trim() !== "") ||
        (field === "password" && password.trim() !== ""))
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow-md text-[#003366]">
        {/* Top Header */}
        <Navbar />

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
        className="flex-grow flex items-center justify-center bg-cover pt-48 pb-16"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Login to AI MEDHA
          </h2>
          <p className="text-center text-gray-600 mt-2">Government AI Portal</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email or Phone */}
            <div className="relative">
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
                value={emailOrPhone}
                onChange={(e) => handleChange("emailOrPhone", e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, emailOrPhone: true }))
                }
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  errors.emailOrPhone
                    ? "border-red-500 focus:ring-red-300"
                    : isValid("emailOrPhone")
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              />
              {isValid("emailOrPhone") && (
                <FaCheckCircle className="absolute right-3 top-10 text-green-500" />
              )}
              {touched.emailOrPhone && errors.emailOrPhone && (
                <FaTimesCircle className="absolute right-3 top-10 text-red-500" />
              )}
              {touched.emailOrPhone && errors.emailOrPhone && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  {errors.emailOrPhone}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 relative">
              <label className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => handleChange("password", e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  errors.password
                    ? "border-red-500 focus:ring-red-300"
                    : isValid("password")
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              />
              {isValid("password") && (
                <FaCheckCircle className="absolute right-3 top-10 text-green-500" />
              )}
              {touched.password && errors.password && (
                <FaTimesCircle className="absolute right-3 top-10 text-red-500" />
              )}
              {touched.password && errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  {errors.password}
                </p>
              )}
            </div>

            <p className="mt-2 text-right text-blue-900 font-semibold cursor-pointer hover:underline">
              <Link to="/auth/forgot-password">Forgot Password?</Link>
            </p>

            <button
              type="submit"
              className="w-full bg-[#FF9933] text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800 transition"
            >
              Login
            </button>

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
            onClick={() => {
              setLoginWithEmail((prev) => !prev);
              setEmailOrPhone("");
              setErrors({});
              setTouched({});
            }}
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
