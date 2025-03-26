import { Pie, Bar, Line } from "react-chartjs-2";
import {
  FaRobot,
  FaDatabase,
  FaEye,
  FaChartPie,
  FaClipboardCheck,
} from "react-icons/fa";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const Overview = () => {
  const services = [
    {
      id: "model_management",
      name: "Model Management",
      description: "Efficiently manage and deploy AI models with ease.",
      usage: "Streamlines model lifecycle, from training to deployment.",
      icon: <FaDatabase className="text-blue-700 text-4xl" />, // Service Icon
      image: "https://picsum.photos/300/200?random=1", // Replace with actual image URL
    },
    {
      id: "ai_chatbot",
      name: "AI-Powered Chatbot",
      description: "Intelligent chatbot for automated interactions.",
      usage: "Enhances customer engagement and support.",
      icon: <FaRobot className="text-blue-700 text-4xl" />,
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: "digital_asset_catalogue",
      name: "Digital Asset Catalogue",
      description: "Centralized storage for AI-generated assets.",
      usage: "Organizes and manages digital AI assets effectively.",
      icon: <FaClipboardCheck className="text-blue-700 text-4xl" />,
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      id: "model_performance_governance",
      name: "Model Performance & Governance",
      description: "Monitor, evaluate, and govern AI model performance.",
      usage: "Ensures compliance, accuracy, and continuous improvements.",
      icon: <FaEye className="text-blue-700 text-4xl" />,
      image: "https://picsum.photos/300/200?random=4",
    },
    {
      id: "ai_service_insights",
      name: "AI Service Insights & Reports",
      description: "Comprehensive insights into AI service usage.",
      usage: "Provides analytics and reports for decision-making.",
      icon: <FaChartPie className="text-blue-700 text-4xl" />,
      image: "https://picsum.photos/300/200?random=5",
    },
  ];

  const logs = [
    {
      type: "success",
      message: "Model trained successfully!",
      time: "10:32 AM",
    },
    {
      type: "warning",
      message: "Data inconsistency detected!",
      time: "10:40 AM",
    },
    { type: "error", message: "API connection failed!", time: "10:45 AM" },
    { type: "success", message: "Deployment completed!", time: "11:00 AM" },
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

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
        AI Services Overview
      </h2>
      <div className="mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Pie Chart Section */}
          <h3 className="text-2xl font-semibold text-blue-900 mt-6 border-b pb-2">
            Service Distribution
          </h3>
          <div className="flex flex-col flex-wrap md:flex-row xl:flex-nowrap gap-6 mt-6">
            {/* Pie Chart */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64">
                <Pie data={pieData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-72 h-64">
                <Bar data={barData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>

            {/* Line Chart */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-72 h-64">
                <Line
                  data={lineData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <h3 className="mt-6 text-2xl font-semibold text-blue-900 border-b pb-3">
            Services & Insights
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
                  className="mt-4 rounded-lg w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Logs Section */}
          <h3 className="text-xl font-semibold text-blue-900 mt-6 border-b pb-2">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
