import { Link } from "lucide-react";
function CallToAction() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-linear-to-r from-purple-900 via-purple-800 to-rose-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
          Ready to Create Your
          <span className="block italic text-rose-300 mt-2">Dream Event?</span>
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Let's bring your vision to life! Whether it's an intimate gathering or
          a grand celebration, we're here to make every moment unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-purple-900 rounded-full font-semibold tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Book Your Package
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-purple-200">Contact us today</p>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-rose-300 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+61452195885"
                className="hover:text-rose-300 transition-colors"
              >
                Call Us
              </a>
            </a>
            <a
              href="https://instagram.com/lavierose"
              className="flex items-center gap-2 hover:text-rose-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <a
                href="https://www.instagram.com/lavie_rose_weddingsandevents/"
                className="hover:text-rose-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
