import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import Navbar from "./Navbar";
import { logout } from "../utils/parichayAuth";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = async () => {
    await logout();
    navigate("/auth/login");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md text-[#003366]">
      {/* Top Bar */}
      <Navbar />

      {/* Main Navbar */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 xl:px-20 py-5 flex justify-between items-center relative">
        {/* Logo + Title */}
        <Link to="/dashboard">
          <div className="flex items-center space-x-4">
            <img
              src={NicLogo}
              alt="NIC Logo"
              className="w-[200px] object-contain"
            />
            <h1 className="text-xl sm:text-3xl font-bold">AI MEDHA</h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6 text-sm md:text-base">
          <ul className="flex space-x-6">
            <li>
              <Link to="/dashboard" className="hover:text-[#FF9933] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FF9933]">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#FF9933]">
                Services
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FF9933]">
                Contact
              </a>
            </li>
          </ul>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-1 hover:text-[#FF9933]"
            >
              <FaUserCircle size={32} className="text-blue-900" />
              <IoIosArrowDown />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link
                  to="/settings"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile Settings
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

          <img
            src={NicLogo2}
            alt="NIC Logo Right"
            className="w-[140px] object-contain"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[100px] left-0 right-0 z-40 sm:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-md">
          <Link to="/dashboard" className="block text-sm hover:text-[#FF9933]">
            Home
          </Link>
          <Link to="/about" className="block text-sm text-gray-800">
            About
          </Link>
          <Link to="/services" className="block text-sm text-gray-800">
            Services
          </Link>
          <a href="#contact" className="block text-sm text-gray-800">
            Contact
          </a>
          <hr />
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-gray-800"
          >
            Profile Settings
          </Link>
          <Link
            to="/"
            className="block text-sm text-gray-800"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
