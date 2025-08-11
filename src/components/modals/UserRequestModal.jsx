import React from "react";
import PdfPreview from "../PdfPreview";
import { capitalizeFirstLetter } from "../../utils/dateUtils";

const UserRequestModal = ({
  isModalOpen,
  selectedRequest,
  onClose,
  onAbort,
}) => {
  if (!isModalOpen || !selectedRequest) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl relative">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          Uploaded File
        </h3>

        {/* File Preview */}
        <div className="mb-4">
          <PdfPreview fileUrl={selectedRequest.pdfUrl} />
        </div>

        {/* Status */}
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-700">
            Current Status:
          </span>{" "}
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              selectedRequest.status === "approved"
                ? "bg-green-100 text-green-700"
                : selectedRequest.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {capitalizeFirstLetter(selectedRequest.status)}
          </span>
        </div>

        {/* Admin Remarks for rejected */}
        {selectedRequest.status === "rejected" && selectedRequest.remarks && (
          <div className="mb-4">
            <p className="text-sm text-red-700 font-medium">
              Remarks from Admin:
            </p>
            <p className="mt-1 text-sm text-gray-800 bg-red-50 border border-red-300 p-2 rounded">
              {selectedRequest.remarks}
            </p>
          </div>
        )}

        {/* Abort Button */}
        {selectedRequest.status === "pending" && (
          <button
            onClick={() => {
              onAbort(selectedRequest.id, selectedRequest.serviceName);
              //   onClose();
            }}
            className="mb-4 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Abort Request
          </button>
        )}

        <button
          onClick={onClose}
          className="w-full bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserRequestModal;
