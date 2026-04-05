"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatInput from "./FloatInput";

const defaultProjectTypes = [
    "Web Development",
    "Mobile App Development",
    "AI & ML Solutions",
    "SaaS & Cloud",
    "UI/UX & Branding",
    "E-Commerce",
];

export default function ContactForm() {
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
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customType, setCustomType] = useState("");
    const [projectTypes, setProjectTypes] = useState(defaultProjectTypes);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        
        if (name === "projectType" && value === "__add_new__") {
            setShowCustomInput(true);
            return;
        }
        
        setForm({ ...form, [name]: value });
    };

    const handleAddCustomType = () => {
        if (customType.trim() && !projectTypes.includes(customType.trim())) {
            const newType = customType.trim();
            setProjectTypes([...projectTypes, newType]);
            setForm({ ...form, projectType: newType });
            setCustomType("");
            setShowCustomInput(false);
        }
    };

    const handleCancelCustom = () => {
        setShowCustomInput(false);
        setCustomType("");
        setForm({ ...form, projectType: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3500);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="w-full relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-100 bg-white p-6 sm:p-10 md:p-12 lg:p-16 shadow-2xl shadow-zinc-200/50 flex flex-col gap-8 group"
        >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Name + Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <FloatInput label="Your Name" name="name" type="text" value={form.name} focused={focused} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                <FloatInput label="Email Address" name="email" type="email" value={form.email} focused={focused} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
            </div>

            {/* Company Field (Optional) */}
            <FloatInput label="Company (optional)" name="company" type="text" value={form.company} focused={focused} onChange={handleChange} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />

            {/* Project Type + Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Select Field */}
                <div className="relative w-full group">
                    <label
                        htmlFor="projectType"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${focused === "projectType" || form.projectType
                                ? "top-2 text-[10px] tracking-widest uppercase font-bold text-black"
                                : "top-1/2 -translate-y-1/2 text-sm text-zinc-400 group-hover:text-zinc-500"
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
                        className={`w-full border rounded-2xl px-4 pt-7 pb-3 text-sm appearance-none cursor-pointer outline-none transition-all duration-200 bg-zinc-50/50 text-black ${focused === "projectType" ? "border-black ring-1 ring-black bg-white" : "border-zinc-100 hover:border-zinc-200"}`}
                    >
                        <option value="" disabled hidden />
                        {projectTypes.map((p) => (
                            <option key={p} value={p} className="bg-white">
                                {p}
                            </option>
                        ))}
                        <option 
                            value="__add_new__" 
                            className="bg-black text-white font-bold"
                            style={{ backgroundColor: 'black', color: 'white' }}
                        >
                            + Add Custom Specialty
                        </option>
                    </select>
                    <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-zinc-400 group-hover:text-zinc-600 transition-colors"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {/* Budget Selection (Using the generic FloatInput) */}
                <FloatInput label="Estimated Budget" name="budget" type="text" value={form.budget} focused={focused} onChange={handleChange} onFocus={() => setFocused("budget")} onBlur={() => setFocused(null)} />
            </div>

            {/* Custom Input Reveal Area */}
            <AnimatePresence>
                {showCustomInput && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, height: 0 }}
                        animate={{ opacity: 1, scale: 1, height: "auto" }}
                        exit={{ opacity: 0, scale: 0.98, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="relative pt-2 pb-6 border-b border-zinc-100 mb-2">
                            <div className="flex flex-col sm:flex-row gap-4 items-end">
                                <div className="flex-1 w-full">
                                    <FloatInput 
                                        label="Custom Focus Area" 
                                        name="customType" 
                                        type="text" 
                                        value={customType} 
                                        focused={focused} 
                                        onChange={(e) => setCustomType(e.target.value)} 
                                        onFocus={() => setFocused("customType")} 
                                        onBlur={() => setFocused(null)} 
                                    />
                                    <p className="mt-2 ml-4 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Press Enter to Add</p>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <button
                                        type="button"
                                        onClick={handleCancelCustom}
                                        className="h-[52px] px-6 rounded-2xl text-xs font-bold tracking-widest uppercase bg-zinc-50 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-all border border-zinc-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleAddCustomType}
                                        className="h-[52px] px-8 rounded-2xl text-xs font-bold tracking-widest uppercase bg-black text-white hover:bg-zinc-800 transition-all shadow-lg shadow-black/10"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Project Message/Textarea */}
            <div className="relative group">
                <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${focused === "message" || form.message
                            ? "top-2 text-[10px] tracking-widest uppercase font-bold text-black"
                            : "top-5 text-sm text-zinc-400 group-hover:text-zinc-500"
                        }`}
                >
                    Project Details
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`w-full border rounded-3xl px-4 pt-10 pb-4 text-sm resize-none outline-none transition-all duration-200 bg-zinc-50/50 text-black ${focused === "message" ? "border-black ring-1 ring-black bg-white" : "border-zinc-100 hover:border-zinc-200"}`}
                    placeholder="Tell us about your mission..."
                />
            </div>

            {/* Submission Section */}
            <div className="flex flex-col gap-6 mt-4">
                <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={submitted}
                    className={`w-full py-5 rounded-2xl font-bold text-sm tracking-[.25em] uppercase transition-all duration-300 ${submitted
                            ? "bg-emerald-500 text-white cursor-not-allowed"
                            : "bg-black text-white hover:bg-zinc-800 shadow-2xl shadow-black/10"
                        }`}
                >
                    {submitted ? "✓ Message Sent Successfully" : "Send Project Brief"}
                </motion.button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 border-t border-zinc-50 pt-6">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Response time: ~24hrs</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Pune, India (GMT+5:30)</p>
                    </div>
                </div>
            </div>
        </form>
    );
}