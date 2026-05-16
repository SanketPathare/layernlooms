"use client";
import HeroSection from "./Components/Home/HeroSection";
import WhyChooseUs from "./Components/Home/WhyChooseUs";
import ProcessSection from "./Components/Home/ProcessSection";
import EngagementModels from "./Components/Home/EngagementModels";
import ExpertiseSection from "./Components/Home/ExpertiseSection";
import OurServices from "./Components/Home/OurServices";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExpertiseSection />
      <WhyChooseUs />
      <OurServices />
      <ProcessSection />
      {/* <EngagementModels /> */}
    </div>
  );
}
