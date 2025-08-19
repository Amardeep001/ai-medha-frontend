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
import { pdfDownload } from "../../utils/pdfDownload";
import serviceMap from "../../utils/serviceMap";
import RequestServiceModal from "../../components/modals/RequestServiceModal";

const AiSatyapikaananDetailPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const satyapikaananData = [
    { name: "Sarathi Parivahan", value: 246200000 },
    { name: "Kanyashree", value: 287100000 },
    { name: "Utkarsh Bangla", value: 331900000 },
    { name: "AI Abhigyan", value: 6376800 },
    { name: "Drone Image Segmentation", value: 5487300 },
    { name: "CBSE", value: 4363300 },
    { name: "ePrison", value: 1559600 },
    { name: "Rupashree", value: 5886600 },
    { name: "E-Counselling Project", value: 669500 },
    { name: "PESO", value: 333900 },
    { name: "Meghalaya Pensioner Life Certificate", value: 261670 },
    { name: "MCD", value: 180560 },
    { name: "Rajbhawan-Uttarakhand", value: 5813 },
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
  ];

  const handleRequestFormDownload = async () => {
    const url = await pdfDownload(serviceMap.ai_satyapikaanan);
    if (url) {
      setPdfUrl(url);
    }
  };

  useEffect(() => {
    handleRequestFormDownload();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header />
      <div className="overflow-auto flex flex-grow">
        <div className="px-6 sm:px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <div className="mt-3 flex space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            >
              ← Back to Services
            </button>
            <div className="mb-6">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
                Download Service Request Form
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            AI Satyapikaanan
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Satyapikaanan is the "Face Verification as a Service", an
            AI-driven facial recognition platform developed by NIC to support
            digital governance. It addresses key identity challenges and enables
            citizen-centric services in sectors like education, agriculture,
            transport, and public administration.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Satyapikaanan
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI Satyapikaanan is an AI-driven{" "}
              <strong>Face Analytics as a Service</strong> platform developed by
              the National Informatics Centre (NIC) to bolster digital
              governance initiatives across India. It offers a secure,
              contactless, and non-invasive solution for advanced face analytics
              such as facial identity verification, face quality assessment etc,
              addressing critical challenges and enabling efficient,
              citizen-centric services.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Awards:</strong> AI Satyapikaanan was recognized under
                the <strong>Project Category</strong> in the prestigious{" "}
                <strong>20th CSI SIG eGovernance Awards 2022</strong>,
                highlighting its significant contribution to digital
                transformation.
              </p>
              {/* <p>
                <strong>Last Security Audit Date:</strong> currently{" "}
                <strong>in progress</strong>
              </p> */}
              <p>
                <strong>Copyright:</strong> SW - 15261/2022
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported modes: Real-time face analytics</strong> on
                  Android devices and <strong>Web integration</strong> for
                  broader accessibility.
                </li>
                <li>
                  <strong>AI Features:</strong> Face Detection, Face
                  Recognition, Face Verification, Face Quality Assessment, Face
                  Liveness Detection, Gesture Recognition
                </li>
                <li>
                  <strong>Workflow:</strong> The end-to-end process is
                  streamlined for efficiency:{" "}
                  <strong>
                    Face Image Capture → Face Analytics → Results Generation
                  </strong>
                </li>
                <li>
                  <strong>Category:</strong> Vision AI
                </li>
                <li>
                  <strong>Security Measures:</strong> Liveness detection to
                  prevent spoofing (e.g., printed photos, digital masks)
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  <strong>Attendance Management:</strong> Accurate and efficient
                  attendance counting and verification for employees, students,
                  and trainees.
                </li>
                <li>
                  <strong>Touchless ID Authentication:</strong> Secure and
                  convenient public service delivery requiring identity
                  verification without physical contact.
                </li>
                <li>
                  <strong>Identity Deduplication:</strong> Preventing duplicate
                  registrations and ensuring fairness in welfare schemes.
                </li>
                <li>
                  <strong>Verification Services:</strong> Streamlining pensioner
                  verification, license issuance, and other critical
                  authentication processes.
                </li>
                <li>
                  <strong>Quality Assessment Services:</strong> evaluation of
                  quality of uploaded facial images during registration.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Possible Users
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Central and State Government Departments</li>
                <li>
                  Public-facing verification services (e.g., Pass issuance,
                  Licensing)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Department Adoption Chart
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Departments leveraging AI Satyapikaanan for identity
                verification and other services during year 2024.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={satyapikaananData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      // label
                    >
                      {satyapikaananData.map((entry, index) => (
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
                      wrapperStyle={{
                        fontSize: "12px",
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

            {/* Usage Table */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Department-wise Usage Data
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Total AI Requests Served in 2024: <strong>33.28 Crore+</strong>
              </p>
              <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-2 font-semibold">Department</th>
                      <th className="px-4 py-2 font-semibold text-right">
                        Usage Count
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {satyapikaananData.map((item, index) => (
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
              The process of utilizing AI Satyapikaanan is designed to be
              straightforward, from input capture to decision response.
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> Real-time facial images or pre-uploaded
                images are captured via a mobile application or web interface.
              </li>
              <li>
                <strong>Processing:</strong> Based on the specific service opted
                for, the captured image undergoes advanced facial analytics.
              </li>
              <li>
                <strong>Result Generation:</strong> The platform generates a
                structured response, including the result status (e.g.,
                success/failure), a confidence score, and other relevant
                metrics, which is then sent back to the requesting system.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Satyapikaanan Service
            </h3>
            {/* <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit a request to
                NIC for onboarding with a signed approval letter from your
                department. Mention your intended use case (e.g., attendance,
                pensioner verification, etc.).
              </li>
              <li>
                <strong>Client Setup:</strong> Upon approval, NIC will provide
                comprehensive <strong>Developer Documentation</strong>. Access
                to the necessary <strong>client code/middleware</strong> will be
                granted, enabling seamless integration with your existing
                systems.
              </li>
            </ol> */}
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>
                Fill out the{" "}
                <strong>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    User Service Request Form
                  </a>
                </strong>{" "}
                via AI Medha Platform.
              </li>
              <li>Include project name, use case and authorization letter.</li>
              <li>
                Get RBAC authorization for API uasge via AI Medha Service
                Catalogue.
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
                    <strong>Client Secret</strong> for authentication.
                  </li>
                  <li>
                    Use these credentials in each API request to access face
                    verification services.
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
                    Use the available API endpoints to directly access face
                    verification services.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          {/* Second Request for Service Button */}
          <div className="mt-8 mb-6 flex ">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
            >
              Request for Service
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <RequestServiceModal
          serviceName={"AI Satyapikaanan"}
          pdfUrl={pdfUrl}
          filePreview={filePreview}
          selectedFile={selectedFile}
          setFilePreview={setFilePreview}
          setIsModalOpen={setIsModalOpen}
          setSelectedFile={setSelectedFile}
        />
      )}
      <Footer />
    </div>
  );
};

export default AiSatyapikaananDetailPage;
