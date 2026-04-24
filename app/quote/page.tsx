'use client';

import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Quote() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request submitted! Our team will contact you shortly.');
  };

  return (
    <div className="flex flex-col w-full min-h-[90vh] bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
       {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 dark:bg-slate-900 hidden lg:block rounded-l-[4rem] shadow-2xl overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900/20 to-slate-900"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full pt-12 md:pt-0">
          
          {/* Left Side: Value Prop */}
          <div className="flex flex-col justify-center">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 mb-12 transition-colors w-fit group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 tracking-tighter">
                Ready to elevate your facility standards?
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
                Get a customized proposal tailored to your specific industry requirements. Our experts will assess your needs and provide a comprehensive plan.
              </p>

              <div className="space-y-6">
                {[
                  'Customized solutions for your sector',
                  'Transparent pricing and robust SLAs',
                  'ISO 9001 and OHSAS 18001:2015 compliant',
                  'Dedicated account management'
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
             animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-white dark:bg-slate-900 p-10 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 lg:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
             {/* decorative blob inside form */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

             <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-8 relative after:content-[''] after:block after:w-16 after:h-[4px] after:bg-blue-600 dark:after:bg-blue-500 after:mt-4 after:rounded-full">
                Request a Free Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10 w-full mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="req-fName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                    <input type="text" id="req-fName" required className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="req-lName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                    <input type="text" id="req-lName" required className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="req-company" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Company Name</label>
                  <input type="text" id="req-company" required className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="req-email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Email</label>
                    <input type="email" id="req-email" required className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="req-phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input type="tel" id="req-phone" required className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="req-sector" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Industry / Sector</label>
                  <select id="req-sector" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 font-medium appearance-none">
                    <option>Corporate Office / IT Park</option>
                    <option>Residential Community</option>
                    <option>Manufacturing / Industrial</option>
                    <option>Hospitality / Healthcare</option>
                    <option>Retail</option>
                    <option>Other</option>
                  </select>
                </div>

                 <div className="space-y-2">
                  <label htmlFor="req-sqft" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Facility Size (Approx. Sq. Ft.)</label>
                  <input type="text" id="req-sqft" placeholder="e.g. 50,000" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-600/20 text-slate-900 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 placeholder:font-normal font-medium" />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl mt-8 text-lg"
                >
                  Get Your Free Proposal
                </motion.button>
                <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-6 font-medium">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
