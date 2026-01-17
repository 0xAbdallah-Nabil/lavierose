import React from "react";

function LuxuryVisionSection() {
  return (
    <section className="relative bg-linear-to-b from-white via-rose-50/30 to-white py-24 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-rose-300"></div>
          <div className="mx-4 w-2 h-2 bg-rose-400 rotate-45"></div>
          <div className="h-px w-16 bg-linear-to-l from-transparent to-rose-300"></div>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
          Bringing Your Vision To Life,{" "}
          <span className="italic font-light text-rose-900">Anywhere</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
          Based in Sydney, <span className="font-medium">La Vie Rose M&J</span>{" "}
          is dedicated to crafting celebrations as unique as you are.
        </p>

        {/* Main Content */}
        <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
          <p>
            We stand out for creating{" "}
            <span className="text-rose-900 font-medium">
              luxurious celebrations
            </span>{" "}
            that truly reflect <span className="italic">your</span> style - from
            breathtaking destination weddings to unforgettable events, we bring
            your vision to life with expert planning, stunning design, and
            seamless execution.
          </p>

          <p className="text-xl md:text-2xl font-light text-gray-800 mt-12">
            Let's create something{" "}
            <span className="italic font-serif text-rose-900">
              extraordinary
            </span>{" "}
            together, wherever in the world your dream takes you.
          </p>
        </div>

        {/* Decorative Bottom Line */}
        <div className="flex items-center justify-center mt-12">
          <div className="h-px w-24 bg-linear-to-r from-transparent to-rose-200"></div>
          <div className="mx-3">
            <svg
              className="w-4 h-4 text-rose-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          </div>
          <div className="h-px w-24 bg-linear-to-l from-transparent to-rose-200"></div>
        </div>

      </div>
    </section>
  );
}

export default LuxuryVisionSection;
