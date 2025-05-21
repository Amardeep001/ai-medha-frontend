import React from "react";
import { FaBars } from "react-icons/fa";
import indianFlag from "../images/ind_flag.png";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md text-[#003366]">
      <div className="w-full bg-[#003366] text-white text-xs sm:text-sm py-2">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 xl:px-20">
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
          <div className="flex items-center space-x-4">
            <a href="#main-content" className="underline">
              Skip to Content
            </a>
            <div className="flex items-center space-x-3">
              <button className="text-base font-semibold">A+</button>
              <button className="text-base font-semibold">A</button>
              <button className="text-base font-semibold">A-</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6 xl:px-20">
        <div className="flex items-center space-x-6">
          <img
            src={NicLogo}
            alt="Logo"
            className="w-[200px] object-contain" // increased to h-32 w-32
          />
          <h1 className="text-xl sm:text-4xl font-bold">AI MEDHA</h1>
        </div>
        {/* Image on the Right Side */}
        <img
          src={NicLogo2}
          alt="Right Logo"
          className="w-[160px] object-contain"
        />
        <button onClick={toggleSidebar} className="md:hidden text-gray-700">
          <FaBars className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
