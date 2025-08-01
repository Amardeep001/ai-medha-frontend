import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaClipboardList, FaHourglassHalf } from "react-icons/fa";

const statusData = [
  {
    label: "Service Requests",
    subtext: "Total Requests Submitted",
    value: 0,
    icon: <FaClipboardList className="text-yellow-600 text-2xl" />,
    bg: "bg-yellow-100",
  },
  {
    label: "Approved Services",
    subtext: "Total Approved AI Services",
    value: 0,
    icon: <FaCheckCircle className="text-green-600 text-2xl" />,
    bg: "bg-green-100",
  },
  {
    label: "Pending Services",
    subtext: "Under Review or In Progress",
    value: 0,
    icon: <FaHourglassHalf className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100",
  },
  {
    label: "Rejected Services",
    subtext: "Requests Not Approved",
    value: 0,
    icon: <FaTimesCircle className="text-red-600 text-2xl" />,
    bg: "bg-red-100",
  },
];

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [adminAction, setAdminAction] = useState(""); // 'approved' or 'rejected'
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedRequest?.status) {
      const status = selectedRequest.status.toLowerCase();
      if (status === "approved" || status === "rejected") {
        setAdminAction(status);
      } else {
        setAdminAction(""); // For "Pending" or unknown status
      }
    }
  }, [selectedRequest]);

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
          Welcome, Admin
        </h2>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
          {statusData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-5 bg-gray-50 shadow rounded-xl"
            >
              <div>
                <h4 className="font-semibold text-gray-900">{item.label}</h4>
                <p className="text-sm text-gray-500">{item.subtext}</p>
                <p className="mt-2 text-2xl font-bold text-blue-900">
                  {item.value}
                </p>
              </div>
              <div
                className={`ml-4 p-3 rounded-full ${item.bg} flex justify-center items-center`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Service Requests Table */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b pb-2">
            Your Service Requests
          </h3>

          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100 text-gray-600 font-medium">
                <tr>
                  <th className="px-4 py-3 text-left">Service Name</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Created At</th>
                  <th className="px-4 py-3 text-left">Updated At</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {[
                  {
                    name: "AI Panini",
                    status: "Pending",
                    userName: "Amit Sharma",
                    userEmail: "amit.sharma@example.com",
                    createdAt: "2025-07-28 10:12 AM",
                    updatedAt: null,
                    fileUrl:
                      "https://userdatav1.blob.core.windows.net/dashboardblob/Terms_and_Conditions_Bhashini.pdf",
                  },
                  {
                    name: "AI Shruti",
                    status: "Approved",
                    userName: "Priya Desai",
                    userEmail: "priya.desai@example.com",
                    createdAt: "2025-07-26 03:45 PM",
                    updatedAt: "2025-07-27 09:10 AM",
                    fileUrl:
                      "https://userdatav1.blob.core.windows.net/dashboardblob/Terms_and_Conditions_Bhashini.pdf",
                  },
                  {
                    name: "AI VANI",
                    status: "Rejected",
                    userName: "Ravi Verma",
                    userEmail: "ravi.verma@example.com",
                    createdAt: "2025-07-25 01:30 PM",
                    updatedAt: "2025-07-25 06:40 PM",
                    fileUrl:
                      "https://userdatav1.blob.core.windows.net/dashboardblob/Terms_and_Conditions_Bhashini.pdf",
                  },
                ].map((req, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 text-gray-800">{req.name}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          req.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : req.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{req.userName}</td>
                    <td className="px-4 py-3 text-blue-700">{req.userEmail}</td>
                    <td className="px-4 py-3 text-gray-600">{req.createdAt}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {req.updatedAt || "-"}
                    </td>
                    <td className="px-4 py-3 text-left space-x-2">
                      <button
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                        onClick={() => {
                          setSelectedRequest(req);
                          setIsModalOpen(true);
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg relative">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Review Request: {selectedRequest.name}
              </h3>

              {/* File Preview */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Uploaded Form Preview:
                </p>
                {selectedRequest.fileUrl?.endsWith(".pdf") ? (
                  <embed
                    src={selectedRequest.fileUrl}
                    type="application/pdf"
                    className="w-full h-64 border"
                  />
                ) : (
                  <img
                    src={selectedRequest.fileUrl}
                    alt="Uploaded"
                    className="w-full max-h-64 object-contain border"
                  />
                )}
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
                    />
                    Reject
                  </label>
                </div>
              </div>

              {/* Remarks (if rejected) */}
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
                  />
                </div>
              )}

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    // Call your API logic here (approve/reject)
                    console.log({
                      service: selectedRequest.name,
                      action: adminAction,
                      remarks,
                    });

                    setIsModalOpen(false);
                    setAdminAction("");
                    setRemarks("");
                  }}
                  disabled={
                    !adminAction || (adminAction === "rejected" && !remarks)
                  }
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                >
                  Submit
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setAdminAction("");
                    setRemarks("");
                  }}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
