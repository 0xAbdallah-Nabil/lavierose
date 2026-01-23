import React, { useState } from "react";
import { Link } from "react-router-dom";
import Eventpackages from "../../data/EventsPackages.json";
function EventsPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = Eventpackages.eventsPackages;
  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-rose-900 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Events Packages
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 mb-4">
            LaVie Rose Weddings & Events
          </p>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we create
            unforgettable experiences tailored to your vision
          </p>
        </div>
      </div>

      {/* Packages Grid - Image Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => openPackageDetails(pkg)}
              className="group relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
            >
              {/* Package Image */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-100 object-fit"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                    Click to View Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-purple-50 to-rose-50 rounded-2xl p-8 border-2 border-purple-200">
          <h3 className="text-2xl font-serif text-gray-900 mb-4 flex items-center gap-2">
            <span>📋</span>
            Important Information
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 text-xl">•</span>
              <span>All packages include setup and pack-down fees</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 text-xl">•</span>
              <span>
                Delivery costs will be calculated after confirming the venue
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 text-xl">•</span>
              <span>Standard delivery terms and conditions apply</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 text-xl">•</span>
              <span>
                Optional add-ons are charged separately for all packages
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-rose-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Ready to Create Your
            <span className="block italic text-rose-300 mt-2">
              Dream Event?
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life! Whether it's an intimate gathering
            or a grand celebration, we're here to make every moment
            unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-purple-900 rounded-full font-semibold tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Book Your Package
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-purple-200">Contact us today</p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-rose-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+61452195885"
                  className="hover:text-rose-300 transition-colors"
                >
                  Call Us
                </a>
              </a>
              <a
                href="https://instagram.com/lavierose"
                className="flex items-center gap-2 hover:text-rose-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a
                  href="https://www.instagram.com/lavie_rose_weddingsandevents/"
                  className="hover:text-rose-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all z-10"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r ${selectedPackage.gradient} p-8 text-white`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{selectedPackage.icon}</span>
                <div>
                  <h3 className="text-3xl font-serif mb-1">
                    {selectedPackage.name}
                  </h3>
                  <p className="text-xl text-white/90">
                    {selectedPackage.subtitle}
                  </p>
                </div>
              </div>
              <div className="text-4xl font-bold">{selectedPackage.price}</div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {selectedPackage.description}
              </p>

              {/* Full Includes List */}
              <div className="mb-8">
                <h4 className="text-2xl font-serif text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  What's Included
                </h4>
                <ul className="space-y-3">
                  {selectedPackage.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-rose-500 mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Optional Add-Ons */}
              <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-serif text-gray-900 mb-4 flex items-center gap-2">
                  <span>➕</span>
                  Optional Add-Ons (charged separately)
                </h4>
                <ul className="space-y-2">
                  {selectedPackage.addOns.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <span className="text-purple-400 mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                to="/contact-us"
                className={`w-full py-4 rounded-full font-semibold text-white bg-gradient-to-r ${selectedPackage.gradient} hover:shadow-xl transition-all duration-300 text-lg`}
              >
                Book This Package Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default EventsPackages;
