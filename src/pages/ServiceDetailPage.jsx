import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";

const mockModels = [
  {
    id: "m1",
    name: "Sales Forecasting Model",
    category: "Forecasting",
    sector: "Retail",
    description: "Predicts future sales using historical data.",
    metrics: {
      accuracy: "92%",
      latency: "250ms",
      f1Score: "0.89",
    },
    version: "v1.2.3",
    image: "https://picsum.photos/400/200?random=11",
  },
  {
    id: "m2",
    name: "Customer Segmentation",
    category: "Clustering",
    sector: "E-commerce",
    description: "Groups customers based on buying behavior.",
    metrics: {
      silhouetteScore: "0.74",
      latency: "300ms",
    },
    version: "v2.0.0",
    image: "https://picsum.photos/400/200?random=12",
  },
  {
    id: "m3",
    name: "Fraud Detection",
    category: "Classification",
    sector: "Banking",
    description: "Detects fraudulent transactions in real-time.",
    metrics: {
      accuracy: "97%",
      f1Score: "0.91",
    },
    version: "v3.1.0",
    image: "https://picsum.photos/400/200?random=13",
  },
];

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"];

const insightData = [
  { name: "Accuracy", Sales: 92, Fraud: 97 },
  { name: "F1 Score", Sales: 89, Fraud: 91 },
  { name: "Latency (ms)", Sales: 250, Fraud: 300 },
];

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const chartData = [
    { name: "Retail", value: 1 },
    { name: "E-commerce", value: 1 },
    { name: "Banking", value: 1 },
  ];

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-gray-50 text-gray-900">
      <Header toggleSidebar={() => setSidebarOpen(true)} />

      <div className="overflow-auto flex flex-grow">
        <div className="p-6 w-full max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Model Repository - {id.replaceAll("_", " ").toUpperCase()}
          </h2>
          <p className="text-gray-700 text-base mb-8">
            Discover intelligent machine learning models built to serve diverse
            sectors such as Retail, E-commerce, and Banking. Each model
            leverages historical or real-time data to generate valuable
            predictions and insights.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            ← Back
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {mockModels.map((model) => (
              <div
                key={model.id}
                className="bg-white rounded-lg shadow-md border hover:shadow-xl transition-all"
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="rounded-t-lg w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">
                    {model.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Category:</strong> {model.category}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Sector:</strong> {model.sector}
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    {model.description}
                  </p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>
                      <strong>Accuracy:</strong>{" "}
                      {model.metrics.accuracy || "N/A"}
                    </p>
                    <p>
                      <strong>Latency:</strong> {model.metrics.latency || "N/A"}
                    </p>
                    <p>
                      <strong>F1 Score:</strong>{" "}
                      {model.metrics.f1Score || "N/A"}
                    </p>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mt-2">
                    Version: {model.version}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Sector-wise Model Distribution
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                This pie chart represents how models are distributed across
                different sectors such as Retail, E-commerce, and Banking. Each
                slice shows the number of models tailored to a specific domain.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Model Insights (Key Metrics)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                This bar chart highlights the performance of selected models
                across important metrics like accuracy, F1 score, and latency.
                Use it to compare and assess the effectiveness of each model in
                real-time scenarios.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={insightData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sales" fill="#4f46e5" />
                    <Bar dataKey="Fraud" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Summary & Insights
            </h3>
            <p className="text-base text-gray-700">
              The repository showcases a diverse set of machine learning models
              spanning multiple industries. While Retail and Banking models show
              high accuracy and relatively low latency, E-commerce clustering
              models provide deep customer segmentation. The insights presented
              help stakeholders choose the most appropriate model based on their
              performance metrics and domain relevance.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
