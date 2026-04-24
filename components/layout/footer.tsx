'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[100px] -left-[200px] w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center">
               <div className="w-16 h-16 flex items-center justify-center -ml-1">
                 <Logo className="w-full h-full" />
               </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Clean Spaces | Safe Places | Better Lives. Delivering comprehensive security and facility services across India with operational excellence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  Sectors We Serve
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  Careers
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#security" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#housekeeping" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  Housekeeping
                </Link>
              </li>
              <li>
                <Link href="/services#staffing" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  General Staffing
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-0.5" size={18} />
                <span>Hyderabad, Telangana<br />India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <a href="tel:+919849020504" className="hover:text-white transition-colors">+91-9849020504</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <a href="mailto:info@thesafehands.in" className="hover:text-white transition-colors">info@thesafehands.in</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10"
        >
          <p>© {new Date().getFullYear()} Safehands Security & Facility Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
