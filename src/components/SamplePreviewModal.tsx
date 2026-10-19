import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, BookOpen, Check, Sparkles, ArrowRight } from 'lucide-react';
import { SAMPLE_PAGES, CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const currentSample = SAMPLE_PAGES[activeTab];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#FCFAF7] rounded-3xl shadow-2xl border border-stone-300 overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="bg-[#F3EFE9] border-b border-stone-200/80 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  Blick ins Buch – Leseprobe
                </h3>
                <p className="text-xs text-stone-600">
                  Ein exklusiver Einblick in den 30-Seiten Leitfaden
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sample Tabs */}
          <div className="flex border-b border-stone-200 bg-white/70 overflow-x-auto px-4 gap-2 pt-2 scrollbar-none">
            {SAMPLE_PAGES.map((sample, idx) => (
              <button
                key={sample.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap rounded-t-xl transition-all border-b-2 ${
                  activeTab === idx
                    ? 'border-emerald-600 text-emerald-800 bg-[#FCFAF7]'
                    : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-100/50'
                }`}
              >
                Seite {sample.pageNumber}: {sample.title.split(':')[0]}
              </button>
            ))}
          </div>

          {/* Page Content simulation */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/90 relative">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold">
                  Ernährung bei Reflux • Seite {currentSample.pageNumber} von 30
                </span>
                <span className="text-xs text-stone-500">Leseprobe</span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-stone-800 mb-2">
                {currentSample.title}
              </h4>
              <p className="text-sm font-medium text-emerald-800/90 mb-6 italic">
                {currentSample.subtitle}
              </p>

              <div className="space-y-4">
                {currentSample.content.map((paragraph, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50/80 border border-stone-100"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm leading-relaxed text-stone-700">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-dashed border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-stone-700 text-xs">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Die restlichen 27 Seiten warten im vollständigen PDF auf Sie!</span>
                </div>
                <div className="text-xs font-semibold text-stone-500">
                  Format: Sofortiger PDF-Download
                </div>
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="bg-[#F3EFE9] border-t border-stone-200/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                disabled={activeTab === 0}
                onClick={() => setActiveTab((p) => Math.max(0, p - 1))}
                className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 text-xs font-medium hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Vorherige
              </button>
              <button
                disabled={activeTab === SAMPLE_PAGES.length - 1}
                onClick={() => setActiveTab((p) => Math.min(SAMPLE_PAGES.length - 1, p + 1))}
                className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 text-xs font-medium hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
              >
                Nächste <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-medium text-stone-600 hidden sm:inline">
                Komplettes Buch: <strong className="text-stone-900">{PRICE_CURRENT}</strong>
              </span>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Jetzt Gesamtes E-Book Sichern <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
