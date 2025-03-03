import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginWithEmail, setLoginWithEmail] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add API call for authentication here
    navigate("/otp-verification"); // Redirect to OTP verification page
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: "url('/gov-bg.jpg')" }}>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 xl:px-20">
          <h1 className="text-2xl font-bold">AI Medha</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/register" className="hover:text-yellow-400">Register</Link></li>
          </ul>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-800 to-white">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">Login to AI Medha</h2>
          <p className="text-center text-gray-600 mt-2">Government AI Portal</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">{loginWithEmail ? "Email" : "Mobile Number"}</label>
              <input type={loginWithEmail ? "email" : "tel"} placeholder={loginWithEmail ? "Enter your email" : "Enter your mobile number"} className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" required />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" required />
            </div>
            <p className="mt-2 text-right text-blue-900 font-semibold cursor-pointer hover:underline">
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
            <button type="submit" className="w-full bg-blue-900 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800 transition">
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Don't have an account? <Link to="/register" className="text-blue-900 font-semibold">Register here</Link>
          </p>

          <p className="mt-4 text-center text-gray-700 cursor-pointer hover:underline" onClick={() => setLoginWithEmail(!loginWithEmail)}>
            {loginWithEmail ? "Login with Mobile Number" : "Login with Email"}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; 2025 AI Medha. All Rights Reserved.</p>
        <p><Link to="/contact" className="underline">Contact Us</Link></p>
      </footer>
    </div>
  );
};

export default Login;
