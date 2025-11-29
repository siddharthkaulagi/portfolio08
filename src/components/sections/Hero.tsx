"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { IndustrialBackground } from "@/components/IndustrialBackground";

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, 75]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 dark:block hidden">
                <Image
                    src="/hero-bg.png"
                    alt="Flame Energy Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 dark:from-[#020617]/80 via-background/60 dark:via-[#020617]/60 to-background dark:to-[#020617]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>

            {/* Industrial Themed Background Animations */}
            <IndustrialBackground />

            {/* Floating Particles with Parallax */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse blur-[2px] shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-orange-500 rounded-full animate-pulse blur-[3px] delay-700 shadow-[0_0_15px_rgba(255,170,0,0.8)]" />
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000" />
                <div className="absolute top-1/3 right-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse blur-[2px] shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse blur-[2px] shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
            </motion.div>

            <motion.div style={{ opacity }} className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: y2 }}
                    className="text-left space-y-6"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-cyan-300 text-xs font-medium tracking-wider uppercase">
                            System Online
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-tight">
                        SIDDHARTH KAULAGI
                    </h1>

                    <h2 className="text-xl md:text-2xl font-bold text-muted-foreground tracking-wide">
                        INDUSTRIAL ENGINEER •
                    </h2>

                    <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                        Building intelligent systems for forecasting,Facility layout planning , and data-driven decision making.
                        Merging <span className="text-cyan-400">digital twins</span> with <span className="text-orange-500">operational excellence</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 240, 255, 0.6), 0 0 80px rgba(0, 240, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all flex items-center space-x-2 border border-cyan-400/50 overflow-hidden group"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative">View Projects</span>
                            <ArrowRight size={20} className="relative" />
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download="Siddharth_Kaulagi_Resume.pdf"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 170, 0, 0.6), 0 0 80px rgba(255, 170, 0, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-8 py-4 bg-transparent border-2 border-orange-500/50 text-orange-400 font-bold rounded-lg hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-300 transition-all flex items-center space-x-2 shadow-[0_0_15px_rgba(255,170,0,0.3)] hover:shadow-[0_0_40px_rgba(255,170,0,0.6)] overflow-hidden group"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative">Download Resume</span>
                            <Download size={20} className="relative" />
                        </motion.a>
                    </div>

                    <div className="flex items-center space-x-6 pt-6">
                        <a
                            href="https://github.com/siddharthkaulagi/my-project-files"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    {/* Rotating Rings */}
                    <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-orange-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                    {/* Glowing Background behind image */}
                    <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-gradient-to-tr from-cyan-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />

                    {/* Image Container */}
                    <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full p-2 bg-gradient-to-tr from-cyan-500 to-orange-500 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                        <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950 dark:bg-slate-950 border-4 border-background">
                            <Image
                                src="/profile.png"
                                alt="Siddharth R Kaulagi"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
