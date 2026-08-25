"use client";

import { useState } from "react";

const faqs = [
  {
    id: "venue",
    q: "Where do VEXJKT events take place?",
    a: "VEXJKT events are held at premium venues across Jakarta — from iconic clubs in SCBD and Senayan to curated warehouse spaces in Kemang. The specific venue is always announced with the event details.",
  },
  {
    id: "rsvp",
    q: "How do I RSVP a table or reserve a VIP spot?",
    a: "Table reservations are handled directly via WhatsApp. Click the 'Book Table' button or the 'RSVP Table' button on any event card. Our team will respond within a few hours to confirm your reservation and discuss package options.",
  },
  {
    id: "tickets",
    q: "Where can I buy tickets for VEXJKT events?",
    a: "All ticket sales are handled exclusively via WhatsApp. You can click the 'Get Tickets' button on any event page to chat directly with our team and secure your spot.",
  },
  {
    id: "dresscode",
    q: "Is there a dress code?",
    a: "Yes — most VEXJKT events have a smart-casual to smart dress code. Chrome Noir events enforce a strict fashion dress code. Details are always specified in the event listing. We reserve the right to deny entry for non-compliance.",
  },
  {
    id: "security",
    q: "What safety measures are in place?",
    a: "All attendees go through security screening at entry. We have trained security personnel on-site throughout the event. We operate a strict zero-tolerance policy for any unsafe or disrespectful behavior.",
  },
  {
    id: "collab",
    q: "Can we collaborate with VEXJKT for a brand or private event?",
    a: "Absolutely. VEXJKT works with brands, corporates, and private clients to produce bespoke events. Reach out via the 'Private / Brand Event' WhatsApp quick message in the footer, or contact us at mariofauzanp@gmail.com.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-60 rounded-full bg-emerald/3 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label mx-auto">FAQ</span>
          <h2
            className="font-display text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div
                key={faq.id}
                className={`card-glass rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-emerald/30" : ""
                }`}
              >
                <button
                  id={`faq-${faq.id}`}
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-white">{faq.q}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "border-emerald bg-emerald/10 text-emerald rotate-45"
                        : "border-white/15 text-text-secondary"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
