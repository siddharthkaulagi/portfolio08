"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Menu, X, Github, Linkedin, Hexagon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];

function BorderBeam({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 pointer-events-none rounded-[32px] overflow-hidden p-[1.5px]", className)}>
            {/* Animated Glow Wrapper */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[400%] h-[400%] top-[-150%] left-[-150%] origin-center"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, white 330deg, #94a3b8 345deg, white 355deg, transparent 360deg)"
                    }}
                />
            </div>
            {/* Inner Content Mask */}
            <div className="absolute inset-[1.5px] bg-white dark:bg-[#131212] rounded-[30.5px] shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]" />
        </div>
    );
}

function MagneticIcon({ children, href }: { children: React.ReactNode, href: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useSpring(0, { damping: 12, stiffness: 150 });
    const y = useSpring(0, { damping: 12, stiffness: 150 });

    function handleMouseMove(e: React.MouseEvent) {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((clientX - (left + width / 2)) * 0.4);
        y.set((clientY - (top + height / 2)) * 0.4);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="p-3 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/10 text-muted-foreground dark:text-[#e5e2e1]/40 hover:text-white hover:border-[#ff4d00]/40 transition-all duration-300 shadow-sm"
        >
            {children}
        </motion.a>
    );
}

function DecryptLogoText({ text, isHovered }: { text: string, isHovered: boolean }) {
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
            iteration += 1 / 4;
        }, 40);

        return () => clearInterval(interval);
    }, [isHovered, text]);

    return <span>{displayText}</span>;
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 pt-6",
                isScrolled ? "scale-95" : "scale-100"
            )}
        >
            <div className={cn(
                "max-w-[1440px] mx-auto flex items-center justify-between rounded-[32px] transition-all duration-500 relative overflow-visible",
                isScrolled
                    ? "bg-white/90 dark:bg-[#131212]/95 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] px-10 py-6"
                    : "bg-transparent px-6 py-2"
            )}>
                {/* Visual Glow Layer - Background Bloom */}
                <AnimatePresence>
                    {isScrolled && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-1 bg-white/10 dark:bg-white/5 blur-2xl rounded-[40px] -z-10"
                        />
                    )}
                </AnimatePresence>

                {/* The Silver Border Beam */}
                <AnimatePresence>
                    {isScrolled && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-0"
                        >
                            <BorderBeam />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex items-center gap-4 group relative z-20">
                    <Link
                        href="#hero"
                        className="flex items-center gap-4"
                        onMouseEnter={() => setIsLogoHovered(true)}
                        onMouseLeave={() => setIsLogoHovered(false)}
                    >
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <Hexagon className="absolute inset-0 text-cyan-600 dark:text-[#ff4d00]" size={48} strokeWidth={1.5} />
                            <span className="font-headline font-black text-2xl text-foreground dark:text-white relative z-10">
                                S
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-headline font-black text-2xl tracking-tighter text-foreground dark:text-[#e5e2e1] uppercase">
                                <DecryptLogoText text="Siddharth" isHovered={isLogoHovered} />
                            </span>
                            <span className="font-label text-[9px] uppercase tracking-[0.4em] text-muted-foreground dark:text-[#ff4d00]/60 font-black -mt-1">
                                Core_System
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-12 relative z-20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-label text-[12px] uppercase tracking-[0.3em] font-black text-muted-foreground dark:text-[#e5e2e1]/40 hover:text-foreground dark:hover:text-white transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#ff4d00] group-hover:w-full transition-all duration-500" />
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-8 relative z-20">
                    <ThemeToggle />
                    <div className="flex items-center gap-4">
                        <MagneticIcon href="https://github.com/siddharthkaulagi">
                            <Github size={20} />
                        </MagneticIcon>
                        <MagneticIcon href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/">
                            <Linkedin size={20} />
                        </MagneticIcon>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-4 rounded-2xl bg-white dark:bg-[#201f1f] border border-black/5 dark:border-white/5 text-foreground dark:text-[#e5e2e1] relative z-20"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="lg:hidden absolute top-32 left-6 right-6 bg-white dark:bg-[#1c1b1b] border border-black/5 dark:border-white/10 rounded-[40px] shadow-2xl z-50 p-10"
                    >
                        {/* Mobile Navigation Content */}
                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-headline text-4xl font-black text-foreground dark:text-[#e5e2e1] hover:text-[#ff4d00] transition-colors uppercase tracking-tighter"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between pt-10 border-t border-black/5 dark:border-white/10">
                                <div className="flex items-center gap-4">
                                    <MagneticIcon href="https://github.com/siddharthkaulagi">
                                        <Github size={24} />
                                    </MagneticIcon>
                                    <MagneticIcon href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/">
                                        <Linkedin size={24} />
                                    </MagneticIcon>
                                </div>
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
