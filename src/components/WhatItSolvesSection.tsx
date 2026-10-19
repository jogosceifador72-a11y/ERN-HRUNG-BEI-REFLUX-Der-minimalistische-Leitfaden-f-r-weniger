import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Search, TrendingUp, Moon, UtensilsCrossed, ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';

export const WhatItSolvesSection: React.FC = () => {
  const solutions = [
    {
      badge: 'Hürde 1 beseitigt',
      title: 'Ständiges Sodbrennen',
      text: 'Löst die Frage, warum der Schließmuskel nicht richtig schließt, und zeigt Ihnen, wie Sie ihn mit der richtigen Lebensmittelauswahl entlasten.',
      icon: <Shield className="w-6 h-6 text-emerald-800" />,
      highlight: 'Mechanische Magenentlastung',
      details: [
        'Warum Druck im Magenraum die Säure nach oben drückt',
        'Welche Lebensmittel den Schließmuskel (Sphinkter) erschlaffen lassen',
        'Wie Sie Schleimhäute mit sanften Puffern schützen',
      ],
    },
    {
      badge: 'Hürde 2 beseitigt',
      title: 'Unsicherheit beim Essen',
      text: 'Beendet das Rätselraten über Ihre Auslöser mit Trigger-Listen, Ernährungstagebuch und SOS-Checkliste.',
      icon: <Search className="w-6 h-6 text-emerald-800" />,
      highlight: 'Glasklare Trigger-Identifikation',
      details: [
        'Umfassende Lebensmittel-Ampel (Grün, Gelb, Rot)',
        'SOS-Sofortcheckliste bei akuten Reflux-Attacken',
        'Praktisches Vorlagen-Tagebuch für Ihre persönlichen Verträglichkeiten',
      ],
    },
    {
      badge: 'Hürde 3 beseitigt',
      title: 'Verlorene Zeit und Geld',
      text: 'Verhindert, dass Sie mit falschen Tees, Hausmitteln oder Fehlern wie spätem Essen weiter Zeit und Geld verschwenden.',
      icon: <TrendingUp className="w-6 h-6 text-emerald-800" />,
      highlight: 'Schluss mit gefährlichen Mythen',
      details: [
        'Warum Backpulver oder Pfefferminztee Sodbrennen verschlimmern können',
        'Die optimale Zeitspanne zwischen Abendessen und Schlafengehen',
        'Günstige Grundnahrungsmittel statt teurer Spezialpräparate',
      ],
    },
  ];

  return (
    <section id="was-loest-es" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#E9F0E6] via-[#DFE9DC] to-[#E9ECE4] border-t border-stone-300/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-300/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 backdrop-blur-md border border-emerald-800/20 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span>Kapitel 2</span> • <span>Konkrete Transformation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            2. Was löst es?
          </h2>
          <p className="font-serif text-lg sm:text-xl text-stone-800 font-semibold mt-2">
            Dieses E-Book beseitigt die größten Hürden im Alltag:
          </p>
        </motion.div>

        {/* 3 Main Obstacles Resolved */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-7 sm:p-8 shadow-md border border-emerald-900/10 hover:shadow-2xl hover:border-emerald-600/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-stone-950 mb-2 leading-tight">
                  ✔ {item.title}
                </h3>
                <p className="text-stone-800 text-sm leading-relaxed mb-6 font-medium">
                  {item.text}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-stone-200/80">
                  <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block mb-2">
                    Im Ratgeber enthalten:
                  </span>
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 text-xs font-bold text-emerald-900">
                ✦ {item.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Outcome Banner (Das Ergebnis) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-[#17301E] via-[#213F29] to-[#122316] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-emerald-700/30"
        >
          {/* Subtle floral watermark effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-stone-950 text-xs font-black uppercase tracking-wider shadow">
                <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                <span>✔ Ihr konkretes Ergebnis</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Sie wissen nach der Lektüre genau, was Sie essen, wie Sie essen und wie Sie nachts besser schlafen.
              </h3>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
                Inklusive des sofort anwendbaren <strong>7-Tage-Magenruhe-Plans</strong> und <strong>2 leckeren, erprobten Schonrezepten</strong> für den unbeschwerten Einstieg ohne Heißhunger oder Mangelgefühl.
              </p>
              
              <div className="flex flex-wrap items-center gap-5 pt-2 text-xs sm:text-sm text-emerald-200">
                <span className="flex items-center gap-2 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800/60">
                  <Moon className="w-4 h-4 text-amber-300" /> Ruhige Nächte ohne saures Erwachen
                </span>
                <span className="flex items-center gap-2 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800/60">
                  <UtensilsCrossed className="w-4 h-4 text-amber-300" /> Mahlzeiten wieder angstfrei genießen
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center w-full max-w-xs shadow-2xl">
                <span className="text-xs uppercase text-stone-300 tracking-widest block font-semibold">
                  Voller Sofortzugang
                </span>
                <span className="text-4xl font-serif font-extrabold text-amber-300 block my-1">
                  {PRICE_CURRENT}
                </span>
                <span className="text-xs text-stone-300 block line-through mb-4">
                  Normalpreis 54,90 €
                </span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2 block"
                >
                  <span>Jetzt Ergebnis sichern</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
