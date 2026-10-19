export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  badge?: string;
  color: string;
}

export const CHECKOUT_URL = 'https://pay.hotmart.com/C108024229N';
export const PRICE_CURRENT = '26,89 €';
export const PRICE_ORIGINAL = '54,90 €';
export const DISCOUNT_PERCENTAGE = '51%';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    icon: 'instagram',
    badge: '@karinzeit',
    color: 'from-pink-500 via-rose-500 to-amber-500',
  },
  {
    name: 'Facebook Profil',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    icon: 'facebook',
    badge: 'Persönliches Profil',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Facebook Seite',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/',
    icon: 'facebook',
    badge: 'Offizielle Seite',
    color: 'from-blue-700 to-indigo-800',
  },
  {
    name: 'Kwai',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    icon: 'kwai',
    badge: '@kariningrid673',
    color: 'from-orange-500 to-amber-600',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@karinzeit',
    icon: 'tiktok',
    badge: '@karinzeit',
    color: 'from-neutral-900 to-neutral-800',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    icon: 'youtube',
    badge: '@karinzeit',
    color: 'from-red-600 to-rose-700',
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@karinzeit',
    icon: 'threads',
    badge: '@karinzeit',
    color: 'from-neutral-900 via-stone-800 to-neutral-900',
  },
];

export const CHAPTERS = [
  {
    number: '01',
    title: 'Die Anatomie des Reflux: Warum der Schließmuskel streikt',
    description: 'Verständliche Erklärung ohne Fachchinesisch. Wie Druckverhältnisse im Magen entstehen und wie Sie den unteren Ösophagussphinkter sofort mechanisch entlasten.',
    pages: 'S. 4 – 9',
  },
  {
    number: '02',
    title: 'Die Reflux-Lebensmittelampel & Trigger-Listen',
    description: 'Schluss mit Rätselraten: Welche Lebensmittel Magensäure neutralisieren, welche Schleimhäute schützen und welche versteckten Säuretreiber Sie sofort streichen sollten.',
    pages: 'S. 10 – 16',
  },
  {
    number: '03',
    title: 'SOS-Checkliste & Ernährungstagebuch',
    description: 'Was tun bei akutem Brennen? Klare Sofortmaßnahmen für den Alltag sowie eine praxiserprobte Tagebuch-Vorlage zur Identifikation Ihrer persönlichen Auslöser.',
    pages: 'S. 17 – 21',
  },
  {
    number: '04',
    title: 'Der 7-Tage-Magenruhe-Aktionsplan',
    description: 'Ein stressfreier Wochenplan mit aufeinander abgestimmten Mahlzeiten, genauen Uhrzeiten und Verhaltensregeln für den Abend – für ruhige Nächte ohne Aufwachen.',
    pages: 'S. 22 – 26',
  },
  {
    number: '05',
    title: '2 exklusive Magen-Schonrezepte & langfristige Freiheit',
    description: 'Einfach zubereitet, herrlich lecker und 100 % magenfreundlich. Plus die wichtigsten Alltagsregeln, um dauerhaft beschwerdefrei zu bleiben.',
    pages: 'S. 27 – 30',
  },
];

export const SAMPLE_PAGES = [
  {
    id: 'sos',
    title: 'Die SOS-Checkliste bei akutem Sodbrennen',
    pageNumber: 17,
    subtitle: 'Direkte Sofortmaßnahmen für schnelle Linderung',
    content: [
      '1. Aufrechte Haltung einnehmen: Niemals nach der Mahlzeit hinlegen. Leichtes Spazierengehen regt die natürliche Peristaltik an.',
      '2. Warmes lauwarmes Wasser oder Haferschleim in kleinen Schlucken trinken: Verdünnt die Magensäure sanft, ohne den Magen zu dehnen.',
      '3. Enge Kleidung sofort lockern: Druck auf den Bauchraum (intraabdomineller Druck) drückt Magensaft nach oben.',
      '4. Verzicht auf falsche Hausmittel: Backpulver meiden (führt zum gefährlichen Säure-Rebound-Effekt).',
    ],
  },
  {
    id: 'ampel',
    title: 'Lebensmittel-Ampel: Was beruhigt, was triggert?',
    pageNumber: 12,
    subtitle: 'Schneller Überblick für Ihren nächsten Einkauf',
    content: [
      '🟢 GRÜN (Magenschoner): Haferflocken, Kartoffeln, Bananen, Fencheltee, gedünstetes Wurzelgemüse, mageres Geflügel.',
      '🟡 GELB (In Maßen testen): Eier, milde Vollkornprodukte, Nüsse, säurearme Apfelsorten.',
      '🔴 ROT (Häufige Auslöser): Frittiertes, Schokolade, Kaffee auf nüchternen Magen, Pfefferminztee, kohlensäurehaltige Getränke, rohe Zwiebeln.',
    ],
  },
  {
    id: 'plan',
    title: 'Der 7-Tage-Schonplan (Auszug Tag 1 & 2)',
    pageNumber: 23,
    subtitle: 'Kompakt strukturiert für den beruflichen und privaten Alltag',
    content: [
      'Morgens: Warmer Haferporridge mit gekochten Apfelschnitzen und einer Prise Zimt (beruhigt die Schleimhaut).',
      'Mittags: Milde Süßkartoffel-Möhren-Suppe mit geröstetem Kürbiskern-Topping.',
      'Abends (mind. 3h vor dem Schlafen): Gedämpfter Zucchini-Lachs-Teller mit Kartoffelstampf.',
      'Nacht-Tipp: Oberkörper leicht um 15–20 cm erhöht lagern (idealerweise über die Matratzenneigung).',
    ],
  },
];

export const FAQS = [
  {
    question: 'Wie erhalte ich den Ratgeber nach dem Kauf?',
    answer: 'Direkt nach der erfolgreichen Zahlung über Hotmart erhalten Sie eine Bestätigungs-E-Mail mit Ihrem persönlichen Download-Link. Sie können das E-Book sofort im PDF-Format herunterladen und direkt auf Ihrem Smartphone, Tablet oder Computer lesen.',
  },
  {
    question: 'Auf welchen Geräten kann ich das E-Book lesen?',
    answer: 'Das Dokument ist im universellen PDF-Format optimiert. Sie können es auf Apple iOS (iPhone/iPad), Android, Windows, Mac sowie auf allen PDF-Readern öffnen oder bei Bedarf ausdrucken.',
  },
  {
    question: 'Warum umfasst der Leitfaden genau 30 Seiten?',
    answer: 'Ganz bewusst! Dieser Leitfaden ist minimalistisch konzipiert. Statt Sie mit 400 Seiten theoretischer Medizin zu überfordern, filtert er das Wesentliche heraus: konkrete Listen, praktische Soforttipps, den 7-Tage-Plan und 2 Rezepte – ideal zum schnellen Nachschlagen im Alltag.',
  },
  {
    question: 'Muss ich streng hungern oder auf alles verzichten?',
    answer: 'Auf keinen Fall! Eine restriktive Crash-Diät stresst Ihren Körper und kann Sodbrennen sogar verschlimmern. Es geht darum, entzündungshemmende, säurepuffernde Lebensmittel schmackhaft in den Alltag einzubauen und die persönlichen Trigger gezielt zu meiden.',
  },
  {
    question: 'Welche Zahlungsmethoden stehen zur Verfügung?',
    answer: 'Die Abwicklung erfolgt über den weltweit renommierten Zahlungsanbieter Hotmart. Sie können bequem und sicher via Kreditkarte (Visa, Mastercard, Amex), PayPal, Klarna Sofortüberweisung, SEPA und weiteren gängigen Zahlungsmethoden bezahlen.',
  },
  {
    question: 'Ersetzt dieser Ratgeber einen Arztbesuch?',
    answer: 'Nein. Dieser Ratgeber dient der Ernährungsbildung und Alltagshilfe. Bei chronischen, unerklärlichen Schmerzen, Schluckbeschwerden oder Blutungen müssen Sie stets eine qualifizierte ärztliche Untersuchung in Anspruch nehmen.',
  },
];
