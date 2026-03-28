"use client";

import { useTheme } from "../../theme/Themecontext";

import ContactForm from "../../Components/Contact/ContactForm";
import { ContactCard, StepsCard, AvailabilityCard } from "../../Components/Contact/ContactCard";

export default function ContactPage() {
    const { isDark } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-zinc-950" : "bg-zinc-50"}`}>
            <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-14 lg:py-20">

                {/* ── Page header ── */}
                <header className="mb-14 lg:mb-20">
                    <p className={`text-[10px] tracking-[0.35em] uppercase mb-5 transition-colors duration-300 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                        Contact
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                            Let&apos;s Build
                            <br />
                            <span className={`transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                                Something Amazing
                            </span>
                        </h1>
                        <p className={`text-sm max-w-xs leading-relaxed sm:text-right transition-colors duration-300 ${isDark ? "text-zinc-500" : "text-zinc-400"}`}>
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>
                    </div>
                </header>

                {/* ── Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14">

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 flex flex-col gap-5">

                        {/* Contact info card */}
                        <div className={`rounded-2xl border p-6 flex flex-col gap-5 transition-colors duration-300 ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"}`}>
                            <ContactCard
                                icon={
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
                                    </svg>
                                }
                                label="Email"
                                value="layernlooms@gmail.com"
                                href="mailto:layernlooms@gmail.com"
                            />
                            <div className={`h-px transition-colors duration-300 ${isDark ? "bg-zinc-800" : "bg-zinc-100"}`} />
                            <ContactCard
                                icon={
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                }
                                label="Location"
                                value="India, Maharashtra — Pune"
                            />
                        </div>

                        <AvailabilityCard />

                        <div className="hidden lg:block">
                            <StepsCard />
                        </div>
                    </aside>

                    {/* Form */}
                    <section className="lg:col-span-2">
                        <ContactForm />
                    </section>
                </div>

                {/* ── Footer ── */}
                <footer className={`mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-2 transition-colors duration-300 ${isDark ? "border-zinc-900" : "border-zinc-200"}`}>
                    <p className={`text-xs tracking-widest uppercase transition-colors duration-300 ${isDark ? "text-zinc-700" : "text-zinc-400"}`}>
                        Layern Looms © 2025
                    </p>
                    <p className={`text-xs transition-colors duration-300 ${isDark ? "text-zinc-700" : "text-zinc-400"}`}>
                        India, Maharashtra — Pune
                    </p>
                </footer>
            </main>
        </div>
    );
}