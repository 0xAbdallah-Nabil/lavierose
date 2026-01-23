import { Link } from "react-router-dom";

function EventsPackagesDetails({ selectedPackage, closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all z-10"
        >
          <svg
            className="w-6 h-6 text-gray-600"
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

        {/* Modal Header */}
        <div className={`p-8 text-white relative overflow-hidden`}>
          <img
            src="https://i.ibb.co/KxtC4fcS/Untitled-design-1.png"
            alt=""
            className="absolute bottom-0 right-0 w-full h-full  transform object-cover "
          />
          <div className="z-20 relative">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-serif mb-1">
                  {selectedPackage.name}
                </h3>
                <p className="text-xl text-white/90">
                  {selectedPackage.subtitle}
                </p>
              </div>
            </div>
            <div className="text-4xl font-bold">{selectedPackage.price}</div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {selectedPackage.description}
          </p>

          {/* Full Includes List */}
          <div className="mb-8">
            <h4 className="text-2xl font-serif text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-500">✓</span>
              What's Included
            </h4>
            <ul className="space-y-3">
              {selectedPackage.includes.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-rose-500 mr-3 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Add-Ons */}
          <div className="bg-purple-50 rounded-2xl p-6 mb-6">
            <h4 className="text-xl font-serif text-gray-900 mb-4 flex items-center gap-2">
              <span>➕</span>
              Optional Add-Ons (charged separately)
            </h4>
            <ul className="space-y-2">
              {selectedPackage.addOns.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-600 text-sm"
                >
                  <span className="text-purple-400 mr-2 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <Link
            to="/contact-us"
            className={`block w-full py-4 rounded-full font-semibold text-white text-center bg-linear-to-r ${selectedPackage.gradient} hover:shadow-xl transition-all duration-300 text-lg`}
          >
            Book This Package Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsPackagesDetails;
