import React, { useState } from "react";
import { FaTools, FaClipboardList, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation, Outlet } from "react-router-dom";

const menuItems = [
  { icon: <FaClipboardList />, title: "Overview", path: "/dashboard" },
  { icon: <FaTools />, title: "Services", path: "/services" },
];

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-gray-100 text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <div className="overflow-auto flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`fixed md:relative bg-[#E8F0FE] text-gray-900 p-6 space-y-4 top-0 left-0 h-full md:h-auto z-40 shadow-md transition-transform transform ${
            sidebarOpen ? "translate-x-0 mt-20" : "-translate-x-full"
          } md:translate-x-0 w-64`}
        >
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden absolute top-3 right-4 text-gray-700"
          >
            <FaTimes className="text-2xl" />
          </button>

          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg ${
                  location.pathname.startsWith(item.path)
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100 transition"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 bg-[#eee5dc]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
