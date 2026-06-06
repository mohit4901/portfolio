"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo } from "../../data";
import TextRoll from "./text-roll";

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const NavLink = ({ heading, href, setIsActive, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-black/10 py-3 transition-colors duration-500 uppercase"
    >
      <a
        ref={ref}
        onMouseMove={handleMouseMove}
        href={href}
        className="relative z-10 w-full py-2 block"
      >
        <div className="relative flex items-start">
          <span className="text-black/30 group-hover:text-black transition-colors duration-500 text-2xl font-light mr-4 font-mono">
            {String(index).padStart(2, "0")}.
          </span>
          <div className="flex flex-row gap-2">
            <TextRoll
              active={hovered}
              className="text-2xl font-light text-black transition-colors duration-500"
            >
              {heading}
            </TextRoll>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Curve = () => {
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full fill-white pointer-events-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

export const CurvedNavbar = ({ setIsActive, navItems }) => {
  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100dvh] w-full max-w-sm fixed right-0 top-0 z-40 bg-white text-black shadow-2xl flex flex-col justify-between"
    >
      <div className="flex flex-col gap-6 mt-16 px-10">
        <div className="text-black/40 border-b border-black/10 uppercase text-xs tracking-widest pb-2 font-mono">
          Navigation
        </div>
        <section className="bg-transparent">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <NavLink
                key={item.href}
                heading={item.name}
                href={item.href}
                setIsActive={setIsActive}
                index={index + 1}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Curved Sidebar Footer */}
      <div className="flex w-full justify-between items-center px-10 py-8 border-t border-black/5 bg-zinc-50">
        <div className="flex gap-5 text-black">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:opacity-60 transition-opacity"
          >
            <Mail size={20} />
          </a>
        </div>
        <span className="text-[10px] font-mono text-black/40">© 2026</span>
      </div>

      <Curve />
    </motion.div>
  );
};
