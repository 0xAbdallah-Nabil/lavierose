import React, { useState } from "react";

function ServicePackage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      title: "Wedding Packages",
      subtitle: "Your dream wedding, perfectly styled",
      description:
        "Comprehensive wedding styling packages designed to bring your vision to life with elegance and sophistication.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
      icon: "💍",
      gradient: "from-rose-500 to-pink-600",
      features: [
        "Ceremony Styling",
        "Reception Decor",
        "Floral Arrangements",
        "Bridal House Setup",
      ],
    },
    {
      id: 2,
      title: "Events Packages",
      subtitle: "Celebrations that leave lasting impressions",
      description:
        "Tailored event styling packages for birthdays, baby showers, engagements, and all special occasions.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
      icon: "🎉",
      gradient: "from-purple-500 to-pink-600",
      features: [
        "Birthday Parties",
        "Baby Celebrations",
        "Engagement Events",
        "Custom Themes",
      ],
    },
  ];

  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
    // This will be connected to a detailed page later
    console.log(`Opening details for: ${pkg.title}`);
  };

  const closePackageDetails = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white">
      {/* Hero Section */}
      <main className="relative flex justify-center items-center h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80"
            alt="Service Packages"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-4">
            <span className="text-5xl animate-pulse">✨</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Our Service Packages
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-rose-200 font-light">
            Curated collections designed to make your celebration extraordinary
          </p>
        </div>
      </main>

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
            <div
              key={pkg.id}
              onClick={() => openPackageDetails(pkg)}
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

                {/* Icon Badge */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                  >
                    <span className="text-3xl">{pkg.icon}</span>
                  </div>
                </div>

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
            </div>
          ))}
        </div>
      </section>

      {/* Temporary Modal (will be replaced with actual page navigation) */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12">
            <button
              onClick={closePackageDetails}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
            >
              <svg
                className="w-5 h-5 text-gray-600"
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

            <div className="text-center">
              <span className="text-6xl mb-4 inline-block">
                {selectedPackage.icon}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                {selectedPackage.title}
              </h2>
              <p className="text-rose-600 text-lg mb-6">
                {selectedPackage.subtitle}
              </p>
              <p className="text-gray-600 mb-8">
                {selectedPackage.description}
              </p>

              <div className="bg-rose-50 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 text-sm">
                  <strong>Coming Soon:</strong> Detailed package information,
                  pricing tiers, and booking options will be available here.
                </p>
              </div>

              <button
                onClick={closePackageDetails}
                className={`px-8 py-3 bg-gradient-to-r ${selectedPackage.gradient} text-white rounded-full font-medium hover:shadow-xl transition-all`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
          <button className="px-8 py-4 bg-gradient-to-r from-rose-900 to-rose-800 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-rose-900/30 transition-all inline-flex items-center gap-2">
            Contact Us
            <span>💌</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ServicePackage;
