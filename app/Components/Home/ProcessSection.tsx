"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, RefreshCw, Settings } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const themeColors = {
  zinc: "#a1a1aa",
  purple: "#a78bfa",
  green: "#34d399",
  cyan: "#22d3ee",
  amber: "#fb923c",
  pink: "#f472b6",
};

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your requirements, goals, and target audience to define the project scope.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our team creates intuitive UI/UX designs and architecture blueprints.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Agile development with regular sprints and transparent progress tracking.",
  },
  {
    icon: RefreshCw,
    title: "Testing",
    description: "Comprehensive quality assurance including automated and manual testing.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Smooth deployment with CI/CD pipelines and zero-downtime strategies.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Ongoing support, monitoring, and continuous improvement post-launch.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ProcessSection() {
  const { pointerTheme } = useTheme();
  const activeColor = themeColors[pointerTheme] || "#a1a1aa";

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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our{" "}
            <span
              className="bg-clip-text text-transparent transition-all duration-500 font-extrabold"
              style={{
                backgroundImage: `linear-gradient(to right, ${activeColor}, ${activeColor}bb)`,
              }}
            >
              Process
            </span>
          </h2>
          <p className="mt-4 text-lg text-textMuted max-w-2xl mx-auto">
            A structured, transparent approach that takes your project from concept to launch.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border hidden lg:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative lg:flex lg:items-start lg:gap-8"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card z-10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="mt-4 lg:mt-0 lg:pt-2">
                  <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-textMuted max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
