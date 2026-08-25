import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { events, getEventBySlug } from "@/lib/events";
import CountdownTimer from "@/app/components/CountdownTimer";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  props: PageProps<"/events/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found | VEXJKT" };
  return {
    title: `${event.name} | VEXJKT`,
    description: event.description,
    openGraph: {
      title: `${event.name} — ${event.dateLabel}`,
      description: event.tagline,
      images: [{ url: event.posterSrc }],
    },
  };
}

export default async function EventDetailPage(
  props: PageProps<"/events/[slug]">
) {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const shareText = encodeURIComponent(
    `🎉 ${event.name} — ${event.dateLabel} at ${event.venue}, Jakarta. Get your tickets now!`
  );
  const shareWaUrl = `https://wa.me/?text=${shareText}`;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          {event.videoSrc ? (
            <video
              src={event.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <Image
              src={event.posterSrc}
              alt={event.name}
              fill
              className="object-cover object-top"
              priority
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/20" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pb-12 pt-32 w-full">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Events
          </Link>
          <h1
            className="font-display text-4xl md:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {event.name}
          </h1>
          <p className="text-xl text-emerald font-medium mt-2">{event.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Countdown */}
            <div className="card-glass rounded-2xl p-6 text-center">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-4 font-semibold">
                Event Starts In
              </p>
              <CountdownTimer targetDate={event.date} />
            </div>

            {/* Description */}
            <div>
              <h2
                className="font-display text-2xl font-black text-white mb-4"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                About This Event
              </h2>
              <p className="text-text-secondary leading-relaxed text-base">{event.description}</p>
            </div>

            {/* Genre tags */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Music Genres</h3>
              <div className="flex flex-wrap gap-2">
                {event.genre.map((g) => (
                  <span key={g} className="px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/25 text-emerald text-sm font-medium">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Share This Event</h3>
              <div className="flex flex-wrap gap-2">
                <a
                  id="share-wa-btn"
                  href={shareWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs px-4 py-2"
                >
                  <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Share to WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="card-glass rounded-2xl p-5 space-y-4 sticky top-20">
              <h3
                className="font-display text-lg font-black text-white"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                Event Details
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Date & Time</p>
                    <p className="text-sm text-white font-medium">{event.dateLabel}</p>
                    <p className="text-sm text-text-secondary">{event.timeLabel}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-xs text-text-muted font-medium">Venue</p>
                    <p className="text-sm text-white font-medium">{event.venue}</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-0.5">{event.venueAddress}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/6 pt-4 flex flex-col gap-2.5">
                <a
                  id="event-detail-tickets-btn"
                  href={event.ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-sm"
                >
                  Get Tickets
                </a>
                <a
                  id="event-detail-rsvp-btn"
                  href={event.rsvpWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center text-sm"
                >
                  RSVP Table via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
