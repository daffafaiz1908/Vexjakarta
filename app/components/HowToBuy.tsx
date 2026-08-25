const steps = [
  {
    num: "01",
    label: "Choose Event",
    desc: "Browse our upcoming events and pick the night that calls to you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Click Tickets",
    desc: "Hit the Tickets button on any event card to see available ticket types.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Complete Payment",
    desc: "Follow the payment instructions on our trusted ticketing partner platform.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "Show Your Ticket",
    desc: "Present your e-ticket at the door and step into the experience.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function HowToBuy() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Simple Process</span>
          <h2
            className="font-display text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            How to Get Your Tickets
          </h2>
          <p className="text-text-secondary mt-3 max-w-md mx-auto">
            Securing your spot at a VEXJKT event takes less than 2 minutes.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting line (desktop) */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-emerald/30 to-transparent hidden lg:block" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative flex flex-col items-center text-center p-6 card-glass rounded-2xl group hover:border-emerald/25 transition-all duration-300"
            >
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald group-hover:bg-emerald/15 group-hover:border-emerald/40 transition-all duration-300">
                  {step.icon}
                </div>
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald text-black text-xs font-black flex items-center justify-center"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {i + 1}
                </span>
              </div>

              <h3
                className="font-display text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {step.label}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
