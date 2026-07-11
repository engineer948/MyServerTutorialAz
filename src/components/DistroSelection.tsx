import React from 'react';
import { ArrowRight, Clock, Lock } from 'lucide-react';

export default function DistroSelection() {
  return (
    <section id="distros" className="py-20 sm:py-24 border-t border-neutral-200/60 dark:border-proton-dark-border transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-proton-purple/10 text-proton-purple dark:bg-proton-purple/20 dark:text-proton-purple-light border border-proton-purple/10 dark:border-proton-purple/30 rounded-md text-[10px] font-semibold font-mono uppercase tracking-wider mb-4 inline-block">
            Əməliyyat Sistemləri
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white mb-4">
            Server Platformasının Seçilməsi
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
            Düzgün təməl seçmək uğurlu server layihəsinin əsasıdır. Aşağıdakı təlimatlarla sizə ən uyğun olan platformanı seçin.
          </p>
        </div>

        {/* Distributions Vertical Stack */}
        <div className="flex flex-col gap-8 mb-12 text-left">
          
          {/* Ubuntu Server Card (Active & Fully Detailed) */}
          <div
            className="rounded-2xl p-6 sm:p-8 border border-neutral-200/80 dark:border-proton-dark-border bg-white dark:bg-proton-dark-card hover:border-proton-purple/40 dark:hover:border-proton-purple/30 transition-all duration-350 shadow-sm relative group"
            id="card-distro-ubuntu"
          >
            {/* Active Badge */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/25 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                Aktiv Təlimat
              </span>
            </div>

            <div className="max-w-2xl">
              {/* Header */}
              <div className="mb-4">
                <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-1.5 flex items-center gap-2">
                  Ubuntu Server
                </h3>
                <p className="font-sans text-xs text-proton-purple dark:text-proton-purple-light font-bold">
                  Ən asan yol: Başlanğıc üçün mükəmməl və stabil seçim
                </p>
              </div>

              {/* Short Description */}
              <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                Geniş icma dəstəyi və zəngin sənədləşməsi ilə ən çox istifadə olunan server sistemidir. Demək olar ki, bütün self-hosting tətbiqləri ilk növbədə Ubuntu üçün optimallaşdırılır.
              </p>

              {/* Specs Badge Bar */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 bg-neutral-50 dark:bg-proton-dark-bg border border-neutral-200/50 dark:border-proton-dark-border/60 rounded-lg text-[10px] font-semibold text-neutral-600 dark:text-neutral-400">
                  Səviyyə: <strong className="text-neutral-800 dark:text-neutral-200">Asan</strong>
                </span>
                <span className="px-2.5 py-1 bg-neutral-50 dark:bg-proton-dark-bg border border-neutral-200/50 dark:border-proton-dark-border/60 rounded-lg text-[10px] font-semibold text-neutral-600 dark:text-neutral-400">
                  Paket: <strong className="text-neutral-800 dark:text-neutral-200 font-mono">APT</strong>
                </span>
                <span className="px-2.5 py-1 bg-neutral-50 dark:bg-proton-dark-bg border border-neutral-200/50 dark:border-proton-dark-border/60 rounded-lg text-[10px] font-semibold text-neutral-600 dark:text-neutral-400">
                  Sistem: <strong className="text-neutral-800 dark:text-neutral-200 font-mono">systemd</strong>
                </span>
              </div>

              {/* Clean Action Button */}
              <div>
                <a
                  href="#ubuntu"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-proton-purple hover:bg-proton-purple-hover rounded-xl transition-all shadow-md shadow-proton-purple/10 cursor-pointer"
                  id="btn-nav-to-tutorial-ubuntu"
                >
                  <span>Ubuntu Server Quraşdırılması</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Fedora Server Card (Coming Soon / Locked style) */}
          <div
            className="rounded-2xl p-6 sm:p-8 border border-neutral-200/40 dark:border-proton-dark-border/30 bg-neutral-50/10 dark:bg-proton-dark-bg/5 transition-all duration-350 shadow-xs relative group opacity-75 overflow-hidden"
            id="card-distro-fedora"
          >
            {/* Background absolute subtle pattern */}
            <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 text-neutral-100/10 dark:text-neutral-800/10 pointer-events-none">
              <Lock className="h-48 w-48 stroke-[1px]" />
            </div>

            {/* Status Badge */}
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400 border border-amber-100 dark:border-amber-950/30">
                <Clock className="h-3 w-3 animate-pulse" />
                Daha sonra gələcək
              </span>
            </div>

            <div className="max-w-2xl relative z-10">
              {/* Header */}
              <div className="mb-4">
                <h3 className="font-display font-bold text-2xl text-neutral-400 dark:text-neutral-500 mb-1.5 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                  Fedora Server
                </h3>
                <p className="font-sans text-xs text-neutral-450 dark:text-neutral-650 font-medium">
                  Yenilikçi və Müasir: Təcrübəli istifadəçilər üçün Red Hat ekosistemi
                </p>
              </div>

              {/* Short Description */}
              <p className="font-sans text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 mb-6 leading-relaxed max-w-lg">
                Fedora Server təlimatı hazırda hazırlanır və növbəti mərhələdə sistemə əlavə olunacaqdır. SELinux təhlükəsizlik qaydaları, müasir paket meneceri (DNF) və konteyner həlləri dərsi tezliklə aktiv ediləcək.
              </p>

              {/* Specs Badge Bar */}
              <div className="flex flex-wrap gap-2 mb-6 opacity-50">
                <span className="px-2.5 py-1 bg-neutral-100/50 dark:bg-proton-dark-bg/50 border border-neutral-200/40 dark:border-proton-dark-border/40 rounded-lg text-[10px] font-semibold text-neutral-400">
                  Səviyyə: <strong>Orta</strong>
                </span>
                <span className="px-2.5 py-1 bg-neutral-100/50 dark:bg-proton-dark-bg/50 border border-neutral-200/40 dark:border-proton-dark-border/40 rounded-lg text-[10px] font-semibold text-neutral-400">
                  Paket: <strong className="font-mono">DNF</strong>
                </span>
              </div>

              {/* Disabled Action Button */}
              <div>
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-neutral-400 dark:text-neutral-600 bg-neutral-100/50 dark:bg-proton-dark-border/30 border border-neutral-200/40 dark:border-proton-dark-border/40 rounded-xl cursor-not-allowed shadow-none"
                  id="btn-nav-to-tutorial-fedora"
                >
                  <Lock className="h-3.5 w-3.5" />
                  <span>Tezliklə Aktiv Olacaq</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Small Decision Assist Tip */}
        <div className="bg-neutral-100/50 dark:bg-proton-dark-card/30 border border-neutral-200/40 dark:border-proton-dark-border/40 rounded-xl p-5 text-left max-w-4xl mx-auto">
          <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            💡 <strong className="text-neutral-700 dark:text-neutral-300">Tövsiyə:</strong> Linux server dünyasına ilk dəfə addım atırsınızsa, aktiv olan <strong className="text-proton-purple dark:text-proton-purple-light">Ubuntu Server</strong> təlimatını seçin. Bu sistemdə qarşılaşacağınız bütün xətaların və sualların cavabını asanlıqla tapa bilərsiniz.
          </p>
        </div>

      </div>
    </section>
  );
}
