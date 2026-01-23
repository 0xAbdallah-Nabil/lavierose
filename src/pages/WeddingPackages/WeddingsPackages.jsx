import React, { useState } from "react";
import CallToAction from "./CallToAction.jsx";
import WeddingPackagesData from "../../data/WeddingPackages.json";
import PackageDetails from "./PackageDetails.jsx";
const WeddingPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = WeddingPackagesData.WeddingPackages;
  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-900 via-pink-800 to-rose-900 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Wedding Packages
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 mb-4">
            LaVie Rose Weddings & Events
          </p>
          <p className="text-lg text-pink-200 max-w-3xl mx-auto">
            From intimate ceremonies to grand celebrations, we create
            unforgettable moments tailored to your love story
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
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Package Image */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-100 object-cover"
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
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border-2 border-rose-200">
          <h3 className="text-2xl font-serif text-gray-900 mb-4 flex items-center gap-2">
            <span>📋</span>
            Important Information
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>All packages include setup and pack-down fees</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Delivery costs will be calculated after confirming the venue
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>Standard delivery terms and conditions apply</span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-500 mr-3 text-xl">•</span>
              <span>
                Optional add-ons are charged separately for all packages
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

      {/* Package Details Modal */}
      {selectedPackage && (
        <PackageDetails
          selectedPackage={selectedPackage}
          closeModal={closeModal}
        />
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
};

export default WeddingPackages;
