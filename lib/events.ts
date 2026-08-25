import { WA_NUMBER } from "./constants";

export interface Event {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  date: string; // ISO string
  dateLabel: string;
  timeLabel: string;
  venue: string;
  venueAddress: string;
  genre: string[];
  posterSrc: string;
  videoSrc?: string;
  ticketsUrl: string;
  rsvpWaUrl: string;
  featured: boolean;
}

export const events: Event[] = [
  {
    slug: "basement-breaks",
    name: "BASEMENT BREAKS",
    tagline: "VEX and FAIRY are hosting BASEMENT BREAKS.",
    description:
      "VEX and FAIRY are hosting BASEMENT BREAKS on August 31, 2026 at FOS Jakarta, a nightlife event featuring Afro House, Melodic, Progressive, and Breakbeat with seven local DJs.",
    date: "2026-08-31T22:00:00+07:00",
    dateLabel: "Monday, August 31, 2026",
    timeLabel: "22.00 - 03.00",
    venue: "FOS Jakarta",
    venueAddress: "Kemang, Jakarta",
    genre: ["Afro House", "Tech House", "Melodic", "Progressive", "Breakbeat"],
    posterSrc: "/images/poster-basement-breaks.jpg",
    videoSrc: "/videos/poster-basement-breaks.mp4",
    ticketsUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi VEXJKT, I'd like to buy tickets for BASEMENT BREAKS on Aug 31!")}`,
    rsvpWaUrl: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi VEXJKT, I'd like to RSVP a table for BASEMENT BREAKS on Aug 31!")}`,
    featured: true,
  }
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
