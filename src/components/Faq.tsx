import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "What tools do you use?",
      answer: "I work with n8n, Make, Zapier, OpenAI, Claude, Python, Supabase, HubSpot, and Google Workspace."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "No. Just tell me your workflow and goals—I’ll handle the technical setup and implementation."
    },
    {
      question: "How long does a project take?",
      answer: "Most automation projects take 1–2 weeks. More advanced AI systems typically take 3–5 weeks."
    },
    {
      question: "Who do you work with?",
      answer: "I work with founders, small businesses, and teams looking to automate repetitive tasks and improve efficiency."
    },
    {
      question: "How does the process work?",
      answer: "We discuss your requirements, agree on the scope and timeline, and I build the solution. Everything is planned upfront."
    },
    {
      question: "How much does a project cost?",
      answer: "Projects start at $800 USD. After a discovery call, you'll receive a fixed quote with no hidden fees or hourly billing."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 relative overflow-hidden theme-transition"
    >
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="space-y-4 mb-16 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-accent/10 text-brand-primary dark:text-[#a0ded6]">
            <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight">
            Got Questions? I've Got Answers
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-primary/80 dark:text-gray-300 font-medium">
            Find answers to common questions about my workflow, tools, and project scoping below.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4" id="faq-accordion-list">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                id={`faq-item-${idx}`}
                className="rounded-2xl border border-brand-primary/10 dark:border-[#2a9d8f]/20 bg-white dark:bg-[#13262e] overflow-hidden shadow-xs hover:border-brand-accent/35 transition-colors duration-300"
              >
                <button
                  type="button"
                  id={`faq-button-${idx}`}
                  onClick={() => handleToggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 font-bold text-base sm:text-lg text-brand-primary dark:text-white hover:text-brand-accent dark:hover:text-brand-accent transition-colors focus:outline-none"
                >
                  <span className="font-sans leading-snug">{item.question}</span>
                  <span className="p-1 rounded-lg bg-brand-primary/5 dark:bg-[#2a9d8f]/10 text-brand-primary dark:text-[#a0ded6] shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                
                {/* Expandable Answer Division */}
                <div 
                  id={`faq-content-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-brand-primary/5 dark:border-white/5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 sm:p-6 text-sm sm:text-base text-brand-primary/85 dark:text-gray-300 font-medium leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
