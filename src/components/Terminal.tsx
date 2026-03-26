"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import { X, Minus, Square, Terminal as TerminalIcon, Maximize2, Minimize2 } from "lucide-react";
import { text } from "stream/consumers";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const ONE_PIECE_QUOTES = [
  {
    text: "If you don’t take risks, you can’t create a future!",
    author: "Monkey D. Luffy",
    color: "text-red-500"
  },
  {
    text: "As long as I’m still alive, I have infinite chances.",
    author: "Monkey D. Luffy",
    color: "text-red-500"
  },
  {
    text: "People can say whatever they want about me, but I’ve never done a single thing in my life that I regret.",
    author: "Roronoa Zoro",
    color: "text-red-500"
  },
  {
    text: "No matter how hard or impossible it is, never lose sight of your goal!",
    author: "Monkey D. Luffy",
    color: "text-red-500"
  },
  {
    text: "I am truly glad to be alive!",
    author: "Brook",
    color: "text-red-500"
  },
  {
    text: "Everyone has things that they can do and things that they can’t.",
    author: "Sanji",
    color: "text-red-500"
  },
  {
    text: "What you do is your choice, but there’s no right or wrong in who you are.",
    author: "Franky",
    color: "text-red-500"
  },
  {
    text: "I guess, as long as I have life, all I can do is fight with all my might!",
    author: "Subaru Natsuki, Re:Zero",
    color: "text-red-500"
  },
  {
    text: "The important thing is not how long you live. It’s what you accomplish with your life!",
    author: "Grovyle, Pokémon",
    color: "text-red-500"
  },
  {
    text: "It’s not about if I can. I’m doing this because I want to.",
    author: "Monkey D. Luffy",
    color: "text-red-500"
  },
  {
    text: "When you give up, that’s when the game ends!",
    author: "Mitsuyoshi Anzai, Slam Dunk",
    color: "text-red-500"
  },
  {
    text: "I’ve set myself to become the King of the Pirates… and if I die trying… then at least I tried!",
    author: "Monkey D. Luffy",
    color: "text-red-500"
  },
  {
    text: "If I die here, then I’m a man that could only make it this far.",
    author: "Roronoa Zoro",
    color: "text-emerald-500"
  },
  {
    text: "It’s okay to cry.There’s no shame in crying.",
    author: "Akagami no Shanks",
    color: "text-orange-500"
  },
  {
    text: "I’m not interested in living a thousand years. I just need to live today.",
    author: "Portgas D. Ace",
    color: "text-orange-500"
  },
  {
    text: "If you never listen to anyone, you can't give proper advice!",
    author: "Monk Momoaki, The Boy and the Beast",
    color: "text-orange-500"
  },
  {
    text: "I'm going to be the world's greatest swordsman! All I have left is my destiny... my name may be infamous, but it's going to shake the world!",
    author: "Roronoa Zoro",
    color: "text-emerald-500"
  }
];

const COMMANDS_CONFIG = [
  { cmd: "about", desc: "know more about me" },
  { cmd: "skills", desc: "view my capabilities" },
  { cmd: "projects", desc: "explore my work" },
  { cmd: "contact", desc: "get in touch" },
  { cmd: "github", desc: "open my GitHub" },
  { cmd: "linkedin", desc: "view my profile" },
  { cmd: "whyme", desc: "my unique edge" },
  { cmd: "goal", desc: "future vision" },
  { cmd: "motivate", desc: "piece wisdom" },
  { cmd: "clear", desc: "reset terminal" },
  { cmd: "exit", desc: "close terminal" }
];

function HelpScreen({ executeCommand }: { executeCommand: (cmd: string) => void }) {
  return (
    <div className="space-y-6 pt-2">
      <p className="text-emerald-500 font-bold text-lg">System Identity: Active</p>
      <div className="space-y-4">
        <p className="text-cyan-400 font-black text-xl md:text-2xl uppercase tracking-wider underline decoration-cyan-400/30 underline-offset-8">Available commands:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pl-2">
          {COMMANDS_CONFIG.map((conf) => (
            <CommandLink key={conf.cmd} cmd={conf.cmd} desc={conf.desc} onClick={() => executeCommand(conf.cmd)} />
          ))}
        </div>
      </div>
      <p className="text-xs text-muted-foreground italic mt-6 border-t border-white/5 pt-4">Tip: Click a command or type it below.</p>
    </div>
  );
}

