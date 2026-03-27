"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "../../data/services";
import ServiceCard from "../../Components/services/ServiceCard";

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,white)]" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Our Services
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Comprehensive solutions to transform your business and drive digital innovation
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to start your project?
                        </h2>
                        <p className="mt-4 text-lg text-blue-100">
                            Let's discuss how we can help you achieve your goals
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-x-6">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                            >
                                Contact Us Today
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-base font-semibold text-white hover:text-blue-100 transition-colors"
                            >
                                View Our Work <ArrowRight className="inline-block ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}