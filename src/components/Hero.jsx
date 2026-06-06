import React from "react";
import { Mail, ArrowDown, MapPin } from "lucide-react";
import { personalInfo } from "../data";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const GithubIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black bg-grid-pattern">
      {/* WebGL Shader Animation Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-65 mix-blend-screen">
        <ShaderAnimation />
      </div>
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider mb-8 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          Open for Opportunities
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-white mb-4 select-none leading-none">
          Mohit <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Mudgil</span>
        </h1>

        {/* Role */}
        <h2 className="text-lg sm:text-2xl font-bold text-zinc-400 mb-6 font-mono select-none tracking-widest uppercase">
          Software Engineer &nbsp;|&nbsp; Full Stack Developer
        </h2>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-white mx-auto mb-6" />

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed select-none">
          {personalInfo.subTitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#projects"
            className="w-full sm:w-auto px-8 py-3 text-sm font-extrabold rounded-xl border border-white/20 bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5 hover:shadow-white/10 hover:-translate-y-0.5 transition-all duration-300">
            View Projects
          </a>
          <a href="#resume-section"
            className="w-full sm:w-auto px-8 py-3 text-sm font-extrabold rounded-xl border border-white/10 text-white bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
            View Resume
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center justify-center gap-6 text-zinc-400 mb-16">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
            <GithubIcon size={22} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
            <LinkedinIcon size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors" title="Email">
            <Mail size={22} />
          </a>
          <span className="h-5 w-px bg-zinc-800" />
          <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 uppercase tracking-wider select-none">
            <MapPin size={13} className="text-white animate-bounce" />
            Panipat, Haryana
          </span>
        </div>

        {/* Scroll indicator */}
        <a href="#about"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-zinc-850 text-zinc-500 hover:border-white hover:text-white transition-all duration-200">
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
