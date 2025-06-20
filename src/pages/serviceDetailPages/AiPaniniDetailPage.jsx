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
  Legend,
} from "recharts";
import TranslationImage from "../../images/translation_image.jpg";

const departmentChartData = [
  { name: "AI Shruti", value: 32295 },
  { name: "Agricultural Informatics Division", value: 77799 },
  { name: "Allahabad High Court", value: 11 },
  { name: "Collabfiles", value: 4539 },
  { name: "Department of Social Justice and Empowerment", value: 710 },
  { name: "Digital NIC", value: 126361 },
  { name: "eCourt MMP", value: 216060 },
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
  "Dogri",
  "Konkani",
  "Gujarati",
  "Hindi",
  "Kannada",
  "Kashmiri (Arabic)",
  "Kashmiri (Devanagari)",
  "Maithili",
  "Malayalam",
  "Marathi",
  "Manipuri (Bengali)",
  "Manipuri (Meitei)",
  "Nepali",
  "Oriya",
  "Punjabi",
  "Sanskrit",
  "Santali",
  "Sindhi (Arabic)",
  "Sindhi (Devanagari)",
  "Tamil",
  "Telugu",
  "Urdu",
  "Braille",
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

      <div className="overflow-auto flex flex-grow flex-col">
        {/* Hero Section */}
        <section className="w-full bg-[#eee5dc] py-12">
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-20">
            <div className="flex flex-wrap items-center gap-x-4 mb-6">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                ← Back to Services
              </button>
              <a
                href="https://demoai.nic.in/translation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
              >
                🌐 Try AI Panini
              </a>
            </div>

            <h2 className="text-4xl font-bold text-blue-900 mb-4">AI Panini</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              AI Panini is designed to provide a reliable translation service
              for Indian government departments, facilitating seamless
              translation between English and 22 official Indic languages.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full bg-[#e7e7e7] py-12">
          <div className="max-w-screen-2xl mx-auto px-20">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              About AI Panini
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              AI-Panini is a neural machine translation service supporting
              bidirectional translations between English and 22 Indic
              languages... [trimmed for brevity]
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Copyright:</strong> NIC
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
                  <strong>Average translation response time:</strong> Approx. 3
                  seconds for standard-length text inputs
                </li>
                <li>
                  <strong>Workflow:</strong> Input → Pre-processing →
                  Intermediate Processing → Output
                </li>
                <li>
                  <strong>Category:</strong> Neural Machine Translation
                </li>
                <li>
                  <strong>Sector:</strong> Language AI
                </li>
                <li>
                  <strong>Accuracy:</strong> 90–95% (language-dependent)
                </li>
                <li>
                  <strong>Latency:</strong> Approx. 3 sec
                </li>
                <li>
                  <strong>Version:</strong> v1.0.0
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
                enable seamless multilingual translation services. By supporting
                translation across 22 indic languages and English, AI Panini
                plays a vital role in enhancing accessibility, governance, and
                citizen engagement across the nation.
              </p>
              <p className="text-sm text-gray-700 mt-3">
                <strong>Organizations using AI Panini include:</strong>
              </p>
              <ul className="list-disc list-inside ml-5 text-sm text-gray-700">
                <li>Supreme Court</li>
                <li>Agricultural Informatics Division</li>
                <li>eCourt MMP</li>
                <li>NIC Tejas</li>
                <li>and many more.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Document translation between Indic languages and English.
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
          </div>
        </section>

        {/* Language Table */}
        <section className="w-full bg-[#f8f7f8] py-12">
          <div className="max-w-screen-2xl mx-auto px-20">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Language Coverage Table
            </h3>
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Language</th>
                  <th className="p-2 border">Bidirectional Support</th>
                </tr>
              </thead>
              <tbody>
                {supportedLanguages.map((lang, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border">{lang}</td>
                    <td className="p-2 border">Yes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Charts Section */}
        <section className="w-full bg-[#cdd2dd] py-12">
          <div className="max-w-screen-2xl mx-auto px-20 grid lg:grid-cols-2 gap-6">
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
                Department-wise Usage Data
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Total Session hits in Annually year 2024:{" "}
                <strong>1,04,25,825</strong>
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
        </section>

        {/* How to Use */}
        <section className="w-full bg-[#e6e1e3] py-12">
          <div className="max-w-screen-2xl mx-auto px-20">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Panini Service
            </h3>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>
                Fill out the <strong>User Service Request Form</strong> via NIC
                Cloud Portal.
              </li>
              <li>
                Include project name, use case, and requested source-target
                language pairs.
              </li>
              <li>
                Submit with a signed user request letter to initiate onboarding.
              </li>
              <li>
                Choose an integration method: <strong>NAPIX Integration</strong>{" "}
                or <strong>Direct API Access</strong>.
              </li>

              {/* NAPIX Integration Steps */}
              <li>
                <strong>NAPIX Integration:</strong>
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>Register on the NAPIX platform.</li>
                  <li>
                    Apply for API access via the user service request form.
                  </li>
                  <li>
                    After verification by a Director-level or higher authority,
                    credentials will be issued.
                  </li>
                  <li>
                    You will receive a <strong>Client ID</strong> and{" "}
                    <strong>Secret ID</strong> for authentication.
                  </li>
                  <li>
                    Use these credentials in each API request to access
                    translation services.
                  </li>
                </ul>
              </li>

              {/* Direct API Access Steps */}
              <li>
                <strong>Direct API Access:</strong>
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>
                    Route requests through NICNET VM or VPN for secure access.
                  </li>
                  <li>
                    Use the available API endpoints to directly access
                    translation services.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        {/* Network Access */}
        <section className="w-full bg-[#e7ecee] py-12">
          <div className="max-w-screen-2xl mx-auto px-20">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> NIC & NAPIX
              </li>
              <li>
                <strong>Firewall Configuration:</strong> Whitelisted IPs only
              </li>
              <li>
                <strong>Access Control:</strong> VPN & IP whitelisting
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AiPaniniDetailPage;
