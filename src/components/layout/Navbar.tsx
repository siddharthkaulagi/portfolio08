"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
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

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-background/80 dark:bg-[#020617]/80 backdrop-blur-md border-border dark:border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter uppercase group">
                    <span className="text-foreground group-hover:text-cyan-400 transition-colors">Siddharth</span>
                    <span className="text-orange-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/70 dark:text-slate-300 hover:text-foreground dark:hover:text-white relative group overflow-hidden"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <ThemeToggle />
                    <div className="w-px h-6 bg-slate-800 mx-2" />
                    <a
                        href="https://github.com/siddharthkaulagi/my-project-files"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground dark:text-slate-400 hover:text-foreground dark:hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground dark:text-slate-400 hover:text-blue-400 transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background dark:bg-[#020617] border-b border-border dark:border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-foreground/80 dark:text-slate-300 hover:text-foreground dark:hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-4 pt-4 border-t border-border dark:border-white/10">
                                <a
                                    href="https://github.com/siddharthkaulagi/my-project-files"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground dark:text-slate-400 hover:text-foreground dark:hover:text-white"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground dark:text-slate-400 hover:text-blue-400"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <div className="pl-4 border-l border-white/10">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
