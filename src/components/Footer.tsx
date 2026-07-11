import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/80 dark:border-proton-dark-border bg-white dark:bg-proton-dark-card transition-colors duration-300">
      
      {/* Lower Copyright & Legal bar */}
      <div className="bg-[#f8f9fc] dark:bg-proton-dark-bg/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Brand/Credits */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="font-display font-bold text-sm tracking-tight text-neutral-950 dark:text-white">
              MyServer<span className="text-proton-purple dark:text-proton-purple-light font-extrabold">TutorialAz</span>
            </span>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
            <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400">
              Şəxsi Azad Bulud İnfrastrukturu Portal
            </p>
          </div>

          {/* Copyright text */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-neutral-400 font-sans">
            <span>© {currentYear} MyServerTutorialAz. Azərbaycanda yaradılmışdır.</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="#license" 
              className="hover:text-proton-purple dark:hover:text-proton-purple-light underline transition-colors"
            >
              Rəsmi Lisenziya (MIT)
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
