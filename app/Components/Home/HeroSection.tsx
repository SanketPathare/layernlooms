import Link from "next/link";
import { FaInfinity, FaArrowRight, FaEye } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Infinity Symbol Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Large Infinity Symbol */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaInfinity className="text-secondary/20 dark:text-secondary/10 text-[400px] sm:text-[500px] lg:text-[600px] xl:text-[700px] animate-pulse" />
        </div>


        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
          Weaving Digital Experiences with{" "}
      
            Precision, Depth & AI
             </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-textMuted mb-12 max-w-3xl mx-auto leading-relaxed">
          Web • Mobile • AI • Custom Software — Built exclusively for brands
          that want excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/start-project"
            className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center flex items-center justify-center gap-2 group text-sm sm:text-base"
          >
            Start Your Project
          </Link>
          <Link
            href="/our-work"
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-background transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 group text-sm sm:text-base"
          >
            Explore Our Work
          </Link>
        </div>

      </div>


    </section>
  );
}
