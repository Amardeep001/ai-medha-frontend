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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Vani</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Vani is a modular and multilingual conversational AI framework
            developed by NIC. It acts as a virtual assistant supporting chatbot
            and voicebot interactions across 22 Indian languages, with powerful
            integration capabilities for government and citizen-facing services.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Vani
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI Vani is a modular, multilingual conversational AI framework
              developed by NIC’s AI Cloud Services and Virtual Assistance
              Division. It enables intelligent chatbot and voicebot services for
              citizen-centric government applications across India. Supporting
              22 Indic languages for chat and Indian English/Hindi for voice, it
              ensures intuitive communication between citizens and services
              through automated interactions, customizable dialogues, and
              live-agent fallback mechanisms.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> 03-01-2025
              </p>
              <p>
                <strong>Copyright:</strong> Registration No. SW-15265/2022
              </p>
              <p>
                <strong>Awards Won:</strong> Gems of Digital India Award 2020;
                Featured in the 'Compendium of Selected Papers 2021' at the 24th
                National Conference on e-Governance
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported interaction modes:</strong> Text and voice
                  (chatbot/voicebot)
                </li>
                <li>
                  <strong>Languages:</strong> 22 Indic languages (chat), Hindi
                  and Indian English (voice)
                </li>
                <li>
                  <strong>Security:</strong> Session management, input
                  validation, role-based access
                </li>
                <li>
                  <strong>Scalability:</strong> Modular microservices for
                  flexible deployments
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI Vani Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Vani is being widely deployed across ministries,
                citizen-facing government portals, and public service platforms.
                By enabling intelligent, real-time conversations in multiple
                languages, it improves accessibility, automates common service
                queries, and reduces workload on helpdesk teams.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  24x7 citizen service chatbots for education, transport,
                  health, and judiciary
                </li>
                <li>
                  Voice-based IVR systems for departments with rural outreach
                </li>
                <li>
                  Custom department bots to reduce load on helplines or support
                  staff
                </li>
                <li>Hybrid bots with fallback to live agents</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Possible Users
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Central and State Ministries / Departments</li>
                <li>
                  Public Service Portals (education, transport, e-governance)
                </li>
                <li>IVR-based citizen service helplines</li>
                <li>NIC-integrated departmental websites</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow of how AI Vani handles user
              interactions from input to final response delivery:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>User Input:</strong> User sends a query through a chat
                interface or voice interface (web, mobile, or IVR).
              </li>
              <li>
                <strong>Input Recognition:</strong> For voice input, AI Shruti
                converts speech to text using ASR. The recognized text proceeds
                to the next layer.
              </li>
              <li>
                <strong>Intent Detection:</strong> AI Vani uses NLP models to
                understand user intent and extract relevant entities from the
                message.
              </li>
              <li>
                <strong>Response Generation:</strong> Based on intent, the bot
                retrieves appropriate responses using pre-trained logic or
                external APIs.
              </li>
              <li>
                <strong>Fallback Handling:</strong> If the bot cannot process
                the request, it triggers a fallback to human agent (if enabled)
                or default response.
              </li>
              <li>
                <strong>Translation (If Enabled):</strong> AI Panini may be used
                to translate responses into the user’s preferred language.
              </li>
              <li>
                <strong>Response Delivery:</strong> The final response is sent
                back to the user via chat or synthesized speech (TTS) for voice
                interfaces.
              </li>
              <li>
                <strong>Logging & Analytics:</strong> Each interaction is logged
                for audit, analytics, and continuous improvement.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Vani Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit a service
                request form signed by an authorized official from your
                department/ministry. Specify the use case, user volume, and
                language requirements.
              </li>
              <li>
                <strong>Platform Integration:</strong> Decide the integration
                method—web-based chat, mobile interface, or IVR system—and
                configure accordingly using provided API endpoints.
              </li>
              <li>
                <strong>Middleware Setup:</strong> If using voice-based
                services, install the AI Vani middleware or connector package
                (includes ASR/TTS modules) on your NICNET-hosted environment.
              </li>
              <li>
                <strong>Intent & Dialogue Configuration:</strong> Define
                intents, dialogue flow, FAQs, and custom rules using the Vani
                admin console or JSON configuration.
              </li>
              <li>
                <strong>Voice Channel Setup (Optional):</strong> For IVR or
                call-center deployment, integrate with telecom lines and
                configure speech-to-text and text-to-speech modules.
              </li>
              <li>
                <strong>API Access & Testing:</strong> Access RESTful APIs for
                real-time interaction. Test conversation flow using the
                sandbox/testing environment provided.
              </li>
              <li>
                <strong>Deployment & Monitoring:</strong> Go live and monitor
                usage via dashboard analytics. Continuously update bot knowledge
                based on logs and user queries.
              </li>
            </ol>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Accessible only through the
                NICNET infrastructure; external access is not supported.
              </li>
              <li>
                <strong>Firewall Configuration:</strong> Ports are to be
                configured as per NIC guidelines with strict IP controls.
              </li>
              <li>
                <strong>Access Control:</strong> Enforced through IP
                whitelisting and department-level authorization for deployment
                and usage.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiVaniDetailPage;
