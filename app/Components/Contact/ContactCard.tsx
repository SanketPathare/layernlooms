"use client";

import { useTheme } from "../../theme/Themecontext";


interface ContactCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}

export function ContactCard({ icon, label, value, href }: ContactCardProps) {
    const { isDark } = useTheme();

    return (
        <div className="flex items-start gap-3">
            <span
                className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${isDark ? "bg-zinc-800 text-zinc-400" : "bg-zinc-100 text-zinc-500"
                    }`}
            >
                {icon}
            </span>
            <div>
                <p
                    className={`text-[10px] tracking-[0.25em] uppercase mb-0.5 transition-colors duration-300 ${isDark ? "text-zinc-600" : "text-zinc-400"
                        }`}
                >
                    {label}
                </p>
                {href ? (
                    <a
                        href={href}
                        className={`text-sm font-medium transition-colors duration-200 ${isDark
                                ? "text-zinc-300 hover:text-white"
                                : "text-zinc-600 hover:text-black"
                            }`}
                    >
                        {value}
                    </a>
                ) : (
                    <p
                        className={`text-sm font-medium transition-colors duration-300 ${isDark ? "text-zinc-300" : "text-zinc-600"
                            }`}
                    >
                        {value}
                    </p>
                )}
            </div>
        </div>
    );
}

export function StepsCard() {
    const { isDark } = useTheme();
    const steps = ["Fill out the form", "We review & respond", "Kickoff call", "We start building"];

    return (
        <div
            className={`rounded-2xl border p-6 transition-colors duration-300 ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                }`}
        >
            <p
                className={`text-[10px] tracking-[0.3em] uppercase mb-5 transition-colors duration-300 ${isDark ? "text-zinc-600" : "text-zinc-400"
                    }`}
            >
                How it works
            </p>
            <ol className="flex flex-col gap-4">
                {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full border text-[10px] font-bold flex items-center justify-center transition-colors duration-300 ${isDark ? "border-zinc-700 text-zinc-600" : "border-zinc-300 text-zinc-400"
                                }`}
                        >
                            {i + 1}
                        </span>
                        <span
                            className={`text-sm pt-0.5 transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-zinc-500"
                                }`}
                        >
                            {step}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export function AvailabilityCard() {
    const { isDark } = useTheme();

    return (
        <div
            className={`rounded-2xl border p-6 transition-colors duration-300 ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                }`}
        >
            <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2 w-2">
                    <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${isDark ? "bg-zinc-400" : "bg-zinc-500"
                            }`}
                    />
                    <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? "bg-zinc-300" : "bg-zinc-600"
                            }`}
                    />
                </span>
                <span
                    className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${isDark ? "text-zinc-500" : "text-zinc-400"
                        }`}
                >
                    Available now
                </span>
            </div>
            <p
                className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-zinc-500"
                    }`}
            >
                We&apos;re actively taking on new projects. Typical response time under 24 hours.
            </p>
        </div>
    );
}