import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const mockModels = [
  {
    id: "m1",
    name: "PAN & Aadhaar Masking Model",
    category: "PII Detection",
    sector: "Data Privacy",
    description:
      "Uses YOLOv5 to identify and mask Aadhaar, PAN, and fingerprint regions.",
    metrics: {
      accuracy: "98%",
      latency: "20s (for 30–40 page docs)",
      f1Score: "N/A",
    },
    version: "v1.0.0",
    image: "https://picsum.photos/400/200?random=31",
  },
  {
    id: "m2",
    name: "OCR + Redaction Engine",
    category: "Text Extraction",
    sector: "Data Privacy",
    description:
      "Utilizes Tesseract OCR for extracting sensitive text regions for redaction.",
    metrics: {
      accuracy: "Image quality dependent",
      latency: "Varies by page size",
      f1Score: "N/A",
    },
    version: "v1.1.0",
    image: "https://picsum.photos/400/200?random=32",
  },
];

const departmentChartData = [
  { name: "Registration and Stamps Department, Telangana", value: 919515 },
  { name: "NGDRS", value: 296635 },
  { name: "Registration Department, Puducherry", value: 68437 },
  { name: "Revenue Department, Gujarat", value: 5813 },
  { name: "Registration and Stamps Department, Andhra Pradesh", value: 455 },
];

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#6366f1"];

const docHitsData = [
  {
    name: "Directorate of Registration\nWest Bengal",
    count: 73479,
  },
  {
    name: "NGDRS",
    count: 37,
  },
];

const AiNibhritDetailPage = () => {
  const { id } = useParams(); // ai_nibhrit
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-gray-50 text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <div className="overflow-auto flex flex-grow">
        <div className="p-6 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI NIBHRIT</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Nibhrit ensures end-to-end privacy by redacting Aadhaar numbers,
            PAN details, fingerprints, and QR codes using AI technologies like
            YOLOv5 and OCR (Tesseract). The system returns either masked
            documents or coordinates for masking in JSON format.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
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
                      <p>
                        <strong>F1 Score:</strong> {model.metrics.f1Score}
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

          {/* Enhanced Intelligence Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Model Intelligence & Architecture Overview
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The <strong>AI Nibhrit</strong> platform is built to ensure
              privacy and compliance in digital documentation by leveraging a
              suite of state-of-the-art AI models. These models are primarily
              trained to detect and mask{" "}
              <strong>personally identifiable information (PII)</strong> such as
              Aadhaar numbers, PAN cards, fingerprints, and QR codes.
            </p>

            <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <strong>YOLOv5 Object Detection:</strong> Used to detect
                Aadhaar, PAN, fingerprints, and QR regions with high accuracy.
              </li>
              <li>
                <strong>Tesseract OCR:</strong> Recognizes printed and scanned
                text for redaction tasks.
              </li>
              <li>
                <strong>OpenCV & TensorFlow:</strong> Applied for image
                analysis, pre-processing and deep-learning model integration.
              </li>
              <li>
                <strong>Secure Cloud & GPU Architecture:</strong> Kubernetes and
                NVIDIA BCM ensure scalability and GPU-powered inference across
                workloads.
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  📄 <strong>Supported file formats:</strong> PDF, PNG, JPG,
                  JPEG, JFIF
                </li>
                <li>
                  🌐 <strong>Language support:</strong> Separate AI models for
                  regional languages like Gujarati, Bengali (state-specific)
                </li>
                <li>
                  ⚡ <strong>Processing speed:</strong> Avg. 20 sec per
                  30–40-page document (varies by CPU)
                </li>
                <li>
                  📊 <strong>Accuracy scores:</strong> PAN, Aadhaar, QR: 98%;
                  Fingerprint: 97%
                </li>
                <li>
                  🧠 <strong>AI Workflow:</strong> Document upload →
                  Preprocessing → Detection & OCR → Coordinate generation or
                  direct masking → Final output
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Government Usage & Deployment
              </h4>
              <p className="text-gray-700 text-sm">
                AI Nibhrit is currently in use by several state registration
                departments including West Bengal, Telangana, Maharashtra,
                Tripura, Puducherry, Andhra Pradesh, and UP. These deployments
                demonstrate real-world applicability across varied regional
                formats and infrastructures.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Disclaimers & Limitations
              </h4>
              <p className="text-sm text-gray-700">
                While highly accurate, model performance may vary with poor scan
                quality or unfamiliar document layouts. OCR confidence can be
                lower on distorted, noisy images, and masking may misfire in
                extreme cases. Continuous model training and feedback from state
                deployments help address such limitations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Model Summary Table
            </h3>
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Model</th>
                  <th className="p-2 border">Use Case</th>
                  <th className="p-2 border">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Aadhaar Detection</td>
                  <td className="p-2 border">Number & Pattern Masking</td>
                  <td className="p-2 border">98%</td>
                </tr>
                <tr>
                  <td className="p-2 border">PAN Detection</td>
                  <td className="p-2 border">Alphanumeric Redaction</td>
                  <td className="p-2 border">98%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Fingerprint Region Masker</td>
                  <td className="p-2 border">Image region blackout</td>
                  <td className="p-2 border">97%</td>
                </tr>
                <tr>
                  <td className="p-2 border">QR Code Blurring</td>
                  <td className="p-2 border">QR scan blocking</td>
                  <td className="p-2 border">98%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Visual Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart: Department-wise Service Count */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Department-wise Service Count
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Reflects API usage in September across different state
                departments utilizing AI Nibhrit for PII masking.
              </p>
              <div className="h-72 overflow-x-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={departmentChartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({ name, percent }) =>
                        `${name.split(",")[0]} - ${(percent * 100).toFixed(1)}%`
                      }
                    >
                      {departmentChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart: Document-wise Service Count */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Document-wise Service Count
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Shows how many documents were processed by each department using
                AI Nibhrit services.
              </p>
              <div className="h-72 overflow-x-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={docHitsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      angle={-10}
                      textAnchor="end"
                      interval={0}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Steps to Use AI Nibhrit Service */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Nibhrit Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit an
                onboarding form signed by a Director-level officer from the user
                department.
              </li>
              <li>
                <strong>Middleware Setup:</strong> Install the middleware
                provided by the Nibhrit team on your local server or machine.
              </li>
              <li>
                <strong>NAPIx Integration:</strong> The middleware connects to
                AI Nibhrit services securely through the NAPIx platform.
              </li>
              <li>
                <strong>Local Preprocessing:</strong> Initial CPU-based
                preprocessing (file conversion, formatting) is handled locally
                before API interaction.
              </li>
              <li>
                <strong>PII Detection & Masking:</strong> The document is
                processed using AI models (YOLOv5, OCR) to detect and mask
                sensitive elements.
              </li>
              <li>
                <strong>Output Delivery:</strong> The response includes either a
                fully masked document or a JSON containing coordinates for
                masking.
              </li>
              <li>
                <strong>Reuse of Output:</strong> Previously masked documents
                can be reused locally, reducing the need for repeat API calls.
              </li>
            </ol>
          </div>

          {/* Summary Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Summary & Notes
            </h3>
            <p className="text-base text-gray-700">
              AI Nibhrit is currently integrated and live with several
              government departments across Indian states. It uses
              state-specific models for multilingual document handling and
              adapts to varying formats. While highly accurate, challenges
              remain in processing low-quality scans or unstructured formats.
              Future improvements could include benchmarking dashboards and
              visual evaluation reports.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiNibhritDetailPage;
