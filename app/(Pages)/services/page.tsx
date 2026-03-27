"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import ServiceCard from "../../Components/services/ServiceCard";

export default function ServicesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-4 text-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <h1 className="text-6xl md:text-7xl font-black text-black tracking-tight leading-none mb-4">
            Our Services
          </h1>
          <motion.div
            className="mx-auto w-20 h-1 bg-black rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isHeroInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Comprehensive solutions to transform your business and drive
            digital innovation.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-gradient-to-r from-gray-900 to-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to start your project?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's discuss how we can help you achieve your goals
            </motion.p>
            <motion.div
              className="mt-8 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all duration-300"
                >
                  Contact Us Today
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-block text-base font-semibold text-white transition-colors border-gray-100 border-2 rounded-full px-6 py-3 hover:bg-gray-50/10 hover:border-amber-100"
                >
                  View Our Work{" "}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    <ArrowRight className="inline-block ml-1 w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}