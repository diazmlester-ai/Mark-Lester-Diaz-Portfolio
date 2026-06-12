import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, Zap } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 theme-transition bg-brand-light-bg/85 dark:bg-[#0f1d22]/85 backdrop-blur-md border-b border-[#264653]/10 dark:border-[#2a9d8f]/20">
      <div id="nav-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, "#hero")}
            className="flex items-center gap-3 group"
            id="nav-logo-link"
          >
            <div className="relative w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center theme-transition shadow-md group-hover:scale-105 overflow-hidden">
              <span className="text-white font-sans font-black text-xl select-none relative z-10 leading-none">M</span>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-brand-accent to-[#7dded0] rounded-xl opacity-0 group-hover:opacity-10 theme-transition"></div>
            </div>
            <span className="font-extrabold text-xl font-sans tracking-tight text-brand-primary dark:text-white group-hover:text-brand-accent dark:group-hover:text-[#a0ded6] transition-colors">
              Mark
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" id="desktop-menu">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-medium text-brand-primary/80 dark:text-gray-300 hover:text-brand-accent dark:hover:text-brand-accent theme-transition relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-brand-primary/10 dark:bg-brand-accent/20"></div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                id="theme-toggle"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 text-brand-primary dark:text-gray-200 hover:bg-brand-accent/20 dark:hover:bg-brand-accent/20 theme-transition cursor-pointer"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-brand-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Right Controls (Toggle + Menu Button) */}
          <div className="flex items-center md:hidden gap-3" id="mobile-controls">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-mobile"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 text-brand-primary dark:text-gray-200 theme-transition"
            >
              {isDarkMode ? (
                <Sun className="w-4.5 h-4.5 text-yellow-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-brand-primary" />
              )}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 text-brand-primary dark:text-gray-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="md:hidden border-t border-[#264653]/10 dark:border-[#2a9d8f]/20 bg-brand-light-bg dark:bg-[#112229] theme-transition px-4 pt-2 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-3 rounded-lg text-base font-semibold text-brand-primary/90 dark:text-gray-200 hover:bg-brand-primary/5 dark:hover:bg-white/5 theme-transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#264653]/10 dark:border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="flex w-full items-center justify-center py-3 text-center rounded-lg bg-brand-accent text-white font-bold shadow-md hover:bg-[#228074]"
            >
              Book a Call Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
