"use client";
import HeroSection from "./Components/Home/HeroSection";
import WhyChooseUs from "./Components/Home/WhyChooseUs";
import PartnershipsSection from "./Components/Home/PartnershipsSection";
import FAQSection from "./Components/Home/FAQSection";
import ProcessSection from "./Components/Home/ProcessSection";
import EngagementModels from "./Components/Home/EngagementModels";
import ExpertiseSection from "./Components/Home/ExpertiseSection";
import OurServices from "./Components/Home/OurServices";
import TechStackSection from "./Components/Home/TechStackSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <div className="rounded-2xl border border-neutral-300 dark:border-white/[0.06] overflow-hidden">
        <WhyChooseUs />
      </div>
      <div className="rounded-2xl border border-neutral-300 dark:border-white/[0.06] overflow-hidden">
        <OurServices />
      </div>
      <div className="rounded-2xl border border-neutral-300 dark:border-white/[0.06] overflow-hidden">
        <ProcessSection />
      </div>
      <div className="rounded-2xl border border-neutral-300 dark:border-white/[0.06] overflow-hidden">
        <TechStackSection />
      </div>
      <div className="rounded-2xl border border-neutral-300 dark:border-white/[0.06] overflow-hidden">
        <PartnershipsSection />
      </div>
      <div className="rounded-2xl border border-neutral-300 dark:border-white/[0.06] overflow-hidden">
        <EngagementModels />
      </div>
      <div className="rounded-2xl border border-neutral-300 dark:border-white/[0.06] overflow-hidden">
        <FAQSection />
      </div>
    </div>
  );
}
