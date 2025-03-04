import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // API call to update the password goes here
    alert("Password reset successfully!");
    navigate("/login"); // Redirect to login page after reset
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

      {/* Reset Password Form */}
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-800 to-white">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">Reset Password</h2>
          <p className="text-center text-gray-600 mt-2">Enter a new password for your account.</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">New Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" 
                placeholder="Enter new password"
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Confirm Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" 
                placeholder="Confirm new password"
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <button type="submit" className="w-full bg-blue-900 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800 transition">
              Reset Password
            </button>
          </form>

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

export default ResetPassword;
