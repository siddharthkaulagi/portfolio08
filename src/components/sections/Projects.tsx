"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, Box, Activity, BarChart3 } from "lucide-react";
import Image from "next/image";
import { ProjectsBackground } from "@/components/ProjectsBackground";

const projects = [
    {
        title: "Unified Retail Intelligence Platform (URIP)",
        description: "An end-to-end retail analytics solution leveraging Machine Learning for demand forecasting and facility layout optimization.",
        tags: ["Python", "Streamlit", "ML (Prophet/XGBoost)", "GIS", "Google Gemini"],
        icon: Activity,
        color: "from-cyan-500 to-blue-600",
        link: "https://github.com/siddharthkaulagi/Unified-Retail-Intelligence-Platform-URIP-",
        image: "/projects/urip-dashboard.png",
        details: [
            "ML Demand Forecasting (Prophet, ARIMA, LSTM)",
            "GIS Store Mapping & Layout Optimization (ARC)",
            "Inventory Analytics (ABC/XYZ/FSN)",
            "CRM with Churn Prediction & RFM Analysis",
        ],
    },
    {
        title: "IoT Solar Tracking System",
        description: "Dual-axis solar tracker using Arduino & ESP8266 to maximize energy capture efficiency through real-time light sensing.",
        tags: ["IoT", "Arduino", "C++", "ESP8266", "Sensors"],
        icon: Cpu,
        color: "from-orange-500 to-amber-600",
        link: "https://github.com/siddharthkaulagi/my-project-files",
        image: "/projects/iot-solar-tracker.jpg",
        details: [
            "Dual-axis tracking algorithm",
            "Real-time IoT Dashboard",
            "MPPT Algorithm Implementation",
            "Increased energy efficiency by 35%",
        ],
    },
    {
        title: "3D Printed Knuckle Joint",
        description: "Designed and manufactured a functional knuckle joint using SolidWorks and PLA 3D printing technology.",
        tags: ["SolidWorks", "3D Printing", "Rapid Prototyping", "CAD"],
        icon: Box,
        color: "from-purple-500 to-pink-600",
        link: "https://github.com/siddharthkaulagi/my-project-files",
        image: "/projects/3d-knuckle-joint.png",
        details: [
            "CAD Design in SolidWorks",
            "Tolerance Analysis & Assembly",
            "PLA Material Testing",
            "Additive Manufacturing Process",
        ],
    },
    {
        title: "Inventory & Supply Chain Management Analysis",
        description: "A Power BI–based analysis of inventory and supply chain performance, focusing on operational efficiency, inventory health, and warehouse utilization through interactive dashboards.",
        tags: ["Power BI", "DAX", "CSV Dataset", "Data Analytics"],
        icon: BarChart3,
        color: "from-emerald-500 to-green-600",
        link: "https://github.com/siddharthkaulagi/Inventory-and-supply-chain-Management-Analysis",
        image: "/projects/inventory-supply-chain.png",
        details: [
            "Warehouse Utilization & Capacity Planning",
            "Inventory Turnover Ratio & DSI Analysis",
            "Transportation Cost by Region & Category",
            "Backorder Tracking & Lead Time Optimization",
        ],
    },
];

export function Projects() {
    return (
        <section id="projects" className="relative py-24 bg-background/90 overflow-hidden">
            {/* Animated Background */}
            <ProjectsBackground />

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                        FEATURED <span className="text-cyan-500">PROJECTS</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Bridging the gap between physical engineering and digital intelligence.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(6,182,212,0.2)",
                                transition: { duration: 0.15, ease: "easeOut" }
                            }}
                            className="group relative bg-card dark:bg-slate-900 border border-border dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500 transition-all duration-150 cursor-pointer flex flex-col"
                        >
                            {/* Image Header (if project has an image) */}
                            {project.image ? (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card dark:from-slate-900 to-transparent opacity-70" />
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
                                </div>
                            ) : (
                                /* Gradient Header */
                                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                            )}

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 group-hover:border-white/20 transition-colors`}>
                                        <project.icon className="text-foreground" size={28} />
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Github size={24} />
                                    </a>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {project.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-xs text-foreground/80 dark:text-slate-300">
                                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mr-2 flex-shrink-0`} />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-muted-foreground bg-muted dark:bg-slate-950 border border-border dark:border-slate-800 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r ${project.color} blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
