import React, { useState } from 'react';
import { Mail, X, Clipboard, Check } from 'lucide-react';

interface FeedbackProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackSection({ isOpen, onClose }: FeedbackProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Overlay backdrop */}
        <div 
          onClick={onClose} 
          className="fixed inset-0 bg-neutral-900/60 dark:bg-black/80 transition-opacity" 
          aria-hidden="true"
        ></div>

        {/* Center the modal */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white dark:bg-proton-dark-card rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-neutral-200/85 dark:border-proton-dark-border animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-100 dark:border-proton-dark-border">
            <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-proton-purple dark:text-proton-purple-light" />
              Bizə Təklif və ya Sual Göndərin
            </h3>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer"
              id="btn-close-feedback-modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 text-center">
            <div className="inline-flex p-4 bg-proton-purple/10 text-proton-purple dark:bg-proton-purple/20 dark:text-proton-purple-light rounded-full mb-4 border border-proton-purple/10">
              <Mail className="h-8 w-8" />
            </div>
            
            <h4 className="font-display font-bold text-lg text-neutral-900 dark:text-white mb-2">
              Təklif və Suallarınız Üçün
            </h4>
            
            <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
              Təlimatlar və ya layihə ilə bağlı hər hansı təklif, irad və ya sualınız varsa, birbaşa rəsmi e-poçt ünvanımıza yaza bilərsiniz:
            </p>

            {/* Email card */}
            <div className="bg-neutral-50 dark:bg-proton-dark-bg p-4 rounded-xl border border-neutral-200/60 dark:border-proton-dark-border flex items-center justify-between gap-4 mb-6">
              <a 
                href="mailto:myservertutorialaz@gmail.com" 
                className="font-mono text-sm sm:text-base text-proton-purple dark:text-proton-purple-light font-bold hover:underline select-all text-left"
              >
                myservertutorialaz@gmail.com
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('myservertutorialaz@gmail.com');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="p-2 rounded-lg bg-white dark:bg-proton-dark-card border border-neutral-200/60 dark:border-proton-dark-border hover:bg-neutral-50 dark:hover:bg-neutral-850 text-neutral-500 dark:text-neutral-300 transition-colors shrink-0 cursor-pointer"
                title="Kopyala"
                id="btn-modal-copy-email"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </button>
            </div>

            <p className="font-sans text-[11px] text-neutral-400 dark:text-neutral-500 leading-relaxed">
              * Bütün daxil olan e-poçtlar qısa müddətdə rəsmi olaraq nəzərdən keçirilir və cavablandırılır.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
