function HeroSection() {
  return (
    <div className="relative bg-linear-to-r from-purple-900 via-purple-800 to-rose-900 py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
          Events Packages
        </h1>
        <p className="text-xl md:text-2xl text-rose-100 mb-4">
          LaVie Rose Weddings & Events
        </p>
        <p className="text-lg text-purple-200 max-w-3xl mx-auto">
          From intimate gatherings to grand celebrations, we create
          unforgettable experiences tailored to your vision
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
