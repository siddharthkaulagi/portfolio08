# Background Animations Reference Guide

## Overview
This document contains all background animation code from the portfolio project featuring **blue (cyan #00f0ff) and orange (#ffaa00) fiery color animations**.

---

## 1. Industrial Background - Canvas Particle Animation
**File:** `src/components/IndustrialBackground.tsx`

This is the main component with canvas-based particle animations featuring blue, orange, and cyan colors.

### Key Features:
- **Canvas-based particles** with glow effects
- **Orange (#ffaa00), Cyan (#00f0ff), and Blue** color particles
- **Dynamic particle generation** (80 particles)
- **Glow effects** using `shadowBlur` and `shadowColor`

### Code:
```tsx
"use client";

import React, { useEffect, useRef } from "react";

export function IndustrialBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Material Flow Particles - Enhanced
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            color: string;
            size: number;

            constructor() {
                this.x = -20;
                this.y = Math.random() * canvasHeight;
                this.vx = 0.5 + Math.random() * 1.5;
                this.vy = (Math.random() - 0.5) * 0.5;

                const rand = Math.random();
                if (rand < 0.33) {
                    this.color = "rgba(255, 170, 0, 0.8)"; // Orange - more visible
                } else if (rand < 0.66) {
                    this.color = "rgba(0, 240, 255, 0.8)"; // Cyan - more visible
                } else {
                    this.color = "rgba(59, 130, 246, 0.8)"; // Blue - more visible
                }

                this.size = 3 + Math.random() * 4; // Larger particles
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x > canvasWidth + 20) {
                    this.x = -20;
                    this.y = Math.random() * canvasHeight;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Enhanced glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw(ctx);
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-40">
            <canvas ref={canvasRef} className="absolute inset-0" />
            {/* ... Additional elements below ... */}
        </div>
    );
}
```

---

## 2. Conveyor Belt Animation
**Part of:** `src/components/IndustrialBackground.tsx`

### Moving Boxes on Conveyor Belts

```tsx
{/* Top Conveyor - Cyan */}
<div className="absolute top-[15%] left-0 w-full h-3 bg-gradient-to-r from-transparent via-slate-400/30 to-transparent overflow-hidden">
    <div className="conveyor-line h-full" />
</div>

{/* Moving Boxes on Top Conveyor */}
<div className="absolute top-[12.5%] left-0 w-full">
    {[...Array(6)].map((_, i) => (
        <div
            key={`box-top-${i}`}
            className="absolute w-10 h-10 border-2 border-cyan-400/60 bg-cyan-500/20 rounded shadow-lg"
            style={{
                left: `${i * 20}%`,
                animation: `conveyor-move 15s linear infinite`,
                animationDelay: `${i * 2.5}s`,
            }}
        >
            <div className="absolute inset-1 border border-cyan-400/30" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-300 rounded-full" />
        </div>
    ))}
</div>

{/* Middle Conveyor - Orange */}
<div className="absolute top-[50%] left-0 w-full h-3 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent overflow-hidden">
    <div className="conveyor-line h-full" style={{ animationDuration: '18s' }} />
</div>

{/* Moving Boxes on Middle Conveyor */}
<div className="absolute top-[47.5%] left-0 w-full">
    {[...Array(5)].map((_, i) => (
        <div
            key={`box-mid-${i}`}
            className="absolute w-12 h-12 border-2 border-orange-400/60 bg-orange-500/20 rounded shadow-lg"
            style={{
                left: `${i * 25}%`,
                animation: `conveyor-move 18s linear infinite`,
                animationDelay: `${i * 3.6}s`,
            }}
        >
            <div className="absolute inset-1 border border-orange-400/30" />
        </div>
    ))}
</div>

{/* Bottom Conveyor - Blue */}
<div className="absolute bottom-[20%] left-0 w-full h-3 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent overflow-hidden">
    <div className="conveyor-line h-full" style={{ animationDuration: '22s' }} />
</div>
```

---

## 3. Robotic Assembly Arms Animation
**Part of:** `src/components/IndustrialBackground.tsx`

### Rotating Robot Arms with Orange & Cyan Colors

```tsx
{/* Robotic Assembly Arms - More Visible */}
<div className="absolute right-[10%] top-[30%]">
    <div className="robot-arm w-40 h-4 bg-gradient-to-r from-cyan-500/40 to-cyan-400/50 rounded-full shadow-lg border border-cyan-300/30">
        <div className="absolute right-0 w-28 h-4 bg-gradient-to-r from-orange-500/40 to-orange-400/50 rounded-full origin-left robot-arm-2 border border-orange-300/30 shadow-lg" />
    </div>
</div>

<div className="absolute left-[15%] top-[60%]">
    <div className="robot-arm w-36 h-4 bg-gradient-to-r from-blue-500/40 to-blue-400/50 rounded-full shadow-lg border border-blue-300/30" style={{ animationDelay: '1.5s' }}>
        <div className="absolute right-0 w-24 h-4 bg-gradient-to-r from-purple-500/40 to-purple-400/50 rounded-full origin-left robot-arm-2 border border-purple-300/30 shadow-lg" style={{ animationDelay: '1.5s' }} />
    </div>
</div>

<div className="absolute right-[20%] bottom-[30%]">
    <div className="robot-arm w-32 h-4 bg-gradient-to-r from-green-500/40 to-green-400/50 rounded-full shadow-lg border border-green-300/30" style={{ animationDelay: '3s' }}>
        <div className="absolute right-0 w-20 h-4 bg-gradient-to-r from-yellow-500/40 to-yellow-400/50 rounded-full origin-left robot-arm-2 border border-yellow-300/30 shadow-lg" style={{ animationDelay: '3s' }} />
    </div>
</div>
```

---

## 4. CSS Animations for Movements
**File:** `src/app/globals.css`

### Conveyor Movement Animation

```css
@keyframes conveyor-move {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100vw);
  }
}

.conveyor-line {
  background: repeating-linear-gradient(90deg,
      transparent,
      transparent 10px,
      rgba(100, 200, 255, 0.3) 10px,
      rgba(100, 200, 255, 0.3) 12px);
  animation: conveyor-belt 2s linear infinite;
}

@keyframes conveyor-belt {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 20px 0;
  }
}
```

### Robot Arm Rotations

```css
.robot-arm {
  animation: robot-arm-rotate 6s ease-in-out infinite;
  transform-origin: left center;
}

@keyframes robot-arm-rotate {
  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-25deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(15deg);
  }
}

.robot-arm-2 {
  animation: robot-arm-2-rotate 6s ease-in-out infinite;
  transform-origin: left center;
}

@keyframes robot-arm-2-rotate {
  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(30deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(-20deg);
  }
}
```

### Pulse Animation

```css
.pulse-node {
  animation: pulse-grow 3s ease-in-out infinite;
}

@keyframes pulse-grow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.4);
    opacity: 0.6;
  }
}
```

---

## 5. SVG Network Animation
**Part of:** `src/components/IndustrialBackground.tsx`

### Pulsing Network Nodes with Animated Connection Lines

```tsx
<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Network Nodes */}
    <circle cx="10%" cy="25%" r="10" fill="rgba(0, 240, 255, 0.5)">
        <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
    </circle>

    <circle cx="30%" cy="45%" r="10" fill="rgba(255, 170, 0, 0.5)">
        <animate attributeName="r" values="10;14;10" dur="3s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
    </circle>

    <circle cx="70%" cy="35%" r="10" fill="rgba(59, 130, 246, 0.5)">
        <animate attributeName="r" values="10;14;10" dur="3s" begin="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="2s" repeatCount="indefinite" />
    </circle>

    <circle cx="90%" cy="65%" r="10" fill="rgba(0, 240, 255, 0.5)">
        <animate attributeName="r" values="10;14;10" dur="3s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="1.5s" repeatCount="indefinite" />
    </circle>

    {/* Connection Lines with Dashed Animation */}
    <line x1="10%" y1="25%" x2="30%" y2="45%" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="2" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
    </line>

    <line x1="30%" y1="45%" x2="70%" y2="35%" stroke="rgba(255, 170, 0, 0.3)" strokeWidth="2" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
    </line>

    <line x1="70%" y1="35%" x2="90%" y2="65%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite" />
    </line>
</svg>
```

---

## 6. Color Values Reference

### Primary Colors Used

| Color Name | Hex Value | RGB Value | Usage |
|------------|-----------|-----------|-------|
| **Cyan/Blue** | #00f0ff | rgba(0, 240, 255) | Primary accent, particles, nodes |
| **Orange** | #ffaa00 | rgba(255, 170, 0) | Secondary accent, fire effect |
| **Blue** | #0ea5e9 | rgba(59, 130, 246) | Tertiary accent, additional elements |

### Opacity Variations
- Full opacity: `0.8` - Strong, visible effects
- Medium opacity: `0.5` - Balanced visibility
- Low opacity: `0.3` - Subtle background elements
- Very low opacity: `0.1-0.2` - Very subtle effects

---

## 7. Contact Background - Email & Message Animation
**File:** `src/components/ContactBackground.tsx`

### Flying Email Envelopes & Message Bubbles

```tsx
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

{/* Message Bubbles with Orange */}
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
```

---

## 8. About Background - Educational Icons
**File:** `src/components/AboutBackground.tsx`

### Floating Education Icons with Cyan & Orange

```tsx
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
```

---

## 9. Button Glow Effect
**File:** `src/app/globals.css`

### Neon Text Effects & Button Glow

```css
.neon-text-blue {
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.7), 0 0 20px rgba(0, 240, 255, 0.5);
}

.neon-text-orange {
  text-shadow: 0 0 10px rgba(255, 170, 0, 0.7), 0 0 20px rgba(255, 170, 0, 0.5);
}

/* Spark animations for button hover */
@keyframes spark-blue {
  0%,
  100% {
    opacity: 0;
    transform: translate(0, 0) scale(0);
  }

  50% {
    opacity: 1;
    transform: translate(var(--spark-x), var(--spark-y)) scale(1);
  }
}

@keyframes spark-orange {
  0%,
  100% {
    opacity: 0;
    transform: translate(0, 0) scale(0);
  }

  50% {
    opacity: 1;
    transform: translate(var(--spark-x), var(--spark-y)) scale(1);
  }
}

/* Enhanced button with glow */
.btn-glow {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-glow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.4), transparent);
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
}

.btn-glow:hover::before {
  width: 300px;
  height: 300px;
}

.btn-glow:hover {
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.3);
}
```

---

## 10. Implementation Tips

### Key Animation Principles:
1. **Opacity Control**: Use `opacity-[value]` in Tailwind for subtle effects (10-50%)
2. **Color Layering**: Stack multiple opacity levels for depth
3. **Timing**: Use `ease-linear` for continuous motion, `ease-in-out` for pulsing
4. **Performance**: Canvas for many particles, SVG for network effects, DOM for simple shapes
5. **Glow Effects**: Combine `shadowBlur` (canvas) or `text-shadow` (CSS) with colors

### Common Animation Durations:
- **Particle flow**: 15-25 seconds (slower = more elegant)
- **Pulsing**: 2-4 seconds (faster = more energetic)
- **Conveyor**: 15-30 seconds (depends on size)
- **Network lines**: 2-4 seconds

### Color Combinations:
- **Cyan + Orange**: High contrast, fiery effect
- **Cyan + Blue**: Cool, tech-focused
- **All three**: Dynamic, multi-layered appearance

---

## 11. Dependencies

- **Framer Motion**: For motion component animations (`motion.div`, `animate`, `transition`)
- **Canvas API**: For particle effects (built-in browser API)
- **SVG**: For network visualizations (built-in browser API)
- **Tailwind CSS**: For utility classes and styling

---

## Quick Reference: Copy-Paste Snippets

### Cyan Pulsing Circle
```tsx
<circle cx="50%" cy="50%" r="10" fill="rgba(0, 240, 255, 0.5)">
    <animate attributeName="r" values="10;15;10" dur="3s" repeatCount="indefinite" />
</circle>
```

### Orange Particle
```tsx
ctx.fillStyle = "rgba(255, 170, 0, 0.8)";
ctx.shadowColor = "rgba(255, 170, 0, 0.8)";
ctx.shadowBlur = 15;
ctx.arc(x, y, 5, 0, Math.PI * 2);
ctx.fill();
```

### Blue Glowing Text
```tsx
<span className="text-cyan-400/60 neon-text-blue">Text</span>
```

---

**Created for reference and reuse across projects. All animations are responsive and support dark mode.**
