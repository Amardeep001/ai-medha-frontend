import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const mockModels = [
  {
    id: "m1",
    name: "Sales Forecasting Model",
    category: "Forecasting",
    sector: "Retail",
    description:
      "Predicts future sales using historical data to optimize inventory and sales targets.",
    details:
      "This model uses linear regression with time-series smoothing. Trained on 5 years of sales data from multiple retailers across India.",
    useCases: [
      "Monthly sales prediction",
      "Inventory management",
      "Budget planning",
    ],
    metrics: {
      accuracy: "92%",
      latency: "250ms",
      f1Score: "0.89",
    },
    version: "v1.2.3",
    image: "https://picsum.photos/600/300?random=101",
  },
  {
    id: "m2",
    name: "Customer Segmentation",
    category: "Clustering",
    sector: "E-commerce",
    description:
      "Clusters customers based on their transaction history and preferences.",
    details:
      "This model applies K-means clustering for grouping user behavior. Trained on anonymized customer records from top e-commerce firms.",
    useCases: [
      "Personalized ads",
      "Market segmentation",
      "Product recommendations",
    ],
    metrics: {
      silhouetteScore: "0.74",
      latency: "300ms",
    },
    version: "v2.0.0",
    image: "https://picsum.photos/600/300?random=102",
  },
  {
    id: "m3",
    name: "Fraud Detection",
    category: "Classification",
    sector: "Banking",
    description:
      "Detects fraudulent transactions in real-time across online banking and payment platforms.",
    details:
      "Uses supervised machine learning with Random Forest and Gradient Boosting classifiers trained on millions of anonymized transaction records to identify anomalous behavior with high accuracy.",
    useCases: [
      "Flag suspicious bank transactions",
      "Credit card fraud alerts",
      "Prevent unauthorized fund transfers",
    ],
    metrics: {
      accuracy: "97%",
      latency: "220ms",
      f1Score: "0.91",
    },
    version: "v3.1.0",
    image: "https://picsum.photos/600/300?random=103",
  },
];

const ModelDetailPage = () => {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const model = mockModels.find((m) => m.id === modelId);

  if (!model) {
    return (
      <div className="p-6">
        <p className="text-red-500">Model not found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <div className="overflow-auto flex-grow p-6 max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Repository
        </button>

        {/* Image and Title */}
        <div className="mb-6">
          <img
            src={model.image}
            alt={model.name}
            className="rounded-lg w-full h-64 object-cover mb-4"
          />
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            {model.name}
          </h2>
          <p className="text-gray-600">{model.description}</p>
        </div>

        {/* Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Model Overview
          </h3>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Category:</strong> {model.category}
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Sector:</strong> {model.sector}
          </p>
          <p className="text-gray-700 text-sm">{model.details}</p>
        </div>

        {/* Metrics Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Performance Metrics
          </h3>
          <ul className="text-gray-700 space-y-1 text-sm">
            {Object.entries(model.metrics).map(([key, val]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {val}
              </li>
            ))}
            <li>
              <strong>Version:</strong> {model.version}
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Use Cases
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {model.useCases.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModelDetailPage;
