'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Home, Factory, Hotel, ShoppingBag } from 'lucide-react';

export default function Sectors() {
  const sectors = [
    {
      title: 'Corporate Offices, IT Parks & Commercial Complexes',
      icon: Building2,
      image: 'https://picsum.photos/seed/it-park/800/600',
    },
    {
      title: 'Residential Communities',
      icon: Home,
      image: 'https://picsum.photos/seed/residential-complex/800/600',
    },
    {
      title: 'Manufacturing & Industrial Facilities',
      icon: Factory,
      image: 'https://picsum.photos/seed/factory/800/600',
    },
    {
      title: 'Hotels & Hospitality, Hospitals & Healthcare Facilities',
      icon: Hotel,
      image: 'https://picsum.photos/seed/hospitality/800/600',
    },
    {
      title: 'Retail',
      icon: ShoppingBag,
      image: 'https://picsum.photos/seed/retail-store/800/600',
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <section className="bg-slate-900 border-b border-transparent dark:border-slate-800 text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0">
           <motion.div
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, ease: "easeOut" }}
             className="w-full h-full relative"
           >
             <Image
                src="https://picsum.photos/seed/cityscape/1920/1080"
                alt="Cityscape"
                fill
                className="object-cover opacity-10 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
           </motion.div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-8"
          >
            Industries We Serve
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter"
          >
            Our Sectors
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-300 leading-relaxed font-medium"
          >
            We cater to diverse sectors with tailored facility management solutions, ensuring operational excellence, safety, and service consistency.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid layout for Sectors */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-[32px] isolate cursor-pointer shadow-xl ${
                  index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-2' : ''
                } min-h-[300px] md:min-h-[450px]`}
                style={{ perspective: 1000 }}
              >
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-lg"
                  >
                    <sector.icon size={32} className="text-white drop-shadow-md" />
                  </motion.div>
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="text-3xl font-extrabold text-white mb-2 leading-tight tracking-tight drop-shadow-md"
                  >
                    {sector.title}
                  </motion.h3>
                  <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <span className="text-blue-400 font-semibold flex items-center gap-2 mt-2">
                      Secure this sector <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 text-center"
          >
             <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition-all shadow-xl hover:scale-105 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors duration-300 pointer-events-none" />
                <span className="relative z-10">Discuss Your Requirements</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
