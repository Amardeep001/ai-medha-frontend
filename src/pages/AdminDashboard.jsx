import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
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

// Data for chart
const topServices = [
  { name: "AI Panini", value: 4523458 },
  { name: "AI Nibhrit", value: 3120871 },
  { name: "AI Vani", value: 2032794 },
  { name: "AI Shruti", value: 1657320 },
];

const pieServiceData = {
  labels: topServices.map((s) => s.name),
  datasets: [
    {
      label: "Usage",
      data: topServices.map((s) => s.value),
      backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
      borderColor: "#fff",
      borderWidth: 2,
    },
  ],
};

const AdminDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAbort = (serviceName) => {
    const confirm = window.confirm(
      `Are you sure you want to abort request for ${serviceName}?`
    );
    if (confirm) {
      // TODO: Call API here to cancel the request on backend if needed

      // Simulate state update or refetch
      alert(`Request for "${serviceName}" has been aborted.`);

      // Optional: Update local UI state if you're storing this in state
      // Example:
      // setRequests(prev => prev.map(r => r.name === serviceName ? { ...r, status: 'Cancelled' } : r));
    }
  };

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
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {[
                  { name: "AI Panini", status: "Pending" },
                  { name: "AI Shruti", status: "Approved" },
                  { name: "AI VANI", status: "Rejected" },
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
                    <td className="px-4 py-3 text-left space-x-2">
                      <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                        View
                      </button>
                      {req.status === "Pending" && (
                        <button
                          onClick={() => handleAbort(req.name)}
                          className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                        >
                          Abort
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performing Services */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b pb-2">
            Top Performing Services
          </h3>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Pie Chart */}
            <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <div className="w-64 h-64">
                <Pie
                  data={pieServiceData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>

            {/* Table */}
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
        </div>

        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
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
        </div>

        {/* Live System Health */}
        <div className="mt-10">
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
