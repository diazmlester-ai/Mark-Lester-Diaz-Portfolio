import React, { useState, useEffect, useRef } from 'react';
import { processSteps } from '../data';
import { Compass, Code, Rocket, Cpu } from 'lucide-react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  const updatePoints = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPoints = iconsRef.current.map((icon) => {
      if (!icon) return { x: 0, y: 0 };
      const iconRect = icon.getBoundingClientRect();
      return {
        x: iconRect.left - containerRect.left + iconRect.width / 2,
        y: iconRect.top - containerRect.top + iconRect.height / 2
      };
    });
    setPoints(newPoints);
  };

  useEffect(() => {
    // Short timeout to guarantee page rendering is complete before bounding client rects are measured
    const setupTimer = setTimeout(updatePoints, 150);

    const resizeObserver = new ResizeObserver(() => {
      updatePoints();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updatePoints);

    return () => {
      clearTimeout(setupTimer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updatePoints);
    };
  }, []);

  // Custom icons matching each stage
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-8 h-8 text-brand-primary dark:text-[#a0ded6] group-hover:text-brand-accent transition-transform duration-300 group-hover:scale-110" />;
      case 1:
        return <Cpu className="w-8 h-8 text-brand-primary dark:text-[#a0ded6] group-hover:text-brand-accent transition-transform duration-300 group-hover:scale-110" />;
      case 2:
        return <Code className="w-8 h-8 text-brand-primary dark:text-[#a0ded6] group-hover:text-brand-accent transition-transform duration-300 group-hover:scale-110" />;
      case 3:
        return <Rocket className="w-8 h-8 text-brand-primary dark:text-[#a0ded6] group-hover:text-brand-accent transition-transform duration-300 group-hover:scale-110" />;
      default:
        return <Compass className="w-8 h-8 text-brand-primary dark:text-[#a0ded6] group-hover:text-brand-accent transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  const hasPoints = points.length === 4 && points.every(p => p.x > 0);

  let connectorPath = "";

  if (hasPoints) {
    connectorPath = `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y}`;
  }

  return (
    <section 
      id="process" 
      className="py-20 theme-transition bg-brand-light-bg dark:bg-[#0f1d22] border-t border-brand-primary/10 dark:border-white/5 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="process-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 text-brand-primary dark:text-gray-300">
            Operations Pipeline
          </div>
          <h2 
            id="process-title"
            className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight"
          >
            Process
          </h2>
          <p className="text-brand-primary/80 dark:text-gray-300 font-medium">
            An engineering-first methodology built to guide projects from vague business goals to automated systems that run around-the-clock.
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div ref={containerRef} className="relative mt-12" id="process-layout-wrapper">
          
          {/* Continuous Unified Connector Line for Desktop only */}
          {hasPoints && (
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
              <path 
                d={connectorPath} 
                fill="none" 
                stroke="#2a9d8f" 
                strokeWidth="2.5" 
                className="opacity-30 dark:opacity-45" 
                strokeLinecap="round"
              />
            </svg>
          )}

          <div 
            id="process-steps-grid"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10"
          >
            {processSteps.map((step, idx) => (
              <div 
                key={step.number}
                className="flex flex-col items-center text-center group relative"
              >
                
                {/* Icon Bubble */}
                <div className="mb-6 relative">
                  {/* Icon Circle */}
                  <div 
                    ref={(el) => { iconsRef.current[idx] = el; }}
                    className="w-20 h-20 rounded-2xl theme-transition bg-white dark:bg-[#18313b] border-2 border-brand-primary/15 dark:border-[#2a9d8f]/35 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-brand-accent group-hover:shadow-lg relative overflow-hidden z-10"
                  >
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Text Block */}
                <div className="space-y-3 px-4 max-w-sm relative z-10">
                  <h3 className="text-xl font-extrabold text-brand-primary dark:text-white group-hover:text-brand-accent transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-primary/80 dark:text-gray-300 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
