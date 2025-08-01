import axios from "axios";
import { useEffect, useState } from "react";

const PdfPreview = ({ fileUrl }) => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState("");

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await axios.get(fileUrl, {
          responseType: "blob", // IMPORTANT: get raw binary
        });

        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPdfBlobUrl(url);
      } catch (error) {
        console.error("Failed to fetch PDF:", error);
      }
    };

    if (fileUrl) fetchPdf();

    // Cleanup on unmount
    return () => {
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUrl]);

  if (!pdfBlobUrl) return <p className="text-gray-500">Loading PDF...</p>;

  return (
    <embed
      src={pdfBlobUrl}
      type="application/pdf"
      className="w-full h-64 border"
      title="PDF Preview"
    />
  );
};

export default PdfPreview;
