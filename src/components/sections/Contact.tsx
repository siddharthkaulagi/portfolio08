"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { ContactBackground } from "@/components/ContactBackground";

export function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-background overflow-hidden">
            {/* Animated Background */}
            <ContactBackground />

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-card/50 dark:bg-slate-900/50 border border-border dark:border-slate-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-foreground mb-2">GET IN TOUCH</h2>
                                <p className="text-muted-foreground">
                                    Ready to optimize your operations? Let's connect.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a href="mailto:siddarthkaulagi90@gmail.com" className="flex items-center space-x-4 text-foreground/80 dark:text-slate-300 hover:text-cyan-400 transition-colors group">
                                    <div className="p-3 bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-medium">siddarthkaulagi90@gmail.com</span>
                                </a>

                                <a href="tel:+918050463960" className="flex items-center space-x-4 text-foreground/80 dark:text-slate-300 hover:text-cyan-400 transition-colors group">
                                    <div className="p-3 bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <span className="font-medium">+91 8050463960</span>
                                </a>

                                <div className="flex items-center space-x-4 text-foreground/80 dark:text-slate-300 group">
                                    <div className="p-3 bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="font-medium">Bengaluru, India</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border dark:border-slate-800">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Connect Socially</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg text-muted-foreground dark:text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/siddharthkaulagi/my-project-files"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg text-muted-foreground dark:text-slate-400 hover:text-foreground hover:border-white/50 transition-all"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Simple Form or Call to Action */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 rounded-xl" />
                            <form className="relative p-6 space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Name</label>
                                    <input type="text" className="w-full bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Email</label>
                                    <input type="email" className="w-full bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="How can I help you?" />
                                </div>
                                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2">
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="text-center mt-16 text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} Siddharth R Kaulagi. All rights reserved.</p>
                    <p className="mt-2">Designed with <span className="text-red-500">♥</span> and Industrial Precision.</p>
                </div>
            </div>
        </section>
    );
}
