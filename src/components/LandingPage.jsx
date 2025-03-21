import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaChartBar,
  FaUserShield,
  FaRobot,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Footer from "./Footer";
import indianFlag from "../images/ind_flag.png";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("analytics");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = {
    analytics: {
      title: "Analytics Dashboard",
      content: (
        <>
          <p className="text-gray-700 mb-4">
            Track key performance indicators with real-time analytics.
          </p>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                {
                  label: "User Growth",
                  data: [10, 20, 30, 40, 50],
                  borderColor: "blue",
                  borderWidth: 2,
                },
              ],
            }}
          />
        </>
      ),
    },
    users: {
      title: "User Management",
      content: (
        <>
          <p className="text-gray-700 mb-4">
            Manage roles, permissions, and user accounts.
          </p>
          <img
            src="https://picsum.photos/400/200?random=1"
            alt="User Management"
            className="rounded-lg shadow-md "
          />
        </>
      ),
    },
    chatbot: {
      title: "AI Chatbot",
      content: (
        <>
          <p className="text-gray-700 mb-4">
            AI-powered chatbot for instant responses and support.
          </p>
          <img
            src="https://picsum.photos/400/200?random=2"
            alt="Chatbot"
            className="rounded-lg shadow-md"
          />
        </>
      ),
    },
    settings: {
      title: "System Settings",
      content: (
        <>
          <p className="text-gray-700 mb-4">Configure system preferences.</p>
          <img
            src="https://picsum.photos/400/200?random=3"
            alt="Settings"
            className="rounded-lg shadow-md"
          />
        </>
      ),
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}

      <nav className="  w-full z-50 bg-white shadow-md text-[#003366]">
        {/* Top Header */}
        <div className="w-full bg-[#003366] text-white text-xs sm:text-sm py-2">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20">
            {/* Left Side - Government Text */}
            <div className="flex items-center space-x-2">
              <img
                src={indianFlag || "/india-flag.png"}
                alt="Indian Flag"
                className="w-6 h-4 sm:h-6"
              />
              <span className="font-medium text-xs sm:text-sm hover:text-[#B35400]">
                भारत सरकार | <span className="ml-1">Government of India</span>
              </span>
            </div>

            {/* Right Side - Accessibility & Skip Link */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="#main-content" className="hidden sm:block">
                Skip to Content
              </a>
              <div className="flex items-center space-x-2">
                <button className="text-sm font-semibold">A+</button>
                <button className="text-sm font-semibold">A</button>
                <button className="text-sm font-semibold">A-</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-2xl"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-xl md:text-2xl font-bold">AI MEDHA</h1>
          <div className="hidden md:flex items-center space-x-6">
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
      {/* <nav className="bg-blue-800 text-white py-4 shadow-lg">
        
      </nav> */}

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block md:w-64 fixed md:relative bg-blue-900 text-white p-6 space-y-4 top-0 left-0 h-full md:h-auto z-50 md:z-auto`}
        >
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          <nav className="flex flex-col space-y-4">
            {[
              { icon: <FaChartBar />, title: "Analytics", key: "analytics" },
              { icon: <FaUserShield />, title: "Users", key: "users" },
              { icon: <FaRobot />, title: "Chatbot", key: "chatbot" },
              { icon: <FaCog />, title: "Settings", key: "settings" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveSection(item.key);
                  setSidebarOpen(false);
                }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-left ${
                  activeSection === item.key
                    ? "bg-blue-700"
                    : "hover:bg-blue-600 transition"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            {sections[activeSection].title}
          </h2>
          <div className="mt-6">{sections[activeSection].content}</div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
