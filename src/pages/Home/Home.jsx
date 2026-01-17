import "./style.css";
import GetInTouch from "./GetInTouch";
import HeroSection from "../../components/HeroSection/HeroSection";
import LuxuryVisionSection from "./LuxuryVisionSection";
function Home() {
  return (
    <div>
      <HeroSection />
      <LuxuryVisionSection />
      <GetInTouch />
    </div>
  );
}

export default Home;
