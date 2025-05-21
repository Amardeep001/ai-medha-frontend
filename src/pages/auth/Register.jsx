import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import indianFlag from "../../images/ind_flag.png";
import bgImg from "../../images/inibg.svg";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";
import TermsAndConditions from "../../assets/Terms-and-Conditions.pdf";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    orgType: "",
    agree: false,
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validate = (field, value) => {
    // eslint-disable-next-line default-case
    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "This field is required.";
        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Enter a valid email.";
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) return "Enter a 10-digit mobile number.";
        break;
      case "password":
        if (!strongPasswordRegex.test(value)) {
          return "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
        }
        break;
      case "orgType":
        if (!value) return "Select an organization type.";
        break;
      case "agree":
        if (!value) return "You must agree before submitting.";
        break;
    }
    return "";
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validate(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validate(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validate(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );

    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log("Form submitted!", formData);
      navigate("/auth/verify-account");
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
        <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center px-6 xl:px-20 py-4 ">
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

      {/* Registration Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-48 pb-16 "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Register for AI MEDHA
          </h2>
          <p className="text-center text-gray-600 mt-2">Government AI Portal</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="relative mt-4">
              <label className="block text-gray-700 font-semibold">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                onBlur={() => handleBlur("firstName")}
                placeholder="Enter your first name"
                className={`w-full px-4 py-2 mt-2 border rounded-md pr-10 focus:ring ${
                  errors.firstName
                    ? "border-red-500 focus:ring-red-300"
                    : touched.firstName && !errors.firstName
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              />
              {touched.firstName && !errors.firstName && (
                <FaCheckCircle className="absolute right-3 top-11 text-green-500" />
              )}
              {touched.firstName && errors.firstName && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaTimesCircle className="text-red-500" /> {errors.firstName}
                </p>
              )}
            </div>

            {/* Middle Name (optional) */}
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Middle Name
              </label>
              <input
                type="text"
                value={formData.middleName}
                onChange={(e) => handleChange("middleName", e.target.value)}
                placeholder="Enter your middle name (optional)"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Last Name */}
            <div className="relative mt-4">
              <label className="block text-gray-700 font-semibold">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                onBlur={() => handleBlur("lastName")}
                placeholder="Enter your last name"
                className={`w-full px-4 py-2 mt-2 border rounded-md pr-10 focus:ring ${
                  errors.lastName
                    ? "border-red-500 focus:ring-red-300"
                    : touched.lastName && !errors.lastName
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              />
              {touched.lastName && !errors.lastName && (
                <FaCheckCircle className="absolute right-3 top-11 text-green-500" />
              )}
              {touched.lastName && errors.lastName && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaTimesCircle className="text-red-500" /> {errors.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative mt-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="Enter your email address"
                className={`w-full px-4 py-2 mt-2 border rounded-md pr-10 focus:ring ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : touched.email && !errors.email
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              />
              {touched.email && !errors.email && (
                <FaCheckCircle className="absolute right-3 top-11 text-green-500" />
              )}
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaTimesCircle className="text-red-500" /> {errors.email}
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div className="relative mt-4">
              <label className="block text-gray-700 font-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                placeholder="Enter 10-digit mobile number"
                className={`w-full px-4 py-2 mt-2 border rounded-md pr-10 focus:ring ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-300"
                    : touched.phone && !errors.phone
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              />
              {touched.phone && !errors.phone && (
                <FaCheckCircle className="absolute right-3 top-11 text-green-500" />
              )}
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaTimesCircle className="text-red-500" /> {errors.phone}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative mt-4">
              <label className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                onBlur={() => handleBlur("password")}
                placeholder="Enter a strong password"
                className={`w-full px-4 py-2 mt-2 border rounded-md pr-10 focus:ring ${
                  errors.password
                    ? "border-red-500 focus:ring-red-300"
                    : touched.password && !errors.password
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              />
              {touched.password && !errors.password && (
                <FaCheckCircle className="absolute right-3 top-11 text-green-500" />
              )}
              {touched.password && errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaTimesCircle className="text-red-500" /> {errors.password}
                </p>
              )}
            </div>

            {/* Organization Type */}
            <div className="relative mt-4">
              <label className="block text-gray-700 font-semibold">
                Organization Type
              </label>
              <select
                value={formData.orgType}
                onChange={(e) => handleChange("orgType", e.target.value)}
                onBlur={() => handleBlur("orgType")}
                className={`w-full px-4 py-2 mt-2 border rounded-md pr-10 focus:ring ${
                  errors.orgType
                    ? "border-red-500 focus:ring-red-300"
                    : touched.orgType && !errors.orgType
                    ? "border-green-500 focus:ring-green-300"
                    : "focus:ring-blue-300"
                }`}
              >
                <option value="">Select Organization Type</option>
                <option value="government">Central Government</option>
                <option value="private">State/UT Government</option>
                <option value="academic">PSU</option>
                <option value="ngo">Judiciary</option>
                <option value="other">Other</option>
              </select>
              {touched.orgType && errors.orgType && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaTimesCircle className="text-red-500" /> {errors.orgType}
                </p>
              )}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="mt-6">
              <label className="inline-flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => handleChange("agree", e.target.checked)}
                  onBlur={() => handleBlur("agree")}
                  className="mt-1"
                />
                <span className="text-sm text-gray-700">
                  I have read and agree to the{" "}
                  <a
                    href={TermsAndConditions || "/terms-of-service.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Terms of Services
                  </a>{" "}
                  and confirm my{" "}
                  <span className="relative group cursor-pointer text-blue-700 underline hover:text-blue-900">
                    Eligibility
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden w-max rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200 z-10">
                      I am 18+ years of age.
                    </span>
                  </span>{" "}
                  to use this platform.
                </span>
              </label>
              {touched.agree && errors.agree && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaTimesCircle className="text-red-500" /> {errors.agree}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800 transition"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-900 font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
