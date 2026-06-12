import React from 'react';
import { User, MessageSquare, Mail, Linkedin, Briefcase, ArrowRight } from 'lucide-react';
import { contactDetails } from '../data';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 theme-transition bg-white dark:bg-[#112229] border-t border-brand-primary/10 dark:border-white/5 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="space-y-4 mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-accent/10 text-brand-primary dark:text-[#a0ded6]">
            <User className="w-3.5 h-3.5 text-brand-accent" />
            Who I Am
          </div>
          <h2 
            id="about-title"
            className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight"
          >
            About Me
          </h2>
        </div>

        {/* 2-Column Grid Layout for Bio and Buttons */}
        <div className="grid md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Short introduction */}
          <div className="md:col-span-7 space-y-6 text-sm sm:text-base text-brand-primary/90 dark:text-gray-300 font-medium leading-relaxed text-left text-pretty">
            <p>
              I’m Mark, an AI Automation Specialist based in Cavite, Philippines. I entered automation after realizing how much time businesses lose on repetitive manual work that can be streamlined with the right systems.
            </p>
            <p>
              I specialize in building AI-powered workflows, CRM automations, and custom integrations that transform messy operations into clean, efficient, and scalable systems.
            </p>
            <p className="font-bold border-l-4 border-brand-accent pl-4 text-brand-primary dark:text-white bg-[#2a9d8f]/5 dark:bg-[#2a9d8f]/10 py-3 pr-4 rounded-r-lg leading-relaxed shadow-sm">
              My approach is simple: think like a business owner, build like an engineer, and create systems that deliver long-term value.
            </p>
          </div>

          {/* Right Column: Contact buttons */}
          <div className="md:col-span-5 space-y-4 text-left w-full">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/639387232144"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-brand-light-bg dark:bg-[#13262e] border border-brand-primary/10 dark:border-white/5 flex items-center justify-between gap-4 group hover:border-brand-accent/50 transition-colors w-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors">WhatsApp</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-brand-accent text-white group-hover:bg-[#228074] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${contactDetails.email}`}
              className="p-4 rounded-2xl bg-brand-light-bg dark:bg-[#13262e] border border-brand-primary/10 dark:border-white/5 flex items-center justify-between gap-4 group hover:border-brand-accent/50 transition-colors w-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors break-all">Email</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-brand-accent text-white group-hover:bg-[#228074] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href={contactDetails.linkedin}
              target="_blank"
              rel="noreferrer referrerPolicy"
              className="p-4 rounded-2xl bg-brand-light-bg dark:bg-[#13262e] border border-brand-primary/10 dark:border-white/5 flex items-center justify-between gap-4 group hover:border-brand-accent/50 transition-colors w-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-[#2a9d8f]/10 text-[#2a9d8f] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors">Linkedin</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-brand-accent text-white group-hover:bg-[#228074] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* OnlineJobs */}
            <a 
              href={contactDetails.onlinejobs}
              target="_blank"
              rel="noreferrer referrerPolicy"
              className="p-4 rounded-2xl bg-brand-light-bg dark:bg-[#13262e] border border-brand-primary/10 dark:border-white/5 flex items-center justify-between gap-4 group hover:border-brand-accent/50 transition-colors w-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/25 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors">Onlinejobs Profile</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-brand-accent text-white group-hover:bg-[#228074] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
