"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export function MouseEffect() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [trail, setTrail] = useState<{ x: number; y: number; id: number; color: string }[]>([]);
    const [isHovering, setIsHovering] = useState(false);

    // Smooth physics for the global glow
    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        let count = 0;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Check if hovering over an interactive element
            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, [role="button"], input, textarea');
            setIsHovering(!!interactive);

            // Add to trail every few pixels to avoid performance issues
            if (count % 3 === 0) {
                setTrail((prev) => [
                    ...prev.slice(-20), // Keep last 20 lightning bolts
                    { 
                        x: e.clientX, 
                        y: e.clientY, 
                        id: Date.now(),
                        color: interactive ? "text-[#ff5f1f]" : "text-cyan-500" 
                    }
                ]);
            }
            count++;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Dynamic Background Spotlight */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: isHovering 
                        ? "radial-gradient(circle, rgba(255, 95, 31, 0.1) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)"
                }}
            />

            {/* Lightning Trail */}
            <AnimatePresence>
                {trail.map((point) => (
                    <motion.div
                        key={point.id}
                        initial={{ opacity: 1, scale: 0.2, rotate: Math.random() * 360 }}
                        animate={{ 
                            opacity: 0, 
                            scale: isHovering ? 2 : 1.2, 
                            rotate: (Math.random() * 360) + 45,
                            y: point.y + (Math.random() - 0.5) * 50
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className={`absolute ${point.color} dark:${point.color} filter drop-shadow-[0_0_8px_currentColor]`}
                        style={{
                            left: point.x,
                            top: point.y,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    >
                        <Zap size={14} fill="currentColor" />
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Main Interactive Lightning Cursor */}
            <motion.div
                className="absolute flex items-center justify-center"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    animate={{ 
                        scale: isHovering ? [1, 1.5, 1.2] : [1, 1.1, 1],
                        rotate: isHovering ? [0, 10, -10, 0] : 0
                    }}
                    transition={{ 
                        duration: 0.5, 
                        repeat: isHovering ? Infinity : 0,
                        repeatType: "reverse"
                    }}
                >
                    <Zap 
                        size={isHovering ? 48 : 32} 
                        className={cn(
                            "transition-colors duration-500 stroke-2",
                            isHovering 
                                ? "text-[#ff5f1f] fill-[#ff5f1f] drop-shadow-[0_0_15px_#ff5f1f]" 
                                : "text-cyan-500 fill-cyan-500 drop-shadow-[0_0_10px_#06b6d4]"
                        )} 
                    />
                    
                    {/* Electric Arc Secondary Glow */}
                    {isHovering && (
                        <motion.div 
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 0.1, repeat: Infinity }}
                            className="absolute inset-0 bg-white/30 blur-md rounded-full"
                        />
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}

// Utility for classes (since I'm using cn in the code)
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
