import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FAQS, CHECKOUT_URL, PRICE_CURRENT } from '../data/productData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#D9CEBA] via-[#D3C7B2] to-[#25392A] border-t border-stone-300/80">
      {/* Background ambient light */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-200/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/10 backdrop-blur-md border border-emerald-800/20 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Häufige Fragen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Antworten auf Ihre Fragen
          </h2>
          <p className="text-stone-800 text-base sm:text-lg mt-2 font-medium">
            Alles, was Sie über den Ratgeber, das Format und den Bestellablauf wissen müssen.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white/95 border-emerald-600/50 shadow-xl ring-2 ring-emerald-600/10'
                    : 'bg-white/85 backdrop-blur-md border-stone-300/80 hover:border-emerald-500/40 hover:bg-white/95 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-serif font-bold text-stone-950 text-base sm:text-lg">
                    {faq.question}
                  </span>
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
                    <p className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200/80">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Support callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-stone-300/80 shadow-lg"
        >
          <p className="text-sm sm:text-base text-stone-900 font-bold">
            Haben Sie noch offene Fragen vor dem Kauf?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 mt-1">
            Kontaktieren Sie mich gerne direkt über die Social-Media-Kanäle im Fußbereich.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
