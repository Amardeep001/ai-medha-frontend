import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [dataCollection, setDataCollection] = useState(false);

  return (
    <div className="px-2 sm:px-6 ">
      {/* System Settings Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
        System Settings
      </h2>
      {/* Settings Card */}
      <div className="mt-6 max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {/* General Settings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
            General Settings
          </h3>
          <div className="mt-4 space-y-4">
            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 transition ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    darkMode ? "translate-x-7" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Enable Notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 transition ${
                  notifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    notifications ? "translate-x-7" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Language Selection */}
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium">
                Preferred Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border p-2 rounded mt-1 bg-gray-50"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="te">Telugu</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security & Privacy Settings */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Security & Privacy
          </h3>
          <div className="mt-4 space-y-4">
            {/* Two-Factor Authentication */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800">Two-Factor Authentication</span>
              <button
                onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 transition ${
                  twoFactorAuth ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    twoFactorAuth ? "translate-x-7" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* Data Collection */}
            {/* <div className="flex items-center justify-between">
              <span className="text-gray-800">Allow Data Collection</span>
              <button
                onClick={() => setDataCollection(!dataCollection)}
                className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 transition ${
                  dataCollection ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                    dataCollection ? "translate-x-7" : ""
                  }`}
                ></div>
              </button>
            </div> */}

            {/* Download Data */}
            {/* <div className="mt-4 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition">
                Download Your Data
              </button>
            </div> */}
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-8 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
