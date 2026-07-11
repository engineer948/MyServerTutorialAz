import React, { useState } from 'react';
import { Mail, Clipboard, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('myservertutorialaz@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-us" className="py-20 border-t border-neutral-200/60 dark:border-proton-dark-border transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="px-3 py-1 bg-proton-purple/10 text-proton-purple dark:bg-proton-purple/20 dark:text-proton-purple-light border border-proton-purple/10 dark:border-proton-purple/30 rounded-md text-[10px] font-semibold font-mono uppercase tracking-wider mb-4 inline-block">
          Əlaqə & Dəstək
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white mb-4">
          Bizimlə Əlaqə Saxlayın
        </h2>
        <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Təlimatlarda hər hansı bir xəta görsəniz və ya yeni mövzular əlavə edilməsini istəsəniz, rəsmi e-poçt ünvanımız vasitəsilə bizə yaza bilərsiniz.
        </p>

        {/* Centered Email Card */}
        <div className="bg-white dark:bg-proton-dark-card border border-neutral-200/80 dark:border-proton-dark-border rounded-2xl p-6 sm:p-8 shadow-lg shadow-neutral-100/50 dark:shadow-none max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-50 dark:bg-proton-dark-bg p-4 rounded-xl border border-neutral-200/60 dark:border-proton-dark-border">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-proton-purple/10 text-proton-purple dark:bg-proton-purple/20 dark:text-proton-purple-light rounded-lg">
                <Mail className="h-5 w-5" />
              </div>
              <a 
                href="mailto:myservertutorialaz@gmail.com"
                className="font-mono text-base sm:text-lg text-proton-purple dark:text-proton-purple-light font-bold hover:underline select-all"
              >
                myservertutorialaz@gmail.com
              </a>
            </div>
            
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-neutral-700 dark:text-neutral-300 bg-white dark:bg-proton-dark-card hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-proton-dark-border rounded-xl shadow-xs transition-colors cursor-pointer"
              id="btn-contact-copy-email"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span className="text-emerald-500">Kopyalandı</span>
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4" />
                  <span>Kopyala</span>
                </>
              )}
            </button>
          </div>

          <p className="font-sans text-xs text-neutral-400 mt-4">
            * Bütün daxil olan müraciətlər 24-48 saat ərzində cavablandırılır.
          </p>
        </div>

      </div>
    </section>
  );
}
