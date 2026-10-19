import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL, PRICE_CURRENT, PRICE_ORIGINAL } from '../data/productData';
import { BookOpen, Sparkles, ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-emerald-50 px-4 py-2.5 text-xs text-center font-medium flex items-center justify-center gap-2 relative z-40 shadow-sm">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
        </span>
        <span>
          Aktionsangebot: <strong>51 % Rabatt</strong> – Nur <strong>{PRICE_CURRENT}</strong> statt {PRICE_ORIGINAL} • Sofortiger PDF-Download
        </span>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F3EB]/95 backdrop-blur-md shadow-md border-b border-stone-300/80 py-3'
            : 'bg-[#F5EFE4] py-4 border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Book Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="font-serif font-bold text-stone-900 text-base sm:text-lg block leading-none">
                Ernährung bei Reflux
              </span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-semibold block mt-0.5">
                Der minimalistische Leitfaden
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
            <a href="#was-ist-das" className="hover:text-emerald-800 transition-colors">
              Was ist das?
            </a>
            <a href="#was-loest-es" className="hover:text-emerald-800 transition-colors">
              Was löst es?
            </a>
            <a href="#inhalt" className="hover:text-emerald-800 transition-colors">
              Inhalt
            </a>
            <a href="#fuer-wen" className="hover:text-emerald-800 transition-colors">
              Für wen?
            </a>
            <a href="#faq" className="hover:text-emerald-800 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Jetzt {PRICE_CURRENT}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/60"
            aria-label="Navigation umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-stone-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
            <a
              href="#was-ist-das"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 py-1"
            >
              Was ist das?
            </a>
            <a
              href="#was-loest-es"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 py-1"
            >
              Was löst es?
            </a>
            <a
              href="#inhalt"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 py-1"
            >
              Inhalt & 30 Seiten
            </a>
            <a
              href="#fuer-wen"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 py-1"
            >
              Für wen ist es?
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-stone-800 py-1"
            >
              Häufige Fragen
            </a>
            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 text-white text-center text-sm font-bold block shadow"
              >
                Jetzt E-Book für {PRICE_CURRENT} sichern
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
