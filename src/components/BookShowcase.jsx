import React from "react";
import { Download, ShieldCheck, ArrowRight } from "lucide-react";
import { bookDetails, personalInfo } from "../data";
import bookCover from "../assets/book.png";
import { BookShaderBg } from "./ui/book-shader-bg";

const BookShowcase = () => {
  return (
    <section id="publications" className="py-24 relative bg-brand-950/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
        06. Book
      </h2>

      <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
        Written Book
      </h3>

      <div className="h-[2px] w-20 bg-white mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Book Card */}
    <div className="glass-panel p-6 sm:p-10 rounded-3xl border-white/5 shadow-2xl max-w-5xl mx-auto relative overflow-hidden isolate">
      <BookShaderBg />
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Book Cover */}
        <div className="md:col-span-4 flex justify-center">
          <img
            src={bookCover}
            alt="The Love Story"
            className="w-64 md:w-72 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-8 space-y-5 text-left">
          <span className="text-xs font-semibold text-white tracking-widest uppercase font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            Featured Book
          </span>

          <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            The Love Story
          </h4>

          <h5 className="text-base font-semibold text-slate-300">
            A Journey of Love, Dreams & Emotions
          </h5>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A heartfelt story that explores love, friendship, dreams,
            heartbreak, and the beautiful emotions that shape our lives.
            This book takes readers through a memorable journey filled
            with passion, hope, challenges, and unforgettable moments.
          </p>

          {/* Author */}
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="font-semibold">Author:</span>
            <span>Mohit Mudgil</span>
          </div>

          {/* Verified Badge */}
          <div className="flex items-center gap-2 text-xs text-white font-mono py-1">
            <ShieldCheck size={16} />
            <span>Available for reading and download</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href={bookDetails.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm border border-white/10 shadow-lg shadow-white/5 transition-all duration-300"
            >
              <Download size={16} />
              Download Book
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm border border-white/10 transition-all duration-300"
            >
              Contact Author
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

);
};

export default BookShowcase;
