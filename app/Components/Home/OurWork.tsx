"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const OurWork = [
    {
        title: "E-Commerce Platform",
        description: "High-performance shopping experience built with Next.js",
        tags: ["UI/UX", "Web Performance"],
        href: "#",
    },
    {
        title: "Mobile Banking App",
        description: "Secure financial management app with real-time updates",
        tags: ["Mobile", "iOS", "Android"],
        href: "#",
    },
    {
        title: "AI Chat Assistant",
        description: "Intelligent customer support powered by LLMs",
        tags: ["AI", "NLP", "Web"],
        href: "#",
    },
    {
        title: "SaaS Analytics",
        description: "Real-time analytics and insights platform",
        tags: ["SaaS", "Dashboard", "Data Viz"],
        href: "#",
    },
    {
        title: "Cloud Infrastructure",
        description: "Enterprise-grade cloud solution",
        tags: ["Backend", "DevOps", "Scalable"],
        href: "#",
    },
    {
        title: "Design System",
        description: "Comprehensive component library and design tokens",
        tags: ["UI Kit", "Components", "Documentation"],
        href: "#",
    },
];

export default function WorkShowcase() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Our Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-lg leading-8 text-gray-600"
                    >
                        A showcase of OurWork that demonstrate our commitment to excellence and innovation.
                    </motion.p>
                </div>

                {/* Project grid */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {OurWork.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                            className="flex flex-col items-start justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
                        >
                            <div className="w-full">
                                {/* Title & arrow */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {project.description}
                                </p>
   
                            </div>
                        </motion.article>
                    ))}
                </div>

              
            </div>
        </section>
    );
}