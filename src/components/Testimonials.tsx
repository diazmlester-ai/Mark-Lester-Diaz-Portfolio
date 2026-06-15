import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { Testimonial } from './ui/testimonial-card';

const testimonials = [
  {
    name: "Jered Martin",
    role: "CEO | Onepitch.co",
    rating: 5,
    testimonial: "I had the pleasure of working with Mark on our database operations team. He consistently demonstrated reliability, strong attention to detail, and a solid work ethic. Mark handled research, data entry, and data management tasks efficiently and always met deadlines, even under pressure. He was professional, receptive to feedback, and continuously sought ways to improve his work. Mark was a valuable contributor to our team, and I would confidently recommend him to any organization seeking a dependable and hardworking professional."
  },
  {
    name: "Samuel Ang",
    role: "Project Manager",
    company: "Colleague",
    rating: 5,
    testimonial: "I had the opportunity to work alongside Mark on several projects, and he was always someone I could rely on. He consistently completed his tasks on time, paid close attention to detail, and was willing to help whenever the team needed support. Mark is easy to work with, communicates well, and maintains a positive attitude even during busy periods. I enjoyed working with him and would gladly recommend him to any team."
  },
  {
    name: "Teofilo Bajar",
    role: "Digital Marketer",
    company: "Colleague",
    rating: 5,
    testimonial: "Mark was a great teammate to work with. He is hardworking, dependable, and always willing to learn new skills when needed. During our time working together, I saw how committed he was to delivering quality work and supporting the team's goals. He approaches challenges with a problem-solving mindset and remains professional in all situations. Any organization would benefit from having Mark as part of their team."
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
            Client Reviews
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-primary/80 dark:text-gray-300 font-medium">
            Feedback from one of my previous client and collegues.
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
