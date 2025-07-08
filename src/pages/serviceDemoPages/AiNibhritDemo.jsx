import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaDownload } from "react-icons/fa"; // Make sure you have react-icons installed

const AiNibhritDemo = () => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [maskedURL, setMaskedURL] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    const localURL = URL.createObjectURL(uploadedFile);
    setPreviewURL(localURL);
    setMaskedURL(null); // reset masked output on new upload
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsProcessing(true);
    setMaskedURL(null);

    // Simulate masking
    setTimeout(() => {
      setMaskedURL(previewURL); // Simulate: showing same image as masked
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#e7e7e6] text-gray-900">
      <Header />

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            AI Nibhrit - PII Masking Demo
          </h1>
          <p className="text-gray-700 text-center mb-10">
            Upload a scanned document (PDF or image) containing sensitive
            information like Aadhaar, PAN, QR codes, or fingerprints. AI Nibhrit
            will mask the detected PII and return a redacted version.
          </p>

          {/* Upload Form */}
          <form onSubmit={handleSubmit} className="mb-10 space-y-6">
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Upload Document (PDF / Image)
              </label>
              <input
                type="file"
                accept=".pdf,image/*"
                onChange={handleFileChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Submit for Masking"}
            </button>
          </form>

          {/* Split View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Original */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Original Document
              </h2>
              <div className="border rounded p-3 bg-gray-50 min-h-[300px] flex items-center justify-center">
                {previewURL ? (
                  file?.type === "application/pdf" ? (
                    <p className="text-blue-800">PDF Uploaded: {file.name}</p>
                  ) : (
                    <img
                      src={previewURL}
                      alt="Original Upload"
                      className="max-h-64 object-contain"
                    />
                  )
                ) : (
                  <p className="text-gray-400 italic">No file uploaded yet.</p>
                )}
              </div>
            </div>

            {/* Right: Masked */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Masked Output
              </h2>
              <div className="border rounded p-3 bg-gray-50 min-h-[300px] flex flex-col items-center justify-center relative">
                {isProcessing ? (
                  <p className="text-blue-600 animate-pulse">Processing...</p>
                ) : maskedURL ? (
                  <>
                    {file?.type.startsWith("image/") ? (
                      <>
                        <img
                          src={maskedURL}
                          alt="Masked Preview"
                          className="max-h-64 object-contain"
                        />
                        <a
                          href={maskedURL}
                          download={`masked-${file.name}`}
                          className="mt-3 text-blue-700 flex items-center gap-2 hover:underline"
                        >
                          <FaDownload />
                          Download Masked Image
                        </a>
                      </>
                    ) : (
                      <div className="text-center">
                        <p className="text-green-700 font-medium mb-2">
                          Masked PDF Ready
                        </p>
                        <a
                          href="/demo/masked-demo.pdf"
                          download
                          className="text-blue-700 underline"
                        >
                          Download Masked PDF
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-gray-400 italic">No output yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AiNibhritDemo;
