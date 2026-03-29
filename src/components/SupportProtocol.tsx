"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Sparkles } from "lucide-react";
import Image from "next/image";

export function SupportProtocol() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 77, 0, 1)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-[#ff4d00]/80 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center text-white group"
            >
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Heart size={24} className="group-hover:fill-current transition-all" />
                </motion.div>
                
                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                    Support_Protocol.cmd
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div 
                        className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-xl w-full bg-white dark:bg-[#131212] rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#ff4d00]/20"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 z-30 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
                            >
                                <X size={20} className="text-black/40 dark:text-white/40 hover:text-white" />
                            </button>

                            {/* Manga Panel Image Content */}
                            <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-black overflow-hidden">
                                <Image 
                                    src="/comfort.png" 
                                    alt="Luffy and Squirrel Support" 
                                    fill 
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                />
                                
                                {/* Overlay Labels (Meme Style) */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute left-[55%] top-[60%] px-4 py-1.5 bg-[#ff4d00] text-white font-black text-[12px] rounded-lg shadow-lg rotate-3"
                                >
                                    ME (OPTIMIZING)
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="absolute left-[15%] top-[80%] px-4 py-1.5 bg-emerald-500 text-white font-black text-[10px] rounded-lg shadow-lg -rotate-6"
                                >
                                    A FRIEND / SQUIRREL
                                </motion.div>
                            </div>

                            {/* Message Area */}
                            <div className="p-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-[#ff4d00]/10 text-[#ff4d00]">
                                        <Sparkles size={24} />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#ff4d00]">Mental Support Protocol</span>
                                </div>

                                <h3 className="font-headline text-3xl font-black text-foreground dark:text-white leading-tight">
                                    Take a deep breath, <span className="text-cyan-500 underline decoration-cyan-500/30">Siddharth</span>.
                                </h3>
                                
                                <p className="font-body text-base text-muted-foreground dark:text-[#e5e2e1]/60 leading-relaxed italic">
                                    "Sometimes the system needs to reset. It's not a bug, it's a feature. Keep your spirits up as you optimize the world."
                                </p>

                                <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                                        <span className="text-[8px] uppercase font-black tracking-widest text-[#ff4d00]">Happiness_Level: OPTIMAL</span>
                                    </div>
                                    <button 
                                        onClick={() => setIsOpen(false)}
                                        className="px-6 py-2 bg-black dark:bg-[#ff4d00] text-white rounded-xl font-headline font-black text-xs hover:scale-105 transition-transform"
                                    >
                                        I'm Refueled
                                    </button>
                                </div>
                            </div>

                            {/* Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20 pointer-events-none" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
