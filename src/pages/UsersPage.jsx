import React from "react";

const UserManagement = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Title Section */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 text-center sm:text-left">
        User Management & Access Control
      </h2>

      {/* Description */}
      <div className="mt-4 text-center sm:text-left">
        <p className="text-gray-700 text-sm sm:text-lg">
          AI Medha’s User Management system provides a secure way to manage user
          roles, permissions, and access to AI services, ensuring only
          authorized users can interact with critical tools and data.
        </p>
      </div>

      {/* Key Features */}
      <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-900 border-b pb-2 sm:pb-3">
          Key Features
        </h3>

        <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
          <li className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
            <span className="text-blue-700 font-semibold">
              🔹 Role-Based Access:
            </span>
            <span>
              Assign Admin, Developer, Data Scientist, and Viewer roles with
              specific permissions.
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
            <span className="text-blue-700 font-semibold">
              🔹 Secure Authentication:
            </span>
            <span>SSO, MFA, and OAuth integrations for login security.</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
            <span className="text-blue-700 font-semibold">
              🔹 Audit & Logging:
            </span>
            <span>
              Track user activity, changes, and generate compliance reports.
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
            <span className="text-blue-700 font-semibold">
              🔹 Team Collaboration:
            </span>
            <span>
              Invite members, assign roles, and manage AI service access.
            </span>
          </li>
        </ul>
      </div>

      {/* Role Management Table (Scrolls on Mobile) */}
      <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-900 border-b pb-2 sm:pb-3">
          User Roles & Permissions Overview
        </h3>

        <div className="overflow-auto mt-4">
          <table className="w-full border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="border p-2 sm:p-3 text-blue-900">Role</th>
                <th className="border p-2 sm:p-3 text-blue-900">Permissions</th>
                <th className="border p-2 sm:p-3 text-blue-900">
                  Access Level
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-2 sm:p-3 font-medium">Administrator</td>
                <td className="border p-2 sm:p-3">
                  Full control over settings, users, and AI models.
                </td>
                <td className="border p-2 sm:p-3 text-green-700">🔒 High</td>
              </tr>
              <tr className="bg-white">
                <td className="border p-2 sm:p-3 font-medium">Developer</td>
                <td className="border p-2 sm:p-3">
                  Manages AI models, APIs, and datasets.
                </td>
                <td className="border p-2 sm:p-3 text-yellow-600">🛠️ Medium</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2 sm:p-3 font-medium">
                  Data Scientist
                </td>
                <td className="border p-2 sm:p-3">
                  Trains and evaluates AI models.
                </td>
                <td className="border p-2 sm:p-3 text-yellow-600">🧠 Medium</td>
              </tr>
              <tr className="bg-white">
                <td className="border p-2 sm:p-3 font-medium">Viewer</td>
                <td className="border p-2 sm:p-3">
                  Read-only access to dashboards.
                </td>
                <td className="border p-2 sm:p-3 text-blue-700">📊 Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Security & Compliance */}
      <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-900 border-b pb-2 sm:pb-3">
          Security & Compliance
        </h3>
        <p className="mt-3 text-gray-700 text-sm sm:text-base">
          AI Medha follows strict security standards to protect sensitive AI
          data.
        </p>
        <ul className="mt-3 sm:mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
          <li>
            ✅ <strong>End-to-End Encryption:</strong> Secures communications.
          </li>
          <li>
            ✅ <strong>Role-Based Security Policies:</strong> Prevents
            unauthorized access.
          </li>
          <li>
            ✅ <strong>Automated Suspicious Activity Detection:</strong> Detects
            anomalies.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-6 text-center">
        <p className="text-gray-800 text-sm sm:text-lg font-medium">
          Manage users efficiently for a secure AI ecosystem.
        </p>
        <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition">
          Manage Users
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
