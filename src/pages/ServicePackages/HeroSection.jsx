function HeroSection() {
  return (
    <main className="relative flex justify-center items-center h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://i.ibb.co/bgs3pTrm/IMG-6304.jpg"
          alt="Service Packages"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
          Our Service Packages
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-rose-200 font-light">
          Curated collections designed to make your celebration extraordinary
        </p>
      </div>
    </main>
  );
}

export default HeroSection;
