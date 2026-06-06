import React from "react";
import { Briefcase, Calendar, CheckCircle2, FileText } from "lucide-react";
import { experience } from "../data";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="relative bg-black overflow-hidden py-12">
      {/* Conic light shining on the H1/H3 Headers ONLY */}
      <div className="w-full -mb-32 md:-mb-36 relative z-0">
        <LampContainer className="min-h-[380px] md:min-h-[400px]">
          <motion.h2
            initial={{ opacity: 0.5, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2"
          >
            04. Work Experience
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0.5, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-2 bg-gradient-to-br from-white via-zinc-100 to-zinc-400 py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-transparent uppercase font-sans"
          >
            Professional Journey
          </motion.h3>
        </LampContainer>
      </div>

      {/* Experience Cards positioned normally below the light */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden mb-8 bg-[#0a0a0a]/30"
            >
              {/* Floating accent background glow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/3 rounded-full blur-2xl"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Content Area */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-white/5">
                    <div>
                      <h4 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase size={20} className="text-white shrink-0" />
                        {exp.role}
                      </h4>
                      <span className="text-sm font-semibold text-zinc-300 font-mono">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center text-xs font-mono text-slate-400 bg-zinc-900/50 border border-white/10 px-3 py-1.5 rounded-lg shrink-0 w-fit">
                      <Calendar size={13} className="mr-1.5 text-zinc-400" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-slate-350 text-sm italic">
                     {exp.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {exp.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Offer Letter Showcase Panel */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="w-full glass-panel border-white/5 p-4 rounded-xl flex flex-col items-center bg-[#07080f]/50 text-center">
                    <div className="w-12 h-12 rounded-lg bg-zinc-900/80 border border-white/10 flex items-center justify-center text-white mb-3 shadow-inner">
                      <FileText size={22} />
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">
                      Offer Letter
                    </h5>
                    <p className="text-xs text-slate-500 mb-4 font-mono">
                      GoGlobalways Intern Credentials
                    </p>

                    {/* Offer Letter Image Container */}
                    <div className="w-full max-w-[240px] aspect-[4/5] mx-auto rounded-lg bg-slate-900 border border-white/5 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden group shadow-inner">
                      {exp.offerLetterImage ? (
                        <img
                          src={exp.offerLetterImage}
                          alt="Offer Letter"
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <div className="space-y-2 p-2">
                          <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                            Verified Intern
                          </span>
                          <p className="text-[11px] text-slate-455 leading-relaxed">
                            Internship completed successfully. GoGlobalways Web Development Offer Letter attached.
                          </p>
                          <span className="text-[10px] font-mono text-slate-605 block mt-2">
                            [offer_letter_image]
                          </span>
                        </div>
                      )}
                      
                      {/* Decorative corner lines */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
