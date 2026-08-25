"use client";

import Image from "next/image";
import { WA_LINKS } from "@/lib/constants";

export default function HeroSection() {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="VEXJKT nightlife event background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-linear-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-overlay opacity-30" />

      {/* Emerald glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-emerald/6 blur-[120px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald/30 bg-emerald/8 text-emerald text-xs font-bold tracking-[0.15em] uppercase mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
          Jakarta&apos;s Premier Nightlife Events
        </div>

        {/* Headline */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          <span className="block text-white">As Long As The Speakers Survive,</span>
          <span className="block shimmer-text">We Don't Stop</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto mb-12 leading-relaxed">
          We organize events,{" "}
          <span className="text-white font-medium">you make memories.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-explore-btn"
            onClick={scrollToEvents}
            className="btn-primary text-sm px-8 py-3.5 glow-emerald"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Explore Events
          </button>
          <a
            id="hero-book-btn"
            href={WA_LINKS.rsvpTable}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-8 py-3.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Table
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-16">
          {[
            { num: "50+", label: "Future Events Organized" },
            { num: "10K+", label: "Happy Guests" },
            { num: "1", label: "Upcoming Event" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-3xl font-black text-emerald"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {stat.num}
              </div>
              <div className="text-xs text-text-muted font-medium tracking-wide mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <div className="bounce-arrow text-emerald">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
