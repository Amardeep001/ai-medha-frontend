import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaLanguage,
  FaBalanceScale,
  FaChartPie,
  FaMicrophoneAlt,
  FaEyeSlash,
  FaMapMarkedAlt,
} from "react-icons/fa";
import AiNibhritImage from "../images/ai_nibhrit_image.png";
import AiPaniniImage from "../images/ai_panini_image.png";
import AiChatbotImage from "../images/ai_chatbot_image.jpg";
import DigitalAssetImage from "../images/digital_asset_image.jpg";
import ModelPerformanceImage from "../images/model_performance_image.jpg";

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
    image: DigitalAssetImage, // replace this with the actual imported image or URL
  },
  {
    id: "ai_matra",
    name: "AI Matra - Model Monitoring",
    type: "Monitoring",
    available: true,
    description: "Framework for evaluating and benchmarking AI models.",
    usage:
      "Monitors model performance for fairness, accuracy, and reliability.",
    icon: <FaBalanceScale className="text-blue-700 text-4xl" />, // or FaChartLine for performance
    image: ModelPerformanceImage, // replace this with the actual imported image or URL
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
    image: "https://picsum.photos/400/300?random=44",
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
    image: "https://picsum.photos/400/300?random=22",
  },
];

const ServiceCatalogue = () => {
  const [filterType, setFilterType] = useState("all");
  const [filterAvailability, setFilterAvailability] = useState("all");

  const filteredServices = serviceData.filter((service) => {
    const matchType =
      filterType === "all" || service.type.toLowerCase() === filterType;
    const matchAvailability =
      filterAvailability === "all" ||
      (filterAvailability === "available" && service.available) ||
      (filterAvailability === "unavailable" && !service.available);
    return matchType && matchAvailability;
  });

  return (
    <div className="p-5 ">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        AI MEDHA Service Catalogue
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Types</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="interaction">Interaction</option>
          <option value="storage">Storage</option>
          <option value="monitoring">Monitoring</option>
          <option value="analytics">Analytics</option>
        </select>

        <select
          onChange={(e) => setFilterAvailability(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
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
  );
};

export default ServiceCatalogue;
