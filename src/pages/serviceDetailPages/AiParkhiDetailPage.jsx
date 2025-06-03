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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Parkhi</h2>
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

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Parkhi
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>AI Parkhi</strong> is an AI-powered image quality
              assessment service that automatically classifies uploaded images
              as good or bad based on visual clarity. It uses deep learning to
              return a quality score and a binary label for each image, helping
              government platforms improve efficiency, transparency, and
              document readability.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> NA
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported formats:</strong> PNG, JPG
                </li>
                <li>
                  <strong>Deployment options:</strong> REST API (POST method)
                </li>
                <li>
                  <strong>Average response time:</strong> Optimized for
                  high-throughput, concurrent requests
                </li>
                <li>
                  <strong>Workflow:</strong> Image Upload → Model Inference →
                  Score Calculation → Quality Prediction (0/1)
                </li>
                <li>
                  <strong>Category:</strong> Image Quality Assessment
                </li>
                <li>
                  <strong>Sector:</strong> Digital Document Verification /
                  Automation
                </li>
                <li>
                  <strong>Threshold:</strong> Score ≤ 51 → Bad (Label 0), Score{" "}
                  {">"} 51 → Good (Label 1)
                </li>
                <li>
                  <strong>Performance Metric:</strong> 77.6% accuracy on
                  KonIQ-10k dataset
                </li>
                <li>
                  <strong>Model:</strong> Ensemble of VGG16, ResNet50,
                  InceptionV3, InceptionResNetV2, DenseNet201
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI Parkhi Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Parkhi is currently being integrated into government systems
                such as PESO's Online Licensing Portal to ensure clarity and
                legibility of uploaded documents. By streamlining the
                verification of scanned documents and forms, the solution
                reduces manual effort and improves transparency across digital
                workflows.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Quality control for scanned documents uploaded to e-Governance
                  portals
                </li>
                <li>
                  Automated validation of licenses, certificates, and identity
                  proofs
                </li>
                <li>
                  Screening blurry or unreadable images during citizen service
                  registration
                </li>
                <li>
                  Enhancing document verification during online application
                  submissions
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Possible Users
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Central and State Government Departments</li>
                <li>Regulatory Authorities and Licensing Bodies</li>
                <li>e-Governance Portals and Public Service Platforms</li>
                <li>Online Document Verification Systems</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow from uploading the image to
              receiving the quality classification result:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> User uploads a PNG or JPG image to the
                API for quality evaluation.
              </li>
              <li>
                <strong>Image Reception:</strong> API accepts the image through
                a POST request with content type JSON or Multipart.
              </li>
              <li>
                <strong>Preprocessing:</strong> The image is preprocessed to
                meet model input requirements.
              </li>
              <li>
                <strong>Model Inference:</strong> The system uses a fusion of
                five deep learning models (VGG16, ResNet50, InceptionV3,
                InceptionResNetV2, DenseNet201) trained on the KonIQ-10k
                dataset.
              </li>
              <li>
                <strong>Score Calculation:</strong> The models compute a
                perceptual image quality score.
              </li>
              <li>
                <strong>Classification:</strong> Based on a threshold of 51, the
                system classifies the image as:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    <strong>Score ≤ 51:</strong> Label 0 - BAD Quality
                  </li>
                  <li>
                    <strong>Score &gt; 51:</strong> Label 1 - GOOD Quality
                  </li>
                </ul>
              </li>
              <li>
                <strong>Output Delivery:</strong> API returns a JSON response
                with the image quality score and prediction label.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Parkhi Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit an official
                request via NIC channels with the use case for image quality
                classification. Approval is required from the concerned
                department or division.
              </li>
              <li>
                <strong>API Access:</strong> Access is provided through a
                secured endpoint hosted on NIC infrastructure. Credentials and
                endpoint documentation are shared post-approval.
              </li>
              <li>
                <strong>Image Submission:</strong> Submit image files in PNG or
                JPG format via POST request. Use JSON or multipart content type
                depending on the integration method.
              </li>
              <li>
                <strong>Request Format:</strong> Ensure the payload includes the
                image and adheres to the API specification (e.g., base64-encoded
                string or multipart upload).
              </li>
              <li>
                <strong>Model Inference:</strong> The API internally processes
                the image using an ensemble of five deep learning models trained
                on the KonIQ-10k dataset.
              </li>
              <li>
                <strong>Output Reception:</strong> Receive a JSON response
                containing the image quality score and its classification label
                (0 for BAD, 1 for GOOD).
              </li>
              <li>
                <strong>Result Utilization:</strong> Use the output for
                filtering low-quality images in document processing, improving
                OCR accuracy, or validating scanned uploads in workflows.
              </li>
            </ol>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Available only within the NIC
                network environment through secure internal endpoints.
              </li>
              <li>
                <strong>Firewall Configuration:</strong> Access is restricted to
                whitelisted IPs as per NIC guidelines to ensure data security.
              </li>
              <li>
                <strong>Access Control:</strong> Enforced using{" "}
                <strong>IP whitelisting</strong> and authenticated API
                credentials issued post-approval.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiParkhiDetail;
