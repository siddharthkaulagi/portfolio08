"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
    Factory, LineChart, Terminal, Truck, Users2, 
    Settings, Activity, Layers, BarChart3, Database, 
    Code, Cpu, Boxes, Layout, Binary, Globe, 
    Workflow, ShieldCheck, Box, MessageSquare, 
    ClipboardList, Zap, Clock, Users, Search,
    Package, Ship, FileText, UserPlus, ChevronLeft, ChevronRight
} from "lucide-react";
import { SkillsBackground } from "@/components/SkillsBackground";

const skillCategories = [
    {
        title: "Industrial Engineering",
        icon: Factory,
        description: "Optimizing the physical world through engineering principles and lean methodologies.",
        skills: [
            { name: "Supply Chain", icon: Workflow },
            { name: "Materials & Inventory", icon: Boxes },
            { name: "Process Optimization", icon: Activity },
            { name: "Lean & Operations", icon: Layers },
            { name: "Quality Assurance", icon: ShieldCheck },
            { name: "Project Management", icon: ClipboardList },
            { name: "Production Planning", icon: Factory },
            { name: "Value Engineering", icon: Zap },
            { name: "Operations Management", icon: Settings }
        ],
        accent: "from-orange-500/10 to-transparent",
        glowColor: "rgba(255, 95, 31, 0.15)",
        iconColor: "text-orange-600 dark:text-[#ffb59c]"
    },
    {
        title: "Decision Support",
        icon: LineChart,
        description: "Turning raw data into strategic intelligence and actionable forecasts.",
        skills: [
            { name: "Data Analysis", icon: Search },
            { name: "Statistics", icon: Binary },
            { name: "Operations Research", icon: Database },
            { name: "Forecasting", icon: LineChart },
            { name: "Dashboarding", icon: BarChart3 },
            { name: "Decision Support", icon: Settings },
            { name: "Data Visualization", icon: Layout },
            { name: "Demand Planning", icon: LineChart },
            { name: "KPI Analysis", icon: Activity }
        ],
        accent: "from-cyan-500/10 to-transparent",
        glowColor: "rgba(6, 182, 212, 0.15)",
        iconColor: "text-cyan-600 dark:text-cyan-400"
    },
    {
        title: "Tools & Software",
        icon: Terminal,
        description: "Technical stack for simulation, modeling, and data-driven decision engines.",
        skills: [
            { name: "MS Excel", icon: FileText },
            { name: "SQL (Basic)", icon: Code },
            { name: "Power BI", icon: Layers },
            { name: "Arena Simulation", icon: Cpu },
            { name: "SolidWorks", icon: Box },
            { name: "ERP Systems", icon: Globe },
            { name: "GitHub", icon: Terminal }
        ],
        accent: "from-blue-500/10 to-transparent",
        glowColor: "rgba(255, 181, 156, 0.15)",
        iconColor: "text-blue-600 dark:text-[#ffb59c]"
    },
    {
        title: "Procurement Ops",
        icon: Truck,
        description: "Managing the flow of goods and services with precision and strategic oversight.",
        skills: [
            { name: "Procurement Cycle", icon: Clock },
            { name: "Vendor Management", icon: UserPlus },
            { name: "Invoice Processing", icon: ClipboardList },
            { name: "Indirect Procurement", icon: Package },
            { name: "Stakeholder Mgmt", icon: Users },
            { name: "Supplier Onboarding", icon: Ship },
            { name: "Supply Chain Management", icon: Workflow },
            { name: "Distribution Operations", icon: Truck },
            { name: "Inventory Management", icon: Boxes },
            { name: "Logistics Optimization", icon: Activity }
        ],
        accent: "from-emerald-500/10 to-transparent",
        glowColor: "rgba(16, 185, 129, 0.15)",
        iconColor: "text-emerald-600 dark:text-emerald-400"
    }
];

function DecryptText({ text, isHovered }: { text: string, isHovered: boolean }) {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

    useEffect(() => {
        if (!isHovered) {
            setDisplayText(text);
            return;
        }

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text.split("")
                    .map((char, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 2;
        }, 30);

        return () => clearInterval(interval);
    }, [isHovered, text]);

    return <span>{displayText}</span>;
}

