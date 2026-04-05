"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OurWork = [
  {
    title: "E-Commerce Platform",
    description: "High-performance shopping experience built with Next.js",
    tags: ["UI/UX", "Web Performance"],
    href: "/services/web-development",
    image: "/E-Commerce.png",
  },
  {
    title: "Mobile App Development",
    description: "Native & Cross-Platform Mobile Apps",
    tags: ["Mobile", "iOS", "Android"],
    href: "/services/mobile-app-development",
    image: "/Mobile.png",
  },
  {
    title: "AI & ML Solutions",
    description: "Intelligent Automation & Insights",
    tags: ["AI", "NLP", "Web"],
    href: "/services/ai-ml-solutions",
    image: "/AI.png",
  },
  {
    title: "SaaS Analytics",
    description: "Real-time analytics and insights platform",
    tags: ["SaaS", "Dashboard", "Data Viz"],
    href: "/services/saas-analytics",
    image: "/SaaS.png",
  },
  {
    title: "Cloud Infrastructure",
    description: "Enterprise-grade cloud solution",
    tags: ["Backend", "DevOps", "Scalable"],
    href: "/services/cloud-infrastructure",
    image: "/Cloud.png",
  },
  {
    title: "Design System",
    description: "Comprehensive component library and design tokens",
    tags: ["UI Kit", "Components", "Documentation"],
    href: "/services/digital-marketing",
    image: "/Design.png",
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-center mb-2">
            <h2 className="text-4xl sm:text-5xl font-science font-bold text-foreground">
              Our Services
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
              <Link href={project.href} key={project.title}>
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-lg"
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
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 flex-1 ">
                    {/* Title */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-6 text-gray-600 h-12 overflow-hidden ">
                      {project.description}
                    </p>

                    {/* Tags */}
                     <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> 

                    {/* View More Button */}
                    <div className="mt-2 pt-4 border-t border-gray-100">
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
                      >
                        <span>View More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
