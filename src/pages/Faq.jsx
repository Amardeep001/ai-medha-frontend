import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is AI MEDHA?",
      answer: `AI MEDHA is a centralized AI platform developed under the Government of India initiative to host, discover, and deploy AI models and services. It provides users access to AI tools and resources built by various government organizations, startups, research institutions, and academia.`,
    },
    {
      question: "What is the objective of AI MEDHA?",
      answer: `The primary objective is to democratize artificial intelligence by making trusted AI solutions accessible to the public and government sectors. It aims to support digital transformation across India by enabling innovation, experimentation, and collaboration.`,
    },
    {
      question: "Who can use AI MEDHA?",
      answer: `AI MEDHA is open to government bodies, startups, developers, researchers, academic institutions, and the general public who are interested in exploring or contributing AI solutions aligned with national priorities.`,
    },
    {
      question: "What kind of AI services are available?",
      answer: `AI MEDHA hosts a range of AI services including language models, image classification tools, chatbots, computer vision models, and more. These services span multiple domains such as education, healthcare, agriculture, and e-governance.`,
    },
    {
      question: "Is there any cost to access AI MEDHA services?",
      answer: `Most services on AI MEDHA are freely accessible for public use. However, some advanced or domain-specific services may require registration or approval, depending on the service provider's terms.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#edf1f3] ">
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
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mt-2 mb-10 ">FAQ</h2>
          <div className="bg-white text-gray-800 rounded shadow overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b">
                <button
                  className={`w-full text-left px-6 py-4 font-medium transition-colors duration-200 ${
                    openIndex === index ? "bg-[#b9c5cc]" : "bg-white"
                  }`}
                  onClick={() => toggleIndex(index)}
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 text-sm text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
