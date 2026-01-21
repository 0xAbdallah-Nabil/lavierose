import React, { useState, useEffect } from "react";
import logo from "../../assets/imgs/wedding.jpg";
import servicesData from "../../data/services.json";
import HeroSection from "./HeroSection";
function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = servicesData.services;

  useEffect(() => {
    if (!selectedService) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === selectedService.images.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedService, currentImageIndex]);

  const openSlider = (service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
  };

  const closeSlider = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white">
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

      {/* Image Slider Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={closeSlider}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all z-50"
          >
            <svg
              className="w-6 h-6 text-white"
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

          <div className="relative w-full max-w-5xl mx-4">
            {/* Service Title */}
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                {selectedService.title}
              </h2>
              <p className="text-rose-300">{selectedService.shortDesc}</p>
            </div>

            {/* Image Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedService.images[currentImageIndex]}
                alt={`${selectedService.title} ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
              >
                <svg
                  className="w-6 h-6 text-white"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all"
              >
                <svg
                  className="w-6 h-6 text-white"
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium">
                  {currentImageIndex + 1} / {selectedService.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {selectedService.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden transition-all ${
                    idx === currentImageIndex
                      ? "ring-4 ring-rose-500 scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
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
    </div>
  );
}

export default ServicesPage;
