import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    name: "Multilingual Translation Engine Overview",
    category: "Neural Machine Translation",
    sector: "Language AI",
    description:
      "Performs automatic translation between 22 Indian languages and English using NMT architecture.",
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
  { name: "AI Shruti", value: 32295 },
  { name: "Agricultural Informatics Division", value: 77799 },
  { name: "Allahabad High Court", value: 11 },
  { name: "Collabfiles", value: 4539 },
  { name: "Department of Social Justice and Empowerment", value: 710 },
  { name: "Digital NIC", value: 126361 },
  { name: "High Court of Jharkhand", value: 81 },
  { name: "Karnataka High Court", value: 9916 },
  { name: "Maharashtra State Center", value: 583 },
  { name: "Ministry of Ayush", value: 33 },
  { name: "NIC Tejas", value: 11042 },
  { name: "Napix", value: 11 },
  { name: "Patna High Court", value: 656 },
  { name: "Pondicherry Center", value: 9 },
  { name: "Supreme Court", value: 9849910 },
  { name: "VANI", value: 86444 },
  { name: "eCourt MMP", value: 216060 },
];

// Add percentage label for legend
const total = departmentChartData.reduce((sum, d) => sum + d.value, 0);
const dataWithPercentage = departmentChartData.map((d) => ({
  ...d,
  nameWithPercent: `${d.name}`,
}));

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

const COLORS = [
  "#4f46e5",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#6366f1",
  "#14b8a6",
  "#a855f7",
  "#eab308",
  "#f43f5e",
  "#22d3ee",
  "#8b5cf6",
  "#84cc16",
  "#ec4899",
  "#0ea5e9",
  "#f97316",
  "#3b82f6",
  "#6d28d9",
];

const AiPaniniDetailPage = () => {
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

          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Panini</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Panini is designed to provide a reliable translation service for
            Indian government departments, facilitating seamless translation
            between English and 22 official Indian languages. It supports both
            English-to-Indic and Indic-to-English translations, ensuring
            effective multilingual communication across departments.
          </p>

          {/* Architecture Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Panini
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              AI-Panini is a neural machine translation service that enables
              reliable two-way translation between English and 22 Indian
              languages, including Assamese, Bengali, Bodo, Dogri, Konkani,
              Gujarati, Hindi, Kannada, Kashmiri (Arabic), Kashmiri
              (Devanagari), Maithili, Malayalam, Marathi, Manipuri (Bengali),
              Manipuri (Meitei), Nepali, Oriya, Punjabi, Sanskrit, Santali,
              Sindhi (Arabic), Sindhi (Devanagari), Tamil, Telugu, Urdu, and
              Braille. Built on advanced NMT architecture, it ensures accurate,
              context-aware translations to support seamless multilingual
              communication for departmental and government use.
            </p>

            {/* Additional Info Section */}
            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Copyright:</strong> NIC
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported translation formats:</strong> Text, Webpage,
                  and Docx-to-Docx translation
                </li>
                <li>
                  <strong>Language coverage:</strong> 22 Indian languages
                  including Hindi, Tamil, Telugu, Bengali, Gujarati, Marathi,
                  and more
                </li>
                <li>
                  <strong>Deployment options:</strong> REST APIs, real-time and
                  batch translation
                </li>
                <li>
                  <strong>Average translation response time:</strong> Less than
                  3 seconds for standard-length text inputs
                </li>
                <li>
                  <strong>Workflow:</strong> Input → Pre-processing →
                  Intermediate Processing → Output → (Optional:
                  Storage/Feedback)
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI Panini Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Panini is being actively adopted across various government
                ministries, state departments, and judicial institutions to
                enable seamless multilingual translation services. The platform
                is already in use by the Ministry of Ayush, Lok Sabha, Supreme
                Court, Indian Judiciary, Department of Consumer Affairs, NIC,
                NIC Tejas, Digital NIC, and multiple High Courts including those
                of Allahabad, Uttarakhand, Guwahati, Sikkim, Patna, Karnataka,
                Calcutta, and Jharkhand. It is also being utilized by the
                Department of Social Justice and Endowments Informatics
                Division, Agricultural Informatics Division, Maharashtra State
                Centre, and the Pondicherry Centre. By facilitating translation
                across 22 Indian languages and English, AI Panini plays a vital
                role in enhancing accessibility, governance, and citizen
                engagement across the nation.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Ideal Use Cases
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
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Limitations
              </h4>
              <p className="text-sm text-gray-700">
                AI Panini processes up to 1024 tokens per request.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Translation Solutions Overview
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
                    </div>
                    <p className="text-sm text-blue-600 font-medium mt-2">
                      Version: {model.version}
                    </p>
                  </div>
                </div>
              ))}
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
                Department Adoption Chart
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
                      data={dataWithPercentage}
                      cx="50%" // Adjust to give space for right-side legend
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
                        maxWidth: "20vw",
                        textAlign: "left",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        lineHeight: "1.4em",
                      }}
                    />
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
              <div className="h-80">
                {" "}
                {/* Increased height slightly */}
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={docHitsData}
                    margin={{ top: 10, right: 30, left: 20, bottom: 10 }} // More bottom space
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      angle={-10}
                      textAnchor="end"
                      interval={0} // ensures all labels show
                      height={60} // sets space for angled labels
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />{" "}
                    {/* Moves legend up */}
                    <Bar dataKey="count" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Summary & Steps */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Panini Service
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
                Access the NAPIX APIs to integrate AI Panini into your digital
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
                <strong>NIC</strong> Network.
              </li>
              {/* <li>
                <strong>Ports to be Opened:</strong>{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">443</code>
              </li> */}
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
