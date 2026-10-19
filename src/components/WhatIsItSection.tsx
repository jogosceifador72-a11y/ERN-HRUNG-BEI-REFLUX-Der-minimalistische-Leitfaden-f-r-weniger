import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, CheckCircle2, ShieldCheck, Clock, Layers, Zap, ArrowRight, FileCheck } from 'lucide-react';
import { CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';

export const WhatIsItSection: React.FC = () => {
  return (
    <section id="was-ist-das" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#EFE7D8] via-[#E4ECE1] to-[#E9F0E6]">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-300/30 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-300/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 backdrop-blur-md border border-emerald-800/20 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span>Kapitel 1</span> • <span>Transparenz & Konzept</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            1. Was ist das?
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-emerald-900 font-semibold italic mt-2">
            „Ernährung bei Reflux" – Der minimalistische Praxis-Leitfaden
          </p>
        </motion.div>

        {/* Core content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main narrative block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-7 sm:p-9 shadow-lg border border-emerald-900/10 relative">
              <div className="text-stone-900 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  <strong>„Ernährung bei Reflux"</strong> ist ein praktischer <strong>PDF-Ratgeber</strong>, der Ihnen auf <strong>30 Seiten</strong> präzise zeigt, welche Lebensmittel Ihren Magen beruhigen, welche Beschwerden auslösen und wie Sie beides im Alltag umsetzen.
                </p>
                <p>
                  Ohne lange Theorie oder Fachchinesisch bekommen Sie die <strong>genaue Schritt-für-Schritt-Anleitung</strong>, um Ihre Ernährung einfach und direkt in Ihrem eigenen Tempo umzustellen.
                </p>
              </div>

              {/* Minimalist philosophy highlight */}
              <div className="mt-8 pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex items-start gap-3 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">In 45 Min. durchgelesen</h4>
                    <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                      Keine 400-Seiten Enzyklopädie. Sie können heute noch starten und bereits beim nächsten Abendessen profitieren.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-3 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-950">100 % Alltagstauglich</h4>
                    <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                      Keine exotischen Superfoods oder teuren Zusätze – alle Zutaten gibt es im ganz normalen Supermarkt um die Ecke.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick check pill items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-stone-300/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-900">
                  30 Seiten auf den Punkt gebracht
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-stone-300/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-900">
                  Sofortige PDF-Lieferung per E-Mail
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-stone-300/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-900">
                  Optimiert für Handy, Tablet & PC
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-stone-300/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-stone-900">
                  Inkl. 7-Tage-Aktionsplan & 2 Rezepte
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right card: Format & Delivery details in rich dark forest / emerald contrast */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-[#1B3222] via-[#213A28] to-[#142318] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-emerald-700/30">
              {/* Radial glow */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-56 h-56 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-2">
                Lieferung & Spezifikation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                Sofortzugang in Sekunden
              </h3>

              <div className="space-y-5 my-7 text-sm text-stone-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow">
                    📱
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-bold">Format: Digitales PDF</strong>
                    Kompatibel mit jedem Smartphone, iPad/Tablet, E-Reader und PC/Mac. Bei Bedarf auch druckbar.
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow">
                    ⚡️
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-bold">Lieferung: Direkt per E-Mail</strong>
                    Nach der Zahlungsbestätigung erhalten Sie sofort Ihren persönlichen Download-Link ohne Wartezeit.
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow">
                    🔒
                  </div>
                  <div>
                    <strong className="text-white block text-sm font-bold">Sicherheit: Hotmart</strong>
                    Weltweit geschützte, 256-bit SSL-verschlüsselte Bezahlung.
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-300 block font-medium">Investition in Ihre Gesundheit:</span>
                  <span className="text-3xl font-bold text-amber-300 font-serif">{PRICE_CURRENT}</span>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Jetzt Kaufen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
