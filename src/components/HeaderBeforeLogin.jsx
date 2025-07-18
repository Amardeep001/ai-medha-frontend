import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import Navbar from "./Navbar";

const HeaderBeforeLogin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white shadow-md text-[#003366]">
      {/* Top Header */}
      <Navbar />

      {/* Main Navbar */}
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20 py-5 relative">
        <Link to="/">
          <div className="flex items-center space-x-6">
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
        </Link>

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
              <Link to="/" className="hover:text-[#FF9933] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FF9933] transition">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/explore-services"
                className="hover:text-[#FF9933] transition"
              >
                Services
              </Link>
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
                <Link to="/about" className="hover:text-[#FF9933] transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/explore-services"
                  className="hover:text-[#FF9933] transition"
                >
                  Services
                </Link>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderBeforeLogin;
