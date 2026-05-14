"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatInput from "./FloatInput";
import { Send, CheckCircle2, Plus, X } from "lucide-react";

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
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="w-full relative overflow-hidden rounded-[2.5rem] border border-border bg-card/80 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-primary/5 flex flex-col gap-8 group transition-all duration-500"
        >
            {/* Form Header Area */}
            <div className="flex flex-col gap-2 mb-2">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Project Brief</h2>
                <p className="text-sm text-textMuted">Let&apos;s define the scope of your digital revolution.</p>
            </div>

            {/* Name + Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <FloatInput label="Full Name" name="name" type="text" value={form.name} focused={focused} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} required />
                <FloatInput label="Email Address" name="email" type="email" value={form.email} focused={focused} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} required />
            </div>

            {/* Company Field (Optional) */}
            <FloatInput label="Company / Organization" name="company" type="text" value={form.company} focused={focused} onChange={handleChange} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />

            {/* Project Type + Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Select Field */}
                <div className="relative w-full group">
                    <label
                        htmlFor="projectType"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${focused === "projectType" || form.projectType
                                ? "top-2 text-[10px] tracking-widest uppercase font-bold text-primary"
                                : "top-1/2 -translate-y-1/2 text-sm text-textMuted/60 group-hover:text-textMuted"
                            }`}
                    >
                        Project Specialty
                    </label>
                    <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocused("projectType")}
                        onBlur={() => setFocused(null)}
                        className={`w-full border rounded-2xl px-4 pt-7 pb-3 text-sm appearance-none cursor-pointer outline-none transition-all duration-200 bg-secondary/30 text-foreground ${focused === "projectType" ? "border-primary ring-1 ring-primary bg-background" : "border-border hover:border-textMuted/30"}`}
                    >
                        <option value="" disabled hidden />
                        {projectTypes.map((p) => (
                            <option key={p} value={p} className="bg-background text-foreground">
                                {p}
                            </option>
                        ))}
                        <option value="__add_new__" className="font-bold text-foreground">+ Other Specialty</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-textMuted">
                        <Plus className={`w-4 h-4 transition-transform duration-300 ${focused === "projectType" ? "rotate-45" : ""}`} />
                    </div>
                </div>

                <FloatInput label="Estimated Budget" name="budget" type="text" value={form.budget} focused={focused} onChange={handleChange} onFocus={() => setFocused("budget")} onBlur={() => setFocused(null)} placeholder="e.g. $10k - $25k" />
            </div>

            {/* Custom Input Area */}
            <AnimatePresence>
                {showCustomInput && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-2xl bg-secondary border border-border"
                    >
                        <div className="flex gap-3 items-center">
                            <div className="flex-1">
                                <FloatInput label="Describe Specialty" name="customType" type="text" value={customType} focused={focused} onChange={(e) => setCustomType(e.target.value)} onFocus={() => setFocused("customType")} onBlur={() => setFocused(null)} />
                            </div>
                            <div className="flex gap-2">
                                <button type="button" onClick={handleCancelCustom} className="p-3 rounded-xl bg-card border border-border text-textMuted hover:text-foreground transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                                <button type="button" onClick={handleAddCustomType} className="px-6 rounded-xl bg-primary text-background font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-colors">
                                    Add
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Message Area */}
            <div className="relative group">
                <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${focused === "message" || form.message
                            ? "top-2 text-[10px] tracking-widest uppercase font-bold text-primary"
                            : "top-5 text-sm text-textMuted/60 group-hover:text-textMuted"
                        }`}
                >
                    Project Details
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`w-full border rounded-3xl px-4 pt-10 pb-4 text-sm resize-none outline-none transition-all duration-200 bg-secondary/30 text-foreground ${focused === "message" ? "border-primary ring-1 ring-primary bg-background shadow-sm" : "border-border hover:border-textMuted/30"}`}
                    placeholder={(focused === "message" || form.message) ? "Tell us about your mission, goals and timelines..." : ""}
                />
            </div>

            {/* Submission Section */}
            <div className="flex flex-col gap-6">
                <motion.button
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={submitted}
                    className={`group relative overflow-hidden w-full py-5 rounded-2xl font-bold text-xs tracking-[.25em] uppercase transition-all duration-500 ${submitted
                            ? "bg-emerald-500 text-white shadow-emerald-200"
                            : "bg-primary text-background hover:opacity-90 shadow-xl shadow-primary/10"
                        }`}
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {submitted ? (
                            <>
                                <CheckCircle2 className="w-4 h-4 animate-bounce" />
                                Brief Sent Successfully
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Initiate Conversation
                            </>
                        )}
                    </span>
                    
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>

                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-textMuted">Response in &lt; 24h</p>
                </div>
            </div>
        </form>
    );
}