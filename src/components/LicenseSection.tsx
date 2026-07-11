import React from 'react';
import { ArrowLeft, Shield, Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface LicenseSectionProps {
  onBackToHome: () => void;
}

export default function LicenseSection({ onBackToHome }: LicenseSectionProps) {
  const [copied, setCopied] = useState(false);

  const licenseText = `LİSENZİYA TƏLİMATLARI / LICENSE INSTRUCTIONS

[AZƏRBAYCAN DİLİNDƏ]
Bu veb-saytda təqdim olunan bütün dərsliklər, təlimatlar və bələdçilər "MyServerTutorialAz" tərəfindən hazırlanmışdır:

1. İstifadə və Paylaşım: Bu dərsliklərdən və təlimat materiallarından şəxsi məqsədlər üçün öyrənmək, öz serverinizi qurmaq və qeyri-kommersiya məqsədləri ilə istifadə etmək tamamilə pulsuzdur. Materialları olduğu kimi, mənbə göstərməklə paylaşa bilərsiniz.
2. Üçüncü Tərəf Proqramları və Kodlar: Dərsliklərdə bəhs edilən və istifadə olunan əməliyyat sistemləri (məsələn, Ubuntu), platformalar (məsələn, CasaOS), tətbiqlər (məsələn, Docker) və digər köməkçi alətlər (məsələn, Rufus, OBS Studio) bizim mülkiyyətimiz deyil. Onlar öz müvafiq yaradıcılarına və öz müvafiq lisenziya şərtlərinə tabedirlər. Bizim onlarla rəsmi və ya hüquqi heç bir əlaqəmiz yoxdur.
3. Zəmanətin və Sorumluluğun Olmaması: Bu təlimat və bələdçilər tamamilə "OLDUĞU KİMİ" (AS IS) təqdim olunur. Serverin qurulması, istifadəsi və ya dərsliklərin tətbiqi zamanı yarana biləcək hər hansı bir maddi, mənəvi, texniki və ya sistem xətalarına (məlumat itkisi, cihaz zədələnməsi və s.) görə heç bir zəmanət verilmir və yaradıcılar (MyServerTutorialAz) heç bir məsuliyyət və sorumluluq daşımır. Bütün məsuliyyət istifadəçinin özünə aiddir.
4. Portalın Kod Bazası (GitHub): Bu veb-saytın (portalın) özünün proqram kodu (GitHub layihəsi) açıq qaynaqlıdır və müəllif tərəfindən MIT Lisenziyası ilə paylaşıla bilər. Lakin bu MIT lisenziyası portalın içindəki təlimat materiallarına, dərsliklərə və bəhs edilən digər proqramlara şamil olunmur.

--------------------------------------------------

[ENGLISH VERSION]
All tutorials, guidelines, and manuals provided on this website are authored by "MyServerTutorialAz":

1. Use and Distribution: It is completely free to use these tutorials and materials for personal learning, setting up your own home server, and non-commercial purposes. You may copy and share the materials as they are, provided that you attribute the source.
2. Third-Party Software and Codes: The operating systems (e.g., Ubuntu), platforms (e.g., CasaOS), applications (e.g., Docker), and other tools (e.g., Rufus, OBS Studio) discussed in the tutorials are NOT our property. They belong to their respective creators and are subject to their own license terms. We have no official or legal association with them.
3. Disclaimer of Warranty and Liability: THE TUTORIALS AND GUIDELINES ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY (INCLUDING DATA LOSS, HARDWARE DAMAGE, OR SYSTEM FAILURES) ARISING FROM THE USE OF THESE TUTORIALS. ALL RESPONSIBILITY LIES SOLELY WITH THE USER.
4. Portal Codebase (GitHub): The source code of this web application itself on GitHub is open-source and can be distributed under the MIT License. However, this license does not apply to the written tutorial materials, guides, or external software discussed herein.`;

  const copyLicense = () => {
    navigator.clipboard.writeText(licenseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#f8f9fc] dark:bg-proton-dark-bg/40 transition-colors duration-300 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
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
              Rəsmi Lisenziya
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

        {/* License Content */}
        <article className="bg-white dark:bg-proton-dark-card border border-neutral-200/80 dark:border-proton-dark-border rounded-2xl p-6 sm:p-10 shadow-lg shadow-neutral-100/50 dark:shadow-none mb-10 text-left">
          
          <div className="border-b border-neutral-200/80 dark:border-proton-dark-border pb-6 mb-8 flex items-start gap-4">
            <div className="p-3 bg-proton-purple/10 text-proton-purple dark:bg-proton-purple/20 dark:text-proton-purple-light rounded-xl hidden sm:block shrink-0">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <span className="px-3 py-1 rounded-md text-[10px] font-semibold font-mono uppercase tracking-wider mb-2.5 inline-block bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                Bizim Lisenziya Təlimatları
              </span>
              <h2 className="font-display font-bold text-3xl text-neutral-900 dark:text-white">
                İstifadə və Müəllif Hüquqları Şərtləri
              </h2>
              <p className="font-sans text-neutral-500 dark:text-neutral-400 mt-2 text-sm leading-relaxed">
                Bu veb-saytdakı bütün təlimatlar, dərsliklər və rəhbərlər bizim rəsmi lisenziya bəyanatımıza tabedir. Aşağıda şərtlər ilə tanış ola bilərsiniz.
              </p>
            </div>
          </div>

          {/* Quick breakdown card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-950/30 bg-emerald-50/20 dark:bg-emerald-950/5">
              <h4 className="font-display font-bold text-emerald-800 dark:text-emerald-400 text-sm mb-2 flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[3px]" />
                İcazə Verilir (Sərbəstdir):
              </h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1.5 font-sans">
                <li>• Şəxsi məqsədlər üçün öyrənmək və istifadə etmək</li>
                <li>• Öz ev serverinizi qurmaq üçün bələdçilərdən yararlanmaq</li>
                <li>• Materialları olduğu kimi, mənbə göstərməklə paylaşmaq</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-rose-200/60 dark:border-rose-950/30 bg-rose-50/10 dark:bg-rose-950/5">
              <h4 className="font-display font-bold text-rose-800 dark:text-rose-400 text-sm mb-2 flex items-center gap-1.5">
                <Shield className="h-4 w-4" />
                Məhdudiyyət və Məsuliyyət:
              </h4>
              <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1.5 font-sans">
                <li>• Təlimatların icazəsiz dəyişdirilməsi və ya satılması qadağandır</li>
                <li>• Dərsliklər "OLDUĞU KİMİ" təqdim edilir (heç bir zəmanət yoxdur)</li>
                <li>• Serverinizdə yarana biləcək hər hansı problem istifadəçiyə aiddir</li>
              </ul>
            </div>
          </div>

          {/* Legal Text Area */}
          <div className="relative bg-neutral-950 text-neutral-100 rounded-xl p-6 border border-neutral-800 font-mono text-xs leading-relaxed shadow-inner">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={copyLicense}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:text-white text-neutral-400 transition-colors cursor-pointer text-[10px]"
                id="btn-copy-license"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Lisenziyanı Kopyala</span>
                  </>
                )}
              </button>
            </div>
            
            <pre className="whitespace-pre-wrap font-mono pr-12 text-neutral-300 select-all leading-relaxed overflow-x-auto">
              {licenseText}
            </pre>
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
