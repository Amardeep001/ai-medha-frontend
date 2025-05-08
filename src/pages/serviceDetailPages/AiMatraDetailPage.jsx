import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FaGlobe,
  FaFileAlt,
  FaComments,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";

const AiMatraDetailPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Services
        </button>

        {/* Title and Description */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">AI Matra</h1>
          <p className="text-lg text-gray-700 mb-4 max-w-4xl">
            AI Matra is a text translation service that supports translation
            across multiple Indian languages. It enables real-time and offline
            text-based communication and content localization through REST and
            WebSocket APIs.
          </p>
          <img
            src="https://picsum.photos/1200/350?random=23"
            alt="AI Matra Visual"
            className="w-full rounded-lg shadow-md"
          />
        </section>

        {/* Features */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <FaFileAlt />, label: "Text-to-Text Translation" },
            { icon: <FaGlobe />, label: "10+ Indian Languages Supported" },
            { icon: <FaNetworkWired />, label: "REST & WebSocket APIs" },
            { icon: <FaCogs />, label: "Transformer-based Architecture" },
            { icon: <FaComments />, label: "Low Latency & Scalable" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition"
            >
              <div className="text-blue-700 text-2xl">{item.icon}</div>
              <p className="text-gray-800 font-medium">{item.label}</p>
            </div>
          ))}
        </section>

        {/* Overview & Use Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Service Overview
            </h3>
            <ul className="list-disc text-sm text-gray-700 pl-5 space-y-2">
              <li>Real-time and batch translation between Indian languages</li>
              <li>
                Supports English, Hindi, Bengali, Marathi, Tamil, Telugu,
                Kannada, Gujarati, etc.
              </li>
              <li>
                REST & WebSocket APIs for integration into apps and platforms
              </li>
              <li>
                Used in content translation, communication, and governance
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Real-World Applications
            </h3>
            <ul className="list-disc text-sm text-gray-700 pl-5 space-y-2">
              <li>Real-time multilingual chat translation</li>
              <li>Local language translation of government forms</li>
              <li>Multilingual content localization and subtitling</li>
            </ul>
          </div>
        </div>

        {/* API Info */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            API Integration
          </h3>
          <div className="text-sm text-gray-700 space-y-3">
            <p>
              <strong>WebSocket Endpoint:</strong>{" "}
              <code className="text-blue-600">wss://10.197.112.27:8025</code>
            </p>
            <p>
              <strong>REST Endpoint:</strong>{" "}
              <code className="text-blue-600">
                https://10.197.112.27:8025/translatefile/
              </code>
            </p>
            <p>
              <strong>Events:</strong> <code>lang_pair</code>,{" "}
              <code>starttranslation</code>, <code>text_in</code>
            </p>
            <p>
              <strong>Languages:</strong> en, hi, bn, mr, ta, te, kn, gu, or,
              ml, pa, ur
            </p>
          </div>
        </section>

        {/* Model Info */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Model Details
          </h3>
          <ul className="list-disc text-sm text-gray-700 pl-5 space-y-1">
            <li>
              <strong>Model Type:</strong> Transformer
            </li>
            <li>
              <strong>Approach:</strong> Encoder-Decoder (Seq2Seq)
            </li>
            <li>
              <strong>Evaluation Metric:</strong> BLEU Score
            </li>
            <li>
              <strong>Key Parameters:</strong> Attention heads, layers,
              vocabulary size, beam width
            </li>
          </ul>
        </section>

        {/* Workflow */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Workflow: Translation Flow
          </h3>
          <ol className="list-decimal text-sm text-gray-700 pl-5 space-y-2">
            <li>
              <strong>Input:</strong> Text in source language via REST or
              WebSocket
            </li>
            <li>
              <strong>Language Pair:</strong> Selected by client (e.g., en-hi,
              hi-en)
            </li>
            <li>
              <strong>Processing:</strong> Model performs neural machine
              translation
            </li>
            <li>
              <strong>Output:</strong> Translated text returned via API
            </li>
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiMatraDetailPage;
