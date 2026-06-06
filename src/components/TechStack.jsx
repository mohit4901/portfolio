import * as React from "react";
import { FloatingIconsHero } from "./ui/floating-icons-hero-section";

// --- Authentic Colored Brand SVG Components ---

const IconGitHub = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-white" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const IconJS = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M11.6 19.3c-.3 0-.6-.1-.7-.3l-1.5-2.2.8-.5 1.1 1.6 2-.1V11.5h1v6.3c0 .8-.6 1.5-1.5 1.5h-1.2zm-4.7-2.3l.8-.5c.3.5.7.8 1.2.8.5 0 .8-.2.8-.5 0-.8-2-.5-2-1.9 0-.8.7-1.5 1.7-1.5 1 0 1.5.5 1.8.9l-.8.5c-.2-.3-.5-.5-1-.5s-.7.2-.7.5c0 .7 2 .4 2 1.8 0 1-.7 1.6-1.8 1.6-1 0-1.6-.5-2-1.2z" fill="#000000"/>
  </svg>
);

const IconNode = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" fill="#339933"/>
    <path d="M12 2v20L20 17.5v-11L12 2z" fill="#66cc33" opacity="0.85"/>
  </svg>
);

const IconMongo = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5c-.3 0-.6.1-.9.2C9.4 2.4 8 4.6 8 7.3c0 3.3 2 5.5 3 7.8.4.9.7 1.8.8 2.8.1.5.1 1 .2 1.6H12c.1-.6.1-1.1.2-1.6.1-1 .4-1.9.8-2.8 1-2.3 3-4.5 3-7.8 0-2.7-1.4-4.9-3.1-5.6-.3-.1-.6-.2-.9-.2z" fill="#47A248"/>
    <path d="M12 1.5v18.1c.1-.6.1-1.1.2-1.6.1-1 .4-1.9.8-2.8 1-2.3 3-4.5 3-7.8 0-2.7-1.4-4.9-3.1-5.6-.3-.1-.6-.2-.9-.2z" fill="#589636"/>
    <path d="M11.5 21.5c0-.6.2-1.1.5-1.5.3.4.5.9.5 1.5 0 .6-.2 1.1-.5 1.5-.3-.4-.5-.9-.5-1.5z" fill="#3F3F3F"/>
  </svg>
);

const IconExpress = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1b1f23"/>
    <path d="M5.5 8h4.5v1.5H7.25v1.5H9.5V12.5H7.25V14H10v1.5H5.5V8zM14.5 15.5l-2-2.8-2 2.8H8.7l2.8-4-2.8-4h1.8l2 2.8 2-2.8h1.8l-2.8 4 2.8 4h-1.8z" fill="#ffffff"/>
  </svg>
);

const IconTailwind = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.002C12.002 3.242 14.242 1 17 1c1.657 0 3.1 1.01 3.738 2.5H16.5c-1.933 0-3.5 1.567-3.5 3.5v1.238L8.762 12 13 15.762V17c0 1.933 1.567 3.5 3.5 3.5h4.238C20.1 21.99 18.657 23 17 23c-2.758 0-4.998-2.242-5-5.002v-1.236L7.762 13 12 9.238V6.002z" fill="#38BDF8"/>
    <path d="M6.5 6.5h4.238L6.5 10.738V6.5zm0 11V13.262L10.738 17.5H6.5z" fill="#38BDF8" opacity="0.6"/>
  </svg>
);

