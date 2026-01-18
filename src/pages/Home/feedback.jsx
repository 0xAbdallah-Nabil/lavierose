import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding Celebration",
      rating: 5,
      text: "La Vie Rose transformed our wedding into an absolute fairytale. Every detail was perfect!",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80",
      date: "Dec 2025",
    },
    {
      id: 2,
      name: "Emma Thompson",
      event: "Corporate Gala",
      rating: 5,
      text: "Professional, creative, and absolutely phenomenal! They exceeded every expectation.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      date: "Nov 2025",
    },
    {
      id: 3,
      name: "David & Jessica",
      event: "Anniversary Party",
      rating: 5,
      text: "They understood our style perfectly and created an atmosphere that was both elegant and intimate.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      date: "Oct 2025",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const review = reviews[currentReview];

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
            <Sparkles className="w-5 h-5 text-rose-400 animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-rose-500 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif mb-2 bg-gradient-to-r from-white via-rose-200 to-white bg-clip-text text-transparent">
            Clients Feedback
          </h2>
          <p className="text-gray-400">Hear from those who trusted us</p>
        </div>

        {/* Main Review Card */}
        <div className="relative">
          {/* Decorative quote mark */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shadow-xl shadow-rose-500/50">
              <Quote className="w-7 h-7 text-white" />
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-gray-700/50 shadow-2xl">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-rose-400 text-rose-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg text-gray-200 text-center font-light leading-relaxed mb-8 italic">
              "{review.text}"
            </p>

            {/* Client Info */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose-500/50 shadow-lg shadow-rose-500/30">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif text-white">{review.name}</h3>
                <p className="text-rose-400 text-xs tracking-wide">
                  {review.event} • {review.date}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14">
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group shadow-lg"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentReview
                    ? "w-8 h-2 bg-gradient-to-r from-rose-500 to-purple-600"
                    : "w-2 h-2 bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default ReviewsSection;
