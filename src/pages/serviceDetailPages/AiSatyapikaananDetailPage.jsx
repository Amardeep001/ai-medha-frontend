import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
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

const AiSatyapikaananDetailPage = () => {
  const navigate = useNavigate();

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
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            AI Satyapikaanan
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Satyapikaanan is the "Face Recognition as a Service (FRaaS)", an
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
              <strong>Face Analytics as a Service (FaaaS)</strong> platform
              developed by the National Informatics Centre (NIC) to bolster
              digital governance initiatives across India. It offers a secure,
              contactless, and non-invasive solution for advanced face analytics
              such as facial identity verification, face quality assessment etc,
              addressing critical challenges and enabling efficient,
              citizen-centric services.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Status:</strong> The last security
                audit has expired, and a new audit is currently{" "}
                <strong>in progress</strong> to ensure the continued integrity
                and security of the platform.
              </p>
              <p>
                <strong>Awards:</strong> AI Satyapikaanan was recognized under
                the <strong>Project Category</strong> in the prestigious{" "}
                <strong>20th CSI SIG eGovernance Awards 2022</strong>,
                highlighting its significant contribution to digital
                transformation.
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
                AI Satyapikaanan Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Satyapikaanan is already making a significant impact across
                diverse sectors, demonstrating its versatility and
                effectiveness.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Current Deployments:
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  <strong>Attendance Management:</strong>Attendance Tracking:
                  Successfully implemented in Technical Education, Government of
                  West Bengal.
                </li>
                <li>
                  <strong>Crop Surveyor Verification:</strong> Aiding the
                  Ministry of Agriculture in authenticating crop surveyors.
                </li>
                <li>
                  <strong>Pensioner Life Certificate Verification:</strong>{" "}
                  Enabling seamless verification for pensioners in Meghalaya.
                </li>
                <li>
                  <strong>Visitor Authentication:</strong> Enhancing security at
                  Raj Bhavan, Uttarakhand.
                </li>
                <li>
                  <strong>Learner's License Issuance:</strong> Streamlining the
                  issuance of learner's licenses under the Ministry of Road
                  Transport.
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
                <li>Transport, Education, and Welfare Boards</li>
                <li>NIC and eGovernance Integrators</li>
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
                verification and other services.
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
              {/* <li>
                <strong>Input:</strong> Real-time or uploaded biometric or
                visual data (such as image, gesture, or posture) via mobile app
                or web interface.
              </li>
              <li>
                <strong>Liveness Detection:</strong> Validates that the input
                comes from a genuine, live user through AI-driven spoof
                detection techniques.
              </li>
              <li>
                <strong>Feature Extraction:</strong> Extracts unique features
                from the input data using AI/ML models for identity or behavior
                analysis.
              </li>
              <li>
                <strong>Matching & Verification:</strong> Compares extracted
                features with records in the reference database to assess
                similarity or match.
              </li>
              <li>
                <strong>Scoring & Evaluation:</strong> Calculates confidence
                scores and makes a decision based on predefined threshold
                criteria for the use case.
              </li>
              <li>
                <strong>Result Generation:</strong> Produces a structured
                response including result status, scores, metadata, and user
                identifiers.
              </li>
              <li>
                <strong>Delivery:</strong> Sends the result back to the
                requesting system to support workflows such as attendance,
                access control, or service eligibility.
              </li> */}
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Satyapikaanan Service
            </h3>
            <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-2">
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
              {/* <li>
                <strong>Onboarding & Authorization:</strong> Submit a request to
                NIC for onboarding with a signed approval letter from your
                department. Mention your intended use case (e.g., attendance,
                pensioner verification, etc.).
              </li>
              <li>
                <strong>Client Setup:</strong> Set up your integration using
                authorized access through the NAPIX API Gateway or Andriod
                backend service.
              </li>
              <li>
                <strong>Service Configuration:</strong> Configure your client
                application or system to interact with the service using the
                issued credentials and access policies.
              </li>
              <li>
                <strong>Data Input:</strong> Capture relevant input (such as
                image, gesture, or other user parameters) depending on your use
                case. The system supports a variety of biometric and image-based
                inputs.
              </li>
              <li>
                <strong>Verification Processing:</strong> The system performs
                liveliness detection and identity verification using AI models
                to ensure authenticity and prevent spoofing.
              </li>
              <li>
                <strong>Multi-Use Matching:</strong> AI Satyapikaanan compares
                the input with a reference database and returns a similarity
                score, confidence level, and decision output for identity
                validation.
              </li>
              <li>
                <strong>Result Handling:</strong> The final output includes a
                match/mismatch decision with metadata such as timestamp and
                result status, which can be integrated into your application
                workflow.
              </li> */}
            </ol>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Available through NICNET or via
                the NAPIX API Gateway for internal or external integrations.
              </li>
              <li>
                <strong>Access Control:</strong> Enforced through IP
                whitelisting (NICNET) and authorized API credentials (NAPIX) for
                client systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiSatyapikaananDetailPage;
