"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function SkillsBackground() {
    const [mounted, setMounted] = useState(false);
    const codeSymbols = ['{ }', '< />', '[ ]', '( )', '=>', '&&', '||', '++'];
    const binaryDigits = ['0', '1'];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-10">
            {/* Floating Code Symbols */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={`code-${i}`}
                    className="absolute text-cyan-400/60 font-mono text-lg font-bold"
                    initial={{
                        y: "100%",
                        x: `${Math.random() * 100}%`,
                        opacity: 0
                    }}
                    animate={{
                        y: "-20%",
                        opacity: [0, 0.6, 0.6, 0],
                        x: `${Math.random() * 100}%`
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        delay: i * 1.5,
                        ease: "linear"
                    }}
                >
                    {codeSymbols[i % codeSymbols.length]}
                </motion.div>
            ))}

            {/* Binary Code Rain */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`binary-${i}`}
                    className="absolute flex flex-col space-y-2"
                    style={{ left: `${10 + i * 12}%` }}
                    initial={{ y: "-20%" }}
                    animate={{ y: "120%" }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                >
                    {[...Array(6)].map((_, j) => (
                        <span key={j} className="text-green-400/40 font-mono text-sm">
                            {binaryDigits[Math.floor(Math.random() * 2)]}
                        </span>
                    ))}
                </motion.div>
            ))}

            {/* Tech Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {[...Array(4)].map((_, i) => (
                    <g key={`line-${i}`}>
                        <line
                            x1={`${20 + i * 20}%`}
                            y1="20%"
                            x2={`${30 + i * 20}%`}
                            y2="80%"
                            stroke="rgba(0, 240, 255, 0.2)"
                            strokeWidth="1"
                            strokeDasharray="2,2"
                        >
                            <animate attributeName="stroke-dashoffset" from="0" to="4" dur="2s" repeatCount="indefinite" />
                        </line>
                    </g>
                ))}
            </svg>
        </div>
    );
}
