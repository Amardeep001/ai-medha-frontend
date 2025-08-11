import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { pdfDownload } from "../../utils/pdfDownload";
import serviceMap from "../../utils/serviceMap";
import RequestServiceModal from "../../components/modals/RequestServiceModal";

const AiSaranshDetailPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleRequestFormDownload = async () => {
    const url = await pdfDownload(serviceMap.ai_saransh);
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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
    // Cleanup when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header />
      <div className="overflow-auto flex flex-grow">
        <div className="px-6 sm:px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <div className="mt-3 flex space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Saransh</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Saransh is an automated text summarization system designed to
            provide summaries from long official documents. It reduces textual
            length while preserving key information and enables users to get
            gist of large documents.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Saransh
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI Saransh is a comprehensive text summarization service that
              transforms large documents into concise summaries using advanced
              extractive and abstractive techniques. Available over{" "}
              <strong>National Informatics Centre network </strong>
              (NICNET) and the <strong>National API Exchange</strong> (NAPIX)
              portal, it helps users quickly grasp the essence of lengthy
              documents by prioritizing important points and generating coherent
              summaries in configurable lengths.
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
                  <strong>Summarization types:</strong> Extractive (key sentence
                  extraction) and Abstractive (rephrasing and condensing)
                </li>
                <li>
                  <strong>Input Capabilities:</strong> Text with punctuation
                  support
                </li>
                <li>
                  <strong>Summary length control:</strong> Configurable output
                </li>
                <li>
                  <strong>Category:</strong> Natural Language Processing (NLP)
                </li>
                <li>
                  <strong>Language Support:</strong> Currently English
                  (multilingual capability via Panini Service integration)
                </li>
                <li>
                  <strong>Network Access:</strong> NIC network and public
                  internet via NAPIX platform
                </li>
                <li>
                  <strong>Response Format:</strong> JSON Output
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Large document summarization for quick comprehension and gist
                  extraction
                </li>
                <li>
                  Judicial and legal document processing for multi-page case
                  judgements
                </li>
                <li>
                  Government report summarization for administrative workflows
                </li>
                <li>
                  API-based integration into e-Governance applications via NAPIX
                </li>
                <li>
                  Digital document management with configurable summary lengths
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Possible Users
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Central and State Government Ministries / Departments / PSUs
                </li>
                <li>Autonomous Institutions and Local Government bodies</li>
                <li>Supreme Court, High Courts, and District Courts</li>
                <li>Legal professionals and judicial administrative staff</li>
                <li>Government officers requiring document analysis</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow from receiving the text input to
              generating the summarized output:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> Raw text documents submitted by API
                calls through NAPIX.
              </li>
              <li>
                <strong>Pre-processing:</strong> Performs tokenization of text
                and removes irrelevant whitespaces or formatting characters to
                prepare clean input.
              </li>
              <li>
                <strong>Transformer Model Inference:</strong> Processes the
                cleaned text using the Transformer-based summarization model to
                identify key information and remove redundant information.
              </li>
              <li>
                <strong>Summary Generation:</strong> Generates coherent summary
                based on the specified number of sentences using either
                extractive (key sentence extraction) or abstractive (rephrasing
                and condensing) techniques.
              </li>
              <li>
                <strong>Post-processing:</strong> Formats the generated summary
                and prepares JSON response.
              </li>
              <li>
                <strong>Output Delivery:</strong> Returns JSON response
                containing the summarized text for use in document management
                workflows.
              </li>
            </ul>
          </div>

          <div className="mt-8 mb-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Saransh Service
            </h3>
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
                via AI MEDHA platform.
              </li>
              <li>
                Include project use case, required summarization type
                (Extractive/Abstractive), and authorization letter.
              </li>
              <li>
                Get <strong>RBAC authorization</strong> for API usage via AI
                Medha Service Catalogue.
              </li>
              <li>
                Choose an integration method: <strong>NAPIX Integration</strong>{" "}
                or <strong>Direct API Access</strong>.
              </li>
              <li>
                The Service is available on <strong>NICNET</strong> and also
                accessible over public internet via <strong>NAPIX</strong>{" "}
                platform.
              </li>

              {/* NAPIX Integration Steps */}
              <li>
                <strong>NAPIX Integration:</strong>
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>
                    Register on the NAPIX platform for external/public access.
                  </li>
                  <li>Apply for summarization API access.</li>
                  <li>
                    Upon approval, receive your <strong>Client ID</strong> and{" "}
                    <strong>Client Secret</strong>.
                  </li>
                  <li>
                    Use authorization Keys - client id and client secret for all
                    POST requests to summarization endpoints.
                  </li>
                </ul>
              </li>

              {/* Direct API Access Steps */}
              <li>
                <strong>Direct API Access:</strong>
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>
                    Ensure network access via NICNET or VPN to secure internal
                    endpoints via FARPS request and submit IPs for whitelisting.
                  </li>
                  <li>Use summarization APIs.</li>
                  <li>Submit JSON requests with content and configuration.</li>
                  <li>
                    Receive summarized content in JSON format for further use.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
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
      {/* Modal */}
      {isModalOpen && (
        <RequestServiceModal
          serviceName={"AI Saransh"}
          pdfUrl={pdfUrl}
          filePreview={filePreview}
          selectedFile={selectedFile}
          setFilePreview={setFilePreview}
          setIsModalOpen={setIsModalOpen}
          setSelectedFile={setSelectedFile}
          serviceText={"Summarization type (Extractive/Abstractive)"}
        />
      )}
      <Footer />
    </div>
  );
};

export default AiSaranshDetailPage;
