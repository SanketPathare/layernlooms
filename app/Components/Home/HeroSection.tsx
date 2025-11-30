import Link from "next/link";
import { FaInfinity, FaArrowRight, FaEye } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Infinity Symbol Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Large Infinity Symbol */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaInfinity className="text-gray-300 text-[400px] sm:text-[500px] lg:text-[600px] xl:text-[700px] animate-pulse" />
        </div>
        
      
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
          Weaving Digital Experiences with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Precision, Depth & AI
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-textColor mb-12 max-w-3xl mx-auto leading-relaxed">
          Web • Mobile • AI • Custom Software — Built exclusively for brands
          that want excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/start-project"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
          >
            Start Your Project    
         </Link>
          <Link
            href="/our-work"
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
          >
            Explore Our Work
          </Link>
        </div>

      </div>

  
    </section>
  );
}