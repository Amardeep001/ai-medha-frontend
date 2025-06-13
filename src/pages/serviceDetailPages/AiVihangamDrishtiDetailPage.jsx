import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AiVihangamDrishtiDetail = () => {
  const navigate = useNavigate();

  const vihangamData = [
    { name: "February", value: 10011 },
    { name: "March", value: 244600 },
    { name: "April", value: 1085300 },
    { name: "May", value: 704300 },
    { name: "June", value: 841300 },
    { name: "July", value: 1255800 },
    { name: "August", value: 772300 },
    { name: "September", value: 266100 },
    { name: "October", value: 307800 },
  ];

  const COLORS = [
    "#4f46e5",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#6366f1",
    "#14b8a6",
    "#a855f7",
    "#eab308",
    "#f43f5e",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-rows-[min-content_1fr] min-h-screen bg-[#eee5dc] text-gray-900">
      <Header toggleSidebar={() => {}} />
      <div className="overflow-auto flex flex-grow">
        <div className="px-20 py-6 w-full max-w-screen-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mt-3 mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition-all"
          >
            ← Back to Services
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            AI Vihangam Drishti
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            AI Vihangam Drishti is an initiative to create a digital map of
            different infrastructure assets such as roads and buildings. Mapping
            Infrastructure explores the potential of GIS for better visualizing
            and managing the built environment of rural/abadi areas in India.
            This service has potential applications in transportation, renewable
            energy resource management and expansion, rural area development,
            and so on. For this service, Survey of India provides drone imagery
            (ORI) of villages and Abadi areas to the Ministry of Panchayati Raj
            for facilitation on the Svamitva portal.
          </p>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI VihangamDrishti
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>AI VihangamDrishti</strong> is a computer vision-based
              service that analyzes drone imagery of rural/abadi areas in India
              to create a digital map of infrastructure assets such as roads and
              rooftops. Leveraging a transformer-based segmentation model, it
              classifies drone images into six different classes — RCC roof,
              tiled roof, tin sheet roof, other buildups, metallic road, and
              non-metallic road — and returns their latitude-longitude
              coordinates in geoJSON format. The service is actively utilized by
              platforms like <code>grammanchitra.gov.in</code> to assess rooftop
              areas for solar panel installation and infrastructure planning.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> In process
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Service Capabilities & Key Metrics
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Supported formats:</strong> TIF, tiff (under 30MB)
                </li>
                <li>
                  <strong>Deployment options:</strong> REST API (POST method)
                </li>
                <li>
                  <strong>Workflow:</strong> Drone Image Upload → Segmentation
                  Model → GeoJSON Output with Class & Coordinates
                </li>
                <li>
                  <strong>Category:</strong> Computer Vision
                </li>
                <li>
                  <strong>Sector:</strong> Rural Mapping / Infrastructure
                  Monitoring
                </li>
                <li>
                  <strong>Performance Metric:</strong> mIoU (mean Intersection
                  over Union)
                </li>
                <li>
                  <strong>Model:</strong> Transformer-based segmentation model
                </li>
                <li>
                  <strong>Parameters:</strong> Learning rate, batch size, epoch
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                AI VihangamDrishti Rollout
              </h4>
              <p className="text-sm text-gray-700">
                AI VihangamDrishti is currently being used by{" "}
                <code>grammanchitra.gov.in</code> to provide detailed geospatial
                maps of RCC rooftops to aid solar panel installation initiatives
                and infrastructure visualization across Indian villages.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-blue-700 mb-2">
                Ideal Use Cases
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>
                  Identifying rooftops suitable for solar panel installation
                </li>
                <li>
                  Mapping and classifying roads and building rooftops in rural
                  areas
                </li>
                <li>
                  Estimating slum distribution via “other buildups”
                  classification
                </li>
                <li>Monitoring land encroachments using building top views</li>
                <li>
                  Improving village road infrastructure through road surface
                  classification
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Possible Users
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Ministry of Panchayati Raj</li>
                <li>Survey of India</li>
                <li>Solar Energy Deployment Agencies</li>
                <li>Local Governance and Urban Planning Bodies</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Monthly Usage Distribution
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Visual representation of monthly API hits for AI
                VihangamDrishti.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={vihangamData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {vihangamData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) =>
                        new Intl.NumberFormat().format(value)
                      }
                    />
                    <Legend
                      layout="vertical"
                      align="right"
                      verticalAlign="middle"
                      wrapperStyle={{
                        fontSize: "12px",
                        textAlign: "left",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        lineHeight: "1.4em",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Usage Table */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Month-wise Usage Data
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Total AI Requests Served in 2024: <strong>54.87 Lakh+</strong>
              </p>
              <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-2 font-semibold">Month</th>
                      <th className="px-4 py-2 font-semibold text-right">
                        Usage Count
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {vihangamData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2 text-right">
                          {item.value.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              End-to-End Flow
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Below is the step-by-step flow from uploading the drone image to
              receiving the annotated output:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> User uploads a top-view drone image file
                in TIF/tif/tiff format (max size 30 MB).
              </li>
              <li>
                <strong>Image Reception:</strong> Image is submitted via POST
                request to the annotation API endpoint.
              </li>
              <li>
                <strong>Preprocessing:</strong> The image is preprocessed to
                align with model requirements and optimize segmentation.
              </li>
              <li>
                <strong>Model Inference:</strong> A transformer-based
                segmentation model analyzes the image and classifies it into 6
                categories: RCC roof, tiled roof, tin sheet roof, other
                buildups, metalled road, and un-metalled road.
              </li>
              <li>
                <strong>Geo-Annotation:</strong> Each predicted class region is
                tagged with latitude-longitude coordinates.
              </li>
              <li>
                <strong>Output Generation:</strong> A geoJSON file is created
                containing class names and their corresponding geographic
                coordinates.
              </li>
              <li>
                <strong>Delivery:</strong> The annotated result is returned to
                the user via API in geoJSON format for integration with GIS
                platforms like ArcMap.
              </li>
            </ul>
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI VihangamDrishti Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Account Creation:</strong> Register on the{" "}
                <strong>NAPIX</strong> platform to gain authorized access to AI
                VihangamDrishti services.
              </li>
              <li>
                <strong>Credential Issuance:</strong> After approval, secure
                credentials are issued for accessing the service via NIC
                infrastructure.
              </li>
              <li>
                <strong>Network Access:</strong> The service can be accessed
                through both the <strong>NIC Network</strong> and{" "}
                <strong>NAPIX</strong> environment, offering flexibility in
                deployment.
              </li>
              <li>
                <strong>Input Preparation:</strong> Upload satellite or drone
                imagery in supported formats such as .tif or .tiff, keeping in
                mind the file size guidelines.
              </li>
              <li>
                <strong>Service Invocation:</strong> Submit the imagery to the
                AI model through a secure API request using standard
                authentication and integration methods.
              </li>
              <li>
                <strong>Result Handling:</strong> The system returns structured
                geospatial outputs, typically in <strong>GeoJSON</strong>{" "}
                format, highlighting features like rooftops, roads, or terrain
                elements.
              </li>
              <li>
                <strong>Use of Output:</strong> Leverage the processed output
                for applications such as infrastructure planning, digital
                mapping, solar panel suitability analysis, or village-level
                development initiatives.
              </li>
            </ol>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Network Access Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Network Access:</strong> The service is accessible both
                through the internal <strong>NIC Network</strong> and externally
                via the <strong>NAPIX platform</strong>, ensuring secure and
                controlled connectivity.
              </li>
              <li>
                <strong>Access Simplicity via NAPIX:</strong> When accessed
                through NAPIX, the API does not require additional firewall
                configurations or port openings, making integration seamless for
                external stakeholders.
              </li>
              <li>
                <strong>Security Enforcement:</strong> Credential-based access
                control is used to authenticate users and services, ensuring
                secure interaction with the AI VihangamDrishti API.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiVihangamDrishtiDetail;
