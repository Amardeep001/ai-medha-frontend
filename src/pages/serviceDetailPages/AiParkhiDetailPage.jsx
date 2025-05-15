import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header"; // Adjust based on your layout
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const mockModels = [
  {
    id: "parkhi-cam-monitor",
    name: "Camera Monitoring AI",
    category: "Surveillance",
    sector: "Transport",
    description:
      "Real-time object detection and activity tracking in public areas using CCTV feeds.",
    image: "https://picsum.photos/400/300?random=1",
    metrics: {
      accuracy: "97%",
      latency: "Low (<150ms)",
    },
    version: "v2.1",
  },
  {
    id: "parkhi-face-id",
    name: "Facial Recognition",
    category: "Security",
    sector: "Law Enforcement",
    description:
      "Detects and verifies identities from live or recorded feeds with facial embeddings.",
    image: "https://picsum.photos/400/300?random=2",
    metrics: {
      accuracy: "95.5%",
      latency: "Moderate",
    },
    version: "v1.9",
  },
  // Add more models if needed
];

const AiParkhiDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => {}} />
      <div className="overflow-auto flex flex-grow">
        <div className="px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mt-3 mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            ← Back to Services
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI PARKHI</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Parkhi is an intelligent video surveillance and incident
            detection system designed to enhance road and civic infrastructure
            monitoring. It leverages advanced AI models for recognizing
            violations, object tracking, crowd analytics, and incident alerts
            using real-time CCTV feeds. This system is tailored for government
            use in public safety and urban administration.
          </p>

          {/* Model Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {mockModels.map((model) => (
              <Link to={`/services/model/${model.id}`} key={model.id}>
                <div className="bg-white rounded-lg shadow-md border hover:shadow-xl transition-all">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="rounded-t-lg w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-blue-800 mb-1">
                      {model.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Category:</strong> {model.category}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Sector:</strong> {model.sector}
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      {model.description}
                    </p>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>
                        <strong>Accuracy:</strong> {model.metrics.accuracy}
                      </p>
                      <p>
                        <strong>Latency:</strong> {model.metrics.latency}
                      </p>
                    </div>
                    <p className="text-sm text-blue-600 font-medium mt-2">
                      Version: {model.version}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Intelligence Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Model Intelligence & Architecture Overview
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The <strong>AI Parkhi</strong> platform is built for real-time
              surveillance with an integrated AI engine for tracking vehicles,
              identifying infractions like helmetless riding, and alerting for
              emergencies. It uses a combination of:
            </p>

            <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <strong>YOLOv7 & SSD Models:</strong> Object detection for
                vehicles, helmets, and persons.
              </li>
              <li>
                <strong>Deep SORT & ByteTrack:</strong> For multi-object
                tracking across frames and camera feeds.
              </li>
              <li>
                <strong>Facial Recognition Embeddings:</strong> Detect known and
                unknown faces with confidence scoring.
              </li>
              <li>
                <strong>Integrated Alert System:</strong> Sends incident alerts
                to dashboards in real-time.
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  📹 <strong>Live Feed Analysis:</strong> Processes HD CCTV
                  feeds in real-time
                </li>
                <li>
                  🚨 <strong>Incident Detection:</strong> Identifies road
                  accidents, crowd surge, and no-helmet scenarios
                </li>
                <li>
                  👥 <strong>Facial Recognition:</strong> Accurate up to 95.5%
                  with fallback alerts
                </li>
                <li>
                  📈 <strong>Scalability:</strong> GPU-powered backend supports
                  100+ feeds concurrently
                </li>
                <li>
                  🧠 <strong>Edge/Cloud Deployment:</strong> Can run at traffic
                  intersections or cloud clusters
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Government Usage & Deployment
              </h4>
              <p className="text-gray-700 text-sm">
                AI Parkhi is deployed in various civic bodies and Smart City
                missions, including cities in Telangana, Maharashtra, and West
                Bengal. It has helped reduce incident response time and improved
                traffic enforcement significantly.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Disclaimers & Limitations
              </h4>
              <p className="text-sm text-gray-700">
                Accuracy may vary with poor lighting, occlusion, or outdated
                camera quality. Models continuously improve with real-time
                feedback and upgraded training datasets from deployed cities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiParkhiDetail;
