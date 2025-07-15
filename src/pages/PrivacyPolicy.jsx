import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0edeb] ">
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
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Website Policies</h2>
            <p>
              This is the Official website of <strong>AI MEDHA</strong> – a
              centralized AI platform by the Government of India, developed
              under the aegis of the{" "}
              <strong>
                Ministry of Electronics & Information Technology (MeitY)
              </strong>
              .
            </p>
            <p className="mt-4">
              The platform has been built to provide trusted and unified access
              to AI-related services, datasets, and models. It aims to serve
              government departments, research institutions, and public users by
              offering comprehensive AI tools, resources, and innovations
              developed under the government ecosystem. Continuous improvements
              are made to enhance coverage, usability, and security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Content Copyright</h2>
            <p>
              All content hosted on the AI MEDHA portal is the intellectual
              property of <strong>MeitY</strong>, Government of India, unless
              stated otherwise. Content undergoes strict review to ensure
              compliance with legal and copyright standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Imagery</h2>
            <p>
              Visual assets on the AI MEDHA portal are sourced either from the
              public domain, under creative commons licenses, or through
              authorized purchases from platforms like Shutterstock. (Note: This
              does not apply to externally submitted user content.)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Team</h2>
            <p>
              The AI MEDHA team is a multidisciplinary group of professionals
              including Product Managers, AI Researchers, Content Developers,
              UI/UX Designers, Technical Writers, and Government Officials. In
              collaboration with NIC, MeitY, and third-party experts, the team
              strives to maintain a high standard of quality, relevance, and
              security. Our mission is to accelerate responsible AI adoption
              across the nation in alignment with the Digital India vision.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
