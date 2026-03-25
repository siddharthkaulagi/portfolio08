"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { IndustrialBackground } from "@/components/IndustrialBackground";

export function Hero() {
    const nameRef = useRef<HTMLSpanElement>(null);
    const githubRef = useRef<HTMLAnchorElement>(null);
    const linkedinRef = useRef<HTMLAnchorElement>(null);

    // Magnetic physics for social icons
    const githubX = useSpring(0, { damping: 10, stiffness: 100 });
    const githubY = useSpring(0, { damping: 10, stiffness: 100 });
    const linkedinX = useSpring(0, { damping: 10, stiffness: 100 });
    const linkedinY = useSpring(0, { damping: 10, stiffness: 100 });

    function handleMagnetic(e: React.MouseEvent, springX: any, springY: any, ref: any) {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        springX.set((clientX - centerX) * 0.5);
        springY.set((clientY - centerY) * 0.5);
    }

    function resetMagnetic(springX: any, springY: any) {
        springX.set(0);
        springY.set(0);
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-24 pb-12 overflow-hidden bg-[#fafafa] dark:bg-[#131212]"
        >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5 pointer-events-none -z-20" />
            
            <div className="absolute inset-0 z-0 dark:hidden pointer-events-none">
                <IndustrialBackground />
            </div>

            {/* Cinematic Background Glows */}
            <div className="hidden dark:block absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />
            <div className="hidden dark:block absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] -z-10 animate-pulse pointer-events-none" />

            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10 w-full mt-10">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
                    className="lg:col-span-7 z-10 space-y-8"
                >
                    <div className="flex flex-col gap-4">
                        <label className="font-label text-[11px] uppercase tracking-[0.4em] font-black text-cyan-600 dark:text-[#ffb59c] flex items-center gap-3">
                            <span className="w-12 h-px bg-cyan-600 dark:bg-[#ffb59c]" />
                            System_Identity_Active
                        </label>
                        <h1 className="font-headline text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-foreground dark:text-[#e5e2e1]">
                            I'm <span className="group relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 dark:from-[#ffb59c] dark:to-[#ff5f1f] group-hover:tracking-widest transition-all duration-700 cursor-default">SIDDHARTH</span>
                                <span className="absolute -bottom-2 left-0 w-0 h-2 bg-orange-500 dark:bg-[#ff5f1f] group-hover:w-full transition-all duration-500" />
                            </span><br />
                            <span className="opacity-90">Industrial Engineer<span className="text-cyan-600 dark:text-[#ffb59c]">.</span></span>
                        </h1>
                    </div>

                    <p className="font-body text-xl md:text-2xl text-muted-foreground dark:text-[#e5e2e1]/70 max-w-2xl leading-relaxed">
                        Optimizing complex systems through <span className="text-foreground dark:text-white font-bold">industrial intelligence</span> and <span className="text-foreground dark:text-white font-bold">data-driven orchestration</span>. Building the future of autonomous retail and supply chain.
                    </p>

                    <div className="flex flex-wrap items-center gap-10 pt-4">
                        <motion.a 
                            href="#projects" 
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 rounded-2xl bg-black dark:bg-[#ffb59c] text-white dark:text-[#5c1900] font-headline font-black text-lg overflow-hidden flex items-center gap-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            View Logs
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </motion.a>
                        
                        <a href="https://drive.google.com/file/d/1y24AaEUOh5mpXISe99io-O-3wn7HST4F/view?usp=sharing" target="_blank" rel="noreferrer" className="group flex flex-col gap-1 text-cyan-700 dark:text-[#ffb59c] font-headline font-black text-xl">
                            <span className="tracking-tight">Get_Resume</span>
                            <div className="w-0 h-1 bg-cyan-700 dark:bg-[#ffb59c] group-hover:w-full transition-all duration-500" />
                        </a>
                    </div>
                    
                    <div className="flex items-center space-x-6 pt-12">
                        <motion.a 
                            ref={githubRef}
                            onMouseMove={(e) => handleMagnetic(e, githubX, githubY, githubRef)}
                            onMouseLeave={() => resetMagnetic(githubX, githubY)}
                            style={{ x: githubX, y: githubY }}
                            href="https://github.com/siddharthkaulagi" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-4 rounded-2xl bg-white dark:bg-[#1c1b1b] border border-black/5 dark:border-white/5 text-muted-foreground dark:text-[#e5e2e1]/40 hover:text-cyan-600 dark:hover:text-[#ffb59c] hover:border-cyan-500/20 dark:hover:border-[#ff5f1f]/20 transition-all duration-300 shadow-xl"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a 
                            ref={linkedinRef}
                            onMouseMove={(e) => handleMagnetic(e, linkedinX, linkedinY, linkedinRef)}
                            onMouseLeave={() => resetMagnetic(linkedinX, linkedinY)}
                            style={{ x: linkedinX, y: linkedinY }}
                            href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-4 rounded-2xl bg-white dark:bg-[#1c1b1b] border border-black/5 dark:border-white/5 text-muted-foreground dark:text-[#e5e2e1]/40 hover:text-cyan-600 dark:hover:text-[#ffb59c] hover:border-cyan-500/20 dark:hover:border-[#ff5f1f]/20 transition-all duration-300 shadow-xl"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
                    className="lg:col-span-5 relative group mt-10 lg:mt-0"
                >
                    <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-[60px] overflow-hidden border-[12px] border-white dark:border-[#1c1b1b] shadow-[0_80px_100px_rgba(0,0,0,0.1)] dark:shadow-none group-hover:rotate-2 transition-transform duration-1000">
                        <Image alt="Siddharth Kaulagi" src="/profile.png" fill className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>

                    {/* Industrial Tag Overlay */}
                    <div className="absolute -bottom-8 -left-8 bg-white dark:bg-[#ffb59c] p-8 rounded-[36px] shadow-2xl border border-black/5 dark:border-transparent transform group-hover:-translate-y-4 group-hover:rotate-[-4deg] transition-all duration-700">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-label text-[9px] uppercase tracking-[0.3em] text-emerald-500/80 dark:text-emerald-400/80 font-medium whitespace-nowrap drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">Status: Active</span>
                        </div>
                        <div className="font-headline font-medium text-base text-emerald-600 dark:text-emerald-400 uppercase tracking-widest drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">Open for Opportunities</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
