import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AiAnveshikaDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => {}} />

      <div className="overflow-auto flex flex-grow">
        <div className="px-4 py-6 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            AI ANVESHIKA
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Anveshika is an intelligent document analysis and
            question-answering platform designed to understand and summarize
            content from uploaded documents like PDFs. It uses
            Retrieval-Augmented Generation (RAG) with transformer models and
            vector databases to deliver accurate responses and summaries from
            natural language queries.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            ← Back to Services
          </button>

          {/* Model Intelligence */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Model Intelligence & Architecture Overview
            </h3>
            <p className="text-sm text-gray-700">
              AI Anveshika employs a RAG architecture consisting of document
              ingestion, chunking, embedding using transformer models, and
              indexing in a vector database. During query time, relevant
              documents are retrieved, and responses are generated using a
              fine-tuned LLM model.
            </p>
            <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Document Parsing:</strong> Ingests PDF files, splits
                into chunks
              </li>
              <li>
                <strong>Embeddings:</strong> Uses transformer-based sentence
                embeddings (e.g. BERT)
              </li>
              <li>
                <strong>Vector DB:</strong> FAISS or similar DBs store document
                vectors
              </li>
              <li>
                <strong>LLM:</strong> Generates answers using embedded context +
                query prompt
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Key Capabilities & Metrics
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>🔍 Contextual Q&A over custom PDF uploads</li>
              <li>📄 Handles legal, policy, academic documents</li>
              <li>🧠 Powered by multilingual transformers & RAG</li>
              <li>🕒 Fast query time (2s in ideal setups)</li>
              <li>📈 Scalable with batch ingestion and caching</li>
            </ul>
          </div>

          {/* Usage */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Real-World Usage
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>eGovernance document summarization</li>
              <li>Citizen FAQs from complex legal PDFs</li>
              <li>Support for AI-enabled RTI document scanning</li>
            </ul>
          </div>

          {/* Limitations */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Limitations
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Response accuracy depends on chunking & embeddings</li>
              <li>
                Documents with complex formatting may yield suboptimal context
              </li>
              <li>
                LLM hallucination possible if irrelevant context is retrieved
              </li>
            </ul>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Summary
            </h3>
            <p className="text-sm text-gray-700">
              AI Anveshika empowers governance institutions with deep document
              understanding and question-answering capabilities. Its modular RAG
              pipeline enables scalable, secure, and explainable insights from
              uploaded documents in Indian governance and administrative
              contexts.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AiAnveshikaDetail;
