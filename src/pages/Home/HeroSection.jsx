import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const videoUrl =
  "https://res.cloudinary.com/dk1q6kpkk/video/upload/q_auto,f_auto/hero-video_uvkkim.mp4";

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative flex justify-center items-center h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Mute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Hero Text */}
      <div className="text-center px-4 z-10">
        <h1 className="text-base sm:text-2xl md:text-3xl font-bold text-white mb-8">
          La Vie Rose — where moments bloom into memories.
        </h1>

        {/* Scroll to Services Button */}
        <button
          onClick={scrollToServices}
          className="group px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <Link to="/services" className="font-light tracking-wide">
            Explore Our Services
          </Link>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator (Optional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </main>
  );
}

export default HeroSection;
