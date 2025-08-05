import axios from "axios";
import { BASE_URL } from "../config/apiConfig";

/**
 * Downloads a PDF and returns an object URL to preview or open in new tab.
 * @param {string} fileUrl - URL to the PDF file
 * @returns {Promise<string|null>} - Blob URL or null if failed
 */
export const pdfDownload = async (serviceRequestFormId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/service-request-forms/${serviceRequestFormId}/download`, {
            responseType: "blob",
        });

        const blob = new Blob([response.data], { type: "application/pdf" });
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Failed to fetch PDF:", error);
        return null;
    }
};

