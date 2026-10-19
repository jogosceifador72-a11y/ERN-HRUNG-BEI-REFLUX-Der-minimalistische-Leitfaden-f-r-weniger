import React from 'react';
import { motion } from 'motion/react';
import { Flame, Moon, HelpCircle, PiggyBank, ArrowDown, AlertOctagon } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: <Flame className="w-6 h-6 text-rose-600" />,
      bgIcon: 'bg-rose-100/90 border-rose-200',
      title: 'Das ständige Feuer hinter dem Brustbein',
      description: 'Jede Mahlzeit wird von der brennenden Angst begleitet: Kommt die Magensäure wieder hoch? Muss ich mich nach dem Essen wieder stundenlang quälen?',
    },
    {
      icon: <Moon className="w-6 h-6 text-indigo-600" />,
      bgIcon: 'bg-indigo-100/90 border-indigo-200',
      title: 'Schlaflose Nächte mit saurem Aufstoßen',
      description: 'Mitten in der Nacht hochschrecken, quälender Reizhusten, Heiserkeit und ein beißender Geschmack im Mund – trotz hochgelagerter Kissen.',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-amber-600" />,
      bgIcon: 'bg-amber-100/90 border-amber-200',
      title: 'Totale Unsicherheit & Rätselraten beim Essen',
      description: 'Im Internet widerspricht sich fast jeder Ratgeber: Manche schwören auf Zitrone, andere verbieten sie streng. Man traut sich kaum noch etwas zu essen.',
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-emerald-700" />,
      bgIcon: 'bg-emerald-100/90 border-emerald-200',
      title: 'Geld & Zeit verschwendet für falsche Mittel',
      description: 'Teure Spezialtees, angebliche Wunderpulver oder gefährliche Backpulver-Experimente, die den Magen am Ende nur noch mehr reizen und enttäuschen.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F3EDE0] via-[#E8DFD0] to-[#EFE7D8] border-y border-stone-300/80">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-200/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/90 border border-rose-300/80 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
            <span>Kennen Sie diese alltäglichen Hürden?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4 tracking-tight">
            Wenn Essen zur Belastung und Schlaf zur Qual wird
          </h2>
          <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-normal">
            Reflux und chronisches Sodbrennen sind kein unausweichliches Schicksal. Doch die meisten Betroffenen machen immer wieder dieselben Fehler bei der falschen Lebensmittelauswahl.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-md border border-stone-300/70 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${point.bgIcon} border flex items-center justify-center mb-5 shadow-sm`}>
                  {point.icon}
                </div>
                <h3 className="font-serif font-bold text-stone-950 text-lg mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-800/20 shadow-md">
            <span className="text-emerald-950 font-bold text-sm sm:text-base">
              Es gibt einen einfacheren Weg – ganz ohne Verzichtsdogmen & teure Kuren.
            </span>
            <div className="mt-1.5 w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
