import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaLanguage,
  FaEye,
  FaChartPie,
  FaClipboardCheck,
  FaEyeSlash,
} from "react-icons/fa";
import AiNibhritImage from "../images/ai_nibhrit_image.png";
import AiPaniniImage from "../images/ai_panini_image.png";
import AiChatbotImage from "../images/ai_chatbot_image.jpg";
import DigitalAssetImage from "../images/digital_asset_image.jpg";
import ModelPerformanceImage from "../images/model_performance_image.jpg";
import ServiceInsightsImage from "../images/service_insights_image.jpg";

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
    id: "ai_chatbot",
    name: "AI-Powered Chatbot",
    type: "Interaction",
    available: true,
    description:
      "Intelligent chatbot designed to automate interactions by understanding and responding to user queries in real-time",
    usage: "Enhances customer engagement and support.",
    icon: <FaRobot className="text-blue-700 text-4xl" />,
    image: AiChatbotImage,
  },
  {
    id: "digital_asset_catalogue",
    name: "Digital Asset Catalogue",
    type: "Storage",
    available: false,
    description: "Centralized storage for AI-generated assets.",
    usage: "Organizes and manages digital AI assets effectively.",
    icon: <FaClipboardCheck className="text-blue-700 text-4xl" />,
    image: DigitalAssetImage,
  },
  {
    id: "model_performance_governance",
    name: "Model Performance & Governance",
    type: "Monitoring",
    available: true,
    description: "Monitor, evaluate, and govern AI model performance.",
    usage: "Ensures compliance, accuracy, and continuous improvements.",
    icon: <FaEye className="text-blue-700 text-4xl" />,
    image: ModelPerformanceImage,
  },
  {
    id: "ai_service_insights",
    name: "AI Service Insights & Reports",
    type: "Analytics",
    available: false,
    description: "Comprehensive insights into AI service usage.",
    usage: "Provides analytics and reports for decision-making.",
    icon: <FaChartPie className="text-blue-700 text-4xl" />,
    image: ServiceInsightsImage,
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
    <div className="p-5">
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
            <div className="p-5 bg-white border rounded-lg shadow-md hover:shadow-lg transition hover:scale-[1.02]">
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
              <p className="text-gray-700">{service.description}</p>
              <p className="text-sm text-gray-500 mt-1">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCatalogue;
