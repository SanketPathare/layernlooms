"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Zap, ShieldCheck } from "lucide-react";

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
            className="flex items-center gap-5 p-5 rounded-[2rem] border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-500 group"
        >
            <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-50 text-zinc-400 group-hover:bg-black group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {icon}
            </div>
            <div className="flex flex-col">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-1">
                    {label}
                </p>
                {href ? (
                    <a
                        href={href}
                        className="text-base font-semibold text-zinc-900 hover:text-black transition-colors"
                    >
                        {value}
                    </a>
                ) : (
                    <p className="text-base font-semibold text-zinc-900">
                        {value}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export function StepsCard() {
    const steps = [
        { title: "Briefing", desc: "Share your mission & goals", icon: MessageCircle },
        { title: "Analysis", desc: "We map out the technical path", icon: ShieldCheck },
        { title: "Kickoff", desc: "Alignment & strategic deep-dive", icon: Zap },
        { title: "Build", desc: "Excellence in every line of code", icon: CheckCircle2 }
    ];

    return (
        <div className="rounded-[2.5rem] border border-zinc-100 p-10 bg-white/50 backdrop-blur-md shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-px bg-zinc-200" />
                <p className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400">
                    The Process
                </p>
            </div>
            
            <div className="relative space-y-10">
                {/* Connecting Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-zinc-100" />

                {steps.map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex items-start gap-6 group/item"
                    >
                        <div className="z-10 shrink-0 w-10 h-10 rounded-2xl bg-white border border-zinc-100 text-zinc-400 flex items-center justify-center shadow-sm group-hover/item:border-black group-hover/item:text-black transition-all duration-300">
                            <step.icon className="w-5 h-5" />
                        </div>
                        <div className="pt-1.5">
                            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">{step.title}</h4>
                            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{step.desc}</p>
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
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-black p-10 text-white shadow-2xl shadow-black/20 overflow-hidden relative group"
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-800 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            
            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                        Operational Status
                    </span>
                </div>
                
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight">Accepting New Partners</h3>
                    <p className="text-sm leading-relaxed text-zinc-400 max-w-[240px]">
                        We have capacity for <span className="text-white font-bold underline underline-offset-4 decoration-zinc-700">2 more</span> high-impact projects this quarter.
                    </p>
                </div>

                <div className="pt-4 flex items-center gap-2">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                                {String.fromCharCode(64 + i)}
                            </div>
                        ))}
                    </div>
                    <p className="text-[10px] text-zinc-500 font-bold ml-2 uppercase tracking-widest">Active Engineers</p>
                </div>
            </div>
        </motion.div>
    );
}

