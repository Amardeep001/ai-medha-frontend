import react, { useEffect } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  BarController,
  PieController,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import {
  FaRobot,
  FaChartPie,
  FaLanguage,
  FaBalanceScale,
  FaMicrophoneAlt,
  FaEyeSlash,
} from "react-icons/fa";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";
import { FaClipboardList, FaHourglassHalf } from "react-icons/fa";
import AiNibhritImage from "../images/serviceCatalogueImages/ai_nibhrit_image.png";
import AiPaniniImage from "../images/serviceCatalogueImages/ai_panini.png";
import AiChatbotImage from "../images/serviceCatalogueImages/ai_chatbot_image.jpg";
import AiShrutiImage from "../images/serviceCatalogueImages/ai_shruti.jpg";
import AiMatraImage from "../images/serviceCatalogueImages/ai_matra.jpg";
import AiParkhiImage from "../images/serviceCatalogueImages/ai_parkhi.webp";

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  BarController,
  PieController,
  Tooltip,
  Legend,
  Filler
);

const statusData = [
  {
    label: "Service Requests",
    subtext: "Total Requests Submitted",
    value: 0,
    icon: <FaClipboardList className="text-yellow-600 text-2xl" />,
    bg: "bg-yellow-100",
  },
  {
    label: "Approved Services",
    subtext: "Total Approved AI Services",
    value: 0,
    icon: <FaCheckCircle className="text-green-600 text-2xl" />,
    bg: "bg-green-100",
  },
  {
    label: "Pending Services",
    subtext: "Under Review or In Progress",
    value: 0,
    icon: <FaHourglassHalf className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100",
  },
  {
    label: "Rejected Services",
    subtext: "Requests Not Approved",
    value: 0,
    icon: <FaTimesCircle className="text-red-600 text-2xl" />,
    bg: "bg-red-100",
  },
];

// Data for chart
const topServices = [
  { name: "AI Panini", value: 4523458 },
  { name: "AI Nibhrit", value: 3120871 },
  { name: "AI Vani", value: 2032794 },
  { name: "AI Shruti", value: 1657320 },
];

const pieServiceData = {
  labels: topServices.map((s) => s.name),
  datasets: [
    {
      label: "Usage",
      data: topServices.map((s) => s.value),
      backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
      borderColor: "#fff",
      borderWidth: 2,
    },
  ],
};

