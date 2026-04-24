'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { TestimonialsSection } from '../../components/TestimonialsSection';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services = [
    {
      id: 'security',
      title: 'Security Services & Solutions',
      icon: ShieldCheck,
      description: 'We provide comprehensive security solutions through professionally trained personnel and standardised processes, ensuring the protection of people, assets, and operations.',
      features: [
        'Proactive risk management',
        'Operational control',
        'Protection for commercial, residential, and institutional sectors',
        'Trained personnel & standardized processes'
      ],
      benefits: [
        'Deter internal and external threats effectively',
        'Immediate response to emergencies and critical incidents',
        'Enhanced tenant and employee peace of mind'
      ],
      caseStudy: {
        title: "Securing a 50-Acre Tech Park",
        description: "Implemented a hybrid model of 150 manned guards combined with AI-driven surveillance, reducing unauthorized access incidents by 98% within the first month."
      },
      image: 'https://picsum.photos/seed/security-guards/800/600',
      color: 'bg-slate-900',
      cta: 'Secure Your Premises Today'
    },
    {
      id: 'housekeeping',
      title: 'Housekeeping Solutions',
      icon: Sparkles,
      description: 'Our housekeeping solutions are structured to deliver superior cleanliness and hygiene standards through trained manpower, systematic processes, and quality control mechanisms.',
      features: [
        'Superior cleanliness and hygiene standards',
        'Trained and verified manpower',
        'Systematic processes & quality control',
        'Well-maintained, safe, and presentable environments'
      ],
      benefits: [
        'Boost employee morale with a pristine work environment',
        'Reduce disease spread and absenteeism',
        'Extend the lifespan of building assets and interiors'
      ],
      caseStudy: {
        title: "Revamping Hospital Hygiene",
        description: "Introduced hospital-grade mechanized cleaning protocols across a 500-bed facility, achieving perfect scores in infection-control audits for consecutive quarters."
      },
      image: 'https://picsum.photos/seed/housekeeping-clean/800/600',
      color: 'bg-blue-600',
      cta: 'Get a Cleaning Audit'
    },
    {
      id: 'staffing',
      title: 'General Staffing',
      icon: Users,
      description: 'Our general staffing solutions are designed to deliver a dependable and scalable workforce through strategic talent sourcing, rigorous screening, and efficient deployment.',
      features: [
        'Dependable and scalable workforce',
        'Strategic talent sourcing & screening',
        'Boost productivity and flexibility',
        'Maintain operational continuity'
      ],
      benefits: [
        'Rapidly scale up workforce during peak seasons',
        'Reduce administrative overhead for HR and payroll',
        'Ensure compliance with all labor laws and regulations'
      ],
      caseStudy: {
        title: "Scaling Logistics for Holiday Peaks",
        description: "Onboarded and deployed 400+ trained warehouse personnel within a 2-week window, enabling a leading e-commerce client to meet their Q4 delivery targets."
      },
      image: 'https://picsum.photos/seed/corporate-staffing/800/600',
      color: 'bg-indigo-600',
      cta: 'Scale Your Workforce'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-900 border-b border-transparent dark:border-slate-800 py-24 px-4 sm:px-6 lg:px-8 text-center relative pt-32 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-slate-900 dark:text-slate-50 tracking-tighter"
          >
            Our Core Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium"
          >
            Tailored facility management solutions for operational excellence, safety, and service consistency across diverse sectors.
          </motion.p>
        </div>
      </section>

      {/* Sub-Navigation */}
      <div className="sticky top-[60px] z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-4 hidden md:block transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-8">
          {services.map(service => (
            <button
              key={`nav-${service.id}`}
              onClick={() => {
                setExpandedId(expandedId === service.id ? null : service.id);
                document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider relative group"
            >
              <span className="relative z-10">{service.title}</span>
              {expandedId === service.id && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute -bottom-4 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400" 
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <motion.div 
                key={service.id} 
                id={service.id}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white dark:bg-slate-900 rounded-[32px] border ${isExpanded ? 'border-blue-500/50 shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/5' : 'border-slate-200 dark:border-slate-800 shadow-sm'} overflow-hidden transition-all duration-500`}
              >
                {/* Header Toggle */}
                <motion.button 
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-6 md:p-10 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-6">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${service.color} text-white shadow-xl`}
                    >
                      <service.icon size={32} />
                    </motion.div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                  <motion.div 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 shrink-0 shadow-sm"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-white dark:bg-slate-900"
                    >
                      <div className="p-6 md:p-10 pt-0 border-t border-slate-100 dark:border-slate-800">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden mb-12 mt-6 shadow-xl"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-[2s]"
                                referrerPolicy="no-referrer"
                            />
                        </motion.div>

                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium"
                        >
                          {service.description}
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">1</span>
                              Core Features
                            </h3>
                            <ul className="space-y-4">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4">
                                  <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <service.icon size={14} className="text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <span className="text-slate-700 dark:text-slate-300 text-base font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                               <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400">2</span>
                               Key Benefits
                            </h3>
                            <ul className="space-y-4">
                              {service.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-4">
                                  <div className="w-6 h-6 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-green-600 dark:text-green-400 text-sm font-bold">✓</span>
                                  </div>
                                  <span className="text-slate-700 dark:text-slate-300 text-base font-medium">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-[28px] p-8 md:p-10 mb-10"
                        >
                            <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Case Study Example</h3>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">{service.caseStudy.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-lg italic leading-relaxed">
                                "{service.caseStudy.description}"
                            </p>
                        </motion.div>

                        <div className="flex justify-end pt-6">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                  href="/quote"
                                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-colors"
                              >
                                  {service.cta} <ArrowRight size={20} />
                              </Link>
                            </motion.div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
