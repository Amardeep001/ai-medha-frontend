import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const VerifyAccount = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/gov-bg.jpg')" }}
    >
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 xl:px-20">
          <h1 className="text-2xl font-bold">AI Medha</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-400">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Verification Form */}
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-800 to-white py-10">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Verify Your Account
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Enter the OTP and verification code sent to your mobile and email.
          </p>

          <form className="mt-6">
            <div>
              <label className="block text-gray-700 font-semibold">
                Email Verification Code
              </label>
              <input
                type="text"
                placeholder="Enter the code sent to your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Mobile OTP
              </label>
              <input
                type="text"
                placeholder="Enter the OTP sent to your mobile"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-800 transition"
            >
              Verify Account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Didn't receive the code?{" "}
            <button className="text-blue-900 font-semibold">Resend Code</button>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default VerifyAccount;
