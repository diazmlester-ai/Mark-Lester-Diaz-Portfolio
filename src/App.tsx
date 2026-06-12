/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import { Sparkles, ArrowRight, Bot, Zap } from 'lucide-react';
import { contactDetails } from './data';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default to dark mode for modern SaaS feel
  const [selectedProjectsList, setSelectedProjectsList] = useState<string[]>([]);

  // Toggle dark/light class on HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle dark/light theme on body container
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Helper function to smooth scroll with navbar offset
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleProjectInShortlist = (title: string) => {
    setSelectedProjectsList(prev => {
      if (prev.includes(title)) {
        return prev.filter(item => item !== title);
      } else {
        return [...prev, title];
      }
    });
  };

  const clearShortlist = () => {
    setSelectedProjectsList([]);
  };

  return (
    <div className={`${isDarkMode ? 'dark bg-[#0f1d22]' : 'bg-[#edf6f9]'} min-h-screen theme-transition font-sans overflow-x-hidden antialiased`}>
      
      {/* Fixed Sticky Header Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main Body Grid wrapper starts here */}
      <main className="relative">
        
        {/* HERO SECTION */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* CAPABILITIES / SERVICES SECTION */}
        <Services onScrollToSection={handleScrollToSection} />

        {/* COMPATIBILITY TECH SCROLLING MARQUEE */}
        <TechStack />

        {/* WORKFLOW PROCESS PIPELINE */}
        <Process />

        {/* FEATURED CASE STUDIES */}
        <Projects 
          onScrollToSection={handleScrollToSection} 
          selectedProjectsList={selectedProjectsList} 
          toggleProjectInShortlist={toggleProjectInShortlist} 
        />

        {/* ABOUT NARRATIVE SEGMENT */}
        <About />

        {/* CREDENTIALS & CERTIFICATIONS */}
        <Certifications />

        {/* CUSTOM CLIENT TESTIMONIALS */}
        <Testimonials />

        {/* COMPREHENSIVE CONTACT & BOOKING HUB */}
        <Contact 
          selectedProjectsList={selectedProjectsList} 
          clearShortlist={clearShortlist} 
        />

        {/* FREQUENTLY ASKED QUESTIONS SEGMENT */}
        <Faq />

      </main>

      {/* FOOTER */}
      <footer className="py-12 theme-transition bg-brand-primary dark:bg-[#091215] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs text-gray-500 font-mono">
            &copy; 2026 Mark Lester Diaz &bull; AI Automation Specialist
          </div>
        </div>
      </footer>

    </div>
  );
}
