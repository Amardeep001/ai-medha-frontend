import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderBeforeLogin from "../../components/HeaderBeforeLogin";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Navbar */}
      <HeaderBeforeLogin />

      {/* Main Content */}
      <main
        id="main-content"
        className="w-full pt-16 pb-16 px-4 sm:px-6 lg:px-20"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

          <p>
            Cookies are small alphanumeric identifiers that we transfer to your
            computer's hard drive through your web browser. These cookies enable
            us to understand how you interact with the AI MEDHA platform and
            help us enhance your experience while using our services.
          </p>

          <p className="mt-4">
            These cookies allow us to analyze how users navigate the site, which
            features are most used, and which areas can be improved. By doing
            so, we can deliver a more personalized, secure, and efficient
            service. They help us monitor usage trends, identify performance
            issues, and make data-driven improvements.
          </p>

          <p className="mt-4">
            Please note that these cookies do not give us access to your
            computer or collect any personal information beyond what you choose
            to share. You can configure your browser settings to refuse some or
            all cookies, or to notify you when a cookie is being sent.
          </p>

          <p className="mt-4">
            However, please be aware that disabling cookies may limit your
            ability to access certain functionalities or features of the AI
            MEDHA portal.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
