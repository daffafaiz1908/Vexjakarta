"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/events";
import Footer from "../components/Footer";

type Filter = "all" | "sept" | "oct";

export default function EventsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return events;
    return events.filter((e) => {
      const month = new Date(e.date).getMonth(); // 0-indexed
      if (filter === "sept") return month === 8;
      if (filter === "oct") return month === 9;
      return true;
    });
  }, [filter]);

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-12 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-emerald/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="section-label">All Events</span>
          <h1
            className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Upcoming Events
          </h1>
          <p className="text-text-secondary max-w-lg">
            Discover all VEXJKT events. Book your table, grab your tickets, and step into the night.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="px-6 lg:px-10 mb-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          {(["all", "sept", "oct"] as Filter[]).map((f) => {
            const labels: Record<Filter, string> = {
              all: "All Events",
              sept: "September",
              oct: "October",
            };
            return (
              <button
                key={f}
                id={`filter-${f}`}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-emerald text-black"
                    : "border border-white/10 text-text-secondary hover:text-white hover:border-white/20"
                }`}
              >
                {labels[f]}
              </button>
            );
          })}
          <span className="ml-auto text-xs text-text-muted">
            {filtered.length} event{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Events grid */}
      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-text-muted">
              <p className="text-lg">No events found for this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="card-glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald/10"
                >
                  <div className="relative h-64 overflow-hidden bg-black">
                    {event.videoSrc ? (
                      <video
                        src={event.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <Image
                        src={event.posterSrc}
                        alt={event.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
                    {event.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald text-black text-xs font-bold">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h2
                      className="font-display text-xl font-black text-white mb-1 group-hover:text-emerald transition-colors"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {event.name}
                    </h2>
                    <p className="text-text-secondary text-sm mb-3">{event.tagline}</p>
                    <div className="flex flex-col gap-1 text-xs text-text-secondary">
                      <span>📅 {event.dateLabel} · {event.timeLabel}</span>
                      <span>📍 {event.venue}, Jakarta</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {event.genre.slice(0, 3).map((g) => (
                        <span key={g} className="px-2.5 py-0.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
