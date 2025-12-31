"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { ContactBackground } from "@/components/ContactBackground";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

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
        <section id="contact" className="relative py-24 bg-background/90 overflow-hidden">
            <ContactBackground />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,240,255,0.1)] bg-card/30 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-cyan-500/20"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect </span>
                        </h2>
                        <p className="text-muted-foreground">
                            Have a project in mind or just want to discuss? Drop a message below.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className="block text-xs font-bold mb-2 uppercase text-muted-foreground group-focus-within:text-cyan-500 transition-colors">Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-100/50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300 placeholder:text-muted-foreground/50 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold mb-2 uppercase text-muted-foreground group-focus-within:text-cyan-500 transition-colors">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-100/50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300 placeholder:text-muted-foreground/50 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold mb-2 uppercase text-muted-foreground group-focus-within:text-cyan-500 transition-colors">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-100/50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300 placeholder:text-muted-foreground/50 resize-none dark:text-white"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            <span className="tracking-wide">{loading ? "Sending..." : "Send Message"}</span>
                            <Send size={18} className={`transition-transform duration-500 ${loading ? "opacity-0" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                        </motion.button>

                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-center font-medium flex items-center justify-center gap-2"
                                >
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Message sent successfully!
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-center font-medium"
                                >
                                    Failed to send. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
