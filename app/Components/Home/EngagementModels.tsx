"use client";

import { useEffect, useRef, useState } from "react";

const models = [
  {
    title: "Fixed Project",
    description: "Ideal for well-defined projects with clear scope",
    features: [
      "Custom scope",
      "Fixed timeline",
      "Predictable cost",
      "Full deliverables",
    ],
    featured: false,
  },
  {
    title: "Monthly Retainer",
    description: "Perfect for ongoing development and support",
    features: [
      "Dedicated team",
      "Flexible scope",
      "Priority support",
      "Continuous improvement",
    ],
    featured: true,
  },
  {
    title: "Hourly Engagement",
    description: "Best for consultations and flexible work",
    features: [
      "Pay as you go",
      "Expert guidance",
      "Flexible hours",
      "Advisory support",
    ],
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M3 8.5L6.5 12L13 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EngagementModels() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-secondary py-20 px-6 my-10 rounded-3xl">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-14">
        <div className="text-center ">
          <h2 className="text-4xl sm:text-5xl font-science font-bold text-foreground">
                      Engagement Models

          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <p className="mt-4 text-lg leading-8 text-textMuted">
                  Choose the model that works best for your project needs.

        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {models.map((model, index) => {
          const delay = `${index * 120}ms`;
          const isFeatured = model.featured;

          return (
            <div
              key={model.title}
              className={`
                rounded-xl p-8 transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${
                  isFeatured
                    ? "bg-primary text-background scale-105 shadow-2xl z-10"
                    : "bg-card text-foreground shadow-sm hover:shadow-md border border-border"
                }
              `}
              style={{ transitionDelay: delay }}
            >
              {/* Title */}
              <h3
                className={`text-2xl font-black mb-2 ${isFeatured ? "text-background" : "text-foreground"}`}
              >
                {model.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  isFeatured ? "opacity-80" : "text-textMuted"
                }`}
              >
                {model.description}
              </p>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${isFeatured ? "bg-background/20" : "bg-border"}`}
              />

              {/* Features */}
              <ul className="space-y-3">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={isFeatured ? "text-background" : "text-primary"}>
                      <CheckIcon />
                    </div>
                    <span
                      className={`text-sm leading-snug ${
                        isFeatured
                          ? "text-background font-semibold"
                          : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
