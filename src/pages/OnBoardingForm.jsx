import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const OnboardingForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    designation: "",
    personalEmail: "",
    officialEmail: "",
    phoneNumber: "",
    organizationIdFile: null,
  });

  const [organizationDetails, setOrganizationDetails] = useState({
    orgType: "",
    ministry: "",
    department: "",
    orgName: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    hodFirstName: "",
    hodLastName: "",
    hodEmail: "",
    hodPhone: "",
    hodDesignation: "",
  });

  const [personalErrors, setPersonalErrors] = useState({});
  const [orgErrors, setOrgErrors] = useState({});

  const handleInputChange = (field, value) => {
    setPersonalDetails((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this specific field
    if (personalErrors[field]) {
      setPersonalErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleOrgInputChange = (field, value) => {
    setOrganizationDetails((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (orgErrors[field]) {
      setOrgErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!personalDetails.gender) newErrors.gender = "Gender is required.";
    if (!personalDetails.firstName)
      newErrors.firstName = "First name is required.";
    if (!personalDetails.lastName)
      newErrors.lastName = "Last name is required.";
    if (!personalDetails.designation)
      newErrors.designation = "Designation is required.";
    if (!personalDetails.personalEmail) {
      newErrors.personalEmail = "Personal email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalDetails.personalEmail)
    ) {
      newErrors.personalEmail = "Enter a valid personal email.";
    }
    if (!personalDetails.officialEmail) {
      newErrors.officialEmail = "Official email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalDetails.officialEmail)
    ) {
      newErrors.officialEmail = "Enter a valid official email.";
    }
    if (!personalDetails.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^[1-9][0-9]{9}$/.test(personalDetails.phoneNumber)) {
      newErrors.phoneNumber =
        "Enter a valid 10-digit phone number not starting with 0.";
    }
    if (!personalDetails.organizationIdFile) {
      newErrors.organizationIdFile = "Please upload a PDF.";
    } else if (personalDetails.organizationIdFile.size > 5 * 1024 * 1024) {
      newErrors.organizationIdFile = "File size must be less than 5MB.";
    }

    setPersonalErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2); // Move to organization details if no errors
    }
  };

  const handleOrganizationSubmit = (e) => {
    e.preventDefault();
    if (!personalDetails.officialEmail) {
      setStep(1);
      handlePersonalSubmit(e);
      return;
    }

    const errors = {};
    if (!organizationDetails.orgType)
      errors.orgType = "Organization type is required";
    if (!organizationDetails.ministry)
      errors.ministry = "Ministry name is required";
    if (!organizationDetails.department)
      errors.department = "Department name is required";
    if (!organizationDetails.orgName)
      errors.orgName = "Organization name is required";
    if (!organizationDetails.address) errors.address = "Address is required";
    if (
      !organizationDetails.pincode ||
      !/^\d{6}$/.test(organizationDetails.pincode)
    )
      errors.pincode = "Valid 6-digit pincode is required";
    if (!organizationDetails.city) errors.city = "City is required";
    if (!organizationDetails.state) errors.state = "State is required";

    if (!organizationDetails.hodFirstName)
      errors.hodFirstName = "First name is required";
    if (!organizationDetails.hodLastName)
      errors.hodLastName = "Last name is required";
    if (
      !organizationDetails.hodEmail ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(organizationDetails.hodEmail)
    )
      errors.hodEmail = "Valid official email is required";
    if (
      !organizationDetails.hodPhone ||
      !/^[1-9][0-9]{9}$/.test(organizationDetails.hodPhone)
    )
      errors.hodPhone =
        "Valid 10-digit phone number not starting with 0 is required";
    if (!organizationDetails.hodDesignation)
      errors.hodDesignation = "Designation is required";

    setOrgErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Proceed with submit
      console.log("Form submitted:", organizationDetails);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 ">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow text-[#003366]">
        <Navbar />
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20 py-5">
          <Link to="/">
            <div className="flex items-center space-x-6">
              <img
                src={NicLogo}
                alt="NIC Logo"
                className="w-[220px] object-contain"
              />
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wide">
                AI MEDHA
              </h1>
            </div>
          </Link>
          <div className="hidden sm:flex items-center space-x-6 text-base">
            <ul className="flex space-x-5">
              <li>
                <Link to="/" className="hover:text-[#FF9933]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF9933]">
                  About
                </Link>
              </li>
              <li>
                <a href="/explore-services" className="hover:text-[#FF9933]">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF9933]">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/auth/login" className="hover:text-[#FF9933]">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/auth/register" className="hover:text-[#FF9933]">
                  Register
                </Link>
              </li>
            </ul>
            <img
              src={NicLogo2}
              alt="NIC Secondary Logo"
              className="w-[140px] object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="w-full pt-36 ">
        <div className="min-h-screen bg-[#ebe7e7] p-8">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 ">
              User Onboarding
            </h2>

            <div className="border-b mb-6 flex space-x-6">
              <button
                className={`pb-2 border-b-2 font-semibold text-lg ${
                  step === 1
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-600"
                }`}
                // disabled
                onClick={() => setStep(1)}
              >
                Personal Details
              </button>
              <button
                className={`pb-2 border-b-2 font-semibold text-lg ${
                  step === 2
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-600"
                }`}
                // disabled={step !== 2}
                onClick={() => setStep(2)}
              >
                Organization Details
              </button>
            </div>

            {step === 1 && (
              <form
                onSubmit={handlePersonalSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block font-medium text-gray-700">
                    Gender
                  </label>
                  <div className="mt-2 flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={personalDetails.gender === "Male"}
                        onChange={(e) =>
                          handleInputChange("gender", e.target.value)
                        }
                        className="mr-2"
                      />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={personalDetails.gender === "Female"}
                        onChange={(e) =>
                          handleInputChange("gender", e.target.value)
                        }
                        className="mr-2"
                      />
                      Female
                    </label>
                  </div>
                  {personalErrors.gender && (
                    <p className="text-red-600 text-sm mt-1">
                      {personalErrors.gender}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={personalDetails.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {personalErrors.firstName && (
                    <p className="text-red-600 text-sm mt-1">
                      {personalErrors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={personalDetails.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {personalErrors.lastName && (
                    <p className="text-red-600 text-sm mt-1">
                      {personalErrors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your job title "
                    value={personalDetails.designation}
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {personalErrors.designation && (
                    <p className="text-red-600 text-sm mt-1">
                      {personalErrors.designation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Personal Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your personal email"
                    value={personalDetails.personalEmail}
                    onChange={(e) =>
                      handleInputChange("personalEmail", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {personalErrors.personalEmail && (
                    <p className="text-red-600 text-sm mt-1">
                      {personalErrors.personalEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Official Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your official email"
                    value={personalDetails.officialEmail}
                    onChange={(e) =>
                      handleInputChange("officialEmail", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {personalErrors.officialEmail && (
                    <p className="text-red-600 text-sm mt-1">
                      {personalErrors.officialEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1 flex rounded border p-2 items-center">
                    <span className="text-gray-600 mr-2">+91</span>
                    <input
                      type="tel"
                      value={personalDetails.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      className="w-full focus:outline-none"
                      placeholder="Enter 10-digit phone number"
                      maxLength={10}
                    />
                  </div>
                  {personalErrors.phoneNumber && (
                    <p className="text-red-600 text-sm mt-1">
                      {personalErrors.phoneNumber}
                    </p>
                  )}
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block font-medium text-gray-700">
                    Upload Organization / Institution ID
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) =>
                      handleInputChange("organizationIdFile", e.target.files[0])
                    }
                    className="mt-1 block"
                  />
                  <p className="text-xs text-red-600 mt-1">
                    PDF should be less than 5MB
                  </p>
                </div>

                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form
                onSubmit={handleOrganizationSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block font-medium text-gray-700">
                    Organization Category
                  </label>
                  <select
                    value={organizationDetails.orgType}
                    onChange={(e) =>
                      handleOrgInputChange("orgType", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2 bg-white"
                  >
                    <option value="">Select Organization Type</option>
                    <option value="government">Central Government</option>
                    <option value="private">State/UT Government</option>
                    <option value="academic">PSU</option>
                    <option value="ngo">Judiciary</option>
                    <option value="other">Other</option>
                  </select>

                  {orgErrors.orgType && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.orgType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Ministry Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of the ministry (e.g., Ministry of Health)"
                    value={organizationDetails.ministry}
                    onChange={(e) =>
                      handleOrgInputChange("ministry", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {orgErrors.ministry && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.ministry}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Sub Category
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the sub category (e.g., Department, Division, Board)"
                    value={organizationDetails.orgName}
                    onChange={(e) =>
                      handleOrgInputChange("orgName", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {orgErrors.orgName && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.orgName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Department Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the department name (e.g., IT Department)"
                    value={organizationDetails.department}
                    onChange={(e) =>
                      handleOrgInputChange("department", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {orgErrors.department && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.department}
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="block font-medium text-gray-700">
                    Official Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your official address"
                    value={organizationDetails.address}
                    onChange={(e) =>
                      handleOrgInputChange("address", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {orgErrors.address && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    value={organizationDetails.pincode}
                    onChange={(e) =>
                      handleOrgInputChange("pincode", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {orgErrors.pincode && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.pincode}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.city}
                    onChange={(e) =>
                      handleOrgInputChange("city", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {orgErrors.city && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.city}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.state}
                    onChange={(e) =>
                      handleOrgInputChange("state", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {orgErrors.state && (
                    <p className="text-red-600 text-sm mt-1">
                      {orgErrors.state}
                    </p>
                  )}
                </div>

                <div className="col-span-2 mt-6 p-4 bg-orange-50 rounded">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4">
                    Details of your Reporting/Nodal/Forwarding Officer
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={organizationDetails.hodFirstName}
                        onChange={(e) =>
                          handleOrgInputChange("hodFirstName", e.target.value)
                        }
                        className="border rounded p-2 w-full"
                      />
                      {orgErrors.hodFirstName && (
                        <p className="text-red-600 text-sm mt-1">
                          {orgErrors.hodFirstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={organizationDetails.hodLastName}
                        onChange={(e) =>
                          handleOrgInputChange("hodLastName", e.target.value)
                        }
                        className="border rounded p-2 w-full "
                      />
                      {orgErrors.hodLastName && (
                        <p className="text-red-600 text-sm mt-1">
                          {orgErrors.hodLastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Official Email ID"
                        value={organizationDetails.hodEmail}
                        onChange={(e) =>
                          handleOrgInputChange("hodEmail", e.target.value)
                        }
                        className="border rounded p-2 w-full"
                      />
                      {orgErrors.hodEmail && (
                        <p className="text-red-600 text-sm mt-1">
                          {orgErrors.hodEmail}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center border rounded">
                        <span className="text-gray-600 mx-2">+91</span>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={organizationDetails.hodPhone}
                          onChange={(e) =>
                            handleOrgInputChange("hodPhone", e.target.value)
                          }
                          maxLength={10}
                          className="w-full focus:outline-none p-2 "
                        />
                      </div>
                      {orgErrors.hodPhone && (
                        <p className="text-red-600 text-sm mt-1">
                          {orgErrors.hodPhone}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Designation"
                        value={organizationDetails.hodDesignation}
                        onChange={(e) =>
                          handleOrgInputChange("hodDesignation", e.target.value)
                        }
                        className="border rounded p-2 w-full"
                      />
                      {orgErrors.hodDesignation && (
                        <p className="text-red-600 text-sm mt-1">
                          {orgErrors.hodDesignation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 space-x-3 text-right mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OnboardingForm;
