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
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => {}} />
      <div className="overflow-auto flex flex-grow">
        <div className="px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mt-3 mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition-all"
          >
            ← Back to Services
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            AI Vihangam Drishti
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Vihangam Drishti is an aerial surveillance and situational
            awareness solution that uses drones and AI models to monitor
            traffic, identify environmental changes, and assist in emergency
            responses. Designed for scalability and remote monitoring, it
            empowers governments with real-time insights from above.
          </p>

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

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI VihangamDrishti
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>AI VihangamDrishti</strong> is a computer vision-based
              service that analyzes drone imagery of rural/abadi areas in India
              to create a digital map of infrastructure assets such as roads and
              rooftops. Leveraging a transformer-based segmentation model, it
              classifies drone images into six different classes — RCC roof,
              tiled roof, tin sheet roof, other buildups, metallic road, and
              non-metallic road — and returns their latitude-longitude
              coordinates in geoJSON format. The service is actively utilized by
              platforms like <code>grammanchitra.gov.in</code> to assess rooftop
              areas for solar panel installation and infrastructure planning.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> In process
              </p>
              <p>
                <strong>Copyright:</strong> NA
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported formats:</strong> TIF, tiff (under 30MB)
                </li>
                <li>
                  <strong>Deployment options:</strong> REST API (POST method)
                </li>
                <li>
                  <strong>Workflow:</strong> Drone Image Upload → Segmentation
                  Model → GeoJSON Output with Class & Coordinates
                </li>
                <li>
                  <strong>Category:</strong> Computer Vision
                </li>
                <li>
                  <strong>Sector:</strong> Rural Mapping / Infrastructure
                  Monitoring
                </li>
                <li>
                  <strong>Performance Metric:</strong> mIoU (mean Intersection
                  over Union)
                </li>
                <li>
                  <strong>Model:</strong> Transformer-based segmentation model
                </li>
                <li>
                  <strong>Parameters:</strong> Learning rate, batch size, epoch
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI VihangamDrishti Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI VihangamDrishti is currently being used by{" "}
                <code>grammanchitra.gov.in</code> to provide detailed geospatial
                maps of RCC rooftops to aid solar panel installation initiatives
                and infrastructure visualization across Indian villages.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Identifying rooftops suitable for solar panel installation
                </li>
                <li>
                  Mapping and classifying roads and building rooftops in rural
                  areas
                </li>
                <li>
                  Estimating slum distribution via “other buildups”
                  classification
                </li>
                <li>Monitoring land encroachments using building top views</li>
                <li>
                  Improving village road infrastructure through road surface
                  classification
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Possible Users
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Ministry of Panchayati Raj</li>
                <li>Survey of India</li>
                <li>Solar Energy Deployment Agencies</li>
                <li>Local Governance and Urban Planning Bodies</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow from uploading the drone image to
              receiving the annotated output:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> User uploads a top-view drone image file
                in TIF/tif/tiff format (max size 30 MB).
              </li>
              <li>
                <strong>Image Reception:</strong> Image is submitted via POST
                request to the annotation API endpoint.
              </li>
              <li>
                <strong>Preprocessing:</strong> The image is preprocessed to
                align with model requirements and optimize segmentation.
              </li>
              <li>
                <strong>Model Inference:</strong> A transformer-based
                segmentation model analyzes the image and classifies it into 6
                categories: RCC roof, tiled roof, tin sheet roof, other
                buildups, metalled road, and un-metalled road.
              </li>
              <li>
                <strong>Geo-Annotation:</strong> Each predicted class region is
                tagged with latitude-longitude coordinates.
              </li>
              <li>
                <strong>Output Generation:</strong> A geoJSON file is created
                containing class names and their corresponding geographic
                coordinates.
              </li>
              <li>
                <strong>Delivery:</strong> The annotated result is returned to
                the user via API in geoJSON format for integration with GIS
                platforms like ArcMap.
              </li>
            </ul>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI VihangamDrishti Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Account Creation:</strong> Create an account on the{" "}
                <strong>NAPIX</strong> platform to initiate secure communication
                with the AIRD servers.
              </li>
              <li>
                <strong>Credential Issuance:</strong> Once the account is
                verified, credentials will be issued for accessing the service.
              </li>
              <li>
                <strong>Service Access:</strong> The API is accessible via both
                the <strong>NIC Network</strong> and <strong>NAPIX</strong>{" "}
                platform. No additional IP whitelisting or port configuration is
                needed when accessed through NAPIX.
              </li>
              <li>
                <strong>Input Preparation:</strong> Prepare drone imagery in
                .tif/.tiff/.TIF format (file size should not exceed 30MB).
              </li>
              <li>
                <strong>API Request:</strong> Submit a <strong>POST</strong>{" "}
                request to the endpoint:{" "}
                <code>https://10.197.112.27:8182/api/v1/annotation</code> along
                with the image.
              </li>
              <li>
                <strong>Output Handling:</strong> The API returns a{" "}
                <strong>GeoJSON</strong> file containing predicted rooftop and
                road classes with corresponding latitude and longitude
                coordinates.
              </li>
              <li>
                <strong>Use of Output:</strong> Use the annotation data for
                infrastructure planning, digital mapping, rooftop solar
                analysis, or rural development projects through platforms like
                Grammanchitra.
              </li>
            </ol>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> The service is accessible both
                through the internal <strong>NIC Network</strong> and externally
                via the <strong>NAPIX platform</strong>, ensuring secure and
                controlled connectivity.
              </li>
              <li>
                <strong>Access Simplicity via NAPIX:</strong> When accessed
                through NAPIX, the API does not require additional firewall
                configurations or port openings, making integration seamless for
                external stakeholders.
              </li>
              <li>
                <strong>Security Enforcement:</strong> Credential-based access
                control is used to authenticate users and services, ensuring
                secure interaction with the AI VihangamDrishti API.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiVihangamDrishtiDetail;
