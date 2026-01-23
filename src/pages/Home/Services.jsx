import React, { useState } from "react";
import { Sparkles, Package, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Bespoke Styling",
      subtitle: "Curated to Perfection",
      description:
        "Transform your vision into reality with our personalized event styling services.",
      cta: "Discover More",
      icon: Sparkles,
      gradient: "from-rose-600 via-pink-500 to-rose-400",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      to: "/services",
    },
    {
      id: 2,
      title: "Premium Packages",
      subtitle: "All-Inclusive Excellence",
      description:
        "Explore our curated collections designed to make your celebration unforgettable.",
      cta: "View Packages",
      icon: Package,
      gradient: "from-purple-600 via-fuchsia-500 to-pink-400",
      image:
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      to: "/service-package",
    },
    {
      id: 3,
      title: "Our Story",
      subtitle: "",
      description: "Discover the passion and dedication behind La Vie Rose.",
      cta: "Explore Now",
      icon: ShoppingBag,
      gradient: "from-amber-500 via-rose-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      to: "/our-story",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-linear-to-b from-white via-rose-50/30 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-rose-400 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-rose-400 rotate-45"></div>
            <div className="h-px w-16 bg-linear-to-l from-transparent via-rose-400 to-transparent"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif mb-4 bg-linear-to-r from-gray-900 via-rose-900 to-gray-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Crafting moments that last a lifetime
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                to={service.to}
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative h-105 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}
                  ></div>
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Icon */}
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-white/90 text-xs font-light tracking-widest uppercase">
                        {service.subtitle}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <button className="group/btn mt-3 flex items-center gap-2 text-white font-light tracking-wide transition-all duration-300 text-sm">
                      <span className="relative">
                        {service.cta}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/btn:w-full"></span>
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                    </button>
                  </div>
                </div>

                {/* Animated border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    hoveredCard === service.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-pulse"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center mt-8">
          <div className="h-px w-20 bg-linear-to-r from-transparent to-rose-200"></div>
          <div className="mx-2">
            <svg
              className="w-4 h-4 text-rose-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          </div>
          <div className="h-px w-20 bg-linear-to-l from-transparent to-rose-200"></div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
