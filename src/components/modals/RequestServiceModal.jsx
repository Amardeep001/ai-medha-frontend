import React, { useRef } from "react";
import swal from "sweetalert";
import axiosInstance from "../../utils/axiosInstance";
import { BASE_URL } from "../../config/apiConfig";

const RequestServiceModal = ({
  serviceName,
  pdfUrl,
  filePreview,
  selectedFile,
  setFilePreview,
  setIsModalOpen,
  setSelectedFile,
  serviceText,
}) => {
  const fileInputRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${serviceName}_service_request_form.pdf`;
    link.click();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      swal({
        title: "Invalid File",
        text: "Only PDF files are allowed!",
        icon: "error",
        button: "OK",
      });
      e.target.value = "";
      return;
    }

    // File size validation (5 MB limit)
    if (file.size > 5 * 1024 * 1024) {
      swal({
        title: "File Too Large",
        text: "The uploaded file exceeds the 5MB size limit. Please upload a smaller file.",
        icon: "error",
        button: "OK",
      });
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    setFilePreview({
      name: file.name,
      url: fileUrl,
      type: file.type,
    });
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      swal({
        title: "Form Required",
        text: "Please upload the signed service request form first.",
        icon: "warning",
        button: "OK",
      });
      return;
    }

    // File size validation (5 MB limit)
    if (selectedFile.size > 5 * 1024 * 1024) {
      swal({
        title: "File Too Large",
        text: "The uploaded file exceeds the 5MB size limit. Please upload a smaller file.",
        icon: "error",
        button: "OK",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userId", localStorage.getItem("userId")); // or retrieve as needed
      formData.append("serviceName", serviceName);
      formData.append("pdfFile", selectedFile); // selectedFile should be a File object from input

      const response = await axiosInstance.post(
        `${BASE_URL}/api/requests/submit`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload success:", response.data);
      if (response.data?.status === "success") {
        swal({
          title: "Success!",
          text: `Form submitted successfully. Action required: Service Owner and HOD approval pending for ${serviceName} service request.`,
          icon: "success",
          button: "OK",
        }).then(() => {
          setIsModalOpen(false);
          setSelectedFile(null);
        });
      }
    } catch (error) {
      console.error("Upload failed:", error);
      swal({
        title: "Error!",
        text: "Something went wrong while submitting the form.",
        icon: "error",
        button: "OK",
      });
    }
  };

  const handleRemoveFile = () => {
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-6 rounded shadow-md max-w-xl w-full relative">
        <h2 className="text-xl text-center font-bold mb-4">
          Service Request: {serviceName}
        </h2>

        {/* Instruction Steps */}
        <div className="mb-4 space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">
            How to Request Access
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              {/* <span className="mt-1 text-blue-600">📝</span> */}
              <span>
                <strong>Step 1:</strong> Fill out the{" "}
                <span className="font-medium">Service Request Form</span>{" "}
                provided below.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {/* <span className="mt-1 text-blue-600">📌</span> */}
              <span>
                <strong>Step 2:</strong> Include details such as{" "}
                <span className="font-medium">Project Name</span>,{" "}
                <span className="font-medium">Use Case</span>, and{" "}
                <span className="font-medium">
                  {serviceText || "Authorization letter"}
                </span>
                .
              </span>
            </li>
            <li className="flex items-start gap-2">
              {/* <span className="mt-1 text-blue-600">✅</span> */}
              <span>
                <strong>Step 3:</strong> Upload{" "}
                <span className="font-medium">Service Request</span> form,
                signed and stamped by an{" "}
                <span className="font-medium">
                  officer of Director level or above
                </span>{" "}
                from the concerned user department.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {/* <span className="mt-1 text-blue-600">📄</span> */}
              <span>
                <strong>Step 4:</strong> Submit the Signed Service Request form
                to initiate onboarding.
              </span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleDownload}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Service Request Form
          </button>

          <div>
            <label
              htmlFor="uploadFile"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded cursor-pointer hover:bg-blue-700 "
            >
              Upload Signed Service Request Form
            </label>
            <input
              type="file"
              id="uploadFile"
              ref={fileInputRef}
              onChange={handleUpload}
              className="hidden"
            />
            <p className="mt-1 text-sm text-gray-600">
              PDF size should not be greater than
              <span className="font-medium"> 5 MB</span>.
            </p>
          </div>

          {filePreview && (
            <div className="border border-gray-300 rounded p-3 text-sm bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-gray-700">Preview:</p>
                <button
                  onClick={handleRemoveFile}
                  className="text-red-600 font-medium text-sm underline"
                >
                  Remove Attachment
                </button>
              </div>

              {filePreview.type === "application/pdf" ? (
                <a
                  href={filePreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {filePreview.name}
                </a>
              ) : (
                <p className="text-gray-500">File type not previewable.</p>
              )}
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              onClick={() => {
                setIsModalOpen(false);
                handleRemoveFile();
              }}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestServiceModal;
