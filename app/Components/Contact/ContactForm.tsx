"use client";

import { useState } from "react";
import { useTheme } from "../../theme/Themecontext";
import FloatInput from "./Floatinput";



const projectTypes = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Brand Identity",
    "E-Commerce",
    "SaaS Product",
    "Other",
];

export default function ContactForm() {
    const { isDark } = useTheme();
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
    });
    const [focused, setFocused] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3500);
    };

    return (
        <div
            className={`rounded-2xl border p-6 sm:p-8 flex flex-col gap-5 transition-colors duration-300 ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                }`}
        >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatInput label="Your Name" name="name" type="text" value={form.name} focused={focused} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                <FloatInput label="Email Address" name="email" type="email" value={form.email} focused={focused} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
            </div>

            {/* Company */}
            <FloatInput label="Company (optional)" name="company" type="text" value={form.company} focused={focused} onChange={handleChange} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />

            {/* Project Type + Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Select */}
                <div className="relative">
                    <label
                        htmlFor="projectType"
                        className={`absolute left-4 transition-all duration-150 pointer-events-none z-10 ${focused === "projectType" || form.projectType
                                ? `top-2.5 text-[10px] tracking-widest uppercase font-semibold ${isDark ? "text-white" : "text-black"}`
                                : `top-1/2 -translate-y-1/2 text-sm ${isDark ? "text-zinc-500" : "text-zinc-400"}`
                            }`}
                    >
                        Project Type
                    </label>
                    <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocused("projectType")}
                        onBlur={() => setFocused(null)}
                        className={`w-full border rounded-xl px-4 pt-6 pb-3 text-sm appearance-none cursor-pointer outline-none transition-all duration-150 ${isDark
                                ? `bg-zinc-800 text-white ${focused === "projectType" ? "border-white" : "border-zinc-700 hover:border-zinc-500"}`
                                : `bg-zinc-100 text-black ${focused === "projectType" ? "border-black" : "border-zinc-200 hover:border-zinc-400"}`
                            }`}
                    >
                        <option value="" disabled hidden />
                        {projectTypes.map((p) => (
                            <option key={p} value={p} className={isDark ? "bg-zinc-800" : "bg-white"}>
                                {p}
                            </option>
                        ))}
                    </select>
                    <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDark ? "text-zinc-500" : "text-zinc-400"}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {/* Budget */}
                <FloatInput label="Budget (e.g. $5k–$10k)" name="budget" type="text" value={form.budget} focused={focused} onChange={handleChange} onFocus={() => setFocused("budget")} onBlur={() => setFocused(null)} />
            </div>

            {/* Message */}
            <div className="relative">
                <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-150 pointer-events-none ${focused === "message" || form.message
                            ? `top-2.5 text-[10px] tracking-widest uppercase font-semibold ${isDark ? "text-white" : "text-black"}`
                            : `top-4 text-sm ${isDark ? "text-zinc-500" : "text-zinc-400"}`
                        }`}
                >
                    Tell us about your project
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`w-full border rounded-xl px-4 pt-8 pb-3 text-sm resize-none outline-none transition-all duration-150 ${isDark
                            ? `bg-zinc-800 text-white ${focused === "message" ? "border-white" : "border-zinc-700 hover:border-zinc-500"}`
                            : `bg-zinc-100 text-black ${focused === "message" ? "border-black" : "border-zinc-200 hover:border-zinc-400"}`
                        }`}
                />
            </div>

            {/* Submit */}
            <button
                onClick={handleSubmit}
                disabled={submitted}
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 active:scale-[0.98] ${submitted
                        ? isDark
                            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                            : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                        : isDark
                            ? "bg-white text-black hover:bg-zinc-200"
                            : "bg-black text-white hover:bg-zinc-800"
                    }`}
            >
                {submitted ? "✓ Message Sent!" : "Send Message →"}
            </button>

            <p className={`text-center text-xs transition-colors duration-300 ${isDark ? "text-zinc-600" : "text-zinc-400"}`}>
                No spam. No commitments. Just a conversation.
            </p>
        </div>
    );
}