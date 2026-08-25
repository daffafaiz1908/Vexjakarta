"use client";

import { useState } from "react";
import Image from "next/image";
import LightboxModal from "./LightboxModal";

const eventIPs = [
  {
    id: "basement-breaks",
    name: "BASEMENT BREAKS",
    description: "VEX and FAIRY host an underground experience with seven local DJs.",
    src: "/images/poster-basement-breaks.jpg",
    videoSrc: "/videos/poster-basement-breaks.mp4",
  }
];

export default function AboutSection() {
  const [lightbox, setLightbox] = useState<{ src: string; videoSrc?: string; alt: string } | null>(null);

  return (
    <>
      <section id="about" className="section-padding relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald/4 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Brand story */}
            <div>
              <span className="section-label">About VEXJKT</span>
              <h2
                className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                Jakarta&apos;s Most Trusted Night Experience
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  With a proven track record of shaping Jakarta&apos;s premium nightlife scene, VEXJKT stands as the benchmark for world-class event execution. For years, we have transcended traditional event management, specializing in crafting bespoke atmospheres and curating moments that resonate far beyond the dance floor.
                </p>
                <p>
                  From orchestrating exclusive gatherings to executing massive sold-out productions at elite venues, every VEXJKT experience is defined by our three foundational pillars: <span className="text-white font-medium">world-class musical talent</span>, <span className="text-white font-medium">immersive thematic design</span>, and <span className="text-white font-medium">uncompromising safety protocols</span>.
                </p>
                <p>
                  Whether you are seeking the pinnacle of urban nightlife or a seasoned, strategic partner for high-end brand events — VEXJKT consistently delivers excellence.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { num: "50+", label: "Future Events" },
                  { num: "10K+", label: "Guests Served" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 card-glass rounded-xl">
                    <div
                      className="font-display text-2xl font-black text-emerald"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {s.num}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Signature IPs */}
            <div>
              <h3
                className="font-display text-xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                Our Signature Event IPs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventIPs.map((ip) => (
                  <button
                    key={ip.id}
                    id={`ip-poster-${ip.id}`}
                    onClick={() => setLightbox({ src: ip.src, videoSrc: ip.videoSrc, alt: ip.name })}
                    className="group relative rounded-xl overflow-hidden aspect-3/4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
                  >
                    {ip.videoSrc ? (
                      <video
                        src={ip.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <Image
                        src={ip.src}
                        alt={ip.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col justify-end p-3 text-left">
                      <p
                        className="font-display text-sm font-bold text-white leading-tight"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                      >
                        {ip.name}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {ip.description}
                      </p>
                    </div>
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-3 text-center">
                Click any poster to view full size
              </p>
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <LightboxModal src={lightbox.src} videoSrc={lightbox.videoSrc} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
