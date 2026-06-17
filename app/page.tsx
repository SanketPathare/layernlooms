"use client";
import HeroSection from "./Components/Home/HeroSection";
import WhyChooseUs from "./Components/Home/WhyChooseUs";
import ProcessSection from "./Components/Home/ProcessSection";
import EngagementModels from "./Components/Home/EngagementModels";
import ExpertiseSection from "./Components/Home/ExpertiseSection";
import OurServices from "./Components/Home/OurServices";
import TechStackSection from "./Components/Home/TechStackSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <ProcessSection />
      <TechStackSection />
      {/* <EngagementModels /> */}
    </div>
  );
}
