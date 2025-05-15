import { useParams, useNavigate, Link } from "react-router-dom";
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
} from "recharts";
import TranslationImage from "../../images/translation_image.jpg";

const mockModels = [
  {
    id: "m1",
    name: "Indian Language Translation Model",
    category: "Neural Machine Translation",
    sector: "Language AI",
    description:
      "Performs automatic translation between 11 Indian languages and English using NMT architecture.",
    metrics: {
      accuracy: "90–95% (language-dependent)",
      latency: "Fast (approx. real-time)",
      f1Score: "N/A",
    },
    version: "v1.0.0",
    image: TranslationImage,
  },
];

const departmentChartData = [
  { name: "Ministry of Home Affairs", value: 45672 },
  { name: "MeitY", value: 12345 },
  { name: "NIC Cloud Users", value: 18888 },
];

const docHitsData = [
  {
    name: "NIC Cloud Platform",
    count: 15783,
  },
  {
    name: "Language Corp Usage",
    count: 6210,
  },
];

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#6366f1"];

const AiPaniniDetailPage = () => {
  const { id } = useParams(); // ai_panini
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <div className="overflow-auto flex flex-grow">
        <div className="py-6 w-full max-w-screen-2xl px-20 mx-auto">
          <div className="mt-3 flex space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            >
              ← Back to Services
            </button>
            <div className="mb-6">
              <a
                href="https://demoai.nic.in/translation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
              >
                🌐 Try Live Demo
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI PANINI</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI-Panini is a neural machine translation service that enables
            reliable two-way translation between English and 22 Indian
            languages, including Hindi, Bengali, Tamil, Telugu, Marathi,
            Punjabi, Gujarati, Malayalam, Kannada, Assamese, and others, as well
            as Braille. Built on advanced NMT architecture, it ensures accurate,
            context-aware translations to support seamless multilingual
            communication for departmental and government use.
          </p>

          {/* Model Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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

          {/* Architecture Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Architecture & Language Capabilities
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The AI Panini platform is built using state-of-the-art transformer
              models under the NMT (Neural Machine Translation) architecture. It
              enables bidirectional translation for 11 Indian languages and
              English, offering real-time text processing at scale.
            </p>

            <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Transformer-based NMT models</strong> fine-tuned for
                Indian language grammar and syntax.
              </li>
              <li>
                Hosted on <strong>NIC Cloud infrastructure</strong> with
                scalable backend and API endpoints via NAPIx.
              </li>
              <li>
                Supports REST APIs for batch and real-time translation use
                cases.
              </li>
              <li>Accuracy improves with context-rich and clean inputs.</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-sm mb-2">
                Ideal Use Cases (Where AI Service Performs Best):
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Government document translation between Indian languages and
                  English.
                </li>
                <li>
                  Real-time translation in multilingual applications or portals.
                </li>
                <li>Language localization for citizen-facing services.</li>
                <li>
                  Translation of well-structured formal text like policies,
                  reports, and notices.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-sm mb-2">
                Limitations / Where It May Not Be Applicable:
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  May struggle with informal, slang-heavy, or regional dialect
                  variations not present in training data.
                </li>
                <li>
                  Context understanding may degrade with ambiguous or incomplete
                  sentences.
                </li>
                <li>
                  Low performance in translating noisy OCR-extracted text or
                  scanned handwritten documents.
                </li>
                <li>
                  Not suitable for legal, literary, or highly technical
                  translations requiring domain expertise.
                </li>
                <li>
                  Translation accuracy may drop with excessively long or
                  unstructured input data.
                </li>
              </ul>
            </div>

            {/* Additional Info Section */}
            <div className="border-t border-gray-200 mt-6 pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> None
              </p>
              <p>
                <strong>Copyright:</strong> NIC
              </p>
              <p>
                <strong>Awards Won:</strong> None
              </p>
              <p>
                <strong>Published Articles:</strong> None
              </p>
            </div>
          </div>

          {/* Summary Table */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Language Coverage Table
            </h3>
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Language</th>
                  <th className="p-2 border">Bidirectional Support</th>
                  <th className="p-2 border">Accuracy (Approx.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Hindi ↔ English</td>
                  <td className="p-2 border">Yes</td>
                  <td className="p-2 border">94%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Bengali ↔ English</td>
                  <td className="p-2 border">Yes</td>
                  <td className="p-2 border">91%</td>
                </tr>
                <tr>
                  <td className="p-2 border">Tamil ↔ English</td>
                  <td className="p-2 border">Yes</td>
                  <td className="p-2 border">89%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Department Adoption Pie Chart
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Departments using AI Panini translation APIs for language
                services.
              </p>
              <div className="h-72">
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

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Translation API Document Usage
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Tracks usage of the translation API by NIC and other agencies.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={docHitsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-10} textAnchor="end" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Summary & Steps */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Getting Started with AI Panini
            </h3>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>
                Fill out the <strong>Translation Service Request Form</strong>{" "}
                via NIC Cloud Portal.
              </li>
              <li>
                Include project name, use case, and requested source-target
                language pairs.
              </li>
              <li>
                Submit with a signed user request letter to initiate onboarding.
              </li>
              <li>
                Access the NAPIx APIs to integrate AI Panini into your digital
                systems.
              </li>
              <li>
                Translation services can then be used for websites, apps,
                portals, or internal software.
              </li>
            </ol>
          </div>

          {/* Network Availability Section */}
          <div className="mt-12 mb-6 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Only via the{" "}
                <strong>NIC (Network Interface Card)</strong> network (internal
                network).
              </li>
              <li>
                <strong>Ports to be Opened:</strong>{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">443</code>
              </li>
              <li>
                <strong>Firewall Configuration:</strong> Only whitelisted IPs
                can access the service.
              </li>
              <li>
                <strong>Access Control:</strong> Enforced via{" "}
                <strong>VPN</strong> and <strong>IP whitelisting</strong>.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiPaniniDetailPage;
