"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Cpu, Box, Activity, BarChart3, ArrowUpRight, Terminal } from "lucide-react";
import Image from "next/image";
import { ProjectsBackground } from "@/components/ProjectsBackground";

const projects = [
    {
        id: "01",
        title: "URIP",
        fullName: "Unified Retail Intelligence Platform",
        description: "An end-to-end retail analytics solution leveraging Machine Learning for demand forecasting and facility layout optimization.",
        tags: ["Python", "Streamlit", "ML", "GIS", "Gemini"],
        icon: Activity,
        color: "text-cyan-500 dark:text-[#ffb59c]",
        link: "https://github.com/siddharthkaulagi/Unified-Retail-Intelligence-Platform-URIP-",
        image: "/projects/urip-dashboard.png",
        details: ["ML Demand Forecasting", "GIS Store Mapping", "Inventory Analytics", "CRM Prediction"],
    },
    {
        id: "02",
        title: "Solar Tracker",
        fullName: "IoT Solar Tracking System",
        description: "Dual-axis solar tracker using Arduino & ESP8266 to maximize energy capture efficiency through real-time light sensing.",
        tags: ["IoT", "Arduino", "C++", "Sensors"],
        icon: Cpu,
        color: "text-orange-500 dark:text-[#ffb59c]",
        link: "https://github.com/siddharthkaulagi/my-project-files",
        image: "/projects/iot-solar-tracker.jpg",
        details: ["Dual-axis tracking", "Real-time Dashboard", "MPPT Algorithm", "Efficiency +35%"],
    },
    {
        id: "03",
        title: "Knuckle Joint",
        fullName: "3D Printed Knuckle Joint",
        description: "Designed and manufactured a functional knuckle joint using SolidWorks and PLA 3D printing technology.",
        tags: ["SolidWorks", "3D Print", "CAD"],
        icon: Box,
        color: "text-purple-500 dark:text-[#ffb59c]",
        link: "https://github.com/siddharthkaulagi/my-project-files",
        image: "/projects/3d-knuckle-joint.png",
        details: ["CAD SolidWorks", "Tolerance Analysis", "PLA Material Testing", "Additive Mfg"],
    },
    {
        id: "04",
        title: "Supply Chain",
        fullName: "Inventory & SC Analysis",
        description: "A Power BI–based analysis of inventory and supply chain performance, focusing on operational efficiency and warehouse utilization.",
        tags: ["Power BI", "DAX", "Data Analytics"],
        icon: BarChart3,
        color: "text-emerald-500 dark:text-[#ffb59c]",
        link: "https://github.com/siddharthkaulagi/Inventory-and-supply-chain-Management-Analysis",
        image: "/projects/inventory-supply-chain.png",
        details: ["Warehouse Utilization", "Turnover Ratio", "Transportation Cost", "Lead Time Opt"],
    },
];

function ProjectCard({ project, index }: { project: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { damping: 20, stiffness: 150 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { damping: 20, stiffness: 150 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - (rect.left + rect.width / 2));
        mouseY.set(e.clientY - (rect.top + rect.height / 2));
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative flex flex-col bg-white dark:bg-[#1c1b1b] rounded-[48px] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-700 h-full"
        >
            {/* The Cinematic Background Mask */}
            <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle 600px at ${mouseX.get() + 300}px ${mouseY.get() + 400}px, rgba(6,182,212,0.1), transparent)`,
                }}
            />

            <div className="p-10 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-10">
                    <div className="p-5 rounded-3xl bg-slate-100 dark:bg-[#131212] border border-black/5 dark:border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                        <project.icon className={project.color} size={32} />
                    </div>
                    <span className="font-headline text-5xl font-black text-slate-200 dark:text-[#e5e2e1]/5 group-hover:text-cyan-600 dark:group-hover:text-[#ff5f1f] transition-colors duration-700">
                        {project.id}
                    </span>
                </div>

                <div className="space-y-4 mb-8" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="font-headline text-3xl font-black text-foreground dark:text-[#e5e2e1] uppercase tracking-tighter leading-none group-hover:text-cyan-600 dark:group-hover:text-[#ffb59c] transition-colors">
                        {project.title}
                    </h3>
                    <p className="font-body text-muted-foreground dark:text-[#e5e2e1]/60 text-lg leading-relaxed max-w-sm">
                        {project.description}
                    </p>
                </div>

                {/* Technical Specs - Staggered Reveal */}
                <div className="grid grid-cols-2 gap-4 mt-auto" style={{ transform: "translateZ(20px)" }}>
                    {project.details.map((detail: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-[#131212] border border-transparent hover:border-black/5 dark:hover:border-white/10 transition-all font-label text-[10px] uppercase tracking-widest font-bold text-foreground dark:text-[#e5e2e1]/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#ffb59c] shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                            {detail}
                        </div>
                    ))}
                </div>

                {/* Project Image - Perspective Shift */}
                <div className="relative mt-12 bg-slate-200 dark:bg-[#131212] rounded-[32px] overflow-hidden aspect-[16/9] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-700" style={{ transform: "translateZ(50px)" }}>
                    <Image src={project.image} alt={project.title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Tech Badge */}
                    <div className="absolute top-6 left-6 flex gap-2 overflow-hidden">
                        {project.tags.slice(0, 2).map((tag: string, idx: number) => (
                            <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[9px] uppercase tracking-widest font-black text-white translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500" style={{ transitionDelay: `${idx * 100}s` }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-8 right-8 w-14 h-14 rounded-2xl bg-white dark:bg-[#ffb59c] text-black dark:text-[#5c1900] flex items-center justify-center shadow-2xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hover:rotate-12 active:scale-95"
                    >
                        <ArrowUpRight size={28} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="relative py-32 bg-background dark:bg-[#131313] overflow-hidden">
            <ProjectsBackground />
            
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-600 dark:text-[#ffb59c] mb-4 block">Product Engineering</label>
                        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tight text-foreground dark:text-[#e5e2e1] uppercase leading-none">
                            PRO<span className="text-orange-600 dark:text-[#ff5f1f]">JECTS</span>
                        </h2>
                    </motion.div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                        <Terminal size={24} className="text-cyan-600 dark:text-[#ffb59c] mb-2" />
                        <div className="text-muted-foreground/40 font-label text-[10px] uppercase tracking-[0.2em] font-bold">Total_Units: 04</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 perspective-[2000px]">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
