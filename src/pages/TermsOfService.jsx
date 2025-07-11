import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NicLogo from "../images/nic_logo3.svg";
import NicLogo2 from "../images/nic_logo2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <a href="#about" className="hover:text-[#FF9933]">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#FF9933]">
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
      <main
        id="main-content"
        className="w-full pt-48 pb-16 px-4 sm:px-6 lg:px-20"
      >
        <div className="max-w-screen-xl mx-auto bg-white p-8 sm:p-10 rounded-lg ">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Terms and Conditions
          </h2>

          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            <strong>Disclaimer:</strong>
            <br></br>
            This system is intended for demonstration purposes only. The
            outcomes generated by this system are not intended for use with
            external services or third-party applications. Users are advised
            that the system is designed in compliance with the applicable laws
            of the land.
          </p>

          <div className="space-y-5 text-base text-gray-800 leading-relaxed">
            <div>
              <strong className="text-gray-700">1. Introduction:</strong>{" "}
              <br></br>
              By accessing and using the AI MEDHA platform, users agree to abide
              by the terms and conditions outlined herein. These terms govern
              the access to and use of AI MEDHA services provided by NIC for
              government departments and agencies.
            </div>
            <div>
              <strong className="text-gray-700">
                2. Service Usage Eligibility:
              </strong>{" "}
              <br></br>
              The platform is intended for use only by Government Departments,
              Ministries, State Agencies, and other authorized institutions.
              Each user agency must complete the official onboarding process and
              comply with identity verification protocols.
            </div>
            <div>
              <strong className="text-gray-700">
                3. Service Models Offered:
              </strong>{" "}
              <br></br>
              AI MEDHA offers Software as a Service (SaaS): Access to a
              catalogue of AI models and applications on demand, Platform as a
              Service (PaaS): Sandboxes and development environments to build
              and test AI models. Users must adhere to service-specific
              guidelines, best practices, and usage limitations.
            </div>
            <div>
              <strong className="text-gray-700">
                4. Data Handling and Security:
              </strong>{" "}
              <br></br>
              All data uploaded or processed must comply with NIC-CERT and
              CERT-IN security standards. Users are responsible for
              anonymization, classification, and secure handling of sensitive
              data. Data is logged and monitored for auditing and compliance.
            </div>
            <div>
              <strong className="text-gray-700">
                5. Intellectual Property Rights:
              </strong>{" "}
              <br></br>
              AI models, algorithms, and software solutions developed by NIC and
              hosted on AI MEDHA remain the intellectual property of NIC. Users
              must not redistribute or commercialize any component of the
              platform or its outputs without prior written approval.
            </div>
            <div>
              <strong className="text-gray-700">
                6. Licensing and Costing:
              </strong>{" "}
              <br></br>
              Services may be subject to licensing terms, and applicable costs
              will be as per NIC's pricing and approval mechanisms. Licensing
              details and usage costs are made available upon onboarding or
              while ordering services.
            </div>
            <div>
              <strong className="text-gray-700">7. Access and Control:</strong>{" "}
              <br></br>
              Each agency will receive role-based access control and
              administrative privileges based on its requirements. Users must
              maintain strong passwords and are responsible for activities
              performed under their credentials.
            </div>
            <div>
              <strong className="text-gray-700">
                8. Support and Maintenance:
              </strong>{" "}
              <br></br>
              AI MEDHA provides L2 and L3 support through an integrated service
              desk. Support is available during business hours, with on-call
              escalation support available 24x7.
            </div>
            <div>
              <strong className="text-gray-700">9. Service Continuity:</strong>{" "}
              <br></br>
              The platform ensures business continuity and disaster recovery for
              hosted models and services. Regular security audits and compliance
              checks are conducted to mitigate data privacy threats.
            </div>
            <div>
              <strong className="text-gray-700">10. Usage Restrictions:</strong>{" "}
              <br></br>
              Misuse of services, including unauthorized access, sharing of
              credentials, and use of platform for non-governmental or
              commercial purposes, is strictly prohibited. Any violation may
              lead to suspension or termination of services.
            </div>
            <div>
              <strong className="text-gray-700">11. Changes to Terms:</strong>{" "}
              <br></br>
              NICSI reserves the right to modify these Terms and Conditions at
              any time. Updated terms will be published on the AI MEDHA website
              and notified to registered users.
            </div>
            <div>
              <strong className="text-gray-700">
                12. Collection of Personal Information:
              </strong>{" "}
              <br></br>
              If you are asked for any other personal information you will be
              informed how it will be used if you choose to give it. If at any
              time you believe the principles referred to in this privacy
              statement have not been followed, or have any other comments on
              these principles, please notify the Web Information Manager by
              sending an email to contact{" "}
              <a
                href="mailto:support@aimedha.gov.in"
                className="text-blue-600 underline"
              >
                support@aimedha.gov.in
              </a>
              .
            </div>
            <div>
              <strong className="text-gray-700">
                13. Contact Information:
              </strong>{" "}
              <br></br>
              If you have any questions or concerns about these terms and
              conditions, please contact us at:
              <a
                href="mailto:support@aimedha.gov.in"
                className="text-blue-600 underline"
              >
                support@aimedha.gov.in
              </a>
              .
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
