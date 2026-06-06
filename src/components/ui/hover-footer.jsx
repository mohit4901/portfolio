"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
  className = "",
}) => {
  const svgRef = useRef(null);

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  const [maskPosition, setMaskPosition] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (!svgRef.current) return;

    const svgRect = svgRef.current.getBoundingClientRect();

    const cxPercentage =
      ((cursor.x - svgRect.left) / svgRect.width) * 100;

    const cyPercentage =
      ((cursor.y - svgRect.top) / svgRect.height) * 100;

    setMaskPosition({
      cx: `${cxPercentage}%`,
      cy: `${cyPercentage}%`,
    });
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
viewBox="0 0 500 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) =>
        setCursor({
          x: e.clientX,
          y: e.clientY,
        })
      }
      className={`select-none uppercase cursor-pointer ${className}`}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#80eeb4" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          r="20%"
          initial={{
            cx: "50%",
            cy: "50%",
          }}
          animate={maskPosition}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 text-7xl font-bold"
        style={{
          opacity: hovered ? 0.7 : 0,
        }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-white text-7xl font-bold"
        initial={{
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
        }}
        animate={{
          strokeDashoffset: 0,
        }}
        transition={{
          duration: 4,
        }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        stroke="white"
        mask="url(#textMask)"
        className="fill-transparent text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #ffffff08 100%)",
      }}
    />
  );
};