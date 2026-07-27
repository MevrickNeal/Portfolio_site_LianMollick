import React, { useState } from "react";
import { X, Globe, CheckCircle2, Copy } from "lucide-react";

interface VercelDomainGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VercelDomainGuideModal({ isOpen, onClose }: VercelDomainGuideModalProps) {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMsg(`Copied "${text}" to clipboard!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {toastMsg && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-slate-700 animate-bounce">
            {toastMsg}
          </div>
        )}

        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-slate-900 text-lg">Custom Domain & Vercel Deployment Guide</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Target Domain Configuration</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Connecting <code className="bg-white px-2 py-0.5 rounded font-mono font-bold text-amber-800">lianmollick.bro.bd</code> & <code className="bg-white px-2 py-0.5 rounded font-mono text-amber-800">www.lianmollick.bro.bd</code>
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">1</span>
              Deploy Project on Vercel
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <p>1. Push this folder to your GitHub repo named <code className="font-mono bg-white px-1.5 py-0.5 rounded">Portfolio_site_LianMollick</code> under account <code className="font-mono bg-white px-1.5 py-0.5 rounded">MevrickNeal</code>.</p>
              <p>2. Login to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-amber-700 underline font-semibold">Vercel.com</a> and import the GitHub repository.</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">2</span>
              Configure DNS Records (bro.bd Registrar)
            </div>
            <div className="bg-slate-900 text-slate-100 p-4 rounded-2xl text-xs font-mono space-y-3">
              <p className="text-slate-400 font-sans text-[11px]">Set the following DNS Records in your domain management portal:</p>
              
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-amber-400 font-bold block">A RECORD</span>
                  <span className="text-slate-300">Host: @ (or lianmollick.bro.bd)</span><br/>
                  <span className="text-emerald-400">IP: 76.76.21.21 (Vercel) / 103.174.51.100</span>
                </div>
                <button
                  onClick={() => copyToClipboard("76.76.21.21")}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-amber-400 font-bold block">CNAME RECORD</span>
                  <span className="text-slate-300">Host: www</span><br/>
                  <span className="text-emerald-400">Target: cname.vercel-dns.com</span>
                </div>
                <button
                  onClick={() => copyToClipboard("cname.vercel-dns.com")}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
