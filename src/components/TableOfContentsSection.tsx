import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CHAPTERS, CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';
import { BookOpen, FileText, ChevronDown, CheckCircle, Sparkles, Eye, ArrowRight } from 'lucide-react';

interface TableOfContentsSectionProps {
  onOpenPreview: () => void;
}

export const TableOfContentsSection: React.FC<TableOfContentsSectionProps> = ({ onOpenPreview }) => {
  const [openChapter, setOpenChapter] = useState<number | null>(0);

  const toggleChapter = (index: number) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return (
    <section id="inhalt" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#E9ECE4] via-[#F1EDE3] to-[#EBE4D5] border-t border-stone-300/80">
      {/* Soft warm ambient blur */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 backdrop-blur-md border border-emerald-800/20 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span>Inhaltsübersicht</span> • <span>30 Seiten Praxis</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Was steckt in den 30 Seiten?
          </h2>
          <p className="font-serif text-lg sm:text-xl text-stone-800 font-semibold mt-2">
            Strukturiert von der Magenanatomie bis zum 7-Tage-Aktionsplan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter accordion with scroll animations */}
          <div className="lg:col-span-8 space-y-3.5">
            {CHAPTERS.map((chapter, index) => {
              const isOpen = openChapter === index;
              return (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-white/95 border-emerald-600/50 shadow-lg ring-2 ring-emerald-600/10'
                      : 'bg-white/80 backdrop-blur-sm border-stone-300/80 hover:border-emerald-500/40 hover:bg-white/90 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleChapter(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-950 font-serif font-black text-lg flex items-center justify-center shrink-0 border border-emerald-200 shadow-sm">
                        {chapter.number}
                      </span>
                      <div>
                        <div className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase">
                          {chapter.pages}
                        </div>
                        <h3 className="font-serif font-bold text-stone-950 text-base sm:text-lg">
                          {chapter.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 p-1 rounded-full text-stone-400">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-emerald-700' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 pt-1 text-stone-700 text-sm leading-relaxed border-t border-stone-150 mt-1"
                    >
                      <p className="bg-[#FAF7F2] p-4 rounded-xl border border-stone-200/80 font-normal">
                        {chapter.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Quick Action under chapters */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-900/10 backdrop-blur-md p-5 rounded-2xl border border-emerald-800/20 shadow-sm"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-900 font-bold">
                <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Möchten Sie einen Blick in die Seiten werfen?</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenPreview}
                className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <Eye className="w-4 h-4" /> Leseprobe öffnen
              </motion.button>
            </motion.div>
          </div>

          {/* Right sidebar: What's included summary */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-xl rounded-3xl p-7 shadow-xl border border-emerald-900/10 space-y-6"
          >
            <h3 className="font-serif font-bold text-xl text-stone-950 border-b border-stone-200/80 pb-3">
              Ihr Komplettpaket enthält:
            </h3>

            <div className="space-y-4 text-sm text-stone-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>30-seitiges E-Book (PDF)</strong> direkt auf den Punkt</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>7-Tage-Magenruhe-Aktionsplan</strong> mit Uhrzeiten</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>2 exklusive Magen-Schonrezepte</strong> (schnell zubereitet)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Trigger- & Ampel-Listen</strong> (Grün, Gelb, Rot)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>SOS-Sofortcheckliste</strong> für akute Reflux-Schübe</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Ernährungstagebuch-Vorlage</strong> für persönliche Trigger</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200/80">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Jetzt für {PRICE_CURRENT} bestellen</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <span className="text-[11px] text-stone-600 text-center block mt-2.5 font-medium">
                Sofortiger PDF-Download direkt nach dem Kauf
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
