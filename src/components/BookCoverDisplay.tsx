import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, FileText, Smartphone, Laptop, CheckCircle, Eye, ShieldCheck, Heart } from 'lucide-react';
import { CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';

// Direct import of new generated photorealistic table mockup matching user's uploaded cover
import coverMockupImg from '../assets/images/reflux_book_exact_cover_1792272286915.jpg';

interface BookCoverDisplayProps {
  onOpenPreview: () => void;
}

export const BookCoverDisplay: React.FC<BookCoverDisplayProps> = ({ onOpenPreview }) => {
  const [viewMode, setViewMode] = useState<'mockup' | 'card'>('mockup');

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* View switcher pill */}
      <div className="inline-flex items-center p-1 rounded-full bg-stone-900/10 backdrop-blur-md border border-stone-800/10 mb-5 text-xs font-medium shadow-inner">
        <button
          onClick={() => setViewMode('mockup')}
          className={`px-3.5 py-1.5 rounded-full transition-all ${
            viewMode === 'mockup'
              ? 'bg-emerald-800 text-white shadow-md font-semibold'
              : 'text-stone-700 hover:text-emerald-950'
          }`}
        >
          Fotorealistischer Tisch-Mockup
        </button>
        <button
          onClick={() => setViewMode('card')}
          className={`px-3.5 py-1.5 rounded-full transition-all ${
            viewMode === 'card'
              ? 'bg-emerald-800 text-white shadow-md font-semibold'
              : 'text-stone-700 hover:text-emerald-950'
          }`}
        >
          Originale Buchdeckel-Ansicht
        </button>
      </div>

      {/* Book Container with floating badges and glowing ambient light */}
      <div className="relative group max-w-sm sm:max-w-md w-full">
        {/* Ambient atmospheric backlight */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/30 via-amber-400/25 to-emerald-600/30 rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

        {viewMode === 'mockup' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-black/10 bg-[#E8E2D5]"
          >
            <img
              src={coverMockupImg}
              alt="GERD & Reflux: Der Ernährungsratgeber E-Book Cover auf dem Holztisch"
              className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
            />
            
            {/* Quick hover overlay button */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-900/50 to-transparent flex items-center justify-between text-white backdrop-blur-[2px]">
              <span className="text-xs font-semibold flex items-center gap-1.5 text-emerald-200">
                <FileText className="w-3.5 h-3.5 text-emerald-400" /> 30 Seiten PDF • 1. Auflage
              </span>
              <button
                onClick={onOpenPreview}
                className="px-3 py-1.5 bg-white/95 hover:bg-white text-stone-900 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md hover:scale-105"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-700" /> Leseprobe
              </button>
            </div>
          </motion.div>
        ) : (
          /* Reconstructed authentic cover card matching uploaded photo */
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden bg-[#FAF8F5] p-7 sm:p-9 shadow-2xl border-2 border-[#E3DBD0] flex flex-col justify-between min-h-[520px]"
          >
            {/* Botanical twig art top right */}
            <div className="absolute top-5 right-5 text-emerald-800/40 pointer-events-none">
              <svg className="w-14 h-14" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 15 C60 30, 80 40, 90 50 C80 60, 60 70, 50 90 C40 70, 20 60, 10 50 C20 40, 40 30, 50 15 Z" opacity="0.35" />
                <path d="M50 25 C55 35, 70 45, 80 50 C70 55, 55 65, 50 78 C45 65, 30 55, 20 50 C30 45, 45 35, 50 25 Z" />
              </svg>
            </div>

            <div className="space-y-4">
              <div className="border-b border-stone-300 pb-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-tight">
                  GERD & REFLUX:
                </h3>
                <h4 className="font-serif text-xl sm:text-2xl tracking-wide text-stone-800 font-semibold mt-1">
                  DER ERNÄHRUNGSRATGEBER
                </h4>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-0.5 flex-1 bg-stone-300" />
                  <span className="text-emerald-900 font-serif font-bold text-sm tracking-widest uppercase px-2">
                    ERNÄHRUNG BEI REFLUX
                  </span>
                  <div className="h-0.5 flex-1 bg-stone-300" />
                </div>

                <p className="text-stone-700 text-sm font-medium text-center">
                  Ein minimalistischer Leitfaden für ein beschwerdefreies Leben
                </p>

                <div className="w-12 h-0.5 bg-stone-300 my-3 mx-auto" />

                <p className="text-stone-600 text-xs text-center leading-relaxed">
                  Ein wissenschaftlich fundierter & minimalistischer Leitfaden für jeden Tag.
                </p>

                <div className="w-12 h-0.5 bg-stone-300 my-3 mx-auto" />

                <p className="text-[12px] font-semibold text-stone-600 text-center">
                  Dr. Med. & Nutrition Team – Erste Auflage
                </p>
              </div>
            </div>

            {/* Bottom visual section: Herbal tea, fresh ginger & lemon depiction */}
            <div className="mt-6 pt-4 border-t border-stone-200/90 bg-[#F3ECE0]/80 rounded-2xl p-4 flex items-center gap-3.5 border border-[#DFD5C5]">
              <div className="w-12 h-12 rounded-xl bg-amber-100/90 border border-amber-300/80 flex items-center justify-center shrink-0 text-2xl shadow-sm">
                🍵
              </div>
              <div className="text-xs">
                <p className="font-bold text-stone-900">
                  Magenruhe & Entlastung
                </p>
                <p className="text-stone-600 text-[11px] leading-tight mt-0.5">
                  Mit milder Ingwer-Zitronen-Balance, Fenchelpuffern & gezielter Schonkost.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Floating badge 1: Top Right */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -right-3 sm:-right-4 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 border-2 border-white ring-1 ring-black/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Sofort-PDF</span>
        </motion.div>

        {/* Floating badge 2: Bottom Left */}
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md text-stone-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xl border border-stone-200 flex items-center gap-1.5 ring-1 ring-black/5"
        >
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Inkl. 7-Tage-Plan</span>
        </motion.div>
      </div>

      {/* Reader compatibility note */}
      <div className="mt-6 flex items-center justify-center gap-4 text-xs font-medium text-stone-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-200/60 shadow-sm">
        <span className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-emerald-800" /> Smartphone
        </span>
        <span className="text-stone-300">•</span>
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-emerald-800" /> Tablet & E-Reader
        </span>
        <span className="text-stone-300">•</span>
        <span className="flex items-center gap-1.5">
          <Laptop className="w-3.5 h-3.5 text-emerald-800" /> PC / Mac
        </span>
      </div>

      {/* Quick Action below book */}
      <div className="mt-4 flex items-center gap-3 w-full max-w-sm justify-center">
        <button
          onClick={onOpenPreview}
          className="flex-1 py-2.5 px-4 rounded-xl border border-stone-300/80 bg-white/90 hover:bg-white text-stone-900 text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5 hover:shadow-md"
        >
          <BookOpen className="w-4 h-4 text-emerald-700" />
          Leseprobe ansehen
        </button>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 hover:scale-[1.02]"
        >
          Jetzt {PRICE_CURRENT}
        </a>
      </div>
    </div>
  );
};
