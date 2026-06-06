import React from "react";
import { motion } from "framer-motion";
import { Calendar, Globe } from "lucide-react";
import { hackathons } from "../data";
import { HoverSlider, TextStaggerHover, useHoverSliderContext, clipPathVariants } from "./ui/hover-slider";

const HackathonRow = ({ win, index }) => {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const isActive = activeSlide === index;

  return (
    <div
      onMouseEnter={() => changeSlide(index)}
      className="relative py-8 border-b border-white/5 flex flex-col justify-center min-h-[120px] group cursor-pointer"
    >
      {/* Left side content (Title, details, and description) */}
      <div className="w-full lg:max-w-[65%] text-left">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2">
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border transition-all duration-300 ${
            isActive 
              ? "bg-white border-white text-black" 
              : "bg-white/5 border-white/5 text-zinc-450"
          }`}>
            {win.achievement}
          </span>
          <span className="text-[10px] font-mono text-zinc-550 flex items-center gap-1">
            <Calendar size={10} />
            {win.year}
          </span>
        </div>

        <TextStaggerHover
          text={win.title}
          index={index}
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors duration-300"
        />

        {/* Dynamic expanding description inside the row */}
        <motion.div
          initial={false}
          animate={{ 
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="overflow-hidden"
        >
          <p className="mt-3 text-sm text-slate-350 leading-relaxed pr-4">
            {win.description}
          </p>
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mt-3">
            <Globe size={12} />
            <span>Scope: {win.scope}</span>
          </div>
        </motion.div>
      </div>

      {/* Desktop View: Absolute image aligned with this hovered row */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-48 pointer-events-none z-30 hidden lg:block">
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={clipPathVariants}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.6 }}
          className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex items-center justify-center"
        >
          {/* Blurred backdrop image */}
          <img
            src={win.photo}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-105"
          />
          {/* Crisp centered contain image */}
          <img
            src={win.photo}
            alt={win.title}
            className="relative max-w-full max-h-full object-contain z-10 p-2"
          />
          <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20"></div>
        </motion.div>
      </div>

      {/* Mobile/Tablet View: Inline image expanding inside active row */}
      <motion.div
        initial={false}
        animate={{ 
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0
        }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="overflow-hidden block lg:hidden w-full"
      >
        <div className="mt-4 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-zinc-950 flex items-center justify-center">
          <img
            src={win.photo}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-105"
          />
          <img
            src={win.photo}
            alt={win.title}
            className="relative max-w-full max-h-full object-contain z-10 p-2"
          />
          <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 relative bg-black border-t border-zinc-900">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
            05. Achievements
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Hackathons & Key Milestones
          </h3>
          <div className="h-[2px] w-20 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Hover Slider list */}
        <HoverSlider className="relative flex flex-col">
          {hackathons.map((win, index) => (
            <HackathonRow key={index} win={win} index={index} />
          ))}
        </HoverSlider>
      </div>
    </section>
  );
};

export default Hackathons;
