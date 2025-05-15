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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI SARANSH</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Saransh is an automated text summarization system designed to
            provide extractive summaries from long legal or official documents.
            It reduces textual length while preserving key information using
            transformer-based NLP techniques. Integrated with NAPIX, it serves
            various ministries and judicial systems.
          </p>

          {/* Illustrative Image */}
          <div className="mb-10">
            <img
              src={"https://picsum.photos/1200/350?random=20"}
              alt="AI Saransh example"
              className="rounded shadow-lg w-full object-contain"
            />
          </div>

          {/* Service Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Service Details
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                🔹 <strong>Service Name:</strong> AI Saransh
              </li>
              <li>
                📄 <strong>Short Description:</strong> Automated Extractive
                Summarization of legal and textual documents
              </li>
              <li>
                🛡 <strong>Security Audit:</strong> Last audit ongoing (2024)
              </li>
              <li>
                © <strong>Copyright:</strong> NIC
              </li>
              <li>
                🏆 <strong>Awards:</strong> Under evaluation
              </li>
              <li>
                📰 <strong>Articles:</strong> Internal API documentation v1.0
              </li>
            </ul>
          </div>

          {/* APIs */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">APIs</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                🧩 <strong>Endpoints:</strong> <code>/Exsummary</code>
              </li>
              <li>
                🔧 <strong>Method:</strong> POST
              </li>
              <li>
                🧾 <strong>Request Body:</strong> JSON with keys{" "}
                <code>text</code> (string), <code>sentences</code> (int)
              </li>
              <li>
                🔐 <strong>Access:</strong> Via NAPIX (RBAC-protected)
              </li>
              <li>
                📦 <strong>Output:</strong> Extractive summary text
              </li>
            </ul>
          </div>

          {/* Model Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Model Information
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                🔍 <strong>Model Type:</strong> Transformer-based
              </li>
              <li>
                🧠 <strong>Category:</strong> Natural Language Processing
              </li>
              <li>
                📊 <strong>Metrics:</strong> BLEU score (planned), sentence
                overlap, compression ratio
              </li>
              <li>
                ⚙️ <strong>Parameters:</strong> Sequence length, attention
                layers, summary length
              </li>
            </ul>
          </div>

          {/* Evaluations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Evaluations & Benchmarks
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Summaries have been tested on government and legal documents.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                Benchmarked against generic summarizers on legal case data
              </li>
              <li>
                Ideal for high-density legal text (judgments, petitions, etc.)
              </li>
              <li>Real-world deployment in eCourts and NIC Legal Portal</li>
            </ul>

            <img
              src={"https://picsum.photos/1200/350?random=21"}
              alt="Summary result"
              className="rounded-lg mt-4 shadow w-full"
            />
          </div>

          {/* End-to-End Flow */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Data Flow
            </h3>
            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>User submits document text via /Exsummary API</li>
              <li>Validation and tokenization of text</li>
              <li>Text passed through Transformer summarizer model</li>
              <li>
                Output returned: summary in extractive format (user-defined
                sentence length)
              </li>
            </ul>
          </div>

          {/* Network Availability */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Availability
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                🌐 <strong>Access:</strong> Available via NIC network and NAPIX
              </li>
              <li>
                🔐 <strong>Security:</strong> RBAC-protected, Key-based auth
              </li>
              <li>
                🔌 <strong>Ports:</strong> No public port required, accessible
                via secured gateway
              </li>
              <li>
                🧱 <strong>Firewall:</strong> Integrated with NIC infra security
              </li>
            </ul>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Summary & Key Notes
            </h3>
            <p className="text-base text-gray-700">
              AI Saransh enables NIC users and legal officers to extract concise
              summaries from lengthy text. The model is domain-tuned for Indian
              legal corpora and supports flexible summary lengths. It integrates
              easily via NAPIX and ensures secure usage via RBAC.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiSaranshDetailPage;