function InteractiveCard({ category, index }: { category: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-200, 200], [3.5, -3.5]), { damping: 25, stiffness: 150 });
    const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-3.5, 3.5]), { damping: 25, stiffness: 150 });

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
            style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className={`relative p-10 rounded-[40px] bg-white dark:bg-[#1c1b1b] border border-black/5 dark:border-white/5 backdrop-blur-xl h-full flex flex-col overflow-hidden shadow-2xl transition-all duration-700 group-hover:dark:bg-[#212020] group-hover:border-white/10`}>
                {/* Magnetic Glow Mask */}
                <motion.div 
                    className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: `radial-gradient(circle 400px at ${mouseX.get() + 200}px ${mouseY.get() + 300}px, ${category.glowColor}, transparent)`,
                        inset: -200
                    }}
                />

                <div className="flex items-center gap-6 mb-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div className="p-5 rounded-3xl bg-slate-50 dark:bg-[#201f1f] border border-black/5 dark:border-white/5 shadow-inner group-hover:rotate-[5deg] transition-transform duration-500">
                        <category.icon className={category.iconColor} size={32} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-headline text-3xl font-black text-foreground dark:text-[#e5e2e1] uppercase tracking-tighter leading-none mb-1">
                            {category.title}
                        </h3>
                        <p className="font-label text-[10px] uppercase tracking-widest text-muted-foreground dark:text-[#e5e2e1]/40 font-bold">
                            Module_{index + 1} // Sync
                        </p>
                    </div>
                </div>

                <p className="font-body text-muted-foreground dark:text-[#e5e2e1]/60 text-lg mb-10 leading-relaxed font-medium relative z-10" style={{ transform: "translateZ(15px)" }}>
                    {category.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {category.skills.map((skill: any, idx: number) => {
                        const [isSkillHovered, setIsSkillHovered] = useState(false);
                        return (
                            <motion.div 
                                key={idx}
                                onMouseEnter={() => setIsSkillHovered(true)}
                                onMouseLeave={() => setIsSkillHovered(false)}
                                className="group/skill relative flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#131212] border border-transparent hover:border-cyan-500/20 dark:hover:border-[#ff5f1f]/20 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 dark:via-[#ff5f1f]/5 to-cyan-500/0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700" />
                                
                                <div className="p-2.5 rounded-xl bg-white dark:bg-[#1c1b1b] text-muted-foreground dark:text-[#e5e2e1]/40 group-hover/skill:text-cyan-600 dark:group-hover/skill:text-[#ffb59c] group-hover/skill:scale-110 transition-all z-10">
                                    <skill.icon size={18} strokeWidth={2} />
                                </div>
                                <span className="font-headline font-bold text-sm text-foreground dark:text-[#e5e2e1] group-hover/skill:text-cyan-600 dark:group-hover/skill:text-[#ffb59c] transition-colors z-10">
                                    <DecryptText text={skill.name} isHovered={isSkillHovered} />
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}

export function Skills() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Auto-scroll Speed Control Variable (pixels per frame)
    const SCROLL_SPEED = 0.5;

    useEffect(() => {
        let animationId: number;
        
        const autoScroll = () => {
            if (scrollRef.current && !isHovered) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                // If we haven't reached the end, keep scrolling
                if (scrollLeft + clientWidth < scrollWidth - 1) {
                    scrollRef.current.scrollLeft += SCROLL_SPEED;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationId);
    }, [isHovered, SCROLL_SPEED]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="skills" className="relative py-40 bg-background dark:bg-[#131313] overflow-hidden">
            <SkillsBackground />
            
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-600 dark:text-[#ffb59c] mb-4 block">Industrial_Intelligence</label>
                        <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tight text-foreground dark:text-[#e5e2e1] uppercase leading-none">
                            CORE <span className="text-orange-600 dark:text-[#ff5f1f]">MATRIX</span>
                        </h2>
                    </motion.div>
                </div>

                <div 
                    className="relative group/carousel -mx-6 px-6 md:-mx-20 md:px-20"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons */}
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-slate-900/80 dark:bg-white/10 backdrop-blur-xl border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-cyan-600 dark:hover:bg-[#ffb59c] hover:scale-110 shadow-2xl hidden md:flex cursor-pointer"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-slate-900/80 dark:bg-white/10 backdrop-blur-xl border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-cyan-600 dark:hover:bg-[#ffb59c] hover:scale-110 shadow-2xl hidden md:flex cursor-pointer"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Carousel Container */}
                    <div 
                        ref={scrollRef}
                        className="flex gap-8 lg:gap-12 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory perspective-[2000px] scrollbar-hide items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {skillCategories.map((category, index) => (
                            <div key={index} className="min-w-[340px] md:min-w-[450px] lg:min-w-[500px] flex-shrink-0 snap-center">
                                <InteractiveCard category={category} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
