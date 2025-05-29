import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AiSatyapikaananDetailPage = () => {
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
              AI Satyapikaanan is a Facial Recognition as a Service (FRaaS)
              platform developed by NIC, offering secure, contactless, and
              non-invasive facial identity verification. It supports identity
              authentication across various citizen-centric e-Governance
              services and institutional workflows. It can be accessed via NAPIX
              API Gateway or deployed as an Android background service.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> Expired, new audit in
                progress
              </p>
              <p>
                <strong>Awards:</strong> Recognized under the Project Category
                in the 20th CSI SIG eGovernance Awards 2022
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported modes:</strong> Real-time face recognition
                  via camera, Android background services, and web integration
                </li>
                <li>
                  <strong>Deployment options:</strong> Cloud-based via NIC
                  MeghRaj and offline via Android services
                </li>
                <li>
                  <strong>AI Features:</strong> Face matching, AI-based liveness
                  detection, gesture recognition plug-ins
                </li>
                <li>
                  <strong>Workflow:</strong> Face Image Capture → Liveness
                  Detection → Feature Extraction → Identity Match → Response
                </li>
                <li>
                  <strong>Category:</strong> Vision AI
                </li>
                <li>
                  <strong>Model Type:</strong> CNN (Convolutional Neural
                  Network)
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
                AI Satyapikaanan is already deployed across multiple sectors
                including: Attendance tracking (Technical Education, GoWB), crop
                surveyor verification (Ministry of Agriculture), pensioner life
                certificate verification (Manipur & Meghalaya), visitor
                authentication (Raj Bhavan, Uttarakhand), and learner’s license
                issuance (Ministry of Road Transport).
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Attendance verification for employees and trainees</li>
                <li>Touchless ID authentication for public service delivery</li>
                <li>Identity deduplication in welfare schemes</li>
                <li>Pensioner verification and license issuance</li>
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

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow from capturing the user's face to
              generating a verified identity match response:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> Real-time facial image captured via
                Android camera app or web-integrated webcam.
              </li>
              <li>
                <strong>Liveness Detection:</strong> Ensures the input is from a
                live user, using AI-based spoof detection (e.g., head movement,
                eye blink).
              </li>
              <li>
                <strong>Face Feature Extraction:</strong> Converts the captured
                image into numerical facial embeddings using CNN-based models.
              </li>
              <li>
                <strong>Identity Matching:</strong> Compares facial embeddings
                with the reference image from backend database or Aadhaar image
                store.
              </li>
              <li>
                <strong>Decision Scoring:</strong> Generates a similarity score
                and match/no-match outcome based on threshold tuning.
              </li>
              <li>
                <strong>Output Response:</strong> Returns the result as a JSON
                payload with match confidence, user ID, timestamp, and status
                flag.
              </li>
              <li>
                <strong>Delivery:</strong> The result is shared back to the
                requesting application for attendance marking, service
                eligibility, or access control.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Satyapikaanan Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit a request to
                NIC for onboarding with a signed approval letter from your
                department. Mention your intended use case (e.g., attendance,
                pensioner verification, etc.).
              </li>
              <li>
                <strong>Client Setup:</strong> Choose your integration
                path—either Android application setup (APK) or backend access
                via NAPIX API Gateway.
              </li>
              <li>
                <strong>Middleware or App Installation:</strong> For Android
                devices, install the NIC-provided facial recognition service app
                that runs in the background. For web/API usage, configure your
                client with authorized credentials.
              </li>
              <li>
                <strong>Capture & Input:</strong> Capture a live face image
                using the front-facing camera, ensuring proper lighting and
                angle.
              </li>
              <li>
                <strong>Liveness Detection:</strong> The system validates the
                image for authenticity using AI-driven liveness detection to
                prevent spoofing.
              </li>
              <li>
                <strong>Identity Matching:</strong> The face image is matched
                against a reference image (such as Aadhaar photo or user
                database) and a similarity score is generated.
              </li>
              <li>
                <strong>Result Handling:</strong> The final output includes a
                match or mismatch result along with metadata such as timestamp
                and confidence score, returned to your system for verification
                or workflow processing.
              </li>
            </ol>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Available through NICNET or via
                the NAPIX API Gateway for external integrations.
              </li>
              <li>
                <strong>Access Control:</strong> Enforced through IP
                whitelisting and authorized API credentials for client systems.
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
