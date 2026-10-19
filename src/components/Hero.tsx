import React from 'react';
import { motion } from 'motion/react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/productData';
import { BookCoverDisplay } from './BookCoverDisplay';
import { Check, ShieldCheck, Zap, Download, Star, Sparkles, HeartHandshake, ArrowRight, Shield } from 'lucide-react';

interface HeroProps {
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F5EFE4] via-[#EBF3E8] to-[#F3EDE0]">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-300/30 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-amber-300/35 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-emerald-200/40 rounded-full blur-[90px] -z-10 pointer-events-none" />

      {/* Subtle organic contour line watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1f241e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Sales Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 backdrop-blur-md border border-emerald-800/20 text-emerald-950 text-xs font-bold tracking-wide shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Wissenschaftlich fundierter & minimalistischer Leitfaden</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.12]">
                ERNÄHRUNG BEI REFLUX
              </h1>
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-emerald-900 font-semibold italic">
                Der minimalistische Leitfaden für weniger Sodbrennen und ein beschwerdefreies Leben
              </p>
            </div>

            {/* Subtitle / Promise */}
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Schluss mit ständiger Unsicherheit beim Essen, schlaflosen Nächten und brennender Speiseröhre. 
              Erfahren Sie auf <strong>30 kompakten Seiten</strong>, wie Sie Ihren Magen gezielt beruhigen – 
              ohne langes Fachchinesisch, ohne Verzichtsdogmen und sofort im Alltag anwendbar.
            </p>

            {/* Feature Bullets with Checkmarks */}
            <div className="space-y-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/75 backdrop-blur-md border border-emerald-900/10 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base text-stone-900">
                  <strong>Schließmuskel mechanisch entlasten:</strong> Verstehen Sie die wahren Auslöser und beenden Sie den sauren Rückfluss.
                </span>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/75 backdrop-blur-md border border-emerald-900/10 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base text-stone-900">
                  <strong>Praktische Trigger-Listen & SOS-Checkliste:</strong> Nie wieder quälendes Rätselraten, was Sie bedenkenlos essen dürfen.
                </span>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/75 backdrop-blur-md border border-emerald-900/10 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base text-stone-900">
                  <strong>Inklusive 7-Tage-Schonplan & 2 Rezepten:</strong> Klare Mahlzeitenstruktur für ruhige Nächte und tiefen, erholsamen Schlaf.
                </span>
              </motion.div>
            </div>

            {/* Pricing & CTA Card */}
            <div className="pt-4 max-w-xl mx-auto lg:mx-0 space-y-4">
              <div className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-emerald-600/40 shadow-xl text-left relative overflow-hidden ring-1 ring-emerald-900/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-bl-full pointer-events-none" />

                <div className="flex items-baseline justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <span className="text-xs text-stone-600 uppercase tracking-widest block font-bold">
                      Aktionspreis (Nur für kurze Zeit)
                    </span>
                    <div className="flex items-baseline gap-2.5 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-serif">
                        {PRICE_CURRENT}
                      </span>
                      <span className="text-base sm:text-lg text-stone-500 line-through font-medium">
                        {PRICE_ORIGINAL}
                      </span>
                      <span className="text-xs font-bold text-emerald-900 bg-emerald-200/90 px-2.5 py-0.5 rounded-full border border-emerald-300">
                        51 % Rabatt
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-100/90 px-3 py-1 rounded-xl border border-emerald-200 shadow-sm">
                      <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" /> Sofortiger Zugang
                    </span>
                  </div>
                </div>

                {/* Big Buy Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 hover:from-emerald-900 hover:to-stone-950 text-white text-base sm:text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group text-center"
                >
                  <Download className="w-5 h-5 text-amber-300 group-hover:animate-bounce shrink-0" />
                  <span>Jetzt E-Book für {PRICE_CURRENT} herunterladen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </motion.a>

                {/* Micro guarantees */}
                <div className="mt-3.5 grid grid-cols-3 gap-2 text-center pt-3 border-t border-stone-200/80 text-[11px] text-stone-700 font-semibold">
                  <span className="flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> 100% Sicher
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-600" /> Sofort per E-Mail
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" /> Hotmart-Garantie
                  </span>
                </div>
              </div>

              {/* Social proof ratings */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-stone-700 pt-1 font-medium">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>
                  <strong>4.9 / 5.0</strong> von Betroffenen empfohlen • Format: PDF (30 Seiten)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Book Cover & Preview Trigger */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <BookCoverDisplay onOpenPreview={onOpenPreview} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
