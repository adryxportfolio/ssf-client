'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to an API
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="flex flex-col w-full bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Hero Header */}
      <section className="bg-slate-900 border-b border-transparent dark:border-slate-800 text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden transition-colors duration-300 pt-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-600/40 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" 
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter"
          >
            Contact Us
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium"
          >
            Connect with us to discuss your needs, schedule a consultation, and explore how our integrated solutions can support your operations.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-100 dark:border-slate-800 transition-colors duration-300">
            
            {/* Contact Info (Left Side) */}
            <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-800/50 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800 flex flex-col justify-between transition-colors duration-300">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-8 relative after:content-[''] after:block after:w-12 after:h-[4px] after:bg-blue-600 dark:after:bg-blue-500 after:mt-4 after:rounded-full">
                  Get in Touch
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg font-medium leading-relaxed">
                  With a team of experienced professionals and a strong operational framework, we are fully equipped to manage your facility requirements with efficiency and reliability.
                </p>

                <div className="space-y-10">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:border-blue-500 transition-colors">
                      <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Phone</h4>
                      <a href="tel:+919849020504" className="text-xl font-bold text-slate-900 dark:text-slate-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +91-9849020504
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:border-blue-500 transition-colors">
                      <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Email</h4>
                      <a href="mailto:info@thesafehands.in" className="text-xl font-bold text-slate-900 dark:text-slate-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        info@thesafehands.in
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:border-blue-500 transition-colors">
                      <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Location</h4>
                      <address className="text-xl font-bold text-slate-900 dark:text-slate-50 not-italic leading-relaxed">
                        Hyderabad, Telangana<br />
                        India
                      </address>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700/50"
              >
                <p className="text-slate-900 dark:text-slate-100 font-bold flex items-center gap-2 text-lg">
                  We look forward to building a long-term partnership with you.
                </p>
              </motion.div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="lg:col-span-3 p-10 md:p-14 relative">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-10">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10 w-full mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium"
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium"
                        placeholder="Doe" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium"
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium"
                        placeholder="+91 XXXXX XXXXX" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Service of Interest</label>
                    <select 
                      id="interest"
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 font-medium appearance-none"
                    >
                      <option>Security Services</option>
                      <option>Housekeeping Solutions</option>
                      <option>General Staffing</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                        required
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium resize-none"
                      placeholder="How can we help you?" 
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                  >
                    Send Message <Send size={20} />
                  </motion.button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
