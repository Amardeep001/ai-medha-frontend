import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AiSatyapikaananDetailPage = () => {
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
          <div className="mt-3 flex space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            >
              ← Back to Services
            </button>
            <div className="mb-6">
              <a
                href="https://demoai.nic.in/fraas" // Replace with actual demo link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
              >
                🌐 Try Live Demo
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            AI SATYAPIKAANAN
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Satyapikaanan is the "Face Recognition as a Service (FRaaS)", an
            AI-driven facial recognition platform developed by NIC to support
            digital governance. It addresses key identity challenges and enables
            citizen-centric services in sectors like education, agriculture,
            transport, and public administration.
          </p>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <img
              src="https://picsum.photos/1200/600?random=22"
              alt="Face Recognition"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Key Features of FRaaS
              </h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>AI-based facial recognition with CNN models</li>
                <li>Liveness detection for fraud prevention</li>
                <li>Gesture recognition for multi-factor authentication</li>
                <li>Contactless & non-invasive identity verification</li>
                <li>Available as API via NIC APIX gateway</li>
                <li>Offline support as Android background service</li>
                <li>Cost-effective: no additional hardware required</li>
                <li>Highly scalable with Meghraj Cloud deployment</li>
              </ul>
              <p className="text-sm text-gray-700 mt-4">
                <strong>Model Type:</strong> CNN (Convolutional Neural Network)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Category:</strong> Vision
              </p>
              <p className="text-sm text-gray-700">
                <strong>Security Audit:</strong> Expired, currently under review
              </p>
              <p className="text-sm text-gray-700">
                <strong>Awards:</strong> 20th CSI SIG eGovernance Awards 2022 –
                Award of Recognition
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Real-World Applications
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Attendance monitoring (Education Dept, GoWB)</li>
              <li>Crop surveyor identity (Ministry of Agriculture)</li>
              <li>Students: CBSE / NTA examination identity</li>
              <li>Visitor pass systems (Rajbhaban, Uttarakhand)</li>
              <li>eLearner’s license (Ministry of Road Transport)</li>
              <li>Pensioner life certificate generation</li>
              <li>De-duplication of beneficiaries (WCD&SW, GoWB)</li>
            </ul>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Getting Started with AI Satyapikaanan
            </h3>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>Submit service request through NIC API Exchange (NAPIX)</li>
              <li>Specify use case and required authentication method</li>
              <li>Complete onboarding with minimal steps</li>
              <li>Access API via NIC Network or public internet via NAPIX</li>
              <li>Integrate with existing applications via simple API calls</li>
            </ol>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Summary
            </h3>
            <p className="text-base text-gray-700">
              AI Satyapikaanan empowers secure, contactless, and cost-effective
              identity verification for digital platforms. It promotes ease of
              governance through scalable and open-source facial recognition
              APIs integrated with NIC's Meghraj Cloud infrastructure.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiSatyapikaananDetailPage;
