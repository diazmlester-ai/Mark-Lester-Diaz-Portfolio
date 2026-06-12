import React from 'react';
import { services } from '../data';
import { 
  Zap, 
  Settings2, 
  MessageSquare, 
  Users, 
  Database, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Help map icon names from string to actual Lucide react components
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Zap":
      return <Zap className={className} />;
    case "Settings2":
      return <Settings2 className={className} />;
    case "MessageSquare":
      return <MessageSquare className={className} />;
    case "Users":
      return <Users className={className} />;
    case "Database":
      return <Database className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    default:
      return <Zap className={className} />;
  }
};

interface ServicesProps {
  onScrollToSection: (id: string) => void;
}

export default function Services({ onScrollToSection }: ServicesProps) {
  return (
    <section 
      id="services" 
      className="py-20 theme-transition bg-white dark:bg-[#112229] border-t border-brand-primary/10 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="services-title-wrapper">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-accent/10 text-brand-primary dark:text-[#a0ded6]">
            What I Do
          </div>
          <h2 
            id="services-title"
            className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight"
          >
            What I Do
          </h2>
          <p className="text-brand-primary/80 dark:text-gray-300 font-medium">
            Simple and effective automation systems for workflows, processes, data, and integrations that save time and improve efficiency.
          </p>
        </div>

        {/* Services Cards Grid Layout */}
        <div 
          id="services-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="group theme-transition bg-brand-light-bg dark:bg-[#18313b] rounded-2xl p-8 border border-brand-primary/10 dark:border-[#2a9d8f]/10 hover:border-brand-accent dark:hover:border-brand-accent hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Icon Circle Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 dark:bg-[#203f4d] flex items-center justify-center text-brand-primary dark:text-brand-accent transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                  <IconMapper name={service.iconName} className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-primary/80 dark:text-gray-300 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>

              {/* Action item link decoration */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onScrollToSection("#contact");
                }}
                className="w-full text-left pt-6 mt-6 border-t border-brand-primary/10 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-brand-primary dark:text-brand-accent group-hover:text-brand-accent transition-colors cursor-pointer"
              >
                <span className="uppercase tracking-wider">Learn more</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic CTA at section bottom for conversion push */}
        <div 
          id="services-action-banner"
          className="mt-16 text-center text-sm font-semibold p-6 rounded-2xl bg-[#edf6f9]/50 dark:bg-[#13262e] border border-brand-primary/5 dark:border-[#2a9d8f]/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-brand-primary dark:text-gray-300">
            Have a custom system request that isn't listed here?
          </span>
          <button
            onClick={() => onScrollToSection("#contact")}
            className="px-4.5 py-2 rounded-lg bg-brand-accent hover:bg-[#228074] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1 cursor-pointer"
          >
            Ask Me Directly
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
