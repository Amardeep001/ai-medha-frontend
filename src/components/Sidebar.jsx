import React from "react";
import {
  FaChartBar,
  FaUserShield,
  FaCog,
  FaTools,
  FaClipboardList,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({
  activeSection,
  sidebarOpen,
  handleSidebar,
  handleActiveSection,
}) => {
  return (
    <>
      <aside
        className={`fixed md:relative bg-[#E8F0FE] text-gray-900 p-6 space-y-4 top-0 left-0 h-full md:h-auto z-40 shadow-md transition-transform transform ${
          sidebarOpen ? "translate-x-0 mt-20" : "-translate-x-full"
        } md:translate-x-0 w-64`}
      >
        {/* Close Button for Mobile */}
        <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleSidebar(false)}
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
                handleActiveSection(item.key);
                handleSidebar(false);
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
          onClick={handleSidebar(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
