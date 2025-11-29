"use client";

import { motion } from "framer-motion";

export function ProjectsBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-10">
            {/* Git Commits Flowing */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`commit-${i}`}
                    className="absolute"
                    initial={{ x: "-10%", y: `${30 + i * 10}%` }}
                    animate={{ x: "110%" }}
                    transition={{
                        duration: 20 + i * 3,
                        repeat: Infinity,
                        delay: i * 4,
                        ease: "linear"
                    }}
                >
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-400/60 border border-green-300/40" />
                        <div className="w-16 h-1 bg-cyan-400/40" />
                        <div className="w-3 h-3 rounded-full bg-cyan-400/60 border border-cyan-300/40" />
                    </div>
                </motion.div>
            ))}

            {/* Deployment Rockets */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`rocket-${i}`}
                    className="absolute text-2xl"
                    initial={{
                        y: "100%",
                        x: `${25 + i * 25}%`,
                        rotate: -45
                    }}
                    animate={{
                        y: "-20%",
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 6,
                        ease: "easeInOut"
                    }}
                >
                    <div className="relative">
                        <div className="text-orange-400/60">🚀</div>
                        <motion.div
                            className="absolute top-6 left-0 w-1 h-8 bg-gradient-to-b from-orange-400/60 to-transparent"
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            ))}

            {/* Code Review Checkmarks */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`check-${i}`}
                    className="absolute w-6 h-6 border-2 border-green-400/50 rounded-full flex items-center justify-center"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 2) * 50}%`
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                >
                    <span className="text-green-400/60 text-sm">✓</span>
                </motion.div>
            ))}
        </div>
    );
}
