'use client';

import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    quote: "Safehands completely transformed our facility management. Their team is exceptionally professional and proactive. We've seen a noticeable improvement in workplace hygiene and employee satisfaction.",
    author: "Rajesh Kumar",
    role: "Facility Head, TechCorp India",
    service: "Housekeeping",
  },
  {
    quote: "Security was a major concern for our manufacturing plant. Since partnering with Safehands, we've had zero incidents. Their manned guarding and surveillance integration is top-notch.",
    author: "Smita Singh",
    role: "Operations Director, BuildRight Mfg",
    service: "Security",
  },
  {
    quote: "During our seasonal peaks, finding reliable manpower used to be a nightmare. Safehands provided skilled temporary staff quickly, saving us incredible amounts of time and stress.",
    author: "Anil Patel",
    role: "HR Manager, Global Retail Logistics",
    service: "Staffing",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tighter"
          >
            Client Success Stories.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the organizations that trust us to protect and maintain their environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] shadow-lg shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col h-full transition-all group overflow-hidden relative"
            >
              {/* Animated background blob on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-blue-600/20 dark:text-blue-500/10 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic mb-8 grow text-lg relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto relative z-10">
                <p className="font-extrabold text-slate-900 dark:text-slate-100 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{testimonial.author}</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                <div className="mt-6 inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
