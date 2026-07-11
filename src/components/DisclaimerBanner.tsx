import React from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-left animate-in fade-in duration-300">
      <div className="bg-neutral-100/50 dark:bg-proton-dark-card/30 border border-neutral-200/40 dark:border-proton-dark-border/40 rounded-xl p-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-2.5 flex-grow max-w-5xl">
          <ShieldAlert className="h-4.5 w-4.5 text-amber-500/80 dark:text-amber-500/60 shrink-0 mt-0.5" />
          <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">Məsuliyyətdən İmtina:</span> Bu portalda olan təlimat və skriptlər yalnız məlumatlandırma məqsədlidir. Müəllif hər hansı məlumat itkisi və ya sistem xətasına görə <span className="font-semibold text-neutral-600 dark:text-neutral-300">məsuliyyət daşımır</span>. Bütün materiallar rəsmi lisenziya şərtlərimiz altında təqdim olunur.
          </p>
        </div>
        
        <a
          href="#license"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 hover:text-proton-purple dark:hover:text-proton-purple-light bg-white dark:bg-proton-dark-bg/40 border border-neutral-200/60 dark:border-proton-dark-border/60 hover:border-proton-purple/30 rounded-lg transition-all shrink-0 self-start md:self-center cursor-pointer shadow-xs"
          id="btn-disclaimer-license"
        >
          <span>LISENZİYA ŞƏRTLƏRİ</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
