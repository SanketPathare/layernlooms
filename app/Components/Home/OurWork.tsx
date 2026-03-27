"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const OurWork = [
  {
    title: "E-Commerce Platform",
    description: "High-performance shopping experience built with Next.js",
    tags: ["UI/UX", "Web Performance"],
    href: "#",
    image: "/E-Commerce.png",
  },
  {
    title: "Mobile Banking App",
    description: "Secure financial management app with real-time updates",
    tags: ["Mobile", "iOS", "Android"],
    href: "#",
    image: "/Mobile.png",
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent customer support powered by LLMs",
    tags: ["AI", "NLP", "Web"],
    href: "#",
    image: "/AI.png",
  },
  {
    title: "SaaS Analytics",
    description: "Real-time analytics and insights platform",
    tags: ["SaaS", "Dashboard", "Data Viz"],
    href: "#",
    image: "/SaaS.png",
  },
  {
    title: "Cloud Infrastructure",
    description: "Enterprise-grade cloud solution",
    tags: ["Backend", "DevOps", "Scalable"],
    href: "#",
    image: "/Cloud.png",
  },
  {
    title: "Design System",
    description: "Comprehensive component library and design tokens",
    tags: ["UI Kit", "Components", "Documentation"],
    href: "#",
    image: "/Design.png",
  },
];

export default function WorkShowcase() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-science font-bold text-foreground">
              Our Work
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A showcase of our projects that demonstrate our commitment to
            excellence and innovation.
          </p>
        </div>

        {/* Project grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {OurWork.map((project, index) => {
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -8 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fit"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6">
                  {/* Title & arrow */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900  transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
