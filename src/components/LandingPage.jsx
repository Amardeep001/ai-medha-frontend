import React, { useState } from "react";
import {
  FaChartBar,
  FaUserShield,
  FaCog,
  FaTools,
  FaClipboardList,
  FaTimes,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Footer from "./Footer";
import Header from "./Header";
import Overview from "./Overview";
import ServicesList from "./ServicesList";
import Settings from "./Settings";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = {
    overview: <Overview />,
    analytics: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Analytics Dashboard
        </h2>
        <div className="mt-6">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                {
                  label: "User Growth",
                  data: [10, 20, 30, 40, 50],
                  borderColor: "blue",
                  borderWidth: 2,
                },
              ],
            }}
          />
        </div>
      </>
    ),
    users: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          User Management
        </h2>
        <div className="mt-6">
          <p className="text-gray-700">Manage user roles and permissions.</p>
        </div>
      </>
    ),
    settings: <Settings />,
    services: <ServicesList />,
  };

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-gray-100 text-gray-900">
      {/* Header with Sidebar Toggle */}
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <div className="overflow-auto flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative bg-[#E8F0FE] text-gray-900 p-6 space-y-4 top-0 left-0 h-full md:h-auto z-40 shadow-md transition-transform transform ${
            sidebarOpen ? "translate-x-0 mt-20" : "-translate-x-full"
          } md:translate-x-0 w-64`}
        >
          {/* Close Button for Mobile */}
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden absolute top-3 right-4 text-gray-700"
          >
            <FaTimes className="text-2xl" />
          </button>

          <nav className="flex flex-col space-y-4">
            {[
              { icon: <FaClipboardList />, title: "Overview", key: "overview" },
              { icon: <FaChartBar />, title: "Analytics", key: "analytics" },
              { icon: <FaTools />, title: "Services", key: "services" },
              { icon: <FaUserShield />, title: "Users", key: "users" },
              { icon: <FaCog />, title: "Settings", key: "settings" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveSection(item.key);
                  setSidebarOpen(false);
                }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${
                  activeSection === item.key
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100 transition"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Sidebar Backdrop on Mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">{sections[activeSection]}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
