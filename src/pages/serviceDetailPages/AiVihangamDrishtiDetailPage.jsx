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
      <Header />
      <div className="overflow-auto flex flex-grow">
        <div className="px-6 sm:px-20 py-6 w-full max-w-screen-2xl mx-auto">
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
            AI Vihangam Drishti is an initiative to help in planning and
            disaster management. It helps create a digital map of different
            infrastructure assets such as roads and buildings or map areas of
            natural assets like forest cover or glacial lakes etc.
          </p>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              About AI Vihangam Drishti
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>AI Vihangam Drishti</strong> is a computer vision-based
              service that analyses drone imagery/satellite imagery and AI
              models to create digital map of infrastructure assets such as
              roads, forests and populated areas. Mapping the Infrastructure
              explores the potential of GIS for better visualizing, planning and
              managing the built environment of rural/abadi areas in India. This
              service has potential applications in planning, renewable energy
              resource management and expansion, rural area development, and so
              on.
            </p>

            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Leveraging a transformer-based segmentation model, the model was
              used to classify aerial images of villages built-up area into six
              different classes - RCC roof, tiled roof, tin sheet roof, other
              build-ups, metallic road, and non-metallic road and return their
              latitude-longitude coordinates in GeoJSON format as well as
              estimated area for solar panel installation on rooftops. The
              service is actively utilized by platforms
              like grammanchitra.gov.in to assess areas for infrastructure
              development.
            </p>

            <p className="text-sm mt-2 text-gray-700 leading-relaxed">
              Additionally, the methodology is adaptable for disaster risk
              management, particularly in the context of glacial lake outburst
              floods (GLOFs). Surface area dynamics of glacial lakes can be
              monitored using multispectral satellite imagery (e.g. Sentinel-2,
              Landsat-8), while complementary INSAR time series data to provide
              insight into terrain deformation. Coupled with in-situ IoT sensor
              networks for hydrometeorological variables integrated through AI
              based forecasting can facilitate early warning system for
              proactive hazard mitigation in vulnerable mountainous regions.
            </p>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Last Security Audit Date:</strong> 30-07-2025
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
                  <strong>Category:</strong> Computer Vision
                </li>
                <li>
                  <strong>Sector:</strong> Rural Mapping/Infrastructure
                  Monitoring
                </li>
                <li>
                  <strong>Performance Metric:</strong> mean Intersection over
                  Union (mIoU)
                </li>
                <li>
                  <strong>Parameters:</strong> Learning rate, batch size, epoch
                </li>
                <li>
                  <strong>Workflow:</strong> Drone/Satellite Imagery Upload →
                  Segmentation Model → GeoJSON Output with Class &amp;
                  Coordinates
                </li>
              </ul>
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
                  Estimating slum distribution via “other build-ups”
                  classification
                </li>
                <li>Monitoring land encroachments including forest areas</li>
                <li>
                  Improving village road infrastructure through road surface
                  classification
                </li>
                <li>Monitoring glacial lakes for early warning systems etc.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-blue-800 font-semibold text-md mb-2">
                Possible Users
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Ministries</li>
                <li>Survey of India</li>
                <li>Solar Energy Deployment Agencies</li>
                <li>Local Governance and Urban Planning Bodies</li>
                <li>Hilly terrain states</li>
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
                Visual representation of monthly API hits for AI Vihangam
                Drishti in the <strong>year 2024</strong>.
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
                      // label
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
              Below is the step-by-step flow from uploading the drone/ satellite
              image to receiving the annotated output:
            </p>

            <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-2">
              <li>
                <strong>Input:</strong> User uploads a top-view drone
                image/satellite imagery files in TIF/tif/tiff format (max size
                30 MB).
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
                <strong>Model Inference:</strong> AI based segmentation and
                classification and area estimation.
              </li>
              <li>
                <strong>Geo-Annotation:</strong> Each predicted class region is
                tagged with latitude-longitude coordinates.
              </li>
              <li>
                <strong>Output Generation:</strong> A GeoJSON file is created
                containing class names and their corresponding geographic
                coordinates.
              </li>
              <li>
                <strong>Delivery:</strong> The annotated result is returned to
                the user via API in GeoJSON format for integration with GIS
                platforms like ArcMap.
              </li>
            </ul>
          </div>
          <div className="mt-8 mb-6 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              How to Use AI Vihangam Drishti Service
            </h3>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
              <li>
                Fill out the{" "}
                <span className="text-blue-700 hover:text-blue-800 cursor-pointer font-semibold">
                  User Service Request Form
                </span>{" "}
                via AI Medha Platform.
              </li>
              <li>Include project use case and authorization letter.</li>
              <li>
                Get <strong>RBAC authorization</strong> for API usage via AI
                Medha Service Catalogue.
              </li>
              <li>
                Choose an integration Method:{" "}
                <strong>National API Exchange (NAPIX) Integration</strong> or
                <strong> Direct API Access</strong>.
              </li>
              <li>
                The service is available over <strong>NICNET</strong> and also
                accessible over public internet via <strong>NAPIX</strong>{" "}
                platform.
              </li>
              <li>
                <strong>NAPIX Integration :</strong>
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>
                    Register on the NAPIX platform for external/public access.
                  </li>
                  <li>Apply for geospatial API access.</li>
                  <li>
                    Upon approval, receive your <strong>Client ID</strong> and
                    <strong> Client Secret</strong>.
                  </li>
                  <li>
                    Use authorization Keys - client id and client secret for all
                    POST requests to geospatial endpoints.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Direct API Access:</strong>
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li>
                    Ensure network access via NICNET or VPN to secure internal
                    endpoints via FARPS request and submit IPs for whitelisting.
                  </li>
                  <li>Use geospatial APIs.</li>
                  <li>
                    Submit satellite or drone imagery in supported formats such
                    as .tif or .tiff, keeping in mind the file size guidelines.
                  </li>
                  <li>
                    Receive geospatial content in <strong>GeoJSON</strong>{" "}
                    format for further use.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiVihangamDrishtiDetail;
