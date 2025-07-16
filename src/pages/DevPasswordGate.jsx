// src/pages/DevPasswordGate.js
import React, { useState } from "react";
import { useDevAccess } from "../context/DevAccessContext";

const DevPasswordGate = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const { grantAccess } = useDevAccess();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "aimedha2025") {
      grantAccess();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 rounded-lg p-8 shadow max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Enter Password to access AI MEDHA
        </h1>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default DevPasswordGate;
