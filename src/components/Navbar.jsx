import React from "react";
import indianFlag from "../images/ind_flag.png";
import { useZoom } from "../context/ZoomContext";

const Navbar = () => {
  const { zoomIn, zoomOut, resetZoom } = useZoom();

  return (
    <div className="w-full bg-[#003366] text-white text-sm py-2">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 xl:px-20">
        <div className="flex items-center space-x-2">
          <img src={indianFlag} alt="Indian Flag" className="w-6 h-4 sm:h-6" />
          <span className="font-medium text-xs sm:text-sm hover:text-[#B35400]">
            भारत सरकार | <span className="ml-1">Government of India</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#main-content" className="underline">
            Skip to Content
          </a>
          <div className="flex items-center space-x-3">
            <button className="text-base font-semibold" onClick={zoomIn}>
              A+
            </button>
            <button className="text-base font-semibold" onClick={resetZoom}>
              A
            </button>
            <button className="text-base font-semibold" onClick={zoomOut}>
              A-
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
