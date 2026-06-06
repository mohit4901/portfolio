import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";
import BookShowcase from "./components/BookShowcase";
import ResumeShowcase from "./components/ResumeShowcase";
import Hobbies from "./components/Hobbies";
import VelocityQuote from "./components/VelocityQuote";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-950 text-slate-100 antialiased overflow-x-hidden">
      {/* Premium ambient decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none"></div>
      
      {/* Sticky Header Navbar */}
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Tech Stack Skills Section */}
        <TechStack />

        {/* Projects Grid Section */}
        <Projects />

        {/* Professional Experience Section */}
        <Experience />

        {/* Hackathon Wins and Lightbox Certification Section */}
        <Hackathons />

        {/* Written Book Publication Section */}
        <BookShowcase />

        {/* Visual & Text-Optimized Resume Section */}
        <ResumeShowcase />

        {/* Personal Hobbies Grid Section */}
        <Hobbies />
      </main>

      {/* Velocity Scrolling Motivational Quote */}
      <VelocityQuote />

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}

export default App;
