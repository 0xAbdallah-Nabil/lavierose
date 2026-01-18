import "./style.css";
import GetInTouch from "./GetInTouch";
import HeroSection from "./HeroSection";
import LuxuryVisionSection from "./LuxuryVisionSection";
import ServicesSection from "./Services";
import ReviewsSection from "./feedback";
function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <LuxuryVisionSection />
      <GetInTouch />
    </div>
  );
}

export default Home;
