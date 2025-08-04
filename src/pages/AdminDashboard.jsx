import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaClipboardList, FaHourglassHalf } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../config/apiConfig";
import { formatDateTime } from "../utils/dateUtils";
import ReviewRequestModal from "../components/modals/ReviewRequestModal";
import swal from "sweetalert";

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [adminAction, setAdminAction] = useState(""); // 'approved' or 'rejected'
  const [remarks, setRemarks] = useState("");
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
      label: "approved Services",
      subtext: "Total approved AI Services",
      value: statusCounts.approved,
      icon: <FaCheckCircle className="text-green-600 text-2xl" />,
      bg: "bg-green-100",
    },
    {
      label: "pending Services",
      subtext: "Under Review or In Progress",
      value: statusCounts.pending,
      icon: <FaHourglassHalf className="text-blue-600 text-2xl" />,
      bg: "bg-blue-100",
    },
    {
      label: "rejected Services",
      subtext: "Requests Not approved",
      value: statusCounts.rejected,
      icon: <FaTimesCircle className="text-red-600 text-2xl" />,
      bg: "bg-red-100",
    },
  ];

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/requests/${selectedRequest.id}`,
        {
          status: adminAction,
          remarks,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        swal({
          title: "Success!",
          text: `Request has been ${
            adminAction === "approved" ? "approved" : "rejected"
          }.`,
          icon: "success",
          button: "OK",
        }).then(() => {
          setIsModalOpen(false);
        });
      }

      // Refresh the request list after update
      fetchRequests(); // make sure this is defined in your scope
    } catch (error) {
      console.error("Error updating request:", error);
      swal({
        title: "Error!",
        text: "Something went wrong while updating the request.",
        icon: "error",
        button: "OK",
      });
    } finally {
      setAdminAction("");
      setRemarks("");
    }
  };

  const fetchRequests = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/requests`);
      const list = response.data.serviceRequestList || [];

      // Compute counts
      const counts = {
        total: list.length,
        approved: list.filter((r) => r.status.toLowerCase() === "approved")
          .length,
        pending: list.filter((r) => r.status.toLowerCase() === "pending")
          .length,
        rejected: list.filter((r) => r.status.toLowerCase() === "rejected")
          .length,
      };

      setRequests(list);
      setStatusCounts(counts);
    } catch (error) {
      console.error("Error fetching service requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedRequest?.status) {
      const status = selectedRequest.status.toLowerCase();
      if (status === "approved" || status === "rejected") {
        setAdminAction(status);
        setRemarks(selectedRequest.remarks);
      } else {
        setAdminAction(""); // For "pending" or unknown status
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
                {loading && (
                  <tr>
                    <td colSpan={7} className="text-center py-4 text-gray-500">
                      Loading...
                    </td>
                  </tr>
                )}
                {requests.length === 0 && !loading && (
                  <tr>
                    <td colSpan={7} className="text-center py-4 text-gray-500">
                      No requests found.
                    </td>
                  </tr>
                )}
                {requests.map((req, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 text-gray-800">
                      {req.serviceName}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          req.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : req.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {req.status.charAt(0).toUpperCase() +
                          req.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{req.name}</td>
                    <td className="px-4 py-3 text-blue-700">{req.email}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {formatDateTime(req.createdAt)}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {req.updatedAt ? formatDateTime(req.updatedAt) : "-"}
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

        <ReviewRequestModal
          isOpen={isModalOpen}
          selectedRequest={selectedRequest}
          adminAction={adminAction}
          remarks={remarks}
          setAdminAction={setAdminAction}
          setRemarks={setRemarks}
          setIsModalOpen={setIsModalOpen}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
