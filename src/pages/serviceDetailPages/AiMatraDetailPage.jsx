import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AiMatraDetailPage = () => {
  const navigate = useNavigate();

  const departmentChartData = [
    { name: "Health Department", value: 94538719 },
    { name: "VANI", value: 56152 },
    { name: "AI Shruti Service", value: 12387 },
    { name: "Audit", value: 3206 },
    { name: "NAPIX", value: 2854 },
    { name: "Collab Files", value: 912 },
    { name: "Demo-AI Website", value: 570 },
    { name: "NIC Jharkhand", value: 271 },
    { name: "Odisha State Centre", value: 13 },
    { name: "GIS Division", value: 3 },
  ];

  const dataWithPercentage = departmentChartData.map((d) => ({
    ...d,
    nameWithPercent: `${d.name}`,
  }));

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

  const supportedLanguages = [
    "Assamese",
    "Bengali",
    "Bodo",
    "Gujarati",
    "Kannada",
    "Kashmiri",
    "Konkani gaon",
    "Maithili",
    "Malayalam",
    "Marathi",
    "Manipuri",
    "Manipuri",
    "Nepali",
    "Oriya",
    "Punjabi",
    "Sanskrit",
    "Sindhi",
    "Tamil",
    "Telugu",
    "Urdu",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#eee5dc] text-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 sm:px-20 py-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-3 mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Services
        </button>

        <h1 className="text-4xl font-bold text-blue-900 mb-3">AI Matra</h1>
        <p className="text-gray-700 mb-6 text-base leading-relaxed">
          AI Matra is a neural transliteration system designed to convert text
          from one script to another across 22 Indic languages. It supports both
          single and batch transliteration and is primarily used for converting
          names and addresses for display in local languages. Unlike
          translation, it focuses on phonetic consistency rather than semantic
          meaning.
        </p>

        {/* Overview & Use Cases */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            About AI Matra
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            AI Matra is a neural transliteration system designed to convert text
            between scripts across 22 Indic languages. Unlike translation, it
            focuses on phonetic representation, ensuring that names, addresses,
            and short phrases are rendered accurately in regional scripts
            without altering meaning. It plays a critical role in multilingual
            content rendering for government and citizen-facing applications.
          </p>

          <div className="pt-4 text-sm text-gray-600 space-y-1">
            <p>
              <strong>Last Security Audit Date:</strong> March 2025
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-md font-semibold text-blue-700 mb-2">
              Service Capabilities & Key Metrics
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <strong>Supported text input:</strong> Like names, addresses,
                and short phrases in Latin script
              </li>
              <li>
                <strong>Average response time:</strong> Less than 2 seconds for
                individual names
              </li>
              <li>
                <strong>Category:</strong> Natural Language Processing
              </li>
              <li>
                <strong>Sector:</strong> Language Technology / Localization
              </li>
              <li>
                <strong>Supported Languages:</strong> 22 Indic languages
                including Hindi, Bengali, Tamil, Telugu, Kannada, etc.
              </li>
              <li>
                <strong>Use Style:</strong> Transliteration only (no semantic
                translation)
              </li>
              <li>
                <strong>Workflow:</strong> Latin Input → Script Detection →
                Phonetic Mapping → Indic Script Output
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-md font-semibold text-blue-700 mb-2">
              AI Matra Rollout
            </h4>
            <p className="text-sm text-gray-700">
              AI Matra is being used across government platforms that display
              bilingual content. It enables the rendering of user-entered or
              system-generated English names and terms into regional languages.
              Integration pilots are active across state portals, digital forms,
              and language-sensitive interfaces for citizen services.
            </p>
            <p className="text-sm text-gray-700 mt-3">
              <strong>Organizations using AI Matra include:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-sm text-gray-700">
              <li>Health Project Division</li>
              <li>State e-Governance Portals</li>
              <li>Digital India Initiatives</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-md font-semibold text-blue-700 mb-2">
              Ideal Use Cases
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>
                Form autofill with native script names in public-facing
                applications
              </li>
              <li>
                Postal address transliteration for logistics and identity
                verification
              </li>
              <li>Bilingual certificates and document generation</li>
              <li>Integration in language localization workflows</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-blue-800 font-semibold text-md mb-2">
              Possible Users
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>State and Central Government e-Services Platforms</li>
              <li>Citizen Service Portals and Application Forms</li>
              <li>
                Departments handling identity, transport, or education records
              </li>
              <li>NIC and its Language Technology Projects</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6 ">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Language Coverage Table
          </h3>
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Language</th>
                <th className="p-2 border">Bidirectional Support</th>
              </tr>
            </thead>
            <tbody>
              {supportedLanguages.map((item) => {
                return (
                  <>
                    <tr>
                      <td className="p-2 border">{item}</td>
                      <td className="p-2 border">Yes</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Department Adoption Chart
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Departments using AI Matra transliteration service for Indic
              language rendering.
            </p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={dataWithPercentage}
                    cx="50%"
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
                    formatter={(value) => new Intl.NumberFormat().format(value)}
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
              Department-wise Usage Data
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Total Session hits from April 2024 to March 2025:{" "}
              <strong>98,98,99,06</strong>
            </p>
            <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th scope="col" className="px-4 py-2 font-semibold">
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-right"
                    >
                      Usage Count
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {departmentChartData
                    .sort((a, b) => b.value - a.value)
                    .map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2 text-right">
                          {item.value.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            End-to-End Flow
          </h3>

          <p className="text-sm text-gray-700 mb-4">
            Below is the step-by-step flow from receiving the Roman script input
            to generating the transliterated output in the target Indic script:
          </p>

          <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
            <li>
              <strong>Input:</strong> User enters names, addresses, or phrases
              in Latin (Roman) script.
            </li>
            <li>
              <strong>Language Detection:</strong> The system identifies the
              target Indic language for output based on user selection or
              context.
            </li>
            <li>
              <strong>Pre-processing:</strong> The input string is normalized,
              cleaned, and tokenized to handle abbreviations, spelling
              variations, and phonetic nuances.
            </li>
            <li>
              <strong>Transliteration Engine:</strong> AI Matra applies a neural
              model to convert the Roman text into its phonetic equivalent in
              the target script.
            </li>
            <li>
              <strong>Script Rendering:</strong> The transliterated text is
              reconstructed using Unicode-compliant fonts for accurate script
              display.
            </li>
            <li>
              <strong>Output Generation:</strong> The system returns the
              transliterated string in the chosen Indic language script.
            </li>
            <li>
              <strong>Delivery:</strong> Output is delivered via REST API or
              rendered directly on the integrated front-end (web/app/form).
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            How to Use AI Matra Service
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
            <li>
              Fill out the <strong>Service Request Form</strong> via NIC Cloud
              Portal, including use case and target Indic languages for
              transliteration.
            </li>
            <li>
              Submit the form along with a signed request letter from your
              department for approval and onboarding.
            </li>
            <li>
              Choose integration method: <strong>NAPIX Integration</strong> or{" "}
              <strong>Direct API Access</strong>.
            </li>

            {/* NAPIX Integration Steps */}
            <li>
              <strong>NAPIX Integration:</strong>
              <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                <li>
                  Register on the NAPIX platform using departmental credentials.
                </li>
                <li>
                  Request transliteration API access via the NAPIX interface.
                </li>
                <li>
                  Upon verification, receive a <strong>Client ID</strong> and{" "}
                  <strong>Secret Key</strong>.
                </li>
                <li>
                  Use these credentials in every API request for secure access.
                </li>
              </ul>
            </li>

            {/* Direct API Access Steps */}
            <li>
              <strong>Direct API Access:</strong>
              <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                <li>Connect via NICNET or VPN for secure access.</li>
                <li>
                  Use POST requests to submit Roman-script input text and target
                  language (e.g., Hindi, Bengali, Tamil) for real-time
                  transliteration.
                </li>
                <li>
                  The API responds with{" "}
                  <strong>Unicode transliterated output</strong> ready for
                  display or official use.
                </li>
                <li>
                  Optionally, use batch mode to upload bulk lists (JSON/files)
                  for transliterating names and addresses.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="mt-8 mb-6 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Network Access Details
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>
              <strong>Network Access:</strong> internal only via the{" "}
              <strong>NIC</strong> Network, and external via{" "}
              <strong>NAPIX</strong>.
            </li>
            <li>
              <strong>Firewall Configuration:</strong> Only whitelisted IPs can
              access the service.
            </li>
            <li>
              <strong>Access Control:</strong> Enforced via <strong>VPN</strong>{" "}
              and <strong>IP whitelisting</strong>.
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AiMatraDetailPage;
