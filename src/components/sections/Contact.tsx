"use client";

import React, { useState } from "react";
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
        <section id="contact" className="relative py-24 bg-background overflow-hidden">
            <ContactBackground />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 shadow-2xl bg-card/50 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-4 relative">
                        <div>
                            <label className="block text-xs font-bold mb-2 uppercase">Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-muted border rounded-lg px-4 py-3 focus:border-cyan-500 outline-none"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-2 uppercase">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-muted border rounded-lg px-4 py-3 focus:border-cyan-500 outline-none"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold mb-2 uppercase">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-muted border rounded-lg px-4 py-3 focus:border-cyan-500 outline-none"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                        >
                            <span>{loading ? "Sending..." : "Send Message"}</span>
                            <Send size={18} />
                        </button>

                        {status === "success" && (
                            <p className="text-green-500 text-center mt-4">✅ Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 text-center mt-4">❌ Failed to send. Try again later.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
