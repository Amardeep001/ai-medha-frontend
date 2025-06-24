import { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    bio: "",
    address: "",
    gender: "",
    organizationType: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-gray-900">
      {/* Page Header */}
      <div className="w-full bg-[#0f2e5a] text-white py-6 shadow">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
          <p className="text-sm text-gray-200">
            Manage your profile and system preferences.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#003366] mb-4 border-b border-gray-300 pb-2">
            Profile Settings
          </h2>

          <div className="space-y-4">
            <input
              name="firstName"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded bg-white"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              name="middleName"
              placeholder="Middle Name"
              className="w-full p-3 border border-gray-300 rounded bg-white"
              value={formData.middleName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded bg-white"
              value={formData.lastName}
              onChange={handleChange}
            />
            <textarea
              name="bio"
              placeholder="Bio"
              className="w-full p-3 border border-gray-300 rounded bg-white"
              value={formData.bio}
              onChange={handleChange}
            />
            <textarea
              name="address"
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded bg-white"
              value={formData.address}
              onChange={handleChange}
            />
            <select
              name="gender"
              className="w-full p-3 border border-gray-300 rounded bg-white"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <select
              name="organizationType"
              className="w-full p-3 border border-gray-300 rounded bg-white"
              value={formData.organizationType}
              onChange={handleChange}
            >
              <option value="">Select Organization Type</option>
              <option value="government">Central Government</option>
              <option value="private">State/UT Government</option>
              <option value="academic">PSU</option>
              <option value="ngo">Judiciary</option>
              <option value="other">Other</option>
            </select>
            <input
              value="user@example.com"
              disabled
              className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-500"
              placeholder="Email"
            />
            <input
              value="+91 9876543210"
              disabled
              className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-500"
              placeholder="Phone"
            />
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#003366] mb-4 border-b border-gray-300 pb-2">
            System Preferences
          </h2>

          <div className="space-y-6">
            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    darkMode ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">
                Enable Notifications
              </span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                  notifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    notifications ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>

            {/* Language */}
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium">
                Preferred Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border p-2 rounded mt-1 bg-white"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>

            {/* 2FA */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">
                Two-Factor Authentication
              </span>
              <button
                onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                  twoFactorAuth ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    twoFactorAuth ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="w-full bg-[#e9eff5] py-6 border-t border-gray-200 text-center">
        <button className="bg-[#2b7a78] hover:bg-[#22635f] text-white font-semibold px-6 py-3 rounded shadow-md transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
