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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-[#003366] mb-4">
                About AI MEDHA
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Empowering Governance with Responsible Artificial Intelligence
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-gray-800 text-[17px] leading-relaxed">
              <p>
                <strong>AI MEDHA</strong> is a unified platform developed by the
                National Informatics Centre (NIC) to provide cutting-edge AI
                solutions for governance and public service delivery. Designed
                as a central ecosystem, AI Medha brings together speech, text,
                vision, and language intelligence to empower ministries,
                departments, and agencies.
              </p>

              <p>
                With services like <strong>translation (AI Panini)</strong>,{" "}
                <strong>speech-to-text (AI Shruti)</strong>,{" "}
                <strong>chatbots (AI Vani)</strong>,{" "}
                <strong>anonymization (AI Nibhrit)</strong>,{" "}
                <strong>summarization (AI Saransh)</strong>, and more, AI Medha
                enables seamless integration of AI into digital governance
                workflows.
              </p>

              <p>
                The platform is accessible through secure networks like{" "}
                <strong>NAPIX</strong> (National API Exchange) and{" "}
                <strong>NICNET</strong> (National Informatics Centre network),
                offering standardized APIs, centralized dashboards, and
                role-based access control for government institutions. It is
                built to ensure <strong>data security</strong>,{" "}
                <strong>compliance</strong>, and{" "}
                <strong>high availability</strong>.
              </p>

              <p>
                AI Medha’s mission is to democratize responsible AI usage for
                the public sector-boosting transparency, efficiency, and
                innovation across India’s digital initiatives.
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
