import React, { useEffect } from "react";
import Footer from "../components/Footer";
import HeaderBeforeLogin from "../components/HeaderBeforeLogin";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 ">
      {/* Navbar */}
      <HeaderBeforeLogin />

      {/* Main Content */}
      <main id="main-content" className="w-full ">
        <div className="bg-gradient-to-b from-[#e9ddd1] to-[#dfdfe2] min-h-screen py-16 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-[#003366] mb-4">
                About AI MEDHA
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Empowering Governance with Responsible Artificial Intelligence
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 text-gray-800 text-[17px] leading-relaxed">
              <p>
                AI MEDHA (AI Modelling Empowered Digital Hub for Applications)
                is India's pioneering Government-to-Government, AIaaS (AI as a
                Service) platform developed by the National Informatics Centre
                (NIC) to provide cutting-edge AI solutions for governance and
                public service delivery. It is designed as a unified central
                ecosystem to empower ministries, departments, PSUs, and state
                agencies through scalable and reusable AI capabilities.
              </p>

              <p>
                AI MEDHA brings together diverse AI capabilities - spanning
                speech, text, vision, and language intelligence to streamline
                and enhance digital governance workflows. With powerful services
                like translation (AI Panini), speech-to-text (AI Shruti),
                chatbots (AI VANI), masking (AI Nibhrit), summarization (AI
                Saransh), and others, the platform simplifies AI adoption
                through a catalog-driven, self-service experience.
              </p>

              <p>
                Accessible through secure government networks such as NAPIX
                (National API Exchange) and NICNET (National Informatics Centre
                Network), AI MEDHA ensures seamless integration via standardized
                APIs, centralized dashboards, and robust role-based access
                controls.
              </p>

              <p>
                Committed to data sovereignty and public sector needs, AI MEDHA
                is deployed on-premise through NIC’s MeghRaj cloud, maintaining
                the highest standards of security, compliance, and availability.
                It adheres strictly to government security protocols, including
                NIC-CERT and CERT-IN guidelines.
              </p>
              <p>
                AI MEDHA’s mission is to democratize responsible AI adoption
                across India’s digital ecosystem boosting transparency,
                innovation, and operational efficiency in public service
                delivery.
              </p>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-[#003366] mb-3">
                Key Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left text-gray-800 mt-6">
                <li className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
                  ✅ Multilingual AI Translation & Speech Recognition
                </li>
                <li className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
                  ✅ Document Masking, Summarization, and Classification
                </li>
                <li className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
                  ✅ Secure API access through NAPIX & NICNET
                </li>
                <li className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
                  ✅ Real-Time Monitoring and Dashboard
                </li>
                <li className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
                  ✅ Designed for Government Departments & Ministries
                </li>
                <li className="bg-[#f0f4f8] p-4 rounded-lg shadow-sm">
                  ✅ Backed by NIC/NICSI with L2 & L3 Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
