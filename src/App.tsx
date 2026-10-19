import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatIsItSection } from './components/WhatIsItSection';
import { WhatItSolvesSection } from './components/WhatItSolvesSection';
import { TableOfContentsSection } from './components/TableOfContentsSection';
import { WhoIsItForSection } from './components/WhoIsItForSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { PurchaseNotifications } from './components/PurchaseNotifications';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { CHECKOUT_URL, PRICE_CURRENT } from './data/productData';
import { Download, BookOpen } from 'lucide-react';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showStickyBottomBar, setShowStickyBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile sticky bottom bar after scrolling past 500px
      setShowStickyBottomBar(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5EFE4] text-stone-900 selection:bg-emerald-300 selection:text-emerald-950 antialiased flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* Empathy / Pain Points */}
        <ProblemSection />

        {/* 1. Was ist das? */}
        <WhatIsItSection />

        {/* 2. Was löst es? */}
        <WhatItSolvesSection />

        {/* Inhaltsübersicht der 30 Seiten */}
        <TableOfContentsSection onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* 3. Für wen ist es? */}
        <WhoIsItForSection />

        {/* Angebot & Preis */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />
      </main>

      {/* Footer with author social media links as buttons */}
      <FooterSection />

      {/* Verified purchase toast in bottom left corner (no names, only confirmed purchases) */}
      <PurchaseNotifications />

      {/* Sample Reader Modal */}
      <SamplePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />

      {/* Mobile Sticky Quick-Action Bar */}
      {showStickyBottomBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl flex sm:hidden items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">
              Ernährung bei Reflux
            </span>
            <span className="text-base font-bold font-serif text-stone-900">
              {PRICE_CURRENT}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="p-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100"
              aria-label="Leseprobe ansehen"
            >
              <BookOpen className="w-4 h-4" />
            </button>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-emerald-800 text-white font-bold text-xs flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5 text-amber-300" />
              <span>Jetzt sichern</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
