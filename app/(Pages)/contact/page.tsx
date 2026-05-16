"use client";

import { motion } from "framer-motion";
import ContactForm from "../../Components/Contact/ContactForm";
import { ContactCard, StepsCard, AvailabilityCard } from "../../Components/Contact/ContactCard";
import { Linkedin, Facebook, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/layernlooms", color: "hover:text-[#0077b5]" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/layernlooms", color: "hover:text-[#1877f2]" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-[#1da1f2]" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-[#e4405f]" },
];

export default function ContactPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="min-h-screen bg-background selection:bg-primary selection:text-background overflow-hidden">
            {/* ── Premium Background ── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-60" />
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-secondary/50 rounded-full blur-[100px] opacity-40" />
                <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-50" />
                
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
                >
                    {/* ── Left Column: Content & Info ── */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-border backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-textMuted">Available for 2024 projects</span>
                            </motion.div>

                            <motion.h1 
                                variants={itemVariants}
                                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.85]"
                            >
                                Let&apos;s talk <br />
                                <span className="text-textMuted/30">Strategy</span>
                            </motion.h1>

                            <motion.p 
                                variants={itemVariants}
                                className="text-xl text-textMuted max-w-md leading-relaxed"
                            >
                                Have a vision? We have the engineering expertise to bring it to life. Reach out and let&apos;s build something remarkable.
                            </motion.p>
                        </div>

                        {/* Contact Methods */}
                        <motion.div variants={itemVariants} className="">
                            <div className="relative p-8 rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary rounded-full blur-3xl -mr-12 -mt-12 opacity-50" />
                                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-textMuted mb-6">Email Us</p>
                                <Link href="mailto:layernlooms@gmail.com" className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors break-all leading-tight text-foreground">
                                    layernlooms@gmail.com
                                    <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </div>
                            
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-textMuted">Social Connect</p>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social) => (
                                    <Link 
                                        key={social.name} 
                                        href={social.href}
                                        className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 group ${social.color}`}
                                    >
                                        <social.icon className="w-5 h-5 transition-transform group-hover:scale-110 text-foreground" />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Steps Card Placeholder/Refined */}
                        <motion.div variants={itemVariants}>
                            <StepsCard />
                        </motion.div>
                    </div>

                    {/* ── Right Column: Form ── */}
                    <motion.div 
                        variants={itemVariants}
                        className="lg:col-span-7"
                    >
                        <div className="relative group">
                            {/* Decorative elements behind form */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <div className="relative">
                                <ContactForm />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Quote / Branding */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-32 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <p className="text-textMuted text-sm italic">
                        &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-px bg-border" />
                        <span className="text-lg font-bold tracking-tighter italic text-foreground">LayerNLooms</span>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}

