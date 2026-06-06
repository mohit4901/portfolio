import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CurvedNavbar } from "./ui/curved-navbar";
import { VerticalStripsNavbar } from "./ui/vertical-strips-navbar";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check viewport width for responsive menu selection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll detection for branding bar blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu is active
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isActive]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Book", href: "#publications" },
    { name: "Hobbies", href: "#hobbies" },
  ];

  return (
    <>
      {/* Branding Header Bar */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-45 transition-all duration-300 py-6 px-6 sm:px-10 flex items-center justify-between pointer-events-auto",
          scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={() => setIsActive(false)}
          className="text-lg font-extrabold tracking-tight text-white select-none hover:text-zinc-300 transition-colors z-50"
        >
          Mohit Mudgil
        </a>

        {/* Right side controls (Resume + Menu Toggle) */}
        <div className="flex items-center gap-4 z-50">
          <a
            href="#resume-section"
            className={cn(
              "px-4 py-2 text-xs font-bold uppercase tracking-wider rounded border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300",
              isActive ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            Resume
          </a>

          {/* Hamburger Toggle Button */}
          <div
            onClick={() => setIsActive(!isActive)}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border shrink-0",
              isActive
                ? "bg-white border-white text-black"
                : "bg-black/60 backdrop-blur-md border-white/15 text-white hover:border-white/30"
            )}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between items-center">
              <span
                className={cn(
                  "block h-0.5 w-5 transition-all duration-300 ease-out origin-center",
                  isActive ? "bg-black rotate-45 translate-y-1.5" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 transition-all duration-200 ease-out origin-center",
                  isActive ? "bg-black opacity-0 scale-0" : "bg-white"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 transition-all duration-300 ease-out origin-center",
                  isActive ? "bg-black -rotate-45 -translate-y-2" : "bg-white"
                )}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Dual Mode Navbar Overlays */}
      <AnimatePresence mode="wait">
        {isActive && (
          isMobile ? (
            <CurvedNavbar
              key="mobile-nav"
              setIsActive={setIsActive}
              navItems={navLinks}
            />
          ) : (
            <VerticalStripsNavbar
              key="desktop-nav"
              setIsActive={setIsActive}
              navItems={navLinks}
            />
          )
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
