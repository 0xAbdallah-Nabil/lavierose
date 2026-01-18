import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/wedding.jpg";
import {
  Heart,
  Flower2,
  PartyPopper,
  Home,
  Church,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Heart,
      title: "Wedding Styling",
      shortDesc: "Celebrating love with elegance and refined detail",
      description:
        "Our wedding styling is a celebration of love, elegance, and refined detail. Every element is thoughtfully curated to reflect your story, creating a seamless and luxurious atmosphere that feels romantic, personal, and beautifully unforgettable from the first moment to the last.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    },
    {
      id: 2,
      icon: Flower2,
      title: "Floral Styling",
      shortDesc: "Artistry meets romance in every bloom",
      description:
        "Our floral styling blends artistry with romance, using fresh and premium faux blooms to create soft, elegant arrangements. Each design is carefully composed to enhance your space, adding texture, movement, and timeless beauty to every celebration.",
      image:
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
    },
    {
      id: 3,
      icon: PartyPopper,
      title: "Event Styling (Balloon & Props)",
      shortDesc: "Elevated installations with bespoke details",
      description:
        "We create elevated event styling using bespoke balloon installations, curated props, and refined details. Designed with balance and elegance, our setups transform celebrations into luxurious experiences, where every element feels intentional, harmonious, and visually captivating.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    },
    {
      id: 4,
      icon: Home,
      title: "Bridal, Bride & Groom House Styling",
      shortDesc: "Creating intimate, elegant atmospheres at home",
      description:
        "We style bridal and groom homes with romantic florals, soft textures, and personalised details. Our designs create a warm, elegant atmosphere—perfect for intimate moments, meaningful traditions, and timeless photographs to be cherished forever.",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    },
    {
      id: 5,
      icon: Church,
      title: "Ceremony Styling",
      shortDesc: "Romantic, serene, unforgettable moments",
      description:
        "Our ceremony styling is designed to feel romantic, serene, and unforgettable. From floral-lined aisles to statement backdrops, every detail is thoughtfully arranged to create a luxurious setting where love takes centre stage and memories are made.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-rose-50/30 to-white">
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
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-rose-400 to-transparent"></div>
            <Sparkles className="w-6 h-6 text-rose-500 animate-pulse" />
            <div className="h-px w-16 bg-linear-to-l from-transparent via-rose-400 to-transparent"></div>
          </div>

          <h1 className=" text-4xl md:text-6xl lg:text-7xl font-serif mb-7 leading-tight bg-linear-to-b from-gray-900 via-rose-900 to-gray-900 bg-clip-text text-transparent">
            Bespoke Styling
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Transforming moments into timeless memories with elegance, artistry,
            and unwavering attention to detail
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`group relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  index === services.length - 1 && services.length % 2 !== 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-7 h-7 text-white" />
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
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3 group-hover:text-rose-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-rose-600 text-sm font-medium mb-4 tracking-wide">
                    {service.shortDesc}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
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
            );
          })}
        </div>
      </section>

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
          <button className="px-10 py-4 bg-gradient-to-r from-rose-900 to-rose-800 text-white rounded-full font-light tracking-wide hover:shadow-2xl hover:shadow-rose-900/30 transition-all duration-300 text-lg group">
            <Link to="/contact-us" className="flex items-center gap-3">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </button>

          {/* Decorative element */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-rose-400 to-transparent"></div>
              <Sparkles className="w-4 h-4 text-rose-400" />
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