const Overview = () => {
  const services = [
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
      description:
        "Automatic speech-to-text transcription for Indian languages.",
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
  ];

  const logs = [
    {
      type: "success",
      message: "AI Parkhi processed 8K images.",
      time: "9:15 AM",
    },
    {
      type: "warning",
      message: "Shruti audio delay detected.",
      time: "9:50 AM",
    },
    { type: "error", message: "VANI response timeout.", time: "10:10 AM" },
    {
      type: "success",
      message: "Panini translation improved.",
      time: "11:00 AM",
    },
  ];

  const getLogIcon = (type) => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="text-green-500 text-lg" />;
      case "warning":
        return <FaExclamationTriangle className="text-yellow-500 text-lg" />;
      case "error":
        return <FaTimesCircle className="text-red-500 text-lg" />;
      default:
        return null;
    }
  };

  const pieData = {
    labels: ["Model Management", "Chatbot", "Asset Catalogue", "Governance"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#1E90FF", "#32CD32", "#FFD700", "#FF6347"],
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Service Usage",
        data: [10, 30, 20, 50, 40],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Model Performance",
        data: [85, 80, 82, 88, 90],
        borderColor: "#FF4500",
        backgroundColor: "rgba(255, 69, 0, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
          Welcome, Amar
        </h2>
        <p className="text-base text-gray-600">User</p>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
          {statusData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-5 bg-gray-50 shadow rounded-xl"
            >
              <div>
                <h4 className="font-semibold text-gray-900">{item.label}</h4>
                <p className="text-sm text-gray-500">{item.subtext}</p>
                <p className="mt-2 text-2xl font-bold text-blue-900">
                  {item.value}
                </p>
              </div>
              <div
                className={`ml-4 p-3 rounded-full ${item.bg} flex justify-center items-center`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Top Performing Services */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b pb-2">
            Top Performing Services
          </h3>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Pie Chart */}
            <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <div className="w-64 h-64">
                <Pie
                  data={pieServiceData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>

            {/* Table */}
            <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100 text-gray-600 font-medium">
                  <tr>
                    <th className="px-4 py-3 text-left">Service Name</th>
                    <th className="px-4 py-3 text-right">Usage Count</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {topServices.map((service, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2 text-gray-800">
                        {service.name}
                      </td>
                      <td className="px-4 py-2 text-right font-medium text-blue-800">
                        {service.value.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Traffic & Usage Insights
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            AI Medha has received over <strong>10M+ API hits</strong>, with{" "}
            <strong>AI Panini</strong> and <strong>AI Nibhrit</strong> making up
            60% of usage. Peak activity occurs during{" "}
            <strong>10 AM–5 PM IST</strong>, especially for translation and PII
            masking. Services like <strong>AI Shruti</strong> and{" "}
            <strong>AI VANI</strong> are gaining momentum. The platform ensures{" "}
            <strong>99.9% uptime</strong> for reliable performance.
          </p>
        </div>

        {/* Pie Chart Section */}
        {/* <h3 className="text-2xl font-semibold text-blue-900 mt-6 border-b pb-2">
          Service Distribution
        </h3>
        <div className="flex flex-col flex-wrap md:flex-row xl:flex-nowrap gap-6 mt-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-full md:w-64 h-64">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-full md:w-72 h-64">
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-full md:w-72 h-64">
              <Line data={lineData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div> */}

        {/* <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Traffic & Usage Insights
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            AI Medha has witnessed a steady rise in adoption across central and
            state government departments. With over{" "}
            <strong>10 million+ API hits</strong> in the last year, services
            like <strong>AI Panini</strong> and <strong>AI Nibhrit</strong>{" "}
            account for nearly 60% of total usage. Peak traffic is observed
            during working hours (10 AM–5 PM IST), primarily for language
            translation, document anonymization, and virtual assistant
            deployments. Real-time systems such as <strong>AI Shruti</strong>{" "}
            and <strong>AI VANI</strong> show growing traction with increasing
            demand for audio-based interaction models. The platform ensures{" "}
            <strong>99.9% uptime</strong> and handles concurrent user requests
            through a secure, scalable infrastructure powered by NAPIX.
          </p>
        </div> */}

        {/* Live System Health */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b pb-2">
            System Health & Uptime
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-sm text-gray-500">System Uptime</p>
              <p className="text-3xl font-bold text-green-600">99.95%</p>
            </div>
            {/* <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-sm text-gray-500">Last Downtime</p>
              <p className="text-3xl font-bold text-red-600">12 Mar 2025</p>
            </div> */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-sm text-gray-500">Avg API Latency</p>
              <p className="text-3xl font-bold text-blue-600">850ms</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        {/* <h3 className="mt-6 text-2xl font-semibold text-blue-900 border-b pb-3">
          Available Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-lg transition hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                {service.icon}
                <h4 className="text-lg font-semibold text-blue-900">
                  {service.name}
                </h4>
              </div>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="text-gray-700 mt-2 font-medium">
                Usage: {service.usage}
              </p>
              <img
                src={service.image}
                alt={service.name}
                className="mt-4 rounded-lg w-full h-40 object-cover"
              />
            </div>
          ))}
        </div> */}

        {/* Logs Section */}
        {/* <h3 className="text-2xl font-semibold text-blue-900 mt-6 border-b pb-2">
          Recent Activity Logs
        </h3>
        <div className="bg-gray-300 p-4 rounded-lg shadow-md max-h-80 overflow-auto">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-3 rounded-lg mb-2 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              {getLogIcon(log.type)}
              <div>
                <p className="text-gray-800 text-sm font-medium">
                  {log.message}
                </p>
                <p className="text-gray-500 text-xs">{log.time}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Overview;
