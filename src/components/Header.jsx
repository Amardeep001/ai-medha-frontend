import React from "react";
import { FaBars } from "react-icons/fa";
import indianFlag from "../images/ind_flag.png";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md text-[#003366]">
      <div className="w-full bg-[#003366] text-white text-xs sm:text-sm py-2">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20">
          <div className="flex items-center space-x-2">
            <img
              src={indianFlag || "/india-flag.png"}
              alt="Indian Flag"
              className="w-6 h-4 sm:h-6"
            />
            <span className="font-medium text-xs sm:text-sm">
              भारत सरकार | Government of India
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 xl:px-20">
        <h1 className="text-xl md:text-2xl font-bold">AI MEDHA</h1>
        <button onClick={toggleSidebar} className="md:hidden text-gray-700">
          <FaBars className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
