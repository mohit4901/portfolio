import React from "react";
import { Download, FileText, CheckCircle, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { personalInfo, education, techStack, projects, experience } from "../data";

// Custom bulletproof local SVG brand icons to avoid ESM import version bugs
const Github = ({ size = 12, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 12, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ResumeShowcase = () => {
  return (
    <section id="resume-section" className="py-24 relative bg-brand-950/30">
      <div className="absolute inset-0 bg-accent-gradient pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
            07. Interactive Resume
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Resume Showcase
          </h3>
          <div className="h-[2px] w-20 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header Action Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-brand-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-white">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Mohit_Mudgil_Resume.pdf
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  Full Stack Engineer & AI Developer Profile
                </p>
              </div>
            </div>

            {/* Action download button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs border border-white/10 shadow-md shadow-white/5 hover:shadow-white/10 transition-all duration-300"
            >
              <Download size={14} />
              Download PDF Resume
            </a>
          </div>

          {/* Interactive Document Preview Mockup */}
          <div className="glass-panel rounded-3xl border-white/5 shadow-2xl overflow-hidden relative">
            
            {/* Real Resume Image Overlay placeholder */}
            {personalInfo.resumeImage ? (
              <div className="w-full p-2 bg-brand-900 border-b border-white/5">
                <img
                  src={personalInfo.resumeImage}
                  alt="Resume Document"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            ) : (
              /* High fidelity HTML digital replica of the resume */
              <div className="w-full p-6 sm:p-12 bg-zinc-950 text-slate-200 leading-normal max-h-[85vh] overflow-y-auto select-text font-serif border border-white/5">
                {/* PDF Header Info */}
                <div className="text-center pb-6 border-b border-white/10">
                  <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
                    {personalInfo.name}
                  </h1>
                  <h2 className="text-sm uppercase font-mono tracking-wider text-zinc-400 mb-3 font-semibold">
                    {personalInfo.title}
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-zinc-400 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-zinc-500" />
                      Panipat, Haryana
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={12} className="text-zinc-500" />
                      {personalInfo.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail size={12} className="text-zinc-500" />
                      {personalInfo.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Linkedin size={12} className="text-zinc-500" />
                      LinkedIn
                    </span>
                    <span className="flex items-center gap-1">
                      <Github size={12} className="text-zinc-500" />
                      GitHub
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div className="py-5 border-b border-white/5 text-left">
                  <h3 className="text-xs uppercase font-sans tracking-wider font-extrabold text-white mb-2.5">
                    Summary
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-zinc-300">
                    Computer Science undergraduate specializing in <strong>Full Stack Web Development</strong> and scalable backend systems. Experienced in building production-grade MERN applications with expertise in <strong>React.js, Node.js, Express.js, MongoDB, REST APIs, authentication, performance optimization, and secure payment systems</strong>. Built applications serving <strong>6k+ users</strong> with focus on scalability, low-latency APIs, and real-world engineering solutions.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="py-5 border-b border-white/5 text-left">
                  <h3 className="text-xs uppercase font-sans tracking-wider font-extrabold text-white mb-3">
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-sans text-zinc-350">
                    {techStack.map((stack, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1">
                        <strong className="text-white shrink-0 min-w-[85px]">
                          {stack.category}:
                        </strong>
                        <span className="text-zinc-400">
                          {stack.skills.map((s) => s.name).join(", ")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="py-5 border-b border-white/5 text-left">
                  <h3 className="text-xs uppercase font-sans tracking-wider font-extrabold text-white mb-4">
                    Projects
                  </h3>
                  <div className="space-y-4">
                    {projects.map((proj, pIdx) => (
                      <div key={pIdx} className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                          <strong className="text-white text-[13px] font-sans font-bold">
                            {proj.title.toUpperCase()} — {proj.subtitle}
                          </strong>
                          <span className="text-[11px] font-sans text-zinc-450 font-semibold flex items-center gap-1">
                            GitHub {proj.liveUrl && "/ Live"}
                          </span>
                        </div>
                        <p className="text-[10px] font-mono text-zinc-500 italic pb-1">
                          {proj.tech.join(", ")}
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          {proj.bulletPoints.map((bp, bpIdx) => (
                            <li key={bpIdx} className="text-[12px] text-zinc-350 leading-relaxed pl-0.5">
                              {bp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="py-5 border-b border-white/5 text-left">
                  <h3 className="text-xs uppercase font-sans tracking-wider font-extrabold text-white mb-3">
                    Education
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm font-sans mb-1">
                    <strong className="text-white font-bold">
                      Deenbandhu Chhotu Ram University of Science and Technology, Haryana
                    </strong>
                    <span className="text-zinc-450 shrink-0 font-semibold">2024-2028</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-sans text-zinc-400">
                    <span>B.Tech in Computer Science Engineering</span>
                    <span className="font-semibold text-zinc-300">{education.cgpa}</span>
                  </div>
                </div>

                {/* Achievements & Extra Curricular */}
                <div className="py-5 text-left font-sans">
                  <h3 className="text-xs uppercase font-sans tracking-wider font-extrabold text-white mb-3">
                    Achievements & Extra Curricular
                  </h3>
                  <ul className="list-disc pl-4 space-y-1.5 text-[12px] text-zinc-350">
                    <li>Finalist, <strong>Meta x Hugging Face x OpenEnv x PyTorch Hackathon 2026</strong> (Top 2.5% among 71k+ developers)</li>
                    <li>3rd Place, <strong>Devcation Delhi Hackathon 2026</strong> (IIT Delhi)</li>
                    <li>2nd Position, <strong>SSH 1.0 Hackathon</strong> (Satyaansh SoftTech Pvt. Ltd.)</li>
                    <li>3rd Runner-Up, <strong>InnovAItion Hackathon</strong> (Intuitive.ai)</li>
                    <li>Web Development Lead at <strong>Google Developers Group On Campus</strong></li>
                    <li>Active Member, <strong>LISOC — Literature Society On Campus</strong></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-4 text-center text-xs text-slate-550 font-mono">
            Scroll inside the frame to read full credentials. You can easily print or export this resume page.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeShowcase;
