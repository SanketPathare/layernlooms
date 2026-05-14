"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { projects } from "../../data/portfolio";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.1 });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-4 text-center px-6 transition-colors duration-300 bg-white"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4 transition-colors duration-300 text-black">
            Our Portfolio
          </h1>
          <motion.div
            className="mx-auto w-20 h-1 rounded-full mb-6 transition-colors duration-300 bg-black"
            initial={{ width: 0 }}
            animate={isHeroInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-lg max-w-xl mx-auto transition-colors duration-300 text-gray-600 mb-12">
            Explore our latest projects where design meets engineering excellence.
            We build digital products that drive results.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white shadow-lg"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section
        ref={projectsRef}
        className="py-24 transition-colors duration-300 bg-white px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial="hidden"
            animate={isProjectsInView ? "visible" : "hidden"}
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
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 border border-zinc-200 shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <Link 
                        href={`/portfolio/${project.slug}`}
                        className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                       >
                         View Case Study
                         <ArrowRight className="w-4 h-4" />
                       </Link>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-black">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                      <span className="text-xs font-medium text-zinc-400">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 transition-colors duration-300 bg-black text-white rounded-3xl mx-6 mb-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to build something iconic?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-300 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let&apos;s collaborate to turn your vision into a digital reality.
              Our team is ready to scale your ideas.
            </motion.p>
            <motion.div
              className="mt-8 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block rounded-full px-8 py-3 text-sm font-semibold shadow-sm transition-all duration-300 bg-white text-black hover:bg-gray-100"
                >
                  Contact Us Today
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block text-sm font-semibold border-2 rounded-full px-6 py-3 transition-all duration-300 text-white border-white hover:bg-white hover:text-black"
                >
                  Start a Project <ArrowRight className="inline-block ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
