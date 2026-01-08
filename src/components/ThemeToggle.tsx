"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full bg-muted hover:bg-muted/80 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 border border-border dark:border-slate-700 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 180,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-5 w-5 text-cyan-400" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : -180,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
            >
                <Sun className="h-5 w-5 text-orange-500" />
            </motion.div>
            {/* Invisible placeholder to maintain size */}
            <div className="w-5 h-5 opacity-0"></div>
        </button>
    );
}
