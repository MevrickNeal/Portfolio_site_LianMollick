import React from "react";
import { X, ExternalLink, ZoomIn } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  link?: string;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  link
}: LightboxModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 px-6 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-amber-600" />
            <h4 className="font-bold text-slate-900 text-base">{title}</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 bg-slate-900 flex justify-center items-center max-h-[75vh] overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="p-4 px-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-slate-600 italic">
            {caption || title}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-xl transition-colors shrink-0"
            >
              Open External Link <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
