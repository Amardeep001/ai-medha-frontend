import React from "react";
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-account");
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-between" style={{ backgroundImage: "url('/gov-bg.jpg')" }}>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 xl:px-20">
          <h1 className="text-2xl font-bold">AI Medha</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
          </ul>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-800 to-white py-10">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">Register for AI Medha</h2>
          <p className="text-center text-gray-600 mt-2">Government AI Portal</p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold">First Name</label>
              <input 
                type="text" 
                placeholder="Enter your first name" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" 
                required 
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Middle Name</label>
              <input 
                type="text" 
                placeholder="Enter your middle name (optional)" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" 
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Last Name</label>
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
              <label className="block text-gray-700 font-semibold">Mobile Number</label>
              <input 
                type="tel" 
                placeholder="Enter 10-digit mobile number" 
                pattern="[0-9]{10}" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" 
                required 
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Password</label>
              <input 
                type="password" 
                placeholder="Enter a strong password" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" 
                required 
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Organization Type</label>
              <select 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300" 
                required
              >
                <option value="">Select Organization Type</option>
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="academic">Academic Institution</option>
                <option value="ngo">NGO</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800 transition">
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Already have an account? <Link to="/login" className="text-blue-900 font-semibold">Login here</Link>
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

export default Register;
