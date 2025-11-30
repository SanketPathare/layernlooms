// components/WhyChooseUs.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    "100% Custom & Scalable Solutions",
    "End-to-End Development",
    "World-Class UI/UX Expertise",
    "Fast Delivery with Quality",
    "AI-Driven Enhancements",
    "Transparent Process & Project Tracking",
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold  leading-tight">
                Why Choose <span className="text-primary">LayerNLooms</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                We blend technical excellence with creative vision to deliver
                solutions that not only work but inspire.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <CheckCircle className="w-7 h-7 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium group-hover:text-gray-900">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Card */}
          <div className="order-1 lg:order-2 relative ">
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-neutral-500">
              {/* Main Dark Card */}
              <div className=" bg-gradient-to-br from-neutral-600 via-neutral-950 to-neutral-600 p-16 md:p-24 lg:p-32 aspect-video ">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-white/80 text-sm md:text-lg tracking-widest font-light">
                    &lt; Excellence in Every Layer /&gt;
                  </p>
                </div>
              </div>

              {/* Optional: Add subtle overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
