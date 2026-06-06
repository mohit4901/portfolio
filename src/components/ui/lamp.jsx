"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}) => {
  const containerRef = useRef(null);

  // Track the viewport scroll progress of the lamp container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // Dynamically map scroll progress to light width and opacity
  const conicWidth = useTransform(scrollYProgress, [0, 0.75], ["10rem", "28rem"]);
  const glowWidth = useTransform(scrollYProgress, [0, 0.75], ["6rem", "18rem"]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.75], ["8rem", "28rem"]);
  const lightOpacity = useTransform(scrollYProgress, [0, 0.75], [0.1, 0.9]);

  // Apply spring transitions for smooth, fast, responsive updates
  const smoothConicWidth = useSpring(conicWidth, { stiffness: 70, damping: 20 });
  const smoothGlowWidth = useSpring(glowWidth, { stiffness: 70, damping: 20 });
  const smoothLineWidth = useSpring(lineWidth, { stiffness: 70, damping: 20 });
  const smoothOpacity = useSpring(lightOpacity, { stiffness: 70, damping: 20 });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        {/* Left Conic Light (White) */}
        <motion.div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            width: smoothConicWidth,
            opacity: smoothOpacity,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible bg-gradient-conic from-white/20 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Conic Light (White) */}
        <motion.div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            width: smoothConicWidth,
            opacity: smoothOpacity,
          }}
          className="absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent via-transparent to-white/20 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Backdrops */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-white/5 opacity-30 blur-3xl"></div>
        
        {/* Glowing Aura (White) */}
        <motion.div
          style={{
            width: smoothGlowWidth,
            opacity: smoothOpacity,
          }}
          className="absolute inset-auto z-30 h-36 rounded-full bg-white/10 blur-2xl -translate-y-[6rem]"
        ></motion.div>

        {/* Horizontal Line (White) */}
        <motion.div
          style={{
            width: smoothLineWidth,
            opacity: smoothOpacity,
          }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-white/20"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
      </div>

      {/* Children text wrapper, translated tighter to avoid huge disjointed gaps */}
      <div className="relative z-50 flex -translate-y-[13rem] md:-translate-y-[15rem] flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};
