import React from "react";
import PdfPreview from "../PdfPreview";
import swal from "sweetalert";
import axios from "axios";
import { BASE_URL } from "../../config/apiConfig";

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

  const handleRequestVC = async (selectedRequest) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/requests/${selectedRequest.id}/request-vc`
      );

      console.log("VC Request API response:", response.data);

      swal({
        title: "VC Request Sent",
        text: `Bharat VC invitation has been sent to the user for ${selectedRequest.serviceName} service request.`,
        icon: "success",
        button: "OK",
      });
    } catch (error) {
      console.error("VC Request failed:", error);
      swal({
        title: "Error!",
        text: "Failed to send Bharat VC invitation. Please try again.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl relative">
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
        <div className="flex justify-between items-center gap-3">
          {/* Left Side VC Button */}
          <button
            onClick={() => handleRequestVC(selectedRequest)}
            disabled={isAlreadyProcessed}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Request for VC
          </button>

          {/* Right Side Submit / Cancel */}
          <div className="flex gap-3">
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
    </div>
  );
};

export default ReviewRequestModal;
