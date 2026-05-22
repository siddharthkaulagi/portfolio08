"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certificates } from "@/components/sections/Certificates";
import { TheOptimizationReality } from "@/components/sections/TheOptimizationReality";
import { Contact } from "@/components/sections/Contact";
import { IndustrialElements } from "@/components/IndustrialElements";
import { Terminal } from "@/components/Terminal";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <main className="min-h-screen selection:bg-cyan-500/30">
      <IndustrialElements />
      <Navbar onTerminalClick={() => setIsTerminalOpen(true)} />
      <Hero 
        isTerminalOpen={isTerminalOpen} 
        onTerminalOpen={() => setIsTerminalOpen(true)} 
        onTerminalClose={() => setIsTerminalOpen(false)} 
      />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <TheOptimizationReality />
      <Contact />
      
      {/* Global Terminal Instance */}
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </main>
  );
}
