
import HeroSection from "./Components/Home/HeroSection";
import OurWork from "./Components/Home/OurWork";
import WhyChooseUs from "./Components/Home/WhyChooseUs";
import ProcessSection from "./Components/Home/ProcessSection";
;
import EngagementModels from "./Components/Home/EngagementModels";
import ExpertiseSection from "./Components/Home/ExpertiseItems";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <ExpertiseSection/>
    <WhyChooseUs/>
    <OurWork/>
      <ProcessSection />
      <EngagementModels/>


    </div>
  );
}
