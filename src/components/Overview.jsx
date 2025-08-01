import React, { useState, useEffect } from "react";
// import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  BarController,
  PieController,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaClipboardList, FaHourglassHalf } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../config/apiConfig";
import PdfPreview from "./PdfPreview";
import { formatDateTime } from "../utils/dateUtils";

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  BarController,
  PieController,
  Tooltip,
  Legend,
  Filler
);

// Data for chart
// const topServices = [
//   { name: "AI Panini", value: 4523458 },
//   { name: "AI Nibhrit", value: 3120871 },
//   { name: "AI Vani", value: 2032794 },
//   { name: "AI Shruti", value: 1657320 },
// ];

// const pieServiceData = {
//   labels: topServices.map((s) => s.name),
//   datasets: [
//     {
//       label: "Usage",
//       data: topServices.map((s) => s.value),
//       backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
//       borderColor: "#fff",
//       borderWidth: 2,
//     },
//   ],
// };

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusCounts, setStatusCounts] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  const statusData = [
    {
      label: "Service Requests",
      subtext: "Total Requests Submitted",
      value: statusCounts.total,
      icon: <FaClipboardList className="text-yellow-600 text-2xl" />,
      bg: "bg-yellow-100",
    },
    {
      label: "Approved Services",
      subtext: "Total Approved AI Services",
      value: statusCounts.approved,
      icon: <FaCheckCircle className="text-green-600 text-2xl" />,
      bg: "bg-green-100",
    },
    {
      label: "Pending Services",
      subtext: "Under Review or In Progress",
      value: statusCounts.pending,
      icon: <FaHourglassHalf className="text-blue-600 text-2xl" />,
      bg: "bg-blue-100",
    },
    {
      label: "Rejected Services",
      subtext: "Requests Not Approved",
      value: statusCounts.rejected,
      icon: <FaTimesCircle className="text-red-600 text-2xl" />,
      bg: "bg-red-100",
    },
  ];

  const handleView = (req) => {
    setSelectedRequest(req);
    setIsModalOpen(true);
  };

  const handleAbort = (name) => {
    // Replace with actual API logic if needed
    const confirmed = window.confirm(`Are you sure you want to abort ${name}?`);
    if (confirmed) {
      console.log("Aborted:", name);
    }
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `${BASE_URL}/api/requests?userId=${userId}`
        );
        const data = response.data.serviceRequestList || [];

        setRequests(data);

        // Count statuses
        const approved = data.filter((r) => r.status === "Approved").length;
        const pending = data.filter((r) => r.status === "Pending").length;
        const rejected = data.filter((r) => r.status === "Rejected").length;

        setStatusCounts({
          total: data.length,
          approved,
          pending,
          rejected,
        });
      } catch (error) {
        console.error("Error fetching requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
          Welcome, {localStorage.getItem("firstName") || "Amar"}
        </h2>
        <p className="text-base text-gray-600">User</p>
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
                  <th className="px-4 py-3 text-left">Created At</th>
                  <th className="px-4 py-3 text-left">Updated At</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : requests.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-gray-500">
                      No requests found.
                    </td>
                  </tr>
                ) : (
                  requests.map((req, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 text-gray-800">
                        {req.serviceName}
                      </td>
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
                      <td className="px-4 py-3 text-gray-600">
                        {formatDateTime(req.createdAt)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {req.updatedAt ? formatDateTime(req.updatedAt) : "-"}
                      </td>
                      <td className="px-4 py-3 text-left space-x-2">
                        <button
                          onClick={() => handleView(req)}
                          className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && selectedRequest && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
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
                    selectedRequest.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : selectedRequest.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedRequest.status}
                </span>
              </div>

              {/* Admin Remarks for Rejected */}
              {selectedRequest.status === "Rejected" &&
                selectedRequest.remarks && (
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
              {selectedRequest.status === "Pending" && (
                <button
                  onClick={() => {
                    handleAbort(selectedRequest.name);
                    setIsModalOpen(false);
                  }}
                  className="mb-4 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Abort Request
                </button>
              )}

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Top Performing Services */}
        {/* <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b pb-2">
            Top Performing Services
          </h3>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <div className="w-64 h-64">
                <Pie
                  data={pieServiceData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100 text-gray-600 font-medium">
                  <tr>
                    <th className="px-4 py-3 text-left">Service Name</th>
                    <th className="px-4 py-3 text-right">Usage Count</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {topServices.map((service, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2 text-gray-800">
                        {service.name}
                      </td>
                      <td className="px-4 py-2 text-right font-medium text-blue-800">
                        {service.value.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Traffic & Usage Insights
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            AI Medha has received over <strong>10M+ API hits</strong>, with{" "}
            <strong>AI Panini</strong> and <strong>AI Nibhrit</strong> making up
            60% of usage. Peak activity occurs during{" "}
            <strong>10 AM–5 PM IST</strong>, especially for translation and PII
            masking. Services like <strong>AI Shruti</strong> and{" "}
            <strong>AI VANI</strong> are gaining momentum. The platform ensures{" "}
            <strong>99.9% uptime</strong> for reliable performance.
          </p>
        </div> */}

        {/* <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b pb-2">
            System Health & Uptime
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-sm text-gray-500">System Uptime</p>
              <p className="text-3xl font-bold text-green-600">99.95%</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-sm text-gray-500">Avg API Latency</p>
              <p className="text-3xl font-bold text-blue-600">850ms</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Overview;
