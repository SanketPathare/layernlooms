"use client";

import { motion } from "framer-motion";

interface ContactCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}

export function ContactCard({ icon, label, value, href }: ContactCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm transition-all duration-300 group"
        >
            <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-50 text-zinc-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <div className="flex flex-col">
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mb-0.5">
                    {label}
                </p>
                {href ? (
                    <a
                        href={href}
                        className="text-sm font-semibold text-zinc-900 hover:text-black transition-colors"
                    >
                        {value}
                    </a>
                ) : (
                    <p className="text-sm font-semibold text-zinc-900">
                        {value}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export function StepsCard() {
    const steps = [
        { title: "Discovery", desc: "Fill out the form to start" },
        { title: "Review", desc: "We review & respond quickly" },
        { title: "Strategy", desc: "Alignment & kickoff call" },
        { title: "Execution", desc: "We build your vision" }
    ];

    return (
        <div className="rounded-3xl border border-zinc-200 p-8 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
                    How it works
                </p>
            </div>
            <div className="relative flex flex-col gap-8">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-zinc-100" />

                {steps.map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex items-start gap-4"
                    >
                        <div className="z-10 shrink-0 w-8 h-8 rounded-full bg-white border border-zinc-200 text-xs font-bold flex items-center justify-center text-zinc-400 shadow-sm">
                            {i + 1}
                        </div>
                        <div className="pt-0.5">
                            <h4 className="text-sm font-bold text-zinc-900 leading-tight">{step.title}</h4>
                            <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export function AvailabilityCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-900 bg-zinc-900 p-8 text-white shadow-xl overflow-hidden relative group"
        >

            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative flex h-2.5 w-2.5">
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
                        <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        Available now
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-3">Ready for takeoff</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                    We&apos;re currently onboarding new partners. Typical response time is <span className="text-white font-medium">under 24 hours</span>.
                </p>
            </div>
        </motion.div>
    );
}
