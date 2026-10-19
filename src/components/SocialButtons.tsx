import React from 'react';
import { SOCIAL_LINKS, SocialLink } from '../data/productData';
import { ExternalLink } from 'lucide-react';

// Custom SVG icons for platforms not fully present in lucide
const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.3 6.3 0 0 0 1.84-4.48V8.77a8.28 8.28 0 0 0 5.12 1.78v-3.5a4.83 4.83 0 0 1-1.23-.36z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c4.086 0 7.76-2.029 9.947-5.158l-2.613-1.637C17.75 19.52 15.045 20.8 12 20.8c-4.852 0-8.8-3.948-8.8-8.8s3.948-8.8 8.8-8.8c4.322 0 7.917 3.125 8.653 7.2h-3.414c-.66-1.92-2.482-3.3-4.639-3.3-2.757 0-5 2.243-5 5s2.243 5 5 5c1.787 0 3.356-.944 4.246-2.373.197.894.498 1.761.91 2.585C19.822 20.81 22.186 21.6 24 21.6c.168 0 .332-.01.498-.027A11.966 11.966 0 0 0 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const KwaiIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.51 0.925 4.805 2.457 6.565l1.63-1.41C4.786 15.688 4 13.935 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8c0 1.935-0.786 3.688-2.087 5.155l1.63 1.41C21.075 16.805 22 14.51 22 12c0-5.523-4.477-10-10-10zm-1.5 5.5v9l7-4.5-7-4.5z"/>
  </svg>
);

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'instagram':
      return <InstagramIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'tiktok':
      return <TikTokIcon />;
    case 'youtube':
      return <YouTubeIcon />;
    case 'threads':
      return <ThreadsIcon />;
    case 'kwai':
      return <KwaiIcon />;
    default:
      return <ExternalLink className="w-5 h-5" />;
  }
};

export const SocialButtons: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h4 className="text-lg font-serif font-semibold text-stone-800">
          Vernetzen & Begleiten auf Social Media
        </h4>
        <p className="text-sm text-stone-600 mt-1 max-w-md mx-auto">
          Folgen Sie meinen offiziellen Kanälen für tägliche Inspiration, Magen-Tipps und gesunde Lebensweise:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {SOCIAL_LINKS.map((link: SocialLink) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-stone-100 group-hover:bg-emerald-50 text-stone-700 group-hover:text-emerald-700 transition-colors">
                {getSocialIcon(link.icon)}
              </div>
              <div className="text-left">
                <span className="block text-sm font-semibold text-stone-800 group-hover:text-emerald-800 transition-colors">
                  {link.name}
                </span>
                <span className="block text-xs text-stone-600 truncate max-w-[130px]">
                  {link.badge}
                </span>
              </div>
            </div>

            <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-emerald-600 transition-colors shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
};
