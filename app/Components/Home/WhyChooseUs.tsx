"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, HeadphonesIcon, Lightbulb, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience delivering complex projects across industries.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge technologies and creative problem-solving at every step.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Skilled professionals committed to your project's success.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable project management ensuring timely results.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous testing and code reviews for enterprise-grade quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance for uninterrupted operations.",
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

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-textMuted max-w-2xl mx-auto">
            We combine technical excellence with a client-first approach to deliver results that matter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm text-textMuted leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
