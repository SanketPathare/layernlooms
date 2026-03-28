"use client";

import { useState } from "react";

const projectTypes = [
    "Web Design",
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Branding",
    "E-Commerce",
    "Consulting",
    "Other",
];

const budgetRanges = [
    "Under $1,000",
    "$1,000 – $5,000",
    "$5,000 – $15,000",
    "$15,000 – $50,000",
    "$50,000+",
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!form.name || !form.email || !form.message) return;
        setSubmitted(true);
    };

    const inputBase =
        "w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-5 py-4 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-gray-500 transition-colors duration-200";

    return (
        <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* ── LEFT ── */}
                <div className="flex flex-col justify-between h-full gap-12">
                    <div>
                        <h1
                            className="text-5xl md:text-6xl font-black leading-tight mb-6"
                           
                        >
                            Let's Build Something <br /> Amazing
                        </h1>
                        <p className="text-gray-400 text-base leading-relaxed max-w-md">
                            Have a project in mind? We'd love to hear about it. Fill out the form
                            and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</p>
                            <a
                                href="mailto:layernlooms@gmail.com"
                                className="text-white font-bold text-base hover:text-gray-300 transition-colors"
                            >
                                layernlooms@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Location</p>
                            <p className="text-white font-bold text-base">India, Maharashtra-Pune</p>
                        </div>
                    </div>

                    {/* decorative dots */}
                    {/* <div className="hidden lg:grid grid-cols-6 gap-3 mt-4">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2e2e2e]" />
                        ))}
                    </div> */}
                </div>

                {/* ── RIGHT — FORM ── */}
                <div className="flex flex-col gap-4">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center h-full gap-6 py-24 text-center">
                            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M5 14.5L11 20.5L23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-black">
                                Message Sent!
                            </h2>
                            <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", projectType: "", budget: "", message: "" }); }}
                                className="mt-4 text-xs text-gray-500 underline underline-offset-4 hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className={inputBase}
                            />
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className={inputBase}
                            />
                            <input
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Company"
                                className={inputBase}
                            />

                            <select
                                name="projectType"
                                value={form.projectType}
                                onChange={handleChange}
                                className={`${inputBase} appearance-none cursor-pointer ${form.projectType === "" ? "text-gray-500" : "text-white"}`}
                            >
                                <option value="" disabled hidden>Select Project Type</option>
                                {projectTypes.map((t) => (
                                    <option key={t} value={t} className="bg-[#1a1a1a] text-white">{t}</option>
                                ))}
                            </select>

                            <select
                                name="budget"
                                value={form.budget}
                                onChange={handleChange}
                                className={`${inputBase} appearance-none cursor-pointer ${form.budget === "" ? "text-gray-500" : "text-white"}`}
                            >
                                <option value="" disabled hidden>Budget Range</option>
                                {budgetRanges.map((b) => (
                                    <option key={b} value={b} className="bg-[#1a1a1a] text-white">{b}</option>
                                ))}
                            </select>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project"
                                rows={5}
                                className={`${inputBase} resize-none`}
                            />

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-white text-black font-bold text-sm py-4 rounded-xl hover:bg-gray-100 active:scale-[0.99] transition-all duration-200 mt-1 tracking-wide"
                            >
                                Send Message
                            </button>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}