import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, Download, Sparkles, X } from 'lucide-react';

interface PurchaseEvent {
  id: string;
  badge: string;
  timeAgo: string;
  locationInfo?: string;
  iconType: 'check' | 'shield' | 'download' | 'sparkle';
}

const PURCHASE_EVENTS: PurchaseEvent[] = [
  {
    id: 'p1',
    badge: 'Kauf bestätigt',
    timeAgo: 'vor wenigen Sekunden',
    locationInfo: 'Sofortzugang per E-Mail gesendet',
    iconType: 'check',
  },
  {
    id: 'p2',
    badge: 'Kauf bestätigt',
    timeAgo: 'vor 2 Minuten',
    locationInfo: 'PDF-Ratgeber & 7-Tage-Plan freigeschaltet',
    iconType: 'download',
  },
  {
    id: 'p3',
    badge: 'Kauf bestätigt',
    timeAgo: 'vor 4 Minuten',
    locationInfo: 'Sichere Zahlung über Hotmart',
    iconType: 'shield',
  },
  {
    id: 'p4',
    badge: 'Kauf bestätigt',
    timeAgo: 'vor 6 Minuten',
    locationInfo: 'Exemplar erfolgreich ausgeliefert',
    iconType: 'check',
  },
  {
    id: 'p5',
    badge: 'Kauf bestätigt',
    timeAgo: 'vor 9 Minuten',
    locationInfo: 'Inkl. SOS-Checkliste & 2 Schonrezepten',
    iconType: 'sparkle',
  },
];

export const PurchaseNotifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show initial notification after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3200);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    if (isVisible) {
      // Stay visible for 5.5 seconds, then hide
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
      return () => clearTimeout(hideTimer);
    } else {
      // Stay hidden for 7 seconds, then show next notification
      const showTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PURCHASE_EVENTS.length);
        setIsVisible(true);
      }, 7000);
      return () => clearTimeout(showTimer);
    }
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const currentEvent = PURCHASE_EVENTS[currentIndex];

  const renderIcon = () => {
    switch (currentEvent.iconType) {
      case 'download':
        return <Download className="w-4 h-4 text-emerald-600" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'sparkle':
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
      case 'check':
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none sm:bottom-6 sm:left-6 max-w-[340px]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200/80 p-3.5 flex items-center gap-3.5 ring-1 ring-black/5"
          >
            <div className="relative shrink-0 w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shadow-inner">
              {renderIcon()}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  {currentEvent.badge}
                </span>
                <span className="text-[11px] text-stone-600 font-medium">
                  • {currentEvent.timeAgo}
                </span>
              </div>
              <p className="text-xs font-semibold text-stone-800 truncate mt-0.5">
                Ernährung bei Reflux (PDF)
              </p>
              <p className="text-[11px] text-stone-600 truncate">
                {currentEvent.locationInfo}
              </p>
            </div>

            <button
              onClick={() => setIsDismissed(true)}
              aria-label="Benachrichtigung schließen"
              className="shrink-0 p-1 rounded-lg text-stone-500 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
