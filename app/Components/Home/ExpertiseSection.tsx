"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Shield, Smartphone, Database } from "lucide-react";

const expertiseAreas = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Scalable, performant web applications using modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    description: "Intelligent systems powered by machine learning and artificial intelligence.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Robust cloud architecture and infrastructure management at scale.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "End-to-end data pipelines, warehousing, and analytics solutions.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits, compliance, and threat protection.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-textMuted max-w-2xl mx-auto">
            We bring deep technical expertise across a wide range of domains to deliver impactful solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl dark:hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-textMuted leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
