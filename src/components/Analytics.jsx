import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { FaUsers, FaRobot, FaChartLine } from "react-icons/fa";

// Register required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
        AI Medha Analytics Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4">
          <FaUsers className="text-blue-600 text-3xl" />
          <div>
            <p className="text-lg font-semibold">Total Users</p>
            <p className="text-xl font-bold">12,500</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4">
          <FaRobot className="text-green-600 text-3xl" />
          <div>
            <p className="text-lg font-semibold">Active AI Models</p>
            <p className="text-xl font-bold">25</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4">
          <FaChartLine className="text-purple-600 text-3xl" />
          <div>
            <p className="text-lg font-semibold">Inference Requests</p>
            <p className="text-xl font-bold">4.3M</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* User Growth Line Chart */}
        <div className="p-6 bg-white shadow-md rounded-lg h-80">
          <h3 className="text-lg font-semibold text-gray-800">User Growth</h3>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                {
                  label: "User Growth",
                  data: [10, 20, 30, 40, 50],
                  borderColor: "blue",
                  backgroundColor: "rgba(59,130,246,0.2)",
                  borderWidth: 2,
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>

        {/* AI Model Usage Bar Chart */}
        <div className="p-6 bg-white shadow-md rounded-lg h-80">
          <h3 className="text-lg font-semibold text-gray-800">
            AI Model Usage
          </h3>
          <Bar
            data={{
              labels: ["Model A", "Model B", "Model C", "Model D"],
              datasets: [
                {
                  label: "Usage Count",
                  data: [120, 250, 180, 300],
                  backgroundColor: ["#1E40AF", "#16A34A", "#7C3AED", "#DC2626"],
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
