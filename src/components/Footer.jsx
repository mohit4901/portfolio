import React from "react";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data";
import { FooterBackgroundGradient } from "./ui/hover-footer";
import ShutterText from "./ui/shutter-text";

const FlipLink = ({ children, href }) => {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="group text-slate-400 relative block overflow-hidden whitespace-nowrap text-base sm:text-lg font-bold uppercase w-fit"
      style={{
        lineHeight: 1.2,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-[110%] group-hover:text-white"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:text-white"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </a>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0F0F11]/20 mt-24 mx-4">
      <div className="max-w-7xl mx-auto p-14 relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-white" />
              <h3 className="text-white text-3xl font-bold">
                {personalInfo.name}
              </h3>
            </div>

            <p className="text-slate-400 leading-relaxed">
              {personalInfo.title}
            </p>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Portfolio
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Projects</li>
              <li>Hackathons</li>
              <li>Experience</li>
              <li>Resume</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-slate-400">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Connect
            </h4>

            <div className="flex flex-col gap-3">
              <FlipLink href={personalInfo.github}>Github</FlipLink>
              <FlipLink href={personalInfo.linkedin}>Linkedin</FlipLink>
              <FlipLink href={`mailto:${personalInfo.email}`}>Email</FlipLink>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mohit Mudgil. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-white/10 hover:border-white"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      {/* Huge Shutter Text */}
      <div className="flex h-[10rem] sm:h-[18rem] lg:h-[28rem] -mt-8 sm:-mt-14 lg:-mt-20 -mb-6 sm:-mb-12 lg:-mb-16 items-center justify-center overflow-hidden">
        <ShutterText
          text="MOHIT"
          className="z-50"
        />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;