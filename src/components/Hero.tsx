import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, MapPin } from 'lucide-react';

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, start = 0, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, start, duration]);

  return <>{count}{suffix}</>;
}

interface RangeCounterProps {
  endStart: number;
  endEnd: number;
  duration?: number;
  suffix?: string;
}

function AnimatedRangeCounter({ endStart, endEnd, duration = 1500, suffix = "" }: RangeCounterProps) {
  const [valS, setValS] = useState(1);
  const [valE, setValE] = useState(1);

  useEffect(() => {
    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      
      const currentS = Math.floor(easeProgress * (endStart - 1) + 1);
      const currentE = Math.floor(easeProgress * (endEnd - 1) + 1);
      
      setValS(currentS);
      setValE(currentE);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [endStart, endEnd, duration]);

  return <>{valS}–{valE}{suffix}</>;
}

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Simulated stats state
  const [cumulativeManualHoursSaved, setCumulativeManualHoursSaved] = useState(1420);

  // Auto-increment stats occasionally for sensory motion
  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.4) {
        setCumulativeManualHoursSaved(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 theme-transition bg-brand-light-bg dark:bg-[#0f1d22] text-brand-primary dark:text-white overflow-hidden"
    >
      {/* Background Abstract Grid Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-accent/20 via-transparent to-transparent blur-3xl"></div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Correct 2-Column Responsive Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center" id="hero-layout">
          
          {/* Left Hero Column: Copy and CTA */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-start justify-center text-left">
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 
                id="hero-headline"
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-brand-primary dark:text-white leading-[1.1] tracking-tight"
              >
                Turning Manual Work <br className="hidden sm:inline" />
                into <span className="text-brand-accent">Automated Systems.</span>
              </h1>
              
              {/* Subheadline (Styled in pure white in dark, dark custom color in light mode) */}
              <p 
                id="hero-subheadline"
                className="text-base sm:text-lg lg:text-xl text-brand-primary/95 dark:text-white max-w-2xl font-medium leading-relaxed"
              >
                I help businesses streamline repetitive processes with AI-powered automation, allowing teams to save time, reduce manual effort, and focus on growth.
              </p>
            </div>
 
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto" id="hero-ctas">
              <button
                onClick={() => onScrollToSection("#contact")}
                id="hero-cta-primary"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-extrabold rounded-xl text-white bg-brand-accent hover:bg-[#228074] shadow-md hover:shadow-lg transition-all duration-200 gap-2 cursor-pointer text-center"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onScrollToSection("#projects")}
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-xl text-brand-primary bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/15 dark:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/15 transition-all duration-200 gap-2 cursor-pointer text-center"
              >
                View My Projects
              </button>
            </div>
            {/* Trust Indicators / Metrics (Slightly larger metrics in white/dark color) */}
            <div 
              id="hero-trust-indicators"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-brand-primary/15 dark:border-white/10 w-full"
            >
              
              {/* Metric 1 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary dark:text-white tracking-tight">
                  <AnimatedCounter end={10} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-brand-primary/75 dark:text-gray-300 mt-1 uppercase tracking-wide leading-tight">
                  Built<br />Automations
                </span>
              </div>
 
              {/* Metric 2 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary dark:text-white tracking-tight">
                  <AnimatedCounter end={10} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-brand-primary/75 dark:text-gray-300 mt-1 uppercase tracking-wide leading-tight">
                  hours/week<br />saved
                </span>
              </div>
 
              {/* Metric 3 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary dark:text-white tracking-tight">
                  <AnimatedCounter end={80} suffix="%" />
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-brand-primary/75 dark:text-gray-300 mt-1 uppercase tracking-wide leading-tight">
                  reduction in<br />manual work
                </span>
              </div>
 
              {/* Metric 4 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary dark:text-white tracking-tight">
                  <AnimatedRangeCounter endStart={2} endEnd={5} suffix="x" />
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-brand-primary/75 dark:text-gray-300 mt-1 uppercase tracking-wide leading-tight">
                  faster process<br />execution
                </span>
              </div>
 
            </div>
 
          </div>
 
          {/* Right Hero Column: Profile Photo of Mark Lester Diaz */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center text-center mt-6 lg:mt-0" id="hero-visual">
            
            {/* Profile Photo Square Curved Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-accent/50 bg-white dark:bg-[#13262e] group">
              <img 
                src="https://lh3.googleusercontent.com/d/1YLVmC0hY7Syu5OrPLqUx36FKv9DWnXRk"
                alt="Mark Lester Diaz - AI Automation Specialist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-[1.03] duration-500 transition-all origin-center"
              />
            </div>
 
            {/* Caption details under the photo - globally center-aligned using Manrope (font-sans) */}
            <div className="pt-6 space-y-1.5 font-sans">
              <span className="block text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white tracking-tight">
                Mark Lester Diaz
              </span>
              <span className="block text-base font-sans font-bold text-brand-accent tracking-wide">
                AI Automation Specialist
              </span>
              
              {/* Location indicator with MapPin */}
              <div className="flex items-center justify-center gap-1.5 text-sm text-brand-primary/70 dark:text-gray-400 pt-1 font-semibold">
                <MapPin className="w-4 h-4 text-[#2a9d8f]" />
                <span>Cavite, Philippines</span>
              </div>

              {/* "Let's Connect!" button under photo */}
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => onScrollToSection("#contact")}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-extrabold rounded-xl text-white bg-brand-accent hover:bg-[#228074] shadow-md hover:shadow-lg transition-all duration-200 gap-1.5 cursor-pointer"
                >
                  Let's Connect!
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
 
          </div>

        </div>
      </div>
    </section>
  );
}
