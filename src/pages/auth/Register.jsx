import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import indianFlag from "../../images/ind_flag.png";
import bgImg from "../../images/inibg.svg";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/auth/verify-account");
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

      {/* Registration Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-52 pb-20 "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Register for AI MEDHA
          </h2>
          <p className="text-center text-gray-600 mt-2">Government AI Portal</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Middle Name
              </label>
              <input
                type="text"
                placeholder="Enter your middle name (optional)"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]{10}"
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
                placeholder="Enter a strong password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Organization Type
              </label>
              <select
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              >
                <option value="">Select Organization Type</option>
                <option value="government">Central Government</option>
                <option value="private">State/UT Government</option>
                <option value="academic">PSU</option>
                <option value="ngo">Judiciary</option>
                <option value="other">Other</option>
              </select>
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
