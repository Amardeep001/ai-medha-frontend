import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AiNibhritDemo = () => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [maskedFileURL, setMaskedFileURL] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setPreviewURL(URL.createObjectURL(uploadedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsProcessing(true);
    // Simulate processing delay
    setTimeout(() => {
      setMaskedFileURL("/demo/masked-demo.pdf"); // Replace with actual response
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#e7e7e6] text-gray-900">
      <Header />
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 text-center">
            AI Nibhrit - PII Masking Demo
          </h1>
          <p className="text-gray-700 text-center mb-8">
            Upload a scanned document (PDF or image) containing sensitive
            information like Aadhaar, PAN, QR codes, or fingerprints. AI Nibhrit
            will mask the detected PII and return a redacted version.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Upload Document (PDF / Image)
              </label>
              <input
                type="file"
                accept=".pdf, image/*"
                onChange={handleFileChange}
                className="w-full border rounded p-2"
                required
              />
            </div>

            {previewURL && (
              <div className="mt-4">
                <p className="text-gray-600 font-semibold">Preview:</p>
                <div className="border rounded p-2 mt-2 bg-gray-50">
                  {file.type === "application/pdf" ? (
                    <p className="text-blue-800">PDF Uploaded: {file.name}</p>
                  ) : (
                    <img
                      src={previewURL}
                      alt="Uploaded preview"
                      className="max-h-64"
                    />
                  )}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Submit for Masking"}
            </button>
          </form>

          {maskedFileURL && !isProcessing && (
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-semibold text-green-700">
                Masked Output Ready
              </h3>
              <a
                href={maskedFileURL}
                download
                className="text-blue-700 underline mt-2 inline-block"
              >
                Download Masked File
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiNibhritDemo;
