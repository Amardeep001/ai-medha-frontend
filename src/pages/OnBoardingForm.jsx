import { useState } from "react";
import { Link } from "react-router-dom";
import indianFlag from "../images/ind_flag.png";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import Footer from "../components/Footer";

const OnboardingForm = () => {
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
    website: "",
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

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setPersonalDetails((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this specific field
    if (errors[field]) {
      setErrors((prev) => ({
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
    if (!personalDetails.phoneNumber)
      newErrors.phoneNumber = "Phone number is required.";
    if (!personalDetails.organizationIdFile) {
      newErrors.organizationIdFile = "Please upload a PDF.";
    } else if (personalDetails.organizationIdFile.size > 5 * 1024 * 1024) {
      newErrors.organizationIdFile = "File size must be less than 5MB.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(2); // Move to organization details if no errors
    }
  };

  const handleOrganizationSubmit = (e) => {
    e.preventDefault();
    console.log({ personalDetails, organizationDetails });
  };

  return (
    <div className="min-h-screen bg-gray-200 ">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white shadow text-[#003366]">
        <div className="bg-[#003366] text-white text-xs sm:text-sm py-2">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 sm:px-6 xl:px-20">
            <div className="flex items-center space-x-2">
              <img
                src={indianFlag}
                alt="Indian Flag"
                className="w-6 h-4 sm:h-6"
              />
              <span className="font-medium">
                भारत सरकार | Government of India
              </span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href="#main-content"
                className="hidden sm:block hover:underline"
              >
                Skip to Content
              </a>
              <div className="flex items-center space-x-1">
                <button className="text-xs font-semibold">A+</button>
                <button className="text-xs font-semibold">A</button>
                <button className="text-xs font-semibold">A-</button>
              </div>
            </div>
          </div>
        </div>

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
        <div className="min-h-screen bg-[#f9f9f9] p-8">
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
                disabled
              >
                Personal Details
              </button>
              <button
                className={`pb-2 border-b-2 font-semibold text-lg ${
                  step === 2
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-600"
                }`}
                disabled={step !== 2}
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
                  {errors.gender && (
                    <p className="text-red-600 text-sm mt-1">{errors.gender}</p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={personalDetails.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={personalDetails.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Designation
                  </label>
                  <input
                    type="text"
                    value={personalDetails.designation}
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {errors.designation && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.designation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Personal Email ID
                  </label>
                  <input
                    type="email"
                    value={personalDetails.personalEmail}
                    onChange={(e) =>
                      handleInputChange("personalEmail", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {errors.personalEmail && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.personalEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Official Email ID
                  </label>
                  <input
                    type="email"
                    value={personalDetails.officialEmail}
                    onChange={(e) =>
                      handleInputChange("officialEmail", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {errors.officialEmail && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.officialEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={personalDetails.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.phoneNumber}
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
                    Organization Type
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.orgType}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        orgType: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Ministry Name
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.ministry}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        ministry: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Department Name
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.department}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        department: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.orgName}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        orgName: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Official Website
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.website}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        website: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block font-medium text-gray-700">
                    Official Address
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.address}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        address: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.pincode}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        pincode: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.city}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        city: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    value={organizationDetails.state}
                    onChange={(e) =>
                      setOrganizationDetails({
                        ...organizationDetails,
                        state: e.target.value,
                      })
                    }
                    className="mt-1 w-full border rounded p-2"
                  />
                </div>

                <div className="col-span-2 mt-6 p-4 bg-orange-50 rounded">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4">
                    Details of your Supervisor/Head of Department
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={organizationDetails.hodFirstName}
                      onChange={(e) =>
                        setOrganizationDetails({
                          ...organizationDetails,
                          hodFirstName: e.target.value,
                        })
                      }
                      className="border rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={organizationDetails.hodLastName}
                      onChange={(e) =>
                        setOrganizationDetails({
                          ...organizationDetails,
                          hodLastName: e.target.value,
                        })
                      }
                      className="border rounded p-2"
                    />
                    <input
                      type="email"
                      placeholder="Official Email ID"
                      value={organizationDetails.hodEmail}
                      onChange={(e) =>
                        setOrganizationDetails({
                          ...organizationDetails,
                          hodEmail: e.target.value,
                        })
                      }
                      className="border rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={organizationDetails.hodPhone}
                      onChange={(e) =>
                        setOrganizationDetails({
                          ...organizationDetails,
                          hodPhone: e.target.value,
                        })
                      }
                      className="border rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="Designation"
                      value={organizationDetails.hodDesignation}
                      onChange={(e) =>
                        setOrganizationDetails({
                          ...organizationDetails,
                          hodDesignation: e.target.value,
                        })
                      }
                      className="border rounded p-2"
                    />
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
