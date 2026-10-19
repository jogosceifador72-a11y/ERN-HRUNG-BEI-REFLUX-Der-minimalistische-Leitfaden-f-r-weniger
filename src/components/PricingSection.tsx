import React from 'react';
import { motion } from 'motion/react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/productData';
import { Check, ShieldCheck, Download, Sparkles, Clock, Lock, CreditCard, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="preis" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#ECE5D8] via-[#E2D8C6] to-[#D9CEBA] border-t border-stone-300/80">
      {/* Background radiant ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/25 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 backdrop-blur-md border border-emerald-800/20 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span>Sonderangebot</span> • <span>Einführungsrabatt</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Starten Sie noch heute in ein beschwerdefreies Leben
          </h2>
          <p className="font-serif text-lg sm:text-xl text-stone-800 font-semibold mt-2">
            Investieren Sie einmalig in Ihren Magenfrieden und erholsame Nächte.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-emerald-600/40 overflow-hidden relative ring-1 ring-emerald-900/10"
        >
          {/* Top highlight bar */}
          <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white px-6 py-3.5 text-center text-xs sm:text-sm font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
            <span>AKTION: Nur noch für kurze Zeit zum Sonderpreis von {PRICE_CURRENT}</span>
          </div>

          <div className="p-8 sm:p-11 space-y-8">
            {/* Title & Price Header */}
            <div className="text-center border-b border-stone-200/90 pb-8">
              <span className="text-xs uppercase tracking-widest text-emerald-900 font-black block mb-1">
                Vollständiges E-Book (Digitales PDF)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
                ERNÄHRUNG BEI REFLUX
              </h3>
              <p className="text-stone-700 text-sm mt-1 font-medium">
                Der minimalistische Leitfaden für weniger Sodbrennen
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="text-xl sm:text-2xl text-stone-400 line-through font-semibold">
                  {PRICE_ORIGINAL}
                </span>
                <span className="text-4xl sm:text-5xl font-black text-stone-950 font-serif">
                  {PRICE_CURRENT}
                </span>
                <span className="text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-300">
                  51 % Rabatt
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-2 font-semibold">
                Einmalige Zahlung • Kein Abonnement • Lebenslanger Zugriff
              </p>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-stone-500 mb-2">
                Alles, was Sie sofort erhalten:
              </h4>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-900">
                  <strong>30-seitiger PDF-Ratgeber:</strong> Exakte Schritt-für-Schritt-Anleitung ohne Fachchinesisch.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-900">
                  <strong>Der 7-Tage-Magenruhe-Plan:</strong> Vorgefertigter Essensplan für die erste beschwerdefreie Woche.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-900">
                  <strong>2 erprobte Magen-Schonrezepte:</strong> Schnell zubereitet und magenberuhigend komponiert.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-900">
                  <strong>Umfassende Trigger-Listen:</strong> Magenberuhiger vs. Säuretreiber (Ampelsystem).
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-900">
                  <strong>SOS-Sofortcheckliste & Tagebuch-Vorlage:</strong> Schnelle Hilfe bei akutem Brennen.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-stone-900">
                  <strong>Sofortzugang per E-Mail:</strong> Lesbar auf Smartphone, Tablet und PC.
                </span>
              </div>
            </div>

            {/* Giant Buy Button */}
            <div className="space-y-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-950 hover:from-emerald-900 hover:to-stone-950 text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group text-center"
              >
                <Download className="w-5 h-5 text-amber-300 group-hover:animate-bounce shrink-0" />
                <span>Jetzt für {PRICE_CURRENT} bestellen & herunterladen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.a>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-600 font-medium pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>256-Bit SSL-Verschlüsselung • Offizieller Hotmart-Checkout</span>
              </div>
            </div>

            {/* Payment methods icons note */}
            <div className="pt-5 border-t border-stone-200/90 text-center">
              <span className="text-[11px] uppercase tracking-wider text-stone-600 block mb-2 font-bold">
                Sicher bezahlen mit:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold text-stone-700">
                <span className="px-3 py-1 bg-stone-100/90 rounded-lg border border-stone-300/80">Kreditkarte (Visa/Mastercard)</span>
                <span className="px-3 py-1 bg-stone-100/90 rounded-lg border border-stone-300/80">PayPal</span>
                <span className="px-3 py-1 bg-stone-100/90 rounded-lg border border-stone-300/80">Klarna / Sofort</span>
                <span className="px-3 py-1 bg-stone-100/90 rounded-lg border border-stone-300/80">SEPA-Lastschrift</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
