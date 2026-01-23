function HeroSection() {
  return (
    <main className="relative flex justify-center items-center h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://i.ibb.co/Q7Mwh0wc/IMG-7580.png"
          alt="Service Packages"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
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
    </main>
  );
}

export default HeroSection;
