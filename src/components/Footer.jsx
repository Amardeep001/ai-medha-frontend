// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-[#003366] to-[#004080] text-white text-center py-6">
//       <p>&copy; 2025 AI MEDHA. All Rights Reserved.</p>
//       <p>
//         <Link to="/contact" className="underline">
//           Contact Us
//         </Link>
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white pt-10 pb-6 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-blue-800 pb-8">
        {/* About */}
        <div>
          <h4 className="text-white font-semibold text-base mb-3">
            About AI MEDHA
          </h4>
          <p className="text-gray-300">
            AI MEDHA is a centralized platform for discovering and deploying AI
            services and models developed under the Government of India
            ecosystem.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-base mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-white">Contact Us</Link>
            </li>
            <li>
              <Link className="hover:text-white">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-base mb-3">Contact</h4>
          <p className="text-gray-300">
            Ministry of Electronics & IT (MeitY)
            <br />
            Government of India
          </p>
          <p className="mt-2 text-gray-300 flex items-center gap-2">
            <FaEnvelope className="text-lg" />{" "}
            <a href="mailto:support@aimedha.gov.in">support@aimedha.gov.in</a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold text-base mb-3">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-blue-400 text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-blue-400 text-xl" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white hover:text-red-500 text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-6 text-center text-gray-400 px-4">
        <p>
          &copy; {new Date().getFullYear()} AI MEDHA | Ministry of Electronics &
          Information Technology (MeitY)
        </p>
        <p className="mt-1">
          All Rights Reserved | Developed & Maintained by NIC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
