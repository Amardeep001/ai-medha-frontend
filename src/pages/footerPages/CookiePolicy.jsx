import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NicLogo from "../../images/nic_logo3.svg";
import NicLogo2 from "../../images/nic_logo2.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow text-[#003366]">
        <Navbar />
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20 py-5">
          <Link to="/">
            <div className="flex items-center space-x-6">
              <img
                src={NicLogo}
                alt="NIC Logo"
                className="w-[220px] object-contain"
              />
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wide">
                AI MEDHA
              </h1>
            </div>
          </Link>
          <div className="hidden sm:flex items-center space-x-6 text-base">
            <ul className="flex space-x-5">
              <li>
                <Link to="/" className="hover:text-[#FF9933]">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF9933]">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#FF9933]">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF9933]">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/auth/login" className="hover:text-[#FF9933]">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="hover:text-[#FF9933]">
                  Register
                </Link>
              </li>
            </ul>
            <img
              src={NicLogo2}
              alt="NIC Secondary Logo"
              className="w-[140px] object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        id="main-content"
        className="w-full pt-48 pb-16 px-4 sm:px-6 lg:px-20"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

          <p>
            Cookies are small alphanumeric identifiers that we transfer to your
            computer's hard drive through your web browser. These cookies enable
            us to understand how you interact with the AI MEDHA platform and
            help us enhance your experience while using our services.
          </p>

          <p className="mt-4">
            These cookies allow us to analyze how users navigate the site, which
            features are most used, and which areas can be improved. By doing
            so, we can deliver a more personalized, secure, and efficient
            service. They help us monitor usage trends, identify performance
            issues, and make data-driven improvements.
          </p>

          <p className="mt-4">
            Please note that these cookies do not give us access to your
            computer or collect any personal information beyond what you choose
            to share. You can configure your browser settings to refuse some or
            all cookies, or to notify you when a cookie is being sent.
          </p>

          <p className="mt-4">
            However, please be aware that disabling cookies may limit your
            ability to access certain functionalities or features of the AI
            MEDHA portal.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
