"use client";

import React, { createContext, useContext, useState, useCallback, forwardRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";

const HoverSliderContext = createContext(undefined);

export function useHoverSliderContext() {
  const context = useContext(HoverSliderContext);
  if (context === undefined) {
    throw new Error(
      "useHoverSliderContext must be used within a HoverSliderProvider"
    );
  }
  return context;
}

export const HoverSlider = forwardRef(({ children, className, ...props }, ref) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = useCallback(
    (index) => setActiveSlide(index),
    [setActiveSlide]
  );
  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div className={className} ref={ref} {...props}>{children}</div>
    </HoverSliderContext.Provider>
  );
});
HoverSlider.displayName = "HoverSlider";

export const TextStaggerHover = forwardRef(({ text, index, className, ...props }, ref) => {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const words = text.split(" ");
  const isActive = activeSlide === index;
  const handleMouse = () => changeSlide(index);

  let charCount = 0;

  return (
    <span
      className={cn(
        "relative inline-flex flex-wrap origin-bottom overflow-hidden cursor-pointer",
        className
      )}
      {...props}
      ref={ref}
      onMouseEnter={handleMouse}
    >
      {words.map((word, wordIdx) => {
        const chars = word.split("");
        return (
          <span 
            key={wordIdx} 
            className="inline-block whitespace-nowrap mr-[0.25em]"
          >
            {chars.map((char, charIdx) => {
              const currentDelay = charCount * 0.015;
              charCount++;
              
              return (
                <span
                  key={charIdx}
                  className="relative inline-block overflow-hidden"
                >
                  <MotionConfig
                    transition={{
                      delay: currentDelay,
                      duration: 0.25,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <motion.span
                      className="inline-block opacity-40 transition-colors duration-300"
                      initial={{ y: "0%" }}
                      animate={isActive ? { y: "-110%" } : { y: "0%" }}
                    >
                      {char}
                    </motion.span>

                    <motion.span
                      className="absolute left-0 top-0 inline-block text-white font-semibold"
                      initial={{ y: "110%" }}
                      animate={isActive ? { y: "0%" } : { y: "110%" }}
                    >
                      {char}
                    </motion.span>
                  </MotionConfig>
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
});
TextStaggerHover.displayName = "TextStaggerHover";

export const clipPathVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)",
  },
};

export const HoverSliderImageWrap = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
        className
      )}
      {...props}
    />
  );
});
HoverSliderImageWrap.displayName = "HoverSliderImageWrap";

export const HoverSliderImage = forwardRef(({ index, imageUrl, className, ...props }, ref) => {
  const { activeSlide } = useHoverSliderContext();
  const isActive = activeSlide === index;

  return (
    <motion.div
      className={cn("relative overflow-hidden w-full h-full bg-zinc-950 flex items-center justify-center", className)}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      variants={clipPathVariants}
      animate={isActive ? "visible" : "hidden"}
      ref={ref}
      {...props}
    >
      {/* Blurred background fill to prevent ugly letterboxes/pillarboxes */}
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-105 pointer-events-none select-none"
      />
      
      {/* Crisp centered contain image showing full content */}
      <img
        src={imageUrl}
        alt=""
        className="relative max-w-full max-h-full object-contain z-10 p-1.5"
      />
    </motion.div>
  );
});
HoverSliderImage.displayName = "HoverSliderImage";
