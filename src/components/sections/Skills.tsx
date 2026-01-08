"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Database, Wrench, Users, ShoppingCart } from "lucide-react";
import { SkillsBackground } from "@/components/SkillsBackground";

const skillCategories = [
    {
        title: "Industrial Engineering & Operations",
        icon: Wrench,
        skills: [
            "Supply Chain Management",
            "Materials & Inventory Management",
            "Process Optimization",
            "Lean & Operations Management",
            "Quality Assurance",
            "Project Management",
            "Production Planning",
            "Operations Research",
            "Value Engineering"
        ],
        color: "text-orange-400",
        border: "border-orange-500/30",
        glowColor: "rgba(249,115,22,0.5)",
        hoverBorder: "hover:border-orange-500",
    },
    {
        title: "Analytics & Decision Support",
        icon: Database,
        skills: [
            "Data Analysis",
            "Statistics",
            "Operations Research",
            "Forecasting Fundamentals",
            "Dashboarding",
            "Decision-Making Support",
            "Data Visualization",
            "Power BI",
            "SQL (Basic)"
        ],
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        glowColor: "rgba(6,182,212,0.5)",
        hoverBorder: "hover:border-cyan-500",
    },
    {
        title: "Tools & Software",
        icon: Cpu,
        skills: [
            "MS Excel",
            "MS Word",
            "SQL (Basic)",
            "Power BI",
            "Arena Simulation",
            "SolidWorks",
            "ERP Systems (Academic)",
            "Procurement Systems",
            "GitHub"
        ],
        color: "text-blue-400",
        border: "border-blue-500/30",
        glowColor: "rgba(59,130,246,0.5)",
        hoverBorder: "hover:border-blue-500",
    },
    {
        title: "Procurement & Purchase Ops",
        icon: ShoppingCart,
        skills: [
            "Procurement Cycle (RFQ, RFI, PR, PO)",
            "Vendor Management",
            "Invoice Processing & Clearance",
            "Indirect Procurement",
            "Stakeholder Coordination",
            "Supplier Onboarding & Documentation"
        ],
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        glowColor: "rgba(16,185,129,0.5)",
        hoverBorder: "hover:border-emerald-500",
    },
    {
        title: "Soft Skills",
        icon: Users,
        skills: [
            "Problem Solving",
            "Technical Documentation",
            "Team Leadership",
            "Communication",
            "Project Management",
            "Stakeholder Coordination"
        ],
        color: "text-purple-400",
        border: "border-purple-500/30",
        glowColor: "rgba(168,85,247,0.5)",
        hoverBorder: "hover:border-purple-500",
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: `0 0 40px ${category.glowColor}, 0 0 80px ${category.glowColor}`,
                                transition: { duration: 0.15, ease: "easeOut" }
                            }}
                            className={`group relative p-6 bg-card/50 dark:bg-slate-900/50 border ${category.border} ${category.hoverBorder} rounded-xl backdrop-blur-sm transition-all duration-150 cursor-pointer`}
                        >
                            {/* Glowing overlay on hover */}
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at center, ${category.glowColor.replace('0.5', '0.15')} 0%, transparent 70%)`
                                }}
                            />

                            {/* Icon with glow effect */}
                            <div className={`relative mb-4 p-3 rounded-lg bg-muted dark:bg-slate-950 w-fit ${category.color} group-hover:scale-110 transition-transform duration-150`}>
                                <category.icon size={28} />
                                {/* Icon glow */}
                                <div
                                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 blur-md -z-10"
                                    style={{ backgroundColor: category.glowColor }}
                                />
                            </div>

                            <h3 className={`text-lg font-bold text-foreground mb-4 group-hover:${category.color} transition-colors duration-150`}>
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{
                                            scale: 1.08,
                                            boxShadow: `0 0 15px ${category.glowColor}`,
                                            transition: { duration: 0.1 }
                                        }}
                                        className="px-2 py-1 text-xs font-medium text-foreground/80 dark:text-slate-300 bg-muted dark:bg-slate-800/50 border border-border dark:border-slate-700 rounded-md transition-all duration-100 cursor-default hover:bg-muted/80 dark:hover:bg-slate-700/80"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
