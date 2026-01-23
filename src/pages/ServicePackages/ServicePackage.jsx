import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";
import pck from "../../data/packages.json";
function ServicePackage() {
  const packages = pck.Pck;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white">
      {/* Hero Section */}

      <HeroSection />
      {/* Packages Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <span className="text-2xl">🌹</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-400 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our thoughtfully designed packages, each crafted to
            deliver unforgettable moments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg) => (
            <Link
              to={pkg.to}
              key={pkg.id}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-2xl hover:shadow-rose-500/20 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>


                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-rose-200 text-lg font-light">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${pkg.gradient}`}
                      ></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 bg-gradient-to-r ${pkg.gradient} text-white rounded-full font-medium transition-all duration-300 group-hover:shadow-xl flex items-center justify-center gap-2`}
                >
                  View Details
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-rose-400/50 transition-all duration-500 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Every celebration is unique. If our standard packages don't quite
            fit your vision, we'd love to create something bespoke just for you.
          </p>
          <Link
            to="/contact-us"
            className="px-8 py-4 bg-gradient-to-r from-rose-900 to-rose-800 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-rose-900/30 transition-all inline-flex items-center gap-2"
          >
            Contact Us
            <span>💌</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicePackage;
