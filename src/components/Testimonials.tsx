import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { Testimonial } from './ui/testimonial-card';

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Founder",
    company: "Vanguard Media Agency",
    rating: 5,
    testimonial: "The AI Content Repurposing and Shorts Creator workflows Mark built are game-changing. We drop one video in Google Drive, and it automatically schedules cross-platform posts overnight. It saves our media team at least 25 hours every single week!"
  },
  {
    name: "Elena Rostova",
    role: "Operations Director",
    company: "Nexus Growth Partners",
    rating: 5,
    testimonial: "Our sales team used to spend hours manually researching and qualifying incoming leads. The enrich-and-route Zapier automation enriches contacts and drafts personalized follow-up emails in under 60 seconds. Our response times are virtually instant now."
  },
  {
    name: "Devon Reynolds",
    role: "Chief Operating Officer",
    company: "Aero Logistics Systems",
    rating: 5,
    testimonial: "We had major bottlenecks syncing Gmail attachments and routing finance transactions into Asana. Mark built custom, bulletproof Make.com pipelines that handle everything with perfect audit logs. Human error was completely eliminated from our workflows."
  }
];

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden theme-transition"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-accent/10 text-brand-primary dark:text-[#a0ded6]">
            <MessageSquare className="w-3.5 h-3.5 text-brand-accent" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white tracking-tight">
            Client Success Stories
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-primary/80 dark:text-gray-300 font-medium">
            Hear from business leaders and founders about how our custom, AI-powered automation workflows have saved time and scaled their operations.
          </p>
        </div>

        {/* Testimonial Cards Layout using new shadcn-like Testimonial component */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="testimonials-grid">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Testimonial 
                name={item.name}
                role={item.role}
                company={item.company}
                rating={item.rating}
                testimonial={item.testimonial}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
