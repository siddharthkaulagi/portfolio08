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
    { name: "Experience", href: "#experience", short: "Exp" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certs", href: "#certificates", short: "Certs" },
    { name: "Reality", href: "#reality" },
    { name: "Terminal", href: "#terminal", isSpecial: true },
    { name: "Contact", href: "#contact" },
];

function BorderBeam({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 pointer-events-none rounded-[32px] overflow-hidden p-[1.5px]", className)}>
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
            <div className="absolute inset-[1.5px] bg-white dark:bg-[#131212] rounded-[30.5px] shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]" />
        </div>
    );
}

function SocialLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10 text-muted-foreground dark:text-[#e5e2e1]/50 hover:text-white hover:border-[#ff4d00]/40 transition-colors shrink-0"
        >
            {children}
        </a>
    );
}

function MagneticIcon({ children, href }: { children: React.ReactNode; href: string }) {
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

function DecryptLogoText({ text, isHovered }: { text: string; isHovered: boolean }) {
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

export function Navbar({ onTerminalClick }: { onTerminalClick?: () => void }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 pt-4 sm:pt-6",
                isScrolled ? "scale-[0.98]" : "scale-100"
            )}
        >
            <div
                className={cn(
                    "max-w-[1440px] mx-auto flex items-center w-full min-w-0 gap-2 sm:gap-3 rounded-[32px] transition-all duration-500 relative",
                    isScrolled
                        ? "bg-white/90 dark:bg-[#131212]/95 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] px-5 sm:px-8 py-4 sm:py-5 overflow-hidden"
                        : "bg-transparent px-3 sm:px-5 py-2 overflow-visible"
                )}
            >
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

                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-20 min-w-0">
                    <Link
                        href="#hero"
                        className="flex items-center gap-2 sm:gap-3 min-w-0"
                        onMouseEnter={() => setIsLogoHovered(true)}
                        onMouseLeave={() => setIsLogoHovered(false)}
                    >
                        <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                            <Hexagon className="absolute inset-0 text-cyan-600 dark:text-[#ff4d00] w-full h-full" strokeWidth={1.5} />
                            <span className="font-headline font-black text-lg sm:text-xl text-foreground dark:text-white relative z-10">
                                S
                            </span>
                        </div>
                        <div className="flex flex-col min-w-0 hidden sm:flex">
                            <span className="font-headline font-black text-lg xl:text-xl tracking-tighter text-foreground dark:text-[#e5e2e1] uppercase truncate">
                                <DecryptLogoText text="Siddharth" isHovered={isLogoHovered} />
                            </span>
                            <span className="font-label text-[8px] uppercase tracking-[0.35em] text-muted-foreground dark:text-[#ff4d00]/60 font-black -mt-0.5">
                                Core_System
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop nav — centered, compact */}
                <div className="hidden xl:flex flex-1 min-w-0 items-center justify-center relative z-20 px-2 sm:px-4">
                    <div className="flex items-center justify-center gap-2 xl:gap-1 2xl:gap-0 max-w-full">
                        {navLinks.map((link, index) => (
                            <React.Fragment key={link.name}>
                            {index > 0 && (
                                <span
                                    className="hidden 2xl:block w-px h-3 bg-black/10 dark:bg-white/10 shrink-0"
                                    aria-hidden
                                />
                            )}
                            <button
                                type="button"
                                onClick={(e) => {
                                    if (link.name === "Terminal") {
                                        e.preventDefault();
                                        onTerminalClick?.();
                                    }
                                }}
                                className="relative group shrink-0"
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "inline-block px-2.5 xl:px-3.5 2xl:px-4 py-1.5 font-label text-[10px] 2xl:text-[11px] uppercase tracking-[0.14em] 2xl:tracking-[0.22em] font-black transition-all whitespace-nowrap",
                                        "text-cyan-600 dark:text-[#ff4d00] hover:text-cyan-500 dark:hover:text-[#ff8c00]"
                                    )}
                                >
                                    <span className="2xl:hidden">{link.short ?? link.name}</span>
                                    <span className="hidden 2xl:inline">{link.name === "Certs" ? "Certificates" : link.name}</span>
                                    <span
                                        className={cn(
                                            "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 bg-cyan-600 dark:bg-[#ff4d00]",
                                            "group-hover:w-full"
                                        )}
                                    />
                                </Link>
                            </button>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Actions — always inside the bar (no magnetic offset) */}
                <div className="hidden xl:flex items-center gap-3 shrink-0 relative z-20 pl-4 sm:pl-5 ml-2 border-l border-black/10 dark:border-white/10">
                    <ThemeToggle />
                    <SocialLink href="https://github.com/siddharthkaulagi" label="GitHub">
                        <Github size={18} />
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/" label="LinkedIn">
                        <Linkedin size={18} />
                    </SocialLink>
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    className="xl:hidden p-3 rounded-2xl bg-white dark:bg-[#201f1f] border border-black/5 dark:border-white/5 text-foreground dark:text-[#e5e2e1] relative z-20 ml-auto shrink-0"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="xl:hidden absolute top-[calc(100%-0.5rem)] left-4 right-4 sm:left-6 sm:right-6 bg-white dark:bg-[#1c1b1b] border border-black/5 dark:border-white/10 rounded-[40px] shadow-2xl z-50 p-8 sm:p-10 mt-2"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={(e) => {
                                        if (link.name === "Terminal") {
                                            e.preventDefault();
                                            onTerminalClick?.();
                                        }
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="text-left"
                                >
                                    <Link
                                        href={link.href}
                                        className="font-headline text-3xl sm:text-4xl font-black uppercase tracking-tighter text-cyan-600 dark:text-[#ff4d00] hover:text-cyan-500 dark:hover:text-[#ff8c00]"
                                    >
                                        {link.name === "Certs" ? "Certificates" : link.name}
                                    </Link>
                                </button>
                            ))}
                            <div className="flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/10">
                                <div className="flex items-center gap-3">
                                    <MagneticIcon href="https://github.com/siddharthkaulagi">
                                        <Github size={22} />
                                    </MagneticIcon>
                                    <MagneticIcon href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/">
                                        <Linkedin size={22} />
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
