"use client";

import { motion } from "framer-motion";

export function ContactBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-10">
            {/* Flying Email Envelopes */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`email-${i}`}
                    className="absolute"
                    initial={{
                        x: "-10%",
                        y: `${20 + i * 20}%`,
                        rotate: -15
                    }}
                    animate={{
                        x: "110%",
                        y: `${20 + i * 20 + Math.sin(i) * 10}%`,
                        rotate: 15
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        delay: i * 3,
                        ease: "linear"
                    }}
                >
                    <div className="w-10 h-7 border-2 border-cyan-400/50 bg-cyan-500/10 rounded relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyan-400/50" />
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Message Bubbles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`bubble-${i}`}
                    className="absolute"
                    initial={{
                        y: "100%",
                        x: `${10 + i * 20}%`,
                        opacity: 0
                    }}
                    animate={{
                        y: "-20%",
                        opacity: [0, 0.6, 0.6, 0]
                    }}
                    transition={{
                        duration: 12 + i * 2,
                        repeat: Infinity,
                        delay: i * 2.5,
                        ease: "linear"
                    }}
                >
                    <div className="w-12 h-8 border-2 border-orange-400/50 bg-orange-500/10 rounded-2xl rounded-bl-none relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60" />
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60" />
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Network Pulses */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="5" fill="rgba(0, 240, 255, 0.5)">
                    <animate attributeName="r" values="5;60;5" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="50%" cy="50%" r="5" fill="rgba(0, 240, 255, 0.5)">
                    <animate attributeName="r" values="5;60;5" dur="4s" begin="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" begin="2s" repeatCount="indefinite" />
                </circle>
            </svg>

            {/* Connection Indicators */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`signal-${i}`}
                    className="absolute top-1/4 right-1/4"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.7
                    }}
                >
                    <div className={`w-${2 + i * 2} h-${2 + i * 2} rounded-full border-2 border-cyan-400/40`} />
                </motion.div>
            ))}
        </div>
    );
}
