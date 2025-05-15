import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FaMicrophoneAlt,
  FaLanguage,
  FaChartLine,
  FaServer,
  FaWaveSquare,
} from "react-icons/fa";

const AiShrutiDetailPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#eee5dc] text-gray-900 min-h-screen grid grid-rows-[min-content_1fr]">
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <main className="max-w-screen-2xl mx-auto px-20 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mt-3 mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          ← Back to Services
        </button>

        {/* Hero Section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-3">AI Shruti</h1>
          <p className="text-lg text-gray-700 mb-4 max-w-4xl">
            AI Shruti is an Automatic Speech Recognition (ASR) solution that
            transcribes spoken Indian languages into text. Designed for scalable
            real-time and offline transcription, it supports use cases across
            judiciary, e-Governance, and parliamentary domains.
          </p>
          <img
            src="https://picsum.photos/1200/350?random=22"
            alt="AI Shruti Visual"
            className="rounded-lg shadow-md"
          />
        </section>

        {/* Feature Highlights */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <FaMicrophoneAlt />,
              label: "Live & Offline Transcription",
            },
            { icon: <FaLanguage />, label: "Supports 8 Indian Languages" },
            { icon: <FaServer />, label: "REST & WebSocket APIs" },
            { icon: <FaChartLine />, label: "Uses Word Error Rate (WER)" },
            { icon: <FaWaveSquare />, label: "Conformer Model (CTC)" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border shadow-sm rounded-lg p-4 flex items-center gap-4"
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
              <li>Converts audio input to accurate transcriptions</li>
              <li>
                Supports English, Hindi, Bengali, Marathi, Tamil, Telugu,
                Kannada, Gujarati
              </li>
              <li>Real-time WebSocket or offline REST API support</li>
              <li>Ideal for parliament, e-Court, and media transcription</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Real-World Applications
            </h3>
            <ul className="list-disc text-sm text-gray-700 pl-5 space-y-2">
              <li>Live parliamentary sessions transcribed in real-time</li>
              <li>Uploaded mono-channel WAV files converted to text</li>
              <li>Used in digital governance & legal systems</li>
            </ul>
          </div>
        </div>

        {/* API & Integration Info */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            API Integration
          </h3>
          <div className="text-sm text-gray-700 space-y-3">
            <p>
              <strong>WebSocket Endpoint:</strong>{" "}
              <code className="text-blue-600">wss://10.197.112.27:8015</code>
            </p>
            <p>
              <strong>REST Endpoint:</strong>{" "}
              <code className="text-blue-600">
                https://10.197.112.27:8015/asruploadfile/
              </code>
            </p>
            <p>
              <strong>Events:</strong> <code>lang_pair</code>,{" "}
              <code>startasr</code>, <code>audio_in</code>
            </p>
            <p>
              <strong>Languages:</strong> en, hi, bn, mr, ta, te, kn, gu
            </p>
          </div>
        </section>

        {/* Model Details */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Model Details
          </h3>
          <ul className="list-disc text-sm text-gray-700 pl-5 space-y-1">
            <li>
              <strong>Model Type:</strong> Conformer
            </li>
            <li>
              <strong>Approach:</strong> Non-Autoregressive (CTC)
            </li>
            <li>
              <strong>Evaluation Metric:</strong> Word Error Rate (WER)
            </li>
            <li>
              <strong>Key Parameters:</strong> Learning rate, batch size,
              decoder threshold, tokenizer
            </li>
          </ul>
        </section>

        {/* Data Flow */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Workflow: Data Flow
          </h3>
          <ol className="list-decimal text-sm text-gray-700 pl-5 space-y-2">
            <li>
              <strong>Input:</strong> Microphone or mono-channel WAV file
            </li>
            <li>
              <strong>Preprocessing:</strong> Validation, language selection
            </li>
            <li>
              <strong>Inference:</strong> ASR model + optional translation (NMT)
            </li>
            <li>
              <strong>Output:</strong> Real-time transcript (WebSocket) or
              file-based text (REST)
            </li>
          </ol>
        </section>

        {/* Limitations */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Known Limitations
          </h3>
          <ul className="list-disc text-sm text-gray-700 pl-5 space-y-2">
            <li>Requires high-quality audio (noisy inputs reduce accuracy)</li>
            <li>Only mono-channel .wav files supported</li>
            <li>No visual performance graphs currently available</li>
          </ul>
        </section>

        {/* Summary */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Summary</h3>
          <p className="text-sm text-gray-700">
            AI Shruti delivers reliable speech-to-text conversion for Indian
            languages, supporting multilingual use cases in governance and
            enterprise. Its real-time streaming and REST-based batch support
            make it an ideal fit for high-volume transcription systems.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiShrutiDetailPage;
