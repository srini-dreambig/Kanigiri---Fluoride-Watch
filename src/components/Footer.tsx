import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Droplets, Mail, Phone, MapPin } from "lucide-react";
import { mandalSlugsInOrder } from "../data/mandals";

import { getUiLabels } from "../data/uiLabels";

export const Footer = () => {
  const { t, language } = useLanguage();
  const ui = getUiLabels(language);
  const f = ui.footer;

  return (
    <footer className="bg-black/60 border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Droplets className="text-brand-crimson" size={32} />
            <span className="font-semibold text-2xl tracking-tight">Kanigiri</span>
          </div>
          <p className="text-sm opacity-50 leading-relaxed">
            {t.hero.subheadline}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-semibold tracking-wide text-brand-amber">{f.navigation}</h4>
          <ul className="space-y-2 text-sm opacity-60">
            <li><Link to="/watch" className="hover:text-white">{t.nav.watch}</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">{t.nav.dashboard}</Link></li>
            <li><Link to="/solutions" className="hover:text-white">{t.nav.solutions}</Link></li>
            <li><Link to="/research" className="hover:text-white">{t.research.title}</Link></li>
            <li><Link to="/memorandum" className="hover:text-white">{t.nav.memo}</Link></li>
            <li><Link to="/gallery" className="hover:text-white">{t.nav.gallery}</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-semibold tracking-wide text-brand-amber">{f.constituency}</h4>
          <ul className="space-y-2 text-sm opacity-60">
            {t.mandal_details.list.map((mandal, idx) => (
              <li key={mandalSlugsInOrder[idx]}>
                <Link
                  to={`/mandals/${mandalSlugsInOrder[idx]}`}
                  className="hover:text-white transition-colors"
                >
                  {mandal.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-semibold tracking-wide text-brand-amber">{f.contact}</h4>
          <ul className="space-y-3 text-sm opacity-60">
            <li className="flex items-center gap-3"><Mail size={16} /> help@kanigiriwatch.org</li>
            <li className="flex items-center gap-3"><Phone size={16} /> +91 00000 00000</li>
            <li className="flex items-center gap-3"><MapPin size={16} /> {f.address}</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-[10px] opacity-30 font-mono">
          {f.copyright}
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-[10px] opacity-30 hover:opacity-100 transition-opacity">{f.privacy}</a>
          <a href="#" className="text-[10px] opacity-30 hover:opacity-100 transition-opacity">{f.terms}</a>
        </div>
      </div>
    </footer>
  );
};
