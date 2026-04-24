'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Briefcase, ArrowRight, CheckCircle2, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Careers() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Header */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <Briefcase size={32} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900"
            >
              Build Your Career With Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-8"
            >
              Join a team of experienced professionals dedicated to operational excellence and steady growth in the Integrated Facilities Management sector.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
               <a
                href="mailto:info@thesafehands.in?subject=Job Application"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Send Resume <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://picsum.photos/seed/office-team/800/600"
                alt="Our Team"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-4 relative after:content-[''] after:block after:w-10 after:h-[3px] after:bg-blue-600 after:mx-auto after:mt-3">
              Why Safehands?
            </h2>
            <p className="text-lg text-slate-600">
              We believe in attracting and placing the right candidates, enabling businesses to maintain productivity while fostering professional growth for our workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Professional Growth',
                desc: 'Continuous workforce training and performance monitoring to help you advance your career in IFM.'
              },
              {
                icon: ShieldCheck,
                title: 'Compliance & Safety',
                desc: 'Work in an environment backed by ISO 9001 and OHSAS 18001:2015 strict structural safety protocols.'
              },
              {
                icon: HeartHandshake,
                title: 'Trusted Environment',
                desc: 'A professionally managed operational framework where your contribution directly enhances client productivity.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 pb-10 bg-white rounded-xl border border-slate-100 hover:border-blue-600/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-slate-900" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-[1.6]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hiring CTA */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
         
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              We are constantly seeking dedicated professionals for security, housekeeping, and technical maintenance roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                href="mailto:info@thesafehands.in"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-semibold transition-all shadow-md"
              >
                Apply Now
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-md font-semibold transition-all backdrop-blur-sm"
              >
                Contact HR
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
