import {
  FaRobot,
  FaDatabase,
  FaEye,
  FaChartPie,
  FaClipboardCheck,
} from "react-icons/fa";

const ServicesList = () => {
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
  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
        Service Selection Portal
      </h2>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default ServicesList;
