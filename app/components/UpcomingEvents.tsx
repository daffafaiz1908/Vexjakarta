"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { events, type Event } from "@/lib/events";

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg card-glass rounded-2xl overflow-hidden shadow-2xl">
        {/* Poster */}
        <div className="relative h-56 w-full bg-black">
          {event.videoSrc ? (
            <video
              src={event.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image src={event.posterSrc} alt={event.name} fill className="object-cover" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-[#111]/90 via-transparent to-transparent" />
          <button
            id="event-modal-close"
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 transition-colors flex items-center justify-center text-white"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h3
            className="font-display text-2xl font-black text-white mb-1"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {event.name}
          </h3>
          <p className="text-text-secondary text-sm mb-4">{event.tagline}</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-emerald mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Date</p>
                <p className="text-xs text-white font-medium">{event.dateLabel}</p>
                <p className="text-xs text-text-secondary">{event.timeLabel}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-emerald mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-xs text-text-muted">Venue</p>
                <p className="text-xs text-white font-medium">{event.venue}</p>
                <p className="text-xs text-text-secondary leading-tight">{event.venueAddress}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {event.genre.map((g) => (
              <span key={g} className="px-2.5 py-0.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-medium">
                {g}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <Link href={`/events/${event.slug}`} className="btn-secondary w-full text-center text-xs" onClick={onClose}>
              View Full Details
            </Link>
            <a href={event.rsvpWaUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full text-center text-xs">
              RSVP Table via WhatsApp
            </a>
            <a href={event.ticketsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-xs">
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="card-glass rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald/10">
        {/* Poster */}
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
            <Image src={event.posterSrc} alt={event.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
          {event.featured && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald text-black text-xs font-bold tracking-wide">
              Featured
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <h3
            className="font-display text-xl font-black text-white mb-1"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {event.name}
          </h3>
          <p className="text-text-secondary text-sm mb-3 line-clamp-2">{event.tagline}</p>

          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <svg className="w-3.5 h-3.5 text-emerald shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {event.dateLabel} · {event.timeLabel}
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <svg className="w-3.5 h-3.5 text-emerald shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.venue}, Jakarta
            </div>
          </div>

          <div className="flex gap-2">
            <button id={`tickets-btn-${event.slug}`} onClick={() => setModalOpen(true)} className="btn-primary flex-1 text-xs py-2.5">
              Tickets
            </button>
            <a href={event.rsvpWaUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center text-xs py-2.5">
              RSVP Table
            </a>
          </div>
        </div>
      </div>

      {modalOpen && <EventModal event={event} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default function UpcomingEvents() {
  return (
    <section id="events" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">Upcoming Events</span>
          <h2
            className="font-display text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            What&apos;s Coming Up
          </h2>
          <p className="text-text-secondary mt-3 max-w-lg">
            From intimate club nights to large-scale parties — VEXJKT delivers unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/events" className="btn-ghost text-sm px-8">
            View All Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
