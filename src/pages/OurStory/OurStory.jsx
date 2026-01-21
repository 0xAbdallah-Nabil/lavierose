import React from "react";

function AboutUsSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-rose-50/30">
      <main className="relative flex justify-center items-center h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80"
            alt="Service Packages"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-rose-200 font-light">
            Crafting moments that last a lifetime
          </p>
        </div>
      </main>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-1xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/dw5xS7p9/IMG-6026.png"
                alt="LaVie Rose Wedding Scene"
                className="w-full h-full object-cover"
                rel="preload"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-rose-400 to-transparent"></div>
                <span className="text-rose-500 text-sm font-medium tracking-wider uppercase">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                Welcome
              </h2>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                LaVie Rose Weddings & Events is a family owned business built on
                passion, creativity, and love. Founded two years ago, the
                journey began naturally, we don't know exactly how the idea
                started, only that our love for flowers and event design kept
                growing.
              </p>

              <p>
                Led by Matilda and Johnny, and supported by our three boys, we
                create heartfelt celebrations, making every moment special for
                our clients and our family.
              </p>
            </div>

            {/* Decorative Quote or Highlight */}
            <div className="relative pl-6 border-l-4 border-rose-400 py-2">
              <p className="text-rose-900 font-light italic text-lg">
                "Every celebration tells a story, and we're honored to help
                write yours."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Floating Rose Decoration */}
      <div className="absolute top-1/4 right-10 opacity-10 pointer-events-none hidden xl:block">
        <span className="text-9xl">🌹</span>
      </div>
    </section>
  );
}

export default AboutUsSection;
