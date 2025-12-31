"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Wrench, Users } from "lucide-react";
import { SkillsBackground } from "@/components/SkillsBackground";

const skillCategories = [
    {
        title: "IE-Domain Knowledge",
        icon: Wrench,
        skills: ["Supply Chain Management", "Value Engineering", "Lean Manufacturing", "Quality Assurance", "TQM", "Operations Research", "Ergonomics", "Production Planning", "Inventory Management"],
        color: "text-orange-400",
        border: "border-orange-500/30",
        glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    },
    {
        title: "Analytics & Managerial ",
        icon: Database,
        skills: ["Python", "SQL", "Power BI", "Excel", "Machine Learning", "Data Visualization", "Google Sheet"],
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    },
    {
        title: "Tools & Software",
        icon: Cpu,
        skills: ["AutoCAD", "SolidWorks", "Arena Simulation", "SAP (Basics)", "MS Project", "GitHub", "VS Code"],
        color: "text-blue-400",
        border: "border-blue-500/30",
        glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    },
    {
        title: "Soft Skills",
        icon: Users,
        skills: ["Problem Solving", "Technical Documentation", "Team Leadership", "Communication", "Project Management"],
        color: "text-purple-400",
        border: "border-purple-500/30",
        glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    },
];

export function Skills() {
    return (
        <section id="skills" className="relative py-24 bg-background/90">
            {/* Animated Background */}
            <SkillsBackground />

            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 dark:opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight uppercase">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Blueprint</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit combining traditional engineering principles with modern data science.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative p-6 bg-card/50 dark:bg-slate-900/50 border ${category.border} rounded-xl backdrop-blur-sm transition-all duration-300 ${category.glow}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                            <div className={`mb-4 p-3 rounded-lg bg-slate-950 dark:bg-slate-950 w-fit ${category.color}`}>
                                <category.icon size={32} />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-cyan-500 transition-colors">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 text-xs font-medium text-foreground/80 dark:text-slate-300 bg-muted dark:bg-slate-800/50 border border-border dark:border-slate-700 rounded-md group-hover:border-slate-600 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
