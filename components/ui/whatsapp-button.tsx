'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const phoneNumber = '919849020504';
  const message = 'Hi, I want to know more about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      aria-label="Contact us on WhatsApp"
    >
      {/* Outer pulsing rings */}
      <motion.div 
        animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        className="absolute inset-0 bg-[#25D366] rounded-full z-[-1]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1.8], opacity: [0.8, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
        className="absolute inset-0 bg-[#25D366] rounded-full z-[-1]" 
      />
      
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300">
        <MessageCircle size={30} className="group-hover:rotate-12 transition-transform duration-300" />
      </div>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 whitespace-nowrap pointer-events-none border border-slate-100 dark:border-slate-700">
        Chat with us
      </span>
    </motion.a>
  );
}
