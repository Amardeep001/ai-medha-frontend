import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const mockModels = [
  {
    id: "vihangam-traffic-monitor",
    name: "Aerial Traffic Monitor",
    category: "Surveillance",
    sector: "Transport",
    description:
      "Monitors real-time traffic and congestion using drone footage and AI object tracking.",
    image: "https://picsum.photos/400/300?random=10",
    metrics: {
      accuracy: "96.8%",
      latency: "Low (<200ms)",
    },
    version: "v1.5",
  },
  {
    id: "vihangam-disaster-response",
    name: "Disaster Mapping AI",
    category: "Emergency Response",
    sector: "Disaster Management",
    description:
      "Generates heatmaps and identifies affected areas post-floods, earthquakes via drone imagery.",
    image: "https://picsum.photos/400/300?random=11",
    metrics: {
      accuracy: "94.3%",
      latency: "Medium",
    },
    version: "v1.2",
  },
];

const AiVihangamDrishtiDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#f3f1ef] text-gray-900">
      <Header toggleSidebar={() => {}} />
      <div className="overflow-auto flex flex-grow">
        <div className="px-4 py-6 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">
            AI VIHANGAM DRISHTI
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Vihangam Drishti is an aerial surveillance and situational
            awareness solution that uses drones and AI models to monitor
            traffic, identify environmental changes, and assist in emergency
            responses. Designed for scalability and remote monitoring, it
            empowers governments with real-time insights from above.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
          >
            ← Back to Services
          </button>

          {/* Model Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {mockModels.map((model) => (
              <Link to={`/services/model/${model.id}`} key={model.id}>
                <div className="bg-white rounded-lg shadow-md border hover:shadow-xl transition-all">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="rounded-t-lg w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-800 mb-1">
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
                    <p className="text-sm text-green-600 font-medium mt-2">
                      Version: {model.version}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Intelligence Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Model Intelligence & Architecture Overview
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The <strong>AI Vihangam Drishti</strong> platform integrates
              drone-captured data with high-performance AI models for image
              analysis, object detection, and terrain mapping. It operates with:
            </p>

            <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <strong>YOLOv7:</strong> Detects vehicles, people, and obstacles
                from aerial views.
              </li>
              <li>
                <strong>Image Segmentation Models:</strong> For land
                classification and flood detection.
              </li>
              <li>
                <strong>Geo-spatial Tagging:</strong> Annotates visuals with GPS
                metadata for mapping overlays.
              </li>
              <li>
                <strong>Live Drone Feed Pipeline:</strong> Ingests and processes
                footage for immediate insights.
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-green-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  🚁 <strong>Aerial Intelligence:</strong> Wide-area monitoring
                  using high-resolution drone feeds
                </li>
                <li>
                  📍 <strong>Geo-tagged Reporting:</strong> Incident locations
                  mapped in real-time
                </li>
                <li>
                  🔥 <strong>Disaster Response:</strong> Detects fires, floods,
                  and infrastructure collapse
                </li>
                <li>
                  ⚙️ <strong>Cloud Integration:</strong> Seamless data sync with
                  government GIS dashboards
                </li>
                <li>
                  🛠️ <strong>Rapid Deployment:</strong> Plug-and-play compatible
                  with multiple drone vendors
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-green-700 mb-2">
                Government Usage & Deployment
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                AI Vihangam Drishti is deployed across various civic and
                emergency agencies to assist in proactive monitoring of
                high-density zones, disaster zones, and infrastructure projects.
                The system integrates with GIS tools for live overlays, enabling
                administrators to take timely, data-driven action.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiVihangamDrishtiDetail;
