"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STAGGER = 0.035;

export default function TextRoll({
  children,
  className,
  center = false,
  active = null,
  style = {},
}) {
  const animateState = active !== null ? (active ? "hovered" : "initial") : undefined;

  return (
    <motion.span
      initial="initial"
      whileHover={active === null ? "hovered" : undefined}
      animate={animateState}
      className={cn(
        "relative block overflow-hidden text-black dark:text-white/90",
        className
      )}
      style={{
        lineHeight: 0.85,
        ...style,
      }}
    >
      {/* Top Text (Slides up) */}
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>

      {/* Bottom Text (Slides in from bottom) */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
}
