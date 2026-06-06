import React from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "../data";

const GithubIcon = ({ size = 15 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const CommitsGrid = () => {
  const gridWidth = 16;
  const gridHeight = 3;

  const cellData = React.useMemo(() => {
    const weights = [
      "#161b22", "#161b22", "#161b22", "#161b22", // empty
      "#0e4429", "#0e4429",                       // low
      "#006d32",                                  // medium
      "#26a641",                                  // high
      "#39d353"                                   // very high
    ];
    return Array.from({ length: gridWidth * gridHeight }).map(() => {
      const color = weights[Math.floor(Math.random() * weights.length)];
      const delay = `${(Math.random() * 0.8).toFixed(1)}s`;
      return { color, delay };
    });
  }, [gridWidth, gridHeight]);

  return (
    <div
      className="grid gap-[1px] opacity-80 group-hover:opacity-100 transition-opacity"
      style={{
        gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
        gridTemplateRows: `repeat(${gridHeight}, 1fr)`,
        width: "100px",
        height: "17px"
      }}
    >
      {cellData.map((cell, index) => {
        const isContribution = cell.color !== "#161b22";
        return (
          <div
            key={index}
            className={`h-full w-full rounded-[1px] ${
              isContribution ? "animate-highlight" : "bg-[#161b22]"
            }`}
            style={{
              animationDelay: cell.delay,
              "--highlight": cell.color,
            }}
          />
        );
      })}
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 bg-black border-t border-zinc-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="mb-14">
        <p className="text-xs uppercase tracking-widest font-mono text-orange-500 mb-2">03 / Projects</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</h2>
        <div className="section-divider mt-3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card-panel card-panel-hover rounded-xl flex flex-col">
            <div className="p-6 sm:p-8 flex-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-extrabold text-white">{project.title}</h3>
                  <p className="text-xs font-mono text-orange-500 mt-0.5 uppercase tracking-wider">{project.subtitle}</p>
                </div>
                <Code2 size={20} className="text-zinc-700 shrink-0 mt-1" />
              </div>

              <p className="text-sm text-zinc-300 mb-5 leading-relaxed">{project.description}</p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {project.bulletPoints.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-450 leading-relaxed">
                    <span className="text-orange-500 shrink-0 mt-0.5 font-bold">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* Footer actions */}
            <div className="px-6 sm:px-8 py-4 border-t border-white/5 flex items-center justify-between bg-zinc-950/60 rounded-b-xl">
              <a href={project.githubUrl} target="_blank" rel="noreferrer"
                className="group flex items-center gap-2 text-xs font-bold text-zinc-450 hover:text-white transition-colors">
                <GithubIcon size={14} /> 
                <span>GitHub</span>
                <CommitsGrid />
              </a>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-orange-400 hover:text-orange-500 transition-colors">
                  Live Link <ArrowUpRight size={13} />
                </a>
              ) : (
                <span className="text-xs text-zinc-600 font-mono italic">Local only</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
