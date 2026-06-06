"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ShutterText({
  text = "MOHIT",
  className = "",
}) {
  const characters = text.split("");

  return (
    <div className={`relative flex flex-col items-center justify-center h-full w-full bg-transparent ${className}`}>
      {/* Main Text Container */}
      <div className="relative z-10 w-full px-4 flex flex-wrap justify-center items-center">
        {characters.map((char, i) => (
          <div
            key={i}
            className="relative px-[0.2vw] overflow-hidden group select-none"
          >
            {/* Main Character (Static base layer) */}
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.05 + 0.2, duration: 0.8 }}
              className="text-[17vw] leading-none font-black text-zinc-900 dark:text-zinc-800 tracking-tighter"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            {/* Top Slice Layer (Infinite sweep) */}
            <motion.span
              animate={{ 
                x: ["-105%", "105%", "105%"], 
                opacity: [0, 1, 0, 0] 
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.03 + 0.05,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.1, 
              }}
              className="absolute inset-0 text-[17vw] leading-none font-black text-emerald-400 z-10 pointer-events-none"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
            >
              {char}
            </motion.span>

            {/* Middle Slice Layer (Infinite reverse sweep) */}
            <motion.span
              animate={{ 
                x: ["105%", "-105%", "-105%"], 
                opacity: [0, 1, 0, 0] 
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.03 + 0.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.1,
              }}
              className="absolute inset-0 text-[17vw] leading-none font-black text-zinc-200 z-10 pointer-events-none"
              style={{
                clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
              }}
            >
              {char}
            </motion.span>

            {/* Bottom Slice Layer (Infinite sweep) */}
            <motion.span
              animate={{ 
                x: ["-105%", "105%", "105%"], 
                opacity: [0, 1, 0, 0] 
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.03 + 0.15,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.1,
              }}
              className="absolute inset-0 text-[17vw] leading-none font-black text-emerald-400 z-10 pointer-events-none"
              style={{ clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)" }}
            >
              {char}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}
