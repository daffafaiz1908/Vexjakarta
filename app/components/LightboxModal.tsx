"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxModalProps {
  src: string;
  videoSrc?: string;
  alt: string;
  onClose: () => void;
}

export default function LightboxModal({ src, videoSrc, alt, onClose }: LightboxModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="relative z-10 max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            controls
            playsInline
            className="rounded-xl object-contain max-h-[85vh] w-auto mx-auto shadow-2xl bg-black"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            className="rounded-xl object-contain max-h-[85vh] w-auto mx-auto shadow-2xl"
            priority
          />
        )}
        <p className="text-center text-sm text-text-secondary mt-3">{alt}</p>
      </div>
    </div>
  );
}
