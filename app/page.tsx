
import HeroSection from "./Components/Home/HeroSection";
import OurWork from "./Components/Home/OurServices";
import WhyChooseUs from "./Components/Home/WhyChooseUs";
import ProcessSection from "./Components/Home/ProcessSection";
;
import EngagementModels from "./Components/Home/EngagementModels";
import ExpertiseSection from "./Components/Home/ExpertiseItems";
import OurServices from "./Components/Home/OurServices";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <ExpertiseSection/>
    <WhyChooseUs/>
    <OurServices/>
      <ProcessSection />
      <EngagementModels/>


    </div>
  );
}
