import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [useEmail, setUseEmail] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call for sending OTP or email verification code goes here
    navigate("/verify-otp"); // Redirect to OTP Verification page
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: "url('/gov-bg.jpg')" }}>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 xl:px-20">
          <h1 className="text-2xl font-bold">AI MEDHA</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
          </ul>
        </div>
      </nav>

      {/* Forgot Password Form */}
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-800 to-white">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">Forgot Password?</h2>
          <p className="text-center text-gray-600 mt-2">Enter your {useEmail ? "email" : "mobile number"} to receive a verification code.</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">{useEmail ? "Email" : "Mobile Number"}</label>
              <input type={useEmail ? "email" : "tel"} placeholder={useEmail ? "Enter your email" : "Enter your mobile number"} className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" required />
            </div>

            <button type="submit" className="w-full bg-blue-900 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800 transition">
              Send Code
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700 cursor-pointer hover:underline" onClick={() => setUseEmail(!useEmail)}>
            {useEmail ? "Use Mobile Number Instead" : "Use Email Instead"}
          </p>

          <p className="mt-4 text-center text-gray-700">
            Remembered your password? <Link to="/login" className="text-blue-900 font-semibold">Login</Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; 2025 AI MEDHA. All Rights Reserved.</p>
        <p><Link to="/contact" className="underline">Contact Us</Link></p>
      </footer>
    </div>
  );
};

export default ForgotPassword;
