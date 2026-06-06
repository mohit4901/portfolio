"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export const RainingLetters = ({ className, children }) => {
  const [characters, setCharacters] = useState([]);
  const [activeIndices, setActiveIndices] = useState(new Set());

  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const charCount = 140; // Balanced count for section background
    const newCharacters = [];

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.08 + Math.random() * 0.2, // Slightly slower, more ambient fall speed
      });
    }

    return newCharacters;
  }, []);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  // Handle active indices flickering/highlighting
  useEffect(() => {
    const updateActiveIndices = () => {
      if (characters.length === 0) return;
      const newActiveIndices = new Set();
      // Flicker 2 to 5 characters at a time
      const numActive = Math.floor(Math.random() * 4) + 2;
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(newActiveIndices);
    };

    const flickerInterval = setInterval(updateActiveIndices, 80);
    return () => clearInterval(flickerInterval);
  }, [characters.length]);

  // Handle vertical falling animation
  useEffect(() => {
    let animationFrameId;

    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => {
          const nextY = char.y + char.speed;
          if (nextY >= 100) {
            const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
            return {
              char: allChars[Math.floor(Math.random() * allChars.length)],
              x: Math.random() * 100,
              y: -5,
              speed: char.speed,
            };
          }
          return {
            ...char,
            y: nextY,
          };
        })
      );
      animationFrameId = requestAnimationFrame(updatePositions);
    };

    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={cn("relative w-full overflow-hidden bg-black select-none", className)}>
      {/* Raining Characters Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {characters.map((char, index) => {
          const isActive = activeIndices.has(index);
          return (
            <span
              key={index}
              className={cn(
                "absolute font-mono transition-colors duration-100",
                isActive
                  ? "text-white text-base scale-110 font-bold z-10 animate-pulse"
                  : "text-zinc-800/20 text-xs font-light"
              )}
              style={{
                left: `${char.x}%`,
                top: `${char.y}%`,
                transform: `translate(-50%, -50%) ${isActive ? "scale(1.2)" : "scale(0.85)"}`,
                textShadow: isActive
                  ? "0 0 8px rgba(255,255,255,0.7), 0 0 16px rgba(255,255,255,0.3)"
                  : "none",
                opacity: isActive ? 0.9 : 0.25,
                transition: "color 0.1s, transform 0.1s, text-shadow 0.1s",
                willChange: "transform, top",
              }}
            >
              {char.char}
            </span>
          );
        })}
      </div>

      {/* Children Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
