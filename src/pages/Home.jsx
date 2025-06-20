import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import indianFlag from "../images/ind_flag.png";
// import bgImg from "../images/inibg.svg";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import matraLogo from "../images/serviceLogo/AImatra.png";
import vaniLogo from "../images/serviceLogo/ai_vani_logo.jpg";
import saranshLogo from "../images/serviceLogo/AI Saransh.png";
import paniniLogo from "../images/serviceLogo/ai_panini_logo.jpg";
import nibhritLogo from "../images/serviceLogo/ai_nibhrit_logo.jpg";
import shrutiLogo from "../images/serviceLogo/ai_shruti_logo.jpg";
import parkhiLogo from "../images/serviceLogo/ai_parkhi_logo.jpg";
import vihangamDhrishtiLogo from "../images/serviceLogo/ai_vihangam_dhrishti_logo.jpg";
import satyapikaananLogo from "../images/serviceLogo/ai_satyapikaanan_logo.jpg";
import anveshikaLogo from "../images/serviceLogo/ai_anveshika_logo.jpg";
import Footer from "../components/Footer";

const services = [
  {
    name: "AI Nibhrit",
    icon: nibhritLogo,
  },
  {
    name: "AI Panini",
    icon: paniniLogo,
  },
  {
    name: "AI Vani",
    icon: vaniLogo,
  },
  {
    name: "AI Shruti",
    icon: shrutiLogo,
  },
  {
    name: "AI Matra",
    icon: matraLogo,
  },
  {
    name: "AI Parkhi",
    icon: parkhiLogo,
  },
  {
    name: "AI Vihangam Drishti",
    icon: vihangamDhrishtiLogo,
  },
  {
    name: "AI Satyapikaanan",
    icon: satyapikaananLogo,
  },
  {
    name: "AI Anveshika",
    icon: anveshikaLogo,
  },
  {
    name: "AI Saransh",
    icon: saranshLogo,
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const duplicatedServices = [...services, ...services]; // For looping
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover "
      // style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* bg-[#F8F9FA] */}
      {/* Navbar with Top Header */}
      <nav className="fixed w-full z-50 bg-white shadow-md text-[#003366]">
        {/* Top Header */}
        <div className="w-full bg-[#003366] text-white text-xs sm:text-sm py-2">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20">
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
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20 py-7 relative">
          {/* Logo and Heading */}
          <div className="flex items-center space-x-6">
            {/* NIC Logo */}
            <img
              src={NicLogo}
              alt="NIC Logo"
              className="w-[220px] object-contain"
            />

            {/* AI Medha Title with logo */}
            <div className="flex items-center space-x-3">
              <h1 className="text-xl sm:text-4xl font-bold">AI MEDHA</h1>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="sm:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6 md:space-x-6 text-sm md:text-base">
            <ul className="flex space-x-4 md:space-x-6">
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
                <a href="/services" className="hover:text-[#FF9933] transition">
                  Services
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

            {/* Image on the Right Side */}
            <img
              src={NicLogo2}
              alt="Right Logo"
              className="w-[160px] object-contain"
            />
          </div>

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
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="main-content"
        // bg-[#F8F9FA]
        className="text-center pt-30 pb-10 lg:pt-[200px] text-[#003366] bg-[#f0dfce] "
      >
        <Zoom>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            AI Modelling Empowered Digital Hub for Applications
          </h2>
        </Zoom>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mt-4 text-gray-700 font-medium text-base sm:text-lg md:text-3xl max-w-3xl mx-auto px-4">
            Empowering Governance with AI
          </p>
        </motion.div>
        <Zoom>
          <Link to="/auth/login">
            <button className="mt-6 bg-[#f3b476] text-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-lg md:text-xl rounded-lg font-semibold hover:bg-[#cfcfaa] transition">
              Get Started
            </button>
          </Link>
        </Zoom>
      </header>

      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#e6d6c5] to-[#d1d0d8] shadow-md py-10">
        {/* bg-gradient-to-b from-[#e0d1c0] to-[#c4b8ae] */}
        <h3 className="text-2xl font-sans font-semibold text-[#003366] mb-4">
          About AI Medha
        </h3>
        <div className="max-w-screen-lg text-gray-800 text-[18px] ">
          <p className="leading-relaxed text-center mb-4">
            <strong>AI Medha</strong> is a unified platform designed to showcase
            and deliver advanced AI solutions developed under the National
            Informatics Centre (NIC). It acts as a central hub that brings
            together state-of-the-art AI models, tools, and services tailored
            for governance, public service delivery, and institutional
            efficiency.
          </p>
          <p className="leading-relaxed text-center mb-4">
            Built with a vision to democratize AI for all, AI Medha integrates
            solutions ranging from speech recognition, translation,
            summarization, face verification, document anonymization, and
            satellite image analysis—all under one intelligent digital
            ecosystem. The platform empowers departments and users to explore,
            evaluate, and adopt these solutions with ease.
          </p>
          <p className="leading-relaxed text-center">
            Through standardized APIs, real-time dashboards, and secure
            integration frameworks like NAPIX, AI Medha accelerates AI adoption
            within government workflows while ensuring data privacy,
            scalability, and high performance. It aims to drive innovation and
            responsible AI usage across India’s digital governance landscape.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-screen-full flex flex-col justify-center items-center mx-auto px-4 sm:px-6 xl:px-20 py-12 sm:pb-12 sm:pt-6 bg-[#cabebe]"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#003366]">
          Core Capabilities
        </h3>
        <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
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
              className="p-4 sm:p-6 bg-gradient-to-b from-[#c7ced4] to-[#ebedf0] hover:bg-gradient-to-br hover:from-[#a4aab3] hover:to-[#f5f4e9] shadow-md rounded-lg text-center hover:shadow-lg transition-transform duration-300 hover:scale-[1.08]"
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

      <div className="bg-gray-400 py-12 text-white overflow-hidden">
        <div className="text-center mb-6 px-4">
          {/* <p className="text-sm uppercase tracking-wide text-gray-400">
            TECHNICAL SERVICES OFFERINGS
          </p> */}
          <h2 className="text-3xl font-bold text-[#003366]">
            Core AI Services
          </h2>
        </div>

        {/* Add container width and horizontal padding */}
        <div className="relative px-4 sm:px-20">
          <div className="overflow-hidden rounded-lg">
            <div className="flex w-[200%] animate-scroll space-x-6">
              {duplicatedServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate("/auth/login");
                  }}
                  className="bg-white cursor-pointer w-48 sm:w-50 h-45 sm:h-45 rounded-xl shadow-md flex-shrink-0 flex flex-col justify-center items-center p-4 text-center hover:scale-105 transition-transform"
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="h-20 w-20 object-contain mb-3"
                  />
                  <p className="font-medium text-gray-800">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
