import React from 'react';
import { techStack } from '../data';
import { Settings, Cpu, ShieldAlert, Sparkles } from 'lucide-react';

export default function TechStack() {
  // Let's copy/duplicate the items to ensure the continuous marquee flow
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <section 
      id="tech-stack" 
      className="py-12 theme-transition bg-brand-light-bg dark:bg-[#0f1d22] border-t border-b border-brand-primary/10 dark:border-white/5 overflow-hidden relative"
    >
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-brand-light-bg dark:from-[#0f1d22] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-brand-light-bg dark:from-[#0f1d22] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 text-brand-primary dark:text-gray-300">
          Tech Stack
        </div>
      </div>

      {/* Outer wrapper to contain animation */}
      <div className="w-full relative py-2 overflow-hidden flex" id="tech-marquee-wrapper">
        
        {/* Infinite scrolling block */}
        <div 
          className="flex gap-4 items-center whitespace-nowrap animate-infinite-scroll scroll-smooth w-max hover:[animation-play-state:paused]"
          id="tech-marquee-stream"
        >
          {duplicatedStack.map((tech, index) => {
            return (
              <div
                key={`${tech}-${index}`}
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full text-xs font-bold font-sans border transition-all duration-200 hover:scale-105 select-none cursor-default bg-white dark:bg-[#18313b] border-brand-primary/10 dark:border-white/5 text-brand-primary dark:text-gray-300 hover:border-brand-accent/50 hover:shadow-sm"
              >
                <span>{tech}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
