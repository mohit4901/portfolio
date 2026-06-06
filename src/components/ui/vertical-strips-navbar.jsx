"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Layers, Folder, Briefcase, Award, BookOpen, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import TextRoll from "./text-roll";

const stripVariants = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.04,
    },
  }),
  exit: (i) => ({
    y: "100%",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      delay: (7 - i) * 0.03,
    },
  }),
};

const getIcon = (name) => {
  switch (name.toLowerCase()) {
    case "about":
      return <User size={20} />;
    case "skills":
      return <Layers size={20} />;
    case "projects":
      return <Folder size={20} />;
    case "experience":
      return <Briefcase size={20} />;
    case "hackathons":
      return <Award size={20} />;
    case "publications":
      return <BookOpen size={20} />;
    case "hobbies":
      return <Compass size={20} />;
    default:
      return <Compass size={20} />;
  }
};

export const VerticalStripsNavbar = ({ setIsActive, navItems }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleLinkClick = (href) => {
    setIsActive(false);
    const targetId = href.startsWith("#") ? href.slice(1) : href;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen z-40 bg-black/90 backdrop-blur-md flex flex-row overflow-hidden select-none">
      {navItems.map((item, index) => {
        const isHovered = hoveredIdx === index;
        const isAnyHovered = hoveredIdx !== null;

        return (
          <motion.div
            key={item.href}
            custom={index}
            variants={stripVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => handleLinkClick(item.href)}
            className={cn(
              "relative h-full flex flex-col justify-between items-center py-20 px-2 bg-black border-r border-white/5 transition-all duration-500 ease-out cursor-pointer",
              index === navItems.length - 1 ? "border-r-0" : "",
              isHovered
                ? "flex-[1.5] bg-zinc-900/40 shadow-[inset_0_0_50px_rgba(255,255,255,0.02)]"
                : isAnyHovered
                ? "flex-[0.8] opacity-40 scale-98"
                : "flex-1"
            )}
          >
            {/* Index Number */}
            <span
              className={cn(
                "text-xs font-mono tracking-widest transition-colors duration-300",
                isHovered ? "text-white font-bold" : "text-zinc-600"
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Rotated Vertical Title */}
            <div className="flex-1 flex items-center justify-center py-10 relative">
              {/* Subtle light background line on hover */}
              <div
                className={cn(
                  "absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent transition-opacity duration-500",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              />

              <TextRoll
                active={isHovered}
                className={cn(
                  "font-black text-2xl md:text-3xl tracking-[0.2em] transition-all duration-500 uppercase select-none relative z-10",
                  isHovered
                    ? "text-white text-shadow-white scale-105"
                    : "text-zinc-500"
                )}
                style={{
                  transform: "rotate(-90deg)",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </TextRoll>
            </div>

            {/* Glowing Icon indicator at the bottom */}
            <div
              className={cn(
                "h-10 w-10 rounded-full border border-white/5 bg-zinc-950 flex items-center justify-center transition-all duration-300",
                isHovered
                  ? "text-white border-white/20 translate-y-[-8px] scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  : "text-zinc-650 opacity-40"
              )}
            >
              {getIcon(item.name)}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
