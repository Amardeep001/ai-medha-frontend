import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AiVaniDetailPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <div className="overflow-auto flex flex-grow">
        <div className="px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mt-3 mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            ← Back to Services
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI VANI</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI VANI is a modular and multilingual conversational AI framework
            developed by NIC. It acts as a virtual assistant supporting chatbot
            and voicebot interactions across 22 Indian languages, with powerful
            integration capabilities for government and citizen-facing services.
          </p>

          {/* Image and Overview */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <img
              src="https://picsum.photos/1200/600?random=22"
              alt="AI VANI"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Core Features of AI VANI
              </h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>
                  Supports 22 Indic languages (chatbot) and Hindi/Indian English
                  (voicebot)
                </li>
                <li>Offers hybrid mode with buttons + conversational flows</li>
                <li>Customizable intents and dialogues for departments</li>
                <li>Live agent fallback mechanism</li>
                <li>Session management and request validation</li>
                <li>Modular architecture for scalable deployments</li>
                <li>Data logging with timestamp-based folders for audits</li>
              </ul>
              <p className="text-sm text-gray-700 mt-4">
                <strong>Security Audit Date:</strong> 3rd January 2025
              </p>
              <p className="text-sm text-gray-700">
                <strong>Awards:</strong> Gems of Digital India 2020, National
                Conference on e-Governance Paper Selection 2022
              </p>
              <p className="text-sm text-gray-700">
                <strong>Copyright:</strong> SW-15265/2022
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Architecture Overview
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Communication Layer (CL):</strong> Manages user
                interactions from web/IVRS clients and forwards valid requests.
              </li>
              <li>
                <strong>Business Logic Layer (BL):</strong> Manages sessions,
                dialogue handling, logging, and department-level customization.
              </li>
              <li>
                <strong>AI Engines:</strong> Integrates with Shruti (ASR), Matra
                (TTS), and Panini (NLP) for enhanced Indian language support.
              </li>
              <li>
                Logs conversations using timestamp-based folders for audits and
                analytics.
              </li>
            </ul>
          </div>

          {/* Use Cases & Deployment */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Use Cases & Deployment Highlights
            </h3>
            <p className="text-sm text-gray-700">
              AI VANI is already deployed in numerous government applications
              for areas like:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-2">
              <li>Education</li>
              <li>Judiciary</li>
              <li>Transportation</li>
              <li>Healthcare</li>
              <li>Citizen grievance redressal systems</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              It reduces manpower burden by automating standard queries and
              routing only complex ones to live agents.
            </p>
          </div>

          {/* API Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              API Endpoint (for reference use only)
            </h3>
            <p className="text-sm text-gray-700">
              <strong>POST:</strong>{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                https://testvani-hyd.nic.in/ChatBotAPIP/CallAPI.ashx
              </code>
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Payload:</strong>
            </p>
            <pre className="text-xs bg-gray-100 p-3 rounded mt-1 overflow-x-auto">
              {`{
  ChatData: "{\"MSG\":\"\",\"Sid\":null,\"IName\":\"\",\"Count\":0,\"app_name\":\"BOTNAME\",\"Mode\":\"WebChatBot\",\"dflag\":\"\",\"lang\":\"eng\",\"srclang\":\"eng_Latn\",\"tarlang\":\"eng_Latn\",\"trnsflg\":\"0\"}"
}`}
            </pre>
            <p className="text-xs text-gray-500 mt-2">
              Note: CL API is the only exposed API. Production scripts are
              shared only with authorized departments.
            </p>
          </div>

          {/* Onboarding Steps */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Onboarding & Integration Steps
            </h3>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>
                Submit UAT for your department’s chatbot/voicebot workflow.
              </li>
              <li>Complete payment process if applicable.</li>
              <li>NIC provides production script for integration.</li>
              <li>Deploy bot using CL endpoint and set up session handling.</li>
              <li>Monitor chat analytics via provided dashboard.</li>
            </ol>
          </div>

          {/* Summary */}
          <div className="mt-12 mb-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Summary
            </h3>
            <p className="text-base text-gray-700">
              AI VANI is an intelligent, multilingual, and secure virtual
              assistant platform developed by NIC to bring scalable
              conversational AI to citizen services. With integration across
              multiple government domains, VANI supports both chatbot and
              voicebot deployments, and ensures high availability,
              customization, and data integrity across environments.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiVaniDetailPage;
