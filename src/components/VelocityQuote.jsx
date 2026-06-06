"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Custom wrap function to infinitely loop marquee values
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const MarqueeRow = forwardRef(({
  children,
  baseVelocity = -5,
  className,
  scrollDependent = true,
  delay = 0,
}, ref) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  // Wrap percentage to keep text flowing endlessly
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

  const directionFactor = useRef(1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full py-1.5 select-none pointer-events-none">
      <motion.div
        className="flex whitespace-nowrap gap-6 flex-nowrap uppercase text-[8vw] font-black tracking-tighter"
        style={{ x }}
      >
        <span className={cn("block", className)}>{children}</span>
        <span className={cn("block", className)}>{children}</span>
        <span className={cn("block", className)}>{children}</span>
        <span className={cn("block", className)}>{children}</span>
        <span className={cn("block", className)}>{children}</span>
        <span className={cn("block", className)}>{children}</span>
      </motion.div>
    </div>
  );
});

MarqueeRow.displayName = "MarqueeRow";

export const VelocityQuote = () => {
  return (
    <div className="py-16 overflow-hidden border-t border-b border-white/5 bg-black/20 backdrop-blur-sm relative flex flex-col gap-3">
      {/* Ambient gradient highlights */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/20 via-transparent to-zinc-950/20 pointer-events-none z-10"></div>
      
      {/* Row 1: Solid text scrolling left */}
      <MarqueeRow baseVelocity={-0.8} className="text-white/90">
        Progress Over Perfection <span className="text-zinc-700 font-light mx-4">•</span> Leverage AI Intelligently <span className="text-zinc-700 font-light mx-4">•</span>
      </MarqueeRow>

      {/* Row 2: Outline text scrolling right */}
      <MarqueeRow baseVelocity={0.8} className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
        Practice Over Memorization <span className="text-zinc-800 font-light mx-4">•</span> Understand & Build Smarter <span className="text-zinc-800 font-light mx-4">•</span>
      </MarqueeRow>
    </div>
  );
};

export default VelocityQuote;
