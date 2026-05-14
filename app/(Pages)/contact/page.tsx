"use client";

import { motion } from "framer-motion";
import ContactForm from "../../Components/Contact/ContactForm";
import { ContactCard, StepsCard, AvailabilityCard } from "../../Components/Contact/ContactCard";

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-white selection:bg-black selection:text-white">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-50 rounded-full blur-3xl opacity-30" />
            </div>

            <main className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 ">

                {/* ── Page Header ── */}
                <motion.header 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mb-20 lg:mb-32"
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-zinc-200" />
                        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400">
                            Available for new projects
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <motion.h1 
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-black"
                        >
                            Let&apos;s Build <br />
                            <span className="text-zinc-300 ">Excellence</span>
                        </motion.h1>
                        
                        <motion.div variants={itemVariants} className="max-w-md lg:ml-auto">
                            <p className="text-lg  text-zinc-500 leading-relaxed">
                                We combine precision engineering with visionary design to build digital products that move the world.
                            </p>
                        </motion.div>
                    </div>
                </motion.header>

                {/* ── Main Content Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Sidebar: Info & Status */}
                    <motion.aside 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1"
                    >
                        {/* Status Card */}
                        <AvailabilityCard />

                        {/* Contact Info Group */}
                        <div className="flex flex-col gap-4">
                            <ContactCard
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
                                    </svg>
                                }
                                label="Inquiries"
                                value="layernlooms@gmail.com"
                                href="mailto:layernlooms@gmail.com"
                            />
                            
                            <ContactCard
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                }
                                label="Studio"
                                value="Pune, India"
                            />
                        </div>

                        {/* Process Steps */}
                        <StepsCard />
                    </motion.aside>

                    {/* Main Form Area */}
                    <motion.section 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:col-span-8 order-1 lg:order-2"
                    >
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-2">Project Brief</h2>
                            <p className="text-zinc-500">Tell us about your mission and we&apos;ll help you get there.</p>
                        </div>
                        <ContactForm />
                    </motion.section>
                </div>

            </main>
        </div>
    );
}
