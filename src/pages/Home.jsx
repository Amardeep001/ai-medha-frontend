import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import matraLogo from "../images/serviceLogo/AImatra.png";
import vaniLogo from "../images/serviceLogo/ai_vani_logo.jpg";
import saranshLogo from "../images/serviceLogo/AI Saransh.png";
import paniniLogo from "../images/serviceLogo/ai_panini_logo.jpg";
import nibhritLogo from "../images/serviceLogo/ai_nibhrit_logo.jpg";
import shrutiLogo from "../images/serviceLogo/ai_shruti_logo.jpg";
import parkhiLogo from "../images/serviceLogo/ai_parkhi_logo.jpg";
import vihangamDhrishtiLogo from "../images/serviceLogo/ai_vihangam_dhrishti_logo.jpg";
import satyapikaananLogo from "../images/serviceLogo/ai_satyapikaanan_logo.jpg";
import anveshikaLogo from "../images/serviceLogo/ai_anveshika_logo.jpg";
import aiMedhaPoster from "../images/ai_medha.png";
import multiLanguageLogo from "../images/featureLogo/multi_language.png";
import dataVisualizationLogo from "../images/featureLogo/data_visualization.png";
import loginLogo from "../images/featureLogo/login_logo.png";
import chatbotLogo from "../images/featureLogo/chatbot_logo.png";
import modelLogo from "../images/featureLogo/model_management.png";
import realtimeAlertLogo from "../images/featureLogo/realtime_alert.png";
import serviceSelectionIcon from "../images/featureLogo/service_selection.png";
import dataConciergeIcon from "../images/featureLogo/data_concierge.png";
import dataAssetIcon from "../images/featureLogo/data_asset.png";
import modelPerformanceIcon from "../images/featureLogo/model_performance.png";
import helpdeskIcon from "../images/featureLogo/helpdesk.png";
import sandboxIcon from "../images/featureLogo/sandbox.png";
import insightIcon from "../images/featureLogo/insight.png";
import digitalAssetIcon from "../images/featureLogo/digital_asset.png";
import modelRepositoryIcon from "../images/featureLogo/model_repository.png";
import Footer from "../components/Footer";
import HeaderBeforeLogin from "../components/HeaderBeforeLogin";

const services = [
  {
    name: "AI Nibhrit",
    icon: nibhritLogo,
  },
  {
    name: "AI Panini",
    icon: paniniLogo,
  },
  {
    name: "AI Vani",
    icon: vaniLogo,
  },
  {
    name: "AI Shruti",
    icon: shrutiLogo,
  },
  {
    name: "AI Matra",
    icon: matraLogo,
  },
  {
    name: "AI Parkhi",
    icon: parkhiLogo,
  },
  {
    name: "AI Vihangam Drishti",
    icon: vihangamDhrishtiLogo,
  },
  {
    name: "AI Satyapikaanan",
    icon: satyapikaananLogo,
  },
  {
    name: "AI Anveshika",
    icon: anveshikaLogo,
  },
  {
    name: "AI Saransh",
    icon: saranshLogo,
  },
];

