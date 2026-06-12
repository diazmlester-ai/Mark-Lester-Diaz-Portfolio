import React, { useState, useEffect } from 'react';
import { contactDetails } from '../data';
import { 
  Send, 
  MessageSquare, 
  Calendar, 
  Linkedin, 
  FileCheck2, 
  Mail, 
  ArrowRight, 
  PhoneCall, 
  Award, 
  Clock, 
  CheckCircle2, 
  Terminal,
  Activity,
  Briefcase
} from 'lucide-react';

interface ContactProps {
  selectedProjectsList: string[];
  clearShortlist: () => void;
}

interface OutboxItem {
  id: string;
  name: string;
  email: string;
  message: string;
  selectedProjects: string[];
  date: string;
}

export default function Contact({ selectedProjectsList, clearShortlist }: ContactProps) {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // Simulation steps states for submits
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitLogs, setSubmitLogs] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionsList, setSubmissionsList] = useState<OutboxItem[]>([]);

  // Sub-tab for Booking vs Form
  const [contactMode, setContactMode] = useState<'form' | 'book'>('form');

  // Booking details
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<number | null>(null);
  const [selectedCalendarTime, setSelectedCalendarTime] = useState<string | null>(null);
  const [isBookingCreated, setIsBookingCreated] = useState(false);

  // Next 5 work days calculation
  const [availableDays, setAvailableDays] = useState<{ dayName: string; dateInt: number; monthName: string }[]>([]);

  useEffect(() => {
    // Generate next 5 business work days dynamically
    const days = [];
    const date = new Date();
    let currentCount = 0;
    while (currentCount < 5) {
      date.setDate(date.getDate() + 1);
      const dayOfWeek = date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Weekdays only
        days.push({
          dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
          dateInt: date.getDate(),
          monthName: date.toLocaleDateString('en-US', { month: 'short' })
        });
        currentCount++;
      }
    }
    setAvailableDays(days);
  }, []);

  const availableHours = ["09:00 AM", "10:30 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

  // Read previous outbox items on mount
  useEffect(() => {
    const saved = localStorage.getItem('diaz_portfolio_submissions');
    if (saved) {
      try {
        setSubmissionsList(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => {
      setCopiedLink(null);
    }, 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setSubmitLogs([]);
    setSubmitSuccess(false);

    // Progressive logs simulated for realistic SaaS response
    const logs = [
      "&gt; Formulating payload schemas...",
      "&gt; Validating customer tokens...",
      `&gt; Syncing: [${selectedProjectsList.join(', ') || 'General System Request'}]`,
      "&gt; Packaging SMTP & secure parameters...",
      "&gt; Forwarding to va.marklesterdiaz@gmail.com...",
      "&gt; Server response: 200 OK &bull; Transmission Success!"
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setSubmitLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        
        // Save to outbox
        const newItem: OutboxItem = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          message,
          selectedProjects: [...selectedProjectsList],
          date: new Date().toLocaleDateString()
        };

        const updatedList = [newItem, ...submissionsList];
        setSubmissionsList(updatedList);
        localStorage.setItem('diaz_portfolio_submissions', JSON.stringify(updatedList));

        setIsSubmitting(false);
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        clearShortlist();
      }
    }, 550);
  };

  const handleConfirmBooking = () => {
    if (!selectedCalendarDate || !selectedCalendarTime) return;
    setIsBookingCreated(true);
    setTimeout(() => {
      // Simulate redirection to calendly placeholder or complete reservation
      window.open(contactDetails.calendlyPlaceholder, '_blank');
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="py-20 theme-transition bg-brand-light-bg dark:bg-[#0f1d22] border-t border-brand-primary/10 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Subtext */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="contact-header-wrapper">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-accent/10 text-brand-primary dark:text-[#a0ded6]">
            <PhoneCall className="w-3.5 h-3.5 text-brand-accent animate-bounce" />
            Contact
          </div>
          <h2 
            id="contact-title"
            className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight"
          >
            Let’s Build Something Smart
          </h2>
          <p className="text-brand-primary/85 dark:text-gray-300 font-medium">
            Ready to get started? Contact me directly or book a consultation below.
          </p>
        </div>

        {/* Centered Dashboard Layout */}
        <div 
          className="max-w-3xl mx-auto space-y-8 text-left"
          id="contact-grid-wrapper"
        >
          
          {/* Dynamic Form / Interactive Booking dashboard */}
          <div className="w-full" id="contact-interactive-panel">
            <div className="bg-white dark:bg-[#13262e] rounded-3xl border border-brand-primary/10 dark:border-[#2a9d8f]/30 overflow-hidden shadow-xl text-left">
              
              {/* Interaction Modes Top selectors */}
              <div className="grid grid-cols-2 text-center font-bold text-sm bg-brand-light-bg dark:bg-[#0f1d22] border-b border-brand-primary/10 dark:border-white/5">
                <button
                  type="button"
                  onClick={() => setContactMode('form')}
                  className={`py-4 cursor-pointer flex items-center justify-center gap-1.5 transition-colors ${
                    contactMode === 'form' 
                      ? 'bg-white dark:bg-[#13262e] border-t-2 border-brand-accent text-brand-primary dark:text-white' 
                      : 'text-brand-primary/50 dark:text-gray-500 hover:text-brand-primary dark:hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Leave a Message
                </button>
                <button
                  type="button"
                  onClick={() => setContactMode('book')}
                  className={`py-4 cursor-pointer flex items-center justify-center gap-1.5 transition-colors ${
                    contactMode === 'book' 
                      ? 'bg-white dark:bg-[#13262e] border-t-2 border-brand-accent text-brand-primary dark:text-white' 
                      : 'text-brand-primary/50 dark:text-gray-500 hover:text-brand-primary dark:hover:text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Discovery Call
                </button>
              </div>

              {/* Mode 1: Contact Form Panel */}
              {contactMode === 'form' && (
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Informative Shortlisted items tag block */}
                  {selectedProjectsList.length > 0 && (
                    <div className="p-4 rounded-xl bg-[#e6f4f2] dark:bg-[#112d35] border border-brand-accent/25 text-brand-primary dark:text-gray-200 text-xs">
                      <div className="font-extrabold uppercase tracking-wide text-brand-accent mb-2 flex items-center gap-1">
                        <FileCheck2 className="w-4 h-4" />
                        Selected Blueprint Attachment Included ({selectedProjectsList.length})
                      </div>
                      <p className="mb-2 leading-relaxed">
                        I am attaching the following automation blueprints for custom estimation in Cavite:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {selectedProjectsList.map((item) => (
                          <span 
                            key={item}
                            className="bg-brand-accent hover:opacity-90 transition-opacity text-white text-[9px] font-bold py-1 px-2.5 rounded font-mono flex items-center gap-1 relative"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {!submitSuccess ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4" id="portfolio-contact-form">
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-mono font-bold uppercase text-brand-primary/60 dark:text-gray-400">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                            placeholder="Your Full Name here"
                            className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 dark:border-white/10 bg-brand-light-bg dark:bg-[#0f1d22] text-brand-primary dark:text-white font-medium text-sm focus:outline-none focus:border-brand-accent transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-mono font-bold uppercase text-brand-primary/60 dark:text-gray-400">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting}
                            placeholder="Email@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 dark:border-white/10 bg-brand-light-bg dark:bg-[#0f1d22] text-brand-primary dark:text-white font-medium text-sm focus:outline-none focus:border-brand-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase text-brand-primary/60 dark:text-gray-400">
                          Message Detailing Automations Needed <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={isSubmitting}
                          placeholder="Hey Mark, I want to streamline our customer lead followups so they sync automatically..."
                          className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 dark:border-white/10 bg-brand-light-bg dark:bg-[#0f1d22] text-brand-primary dark:text-white font-medium text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
                        ></textarea>
                      </div>

                      {/* Loading output console wrapper during submit */}
                      {isSubmitting && (
                        <div className="p-4 rounded-xl bg-[#112229] border border-white/5 text-[10px] font-mono text-[#2a9d8f] space-y-1.5">
                          <div className="flex items-center gap-1.5 font-bold uppercase text-white tracking-widest text-[9px] animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                            Initiating API Router transmission...
                          </div>
                          {submitLogs.map((log, idx) => (
                            <div key={idx} dangerouslySetInnerHTML={{ __html: log }} />
                          ))}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center p-4 bg-brand-accent hover:bg-[#228074] text-white disabled:opacity-50 text-sm font-extrabold rounded-xl shadow transition-colors cursor-pointer gap-2"
                      >
                        {isSubmitting ? "Dispatching Message..." : "Send Message"}
                        <Send className="w-4 h-4 text-white" />
                      </button>

                    </form>
                  ) : (
                    // Successful Submission Output state
                    <div className="p-8 text-center space-y-6" id="form-success-splash">
                      <div className="w-16 h-16 rounded-full bg-[#e6f4f2] text-brand-accent flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-brand-primary dark:text-white">
                          Message Transmitted Successfully!
                        </h4>
                        <p className="text-sm text-brand-primary/80 dark:text-gray-300 max-w-md mx-auto">
                          Thank you for connecting. Your parameters have been queued for Mark Lester Diaz's review. A reply will be sent within 12 business hours.
                        </p>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setSubmitSuccess(false)}
                          className="px-6 py-2.5 rounded-lg bg-brand-primary dark:bg-brand-accent text-white text-xs font-bold hover:opacity-90 transition-all cursor-pointer"
                        >
                          Submit Another request
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Mode 2: Interactive Booking Slot dashboard */}
              {contactMode === 'book' && (
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {!isBookingCreated ? (
                    <div className="space-y-6" id="booking-slots-picker">
                      
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent block">
                          Step 1 / Select Consultation Date
                        </span>
                        
                        {/* Days Grid */}
                        <div className="grid grid-cols-5 gap-2" id="days-calendar">
                          {availableDays.map((day, idx) => {
                            const isChose = selectedCalendarDate === day.dateInt;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedCalendarDate(day.dateInt)}
                                className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                                  isChose
                                    ? 'bg-brand-accent text-white border-brand-accent shadow'
                                    : 'bg-brand-light-bg dark:bg-[#0f1d22] border-brand-primary/10 dark:border-white/5 text-brand-primary dark:text-gray-300 hover:border-brand-accent'
                                }`}
                              >
                                <div className="text-[10px] uppercase font-bold opacity-60 m-0">{day.dayName}</div>
                                <div className="text-lg font-extrabold font-mono py-0.5">{day.dateInt}</div>
                                <div className="text-[9px] uppercase font-semibold tracking-wider">{day.monthName}</div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Hour selection dashboard */}
                      {selectedCalendarDate && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent block">
                            Step 2 / Select Available Time Slot (Philippine Time)
                          </span>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" id="hours-grid">
                            {availableHours.map((hour) => {
                              const isChose = selectedCalendarTime === hour;
                              return (
                                <button
                                  key={hour}
                                  type="button"
                                  onClick={() => setSelectedCalendarTime(hour)}
                                  className={`py-2 rounded-lg border text-xs font-mono font-bold transition-all cursor-pointer ${
                                    isChose
                                      ? 'bg-brand-accent text-white border-brand-accent'
                                      : 'bg-brand-light-bg dark:bg-[#0f1d22] border-brand-primary/10 dark:border-white/5 text-brand-primary dark:text-gray-300 hover:border-brand-accent'
                                  }`}
                                >
                                  {hour}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Confirm reservation CTA */}
                      {selectedCalendarDate && selectedCalendarTime ? (
                        <div className="pt-2 animate-in fade-in duration-200">
                          <button
                            type="button"
                            onClick={handleConfirmBooking}
                            className="w-full inline-flex items-center justify-center p-4 bg-brand-accent hover:bg-[#228074] text-white text-sm font-extrabold rounded-xl shadow transition-colors cursor-pointer gap-2"
                          >
                            Confirm Reservation
                            <ArrowRight className="w-4 h-4 text-white" />
                          </button>
                          <span className="text-[10px] text-gray-400 mt-2 block text-center font-mono">
                            We will open Calendly for finishing verification.
                          </span>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-brand-light-bg/50 dark:bg-[#0f1d22]/50 border border-brand-primary/5 dark:border-white/5 text-xs text-center font-medium text-brand-primary/75 dark:text-gray-400">
                          Please select a date and hour slot key above to proceed.
                        </div>
                      )}

                    </div>
                  ) : (
                    // Successful Reservation State in modal view
                    <div className="p-8 text-center space-y-6" id="booking-success-splash">
                      <div className="w-16 h-16 rounded-full bg-[#e6f4f2] text-brand-accent flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10 animate-bounce" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-brand-primary dark:text-white">
                          Time-Slot Reserved Locally!
                        </h4>
                        <p className="text-sm text-brand-primary/80 dark:text-gray-300 max-w-sm mx-auto">
                          Date: <strong className="text-brand-primary dark:text-white">Day {selectedCalendarDate}</strong> &bull; Time: <strong className="text-brand-primary dark:text-white">{selectedCalendarTime}</strong>
                        </p>
                        <p className="text-xs text-brand-primary/75 dark:text-gray-400 max-w-xs mx-auto">
                          Launching Mark's live Calendly portal in a separate browser tab to verify timezone sync details automatically.
                        </p>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsBookingCreated(false);
                            setSelectedCalendarDate(null);
                            setSelectedCalendarTime(null);
                          }}
                          className="px-6 py-2 rounded-lg bg-brand-primary dark:bg-brand-accent text-white text-xs font-bold hover:opacity-90 transition-all cursor-pointer"
                        >
                          Reschedule Slots
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>

          {/* Local Client Outbox Section: displays previous submitted queries at the bottom */}
          {submissionsList.length > 0 && (
            <div className="pt-6 border-t border-[#edf6f9] dark:border-white/10" id="submissions-outbox">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary/60 dark:text-gray-400 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-brand-accent" />
                  My Subscribed Inquiries ({submissionsList.length})
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-1">
                {submissionsList.map((sub) => (
                  <div 
                    key={sub.id} 
                    className="p-4 bg-white dark:bg-[#18313b] border border-brand-primary/10 dark:border-white/5 rounded-2xl text-xs space-y-2 text-left"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="font-bold text-brand-primary dark:text-white">{sub.name}</span>
                      <span className="text-gray-400">{sub.date}</span>
                    </div>
                    <p className="text-brand-primary/85 dark:text-gray-300 font-medium italic leading-relaxed">
                      "{sub.message}"
                    </p>
                    {sub.selectedProjects.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {sub.selectedProjects.map((p, pIdx) => (
                          <span key={pIdx} className="px-1.5 py-0.5 rounded bg-brand-accent/10 text-brand-accent text-[9px] font-mono leading-none">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
