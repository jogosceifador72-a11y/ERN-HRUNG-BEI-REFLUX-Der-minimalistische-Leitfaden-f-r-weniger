import React from 'react';
import { motion } from 'motion/react';
import { Check, X, AlertTriangle, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';

export const WhoIsItForSection: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#EBE4D5] via-[#E4DCCE] to-[#ECE5D8] border-t border-stone-300/80">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-300/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 backdrop-blur-md border border-emerald-800/20 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span>Kapitel 3</span> • <span>Ehrliche Orientierung</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            3. Für wen ist es?
          </h2>
          <p className="font-serif text-lg sm:text-xl text-stone-800 font-semibold mt-2">
            Klare Transparenz: Finden Sie heraus, ob dieser Ratgeber genau zu Ihnen passt.
          </p>
        </motion.div>

        {/* 2 Comparison Cards (Für Sie vs. Nicht für Sie) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Für Sie (Green / High Value) */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-emerald-600/50 relative flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-sm">
                  Ideal geeignet
                </span>
                <span className="text-2xl">🌱</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                Für Sie, wenn Sie:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-stone-900 font-medium leading-relaxed">
                    Ihre Beschwerden lindern möchten, <strong>ohne es zu verkomplizieren</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-stone-900 font-medium leading-relaxed">
                    <strong>Einsteiger sind</strong> und eine klare, verständliche Orientierung brauchen.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-stone-900 font-medium leading-relaxed">
                    Eine <strong>praktische Methode</strong> suchen, die Sie sofort heute anwenden können.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200/80">
              <span className="text-xs font-bold text-emerald-900 block mb-3.5">
                ✔ Perfekt für Ihren schnellen Start ohne Frustration
              </span>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold text-center block shadow-lg transition-all"
              >
                Jetzt Zugang sichern ({PRICE_CURRENT})
              </motion.a>
            </div>
          </motion.div>

          {/* Card 2: Nicht für Sie (Red / Neutral) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-[#F6EFE5]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-lg border border-stone-300 relative flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-extrabold text-rose-800 bg-rose-100 px-3.5 py-1.5 rounded-full border border-rose-300 shadow-sm">
                  Nicht geeignet
                </span>
                <span className="text-2xl">⚠️</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Nicht für Sie, wenn Sie:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium">
                    <strong>Wundermittel erwarten</strong>, ohne selbst auch nur eine Kleinigkeit in Ihrer Ernährung umzusetzen.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium">
                    <strong>Lange, akademische Texte</strong> mit chemischen Formeln einem kompakten, praxisnahen Leitfaden vorziehen.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300">
              <span className="text-xs text-stone-600 block font-medium">
                Wir legen höchsten Wert auf ehrliche Erwartungen und echte Alltagsergebnisse.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Important Medical Disclaimer Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-14 bg-amber-100/80 backdrop-blur-md border border-amber-300 rounded-3xl p-6 sm:p-7 flex items-start gap-4 shadow-md"
        >
          <div className="w-9 h-9 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-stone-800 leading-relaxed">
            <strong className="text-stone-950 block mb-1 font-bold text-sm">
              Wichtiger medizinischer Hinweis:
            </strong>
            Dieser Ratgeber dient der ernährungsphysiologischen Aufklärung, der Alltagsunterstützung und der Prävention. Er ersetzt keinesfalls eine ärztliche Diagnose, Beratung oder Behandlung. Bei anhaltenden Beschwerden, Schluckstörungen oder starkem Schmerz wenden Sie sich bitte an Ihren Arzt oder Gastroenterologen.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
