import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { pdfDownload } from "../../utils/pdfDownload";
import serviceMap from "../../utils/serviceMap";

const AiAnveshikaDetail = () => {
  const navigate = useNavigate();
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleRequestFormDownload = async () => {
    const url = await pdfDownload(serviceMap.ai_anveshika);
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
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            AI Anveshika
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Anveshika is an intelligent document analysis and
            question-answering platform designed to understand and Q&A content
            from uploaded documents like PDFs. It uses Retrieval-Augmented
            Generation (RAG) with transformer models and vector databases to
            deliver accurate responses and summaries from natural language
            queries.
          </p>

          {/* Model Intelligence */}
          <div className="bg-white rounded-lg shadow-md p-8 ">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Anveshika
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>AI Anveshika</strong> is a Retrieval-Augmented Generation
              (RAG) solution that enhances document-based question answering by
              combining document retrieval with a large language model. It first
              retrieves relevant text from PDFs using vector search and then
              generates answers grounded in that content. AI Anveshika is
              tailored for legal and policy-intensive domains where contextual
              accuracy, traceability, and Q&A are essential.
            </p>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
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
                  <strong>Supported file formats:</strong> PDF
                </li>
                <li>
                  <strong>Use Type:</strong> Document Q&A, semantic search
                </li>
                <li>
                  <strong>APIs available:</strong> Upload PDF, Build Index, Ask
                  Question, Fetch & Modify Metadata
                </li>
                <li>
                  <strong>Workflow:</strong> PDF Upload → Text Extraction &
                  Chunking → Vector Indexing → Question Input → Retrieval &
                  Answer Generation
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI Anveshika Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Anveshika is being used in pilot engagements with departments
                such as e-Courts, Ministry of Finance, and Ministry of Transport
                to extract structured insights from lengthy legal and regulatory
                documents. It improves efficiency in policy interpretation and
                supports decision-making by surfacing relevant legal arguments
                or summaries from dense files.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ol className="text-gray-700 text-sm space-y-2">
                <li>
                  <strong>Legal Document Summarization:</strong> Used by
                  e-Courts to extract key insights and rulings from large case
                  PDFs.
                </li>
                <li>
                  <strong>Policy Research & Question Answering:</strong> Helps
                  departments like Finance and Transport interrogate long
                  documents for targeted Q&A.
                </li>
                <li>
                  <strong>Metadata-driven Retrieval:</strong> Tagging and
                  accessing document sections through searchable metadata
                  layers.
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Limitations
              </h4>
              <p className="text-sm text-gray-700">
                Model performance is dependent on OCR quality and document
                formatting. Poorly scanned files or handwritten annotations may
                reduce retrieval accuracy. Additionally, the factual relevance
                of generated answers is limited to the retrieved content, and
                incorrect or outdated documents may yield misleading outputs.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow from uploading a document to
              generating the answer using AI Anveshika:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> Upload one or more PDF documents
                (text-based or scanned) containing domain-specific content like
                court orders or circulars.
              </li>
              <li>
                <strong>OCR & Text Extraction:</strong> If scanned, OCR is
                applied to extract text. If text-based, it's extracted directly
                from the PDF.
              </li>
              <li>
                <strong>Preprocessing & Chunking:</strong> The extracted content
                is split into logical, searchable chunks using metadata and
                paragraph structures.
              </li>
              <li>
                <strong>Vector Embedding:</strong> Each chunk is converted into
                a dense vector using a sentence transformer for semantic search.
              </li>
              <li>
                <strong>Question Input:</strong> The user submits a natural
                language query related to the uploaded document.
              </li>
              <li>
                <strong>Relevant Chunk Retrieval:</strong> AI Anveshika uses
                semantic vector search to retrieve top-ranked passages relevant
                to the question.
              </li>
              <li>
                <strong>Answer Generation:</strong> A pre-trained LLM generates
                an answer grounded in the retrieved content, ensuring
                source-referenced context.
              </li>
              <li>
                <strong>Output Delivery:</strong> The final output includes the
                answer, referenced source chunks, and optional metadata about
                matched paragraphs.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Anveshika Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit a request
                form through the AI Medha Platform with department details and
                intended use case.
              </li>
              <li>
                <strong>Document Upload:</strong> Use the provided API to upload
                one or more PDF files (scanned or text-based) to the AI
                Anveshika platform.
              </li>
              <li>
                <strong>Index Building:</strong> The system extracts text,
                performs OCR if needed, and creates searchable vector embeddings
                of the content.
              </li>
              <li>
                <strong>Metadata Tagging:</strong> Optionally, the uploaded
                documents can be tagged with metadata for structured retrieval
                and filtering.
              </li>
              <li>
                <strong>Query Submission:</strong> Use the API to send natural
                language questions related to the uploaded content.
              </li>
              <li>
                <strong>Answer Generation:</strong> The model retrieves relevant
                content from the indexed documents and generates grounded
                responses.
              </li>
              <li>
                <strong>Output Delivery:</strong> The system returns a JSON with
                the answer, source paragraphs, and confidence score, which can
                be displayed or stored.
              </li>
            </ol>
          </div>

          <div className="mt-8 mb-6 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Available on NICNET.
              </li>
              <li>
                <strong>Firewall Configuration:</strong> Access is permitted
                only from whitelisted NICNET or government department IPs.
              </li>
              <li>
                <strong>Access Control:</strong> Secured using{" "}
                <strong>Role-Based Access Control (RBAC)</strong> and
                authenticated API tokens issued to approved departments.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AiAnveshikaDetail;
