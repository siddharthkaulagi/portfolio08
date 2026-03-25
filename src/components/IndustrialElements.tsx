"use client";

import React from "react";
import { motion } from "framer-motion";

function computeGearTeeth(numTeeth: number, innerR: number, outerR: number, cx = 50, cy = 50) {
    const teeth: { x1: string; y1: string; x2: string; y2: string }[] = [];
    const step = 360 / numTeeth;
    for (let i = 0; i < numTeeth; i++) {
        const angle = (i * step * Math.PI) / 180;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        teeth.push({
            x1: (cx + innerR * cos).toFixed(2),
            y1: (cy + innerR * sin).toFixed(2),
            x2: (cx + outerR * cos).toFixed(2),
            y2: (cy + outerR * sin).toFixed(2),
        });
    }
    return teeth;
}

function computeGaugeMarks() {
    const marks: { x1: string; y1: string; x2: string; y2: string }[] = [];
    for (let i = 0; i < 8; i++) {
        const angle = ((-135 + i * 33.75) * Math.PI) / 180;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        marks.push({
            x1: (50 + 35 * cos).toFixed(2),
            y1: (50 + 35 * sin).toFixed(2),
            x2: (50 + 40 * cos).toFixed(2),
            y2: (50 + 40 * sin).toFixed(2),
        });
    }
    return marks;
}

const GEAR1_TEETH = computeGearTeeth(12, 38, 46);
const GEAR2_TEETH = computeGearTeeth(10, 35, 44);
const GEAR3_TEETH = computeGearTeeth(16, 37, 46);
const GEAR4_TEETH = computeGearTeeth(10, 35, 44);
const GAUGE_MARKS = computeGaugeMarks();

export function IndustrialElements() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
            {/* Interlocking Gear System - Top Left */}
            <div className="absolute top-[6%] left-[2%]">
                <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-500/20 dark:bg-[#ffb59c]/5 blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: 100, height: 100, top: -5, left: -5 }}
                />
                <svg width="90" height="90" viewBox="0 0 100 100" className="gear-spin shadow-cyan-500/10 opacity-[0.18] dark:opacity-[0.12]">
                    <g fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600 dark:text-[#ffb59c]">
                        {GEAR1_TEETH.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="6" strokeLinecap="round" />
                        ))}
                        <circle cx="50" cy="50" r="35" />
                        <circle cx="50" cy="50" r="15" />
                    </g>
                </svg>
            </div>

            {/* Meshed Gear 2 */}
            <div className="absolute top-[13%] left-[8%]">
                <svg width="60" height="60" viewBox="0 0 100 100" className="gear-spin-reverse opacity-[0.15] dark:opacity-[0.10]">
                    <g fill="none" stroke="currentColor" strokeWidth="2.5" className="text-orange-500 dark:text-[#ff5f1f]">
                        {GEAR2_TEETH.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="6" strokeLinecap="round" />
                        ))}
                        <circle cx="50" cy="50" r="30" />
                    </g>
                </svg>
            </div>

            {/* Large Gear - Bottom Right */}
            <div className="absolute bottom-[10%] right-[3%]">
                <svg width="120" height="120" viewBox="0 0 100 100" className="gear-spin opacity-[0.15] dark:opacity-[0.09]" style={{ animationDuration: "18s" }}>
                    <g fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-600 dark:text-[#ffb59c]">
                        {GEAR3_TEETH.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="5" strokeLinecap="round" />
                        ))}
                        <circle cx="50" cy="50" r="34" />
                        <circle cx="50" cy="50" r="18" />
                    </g>
                </svg>
            </div>

            {/* Robotic Arm - Right */}
            <motion.div
                className="absolute top-[32%] right-[4%] opacity-[0.20] dark:opacity-[0.12]"
                animate={{ rotate: [0, -20, 8, -15, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "bottom center" }}
            >
                <div className="flex flex-col items-center">
                    <div className="w-3.5 h-32 bg-gradient-to-b from-cyan-400 to-cyan-700 rounded-full" />
                    <motion.div 
                        className="w-16 h-3 bg-slate-400 dark:bg-[#353534] rounded-t-sm mt-1"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                    />
                </div>
            </motion.div>

            {/* Data Stream - Right Edge */}
            <svg className="absolute top-[25%] right-0 w-20 h-[45%] opacity-[0.12] dark:opacity-[0.07]" viewBox="0 0 80 350">
                <path d="M70 0 L70 60 L35 95 L35 160 L70 195 L70 260 L35 295 L35 350" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500 dark:text-[#ffb59c]" strokeDasharray="8 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
                </path>
                <circle r="3" className="fill-cyan-400 dark:fill-[#ff5f1f]">
                    <animateMotion path="M70 0 L70 60 L35 95 L35 160 L70 195 L70 260 L35 295 L35 350" dur="4s" repeatCount="indefinite" />
                </circle>
            </svg>

            {/* Network Cluster - Top Center */}
            <motion.div className="absolute top-[4%] left-[42%] opacity-[0.12] dark:opacity-[0.07]" animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity }}>
                <svg width="70" height="70" viewBox="0 0 70 70" className="text-cyan-600 dark:text-[#ffb59c]">
                    <line x1="15" y1="15" x2="50" y2="25" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="15" cy="15" r="5" fill="currentColor" />
                    <circle cx="50" cy="25" r="4" fill="currentColor" />
                    <circle cx="55" cy="55" r="5" fill="currentColor" />
                </svg>
            </motion.div>
        </div>
    );
}
