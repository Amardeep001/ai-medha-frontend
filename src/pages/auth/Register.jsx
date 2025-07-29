import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import bgImg from "../../images/inibg.svg";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";
import { BASE_URL } from "../../config/apiConfig";
import swal from "sweetalert";

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
  const [loading, setLoading] = useState(false);

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
        if (!/^[1-9][0-9]{9}$/.test(value))
          return "Enter a valid 10-digit phone number not starting with 0.";
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

  const handleSubmit = async (e) => {
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
      try {
        setLoading(true);
        const payload = {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          orgType: formData.orgType,
        };

        const response = await axios.post(
          `${BASE_URL}/api/auth/register`,
          payload
        );

        console.log("Registration Success:", response.data);
        if (response.data?.status === "success") {
          localStorage.setItem("email", formData.email);
          localStorage.setItem("phone", formData.phone);
          localStorage.setItem("firstName", formData.firstName);
          localStorage.setItem("lastName", formData.lastName);
          localStorage.setItem("orgType", formData.orgType);
          navigate("/auth/verify-account");
        } else {
          swal({
            title: "Invalid Email",
            text: "Email already exist. Please Login",
            icon: "error",
            button: "Retry",
          });
        }
        // Redirect to OTP verification or next step
      } catch (error) {
        console.error(
          "Registration Failed:",
          error.response?.data || error.message
        );

        // Optional: show error to user
        alert(
          "Registration failed: " +
            (error.response?.data?.message || error.message)
        );
      } finally {
        setLoading(false);
      }

      // console.log("Form submitted!", formData);
      // navigate("/auth/verify-account");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <HeaderBeforeLogin />

      {/* Registration Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-16 pb-16 "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg border-t-4 border-yellow-500">
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
                  <Link
                    to={"/terms-of-services"}
                    target="_blank"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Terms of Services
                  </Link>{" "}
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
              className="w-full bg-blue-900 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800 transition flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Registering...
                </span>
              ) : (
                "Register"
              )}
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
