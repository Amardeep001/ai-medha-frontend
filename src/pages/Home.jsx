import React, { useState } from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import indianFlag from "../images/ind_flag.png";
import bgImg from "../images/inibg.svg";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* bg-[#F8F9FA] */}
      {/* Navbar with Top Header */}
      <nav className="fixed w-full z-50 bg-white shadow-md text-[#003366]">
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
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20 py-3 relative">
          <h1 className="text-lg sm:text-2xl font-bold">AI MEDHA</h1>

          {/* Hamburger Menu for Mobile */}
          <button
            className="sm:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-4 md:space-x-6 text-sm md:text-base">
            <li>
              <a href="#about" className="hover:text-[#FF9933] transition">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-[#FF9933] transition">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FF9933] transition">
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/auth/login"
                className="hover:text-[#FF9933] transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/auth/register"
                className="hover:text-[#FF9933] transition"
              >
                Register
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-12 left-0 w-full bg-white shadow-lg sm:hidden">
              <ul className="flex flex-col text-center py-4 space-y-4">
                <li>
                  <a href="#about" className="hover:text-[#FF9933] transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#FF9933] transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#FF9933] transition"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/login" className="hover:text-[#FF9933] transition">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-[#FF9933] transition"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="main-content"
        // bg-[#F8F9FA]
        className="text-center py-24 lg:pt-40 text-[#003366] "
      >
        <Zoom>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Empowering Governance with AI
          </h2>
        </Zoom>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            AI MEDHA is an advanced AI-driven platform facilitating seamless
            automation and insights for government services.
          </p>
        </motion.div>
        <Zoom>
          <button className="mt-6 bg-[#FF9933] text-white px-6 sm:px-8 py-2 sm:py-3 text-lg md:text-xl rounded-lg font-semibold hover:bg-[#003366] transition">
            Get Started
          </button>
        </Zoom>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-20 py-12 sm:py-16 bg-white"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#003366]">
          Key Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {[
            {
              title: "Multi-Language Support",
              desc: "Provides accessibility in multiple Indian languages.",
            },
            {
              title: "Data Visualization Capability",
              desc: "Generates insightful reports for better governance.",
            },
            {
              title: "Secure Login",
              desc: "Ensures authentication via Parichay and Jan Parichay.",
            },
            {
              title: "AI-Powered Chatbot",
              desc: "Get instant support and responses through AI-driven chatbot assistance.",
            },
            {
              title: "Model Management",
              desc: "Easily manage, deploy, and monitor AI models for governance applications.",
            },
            {
              title: "Real-Time Alerts",
              desc: "Receive instant notifications for system updates, security alerts, and critical actions.",
            },
            {
              title: "Service Selection Portal",
              desc: "Easily discover and choose AI services tailored to governance needs.",
            },
            {
              title: "Data Concierge Capability",
              desc: "Facilitates seamless data access and management for AI-driven insights.",
            },
            {
              title: "Digital Asset Catalogue",
              desc: "Organized repository for managing and accessing digital resources efficiently.",
            },
            {
              title: "Model Performance & Governance",
              desc: "Monitor, evaluate, and ensure compliance of AI models with governance policies.",
            },
            {
              title: "Support & Helpdesk",
              desc: "Comprehensive support system for AI services and platform assistance.",
            },
            {
              title: "Sandbox Environment",
              desc: "Safe testing and experimentation space for AI models and digital services.",
            },
            {
              title: "AI Service Insights & Reports",
              desc: "Advanced analytics and reports for evaluating AI service efficiency.",
            },
            {
              title: "Digital Asset Security & Compliance",
              desc: "Ensures secure access, encryption, and regulatory compliance for digital assets.",
            },
            {
              title: "Model Repository",
              desc: "A centralized hub to explore, upload, and manage AI models.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gradient-to-b from-[#c7ced4] to-[#ebedf0] hover:bg-[#f2ede7] shadow-md rounded-lg text-center"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-[#003366]">
                {feature.title}
              </h4>
              <p className="text-black mt-2 text-sm sm:text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#003366] to-[#004080] text-white text-center py-6 mt-12">
        <p className="text-sm sm:text-base">
          &copy; 2025 AI MEDHA. All Rights Reserved.
        </p>
        <p>
          <Link to="/contact" className="underline">
            Contact Us
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
