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
        for (let i = 0; i < 80; i++) { // More particles
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
            {/* Canvas for Material Flow Particles */}
            <canvas ref={canvasRef} className="absolute inset-0" />

            {/* Conveyor Belt System */}
            <div className="absolute inset-0">
                {/* Top Conveyor */}
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

                {/* Middle Conveyor */}
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

                {/* Bottom Conveyor */}
                <div className="absolute bottom-[20%] left-0 w-full h-3 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent overflow-hidden">
                    <div className="conveyor-line h-full" style={{ animationDuration: '22s' }} />
                </div>
            </div>

            {/* Trucks Moving Along Road */}
            <div className="absolute bottom-[35%] left-0 w-full">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={`truck-${i}`}
                        className="absolute"
                        style={{
                            left: `${i * 40}%`,
                            animation: `conveyor-move 25s linear infinite`,
                            animationDelay: `${i * 8}s`,
                        }}
                    >
                        {/* Truck Body */}
                        <div className="flex items-end">
                            {/* Cargo Container */}
                            <div className="w-16 h-12 bg-gradient-to-b from-blue-500/40 to-blue-600/50 border-2 border-blue-400/60 rounded-sm relative">
                                <div className="absolute inset-1 border border-blue-300/30" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-blue-300/50" />
                            </div>
                            {/* Cab */}
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/40 to-cyan-600/50 border-2 border-cyan-400/60 rounded-sm relative ml-0.5">
                                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-yellow-300/70 rounded-full" />
                            </div>
                        </div>
                        {/* Wheels */}
                        <div className="flex justify-between w-24 mt-0.5">
                            <div className="w-2 h-2 bg-slate-800/60 border border-slate-600/60 rounded-full" />
                            <div className="w-2 h-2 bg-slate-800/60 border border-slate-600/60 rounded-full" />
                            <div className="w-2 h-2 bg-slate-800/60 border border-slate-600/60 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Forklifts */}
            <div className="absolute bottom-[15%] left-0 w-full">
                {[...Array(2)].map((_, i) => (
                    <div
                        key={`forklift-${i}`}
                        className="absolute"
                        style={{
                            left: `${20 + i * 50}%`,
                            animation: `conveyor-move 30s linear infinite`,
                            animationDelay: `${i * 15}s`,
                        }}
                    >
                        <div className="relative">
                            {/* Fork */}
                            <div className="absolute bottom-full left-0 w-1 h-8 bg-orange-400/60 border-l border-orange-300/40" />
                            {/* Body */}
                            <div className="w-10 h-6 bg-gradient-to-br from-orange-500/40 to-orange-600/50 border-2 border-orange-400/60 rounded-sm" />
                            {/* Wheels */}
                            <div className="flex justify-between w-10">
                                <div className="w-2 h-2 bg-slate-800/60 border border-slate-600/60 rounded-full" />
                                <div className="w-2 h-2 bg-slate-800/60 border border-slate-600/60 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Supply Chain Network */}
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

                {/* Connection Lines */}
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

            {/* Warehouse/Factory Icons */}
            <div className="absolute left-[5%] top-[20%]">
                <div className="w-16 h-20 border-2 border-cyan-400/40 bg-slate-800/20 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-l-8 border-r-8 border-b-8 border-transparent border-b-cyan-400/40 w-0 h-0" />
                    <div className="grid grid-cols-2 gap-1 p-2">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-full h-3 bg-yellow-300/30 border border-yellow-200/20" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