const IconGit = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.2 11.2L12.8 0.8c-.8-.8-2-.8-2.8 0L8.2 2.6l3.6 3.6c.4-.3.9-.5 1.4-.5 1.4 0 2.5 1.1 2.5 2.5 0 .5-.2 1-.5 1.4l3.6 3.6c.4-.3.9-.5 1.4-.5 1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-.5.2-1 .5-1.4L13 14.2c-.4.3-.9.5-1.4.5-.5 0-1-.2-1.4-.5l-2.6 2.6c.3.4.5.9.5 1.4 0 1.4-1.1 2.5-2.5 2.5S3.1 19.6 3.1 18.2s1.1-2.5 2.5-2.5c.5 0 1 .2 1.4.5l2.6-2.6c-.3-.4-.5-.9-.5-1.4 0-.5.2-1 .5-1.4L6 8.6c-.4.3-.9.5-1.4.5C3.2 9.1 2.1 8 2.1 6.6s1.1-2.5 2.5-2.5c.5 0 1 .2 1.4.5l2.2-2.2L0.8 11.2c-.8.8-.8 2 0 2.8l10.4 10.4c.8.8 2.8.8 3.6 0l10.4-10.4c.8-.8.8-2 0-2.8z" fill="#F05032"/>
  </svg>
);

const IconAntigravity = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="antigrav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f2fe" />
        <stop offset="100%" stopColor="#4facfe" />
      </linearGradient>
      <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f355da" />
        <stop offset="100%" stopColor="#7000ff" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="10" r="5" fill="url(#antigrav-grad)" />
    <ellipse cx="12" cy="14" rx="9" ry="2.5" stroke="url(#ring-grad)" strokeWidth="2" fill="none" transform="rotate(-15 12 14)" />
    <circle cx="6" cy="6" r="0.8" fill="#ffffff" />
    <circle cx="18" cy="8" r="0.6" fill="#ffffff" />
    <circle cx="9" cy="18" r="0.7" fill="#ffffff" />
  </svg>
);

const IconCursor = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h7l4 8-4 8H4l4-8-4-8z" fill="#00e5ff"/>
    <path d="M11 4h7l4 8-4 8h-7l4-8-4-8z" fill="#00b0ff" opacity="0.85"/>
  </svg>
);

const IconClaude = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#D97706" />
    <path d="M16 4.5C9.5 4.5 4.5 9.5 4.5 16s5 11.5 11.5 11.5 11.5-5 11.5-11.5S22.5 4.5 16 4.5zm1 16.5c-.8.5-1.7.5-2.5 0-1-.6-1.5-1.8-1.5-3v-4c0-1.2.5-2.4 1.5-3 .8-.5 1.7-.5 2.5 0 1 .6 1.5 1.8 1.5 3v4c0 1.2-.5 2.4-1.5 3z" fill="#ffffff"/>
  </svg>
);

const IconOpenAI = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10.8c.2-.5.3-1 .3-1.6C22.3 6.9 20 5 17.7 5c-.4 0-.8.1-1.2.2-.6-.9-1.6-1.5-2.7-1.5-1.5 0-2.8 1-3.2 2.4-.6-.4-1.3-.6-2-.6-2.3 0-4.2 1.9-4.2 4.2 0 .4.1.8.2 1.2C4 11.5 3.4 12.5 3.4 13.6c0 2.3 1.9 4.2 4.2 4.2.4 0 .8-.1 1.2-.2.6.9 1.6 1.5 2.7 1.5 1.5 0 2.8-1 3.2-2.4.6.4 1.3.6 2 .6 2.3 0 4.2-1.9 4.2-4.2 0-.4-.1-.8-.2-1.2.6-.6 1.2-1.6 1.2-2.7z" fill="#10a37f"/>
  </svg>
);

const IconHuggingFace = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
    <circle cx="9.5" cy="10.5" r="1" fill="#000000"/>
    <circle cx="14.5" cy="10.5" r="1" fill="#000000"/>
    <circle cx="7.5" cy="12.5" r="1.5" fill="#FF8A65" opacity="0.6"/>
    <circle cx="16.5" cy="12.5" r="1.5" fill="#FF8A65" opacity="0.6"/>
    <path d="M9.5 14.5c1.2 1.5 3.8 1.5 5 0" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M6 16c-1-1-2-.5-2 1s1.5 2.5 3 2.5h1" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <path d="M18 16c1-1 2-.5 2 1s-1.5 2.5-3 2.5h-1" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
  </svg>
);

