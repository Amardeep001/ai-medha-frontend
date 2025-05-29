import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import SaranshImage from "../../images/saransh_sample.png";
// import SummaryImage from "../../images/saransh_summary_example.png";

const AiSaranshDetailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header />
      <div className="overflow-auto flex flex-grow">
        <div className="px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mt-3 mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            ← Back to Services
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Saransh</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Saransh is an automated text summarization system designed to
            provide extractive summaries from long legal or official documents.
            It reduces textual length while preserving key information using
            transformer-based NLP techniques. Integrated with NAPIX, it serves
            various ministries and judicial systems.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Saransh
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI Saransh is a comprehensive text summarization service that
              transforms large documents into concise summaries using advanced
              extractive and abstractive techniques. Available over NICNet and
              the Napix portal, it helps users quickly grasp the essence of
              lengthy documents by prioritizing important points and generating
              coherent summaries in configurable lengths.
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
                  <strong>Deployment options:</strong> REST APIs via /Exsummary
                  and /Absummary endpoints
                </li>
                <li>
                  <strong>Input constraints:</strong> Text length between
                  100-5000 characters with punctuation support
                </li>
                <li>
                  <strong>Summary length control:</strong> Configurable output
                  between 5-50 sentences
                </li>
                <li>
                  <strong>Category:</strong> Natural Language Processing (NLP)
                </li>
                <li>
                  <strong>Model Type:</strong> Transformers-based architecture
                </li>
                <li>
                  <strong>Language Support:</strong> Currently English
                  (multilingual capability via Panini Service integration)
                </li>
                <li>
                  <strong>Network Access:</strong> NIC network and public
                  internet via Napix platform
                </li>
                <li>
                  <strong>Port Configuration:</strong> Port 4001 with IP
                  whitelisting
                </li>
                <li>
                  <strong>Response Format:</strong> JSON with status, data, and
                  message fields
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI Saransh Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Saransh is being deployed across government departments and
                judicial institutions to streamline document processing
                workflows. By automatically generating summaries of lengthy
                reports, legal documents, and administrative content, AI Saransh
                enhances productivity and enables faster decision-making across
                institutional operations.
              </p>
              <p className="text-sm text-gray-700 mt-3">
                <strong>Primary applications include:</strong>
              </p>
              <ul className="list-disc list-inside ml-5 text-sm text-gray-700">
                <li>Judicial case judgment summaries</li>
                <li>Government report condensation</li>
                <li>Legal document processing</li>
                <li>Administrative workflow optimization</li>
                <li>Digital document management systems</li>
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
                  judgments
                </li>
                <li>
                  Government report summarization for administrative workflows
                </li>
                <li>
                  API-based integration into e-Governance applications via NAPIx
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
                <li>
                  Authorized users with RBAC access through AI Medha Service
                  Catalogue
                </li>
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
                <strong>Input:</strong> Raw text documents (100-5000 characters)
                from legal documents, government reports, or user-submitted
                content via frontend or API calls through NAPIx.
              </li>
              <li>
                <strong>Text Ingestion:</strong> Receives text input via POST
                requests to /Exsummary or /Absummary endpoints with optional
                sentence count parameter (5-50).
              </li>
              <li>
                <strong>Validation:</strong> Validates input text type, length
                constraints (100-5000 characters), and sentence parameter
                (integer between 5-50).
              </li>
              <li>
                <strong>Pre-processing:</strong> Performs tokenization of text
                and removes irrelevant whitespaces or formatting characters to
                prepare clean input.
              </li>
              <li>
                <strong>Transformer Model Inference:</strong> Processes the
                cleaned text using the Transformer-based summarization model to
                identify key themes and compress redundant information.
              </li>
              <li>
                <strong>Summary Generation:</strong> Generates coherent summary
                based on the specified number of sentences using either
                extractive (key sentence extraction) or abstractive (rephrasing
                and condensing) techniques.
              </li>
              <li>
                <strong>Post-processing:</strong> Formats the generated summary
                and prepares JSON response with status, status_code, data, and
                message fields.
              </li>
              <li>
                <strong>Output Delivery:</strong> Returns JSON response
                containing the summarized text for use in judicial summaries,
                legal tech, and document management workflows.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Saransh Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit the AI
                Saransh service request form along with a user request letter
                from your department/ministry via NIC MeghRaj Cloud. Obtain RBAC
                authorization through AI Medha Service Catalogue for API access.
              </li>
              <li>
                <strong>Network Setup:</strong> Ensure your system has access to
                NICNet or public internet via Napix platform. Configure firewall
                to allow connections on port 4001 and complete IP whitelisting
                requirements.
              </li>
              <li>
                <strong>API Integration:</strong> Integrate with AI Saransh
                using the provided REST API endpoints: /Exsummary for extractive
                summarization or /Absummary for abstractive summarization.
              </li>
              <li>
                <strong>Authentication Setup:</strong> Configure API keys or
                tokens in request headers as required by your production
                environment setup for secure access to the service.
              </li>
              <li>
                <strong>Input Preparation:</strong> Prepare your text documents
                ensuring they meet the constraints: minimum 100 characters,
                maximum 5000 characters, with proper punctuation for optimal
                results.
              </li>
              <li>
                <strong>Summary Configuration:</strong> For extractive
                summarization, specify the desired number of sentences (5-50) in
                the request body. For abstractive summarization, the system
                automatically determines optimal length.
              </li>
              <li>
                <strong>API Request:</strong> Send POST requests with
                Content-Type: application/json, including your text and optional
                sentence parameters to receive JSON responses with summarized
                content.
              </li>
              <li>
                <strong>Result Processing:</strong> Receive summarized text in
                JSON format with status, status_code, data, and message fields.
                Integrate the summaries into your judicial, legal, or document
                management workflows.
              </li>
            </ol>
          </div>

          <div className="mt-8 mb-6 bg-white rounded-lg shadow-md p-8 ">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Available on NICNet (Network
                Informatics Centre network) and also accessible over public
                internet via <strong>Napix platform</strong>.
              </li>
              <li>
                <strong>Firewall Configuration:</strong> No specific firewall
                configuration required beyond standard security protocols.
              </li>
              <li>
                <strong>Access Control:</strong> Enforced via{" "}
                <strong>IP Whitelisting</strong> to ensure only authorized
                systems can access the service endpoints.
              </li>
              <li>
                <strong>Authentication:</strong> API access controlled through{" "}
                <strong>RBAC (Role-Based Access Control)</strong> integrated
                with AI Medha Service Catalogue for authorized government users.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiSaranshDetailPage;
