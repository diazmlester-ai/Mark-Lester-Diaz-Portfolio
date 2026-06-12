import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, ZoomIn, X, ShieldCheck, Brain } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  verifyUrl: string;
  description: string;
}

const certificationsList: Certification[] = [
  {
    id: "n8n",
    title: "AI Automation with n8n Full Training",
    issuer: "Technical Virtual Assistants PH",
    date: "March 17, 2026",
    imageUrl: "https://lh3.googleusercontent.com/d/1DzYyAb71Vzvq5PIaU2pJillLTxeOV6hq",
    verifyUrl: "https://drive.google.com/file/d/1DzYyAb71Vzvq5PIaU2pJillLTxeOV6hq/view?usp=drive_link",
    description: "AI Agents vs AI Workflows, n8n server setup, workflows and nodes, triggers, actions, branching, merging data, API connections, and AI Agents."
  },
  {
    id: "make",
    title: "No Code Automation with Make.com",
    issuer: "Technical Virtual Assistants PH",
    date: "March 17, 2026",
    imageUrl: "https://lh3.googleusercontent.com/d/1sjFKOqD72bTlRVkQXKIMcHSodi384onQ",
    verifyUrl: "https://drive.google.com/file/d/1sjFKOqD72bTlRVkQXKIMcHSodi384onQ/view?usp=drive_link",
    description: "Make.com interface, scenario structure, filters, triggers, connecting apps, actions, error handling, and HTTP requests."
  },
  {
    id: "zapier",
    title: "No Code Automation with Zapier",
    issuer: "Technical Virtual Assistants PH",
    date: "March 17, 2026",
    imageUrl: "https://lh3.googleusercontent.com/d/1vpayz8pmotBdIHdkRAMmWsDyaIAx_Do1",
    verifyUrl: "https://drive.google.com/file/d/1vpayz8pmotBdIHdkRAMmWsDyaIAx_Do1/view?usp=drive_link",
    description: "Zapier interface, triggers, Formatter, Delay, Filter, Paths, Looping, Sub Zaps, Webhooks, and AI by Zapier."
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineering Full Training",
    issuer: "Technical Virtual Assistants PH",
    date: "March 17, 2026",
    imageUrl: "https://lh3.googleusercontent.com/d/1AA6G_ETZIRQ5pU27SL_TdqixzfFs6wOD",
    verifyUrl: "https://drive.google.com/file/d/1AA6G_ETZIRQ5pU27SL_TdqixzfFs6wOD/view?usp=drive_link",
    description: "Prompt engineering fundamentals, anatomy of a good prompt, practical techniques, real-world scenarios, prompt libraries, and prompt workflows."
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      id="certifications" 
      className="py-24 theme-transition bg-[#edf6f9]/40 dark:bg-[#0c181c] border-t border-brand-primary/10 dark:border-white/5 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading Segment */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 text-brand-primary dark:text-[#a0ded6]">
            <Brain className="w-4 h-4 text-brand-accent animate-pulse" />
            Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112229] dark:text-white tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid - Beautiful Premium Dark Card Style matching user reference */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between h-full rounded-2xl border border-brand-primary/10 dark:border-[#2a9d8f]/20 bg-white dark:bg-[#14232a] text-[#112229] dark:text-white p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/10 hover:border-brand-accent/40 hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-brand-accent/50"
            >
              {/* Premium Inner Container */}
              <div className="space-y-4 flex flex-col justify-between h-full">
                
                <div className="space-y-3">
                  {/* Issuer Row */}
                  <div className="flex items-center justify-between gap-2 border-b border-brand-primary/10 dark:border-white/5 pb-2">
                    <p className="text-[10px] sm:text-[11px] font-mono font-extrabold tracking-wider text-[#2a9d8f] dark:text-[#a0ded6] uppercase">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#112229] dark:text-white tracking-tight leading-snug group-hover:text-brand-accent transition-colors">
                    {cert.title}
                  </h3>

                  {/* Caption */}
                  <p className="text-[12px] text-gray-600 dark:text-gray-300/85 leading-relaxed font-normal min-h-[50px]">
                    {cert.description}
                  </p>
                </div>

                {/* Explicit View Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-primary/5 dark:bg-white/5 hover:bg-brand-accent dark:hover:bg-brand-accent text-brand-primary dark:text-white hover:text-white dark:hover:text-white text-xs font-bold transition-all border border-brand-primary/15 dark:border-white/10 hover:border-brand-accent dark:hover:border-brand-accent cursor-pointer shadow-sm"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    View Certification
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with AnimatePresence - Full Window Image Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 cursor-pointer select-none"
            onClick={() => setSelectedCert(null)}
          >
            {/* Overlay Top Bar containing Title and Close action */}
            <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between text-white z-50 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <div className="pointer-events-auto">
                <span className="text-[10px] font-mono font-bold tracking-widest text-brand-accent uppercase block">
                  {selectedCert.issuer.toUpperCase()}
                </span>
                <h4 className="font-extrabold text-sm sm:text-lg text-white">
                  {selectedCert.title}
                </h4>
              </div>
              
              <div className="flex items-center gap-3 pointer-events-auto">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-brand-accent text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-lg"
                  title="Verify Credential"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Verify Credential</span>
                </a>
                
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 rounded-full bg-white/10 text-white hover:bg-brand-accent transition-colors cursor-pointer flex items-center justify-center shadow-lg"
                  title="Close Full Window View"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Full-Size Certificate Container */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 mx-auto select-none pointer-events-auto cursor-default"
                onClick={() => setSelectedCert(null)}
                title="Click image to close"
              />
            </motion.div>

            {/* Bottom notification indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs font-medium font-sans pointer-events-none bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">
              Click anywhere outside or the image itself to return
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
