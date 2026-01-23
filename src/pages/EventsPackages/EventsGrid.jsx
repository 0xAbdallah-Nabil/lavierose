function EventsGrid({ packages, openPackageDetails }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => openPackageDetails(pkg)}
            className="group relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
          >
            {/* Package Image */}
            <div className="relative">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-100 object-fit"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  Click to View Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventsGrid;
