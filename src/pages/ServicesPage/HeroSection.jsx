function HeroSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          <span className="text-3xl animate-pulse">✨</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-400 to-transparent"></div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-7 leading-tight bg-gradient-to-b from-gray-900 via-rose-900 to-gray-900 bg-clip-text text-transparent">
          Bespoke Styling Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Transforming moments into timeless memories with elegance, artistry,
          and unwavering attention to detail
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
