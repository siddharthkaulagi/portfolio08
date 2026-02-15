"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { AboutBackground } from "@/components/AboutBackground";

const educationData = [
    {
        title: "B.E. Industrial Engineering & Management",
        institution: "BMSCE Bangalore",
        year: "Expected 2026",
        score: "GPA: 8.18",
        icon: GraduationCap,
        color: "text-cyan-400",
        borderColor: "border-cyan-500/30",
        hoverBorder: "hover:border-cyan-500",
        glowColor: "rgba(6,182,212,0.5)",
    },
    {
        title: "12th Grade (PUC)",
        institution: "PRISM PU College Dharwad",
        year: "Completed",
        score: "96%",
        icon: School,
        color: "text-orange-400",
        borderColor: "border-orange-500/30",
        hoverBorder: "hover:border-orange-500",
        glowColor: "rgba(249,115,22,0.5)",
    },
    {
        title: "10th Grade",
        institution: "REMS Belagavi",
        year: "Completed",
        score: "93.44%",
        icon: Award,
        color: "text-blue-400",
        borderColor: "border-blue-500/30",
        hoverBorder: "hover:border-blue-500",
        glowColor: "rgba(59,130,246,0.5)",
    },
];

export function About() {
    return (
        <section id="about" className="relative py-20 bg-transparent overflow-hidden">
            {/* Animated Background */}
            <AboutBackground />

            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                        ENGINEERING <span className="text-orange-500">•</span> ANALYTICS <span className="text-cyan-500">•</span> OPTIMIZATION
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                            <span className="w-8 h-[2px] bg-cyan-400 mr-3" />
                            About Me
                        </h3>
                        <p className="text-foreground/80 dark:text-slate-300 text-lg leading-relaxed">
                            I am an <strong className="text-foreground">Industrial Engineering & Management</strong> student with a passion for optimizing processes. My expertise lies at the intersection of <strong className="text-orange-400">Supply Chain Management</strong> , <strong className="text-green-400">Lean & operations management</strong> , <strong className="text-cyan-400">Operational Research</strong> , and <strong className="text-blue-400">Data Analytics</strong>.
                        </p>
                        <p className="text-foreground/80 dark:text-slate-300 text-lg leading-relaxed">
                            Industrial Engineering student specializing in supply chain management, production planning, and
                            process optimization. Skilled in data analytics, simulation, and Lean Manufacturing with strong
                            foundations in Quality, Operations Research, and Project Management. Familiar with Power BI, SQL,
                            Excel,for data-driven decision-making.
                        </p>

                        <div className="p-6 bg-card/50 dark:bg-slate-900/50 border border-border dark:border-slate-800 rounded-xl backdrop-blur-sm">
                            <h4 className="text-foreground font-bold mb-2">Current Focus</h4>
                            <p className="text-muted-foreground">
                                Building a Unified Retail Intelligence Platform (URIP) designed for small retail stores—uniting forecasting, inventory analytics, store-location GIS, and layout intelligence into one smart retail decision engine.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Education Cards */}
                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -5,
                                    boxShadow: `0 0 40px ${edu.glowColor}, 0 0 80px ${edu.glowColor}`,
                                    transition: { duration: 0.15, ease: "easeOut" }
                                }}
                                className={cn(
                                    "group relative p-6 bg-card/40 dark:bg-slate-900/40 border rounded-xl backdrop-blur-md transition-all duration-150 cursor-pointer",
                                    edu.borderColor,
                                    edu.hoverBorder
                                )}
                            >
                                {/* Glowing overlay on hover */}
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at center, ${edu.glowColor.replace('0.5', '0.15')} 0%, transparent 70%)`
                                    }}
                                />

                                <div className="flex items-start gap-4 relative z-10">
                                    {/* Icon with glow effect */}
                                    <div className={cn("relative p-3 rounded-lg bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 group-hover:scale-110 transition-transform duration-150", edu.color)}>
                                        <edu.icon size={24} />
                                        {/* Icon glow */}
                                        <div
                                            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 blur-md -z-10"
                                            style={{ backgroundColor: edu.glowColor }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className={cn("text-xl font-bold text-foreground transition-colors duration-150", `group-hover:${edu.color}`)}>
                                            {edu.title}
                                        </h4>
                                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                                        <div className="flex items-center gap-4 mt-2 text-sm">
                                            <span className="text-muted-foreground">{edu.year}</span>
                                            <span className={cn("font-bold", edu.color)}>{edu.score}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
