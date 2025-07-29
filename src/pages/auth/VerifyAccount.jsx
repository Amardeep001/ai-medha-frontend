import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import bgImg from "../../images/inibg.svg";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";
import { BASE_URL } from "../../config/apiConfig";
import swal from "sweetalert";

const VerifyAccount = () => {
  const navigate = useNavigate();
  const [emailCode, setEmailCode] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const isEmailCodeValid = emailCode.length === 6;
  const isMobileOtpValid = /^[0-9]{6}$/.test(mobileOtp);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmailCodeValid) {
      swal({
        title: "Success!",
        text: "Email verified successfully.",
        icon: "success",
        button: "OK",
      }).then(() => {
        navigate("/auth/login");
      });

      try {
        setLoading(true);
        const response = await axios.post(`${BASE_URL}/api/auth/verifyOtp`, {
          email: localStorage.getItem("email") || "chauhanamardeep1@gmail.com",
          otp: emailCode,
        });

        if (response.data?.status === "success") {
          localStorage.removeItem("email");
          swal({
            title: "Success!",
            text: "Email verified successfully.",
            icon: "success",
            button: "OK",
          }).then(() => {
            navigate("/auth/login");
          });
        } else {
          swal({
            title: "Invalid Email Code",
            text: "Invalid or Expired Email Code",
            icon: "error",
            button: "Retry",
          });
        }
      } catch (error) {
        if (error.response?.data?.status === "error") {
          swal({
            title: "Invalid Email Code",
            text: "Invalid or Expired Email Code",
            icon: "error",
            button: "Retry",
          });
        } else {
          swal({
            title: "Error!",
            text: error.response?.data?.message || "Something went wrong!",
            icon: "error",
            button: "Retry",
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <HeaderBeforeLogin />

      {/* Verification Form */}
      <div
        className="flex-grow flex items-center justify-center bg-cover pt-16 pb-16"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Verify Your Account
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Enter the OTP and verification code sent to your mobile and email.
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email Verification Code */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold">
                Email Verification Code
              </label>
              <input
                type="text"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                placeholder="Enter the code sent to your email"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  isEmailCodeValid
                    ? "border-green-500"
                    : emailCode
                    ? "border-red-500"
                    : ""
                }`}
              />
              {emailCode &&
                (isEmailCodeValid ? (
                  <FaCheckCircle className="text-green-500 absolute top-10 right-3 text-xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 absolute top-10 right-3 text-xl" />
                ))}
              {!isEmailCodeValid && emailCode && (
                <p className="text-red-500 text-sm mt-1">
                  Code must be 6 digits
                </p>
              )}
              <button
                type="button"
                className="mt-2 text-sm text-blue-900 underline hover:text-blue-700"
              >
                Resend Email Code
              </button>
            </div>

            {/* Mobile OTP */}
            {/* <div className="mt-4 relative">
              <label className="block text-gray-700 font-semibold">
                Mobile OTP
              </label>
              <input
                type="text"
                value={mobileOtp}
                onChange={(e) => setMobileOtp(e.target.value)}
                placeholder="Enter the OTP sent to your mobile"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:ring ${
                  isMobileOtpValid
                    ? "border-green-500"
                    : mobileOtp
                    ? "border-red-500"
                    : ""
                }`}
              />
              {mobileOtp &&
                (isMobileOtpValid ? (
                  <FaCheckCircle className="text-green-500 absolute top-10 right-3 text-xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 absolute top-10 right-3 text-xl" />
                ))}
              {!isMobileOtpValid && mobileOtp && (
                <p className="text-red-500 text-sm mt-1">
                  OTP must be 6 digits
                </p>
              )}
              <button
                type="button"
                className="mt-2 text-sm text-blue-900 underline hover:text-blue-700"
              >
                Resend Mobile OTP
              </button>
            </div> */}

            <button
              type="submit"
              disabled={!isEmailCodeValid || loading}
              className={`w-full px-4 py-2 mt-6 rounded-md transition flex justify-center items-center gap-2 ${
                isEmailCodeValid && !loading
                  ? "bg-blue-900 text-white hover:bg-blue-800 cursor-pointer"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Verifying...
                </>
              ) : (
                "Verify Account"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VerifyAccount;
