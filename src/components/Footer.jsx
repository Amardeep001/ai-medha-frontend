import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-6">
      <p>&copy; 2025 AI MEDHA. All Rights Reserved.</p>
      <p>
        <Link to="/contact" className="underline">
          Contact Us
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
