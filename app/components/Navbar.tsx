"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WA_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [igOpen, setIgOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Events", href: "/events" },
    { label: "About", href: "/#about" },
    { label: "Gallery", href: "/#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-white/6 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#home" className="relative flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="VEXJKT Logo"
            width={240}
            height={80}
            className="h-16 md:h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}

          {/* Instagram dropdown */}
          <div className="relative ml-1">
            <button
              id="nav-social-btn"
              onClick={() => setIgOpen((v) => !v)}
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-full hover:bg-white/5 flex items-center gap-1"
            >
              Social
              <svg
                className={`w-3 h-3 transition-transform ${igOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {igOpen && (
              <div className="absolute top-full mt-2 right-0 w-44 card-glass rounded-xl overflow-hidden shadow-xl">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 text-sm text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setIgOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="nav-contact-btn"
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-xs"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.25 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-1.75" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-1.75" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        } bg-background/98 backdrop-blur-md border-b border-white/6`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-text-secondary hover:text-white border-b border-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 text-base font-medium text-text-secondary hover:text-white border-b border-white/5 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Instagram
          </a>
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
