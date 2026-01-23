import React, { useState, useEffect } from "react";
import logo from "../../assets/imgs/wedding.jpg";
import servicesData from "../../data/services.json";
import HeroSection from "./HeroSection";
// Sample data - replace with your actual imports in your project

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  const services = servicesData.services;

  // Auto-play slider
  useEffect(() => {
    if (!selectedService) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === selectedService.images.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedService, currentImageIndex]);

  // Preload images for better performance
  useEffect(() => {
    if (selectedService) {
      selectedService.images.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          setImageLoadStatus((prev) => ({ ...prev, [src]: true }));
        };
        img.src = src;
      });
    }
  }, [selectedService]);
  const closeSlider = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
    setImageLoadStatus({});
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedService.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedService.images.length - 1 : prev - 1,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedService) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeSlider();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedService, currentImageIndex]);

  const openSlider = (service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
    setImageLoadStatus({});
  };

  return (
    <div className="min-h-screen  from-white via-rose-50/30 to-white">
      <main className="relative flex justify-center items-center h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={logo}
            alt="La Vie Rose Logo"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className=" text-center w-full px-4 text-base sm:text-2xl md:text-3xl font-bold text-white z-10">
          Our work speaks for itself — crafting unforgettable weddings and
          events.
        </h1>
      </main>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              onClick={() => openSlider(service)}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 left-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <span className="text-white font-serif text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view gallery
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2 group-hover:text-rose-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-rose-600 text-sm font-medium mb-3 tracking-wide">
                  {service.shortDesc}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Animated border */}
              <div
                className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                  activeService === service.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${service.gradient} opacity-50`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Slider Modal - OPTIMIZED */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
          {/* Close Button - Enhanced transition */}
          <button
            onClick={closeSlider}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:rotate-90 flex items-center justify-center transition-all duration-300 z-50"
            aria-label="Close slider"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300"
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

          {/* Reduced from max-w-5xl to max-w-4xl */}
          <div className="relative w-full max-w-4xl mx-4">
            {/* Service Title - Reduced size */}
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">
                {selectedService.title}
              </h2>
              <p className="text-sm md:text-base text-rose-300">
                {selectedService.shortDesc}
              </p>
            </div>

            {/* Image Container - Optimized loading */}
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black/20">
              {/* Loading indicator */}
              {!imageLoadStatus[selectedService.images[currentImageIndex]] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <img
                src={selectedService.images[currentImageIndex]}
                alt={`${selectedService.title} ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{
                  opacity: imageLoadStatus[
                    selectedService.images[currentImageIndex]
                  ]
                    ? 1
                    : 0,
                }}
                loading="eager"
              />

              {/* Navigation Buttons - Enhanced transitions */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 flex items-center justify-center transition-all duration-300 group"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-white text-xs md:text-sm font-medium">
                  {currentImageIndex + 1} / {selectedService.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation - Smaller size */}
            <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6 flex-wrap">
              {selectedService.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "ring-2 md:ring-4 ring-rose-500 scale-105 md:scale-110"
                      : "opacity-50 hover:opacity-100 hover:scale-105"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-white"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
            Ready to Create Something{" "}
            <span className="italic text-rose-900">Extraordinary?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life. Whether it's an intimate
            celebration or a grand affair, we're here to make it unforgettable.
          </p>
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-rose-900 to-rose-800 text-white rounded-full font-light tracking-wide hover:shadow-2xl hover:shadow-rose-900/30 transition-all duration-300 text-lg group">
            Get in Touch
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
          </button>

          {/* Decorative element */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-rose-400 to-transparent"></div>
              <span className="text-rose-400 text-xl">✨</span>
              <div className="w-20 h-px bg-gradient-to-l from-rose-400 to-transparent"></div>
              <div
                className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Add fadeIn animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ServicesPage;
