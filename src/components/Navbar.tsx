import React, { useState } from 'react';
import { Server, Sun, Moon, Menu, X, Mail, Github, Youtube, MessageSquare } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openFeedback: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode, openFeedback }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discordComingSoon, setDiscordComingSoon] = useState(false);

  const handleDiscordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDiscordComingSoon(true);
    setTimeout(() => setDiscordComingSoon(false), 3000);
  };

  const navLinks = [
    { name: 'Ana Səhifə', href: '#home' },
    { name: 'Ubuntu', href: '#ubuntu' },
    { name: 'Lisenziya', href: '#license' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b bg-[#f8f9fc]/90 dark:bg-proton-dark-bg/90 border-neutral-200/80 dark:border-proton-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-proton-purple text-white rounded-lg shadow-lg shadow-proton-purple/20">
              <Server className="h-5 w-5" id="nav-logo-icon" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
              MyServer<span className="text-proton-purple dark:text-proton-purple-light">TutorialAz</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 hover:text-proton-purple dark:hover:text-proton-purple-light transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* Social Icons (Sleek and small) */}
            <div className="flex items-center gap-3.5 border-l border-neutral-200 dark:border-proton-dark-border pl-4 mr-1">
              <a
                href="https://github.com/engineer948"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
                title="GitHub"
                id="btn-nav-github"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@MyServerTutorialAz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors p-1"
                title="YouTube"
                id="btn-nav-youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#discord"
                onClick={handleDiscordClick}
                className="text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-1"
                title="Discord"
                id="btn-nav-discord"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </a>
            </div>
            
            {/* Feedback Email Link */}
            <button
              onClick={openFeedback}
              className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-proton-purple hover:bg-proton-purple-hover rounded-lg transition-all duration-200 shadow-md shadow-proton-purple/10 cursor-pointer"
              id="btn-nav-feedback"
            >
              <Mail className="h-4 w-4" />
              Təkliflər üçün Email
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg border border-neutral-200 dark:border-proton-dark-border bg-white dark:bg-proton-dark-card text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Gündüz/Gecə Modu"
              id="btn-nav-theme-toggle"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-amber-500 animate-pulse" />
              ) : (
                <Moon className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
              )}
            </button>
          </div>

          {/* Mobile controls (hamburger & theme) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Small Mobile Social Icons */}
            <div className="flex items-center gap-2 mr-1">
              <a
                href="https://github.com/engineer948"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-1"
                id="btn-mobile-nav-github"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@MyServerTutorialAz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 p-1"
                id="btn-mobile-nav-youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#discord"
                onClick={handleDiscordClick}
                className="text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 p-1"
                id="btn-mobile-nav-discord"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </a>
            </div>

            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-neutral-200 dark:border-proton-dark-border bg-white dark:bg-proton-dark-card text-neutral-600 dark:text-neutral-300 cursor-pointer"
              aria-label="Gündüz/Gecə Modu"
              id="btn-mobile-theme-toggle"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-neutral-200 dark:border-proton-dark-border bg-white dark:bg-proton-dark-card text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Menyu"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-proton-dark-card border-b border-neutral-200/80 dark:border-proton-dark-border animate-in fade-in duration-150">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-proton-purple dark:hover:text-proton-purple-light transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-3 border-t border-neutral-200 dark:border-proton-dark-border mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openFeedback();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-proton-purple hover:bg-proton-purple-hover rounded-lg transition-all duration-200 shadow-md shadow-proton-purple/10"
                id="btn-mobile-feedback"
              >
                <Mail className="h-4 w-4" />
                Təkliflər üçün Email
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discord Coming Soon Toast Notification */}
      {discordComingSoon && (
        <div className="fixed bottom-5 right-5 z-[9999] bg-neutral-950 dark:bg-neutral-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-neutral-800 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <MessageSquare className="h-4 w-4 text-proton-purple dark:text-proton-purple-light animate-bounce" />
          <span>Tezliklə gələcək!</span>
        </div>
      )}
    </nav>
  );
}
