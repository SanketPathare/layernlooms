"use client";
import HeroSection from "./components/Home/HeroSection";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import ProcessSection from "./components/Home/ProcessSection";
import EngagementModels from "./components/Home/EngagementModels";
import ExpertiseSection from "./components/Home/ExpertiseItems";
import OurServices from "./components/Home/OurServices";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExpertiseSection />
      <WhyChooseUs />
      <OurServices />
      <ProcessSection />
      <EngagementModels />
    </div>
  );
}
