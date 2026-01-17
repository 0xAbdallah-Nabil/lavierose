import "./style.css";
import video from "../../assets/videos/hero-video.mp4";

function HeroSection() {
  return (
    <main className="relative flex justify-center items-center h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <h1 className=" text-center w-full px-4 text-base sm:text-2xl md:text-3xl font-bold text-white z-10">
        La Vie Rose — where moments bloom into memories.
      </h1>
    </main>
  );
}

export default HeroSection;