const IconMeta = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#0668E1"/>
    <path d="M16.14 8.75c-1.34 0-2.5.73-3.14 1.83-.64-1.1-1.8-1.83-3.14-1.83-2.22 0-4.03 1.8-4.03 4.02 0 2.22 1.81 4.03 4.03 4.03 1.34 0 2.5-.73 3.14-1.83.64 1.1 1.8 1.83 3.14 1.83 2.22 0 4.03-1.8 4.03-4.03 0-2.21-1.81-4.02-4.03-4.02zm-6.28 6.32c-1.27 0-2.3-1.03-2.3-2.3 0-1.27 1.03-2.3 2.3-2.3 1.26 0 2.29 1.03 2.29 2.3 0 1.27-1.03 2.3-2.29 2.3zm6.28 0c-1.26 0-2.29-1.03-2.29-2.3 0-1.27 1.03-2.3 2.29-2.3 1.27 0 2.3 1.03 2.3 2.3 0 1.27-1.03 2.3-2.3 2.3z" fill="#ffffff"/>
  </svg>
);

const IconGSAP = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#111111"/>
    <circle cx="12" cy="12" r="9" stroke="#88CE02" strokeWidth="1.5"/>
    <text x="12" y="14.5" fill="#88CE02" fontSize="7" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.5">GSAP</text>
  </svg>
);

const IconFramer = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3h14v6H5V3zm0 6h14l-7 7H5V9zm7 7h7v7l-7-7z" fill="url(#framer-grad)"/>
    <defs>
      <linearGradient id="framer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bc00dd" />
        <stop offset="100%" stopColor="#ff007f" />
      </linearGradient>
    </defs>
  </svg>
);

const IconReact = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="#00d8ff" strokeWidth="2.5" fill="none" transform="rotate(0 50 50)"/>
    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="#00d8ff" strokeWidth="2.5" fill="none" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="8" ry="20" stroke="#00d8ff" strokeWidth="2.5" fill="none" transform="rotate(120 50 50)"/>
    <circle cx="50" cy="50" r="4.5" fill="#00d8ff"/>
  </svg>
);

// Map the custom tech icons to the 16 spots in the FloatingIconsHero
const techIcons = [
  { id: 1, icon: IconGitHub, className: "top-[10%] left-[10%]" },
  { id: 2, icon: IconJS, className: "top-[20%] right-[8%]" },
  { id: 3, icon: IconNode, className: "top-[80%] left-[10%]" },
  { id: 4, icon: IconMongo, className: "bottom-[10%] right-[10%]" },
  { id: 5, icon: IconExpress, className: "top-[5%] left-[30%]" },
  { id: 6, icon: IconTailwind, className: "top-[5%] right-[30%]" },
  { id: 7, icon: IconGit, className: "bottom-[8%] left-[25%]" },
  { id: 8, icon: IconAntigravity, className: "top-[40%] left-[15%]" },
  { id: 9, icon: IconCursor, className: "top-[75%] right-[25%]" },
  { id: 10, icon: IconClaude, className: "top-[90%] left-[70%]" },
  { id: 11, icon: IconOpenAI, className: "top-[50%] right-[5%]" },
  { id: 12, icon: IconHuggingFace, className: "top-[55%] left-[5%]" },
  { id: 13, icon: IconMeta, className: "top-[5%] left-[55%]" },
  { id: 14, icon: IconGSAP, className: "bottom-[5%] right-[45%]" },
  { id: 15, icon: IconFramer, className: "top-[25%] right-[20%]" },
  { id: 16, icon: IconReact, className: "top-[60%] left-[30%]" },
];

const TechStack = () => {
  return (
    <div className="border-t border-zinc-900 bg-black">
      <FloatingIconsHero
        title="Tech Stack & Tools"
        subtitle="A clean universe of languages, frameworks, databases, and DevOps tools I work with daily to build scalable full-stack applications."
        ctaText="View Featured Projects"
        ctaHref="#projects"
        icons={techIcons}
      />
    </div>
  );
};

export default TechStack;
