'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Hero Header */}
      <section className="bg-slate-900 border-b border-transparent dark:border-slate-800 text-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" 
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-8"
          >
            Who We Are
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[80px] font-extrabold mb-8 tracking-tighter"
          >
            About Safehands
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Professionally managed Integrated Facilities Management delivering comprehensive security and facility services across India.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent transform -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="relative z-10"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-8 tracking-tight relative after:content-[''] after:block after:w-16 after:h-[4px] after:bg-blue-600 dark:after:bg-blue-500 after:mt-6 after:rounded-full">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                <p>
                  SAFEHANDS SECURITY & FACILITY SOLUTIONS PRIVATE LIMITED is a professionally managed Integrated Facilities Management (IFM) company. We specialize in providing end-to-end solutions, including manned guarding, housekeeping, technical maintenance, and support services, tailored to diverse industry requirements.
                </p>
                <p>
                  Safehands integrates trained manpower, technology-enabled processes, and standardised operating procedures to deliver reliable and efficient services. 
                </p>
                <p>
                  The organisation focuses on workforce training, compliance, and performance monitoring to maintain consistent service quality across all client locations.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 md:gap-8">
                {[
                  'Trained Manpower', 
                  'Tech-Enabled SOPs', 
                  'ISO 9001 Certified', 
                  'OHSAS 18001:2015'
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9, rotate: 2, filter: 'blur(20px)' }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative h-[500px] md:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl lg:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] dark:lg:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Corporate building interiors"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white z-10">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">Since Inception</p>
                <p className="text-3xl font-extrabold">Raising Industry Standards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            {/* Vision */}
            <motion.div
               initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10 relative z-10 shadow-lg shadow-blue-600/30 group-hover:rotate-12 transition-transform duration-500">
                <Eye size={36} className="text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 relative z-10">Our Vision</h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium relative z-10">
                To lead the future of Integrated Facility Management by building trust, driving innovation, and delivering operational excellence—consistently, every hour, every day.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
               initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
              <div className="w-20 h-20 bg-slate-900 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-10 relative z-10 shadow-lg shadow-slate-900/30 group-hover:-rotate-12 transition-transform duration-500">
                <Target size={36} className="text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 relative z-10">Our Mission</h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium relative z-10">
                To be a trusted partner in our clients&apos; growth by delivering integrated facility solutions that enhance productivity, minimize risk, and consistently exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