const Home = () => {
  const duplicatedServices = [...services, ...services]; // For looping
  const navigate = useNavigate();

  const features = [
    "AI MEDHA offers AI-as-a-Service through a secure cloud platform for Government departments and agencies.",
    "Provides access to a suite of indigenous AI models including translation, summarization, voice-to-text, image analytics, and more.",
    "Facilitates seamless integration through APIs, with both SaaS and PaaS options available via NIC Cloud and NAPIX Gateway.",
    "Promotes data security, RBAC control, and adherence to CERT-In and NIC-CERT standards.",
    "Accelerates adoption of Digital India goals by enabling scalable, reusable AI services across ministries, PSUs, and states.",
  ];

  const stats = [
    { label: "Departments Onboarded", value: "10" },
    { label: "AI Services Offered", value: "10" },
    { label: "Requests Served", value: "1000000" },
    { label: "Models Deployed", value: "12" },
  ];

  const awards = [
    {
      title: "AI Vani",
      awards: [
        "Gems of Digital India Award 2020",
        "Featured in 'Compendium of Selected Papers 2021' at 24th National Conference on e-Governance",
      ],
    },
    {
      title: "AI Satyapikaanan",
      awards: [
        "Recognized under the Project Category in the 20th CSI SIG eGovernance Awards 2022",
        "Honored for significant contribution to digital transformation",
      ],
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Only run once
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  return (
    <div
      className="min-h-screen bg-cover "
      // style={{ backgroundImage: `url(${bgImg})` }}
    >
      <HeaderBeforeLogin />

      {/* Hero Section */}
      <header
        // bg-[#F8F9FA]
        className="text-center pt-30 pb-10 lg:pt-[60px] text-[#003366] bg-[#f0dfce] "
      >
        <Zoom>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            AI Modelling Empowered Digital Hub for Applications
          </h2>
        </Zoom>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="mt-4 text-gray-700 font-medium text-base sm:text-lg md:text-3xl max-w-3xl mx-auto px-4">
            Empowering Governance with AI
          </p>
        </motion.div>
        <Zoom>
          <Link to="/auth/login">
            <button className="mt-6 bg-[#f3b476] text-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-lg md:text-xl rounded-lg font-semibold hover:bg-[#cfcfaa] transition">
              Get Started
            </button>
          </Link>
        </Zoom>
      </header>

      <section
        id="main-content"
        className="bg-gradient-to-b from-[#ebdbca] to-[#d1d0d8] py-16 px-4 sm:px-8 lg:px-20"
      >
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Block */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aiMedhaPoster}
              alt="AI MEDHA Illustration"
              className="w-full h-[550px] object-cover"
            />
          </div>

          {/* Content Block */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              What makes AI MEDHA unique?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-6"></div>

            <ul className="space-y-5">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="min-w-[32px] min-h-[32px] w-8 h-8 rounded-full bg-[#b9b1b1] text-gray-800 font-semibold flex items-center justify-center text-sm sm:text-base">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div
        ref={ref}
        className="bg-gradient-to-b from-[#c8c6d1] to-[#a09c9c] py-14 px-4 flex justify-center"
      >
        <div className="border rounded-2xl px-6 py-8 bg-[#e9ecf1] shadow-sm w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-sm text-yellow-900 font-medium mb-1">
                {item.label}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {inView ? (
                  <CountUp
                    end={item.value}
                    duration={2}
                    separator=","
                    suffix={item.suffix || "+"}
                  />
                ) : (
                  "0"
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-screen-full flex flex-col justify-center items-center mx-auto px-4 sm:px-6 xl:px-20 py-14 sm:pt-6 bg-[#cabebe]"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#003366]">
          Functional Capabilities
        </h3>
        <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {[
            {
              title: "Multi-Language Support",
              desc: "Provides accessibility in multiple Indian languages.",
              image: multiLanguageLogo,
            },
            {
              title: "Data Visualization Capability",
              desc: "Generates insightful reports for better governance.",
              image: dataVisualizationLogo,
            },
            {
              title: "Secure Login",
              desc: "Ensures authentication via Parichay and Jan Parichay.",
              image: loginLogo,
            },
            {
              title: "AI-Powered Chatbot",
              desc: "Get instant support and responses through AI-driven chatbot assistance.",
              image: chatbotLogo,
            },
            {
              title: "Model Management",
              desc: "Easily manage, deploy, and monitor AI models for governance applications.",
              image: modelLogo,
            },
            {
              title: "Real-Time Alerts",
              desc: "Receive instant notifications for system updates, security alerts, and critical actions.",
              image: realtimeAlertLogo,
            },
            {
              title: "Service Selection Portal",
              desc: "Easily discover and choose AI services tailored to governance needs.",
              image: serviceSelectionIcon,
            },
            {
              title: "Data Concierge Capability",
              desc: "Facilitates seamless data access and management for AI-driven insights.",
              image: dataConciergeIcon,
            },
            {
              title: "Digital Asset Catalogue",
              desc: "Organized repository for managing and accessing digital resources efficiently.",
              image: dataAssetIcon,
            },
            {
              title: "Model Performance & Governance",
              desc: "Monitor, evaluate, and ensure compliance of AI models with governance policies.",
              image: modelPerformanceIcon,
            },
            {
              title: "Support & Helpdesk",
              desc: "Comprehensive support system for AI services and platform assistance.",
              image: helpdeskIcon,
            },
            {
              title: "Sandbox Environment",
              desc: "Safe testing and experimentation space for AI models and digital services.",
              image: sandboxIcon,
            },
            {
              title: "AI Service Insights & Reports",
              desc: "Advanced analytics and reports for evaluating AI service efficiency.",
              image: insightIcon,
            },
            {
              title: "Digital Asset Security & Compliance",
              desc: "Ensures secure access, encryption, and regulatory compliance for digital assets.",
              image: digitalAssetIcon,
            },
            {
              title: "Model Repository",
              desc: "A centralized hub to explore, upload, and manage AI models.",
              image: modelRepositoryIcon,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gradient-to-b from-[#c7ced4] to-[#ebedf0] hover:bg-gradient-to-br hover:from-[#a4aab3] hover:to-[#f5f4e9] shadow-md rounded-lg text-center hover:shadow-lg transition-transform duration-300 hover:scale-[1.08]"
            >
              {/* Logo Background Wrapper */}
              <img
                src={feature.image}
                alt="Multi-Language Support"
                className="mx-auto h-16 w-16 sm:h-20 sm:w-20 mb-4 bg-gradient-to-b from-[#c7ced4] to-[#ebedf0] rounded-full"
              />

              <h4 className="text-lg sm:text-xl font-semibold text-[#003366] mt-4">
                {feature.title}
              </h4>
              <p className="text-black mt-2 text-sm sm:text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-400 py-14 text-white overflow-hidden">
        <div className="text-center mb-6 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003366]">
            AI-Powered Governance Services
          </h2>
        </div>

        {/* Add container width and horizontal padding */}
        <div className="mt-10 relative px-4 sm:px-20">
          <div className="overflow-hidden rounded-lg group">
            <div className="flex w-[200%] animate-scroll space-x-6 pause-on-hover">
              {duplicatedServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate("/auth/login");
                  }}
                  className="bg-white cursor-pointer w-48 sm:w-50 h-45 sm:h-45 rounded-xl shadow-md flex-shrink-0 flex flex-col justify-center items-center p-4 text-center hover:scale-105 transition-transform"
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="h-20 w-20 object-contain mb-3"
                  />
                  <p className="font-medium text-gray-800">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#dbdcdf] py-14 px-4">
        <div className="max-w-screen-xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003366]">
            Achievements & Distinctions
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Celebrating excellence in AI-driven governance
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2">
          {awards.map((item, index) => (
            <div
              key={index}
              className="bg-[#cac5c5] rounded-xl shadow-md p-6 border-t-4 border-[#003366] hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                {item.title}
              </h3>
              <ul className="list-disc pl-5 text-gray-800 text-sm space-y-2">
                {item.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
