"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Terminal, AlertCircle, Quote, Activity } from "lucide-react";
import Image from "next/image";

const REALITY_LOGS = [
  {
    id: "01",
    question: "How do you handle: 'We decided to move forward with another candidate'?",
    image: "/rejection_1.png",
    commentary: "Stage 1: The standard system crash. Buffer overflow of emotions. But don't worry, the auto-reboot is fast.",
    tag: "ERROR_LOG_404"
  },
  {
    id: "02",
    question: "Translation request: 'We were particularly impressed by your skill set'...",
    image: "/rejection_2.png",
    commentary: "Usually means: 'You're amazing, but my buddy's cousin needed a job.' It's not you, it's the network topology.",
    tag: "SYSTEM_DEBUG"
  },
  {
    id: "03",
    question: "Why do you want to work for us? (Honesty Protocol)",
    image: "/why_work.png",
    commentary: "I have a weird dependency on food and shelter. Plus, your infrastructure is messy and my soul yearns to over-optimize it.",
    tag: "PRIMARY_MOTIVATION"
  },
  {
    id: "04",
    question: "Your take on 'Culture Fit' interviews?",
    image: "/interview_liars.png",
    commentary: "An elegant dance of two highly optimized social algorithms trying to find a common bug. A conversation between two professional liars (I'm the optimized one).",
    tag: "NETWORK_HANDSHAKE"
  },
  {
    id: "05",
    question: "The 8 AM 'Regret to Inform' notification experience?",
    image: "/rejection_3.png",
    commentary: "Just another unit test failure. I refactor the resume, push to the job board, and retry the build. Deployment is inevitable.",
    tag: "CONTINUOUS_RETRY"
  }
];

export function TheOptimizationReality() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section 
      id="reality"
      className="py-24 px-6 md:px-20 bg-[#fafafa] dark:bg-[#0c0c0c] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#ff4d00]/10 text-[#ff4d00]">
              <Activity size={20} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#ff4d00]">System_Experience_Logs</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-foreground dark:text-white leading-[0.9]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Optimization</span> Reality.
          </h2>
          <p className="font-body text-base text-muted-foreground dark:text-[#e5e2e1]/60 leading-relaxed max-w-xl">
            A raw, unfiltered look into the life of an Industrial Engineer in the modern workspace. Sarcastic? Maybe. Realistic? 100%.
          </p>
        </div>

        {/* Expandable Logs */}
        <div className="space-y-4">
          {REALITY_LOGS.map((log, idx) => (
            <div 
              key={idx}
              className={`group border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === idx ? 'bg-white dark:bg-[#131212] shadow-2xl border-[#ff4d00]/20' : 'bg-white/50 dark:bg-[#131212]/30 hover:bg-white dark:hover:bg-[#131212]'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono text-[#ff4d00] font-black opacity-40">{log.id}</span>
                  <h3 className="font-headline text-lg md:text-xl font-bold text-foreground dark:text-[#e5e2e1] group-hover:text-[#ff4d00] transition-colors line-clamp-1">
                    {log.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-muted-foreground"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  >
                    <div className="px-6 md:px-24 pb-12 pt-4 space-y-8">
                      {/* Image Container with Header Bar */}
                      <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl bg-black/5 dark:bg-black/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-black/5 dark:bg-white/5 border-b border-black/5 dark:border-white/5">
                          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{log.tag}</span>
                          <span className="text-[10px] font-mono text-[#ff4d00]/40 font-black">LOG_v8.1</span>
                        </div>
                        <img 
                          src={log.image} 
                          alt="Sarcastic Response" 
                          className="w-full h-auto object-contain max-h-[650px] mx-auto p-4 md:p-8"
                        />
                      </div>

                      {/* Commentary Section */}
                      <div className="space-y-4 text-center max-w-lg mx-auto">
                        <div className="flex justify-center text-[#ff4d00] opacity-40">
                          <Quote size={32} />
                        </div>
                        <p className="font-body text-pretty text-base md:text-lg text-foreground dark:text-[#e5e2e1] leading-relaxed italic">
                          {log.commentary}
                        </p>
                        <div className="pt-4 flex items-center justify-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Resilience_Service: NOMINAL</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Technical Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-black/5 dark:border-white/5 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#ff4d00]/5 border border-[#ff4d00]/10 max-w-md">
            <div className="p-3 rounded-xl bg-[#ff4d00] text-white shadow-lg">
              <AlertCircle size={20} />
            </div>
            <p className="text-[11px] font-medium text-muted-foreground dark:text-[#e5e2e1]/40 leading-tight">
              NOTE: The above logs are part of the <span className="text-[#ff4d00] font-black">CAREER_RECOVERY_PROTOCOL</span>. Each failure is a data point for a better build.
            </p>
          </div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff4d00]/20 text-[#ff4d00] bg-[#ff4d00]/5 font-headline font-black text-[10px] uppercase tracking-widest"
          >
            Hustle Status: Operational_v8.1
          </motion.div>
        </div>
      </div>
      
      {/* Background Subtle Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff4d00]/20 to-transparent" />
    </section>
  );
}
