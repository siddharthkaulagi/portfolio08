"use client";

import { motion } from "framer-motion";

export function AboutBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-15">
            {/* Floating Education Icons */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`edu-${i}`}
                    className="absolute"
                    initial={{ y: "100%", x: `${20 + i * 15}%`, opacity: 0 }}
                    animate={{
                        y: "-20%",
                        opacity: [0, 0.6, 0.6, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                >
                    {i % 3 === 0 && (
                        <div className="w-8 h-8 border-2 border-cyan-400/60 rounded-sm relative">
                            <div className="absolute inset-0 flex items-center justify-center text-cyan-400/60 text-xs font-bold">📚</div>
                        </div>
                    )}
                    {i % 3 === 1 && (
                        <div className="w-8 h-8 border-2 border-orange-400/60 rounded-full relative">
                            <div className="absolute inset-0 flex items-center justify-center text-orange-400/60 text-xs">🎓</div>
                        </div>
                    )}
                    {i % 3 === 2 && (
                        <div className="w-8 h-8 border-2 border-blue-400/60 rounded-sm relative">
                            <div className="absolute inset-0 flex items-center justify-center text-blue-400/60 text-xs">📜</div>
                        </div>
                    )}
                </motion.div>
            ))}

            {/* Knowledge Network */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15%" cy="30%" r="6" fill="rgba(0, 240, 255, 0.4)">
                    <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="85%" cy="70%" r="6" fill="rgba(255, 170, 0, 0.4)">
                    <animate attributeName="r" values="6;10;6" dur="4s" begin="2s" repeatCount="indefinite" />
                </circle>
                <line x1="15%" y1="30%" x2="85%" y2="70%" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" from="0" to="6" dur="1s" repeatCount="indefinite" />
                </line>
            </svg>
        </div>
    );
}
