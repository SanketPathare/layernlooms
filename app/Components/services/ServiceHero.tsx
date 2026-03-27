"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Service } from "@/app/data/services";

interface ServiceHeroProps {
    service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,white)]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
                            Our Service
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            {service.title}
                        </h1>
                        <p className="mt-4 text-xl text-blue-600 font-medium">
                            {service.subtitle}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {service.longDescription}
                        </p>
                        <div className="mt-8 flex items-center gap-x-4">
                            <a
                                href="#contact"
                                className="rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                            >
                                Get Started
                            </a>
                            <a
                                href="#features"
                                className="rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}