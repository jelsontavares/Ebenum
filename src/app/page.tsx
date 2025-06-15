import HeroSection from "./components/HeroSection/HeroSection";
import Sensation from "./components/Sensation/Sensation";
import Services from "./components/Services/Services";
import Carousel from "./components/Carousel/Carousel";
import BrandExperienceSection from "./components/BrandExperienceSection/BrandExperienceSection";

export default function Home() {
  return (
    <div>
      <main>
        < HeroSection />
        <Sensation />
        <Carousel />
        <BrandExperienceSection />
         <Services />
      </main>
      
    </div>
  );
}
