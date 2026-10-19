import React from 'react';
import { SocialButtons } from './SocialButtons';
import { CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';
import { BookOpen, ShieldCheck, Heart, AlertCircle } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#1C1A18] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Author Contact Buttons Section as requested by user */}
        <div className="bg-[#262421] p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-inner">
          <SocialButtons />
        </div>

        {/* Brand & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-stone-800">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-serif font-bold text-white text-lg">
                ERNÄHRUNG BEI REFLUX
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Der minimalistische Leitfaden für weniger Sodbrennen und ein beschwerdefreies Leben. Ein wissenschaftlich fundierter & praktischer 30-Seiten PDF-Ratgeber für jeden Tag.
            </p>
            <div className="text-xs text-emerald-400 font-semibold pt-1">
              Erste Auflage • Dr. Med. & Nutrition Team
            </div>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs text-stone-400">
            <span className="font-semibold text-white block uppercase tracking-wider text-[11px]">
              Lieferung & Sofortzugang
            </span>
            <p><strong>Format:</strong> PDF (optimiert für Smartphone, Tablet und PC/Mac).</p>
            <p><strong>Lieferung:</strong> Per E-Mail direkt nach Zahlungsbestätigung.</p>
            <p><strong>Zahlungsabwicklung:</strong> Sicher & verschlüsselt über Hotmart.</p>
          </div>

          <div className="md:col-span-3 space-y-3 text-left md:text-right">
            <span className="font-semibold text-white block uppercase tracking-wider text-[11px]">
              Jetzt Exemplar sichern
            </span>
            <div className="text-lg font-serif font-bold text-amber-300">
              Nur {PRICE_CURRENT}
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow"
            >
              Zum Hotmart Checkout
            </a>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-6 border-t border-stone-800/80 text-[11px] text-stone-500 leading-relaxed space-y-2">
          <p className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
            <span>
              <strong>Medizinischer Hinweis:</strong> Dieser Ratgeber ersetzt keinen Arztbesuch. Die Inhalte dienen ausschließlich der Information und allgemeinen Ernährungsbildung und stellen keine medizinische Beratung oder Heilversprechen dar. Konsultieren Sie bei akuten oder anhaltenden Magenbeschwerden stets einen qualifizierten Arzt.
            </span>
          </p>
          <p className="pt-2 text-stone-500 text-center sm:text-left">
            © {new Date().getFullYear()} Karin Zeit. Alle Rechte vorbehalten. Vertrieb und sichere Zahlungsabwicklung via Hotmart.
          </p>
        </div>
      </div>
    </footer>
  );
};
