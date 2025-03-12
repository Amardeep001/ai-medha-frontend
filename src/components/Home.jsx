import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-blue-900 text-white py-4 shadow-lg ">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-6 xl:px-20">
          <h1 className="text-2xl font-bold">AI MEDHA</h1>
          <ul className="flex flex-wrap space-x-6">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-400">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-yellow-400">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-24 lg:py-32 text-white bg-gradient-to-b from-blue-800 to-blue-500">
        <Zoom>
          <h2 className="text-4xl md:text-5xl font-bold">
            Empowering Governance with AI
          </h2>
        </Zoom>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto px-4">
            AI MEDHA is an advanced AI-driven platform facilitating seamless
            automation and insights for government services.
          </p>
        </motion.div>
        <Zoom>
          <button className="mt-6 bg-yellow-400 text-blue-900 px-8 py-3 text-lg md:text-xl rounded-lg font-semibold hover:bg-yellow-500 transition">
            Get Started
          </button>
        </Zoom>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-screen-xl mx-auto px-6 xl:px-20 py-16"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-blue-900">
          Key Features
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              Multi-Language Support
            </h4>
            <p className="mt-2 text-gray-700">
              Provides accessibility in multiple Indian languages.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              Data Visualization
            </h4>
            <p className="mt-2 text-gray-700">
              Generates insightful reports for better governance.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">Secure Login</h4>
            <p className="mt-2 text-gray-700">
              Ensures authentication via Parichay and Jan Parichay.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              AI-Powered Chatbot
            </h4>
            <p className="mt-2 text-gray-700">
              Get instant support and responses through AI-driven chatbot
              assistance.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              Model Management
            </h4>
            <p className="mt-2 text-gray-700">
              Easily manage, deploy, and monitor AI models for governance
              applications.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              Real-Time Alerts
            </h4>
            <p className="mt-2 text-gray-700">
              Receive instant notifications for system updates, security alerts,
              and critical actions.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              User Role Management
            </h4>
            <p className="mt-2 text-gray-700">
              Define and manage different user roles with varying levels of
              access.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              Performance Analytics
            </h4>
            <p className="mt-2 text-gray-700">
              Track system performance and AI model efficiency with analytical
              insights.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-xl font-bold text-blue-800">
              Audit & Compliance
            </h4>
            <p className="mt-2 text-gray-700">
              Ensure adherence to government regulations with built-in
              compliance monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; 2025 AI MEDHA. All Rights Reserved.</p>
        <p>
          <a href="#contact" className="underline">
            Contact Us
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
