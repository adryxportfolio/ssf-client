'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronRight, Play } from 'lucide-react';

const caseStudies = [
  {
    client: "TechSpace IT Park",
    industry: "Corporate & IT",
    title: "Securing a 2 Million Sq. Ft. Campus",
    challenge: "Managing security and access control for a sprawling IT campus with over 15,000 daily foot falls, multiple entry points, and high-value data centers.",
    solution: "Deployed a hybrid model of 150+ highly trained personnel integrated with AI-driven visitor management systems. Implemented tiered access protocols for sensitive zones.",
    results: "Reduced unauthorized access incidents by 94% within 3 months and achieved a 4.9/5 satisfaction rating from park tenants.",
    image: "https://picsum.photos/seed/tech-park-case/800/600"
  },
  {
    client: "City Care Healthcare",
    industry: "Hospitality & Healthcare",
    title: "Elevating Hospital Hygiene Standards",
    challenge: "Maintaining stringent sanitary conditions in a 500-bed multi-specialty hospital while managing high patient turnover and specialized bio-waste disposal.",
    solution: "Introduced hospital-grade mechanized cleaning protocols and a dedicated team of 85 trained housekeeping staff operating 24/7. Deployed UV sanitization routines for critical areas.",
    results: "Achieved zero cross-contamination incidents, passed all NABH audits with excellence, and improved patient satisfaction scores regarding cleanliness by 40%.",
    image: "https://picsum.photos/seed/hospital-case/800/600"
  },
  {
    client: "Zenith Manufacturing Hub",
    industry: "Industrial & Manufacturing",
    title: "Rapid Staffing Scale-up for Peak Demand",
    challenge: "The client needed to triple their assembly line workforce within 3 weeks to meet an unexpected global supply chain demand without compromising production quality.",
    solution: "Leveraged our extensive talent network to source, vet, and onboard 300+ temporary workers. Implemented a rapid 2-day functional training program tailored to their exact machinery.",
    results: "Met the 3-week deadline with a 98% retention rate throughout the project duration, ensuring Zenith hit their production targets without quality degradation.",
    image: "https://picsum.photos/seed/factory-case/800/600"
  }
];

export default function CaseStudies() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-600/10 blur-3xl z-0 rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-8"
          >
            Success Stories
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter"
          >
            Case Studies & Testimonials
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Discover how we have partnered with top organizations to solve complex facility and security challenges through operational excellence.
          </motion.p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 md:py-32 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative perspective-1000">
                <motion.div 
                   whileHover={{ rotateX: idx % 2 === 0 ? 2 : -2, rotateY: idx % 2 === 0 ? -2 : 2, scale: 1.02 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800"
                >
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill 
                    className="object-cover hover:scale-110 transition-transform duration-[2s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-color z-0" />
                  
                  <div className="absolute bottom-10 left-10 right-10 z-10">
                    <span className="bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4 inline-block shadow-lg border border-white/10">
                      {study.industry}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{study.title}</h3>
                    <p className="text-slate-300 mt-3 text-lg font-medium">{study.client}</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-10 relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden lg:block" />
                
                <motion.div
                   initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h4 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-4">
                    <span className="w-10 h-[3px] bg-blue-600 dark:bg-blue-500 inline-block rounded-full"></span> Challenge
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                    {study.challenge}
                  </p>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h4 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-4">
                    <span className="w-10 h-[3px] bg-blue-600 dark:bg-blue-500 inline-block rounded-full"></span> Solution
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                    {study.solution}
                  </p>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   className="bg-blue-50/50 dark:bg-blue-900/10 p-8 md:p-10 rounded-[2rem] border border-blue-100 dark:border-blue-900/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-20 pointer-events-none">
                     <CheckCircle2 size={120} className="text-blue-600 dark:text-blue-400 -mr-10 -mt-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3 relative z-10">
                     <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                       <CheckCircle2 className="text-blue-600 dark:text-blue-400" size={20} /> 
                     </div>
                     Results
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-semibold text-lg relative z-10">
                    {study.results}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Extended Testimonial Grids */}
      <section className="py-24 bg-white border-t border-slate-200" id="testimonials">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              More Client Voices
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by industry leaders across all verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Their transparent operations and proactive management style completely removed our daily facility management headaches.",
                author: "Sarah L.",
                role: "VP Operations, FinTech Global"
              },
              {
                quote: "A true partner. When we needed emergency cleanup post-renovation, Safehands deployed a team within hours.",
                author: "Karan D.",
                role: "Store Manager, Urban Retail"
              },
              {
                quote: "The reliability of their security staff gives me the peace of mind to focus strictly on my core business tasks.",
                author: "Amit P.",
                role: "Director, Alpha Industrial"
              }
            ].map((test, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col h-full">
                 <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                 <p className="text-slate-700 italic leading-relaxed mb-8 flex-grow">
                  &quot;{test.quote}&quot;
                 </p>
                 <div className="mt-auto">
                   <h4 className="font-bold text-slate-900">{test.author}</h4>
                   <p className="text-sm text-slate-500">{test.role}</p>
                 </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to be our next success story?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let&apos;s discuss how we can tailor a facility and security solution specifically for your business constraints.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
          >
            Get a Personalized Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