export function Terminal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastQuoteIndex = useRef<number>(-1);

  const executeCommand = useCallback((cmdText: string) => {
    const cmd = cmdText.toLowerCase().trim();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([{
        command: "initializing...",
        output: <HelpScreen executeCommand={(c: string) => executeCommand(c)} />,
        timestamp: new Date().toLocaleTimeString()
      }]);
      return;
    }

    if (cmd === "exit") {
      onClose();
      return;
    }

    if (cmd === "github") {
      window.open("https://github.com/siddharthkaulagi", "_blank");
      setHistory(prev => [...prev, {
        command: cmdText,
        output: <p className="text-emerald-500">Opening GitHub profile...</p>,
        timestamp: new Date().toLocaleTimeString()
      }]);
      return;
    }

    let output: React.ReactNode = "";

    const responses: Record<string, string | React.ReactNode> = {
      help: (
        <div className="space-y-4 py-2">
          <p className="text-cyan-400 font-black text-lg md:text-xl uppercase tracking-wider">Available Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            <CommandLink cmd="about" desc="know more about me" onClick={() => executeCommand("about")} />
            <CommandLink cmd="skills" desc="view my capabilities" onClick={() => executeCommand("skills")} />
            <CommandLink cmd="projects" desc="explore my work" onClick={() => executeCommand("projects")} />
            <CommandLink cmd="contact" desc="get in touch" onClick={() => executeCommand("contact")} />
            <CommandLink cmd="github" desc="open my GitHub" onClick={() => executeCommand("github")} />
            <CommandLink cmd="linkedin" desc="view my profile" onClick={() => executeCommand("linkedin")} />
            <CommandLink cmd="whyme" desc="my unique edge" onClick={() => executeCommand("whyme")} />
            <CommandLink cmd="goal" desc="future vision" onClick={() => executeCommand("goal")} />
            <CommandLink cmd="motivate" desc="quotes of wisdom" onClick={() => executeCommand("motivate")} />
            <CommandLink cmd="clear" desc="reset terminal" onClick={() => executeCommand("clear")} />
            <CommandLink cmd="exit" desc="close terminal" onClick={() => executeCommand("exit")} />
          </div>
          <p className="text-[11px] text-muted-foreground italic mt-4">Tip: Click a command or type it below.</p>
        </div>
      ),
      about: "I'm Siddharth Kaulagi, an Industrial Engineer focused on building data-driven systems and supply chain orchestration. I bridge the gap between physical operations and digital intelligence.",
      skills: (
        <div className="space-y-6 py-2">
          <div>
            <p className="text-cyan-400 font-black text-lg uppercase tracking-wider mb-3 underline decoration-cyan-400/30 underline-offset-8">CORE CAPABILITIES</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-orange-400 font-bold mb-2">Supply Chain & Operations</p>
              <ul className="list-none pl-4 space-y-1 text-slate-300">
                <li>- Inventory Management</li>
                <li>- Demand Forecasting</li>
                <li>- Procurement & Vendor Coordination</li>
                <li>- Logistics & Distribution</li>
                <li>- Process Optimization (Lean, Kaizen)</li>
                <li>- Production Planning</li>
              </ul>
            </div>

            <div>
              <p className="text-orange-400 font-bold mb-2">Data & Decision Making</p>
              <ul className="list-none pl-4 space-y-1 text-slate-300">
                <li>- Data Analysis (Excel, Power BI)</li>
                <li>- Forecasting & Trend Analysis</li>
                <li>- KPI Tracking & Dashboarding</li>
                <li>- Operations Research</li>
              </ul>
            </div>

            <div>
              <p className="text-orange-400 font-bold mb-2">Tools & Technologies</p>
              <ul className="list-none pl-4 space-y-1 text-slate-300">
                <li>- MS Excel</li>
                <li>- Power BI</li>
                <li>- SQL (Basic)</li>
                <li>- Arena Simulation</li>
                <li>- SolidWorks</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      projects: (
        <div className="space-y-3 font-mono">
          <p><span className="text-purple-400 font-bold">01. URIP</span> - Retail Intelligence & Forecasting</p>
          <p><span className="text-cyan-400 font-bold">02. Solar Tracker</span> - IoT Dual-axis system</p>
          <p><span className="text-emerald-400 font-bold">03. Inventory Analyser</span> - Power BI Supply Chain dashboard</p>
          <p><span className="text-orange-400 font-bold">04. Knuckle Joint</span> - 3D Printed Industrial Part</p>
        </div>
      ),
      contact: (
        <div className="space-y-2">
          <p><span className="text-cyan-400 font-bold">Email:</span> siddarthkaulagi90@gmail.com</p>
          <p><span className="text-cyan-400 font-bold">Location:</span> Karnataka, India</p>
          <p><span className="text-cyan-400 font-bold">Mobile:</span> +91 8050463960</p>
        </div>
      ),
      whyme: "I don’t just analyze data—I focus on improving real-world systems. My background in Industrial Engineering helps me understand operations deeply and solve inefficiencies with practical, scalable solutions.",
      goal: "To architect autonomous supply chain ecosystems that minimize waste and maximize throughput using AI-driven orchestration.",
      linkedin: (
        <a href="https://www.linkedin.com/in/siddharth-kaulagi-041ba4220/" target="_blank" className="text-cyan-400 underline underline-offset-4 hover:text-white transition-colors font-bold">
          &gt; VIEW_LINKEDIN_PROFILE
        </a>
      ),
      motivate: (() => {
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * ONE_PIECE_QUOTES.length);
        } while (nextIdx === lastQuoteIndex.current && ONE_PIECE_QUOTES.length > 1);

        lastQuoteIndex.current = nextIdx;
        const randomQuote = ONE_PIECE_QUOTES[nextIdx];

        return (
          <div className="py-4 border-y border-white/5 my-4">
            <p className={`${randomQuote.color} font-black italic text-lg leading-relaxed mb-4`}>
              "{randomQuote.text}"
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />
              <p className="text-white/60 font-headline uppercase tracking-widest text-[10px] font-bold">{randomQuote.author}</p>
            </div>
          </div>
        );
      })()
    };

    output = responses[cmd] || `Command not found: ${cmd}. Type 'help' for assistance.`;

    setHistory(prev => [...prev, {
      command: cmdText,
      output,
      timestamp: new Date().toLocaleTimeString()
    }]);

    setCommandHistory(prev => [cmdText, ...prev]);
    setHistoryPointer(-1);
    setInput("");
  }, [onClose]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);

      // Initialize with default Command Display
      if (history.length === 0) {
        setHistory([{
          command: "initializing...",
          output: <HelpScreen executeCommand={(cmd) => executeCommand(cmd)} />,
          timestamp: new Date().toLocaleTimeString()
        }]);
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, executeCommand]);

  useEffect(scrollToBottom, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyPointer < commandHistory.length - 1) {
        const nextIdx = historyPointer + 1;
        setHistoryPointer(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer > -1) {
        const nextIdx = historyPointer - 1;
        setHistoryPointer(nextIdx);
        setInput(nextIdx === -1 ? "" : commandHistory[nextIdx]);
      }
    }
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none ${isMaximized ? 'p-0' : ''}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              height: isMinimized ? "48px" : (isMaximized ? "100vh" : "600px"),
              width: isMaximized ? "100vw" : "100%",
              maxWidth: isMaximized ? "100vw" : "1000px"
            }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
            className={`bg-[#0c0c0c] rounded-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col pointer-events-auto relative ${isMaximized ? 'rounded-none border-none' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#1a1a1a] border-b border-white/5 cursor-default select-none">
              <div className="flex items-center gap-2.5 shrink-0">
                <TerminalIcon size={14} className="text-cyan-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground/40 font-black hidden sm:inline">V8.1.0</span>
                <span className="w-px h-3 bg-white/10 hidden sm:inline ml-1" />
                <span className="text-[10px] uppercase tracking-widest font-mono text-white font-black bg-cyan-600 dark:bg-[#ff4d00] px-3 py-1 rounded shadow-lg shadow-black/20 line-clamp-1">Know More [Interactive]</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMinimize}
                  title="Minimize"
                  className="w-3.5 h-3.5 rounded-full bg-amber-500/20 flex items-center justify-center cursor-pointer hover:bg-amber-500/50 transition-all border border-amber-500/20"
                >
                  <Minus size={9} className="text-amber-500 font-black" />
                </button>
                <button
                  onClick={toggleMaximize}
                  title={isMaximized ? "Restore" : "Maximize"}
                  className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 flex items-center justify-center cursor-pointer hover:bg-emerald-500/50 transition-all border border-emerald-500/20"
                >
                  {isMaximized ? <Minimize2 size={9} className="text-emerald-500 font-black" /> : <Maximize2 size={9} className="text-emerald-500 font-black" />}
                </button>
                <button
                  onClick={onClose}
                  title="Close"
                  className="w-3.5 h-3.5 rounded-full bg-red-500/20 flex items-center justify-center cursor-pointer hover:bg-red-500/50 transition-all border border-red-500/20"
                >
                  <X size={9} className="text-red-500 font-black" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {!isMinimized && (
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-auto p-6 md:p-8 font-mono text-[13px] md:text-[14px] leading-relaxed scrollbar-thin scrollbar-thumb-white/10"
                onClick={() => inputRef.current?.focus()}
              >
                <div className="space-y-8">
                  {history.map((item, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-500 font-black tracking-tight">siddharth@portfolio</span>
                        <span className="text-white font-bold">:</span>
                        <span className="text-cyan-400 font-bold">~</span>
                        <span className="text-white font-bold">$</span>
                        <span className="text-white font-medium">{item.command}</span>
                      </div>
                      <div className="text-slate-200 pl-6 py-1 border-l-2 border-white/5 ml-3">
                        <Typewriter text={item.output} />
                      </div>
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Input Line */}
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-3 mt-8 pb-10">
                  <span className="text-emerald-500 font-black tracking-tight shrink-0">siddharth@portfolio</span>
                  <span className="text-white font-bold shrink-0">:</span>
                  <span className="text-cyan-400 font-bold shrink-0">~</span>
                  <span className="text-white font-bold shrink-0">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-cyan-400 font-medium"
                    spellCheck="false"
                    autoComplete="off"
                  />
                </form>
              </div>
            )}
          </motion.div>

          {/* Backdrop Click */}
          <div className="absolute inset-0 z-[-1] pointer-events-auto bg-black/60 backdrop-blur-md" onClick={onClose} />
        </div>
      )}
    </AnimatePresence>
  );
}

function CommandLink({ cmd, desc, onClick }: { cmd: string, desc: string, onClick: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="flex items-center gap-4 group cursor-pointer text-left hover:translate-x-1 transition-transform"
    >
      <span className="text-orange-400 font-black min-w-[80px] group-hover:text-white transition-colors">&gt; {cmd}</span>
      <span className="text-slate-400 group-hover:text-cyan-400 transition-colors uppercase text-[11px] font-bold tracking-widest flex items-center gap-2">
        <span className="text-[14px]">→</span> {desc}
      </span>
    </button>
  );
}

function Typewriter({ text }: { text: React.ReactNode }) {
  const [displayedText, setDisplayedText] = useState<React.ReactNode>("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (typeof text !== 'string') {
      setDisplayedText(text);
      setIsDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 5); // Faster typing for better UX

    return () => clearInterval(interval);
  }, [text]);

  return <div className="animate-in fade-in slide-in-from-left-2 duration-500 fill-mode-both">{displayedText}</div>;
}
