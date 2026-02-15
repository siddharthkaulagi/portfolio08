"use client";

import React from "react";
import { motion } from "framer-motion";

// Pre-compute gear coordinates as strings to avoid SSR hydration mismatches
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

/**
 * Global floating industrial motion-graphics overlay.
 * High-energy animated elements: gears, robotic arms, pistons,
 * conveyor belts, data streams, and particle flows.
 */
export function IndustrialElements() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">

            {/* ═══════════════════════════════════════════
                INTERLOCKING GEAR SYSTEM — Top-Left
            ═══════════════════════════════════════════ */}
            <div className="absolute top-[6%] left-[2%]">
                {/* Gear glow pulse */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: 100, height: 100, top: -5, left: -5 }}
                />
                <svg
                    width="90"
                    height="90"
                    viewBox="0 0 100 100"
                    className="gear-spin opacity-[0.18] dark:opacity-[0.12]"
                >
                    <g fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-500">
                        {GEAR1_TEETH.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="6" strokeLinecap="round" />
                        ))}
                        <circle cx="50" cy="50" r="35" />
                        <circle cx="50" cy="50" r="15" />
                        <circle cx="50" cy="50" r="5" fill="currentColor" />
                    </g>
                </svg>
            </div>

            {/* Meshed Gear 2 */}
            <div className="absolute top-[13%] left-[8%]">
                <motion.div
                    className="absolute inset-0 rounded-full bg-orange-500/15 blur-lg"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    style={{ width: 70, height: 70, top: -5, left: -5 }}
                />
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 100 100"
                    className="gear-spin-reverse opacity-[0.15] dark:opacity-[0.10]"
                >
                    <g fill="none" stroke="currentColor" strokeWidth="2.5" className="text-orange-500">
                        {GEAR2_TEETH.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="6" strokeLinecap="round" />
                        ))}
                        <circle cx="50" cy="50" r="30" />
                        <circle cx="50" cy="50" r="10" />
                        <circle cx="50" cy="50" r="4" fill="currentColor" />
                    </g>
                </svg>
            </div>

            {/* ═══════════════════════════════════════════
                LARGE GEAR SYSTEM — Bottom-Right
            ═══════════════════════════════════════════ */}
            <div className="absolute bottom-[10%] right-[3%]">
                <motion.div
                    className="absolute rounded-full bg-blue-500/15 blur-2xl"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: 140, height: 140, top: -10, left: -10 }}
                />
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    className="gear-spin opacity-[0.15] dark:opacity-[0.09]"
                    style={{ animationDuration: "18s" }}
                >
                    <g fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                        {GEAR3_TEETH.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="5" strokeLinecap="round" />
                        ))}
                        <circle cx="50" cy="50" r="34" />
                        <circle cx="50" cy="50" r="18" />
                        <circle cx="50" cy="50" r="6" fill="currentColor" />
                    </g>
                </svg>
            </div>

            {/* Meshed gear — bottom-right */}
            <div className="absolute bottom-[22%] right-[11%]">
                <svg
                    width="70"
                    height="70"
                    viewBox="0 0 100 100"
                    className="gear-spin-reverse opacity-[0.13] dark:opacity-[0.08]"
                    style={{ animationDuration: "12s" }}
                >
                    <g fill="none" stroke="currentColor" strokeWidth="2.5" className="text-purple-500">
                        {GEAR4_TEETH.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="5" strokeLinecap="round" />
                        ))}
                        <circle cx="50" cy="50" r="30" />
                        <circle cx="50" cy="50" r="12" />
                        <circle cx="50" cy="50" r="4" fill="currentColor" />
                    </g>
                </svg>
            </div>

            {/* ═══════════════════════════════════════════
                ROBOTIC ARM 1 — Right Side (Full Motion)
            ═══════════════════════════════════════════ */}
            <motion.div
                className="absolute top-[32%] right-[4%] opacity-[0.20] dark:opacity-[0.12]"
                animate={{ rotate: [0, -20, 8, -15, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "bottom center" }}
            >
                <div className="flex flex-col items-center">
                    <div className="relative">
                        {/* Upper arm glow */}
                        <motion.div
                            className="absolute -inset-1 bg-cyan-400/20 blur-md rounded-full"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="w-3.5 h-32 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
                        {/* Joint — glowing */}
                        <motion.div
                            className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-cyan-400 bg-slate-900/60 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                            animate={{ boxShadow: ["0 0 8px rgba(6,182,212,0.3)", "0 0 20px rgba(6,182,212,0.7)", "0 0 8px rgba(6,182,212,0.3)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                        </motion.div>
                        {/* Forearm — independent swing */}
                        <motion.div
                            className="absolute -top-1 left-1/2 -translate-x-1/2"
                            animate={{ rotate: [0, 35, -20, 30, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transformOrigin: "bottom center" }}
                        >
                            <div className="w-2.5 h-24 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-[0_0_12px_rgba(251,146,60,0.4)] -translate-y-full" />
                            {/* Wrist joint */}
                            <div className="absolute -top-[96px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-orange-400 bg-slate-900/60 shadow-[0_0_10px_rgba(251,146,60,0.4)]">
                                <motion.div
                                    className="w-1.5 h-1.5 rounded-full bg-orange-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                            {/* Gripper — grabbing motion */}
                            <div className="absolute -top-[96px] left-1/2 -translate-x-1/2">
                                <motion.div
                                    className="flex"
                                    animate={{ gap: ["6px", "1px", "6px"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <motion.div
                                        className="w-2 h-7 bg-gradient-to-b from-orange-300 to-orange-500 rounded-sm shadow-[0_0_6px_rgba(251,146,60,0.3)]"
                                        animate={{ rotate: [-15, -5, -15] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="w-2 h-7 bg-gradient-to-b from-orange-300 to-orange-500 rounded-sm shadow-[0_0_6px_rgba(251,146,60,0.3)]"
                                        animate={{ rotate: [15, 5, 15] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </motion.div>
                                {/* Sparks from gripper */}
                                <motion.div
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"
                                    animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: [0, -8, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.2 }}
                                />
                                <motion.div
                                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-yellow-300 rounded-full"
                                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: [0, 6, 0], y: [0, -5, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.5, delay: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                    {/* Base — with status lights */}
                    <div className="relative">
                        <div className="w-16 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-t-sm mt-1 shadow-lg" />
                        <div className="w-20 h-2.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-b-sm" />
                        {/* Status LEDs */}
                        <motion.div
                            className="absolute -top-0.5 left-2 w-1.5 h-1.5 rounded-full bg-green-400"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -top-0.5 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </div>
            </motion.div>

            {/* ═══════════════════════════════════════════
                ROBOTIC ARM 2 — Left Side (Smaller, Faster)
            ═══════════════════════════════════════════ */}
            <motion.div
                className="absolute top-[52%] left-[3%] opacity-[0.17] dark:opacity-[0.10]"
                animate={{ rotate: [0, 18, -12, 20, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "bottom center" }}
            >
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="w-3 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)]" />
                        <motion.div
                            className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border-2 border-blue-400 bg-slate-900/60 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                            animate={{ boxShadow: ["0 0 6px rgba(59,130,246,0.2)", "0 0 16px rgba(59,130,246,0.6)", "0 0 6px rgba(59,130,246,0.2)"] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        </motion.div>
                        <motion.div
                            className="absolute -top-1 left-1/2 -translate-x-1/2"
                            animate={{ rotate: [0, -28, 18, -15, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transformOrigin: "bottom center" }}
                        >
                            <div className="w-2 h-18 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)] -translate-y-full" />
                            <div className="absolute -top-[72px] left-1/2 -translate-x-1/2">
                                <motion.div
                                    className="flex"
                                    animate={{ gap: ["5px", "0px", "5px"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="w-1.5 h-5 bg-purple-400 rounded-sm -rotate-12 shadow-[0_0_4px_rgba(168,85,247,0.3)]" />
                                    <div className="w-1.5 h-5 bg-purple-400 rounded-sm rotate-12 shadow-[0_0_4px_rgba(168,85,247,0.3)]" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-14 h-2.5 bg-gradient-to-r from-slate-500 to-slate-600 rounded-t-sm mt-1" />
                    <div className="w-18 h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-b-sm" />
                </div>
            </motion.div>

            {/* ═══════════════════════════════════════════
                HYDRAULIC PISTONS — Active pumping
            ═══════════════════════════════════════════ */}
            {/* Piston 1 — Right */}
            <div className="absolute top-[65%] right-[7%] opacity-[0.16] dark:opacity-[0.10]">
                <div className="relative">
                    <div className="w-6 h-18 bg-gradient-to-b from-slate-400 to-slate-500 rounded-sm border border-slate-300/40 shadow-lg">
                        <div className="absolute inset-x-0.5 top-0.5 h-3 bg-slate-300/30 rounded-t-sm" />
                        {/* Pressure gauge light */}
                        <motion.div
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                            animate={{ backgroundColor: ["rgb(74,222,128)", "rgb(250,204,21)", "rgb(74,222,128)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, -22, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-2.5 h-14 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-sm -translate-y-10 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                        <div className="w-5 h-2.5 bg-cyan-400 rounded-sm -translate-y-10 -translate-x-[0.3rem] shadow-[0_0_6px_rgba(6,182,212,0.3)]" />
                        {/* Steam / pressure release */}
                        <motion.div
                            className="absolute -top-12 left-1/2 -translate-x-1/2"
                            animate={{ opacity: [0, 0.4, 0], y: [0, -10, -15], scale: [0.5, 1.2, 0.5] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        >
                            <div className="w-3 h-3 bg-white/20 rounded-full blur-sm" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Piston 2 — Left */}
            <div className="absolute bottom-[28%] left-[7%] opacity-[0.14] dark:opacity-[0.08]">
                <div className="relative">
                    <div className="w-5 h-16 bg-gradient-to-b from-slate-400 to-slate-500 rounded-sm border border-slate-300/40 shadow-lg" />
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    >
                        <div className="w-2 h-12 bg-gradient-to-b from-orange-300 to-orange-500 rounded-sm -translate-y-8 shadow-[0_0_8px_rgba(251,146,60,0.4)]" />
                        <div className="w-4 h-2 bg-orange-400 rounded-sm -translate-y-8 -translate-x-[0.25rem]" />
                        <motion.div
                            className="absolute -top-10 left-1/2 -translate-x-1/2"
                            animate={{ opacity: [0, 0.3, 0], y: [0, -8, -12], scale: [0.5, 1, 0.5] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                        >
                            <div className="w-2 h-2 bg-white/15 rounded-full blur-sm" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════
                CONVEYOR BELT — Bottom (Active line with moving boxes)
            ═══════════════════════════════════════════ */}
            <div className="absolute bottom-[2%] left-0 w-full opacity-[0.14] dark:opacity-[0.08]">
                {/* Rollers */}
                <div className="relative h-2">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <motion.div
                            key={`roller-${i}`}
                            className="absolute top-0 w-1 h-2 bg-slate-400 rounded-full"
                            style={{ left: `${i * 3.4}%` }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </div>
                {/* Belt track with motion stripes */}
                <div className="h-1 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent belt-stripe" />
                {/* Moving boxes */}
                <div className="relative h-7">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <motion.div
                            key={`box-${i}`}
                            className="absolute bottom-0 w-7 h-6 rounded-sm border"
                            style={{
                                animation: "conveyor-move 16s linear infinite",
                                animationDelay: `${i * 2}s`,
                                borderColor: i % 2 === 0 ? "rgba(6,182,212,0.5)" : "rgba(251,146,60,0.4)",
                                background: i % 2 === 0
                                    ? "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.05))"
                                    : "linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.05))",
                                boxShadow: i % 2 === 0
                                    ? "0 0 8px rgba(6,182,212,0.2)"
                                    : "0 0 8px rgba(251,146,60,0.2)",
                            }}
                        >
                            {/* Label line on box */}
                            <div className="absolute top-1 left-1 right-1 h-0.5 rounded bg-current opacity-30" />
                            <div className="absolute top-2.5 left-1 w-2 h-0.5 rounded bg-current opacity-20" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ═══════════════════════════════════════════
                DATA STREAM / FLOWING CIRCUIT — Right Edge
            ═══════════════════════════════════════════ */}
            <svg className="absolute top-[25%] right-0 w-20 h-[45%] opacity-[0.12] dark:opacity-[0.07]" viewBox="0 0 80 350">
                {/* Main path */}
                <path
                    d="M70 0 L70 60 L35 95 L35 160 L70 195 L70 260 L35 295 L35 350"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-cyan-400"
                    strokeDasharray="8 4"
                >
                    <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
                </path>
                {/* Glow trail */}
                <path
                    d="M70 0 L70 60 L35 95 L35 160 L70 195 L70 260 L35 295 L35 350"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-cyan-400"
                    opacity="0.15"
                    strokeLinecap="round"
                >
                    <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.5s" repeatCount="indefinite" />
                </path>
                {/* Pulsing nodes */}
                <circle cx="70" cy="60" r="4" className="fill-cyan-400" opacity="0.7">
                    <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="160" r="4" className="fill-cyan-400" opacity="0.7">
                    <animate attributeName="r" values="3;6;3" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="260" r="4" className="fill-cyan-400" opacity="0.7">
                    <animate attributeName="r" values="3;6;3" dur="1.5s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.5s" begin="1s" repeatCount="indefinite" />
                </circle>
                {/* Traveling data packet */}
                <circle r="3" className="fill-cyan-300">
                    <animateMotion
                        path="M70 0 L70 60 L35 95 L35 160 L70 195 L70 260 L35 295 L35 350"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="0.5s" repeatCount="indefinite" />
                </circle>
                <circle r="2" className="fill-white" opacity="0.5">
                    <animateMotion
                        path="M70 0 L70 60 L35 95 L35 160 L70 195 L70 260 L35 295 L35 350"
                        dur="4s"
                        begin="2s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>

            {/* ═══════════════════════════════════════════
                DATA STREAM — Left Edge
            ═══════════════════════════════════════════ */}
            <svg className="absolute top-[40%] left-0 w-16 h-[40%] opacity-[0.12] dark:opacity-[0.07]" viewBox="0 0 60 300">
                <path
                    d="M8 0 L8 50 L30 85 L30 140 L8 175 L8 230 L30 265 L30 300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-orange-400"
                    strokeDasharray="6 4"
                >
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                </path>
                <path
                    d="M8 0 L8 50 L30 85 L30 140 L8 175 L8 230 L30 265 L30 300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="text-orange-400"
                    opacity="0.12"
                />
                <circle cx="30" cy="85" r="3.5" className="fill-orange-400" opacity="0.6">
                    <animate attributeName="r" values="2.5;5;2.5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="8" cy="175" r="3.5" className="fill-orange-400" opacity="0.6">
                    <animate attributeName="r" values="2.5;5;2.5" dur="2s" begin="0.7s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.7s" repeatCount="indefinite" />
                </circle>
                {/* Traveling packet */}
                <circle r="2.5" className="fill-orange-300">
                    <animateMotion
                        path="M8 0 L8 50 L30 85 L30 140 L8 175 L8 230 L30 265 L30 300"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="0.6s" repeatCount="indefinite" />
                </circle>
            </svg>

            {/* ═══════════════════════════════════════════
                FLOATING WRENCH — With rotation & glow
            ═══════════════════════════════════════════ */}
            <motion.div
                className="absolute top-[20%] right-[14%] opacity-[0.14] dark:opacity-[0.08]"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 15, -8, 12, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <motion.div
                    className="absolute inset-0 bg-orange-400/15 blur-lg rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ width: 50, height: 50, top: -5, left: -5 }}
                />
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-400 drop-shadow-[0_0_4px_rgba(251,146,60,0.5)]">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            </motion.div>

            {/* ═══════════════════════════════════════════
                SETTINGS COG — Continuous spin + float
            ═══════════════════════════════════════════ */}
            <motion.div
                className="absolute top-[40%] left-[11%] opacity-[0.13] dark:opacity-[0.07]"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                }}
                transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                }}
            >
                <motion.div
                    className="absolute inset-0 bg-cyan-400/10 blur-lg rounded-full"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.2, 0.05] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ width: 45, height: 45, top: -5, left: -5 }}
                />
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-500 drop-shadow-[0_0_4px_rgba(6,182,212,0.4)]">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            </motion.div>

            {/* ═══════════════════════════════════════════
                ACTIVE GAUGE — With swinging needle
            ═══════════════════════════════════════════ */}
            <motion.div
                className="absolute bottom-[42%] left-[5%] opacity-[0.14] dark:opacity-[0.08]"
                animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <motion.div
                    className="absolute inset-0 bg-emerald-400/10 blur-xl rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.2, 0.05] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ width: 60, height: 60, top: -5, left: -5 }}
                />
                <svg width="55" height="55" viewBox="0 0 100 100" className="text-emerald-500 drop-shadow-[0_0_4px_rgba(52,211,153,0.3)]">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5" />
                    {/* Colored arc — shows "value" */}
                    <circle
                        cx="50" cy="50" r="38"
                        fill="none" stroke="currentColor" strokeWidth="4" opacity="0.3"
                        strokeDasharray="180 240"
                        strokeLinecap="round"
                        transform="rotate(-135 50 50)"
                    >
                        <animate attributeName="stroke-dasharray" values="60 240;180 240;120 240;60 240" dur="4s" repeatCount="indefinite" />
                    </circle>
                    {GAUGE_MARKS.map((m, i) => (
                        <line key={i} x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2} stroke="currentColor" strokeWidth="2" opacity="0.6" />
                    ))}
                    {/* Needle with active sweep */}
                    <motion.line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        animate={{ rotate: [-50, 80, 20, 100, -30, -50] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: "50px 50px" }}
                    />
                    {/* Center hub */}
                    <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.7" />
                    <circle cx="50" cy="50" r="2.5" fill="currentColor" opacity="1" />
                </svg>
            </motion.div>

            {/* ═══════════════════════════════════════════
                FLOATING PARTICLES — Ambient energy
            ═══════════════════════════════════════════ */}
            {[
                { top: "15%", left: "20%", color: "bg-cyan-400", size: "w-1.5 h-1.5", dur: 7, delay: 0 },
                { top: "25%", left: "80%", color: "bg-orange-400", size: "w-1 h-1", dur: 9, delay: 1 },
                { top: "45%", left: "92%", color: "bg-blue-400", size: "w-1.5 h-1.5", dur: 8, delay: 2 },
                { top: "60%", left: "18%", color: "bg-purple-400", size: "w-1 h-1", dur: 10, delay: 0.5 },
                { top: "75%", left: "85%", color: "bg-cyan-300", size: "w-1 h-1", dur: 6, delay: 3 },
                { top: "35%", left: "50%", color: "bg-emerald-400", size: "w-1 h-1", dur: 11, delay: 1.5 },
                { top: "85%", left: "40%", color: "bg-orange-300", size: "w-1.5 h-1.5", dur: 8, delay: 2.5 },
                { top: "10%", left: "65%", color: "bg-blue-300", size: "w-1 h-1", dur: 7, delay: 4 },
            ].map((p, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className={`absolute ${p.size} ${p.color} rounded-full`}
                    style={{ top: p.top, left: p.left }}
                    animate={{
                        y: [0, -30, 0, 20, 0],
                        x: [0, 15, -10, 5, 0],
                        opacity: [0.15, 0.5, 0.2, 0.45, 0.15],
                        scale: [1, 1.5, 1, 1.3, 1],
                    }}
                    transition={{
                        duration: p.dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay,
                    }}
                />
            ))}

            {/* ═══════════════════════════════════════════
                NETWORK / MOLECULE CLUSTER — Top Center  
            ═══════════════════════════════════════════ */}
            <motion.div
                className="absolute top-[4%] left-[42%] opacity-[0.12] dark:opacity-[0.07]"
                animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="70" height="70" viewBox="0 0 70 70" className="text-blue-400 drop-shadow-[0_0_3px_rgba(59,130,246,0.3)]">
                    {/* Edges */}
                    <line x1="15" y1="15" x2="50" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                    <line x1="50" y1="25" x2="55" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                    <line x1="15" y1="15" x2="25" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                    <line x1="25" y1="55" x2="55" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                    {/* Traveling data along edges */}
                    <circle r="1.5" className="fill-blue-300" opacity="0.8">
                        <animateMotion path="M15 15 L50 25 L55 55 L25 55 L15 15" dur="3s" repeatCount="indefinite" />
                    </circle>
                    {/* Nodes */}
                    <circle cx="15" cy="15" r="5" fill="currentColor" opacity="0.5">
                        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="25" r="4" fill="currentColor" opacity="0.4">
                        <animate attributeName="r" values="3;5;3" dur="2s" begin="0.7s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.7s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="55" cy="55" r="5" fill="currentColor" opacity="0.5">
                        <animate attributeName="r" values="4;7;4" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="25" cy="55" r="4" fill="currentColor" opacity="0.4">
                        <animate attributeName="r" values="3;5;3" dur="2s" begin="1.8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="1.8s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </motion.div>
        </div>
    );
}
