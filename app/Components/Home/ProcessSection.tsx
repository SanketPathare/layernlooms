"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
    {
        number: "01",
        title: "Research & Strategy",
        description: "Deep dive into your needs and market landscape",
    },
    {
        number: "02",
        title: "Wireframes",
        description: "Structural planning and user flow mapping",
    },
    {
        number: "03",
        title: "Design",
        description: "High-fidelity UI with pixel-perfect precision",
    },
    {
        number: "04",
        title: "Development",
        description: "Clean, scalable code built for the future",
    },
    {
        number: "05",
        title: "Testing",
        description: "Rigorous QA to ensure flawless performance",
    },
    {
        number: "06",
        title: "Launch & Support",
        description: "Deployment and ongoing optimization",
    },
];

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white py-20 px-6 "
           
        >
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center mb-14">
                <div className="text-center mb-2">
                    <h2 className="text-4xl sm:text-5xl  font-science font-bold text-foreground">
                        Our Process

                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    Proven methodology that ensures excellence at every stage.

                </p>
            </div>

            {/* Steps */}
            <div className="relative max-w-7xl mx-auto">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-[38px] left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-black z-0" />

                <div className="grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-4 relative z-10">
                    {steps.map((step, index) => {
                        const delay = `${index * 100}ms`;
                        const isActive = activeStep === index;

                        return (
                            <div
                                key={step.number}
                                className={`flex flex-col items-center text-center cursor-pointer group transition-all duration-700 ${visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: delay }}
                                onMouseEnter={() => setActiveStep(index)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                {/* Circle */}
                                <div
                                    className={`w-[76px] h-[76px] rounded-full flex items-center justify-center text-white font-black text-lg mb-4 transition-all duration-300 ${isActive
                                            ? "bg-black scale-110 shadow-2xl"
                                            : "bg-black hover:scale-105"
                                        }`}
                                    
                                >
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3
                                    className={`font-semibold text-sm lg:text-base leading-snug mb-2 transition-colors duration-200 ${isActive ? "text-black" : "text-black"
                                        }`}
                                    
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`text-xs text-gray-500 leading-relaxed transition-all duration-300 max-w-fit ${isActive ? "text-gray-700" : ""
                                        }`}
                                >
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}