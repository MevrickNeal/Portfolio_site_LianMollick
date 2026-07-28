import React, { useState } from "react";
import { X, ZoomIn, ExternalLink } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  link?: string;
}

export default function LightboxModal({ isOpen, onClose, imageSrc, title, caption, link }: LightboxModalProps) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="relative max-w-5xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:scale-110 z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src={imageSrc}
            alt={title}
            className="lightbox-img w-full"
            style={{ maxHeight: '80vh', objectFit: 'contain', background: '#0f172a' }}
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-white font-semibold text-base">{title}</p>
          {caption && <p className="text-slate-400 text-sm mt-1">{caption}</p>}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm text-portfolio-teal hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
