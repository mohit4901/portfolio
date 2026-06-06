import React, { useState, useEffect, useRef } from "react";
import { BookOpen, Code, Cpu, Users, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { hobbies } from "../data";
import { RainingLetters } from "./ui/raining-letters";

// Scramble text animation logic helper class
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#";
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText || "";
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 45);
      const end = start + Math.floor(Math.random() * 55);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

const Hobbies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const elementRef = useRef(null);
  const scramblerRef = useRef(null);

  // Map strings to Lucide icon components
  const getIcon = (iconName) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen size={32} className="text-white" />;
      case "Code":
        return <Code size={32} className="text-white" />;
      case "Cpu":
        return <Cpu size={32} className="text-white" />;
      case "Users":
        return <Users size={32} className="text-white" />;
      default:
        return <Compass size={32} className="text-white" />;
    }
  };

  // Define clean short labels for terminal-style tabs
  const tabLabels = [
    "01. Writing",
    "02. Coding",
    "03. AI & RAG",
    "04. Mentorship"
  ];

  // Initialize Scrambler on Mount
  useEffect(() => {
    if (elementRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current);
      scramblerRef.current.setText(hobbies[activeIndex].name);
    }
  }, []);

  // Update text whenever activeIndex changes
  useEffect(() => {
    if (scramblerRef.current && hobbies[activeIndex]) {
      scramblerRef.current.setText(hobbies[activeIndex].name);
    }
  }, [activeIndex]);

  // Autoplay cycle
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  return (
    <section id="hobbies" className="relative w-full overflow-hidden bg-black border-none select-none">
      {/* Decorative styling */}
      <style>{`
        .dud {
          color: #a1a1aa;
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          opacity: 0.65;
          font-family: monospace;
        }
      `}</style>

      {/* Raining Letters wraps the ENTIRE section background */}
      <RainingLetters className="py-24 min-h-[580px] flex flex-col justify-center items-center w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between min-h-[420px]">
          
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
              08. Beyond Work
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Hobbies & Interests
            </h3>
            <div className="h-[2px] w-20 bg-white mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Dynamic Content Display */}
          <div className="flex-1 flex flex-col justify-center items-center py-4">
            <div className="h-[96px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col items-center w-full"
                >
                  {/* Glowing Active Icon */}
                  <div className="w-16 h-16 rounded-full bg-black/60 border border-white/10 flex items-center justify-center mb-4 shadow-2xl relative">
                    <div className="absolute inset-0 bg-white/5 rounded-full scale-100 animate-ping opacity-25"></div>
                    <div className="relative z-10 text-white">
                      {getIcon(hobbies[activeIndex].icon)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scrambled heading title */}
            <h4
              ref={elementRef}
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-center select-none uppercase font-sans py-1 min-h-[50px] flex items-center justify-center bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"
            >
              LOADING...
            </h4>

            {/* Active description */}
            <div className="w-full mt-3 h-[72px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto text-center leading-relaxed font-sans min-h-[50px] px-4"
                >
                  {hobbies[activeIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive selector tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 w-full max-w-2xl mx-auto relative z-20">
            {hobbies.map((hobby, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsAutoplay(false);
                }}
                className={`px-3 py-2.5 rounded-xl border font-mono text-[11px] transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-white text-black border-white shadow-lg shadow-white/5 font-bold"
                    : "bg-black/60 text-zinc-500 border-white/5 hover:border-white/20 hover:text-zinc-300"
                }`}
              >
                {tabLabels[idx]}
              </button>
            ))}
          </div>

        </div>
      </RainingLetters>
    </section>
  );
};

export default Hobbies;
