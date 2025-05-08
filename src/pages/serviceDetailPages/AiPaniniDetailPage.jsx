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
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-gray-50 text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <div className="overflow-auto flex flex-grow">
        <div className="p-6 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI PANINI</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Panini is a neural machine translation service that supports
            translation between English and 11 Indian languages including Hindi,
            Bengali, Gujarati, Kannada, Malayalam, Marathi, Oriya, Punjabi,
            Tamil, Telugu, and Assamese. Built to enable seamless multilingual
            communication across digital platforms.
          </p>

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

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Summary
            </h3>
            <p className="text-base text-gray-700">
              AI Panini bridges the language gap across digital platforms,
              enabling government and public interfaces to serve diverse
              linguistic populations. With strong adoption across ministries and
              customizable APIs, it is a key enabler of multilingual governance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiPaniniDetailPage;
