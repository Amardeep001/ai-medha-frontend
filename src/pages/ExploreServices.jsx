import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaLanguage,
  FaBalanceScale,
  FaChartPie,
  FaMicrophoneAlt,
  FaEyeSlash,
  FaMapMarkedAlt,
  FaUserCheck,
  FaFileAlt,
} from "react-icons/fa";
import indianFlag from "../images/ind_flag.png";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import AiNibhritImage from "../images/serviceCatalogueImages/ai_nibhrit_image.png";
import AiPaniniImage from "../images/serviceCatalogueImages/ai_panini.png";
import AiChatbotImage from "../images/serviceCatalogueImages/ai_chatbot_image.jpg";
import AiShrutiImage from "../images/serviceCatalogueImages/ai_shruti.jpg";
import AiMatraImage from "../images/serviceCatalogueImages/ai_matra.jpg";
import AiParkhiImage from "../images/serviceCatalogueImages/ai_parkhi.webp";
import AiVihangamImage from "../images/serviceCatalogueImages/ai_vihangam.jpg";
import AiSatyapikananImage from "../images/serviceCatalogueImages/ai_satyapikanan.webp";
import AiAnveshika from "../images/serviceCatalogueImages/ai_anveshika.jpg";
import AiSaransh from "../images/serviceCatalogueImages/saransh.png";
import Footer from "../components/Footer";

const serviceData = [
  {
    id: "ai_nibhrit",
    name: "AI Nibhrit - PII Masking Solution",
    type: "Data Privacy",
    available: true,
    description:
      "Smart AI for masking Aadhaar, PAN, fingerprints, and QR codes in digital documents.",
    usage: "Securely share documents with reusable PII-masked outputs.",
    icon: <FaEyeSlash className="text-blue-700 text-4xl" />,
    image: AiNibhritImage,
  },
  {
    id: "ai_panini",
    name: "AI Panini - Language Translation Service",
    type: "Language AI",
    available: true,
    description:
      "Translate between Indian languages and English using neural machine translation.",
    usage: "Enables translation across 11 Indian languages.",
    icon: <FaLanguage className="text-blue-700 text-4xl" />, // You can choose another icon if preferred
    image: AiPaniniImage, // Replace with real image when available
  },
  {
    id: "ai_vani",
    name: "AI VANI - Virtual Assistant Framework",
    type: "Interaction",
    available: true,
    description:
      "NIC’s virtual assistant framework used across multiple government portals for real-time query.",
    usage:
      "Deployed across portals like eAwas, eVigilance, Confonet, ikhedut, Sarathi RTO, and more to assist citizens 24/7.",
    icon: <FaRobot className="text-blue-700 text-4xl" />,
    image: AiChatbotImage, // Replace with actual image import
  },
  {
    id: "ai_shruti",
    name: "AI Shruti - Speech Recognition",
    type: "Language AI",
    available: true,
    description: "Automatic speech-to-text transcription for Indian languages.",
    usage:
      "Converts spoken input into text to enable voice-based interactions.",
    icon: <FaMicrophoneAlt className="text-blue-700 text-4xl" />,
    image: AiShrutiImage, // replace this with the actual imported image or URL
  },
  {
    id: "ai_matra",
    name: "AI Matra - Transliteration Service",
    type: "Monitoring",
    available: true,
    description: "Framework for evaluating and benchmarking AI models.",
    usage:
      "Monitors model performance for fairness, accuracy, and reliability.",
    icon: <FaBalanceScale className="text-blue-700 text-4xl" />, // or FaChartLine for performance
    image: AiMatraImage, // replace this with the actual imported image or URL
  },
  {
    id: "ai_parkhi",
    name: "AI Parkhi - Image Quality Assessment",
    type: "Analytics",
    available: true,
    description:
      "AI-based system to automatically classify uploaded images as good or bad quality.",
    usage:
      "Evaluates image/document clarity using deep learning to improve decision-making workflows.",
    icon: <FaChartPie className="text-blue-700 text-4xl" />,
    image: AiParkhiImage,
  },
  {
    id: "ai_vihangam_drishti",
    name: "AI VihangamDrishti",
    type: "Geospatial Intelligence",
    available: true,
    description:
      "AI service for rooftop and road detection using drone imagery of rural areas.",
    usage:
      "Generates geospatial annotations (rooftop types, road categories) from top-view drone images to aid solar planning, mapping, and infrastructure analysis.",
    icon: <FaMapMarkedAlt className="text-blue-700 text-4xl" />,
    image: AiVihangamImage,
  },
  {
    id: "ai_satyapikaanan",
    name: "AI Satyapikaanan",
    type: "Vision",
    available: true,
    description:
      "AI-driven Face Recognition as a Service (FRaaS) platform for identity verification and digital governance.",
    usage:
      "Provides contactless, non-invasive facial recognition via APIs for services like attendance, beneficiary verification, pension authentication, and visitor access across eGovernance sectors.",
    icon: <FaUserCheck className="text-green-700 text-4xl" />,
    image: AiSatyapikananImage,
  },
  {
    id: "ai_anveshika",
    name: "AI Anveshika - Multilingual Q&A and Translation",
    type: "Natural Language Processing",
    available: true,
    description:
      "RAG-based AI system for contextual document question answering and translation across 22 Indian languages including Braille.",
    usage:
      "Used in eGovernance for judicial, financial, and transport domains to support tasks like multilingual Q&A, summarization, and accurate Indic-English translation.",
    icon: <FaLanguage className="text-purple-700 text-4xl" />,
    image: AiAnveshika,
  },
  {
    id: "ai_saransh",
    name: "AI Saransh - Document Summarization Engine",
    type: "Natural Language Processing",
    available: true,
    description:
      "AI-powered abstractive summarization service that condenses lengthy government documents into concise, readable summaries in English and Indian languages.",
    usage:
      "Used across eGovernance platforms to auto-generate summaries for minutes of meetings, reports, legal texts, and administrative orders, enabling faster content review and decision-making.",
    icon: <FaFileAlt className="text-indigo-700 text-4xl" />,
    image: AiSaransh,
  },
];

const ExploreServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ebdbca] to-[#f0e6db] ">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow text-[#003366]">
        <div className="bg-[#003366] text-white text-xs sm:text-sm py-2">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20">
            <div className="flex items-center space-x-2">
              <img
                src={indianFlag}
                alt="Indian Flag"
                className="w-6 h-4 sm:h-6"
              />
              <span className="font-medium">
                भारत सरकार | Government of India
              </span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href="#main-content"
                className="hidden sm:block hover:underline"
              >
                Skip to Content
              </a>
              <div className="flex items-center space-x-1">
                <button className="text-xs font-semibold">A+</button>
                <button className="text-xs font-semibold">A</button>
                <button className="text-xs font-semibold">A-</button>
              </div>
            </div>
          </div>
        </div>

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
                <Link to="/about" className="hover:text-[#FF9933]">
                  About
                </Link>
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
      {/* Main Content */}
      <div
        id="main-content"
        className="pt-44 pb-16 px-4 sm:px-6 xl:px-20 mx-auto max-w-screen-2xl"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-7 ">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serviceData.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id}>
              <div className="flex flex-col h-full p-5 bg-[#faf9f8] border rounded-lg shadow-md hover:shadow-lg transition hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-2">
                  {service.icon}
                  <h4 className="text-xl font-semibold text-blue-900">
                    {service.name}
                  </h4>
                </div>

                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover rounded-lg mt-6 mb-4"
                />

                <div className="flex-1">
                  <p className="text-gray-700">{service.description}</p>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <strong>Usage:</strong> {service.usage}
                  </p>
                  <p
                    className={`text-sm mt-2 font-medium ${
                      service.available ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {service.available ? "Available" : "Unavailable"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExploreServices;
