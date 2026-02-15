"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, User, MessageSquare, ArrowUpRight, MapPin, Phone, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import { ContactBackground } from "@/components/ContactBackground";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="relative py-28 bg-background/90 overflow-hidden">
            <ContactBackground />

            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6"
                    >
                        <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                        <span className="text-cyan-600 dark:text-cyan-300 text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                        Let&apos;s Build Something{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                            Amazing
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Have a project in mind want to discuss ideas or want to hire me? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
                    {/* ── LEFT SIDE: Contact Info Cards ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-5"
                    >
                        {/* Info Card 1 — Email */}
                        <motion.a
                            href="mailto:siddharthkaulagi@gmail.com"
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="group block p-5 rounded-2xl bg-card/40 dark:bg-slate-900/50 backdrop-blur-xl border border-white/15 dark:border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-shadow">
                                    <Mail size={20} className="text-cyan-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                                    <p className="text-foreground font-medium truncate group-hover:text-cyan-500 transition-colors">
                                        siddharthkaulagi@gmail.com
                                    </p>
                                </div>
                                <ArrowUpRight size={16} className="text-muted-foreground/50 group-hover:text-cyan-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" />
                            </div>
                        </motion.a>

                        {/* Info Card 2 — Location */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="group p-5 rounded-2xl bg-card/40 dark:bg-slate-900/50 backdrop-blur-xl border border-white/15 dark:border-slate-700/50 hover:border-orange-500/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.3)] transition-shadow">
                                    <MapPin size={20} className="text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                                    <p className="text-foreground font-medium">Bengaluru, Karnataka</p>
                                    <p className="text-muted-foreground text-sm">India 🇮🇳</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Info Card 3 — Phone */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            className="group p-5 rounded-2xl bg-card/40 dark:bg-slate-900/50 backdrop-blur-xl border border-white/15 dark:border-slate-700/50 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-shadow">
                                    <Phone size={20} className="text-purple-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Availability</p>
                                    <p className="text-foreground font-medium">Open to Opportunities</p>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-green-600 dark:text-green-400 text-xs font-medium">Available Now</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative quote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/10"
                        >
                            <p className="text-muted-foreground text-sm italic leading-relaxed">
                                &ldquo;The best way to predict the future is to engineer it.&rdquo;
                            </p>
                            <p className="text-cyan-500 text-xs font-semibold mt-2">— Industrial Mindset</p>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT SIDE: Contact Form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="relative rounded-2xl bg-card/40 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-cyan-500/15 shadow-[0_0_60px_rgba(0,0,0,0.08)] dark:shadow-[0_0_60px_rgba(6,182,212,0.08)] overflow-hidden">
                            {/* Top accent bar */}
                            <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

                            {/* Glow effect on focus */}
                            <AnimatePresence>
                                {focusedField && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute -inset-px rounded-2xl pointer-events-none"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(6,182,212,0.1), transparent, rgba(99,102,241,0.1))",
                                        }}
                                    />
                                )}
                            </AnimatePresence>

                            <div className="p-8 md:p-10">
                                {/* Form header */}
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                        <MessageSquare size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
                                        <p className="text-muted-foreground text-xs">I&apos;ll get back to you within 24 hours</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        {/* Name Field */}
                                        <div className="group relative">
                                            <label className="block text-xs font-bold mb-2.5 uppercase tracking-wider text-muted-foreground group-focus-within:text-cyan-500 transition-colors duration-300">
                                                <span className="flex items-center gap-1.5">
                                                    <User size={12} />
                                                    Your Name
                                                </span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField("name")}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                    className="w-full bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 placeholder:text-muted-foreground/40 text-foreground text-sm"
                                                    placeholder="John Doe"
                                                />
                                                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-focus-within:via-cyan-500/50 transition-all duration-500" />
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div className="group relative">
                                            <label className="block text-xs font-bold mb-2.5 uppercase tracking-wider text-muted-foreground group-focus-within:text-cyan-500 transition-colors duration-300">
                                                <span className="flex items-center gap-1.5">
                                                    <Mail size={12} />
                                                    Email Address
                                                </span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField("email")}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                    className="w-full bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 placeholder:text-muted-foreground/40 text-foreground text-sm"
                                                    placeholder="john@example.com"
                                                />
                                                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-focus-within:via-cyan-500/50 transition-all duration-500" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="group relative">
                                        <label className="block text-xs font-bold mb-2.5 uppercase tracking-wider text-muted-foreground group-focus-within:text-cyan-500 transition-colors duration-300">
                                            <span className="flex items-center gap-1.5">
                                                <MessageSquare size={12} />
                                                Your Message
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField("message")}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className="w-full bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl px-4 py-3.5 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 placeholder:text-muted-foreground/40 resize-none text-foreground text-sm"
                                                placeholder="Tell me about your project, idea, or how we can collaborate..."
                                            />
                                            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-focus-within:via-cyan-500/50 transition-all duration-500" />
                                        </div>
                                        {/* Character indicator */}
                                        <p className="text-right text-xs text-muted-foreground/50 mt-1.5">
                                            {formData.message.length > 0 && <span>{formData.message.length} characters</span>}
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(6,182,212,0.15)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                                    >
                                        {/* Shimmer effect */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                        {loading ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                <span className="relative tracking-wide">Sending your message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="relative tracking-wide text-base">Send Message</span>
                                                <Send size={18} className="relative transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </>
                                        )}
                                    </motion.button>

                                    {/* Status Messages */}
                                    <AnimatePresence>
                                        {status === "success" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/25 text-green-600 dark:text-green-400 text-center font-medium flex items-center justify-center gap-2.5 shadow-lg shadow-green-500/5"
                                            >
                                                <CheckCircle2 size={18} className="text-green-500" />
                                                <span>Message sent successfully! I&apos;ll respond soon.</span>
                                            </motion.div>
                                        )}
                                        {status === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-center font-medium flex items-center justify-center gap-2.5 shadow-lg shadow-red-500/5"
                                            >
                                                <XCircle size={18} className="text-red-500" />
                                                <span>Failed to send. Please try again.</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </section>
    );
}
