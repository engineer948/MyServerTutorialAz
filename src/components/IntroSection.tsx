import React from 'react';
import { ShieldCheck, HardDrive, Cpu, PiggyBank, Terminal, CheckCircle2 } from 'lucide-react';
import { INTRO_CONTENT } from '../data';

export default function IntroSection() {
  const icons = [
    <ShieldCheck className="h-5 w-5 text-emerald-500" />,
    <Cpu className="h-5 w-5 text-proton-purple-light" />,
    <Terminal className="h-5 w-5 text-violet-400" />,
    <PiggyBank className="h-5 w-5 text-amber-500" />
  ];

  return (
    <section id="intro" className="py-20 sm:py-28 bg-gradient-to-b from-proton-purple/5 via-transparent to-transparent dark:from-proton-purple/10 dark:via-transparent dark:to-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-proton-purple/10 text-proton-purple dark:bg-proton-purple/20 dark:text-proton-purple-light border border-proton-purple/10 dark:border-proton-purple/30 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-proton-purple animate-pulse"></span>
            Açıq Qaynaqlı Azadlıq Dünyası
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
            Şəxsi Rəqəmsal <span className="proton-gradient-text">Azadlığınız</span> Buradan Başlayır
          </h1>
          <p className="font-sans text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {INTRO_CONTENT.welcomeSubtitle}
          </p>
        </div>

        {/* What is self hosting box */}
        <div className="bg-white dark:bg-proton-dark-card border border-neutral-200/80 dark:border-proton-dark-border rounded-2xl p-6 sm:p-10 shadow-lg shadow-neutral-100/50 dark:shadow-none mb-20 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                <HardDrive className="h-7 w-7 text-proton-purple dark:text-proton-purple-light" />
                {INTRO_CONTENT.whatIsSelfHostingTitle}
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {INTRO_CONTENT.whatIsSelfHostingText}
              </p>
              <p className="font-sans text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm italic">
                * Bulud provayderlərinin hər ay artan abunə haqları və gizlilik skandalları fonunda, fərdi server sahibi olmaq artıq sadəcə hobbi deyil, rəqəmsal müstəqilliyin təminatçısıdır.
              </p>
            </div>
            
            {/* Visual Callout or Concept Illustration */}
            <div className="lg:col-span-5 bg-neutral-50/80 dark:bg-proton-dark-bg/80 p-6 rounded-xl border border-neutral-200/60 dark:border-proton-dark-border">
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-4">Lokal vs Korporativ Bulud</span>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-xs sm:text-sm p-3.5 bg-rose-50/50 dark:bg-rose-950/10 text-rose-800 dark:text-rose-300 rounded-lg border border-rose-100/60 dark:border-rose-950/30">
                  <span className="font-bold text-lg leading-none shrink-0 text-rose-500">×</span>
                  <span>Korporativ Bulud: Məlumatlarınızı izləyirlər, satırlar və hər ay ödəniş tələb edirlər.</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm p-3.5 bg-emerald-50/50 dark:bg-emerald-950/10 text-emerald-800 dark:text-emerald-300 rounded-lg border border-emerald-100/60 dark:border-emerald-950/30">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>Şəxsi Server: 100% Sizin nəzarətinizdədir, tam gizlidir və abunəliksizdir.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-neutral-900 dark:text-white">
              Niyə Şəxsi Serverinizi Quraşdırmalısınız?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {INTRO_CONTENT.benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-proton-dark-card border border-neutral-200/80 dark:border-proton-dark-border rounded-xl p-6 shadow-sm hover:border-proton-purple/40 dark:hover:border-proton-purple/30 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-proton-purple/2 transition-all duration-300 flex flex-col"
              >
                <div className="p-3 bg-neutral-50 dark:bg-proton-dark-bg rounded-lg w-fit border border-neutral-200 dark:border-proton-dark-border mb-4">
                  {icons[idx]}
                </div>
                <h4 className="font-display font-semibold text-base sm:text-lg text-neutral-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="font-sans text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mt-auto">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
