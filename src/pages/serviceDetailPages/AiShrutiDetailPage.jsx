// AiShrutiDetailPage.js
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AiShrutiDetailPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const departmentChartData = [
    { name: "eCOURTS", value: 88644 },
    { name: "Karnataka High Court", value: 24914 },
    { name: "Puducherry UT", value: 814 },
    { name: "Telangana High Court", value: 8159 },
    { name: "VANI", value: 10705 },
    { name: "Video Conferencing Division", value: 2751 },
    { name: "Other", value: 31760 },
  ];

  const dataWithPercentage = departmentChartData.map((d) => ({
    ...d,
    nameWithPercent: `${d.name}`,
  }));

  const COLORS = [
    "#4f46e5",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#6366f1",
    "#14b8a6",
    "#a855f7",
  ];

  const durationChartData = [
    { name: "eCOURTS", value: 224.515 },
    { name: "Karnataka High Court", value: 87.58 },
    { name: "Puducherry UT", value: 28.91 },
    { name: "Telangana High Court", value: 103.42 },
    { name: "VANI", value: 529.19 },
    { name: "Video Conferencing Division", value: 334.354 },
    { name: "Other", value: 480.31 },
  ];

  const durationWithPercentage = durationChartData.map((d) => ({
    ...d,
    nameWithPercent: `${d.name}`,
  }));

  const COLORS2 = [
    "#a855f7", // purple
    "#10b981", // green
    "#f97316", // orange
    "#4f46e5", // indigo
    "#ef4444", // red
    "#84cc16", // lime
    "#22d3ee", // cyan
  ];

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <div className="overflow-auto flex flex-grow">
        <div className="py-6 w-full max-w-screen-2xl px-20 mx-auto">
          <div className="mt-3 flex space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            >
              ← Back to Services
            </button>
          </div>

          <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Shruti</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Shruti is an Automatic Speech Recognition (ASR) system designed
            to convert spoken audio into text. It supports both real-time and
            file transcription and also integrates translation services for
            multilingual processing.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Shruti
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI Shruti transforms speech into text using ASR technology,
              enabling transcription for live or recorded audio. It supports
              eight languages including English, Hindi, Bangla, Marathi, Tamil,
              Telugu, Kannada, and Gujarati. The system also provides
              translation via ASR+NMT integration.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> 20-12-2024
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported transcription formats:</strong> Real-time
                  speech (WebSocket) and recorded audio (.wav files)
                </li>
                <li>
                  <strong>Average transcription response time:</strong> Approx.
                  3 seconds per audio segment
                </li>
                <li>
                  <strong>Category:</strong> Automatic Speech Recognition (ASR)
                </li>
                <li>
                  <strong>Sector:</strong> Speech-to-Text / Language AI
                </li>
                <li>
                  <strong>Parliamentary Transcription:</strong> Real-time
                  transcription and translation of Hindi speeches into English
                </li>
                <li>
                  <strong>Offline File Transcription:</strong> Upload .wav files
                  for batch processing and transcription
                </li>
                <li>
                  <strong>Performance Metric:</strong> Word Error Rate (WER)
                </li>
                <li>
                  <strong>Workflow:</strong> Audio Input → Pre-processing → ASR
                  Model Inference → Text Output (optional translation)
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI Shruti Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI Shruti is being adopted across various government departments
                and judicial bodies for real-time and offline transcription. By
                enabling accurate speech-to-text conversion in multiple Indian
                languages, AI Shruti supports accessibility, documentation, and
                multilingual communication across institutional workflows.
              </p>
              <p className="text-sm text-gray-700 mt-3">
                <strong>Organizations using AI Shruti include:</strong>
              </p>
              <ul className="list-disc list-inside ml-5 text-sm text-gray-700">
                <li>Parliament</li>
                <li>Supreme Court</li>
                <li>High Courts</li>
                <li>District Courts</li>
                <li>Central and State Ministries</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Text transcription for government and institutional
                  applications
                </li>
                <li>
                  Speech-to-text, transliteration, and translation pipelines
                </li>
                <li>
                  API-based deployment for integration into e-Governance
                  applications
                </li>
                <li>
                  Domain-specific transcription solutions for courts,
                  ministries, and local bodies
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
                <li>Parliament</li>
              </ul>
            </div>
          </div>

          {/* Charts */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Service Hit Count
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Departments using AI Shruti APIs for speech to text translation.
                services.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={dataWithPercentage}
                      cx="50%" // Adjust to give space for right-side legend
                      cy="50%"
                      outerRadius={100}
                      label={false}
                    >
                      {dataWithPercentage.map((entry, index) => (
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
                      formatter={(value, entry, index) =>
                        dataWithPercentage[index].nameWithPercent
                      }
                      wrapperStyle={{
                        fontSize: "12px",
                        maxWidth: "20vw",
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

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Department-wise Usage Data
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Total session hits from April 1, 2024, to March 31, 2025 -
                <strong>1,67,747</strong>
              </p>
              <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      <th scope="col" className="px-4 py-2 font-semibold">
                        Department
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 font-semibold text-right"
                      >
                        Hit Counts
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {departmentChartData
                      .sort((a, b) => b.value - a.value)
                      .map((item, index) => (
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

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Service Duration Count
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Departments using AI Shruti APIs for speech to text translation
                services.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={durationWithPercentage}
                      cx="50%" // Adjust to give space for right-side legend
                      cy="50%"
                      outerRadius={100}
                      label={false}
                    >
                      {durationWithPercentage.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS2[index % COLORS2.length]}
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
                      formatter={(value, entry, index) =>
                        durationWithPercentage[index].nameWithPercent
                      }
                      wrapperStyle={{
                        fontSize: "12px",
                        maxWidth: "20vw",
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

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Department-wise Usage Data
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Total duration hits from April 1, 2024, to March 31, 2025 -
                <strong>1788.279</strong>
              </p>
              <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      <th scope="col" className="px-4 py-2 font-semibold">
                        Department
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 font-semibold text-right"
                      >
                        Duration(Hr)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {departmentChartData
                      .sort((a, b) => b.value - a.value)
                      .map((item, index) => (
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
              Below is the step-by-step flow from receiving the audio input to
              generating the text output (with optional translation):
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> Live audio stream or pre-recorded audio
                files (.wav format).
              </li>
              <li>
                <strong>Audio Ingestion:</strong> Captures real-time audio via
                WebSocket or uploads pre-recorded files through API.
              </li>
              <li>
                <strong>Pre-processing:</strong> Cleans and prepares audio
                (normalization, chunking) for model inference.
              </li>
              <li>
                <strong>ASR Model Inference:</strong> Transcribes audio using
                the Conformer-based ASR model.
              </li>
              <li>
                <strong>Post-processing:</strong> Applies punctuation,
                formatting, and error correction on raw transcript.
              </li>
              <li>
                <strong>Translation (Optional):</strong> Translates the
                transcript using integrated NMT model (e.g., Hindi ⇄ English).
              </li>
              <li>
                <strong>Output Generation:</strong> Returns plain text output or
                JSON with time-aligned transcripts (for file-based input).
              </li>
              <li>
                <strong>Delivery:</strong> Text is returned via API response or
                displayed on connected systems for real-time use.
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Shruti Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Onboarding & Authorization:</strong> Submit the ASR
                service request form along with a user request letter from your
                department/ministry via NIC MeghRaj Cloud. Specify use case and
                desired languages.
              </li>
              <li>
                <strong>Middleware Setup:</strong> Deploy the ASR middleware
                package provided by NIC on your department's VM. This includes
                the executable, SSL certificates, and environment configuration.
              </li>
              <li>
                <strong>Service Connection:</strong> Middleware establishes a
                secure WebSocket connection to the AI Shruti API endpoint.
              </li>
              <li>
                <strong>Language Configuration:</strong> Define the
                transcription or translation language pair (e.g.,{" "}
                <code>hi</code>, <code>en</code>, or <code>hi-en</code>) in the
                socket initiation call.
              </li>
              <li>
                <strong>Streaming & File Upload:</strong> Choose real-time
                speech input via microphone (WebSocket) or batch processing via
                file upload (.wav format, mono channel) using the POST API.
              </li>
              <li>
                <strong>Transcription & Translation:</strong> Receive
                transcribed output in JSON format with live updates for
                streaming, or full text on file completion. Translation is
                optionally included for hi-en or en-hi pairs.
              </li>
              <li>
                <strong>Result Handling:</strong> Display, store, or use the
                returned text for documentation, search, or automated processing
                within your system.
              </li>
            </ol>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> Available only via the NIC
                Network
              </li>
              <li>
                <strong>Access Control:</strong> Enforced via IP whitelisting
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiShrutiDetailPage;
