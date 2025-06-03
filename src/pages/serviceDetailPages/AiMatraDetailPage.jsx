import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AiMatraDetailPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#eee5dc] text-gray-900 min-h-screen flex flex-col">
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <main className="flex-grow w-full max-w-screen-2xl mx-auto px-20 py-6">
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
                <strong>Supported text input:</strong> Names, addresses, and
                short phrases in Latin script
              </li>
              <li>
                <strong>Deployment options:</strong> REST APIs for single and
                batch transliteration
              </li>
              <li>
                <strong>Average response time:</strong> Less than 2 seconds for
                individual names
              </li>
              <li>
                <strong>Workflow:</strong> Latin Input → Script Detection →
                Phonetic Mapping → Indic Script Output
              </li>
              <li>
                <strong>Category:</strong> Neural Transliteration
              </li>
              <li>
                <strong>Sector:</strong> Language Technology / Localization
              </li>
              <li>
                <strong>Supported Languages:</strong> 22 Indian languages
                including Hindi, Bengali, Tamil, Telugu, Kannada, etc.
              </li>
              <li>
                <strong>Use Style:</strong> Transliteration only (no semantic
                translation)
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
              <li>State e-Governance Portals</li>
              <li>Digital India Initiatives</li>
              <li>NIC Language Technology Division</li>
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

        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            How to Use AI Matra Service
          </h3>
          <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
            <li>
              <strong>Onboarding & Access:</strong> Submit a service request via
              NIC Cloud Portal with a signed letter from your department
              indicating the target languages and use case for transliteration.
            </li>
            <li>
              <strong>API Access Approval:</strong> After review, API
              credentials (client ID and secret key) will be issued to your
              department for secure usage.
            </li>
            <li>
              <strong>Integration Setup:</strong> Integrate AI Matra REST APIs
              into your frontend or backend using standard HTTP POST requests.
            </li>
            <li>
              <strong>Input Configuration:</strong> Provide the input string in
              Roman (Latin) script along with the desired target Indic language
              (e.g., Hindi, Bengali, Tamil).
            </li>
            <li>
              <strong>Transliteration Request:</strong> Submit the text via API
              with required parameters. The backend engine processes the
              phonetic conversion.
            </li>
            <li>
              <strong>Response Handling:</strong> The API returns the
              transliterated output in Unicode format, ready to be displayed on
              UI or used in official documents.
            </li>
            <li>
              <strong>Batch Support (Optional):</strong> Use bulk mode for
              transliterating lists of names/addresses by uploading files or
              JSON arrays to the batch endpoint.
            </li>
          </ol>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Network Access Details
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>
              <strong>Network Access:</strong> Available only through the NIC
              Cloud infrastructure over secure government network connections.
            </li>
            <li>
              <strong>Access Control:</strong> Enforced via IP whitelisting and
              authenticated API credentials issued to approved departments.
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AiMatraDetailPage;
