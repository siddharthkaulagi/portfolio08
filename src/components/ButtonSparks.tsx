"use client";

import { useEffect, useState } from "react";

interface Spark {
    id: number;
    x: number;
    y: number;
    color: string;
}

export function ButtonSparks({ color = "cyan" }: { color?: "cyan" | "orange" }) {
    const [sparks, setSparks] = useState<Spark[]>([]);

    const createSpark = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newSpark: Spark = {
            id: Date.now() + Math.random(),
            x,
            y,
            color: color === "cyan" ? "rgba(0, 240, 255, 0.8)" : "rgba(255, 170, 0, 0.8)"
        };

        setSparks(prev => [...prev, newSpark]);

        setTimeout(() => {
            setSparks(prev => prev.filter(s => s.id !== newSpark.id));
        }, 600);
    };

    return (
        <>
            {sparks.map(spark => (
                <span
                    key={spark.id}
                    className="absolute pointer-events-none"
                    style={{
                        left: spark.x,
                        top: spark.y,
                        width: "6px",
                        height: "6px",
                        background: spark.color,
                        borderRadius: "50%",
                        boxShadow: `0 0 10px ${spark.color}`,
                        animation: "spark-blue 0.6s ease-out forwards",
                        '--spark-x': `${(Math.random() - 0.5) * 40}px`,
                        '--spark-y': `${(Math.random() - 0.5) * 40}px`,
                    } as React.CSSProperties}
                />
            ))}
        </>
    );
}
