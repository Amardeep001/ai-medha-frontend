import React from "react";
import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaUserShield,
  FaRobot,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">AI MEDHA</h1>
          <div className="flex items-center space-x-6">
            <Link to="/profile" className="hover:text-yellow-400">
              Profile
            </Link>
            <Link to="/settings" className="hover:text-yellow-400">
              Settings
            </Link>
            <Link
              to="/logout"
              className="hover:text-yellow-400 flex items-center"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content (flex-grow makes it take up remaining space) */}
      <div className="flex-grow max-w-screen-xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Welcome, User!
        </h2>
        <p className="text-lg text-gray-700">
          Empowering Governance with AI-driven solutions.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <FaChartBar />,
              title: "Analytics Dashboard",
              link: "/analytics",
            },
            {
              icon: <FaUserShield />,
              title: "User Management",
              link: "/users",
            },
            { icon: <FaRobot />, title: "AI Chatbot", link: "/chatbot" },
            { icon: <FaCog />, title: "System Settings", link: "/settings" },
          ].map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition"
            >
              <div className="text-blue-700 text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* AI Chatbot Section */}
      <div className="bg-blue-100 py-12 text-center">
        <h3 className="text-2xl font-bold text-blue-900">
          AI Chatbot Assistance
        </h3>
        <p className="text-gray-700 mt-2">
          Get instant responses and support using our AI-powered chatbot.
        </p>
        <Link
          to="/chatbot"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Open Chatbot
        </Link>
      </div>

      {/* Footer (fixed at the bottom) */}
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

export default Dashboard;
