"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: "music",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    label: "Music Quality",
    title: "Genres That Move You",
    description:
      "We curate the finest DJs and selectors across every genre you love: Top 40, EDM, R&B, Hip-Hop, Jersey Club, Afrobeats, and Amapiano. Every event is a sonic journey designed to keep you on the floor.",
    tags: ["Top 40", "EDM", "R&B", "Hip-Hop", "Jersey", "Afrobeats", "Amapiano"],
  },
  {
    id: "experience",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "Unforgettable Experience",
    title: "Moments That Last Forever",
    description:
      "High crowd energy, vibrant themes, immersive decor, and production value that rivals international clubs. When you walk into a VEXJKT event, you leave knowing you just experienced something rare.",
    tags: ["Vibrant Themes", "Immersive Decor", "Premium Production", "High Energy"],
  },
  {
    id: "safety",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Your Safety Comes First",
    title: "Party Hard, Stay Safe",
    description:
      "Every VEXJKT event is staffed with trained security, venue-grade safety protocols, and on-site support. We create a welcoming environment where everyone can enjoy themselves without worry.",
    tags: ["Security Checks", "On-site Staff", "Safe Environment", "Zero Tolerance"],
  },
];

export default function ValueSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[active];

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 rounded-full bg-emerald/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="section-label mx-auto">Why VEXJKT</span>
          <h2
            className="font-display text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Our Specialty
          </h2>
        </div>

        {/* Slider tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {slides.map((s, i) => (
            <button
              key={s.id}
              id={`slider-tab-${s.id}`}
              onClick={() => { setActive(i); setPaused(true); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-emerald text-black"
                  : "text-text-secondary hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Slide content */}
        <div
          key={slide.id}
          className="card-glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center"
          style={{ animation: "fade-in 0.4s ease forwards" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald">
              {slide.icon}
            </div>
          </div>
          <h3
            className="font-display text-2xl md:text-3xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {slide.title}
          </h3>
          <p className="text-text-secondary leading-relaxed max-w-lg mx-auto mb-6">
            {slide.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {slide.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setActive(i); setPaused(true); }}
              className={`transition-all duration-300 rounded-full ${
                active === i ? "w-8 h-2 bg-emerald" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
