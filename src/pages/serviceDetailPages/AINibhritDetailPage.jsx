import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
  LabelList,
} from "recharts";
import YoloImage from "../../images/yolo_image.jpg";
import OcrImage from "../../images/ocr_image.jpg";
import FlowChart from "../../images/serviceCatalogueImages/ai_nibhrit_flowchart.jpg";

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
      // f1Score: "N/A",
    },
    version: "v1.0.0",
    image: YoloImage,
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
      // f1Score: "N/A",
    },
    version: "v1.1.0",
    image: OcrImage,
  },
];

const departmentChartData = [
  { name: "Registration and Stamps Department, Telangana", value: 9108616 },
  { name: "NGDRS", value: 1409607 },
  { name: "Registration Department, Puducherry", value: 598760 },
  { name: "Registration and Stamps Department, Andhra Pradesh", value: 196846 },
  { name: "Revenue Department, Gujarat", value: 18126 },
  { name: "Real Estate Regulatory Authority, Himachal Pradesh", value: 11957 },
  { name: "Registration Department, Kerala", value: 330 },
  { name: "Stamps and Registration Department, Uttar Pradesh", value: 203 },
  { name: "Revenue Department, Jammu & Kashmir", value: 65 },
  { name: "Revenue and Disaster Management Department, Haryana", value: 61 },
];

const total = departmentChartData.reduce((sum, item) => sum + item.value, 0);

const dataWithPercentage = departmentChartData.map((item) => ({
  ...item,
  nameWithPercent: `${item.name} (${((item.value / total) * 100).toFixed(1)}%)`,
}));

// 🎨 10 Distinct Colors
const COLORS = [
  "#4f46e5", // Indigo
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#5d6471", // Gray-Blue
  "#6366f1", // Violet
  "#e11d48", // Rose
  "#0ea5e9", // Sky
  "#84cc16", // Lime
  "#a855f7", // Purple
];

const docHitsData = [
  {
    name: "Directorate of Registration\nWest Bengal",
    shortName: "DoR WB",
    count: 656884,
  },
  {
    name: "NGDRS",
    shortName: "NGDRS",
    count: 455,
  },
  {
    name: "Registration and Stamps Department, Andhra Pradesh",
    shortName: "RASD AP",
    count: 46,
  },
];

const AiNibhritDetailPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <div className="overflow-auto flex flex-grow">
        <div className="px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            ← Back to Services
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Nibhrit</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Nibhrit ensures end-to-end privacy by redacting Aadhaar, PAN,
            fingerprints, and QR codes using AI technologies like YOLOv5 and
            OCR, returning masked documents or JSON coordinates.
          </p>

          {/* Enhanced Intelligence Overview */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Nibhrit
              {/* Model Intelligence & Architecture Overview */}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>AI-Nibhrit</strong> is an AI-driven data privacy solution
              that automatically detects and masks{" "}
              <strong>personally identifiable information (PII)</strong> like
              Aadhaar numbers, PAN details, fingerprints, and QR codes in
              digital and scanned documents. Built for high adaptability, it
              ensures state-level compliance and supports both centralized and
              decentralized government operations across India. Its core aim is
              to protect citizen data from exposure, unauthorized access, and
              identity fraud in digital workflows.
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
            </ul>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> 06-12-2023 (Applied
                for renewal)
              </p>
              <p>
                <strong>Copyright:</strong> 31-01-2024
              </p>
              <p>
                <strong>Awards & Recognition:</strong> None
              </p>
              <p>
                <strong>Published Articles:</strong> None
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported file formats:</strong> PDF, PNG, JPG, JPEG,
                  JFIF
                </li>
                <li>
                  <strong>Language support:</strong> Separate AI models for
                  regional languages like Gujarati, Bengali (state-specific)
                </li>
                <li>
                  <strong>Processing speed:</strong> Avg. 20 sec per 30–40-page
                  document (varies by CPU)
                </li>
                <li>
                  <strong>Accuracy scores:</strong> PAN, Aadhaar, QR: 98%;
                  Fingerprint: 97%
                </li>
                <li>
                  <strong>Workflow:</strong> Document upload → Preprocessing →
                  Detection & OCR → Coordinate generation or direct masking →
                  Final output
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI Nibhrit Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Nibhrit is actively being used by several state registration
                departments, including those in West Bengal, Telangana,
                Maharashtra, Tripura, Puducherry, Andhra Pradesh, and Uttar
                Pradesh. Over 12 million documents were processed to identify
                Aadhaar numbers, PAN, QR codes, and fingerprints in the year
                2024. This reduced manual effort and improved compliance with
                privacy norms.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>

              <ul className="text-gray-700 text-sm space-y-2 ">
                <li className="flex items-start gap-2">
                  <span className="font-black">•</span>
                  <span>
                    <strong>Land & Property Document Handling:</strong> Used by
                    Stamps & Registration Departments to redact sensitive data
                    in sale deeds, registration papers, and encumbrance
                    certificates. Minimizes exposure risk during public access
                    or record retrieval.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">•</span>
                  <strong>
                    Real Estate Regulatory Authorities (RERA):
                  </strong>{" "}
                  Masks PII from property listings, builder submissions etc.
                  e-Governance Platforms: Ensure Aadhaar/PAN masking is in
                  digitally uploaded forms.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">•</span>
                  <strong>e-Governance Platforms:</strong> Ensure Aadhaar/PAN
                  masking is in digitally uploaded forms.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Limitations
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

          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Data Privacy Solutions Overview
            </h3>
            {/* Model Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5 ">
              {mockModels.map((model) => (
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
                      {/* <p>
                        <strong>F1 Score:</strong> {model.metrics.f1Score}
                      </p> */}
                    </div>
                    <p className="text-sm text-blue-600 font-medium mt-2">
                      Version: {model.version}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
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
            <div className="bg-white rounded-lg shadow-md p-8 sm:p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Department-wise Service Count
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Reflects API usage in year 2024 across different state
                departments utilizing AI Nibhrit for PII masking.
              </p>
              <div className="h-72 overflow-x-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={dataWithPercentage}
                      cx="40%" // Slightly more space for legend
                      cy="50%"
                      outerRadius={100}
                      label={false}
                    >
                      {dataWithPercentage.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip
                      formatter={(value) =>
                        new Intl.NumberFormat().format(value)
                      }
                    />

                    <Legend
                      layout="vertical"
                      align="right"
                      verticalAlign="middle"
                      formatter={(value, entry, index) =>
                        dataWithPercentage[index].nameWithPercent
                      }
                      wrapperStyle={{
                        fontSize: "12px",
                        maxWidth: "20vw", // responsive max width
                        textAlign: "left",
                        whiteSpace: "normal", // allow line wrapping
                        wordBreak: "break-word", // break long words
                        lineHeight: "1.4em",
                      }}
                    />
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

                    {/* Use shortName for XAxis label */}
                    <XAxis
                      dataKey="shortName"
                      angle={-10}
                      textAnchor="end"
                      interval={0}
                    />

                    <YAxis />

                    {/* Tooltip will show full name */}
                    <Tooltip
                      formatter={(value, name, props) => [value, "Hits"]}
                      labelFormatter={(label, props) => {
                        const fullName = docHitsData.find(
                          (item) => item.shortName === label
                        )?.name;
                        return fullName || label;
                      }}
                    />

                    <Legend />
                    <Bar dataKey="count" fill="#4f46e5">
                      <LabelList dataKey="count" position="top" fontSize={12} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* End-to-End Flow Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow from receiving the input document
              to delivering the masked output:
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> PDF or image files containing text and
                images with sensitive Personally Identifiable Information (PII).
              </li>
              <li>
                <strong>Input Document Acquisition:</strong> Accepts a scanned
                or digital document (PDF/image) possibly containing Aadhaar,
                PAN, fingerprints, and QR codes.
              </li>
              <li>
                <strong>Text Extraction via Tesseract OCR:</strong> Extracts
                machine-readable text from the document for further processing.
              </li>
              <li>
                <strong>PII Extraction from Text:</strong> NLP-based pattern
                matchers identify Aadhaar/PAN numbers from the extracted text.
              </li>
              <li>
                <strong>Image-based PII Detection:</strong> YOLO or other object
                detection models identify and locate image-based PII
                (fingerprints, QR).
              </li>
              <li>
                <strong>Masking of PII Regions:</strong> Applies masking
                (blackout or blur) on detected PII regions both from text and
                image segments.
              </li>
              <li>
                <strong>Document Reconstruction:</strong> Rebuilds the processed
                document and adds metadata on masked areas.
              </li>
              <li>
                <strong>Output Delivery:</strong> Returns the masked PDF or a
                JSON file specifying the coordinates of redacted regions.
              </li>
            </ul>

            {/* Optional Diagram Placeholder */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Data Flow Diagram (Visual)
              </h4>
              <img
                src={FlowChart} // Replace with actual diagram when available
                alt="Data Flow Diagram"
                className="rounded shadow-md "
              />
              <p className="text-xs text-gray-500 mt-2">
                * Illustrative diagram showing full processing pipeline.
              </p>
            </div>
          </div>

          {/* Steps to Use AI Nibhrit Service */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
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

          {/* Network Availability Section */}
          <div className="mt-12 mb-6 bg-white rounded-lg shadow-md p-8 ">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Available on NICNET and also
                accessible externally via <strong>NAPIX</strong>.
              </li>
              <li>
                <strong>Ports to be Opened:</strong>{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">5012</code> if
                using NICNET.
              </li>
              <li>
                <strong>Firewall Configuration:</strong> Ensure required ports
                are open and NIC's standard firewall rules are applied.
              </li>
              <li>
                <strong>Access Control:</strong> Enforced via{" "}
                <strong>IP Whitelisting</strong> and{" "}
                <strong>NAPIX Authentication</strong>.
              </li>
            </ul>
          </div>

          {/* Summary Section */}
          {/* <div className="mt-12 bg-white rounded-lg shadow-md p-6">
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
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiNibhritDetailPage;
