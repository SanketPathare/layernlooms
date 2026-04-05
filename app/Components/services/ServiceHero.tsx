"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Service } from "@/app/data/services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface ServiceHeroProps {
    service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
    const router = useRouter();

    return (
        <section className="relative bg-gradient-to-t from-gray-50 via-white to-gray-100 py-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,white)]" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back</span>
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-950 mb-6">
                            Our Service
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            {service.title}
                        </h1>
                        <p className="mt-4 text-xl text-gray-900 font-medium">
                            {service.subtitle}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {service.longDescription}
                        </p>
                        <div className="mt-8 flex items-center gap-x-4">
                            <Link
                                href="/contact"
                                className="rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-950 transition-colors"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                            >
                                View All Services
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-xl">
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
