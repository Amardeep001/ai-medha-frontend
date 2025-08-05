import React from "react";
import PdfPreview from "../PdfPreview";

const ReviewRequestModal = ({
  isOpen,
  selectedRequest,
  adminAction,
  remarks,
  setAdminAction,
  setRemarks,
  setIsModalOpen,
  onSubmit,
}) => {
  if (!isOpen || !selectedRequest) return null;
  const isAlreadyProcessed = selectedRequest.status !== "pending";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl relative">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">
          Review Request: {selectedRequest.serviceName}
        </h3>

        {/* File Preview */}
        <div className="mb-4">
          <PdfPreview fileUrl={selectedRequest.pdfUrl} />
        </div>

        {/* Action Selection */}
        <div className="mb-4 space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Action:
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="action"
                value="approved"
                checked={adminAction === "approved"}
                onChange={() => setAdminAction("approved")}
                disabled={isAlreadyProcessed}
              />
              Approve
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="action"
                value="rejected"
                checked={adminAction === "rejected"}
                onChange={() => setAdminAction("rejected")}
                disabled={isAlreadyProcessed}
              />
              Reject
            </label>
          </div>
        </div>

        {/* Remarks */}
        {adminAction === "rejected" && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Remarks (required):
            </label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full border rounded p-2"
              rows={3}
              required
              disabled={isAlreadyProcessed}
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onSubmit}
            disabled={
              isAlreadyProcessed ||
              !adminAction ||
              (adminAction === "rejected" && !remarks)
            }
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          >
            Submit
          </button>
          <button
            onClick={() => {
              setIsModalOpen(false);
              setAdminAction(selectedRequest.status);
              setRemarks(selectedRequest.remarks);
            }}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewRequestModal;
