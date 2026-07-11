import React, { useState } from 'react';
import { UBUNTU_STEPS, CASAOS_CONTENT } from '../data';
import { Clipboard, Check, AlertCircle, PlayCircle, BookOpen, Info, ArrowLeft } from 'lucide-react';

interface TutorialsSectionProps {
  onBackToHome: () => void;
}

export default function TutorialsSection({ onBackToHome }: TutorialsSectionProps) {
  // Step completion states to make the guides interactive
  const [ubuntuCompleted, setUbuntuCompleted] = useState<number[]>([]);
  const [copiedScript, setCopiedScript] = useState(false);

  const toggleUbuntuStep = (id: number) => {
    if (ubuntuCompleted.includes(id)) {
      setUbuntuCompleted(ubuntuCompleted.filter(item => item !== id));
    } else {
      setUbuntuCompleted([...ubuntuCompleted, id]);
    }
  };

  const copyToClipboard = (text: string, setCopiedState: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <div className="bg-[#f8f9fc] dark:bg-proton-dark-bg/40 transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-page Breadcrumb and Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 text-left">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
            <button 
              onClick={onBackToHome}
              className="hover:text-proton-purple dark:hover:text-proton-purple-light transition-colors cursor-pointer"
            >
              Ana Səhifə
            </button>
            <span>/</span>
            <span className="text-neutral-800 dark:text-white font-semibold">
              Ubuntu Server Quraşdırılması
            </span>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-neutral-600 dark:text-neutral-300 bg-white dark:bg-proton-dark-card border border-neutral-200 dark:border-proton-dark-border rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Ana Səhifəyə Qayıt</span>
          </button>
        </div>

        {/* ================= DETAILED TUTORIAL CARD ================= */}
        <article className="bg-white dark:bg-proton-dark-card border border-neutral-200/80 dark:border-proton-dark-border rounded-2xl p-6 sm:p-10 shadow-lg shadow-neutral-100/50 dark:shadow-none mb-10">
          
          {/* Header */}
          <div className="border-b border-neutral-200/80 dark:border-proton-dark-border pb-6 mb-8 text-left">
            <span className="px-3 py-1 rounded-md text-[10px] font-semibold font-mono uppercase tracking-wider mb-3 inline-block bg-orange-50 text-orange-600 dark:bg-orange-950/20 dark:text-orange-300 border border-orange-100/50 dark:border-orange-950/30">
              Təlimat 01: UBUNTU
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white">
              Ubuntu Server 24.04 LTS Addım-Addım Quraşdırılması
            </h2>
            <p className="font-sans text-neutral-500 dark:text-neutral-400 mt-2 text-sm sm:text-base">
              Şəxsi cihazınızı və ya köhnə noutbukunuzu limitsiz imkanlara malik güclü ev serverine çevirin.
            </p>
          </div>

          {/* Critical Requirement Banner */}
          <div className="mb-10 p-6 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/60 dark:border-amber-900/30 rounded-xl">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-500 shrink-0" />
              <div className="text-left">
                <h4 className="font-display font-bold text-amber-900 dark:text-amber-300 text-sm sm:text-base uppercase tracking-wide">
                  KRİTİK BÖLMƏ: BIOS YÜKLƏMƏ TƏLƏBİ (OXUYUN!)
                </h4>
                <p className="font-sans text-neutral-700 dark:text-neutral-300 text-sm mt-1 leading-relaxed">
                  Əməliyyat sistemini quraşdırarkən <strong>BIOS parametrlərinə daxil olaraq daimi yükləmə üstünlüyü sırasını (permanent boot priority order) DƏYİŞMƏYİN.</strong> 
                  Bunun əvəzinə, quraşdırıcı USB diski taxdıqdan sonra cihazı açın və dərhal klaviaturada cihaz istehsalçısına uyğun olan <strong>Yükləmə Seçimləri Menyusu (Boot Options Menu)</strong> düyməsini (adətən <strong>F12, F11, F8 və ya Esc</strong>) ard-arda klikləyərək birdəfəlik açılan siyahıdan USB-ni seçib başladın. 
                  Bu üsul quraşdırma tam bitdikdən sonra cihazınızı yenidən başlatdıqda sistemin hər dəfə USB-yə qayıtmasının qarşısını alır və birbaşa yeni qurulmuş server diskinə problemsiz daxil olmasını təmin edir.
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Interactive Guide */}
          <div className="space-y-6 mb-12">
            <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-proton-purple" />
              Quraşdırıcı Addımları ({ubuntuCompleted.length} / {UBUNTU_STEPS.length})
            </h3>

            <div className="space-y-4">
              {UBUNTU_STEPS.map((step) => {
                const isDone = ubuntuCompleted.includes(step.id);
                return (
                  <div 
                    key={step.id} 
                    className={`p-5 rounded-xl border transition-all duration-200 text-left ${
                      isDone 
                        ? 'bg-neutral-50/30 dark:bg-proton-dark-bg/30 border-neutral-200/40 dark:border-proton-dark-border/40 opacity-70' 
                        : 'bg-white dark:bg-proton-dark-card border-neutral-200/80 dark:border-proton-dark-border shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Interactive checkbox */}
                      <button
                        onClick={() => toggleUbuntuStep(step.id)}
                        className={`mt-1 h-5 w-5 rounded-md border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                          isDone 
                            ? 'bg-proton-purple border-proton-purple text-white' 
                            : 'border-neutral-300 dark:border-proton-dark-border bg-neutral-50 dark:bg-proton-dark-bg hover:border-proton-purple'
                        }`}
                        id={`chk-ubuntu-step-${step.id}`}
                      >
                        {isDone && <Check className="h-3.5 w-3.5 stroke-[3px]" />}
                      </button>

                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className={`font-display font-semibold text-base ${isDone ? 'text-neutral-500 dark:text-neutral-500 line-through' : 'text-neutral-900 dark:text-white'}`}>
                            Addım {step.id}: {step.title}
                          </h4>
                        </div>
                        <p className={`font-sans text-xs sm:text-sm mt-1.5 ${isDone ? 'text-neutral-400 dark:text-neutral-500' : 'text-neutral-600 dark:text-neutral-300'}`}>
                          {step.description}
                        </p>
                        {step.detail && (
                          <div className="mt-3 p-3 bg-neutral-50/50 dark:bg-proton-dark-bg rounded-lg border border-neutral-100 dark:border-proton-dark-border text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            {step.detail}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mt-12 p-8 bg-neutral-900 dark:bg-proton-dark-bg border border-neutral-800 rounded-2xl text-center relative overflow-hidden">
            <div className="max-w-md mx-auto py-6 relative z-10">
              <PlayCircle className="h-14 w-14 text-proton-purple-light mx-auto mb-4 animate-pulse" />
              <h4 className="font-display font-bold text-lg text-white mb-2 uppercase tracking-wide">
                Dinamik Video Dərslik Yeri
              </h4>
              <p className="font-sans text-xs text-neutral-400 mb-6 leading-relaxed">
                Bu bölmə üçün video rəhbər və ya əlavə interaktiv media fərdiləşdirilməsi üçün nəzərdə tutulmuş rəsmi yer tutucudur. Aşağıdakı markeri asanlıqla kod daxilində tapıb əvəz edə bilərsiniz.
              </p>
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-850 text-xs font-mono text-proton-purple-light select-all font-bold">
                [[ AZERBAIJANI_SERVER_TUTORIAL_VIDEO_EMBED_HERE ]]
              </div>
            </div>
          </div>

        </article>

        {/* ================= CASAOS QURAŞDIRILMASI (SECTION 4) ================= */}
        <article className="bg-white dark:bg-proton-dark-card border border-neutral-200/80 dark:border-proton-dark-border rounded-2xl p-6 sm:p-10 shadow-lg shadow-neutral-100/50 dark:shadow-none text-left mb-10">
          
          {/* Header */}
          <div className="border-b border-neutral-200/80 dark:border-proton-dark-border pb-6 mb-8">
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-950/30 rounded-md text-[10px] font-semibold font-mono uppercase tracking-wider mb-3 inline-block">
              Qabaqcıl Tətbiq
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white">
              {CASAOS_CONTENT.title}
            </h2>
            <p className="font-sans text-neutral-500 dark:text-neutral-400 mt-2 text-sm sm:text-base">
              {CASAOS_CONTENT.subtitle}
            </p>
          </div>

          {/* CasaOS Intro Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
            <div className="lg:col-span-7">
              <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {CASAOS_CONTENT.description}
              </p>

              {/* CasaOS features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CASAOS_CONTENT.features.map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200/60 dark:border-proton-dark-border bg-neutral-50/50 dark:bg-proton-dark-bg/50">
                    <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal installation execution card */}
            <div className="lg:col-span-5 bg-neutral-950 text-neutral-100 rounded-xl p-5 border border-neutral-800 font-mono text-xs sm:text-sm relative shadow-inner overflow-hidden">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-sans font-semibold">Tək Sətirlik Quraşdırma</span>
              </div>
              
              <p className="text-neutral-400 text-xs mb-3 font-sans">
                SSH vasitəsilə serverinizə qoşulun və aşağıdakı rəsmi avtomatlaşdırılmış skripti icra edin:
              </p>

              <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 flex items-center justify-between gap-4 mb-4 overflow-x-auto">
                <code className="text-proton-purple-light text-xs whitespace-nowrap font-bold">
                  {CASAOS_CONTENT.installScript}
                </code>
                <button
                  onClick={() => copyToClipboard(CASAOS_CONTENT.installScript, setCopiedScript)}
                  className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Kopyala"
                  id="btn-copy-casaos-script"
                >
                  {copiedScript ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                  ) : (
                    <Clipboard className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              <div className="text-[10px] sm:text-[11px] text-neutral-500 font-sans leading-relaxed">
                * Bu skript avtomatik olaraq sisteminizi analiz edir, lazım gələrsə Docker ekosistemini quraşdırır və CasaOS xidmətlərini başladır. Tamamlandıqdan sonra sizə brauzerdən daxil olmaq üçün bir yerli IP ünvanı veriləcəkdir.
              </div>
            </div>
          </div>

          <div className="p-6 bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/20 rounded-xl">
            <h3 className="font-display font-semibold text-base text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2">
              <Info className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Ubuntu Server üçün Optimallaşdırılmış Quruluş
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Ubuntu Server rəsmi olaraq Docker və CasaOS üçün ən yaxşı sınaqdan keçirilmiş mühitdir. Quraşdırma skriptini çalışdırdıqdan dərhal sonra sisteminiz tam işlək vəziyyətdə olacaqdır.
            </p>
          </div>

        </article>

        {/* Bottom Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold text-white bg-proton-purple hover:bg-proton-purple-hover rounded-xl shadow-lg shadow-proton-purple/10 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Ana Səhifəyə Qayıt</span>
          </button>
        </div>

      </div>
    </div>
  );
}
