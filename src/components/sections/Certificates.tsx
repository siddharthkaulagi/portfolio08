"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, Calendar, ExternalLink, Building2, ShieldCheck, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const certificates = [
    {
        title: "Lean Six Sigma White Belt",
        fullName: "Lean Six Sigma White Belt Certification",
        issuer: "Six Sigma Council",
        date: "Apr 2026",
        image: "/certificates/lean-six-sigma.png",
        description: "Certified in Lean Six Sigma methodologies, focusing on process improvement, waste reduction, and operational efficiency.",
        tags: ["Six Sigma", "Operations", "Lean"],
        link: "https://drive.google.com/file/d/1daBqPaVrRpSiWnuryYpndtuRmSFQ3_1M/view?usp=sharing",
        status: "Verified",
        glowColor: "rgba(6, 182, 212, 0.15)"
    },
    {
        title: "Data Visualisation",
        fullName: "Empowering Business with Effective Insights",
        issuer: "Tata Group",
        date: "Jan 2026",
        image: "/certificates/tata-data-visualisation.png",
        description: "Completed practical tasks in Framing the Business Scenario, Choosing Visuals, and Communicating Insights.",
        tags: ["Data Vis", "Insights", "Comm"],
        link: "https://drive.google.com/file/d/1zbapiP-Um0fpoRwEfpWtstppRY-qKFgf/view?usp=drive_link",
        status: "Verified",
        glowColor: "rgba(6, 182, 212, 0.15)"
    },
    {
        title: "Operations Simulation",
        fullName: "Operations Job Simulation",
        issuer: "Goldman Sachs",
        date: "Jan 2026",
        image: "/certificates/goldman-sachs-operations.png",
        description: "Completed practical tasks in Foundations of operations and Facilitating ultra-high net worth transactions.",
        tags: ["Ops", "Finance", "CS"],
        link: "https://drive.google.com/file/d/1w6zlVwB0M-0c1axD_nJDzPf3HgAR-D6u/view?usp=drive_link",
        status: "Verified",
        glowColor: "rgba(255, 181, 156, 0.15)"
    },
    {
        title: "Supply Chain Simulation",
        fullName: "Supply Chain Job Simulation",
        issuer: "GE Aerospace",
        date: "Jan 2026",
        image: "/certificates/ge-aerospace-supply-chain.png",
        description: "Tasked in turbofan disassembly requirements and disposition of non-conforming turbine blades.",
        tags: ["SCM", "Aero", "Mfg"],
        link: "https://drive.google.com/file/d/1hLZb5NRx9oMa3Omhv6TCYdxajsVRo617/view?usp=drive_link",
        status: "Verified",
        glowColor: "rgba(255, 95, 31, 0.15)"
    },
    {
        title: "SAP S/4HANA SC",
        fullName: "SAP S/4HANA Supply Chain for Transportation",
        issuer: "SAP",
        date: "Jan 2026",
        image: "/certificates/sap-supply-chain-logistics.png",
        description: "Validate transportation solutions using supported processes, architecture, and flow.",
        tags: ["SAP", "Transport", "Logistics"],
        link: "https://drive.google.com/file/d/1vW4ElA4km79gwgVxTPBS4A2K7b2mxPqS/view?usp=drive_link",
        status: "Verified",
        glowColor: "rgba(16, 185, 129, 0.15)"
    }
];

function CertCard({ cert, index }: { cert: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-200, 200], [8, -8]), { damping: 20, stiffness: 150 });
    const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-8, 8]), { damping: 20, stiffness: 150 });

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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative h-full perspective-[2000px]"
        >
            <div className="relative p-8 rounded-[40px] bg-card dark:bg-[#1c1b1b] border border-black/5 dark:border-white/5 backdrop-blur-xl h-full flex flex-col overflow-hidden shadow-2xl transition-all duration-700">
                <motion.div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: `radial-gradient(circle 350px at ${mouseX.get() + 150}px ${mouseY.get() + 250}px, ${cert.glowColor}, transparent)`,
                        inset: -200
                    }}
                />

                <div className="relative h-60 w-full mb-10 overflow-hidden" style={{ transform: "translateZ(50px)" }}>
                    <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-black/5 dark:border-white/5 shadow-inner">
                        <Image src={cert.image} alt={cert.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute bottom-6 right-6 p-4 rounded-2xl bg-white dark:bg-[#ffb59c] text-black dark:text-[#5c1900] shadow-2xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700"
                        >
                            <ArrowUpRight size={24} />
                        </a>
                    </div>
                </div>

                <div className="space-y-4 relative z-10 flex-grow" style={{ transform: "translateZ(30px)" }}>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-[#131212] border border-black/5 dark:border-white/5 w-fit">
                        <ShieldCheck size={14} className="text-cyan-600 dark:text-[#ffb59c]" />
                        <span className="font-label text-[9px] uppercase tracking-widest font-black text-muted-foreground dark:text-[#e5e2e1]/60">Verified_System</span>
                    </div>

                    <h3 className="font-headline text-2xl font-black text-foreground dark:text-[#e5e2e1] group-hover:text-cyan-600 dark:group-hover:text-[#ffb59c] transition-colors leading-tight uppercase tracking-tighter">
                        {cert.title}
                    </h3>
                    
                    <p className="font-label text-[10px] uppercase tracking-widest font-black text-muted-foreground dark:text-[#e5e2e1]/30">
                        {cert.issuer} // {cert.date}
                    </p>

                    <p className="font-body text-muted-foreground dark:text-[#e5e2e1]/70 leading-relaxed text-sm line-clamp-3">
                        {cert.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {cert.tags.map((tag: any, idx: number) => (
                        <span key={idx} className="font-label text-[9px] uppercase tracking-widest font-black px-4 py-2 bg-slate-50 dark:bg-[#131212] rounded-xl text-muted-foreground dark:text-[#e5e2e1]/40 border border-black/5 dark:border-white/5 group-hover:border-cyan-500/20 dark:group-hover:border-[#ff5f1f]/20 transition-all duration-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function Certificates() {
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
        <section id="certificates" className="relative py-40 bg-background dark:bg-[#131313] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            
            <div className="max-w-[1600px] mx-auto px-6 md:px-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-600 dark:text-[#ffb59c] mb-4 block">Official_Accreditation</label>
                        <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tight text-foreground dark:text-[#e5e2e1] uppercase leading-none">
                            CERTIFI<span className="text-orange-600 dark:text-[#ff5f1f]">CATIONS</span>
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
                        className="flex gap-8 lg:gap-12 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory perspective-[2000px] scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {certificates.map((cert, index) => (
                            <div key={index} className="min-w-[340px] md:min-w-[400px] lg:min-w-[450px] flex-shrink-0 snap-center">
                                <CertCard cert={cert} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
