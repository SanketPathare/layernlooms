"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Service } from "../../data/services";

interface ServiceCardProps {
    service: Service;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <Link href={`/services/${service.slug}`} className="w-full">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl"
            
        >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900  transition-colors">
                        {service.title}
                    </h3>
                </div>

                <p className="mt-2 text-sm text-gray-700 font-medium">
                    {service.subtitle}
                </p>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {service.description}
                </p>

                {/* Features Preview */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature) => (
                        <span
                            key={feature}
                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                        >
                            {feature}
                        </span>
                    ))}
                    {service.features.length > 2 && (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                            +{service.features.length - 2} more
                        </span>
                    )}
                </div>

                {/* Link */}
                <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-gray-600 hover:text-gray-700 transition-colors group/link"
                >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
            </div>
        </motion.div>
        </Link>

    );
}