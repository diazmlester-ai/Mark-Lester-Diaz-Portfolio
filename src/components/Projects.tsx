import React, { useState, useEffect } from 'react';
import { projects, Project } from '../data';
import { CheckCircle2, Heart, Award, ArrowRight, ExternalLink, Zap, Clock, Terminal, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ProjectsProps {
  onScrollToSection: (id: string) => void;
  selectedProjectsList: string[];
  toggleProjectInShortlist: (title: string) => void;
}

export default function Projects({ onScrollToSection, selectedProjectsList, toggleProjectInShortlist }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentBlueprintProject, setCurrentBlueprintProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Zoom state for the image lightbox
  const [zoomScale, setZoomScale] = useState<number>(1);

  const closeLightbox = () => {
    setLightboxImage(null);
    setZoomScale(1);
  };

  const handleImageClick = () => {
    if (zoomScale > 1) {
      setZoomScale(1);
    } else {
      setZoomScale(2);
    }
  };

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  // Group unique categories for filter
  const categories = ["All", "n8n", "Zapier", "Make.com", "HighLevel", "Power Automate"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="projects" 
      className="py-20 theme-transition bg-white dark:bg-[#112229] border-t border-brand-primary/10 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" id="projects-header-wrapper">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-accent/10 text-brand-primary dark:text-[#a0ded6]">
              <Award className="w-3.5 h-3.5 text-brand-accent" />
              Projects
            </div>
            <h2 
              id="projects-title"
              className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight leading-tight"
            >
              Real Automation Solutions for <br />
              Real Business Challenges.
            </h2>
            <p className="text-brand-primary/80 dark:text-gray-300 font-medium leading-relaxed">
              A collection of case studies showcasing my approach to solving business problems through AI and workflow automation.
            </p>
          </div>
        </div>

        {/* Filter Categories Navbar */}
        <div 
          id="projects-categories-tabs"
          className="flex flex-wrap gap-2 pb-8 mb-4 border-b border-brand-primary/5 dark:border-white/5"
        >
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setSelectedCategory(cat)}
               className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                 selectedCategory === cat 
                   ? 'bg-brand-primary dark:bg-brand-accent text-white shadow-md' 
                   : 'bg-brand-light-bg dark:bg-[#18313b] text-brand-primary/80 dark:text-gray-300 hover:bg-brand-primary/10 dark:hover:bg-white/10'
               }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Case-Study Cards */}
        {filteredProjects.length > 0 ? (
          <div 
            id="projects-cards-grid"
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => {
              const displayImage = project.imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
              return (
                <div 
                  key={project.title}
                  className="theme-transition rounded-2xl border flex flex-col justify-between overflow-hidden relative group border-brand-primary/10 dark:border-[#2a9d8f]/10 bg-brand-light-bg dark:bg-[#18313b] hover:border-brand-accent/45"
                >


                  {/* Card Header Content */}
                  <div className="p-6 sm:p-8 space-y-4 pt-8">
                    <h3 className="text-2xl font-extrabold text-brand-primary dark:text-white leading-tight">
                      {project.title}
                    </h3>

                    {/* Impact Statement focused on real-world value */}
                    <p className="text-sm font-medium text-brand-primary/85 dark:text-gray-300 leading-relaxed border-l-2 border-brand-accent/40 pl-3">
                      {project.impact}
                    </p>

                    {/* Tech Stack list under caption */}
                    {project.techStackDetails && project.techStackDetails.length > 0 && (() => {
                      const filteredTechs = project.techStackDetails.filter(tech => {
                        const lower = tech.toLowerCase();
                        return !(
                          lower === "zapier" || 
                          lower === "n8n" || 
                          lower === "make.com" || 
                          lower === "make" || 
                          lower === "activecampaign" || 
                          lower === "active campaign" ||
                          lower === "delay & filter by zapier" ||
                          lower === "ai by zapier"
                        );
                      });
                      if (filteredTechs.length === 0) return null;
                      return (
                        <div className="font-sans text-xs font-semibold text-brand-primary/80 dark:text-white flex flex-wrap gap-x-2 gap-y-1 pt-1">
                          {filteredTechs.map((tech, i) => (
                            <span key={tech} className="flex items-center gap-2">
                              <span>{tech}</span>
                              {i < filteredTechs.length - 1 && (
                                <span className="opacity-45 select-none">•</span>
                              )}
                            </span>
                          ))}
                        </div>
                      );
                    })()}

                  </div>

                  {/* View Case Study and Snapshot on Mobile/Tablet (Visible below lg, hidden on desktop lg+) */}
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 lg:hidden relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentBlueprintProject(project);
                      }}
                      className="w-full py-3 bg-brand-accent hover:bg-[#228074] text-white text-sm font-extrabold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                      View Case Study
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(displayImage);
                      }}
                      className="w-full py-3 bg-white dark:bg-[#18313b] text-brand-primary dark:text-white border border-brand-primary/15 dark:border-white/10 hover:bg-brand-light-bg dark:hover:bg-[#1f3f4b] text-sm font-extrabold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Zap className="w-4 h-4 text-brand-accent" />
                      View Project Snapshot
                    </button>
                  </div>

                  {/* Absolute Roll-up Image Drawer on Hover */}
                  <div className="absolute inset-0 bg-white dark:bg-[#112229] border border-brand-primary/10 dark:border-[#2a9d8f]/30 rounded-2xl overflow-hidden z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    {/* Full Image Container */}
                    <div className="w-full h-full relative overflow-hidden bg-white dark:bg-[#112229]">
                      <img 
                        src={displayImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Dark overlay showing "View Case Study" and "View Project Snapshot" */}
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentBlueprintProject(project);
                          }}
                          className="w-48 px-5 py-2.5 bg-brand-accent hover:bg-[#228074] text-white text-xs font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer transform -translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-auto shadow-brand-accent/20"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                          View Case Study
                        </button>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage(displayImage);
                          }}
                          className="w-48 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20 transform translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-auto"
                        >
                          <Zap className="w-3.5 h-3.5 text-[#a0ded6]" />
                          View Project Snapshot
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center bg-brand-light-bg dark:bg-[#18313b] border border-brand-primary/10 dark:border-[#2a9d8f]/10 rounded-2xl flex flex-col items-center justify-center space-y-4 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent animate-pulse">
              <Zap className="w-8 h-8" />
            </div>
            <p className="text-lg font-bold text-brand-primary dark:text-white">
              {selectedCategory === "HighLevel" || selectedCategory === "Power Automate" 
                ? "Projects will uplad soon!" 
                : "Project will uploaded soon!"}
            </p>
            {!(selectedCategory === "HighLevel" || selectedCategory === "Power Automate") && (
              <p className="text-sm text-brand-primary/70 dark:text-gray-400 max-w-xs font-medium">
                I'm currently preparing systems specs and real-world results for {selectedCategory} integrations. Check back shortly!
              </p>
            )}
          </div>
        )}

        {/* Dynamic Blueprint Modal Drawer */}
        {currentBlueprintProject && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white dark:bg-[#13262e] border border-brand-primary/15 dark:border-[#2a9d8f]/30 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Top Header */}
              <div className="p-6 bg-gradient-to-r from-brand-primary to-[#182e37] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-brand-accent font-bold uppercase tracking-widest block mb-1">
                    System Architecture Blueprint
                  </span>
                  <h4 className="text-2xl font-bold tracking-tight">
                    {currentBlueprintProject.title}
                  </h4>
                </div>
                <button
                  onClick={() => setCurrentBlueprintProject(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 text-white font-extrabold cursor-pointer"
                >
                  &times;
                </button>
              </div>

              {/* Modal Technical detail breakdown body */}
              <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
                
                {currentBlueprintProject.overview ? (
                  // Custom Rich View
                  <div className="space-y-6">
                    {/* Overview */}
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary/60 dark:text-gray-400 block mb-2">
                        Overview
                      </span>
                      <p className="text-sm font-medium text-brand-primary/90 dark:text-gray-250 leading-relaxed text-pretty">
                        {currentBlueprintProject.overview}
                      </p>
                    </div>

                    {/* Problem */}
                    {currentBlueprintProject.problem && (
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary/60 dark:text-gray-400 block mb-2">
                          Problem
                        </span>
                        <p className="text-sm font-medium text-red-900 dark:text-red-200/90 bg-red-50/80 dark:bg-red-950/20 p-4 rounded-xl border border-red-100 dark:border-red-900/35 leading-relaxed text-pretty">
                          {currentBlueprintProject.problem}
                        </p>
                      </div>
                    )}

                    {/* How It Works */}
                    {currentBlueprintProject.worksSteps && (
                      <div className="space-y-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary/60 dark:text-gray-400 block mb-1">
                          How the Automation Works
                        </span>
                        <div className="space-y-3">
                          {currentBlueprintProject.worksSteps.map((step, idx) => {
                            // Extract numeric indicator and step description text
                            const match = step.match(/^(\d+)\s+(.*)$/);
                            const num = match ? match[1] : (idx + 1).toString();
                            const desc = match ? match[2] : step;
                            return (
                              <div key={idx} className="flex items-start gap-3.5 text-sm text-brand-primary/95 dark:text-gray-200 font-medium">
                                <span className="w-5.5 h-5.5 flex-shrink-0 rounded-full bg-brand-accent/15 text-brand-primary dark:text-[#a0ded6] text-xs font-bold font-mono flex items-center justify-center mt-0.5 shadow-sm border border-brand-accent/10">
                                  {num}
                                </span>
                                <span className="leading-relaxed">{desc}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Stats Before / After */}
                    {(currentBlueprintProject.beforeStats || currentBlueprintProject.afterStats) && (
                      <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        {currentBlueprintProject.beforeStats && (
                          <div className="p-4.5 rounded-xl border border-brand-primary/10 dark:border-white/5 bg-[#edf6f9]/50 dark:bg-[#0f1d22] space-y-1">
                            <span className="text-[10px] uppercase font-bold text-gray-400 block">
                              Before
                            </span>
                            <p className="text-sm font-semibold text-brand-primary/90 dark:text-gray-300 leading-relaxed">
                              {currentBlueprintProject.beforeStats}
                            </p>
                          </div>
                        )}
                        {currentBlueprintProject.afterStats && (
                          <div className="p-4.5 rounded-xl border border-brand-accent/20 dark:border-[#2a9d8f]/30 bg-[#2a9d8f]/5 dark:bg-[#2a9d8f]/10 space-y-1">
                            <span className="text-[10px] uppercase font-bold text-brand-accent dark:text-[#a0ded6] block">
                              After
                            </span>
                            <p className="text-sm font-semibold text-[#2a9d8f] dark:text-[#a0ded6] leading-relaxed">
                              {currentBlueprintProject.afterStats}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tech Stack */}
                    {currentBlueprintProject.techStackDetails && (() => {
                      const filteredTechs = currentBlueprintProject.techStackDetails.filter(tech => {
                        const lower = tech.toLowerCase();
                        return !(
                          lower === "zapier" || 
                          lower === "n8n" || 
                          lower === "make.com" || 
                          lower === "make" || 
                          lower === "activecampaign" || 
                          lower === "active campaign" ||
                          lower === "delay & filter by zapier" ||
                          lower === "ai by zapier"
                        );
                      });
                      if (filteredTechs.length === 0) return null;
                      return (
                        <div className="space-y-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary/60 dark:text-gray-400 block">
                            Tech Stack
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {filteredTechs.map((tech) => (
                              <span key={tech} className="text-xs bg-brand-primary/5 dark:bg-[#18313b] text-brand-primary/90 dark:text-gray-200 px-3 py-1.5 rounded-lg border border-brand-primary/10 dark:border-[#2a9d8f]/10 font-bold shadow-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  // Generic Specification View (Fallback)
                  <>
                    {/* Visual Trigger - Actions flow representation */}
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary/60 dark:text-gray-400 block mb-3">
                        Workflow Node Execution Sequence
                      </span>
                      <div className="grid grid-cols-5 items-center gap-2 text-center text-xs font-mono font-bold bg-[#edf6f9] dark:bg-[#112229] p-4 rounded-xl border border-brand-primary/10 dark:border-white/5">
                        
                        <div className="p-2 border border-blue-200 dark:border-blue-900 bg-white dark:bg-[#18313b] text-blue-800 dark:text-blue-300 rounded shadow-sm">
                          <div className="text-[9px] text-gray-400">01. INTAKE</div>
                          Trigger
                        </div>
                        
                        <div className="flex justify-center text-brand-accent text-lg">&rarr;</div>
                        
                        <div className="p-2 border border-purple-200 dark:border-purple-900 bg-white dark:bg-[#18313b] text-purple-800 dark:text-purple-300 rounded shadow-sm">
                          <div className="text-[9px] text-gray-400">02. LOGIC</div>
                          AI Agent
                        </div>
                        
                        <div className="flex justify-center text-brand-accent text-lg">&rarr;</div>
                        
                        <div className="p-2 border border-green-200 dark:border-green-900 bg-white dark:bg-[#18313b] text-green-800 dark:text-green-300 rounded shadow-sm">
                          <div className="text-[9px] text-gray-400">03. OUTPUT</div>
                          Database
                        </div>

                      </div>
                    </div>



                    {/* Detailed Workflow Steps */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono font-bold text-brand-primary/60 dark:text-gray-400 block">
                        Engineering Specs
                      </span>
                      <div className="space-y-2 text-sm text-brand-primary/95 dark:text-gray-200 leading-relaxed font-sans">
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span><strong>State Handler:</strong> Automatic error-retry failsafe keeps endpoints active over connection spikes.</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span><strong>System Alignment:</strong> Tailored webhooks support sub-second triggers without queuing logs or polling latency.</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span><strong>AI Token Optimization:</strong> Prompt schemas are engineered dynamically using system prompt caching to save up to 45% in API billing rates.</span>
                        </p>
                      </div>
                    </div>

                    <div className="p-4.5 rounded-xl bg-orange-50 dark:bg-orange-950/20 text-orange-900 dark:text-orange-200 border border-orange-200 dark:border-orange-900/40 text-xs flex items-start gap-2.5">
                      <Terminal className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Production Ready Protocol:</strong> This automation system includes full deployment logs, schema backups, and customizable notifications via Slack/Email on critical errors.
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* Modal Bottom control buttons */}
              <div className="p-6 border-t border-brand-primary/10 dark:border-white/5 bg-gray-50 dark:bg-[#18313b]/30 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentBlueprintProject(null)}
                  className="px-4 py-2 border rounded-xl text-xs font-bold text-brand-primary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer"
                >
                  Close Specification
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = currentBlueprintProject.title;
                    if (!selectedProjectsList.includes(title)) {
                      toggleProjectInShortlist(title);
                    }
                    setCurrentBlueprintProject(null);
                    onScrollToSection("#contact");
                  }}
                  className="px-6 py-2.5 bg-brand-accent hover:bg-[#228074] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg flex items-center gap-1 cursor-pointer"
                >
                  Build Similar Build Similar System
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Lightbox Modal for Full Size Images */}
        {lightboxImage && (
          <div 
            className={`fixed inset-0 bg-black/95 backdrop-blur-md z-55 flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 select-none ${zoomScale > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div 
              className="absolute top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 bg-black/60 border border-white/10 px-3 py-1.5 rounded-full text-xs text-white/95 font-semibold font-sans pointer-events-auto shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#2a9d8f] animate-pulse"></span>
                <span>Blueprint Viewer</span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="bg-black/60 hover:bg-black/80 border border-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-2xl transition-all shadow-md cursor-pointer pointer-events-auto hover:scale-105 active:scale-95"
                title="Close Viewer (Esc)"
              >
                &times;
              </button>
            </div>

            {/* Main Interactive Stage with image in full window size */}
            <div 
              className="transition-transform duration-200 ease-out flex items-center justify-center max-w-full max-h-full"
              style={{ 
                transform: `scale(${zoomScale})`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleImageClick();
              }}
            >
              <img 
                src={lightboxImage} 
                alt="Full size automation blueprint screenshot" 
                className="max-h-[85vh] max-w-[85vw] md:max-h-[92vh] md:max-w-[92vw] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </div>
            
            {/* Control toolkit positioned in the lower-left of the window */}
            <div 
              className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 shadow-2xl pointer-events-auto z-50 animate-in slide-in-from-bottom-5 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zoom out */}
              <button
                onClick={() => setZoomScale(prev => Math.max(prev - 0.25, 0.5))}
                className="p-1.5 hover:bg-white/10 active:bg-white/20 text-white/90 rounded-lg transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              
              {/* Zoom indicator display */}
              <span className="text-xs font-bold font-mono text-white/90 px-1 min-w-[3rem] text-center">
                {Math.round(zoomScale * 100)}%
              </span>
              
              {/* Zoom in */}
              <button
                onClick={() => setZoomScale(prev => Math.min(prev + 0.25, 4))}
                className="p-1.5 hover:bg-white/10 active:bg-white/20 text-white/90 rounded-lg transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <div className="w-[1px] h-4 bg-white/15 mx-1" />

              {/* Reset button */}
              <button
                onClick={() => {
                  setZoomScale(1);
                }}
                className="p-1.5 hover:bg-white/10 active:bg-white/20 text-[#a0ded6] rounded-lg transition-colors cursor-pointer"
                title="Reset Sizing"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Quick helper badge in lower right */}
            <div className="absolute bottom-6 right-6 hidden sm:block pointer-events-none select-none z-50">
              <p className="text-[10px] font-mono text-white/40 flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-full border border-white/5 shadow-md">
                <span>Press <span className="bg-white/10 px-1 py-0.5 rounded text-white/80">ESC</span> to exit</span>
                <span>•</span>
                <span>Click image to toggle zoom</span>
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
