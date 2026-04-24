'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShieldCheck, Search } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Sectors', href: '/sectors' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] pt-4 pb-3' : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] flex items-center justify-center transition-transform group-hover:scale-105 relative">
              <Logo className="w-full h-full" />
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />

            <div className="hidden md:flex items-center relative mr-2">
               {searchOpen ? (
                 <motion.div
                   initial={{ opacity: 0, width: 0 }}
                   animate={{ opacity: 1, width: '200px' }}
                   className="relative"
                 >
                   <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="w-full pl-9 pr-8 py-1.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                   />
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                   <button onClick={() => setSearchOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                     <X size={14} />
                   </button>
                 </motion.div>
               ) : (
                 <button onClick={() => setSearchOpen(true)} className="text-slate-600 hover:text-blue-600 transition-colors p-1.5 focus:outline-none">
                   <Search size={18} />
                 </button>
               )}
            </div>

            <Link
              href="/quote"
              className="hidden sm:flex relative bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-[-2px] rounded-full border-2 border-blue-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-full m-[1px]"></div>
              <span className="relative z-10 drop-shadow-md">Enquire Now</span>
            </Link>

            <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden text-slate-600 hover:text-blue-600 transition-colors focus:outline-none">
              <Search size={22} />
            </button>
            <button
              className="text-slate-700 hover:text-blue-600 transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mt-3"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Safehands..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50 text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, height: '100vh', filter: 'blur(0px)' }}
            exit={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 mt-3 absolute top-full left-0 w-full shadow-2xl h-screen"
          >
            <motion.div 
               initial="hidden"
               animate="visible"
               variants={{
                 hidden: { opacity: 0 },
                 visible: {
                   opacity: 1,
                   transition: {
                     staggerChildren: 0.05
                   }
                 }
               }}
               className="px-4 py-8 max-w-7xl mx-auto flex flex-col items-center md:items-start gap-4 h-[calc(100vh-80px)] overflow-y-auto pb-32"
            >
              <div className="w-full flex flex-col gap-6 md:gap-8 md:flex-row md:flex-wrap justify-center md:justify-start lg:gap-12 pl-0 md:pl-12">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <motion.h3 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Navigation</motion.h3>
                    {links.slice(0, 4).map((link) => (
                    <motion.div key={link.name} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }} whileTap={{ scale: 0.95 }}>
                      <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-1 text-4xl font-extrabold tracking-tight hover:translate-x-2 transition-transform w-fit mx-auto md:mx-0 ${
                          pathname === link.href ? 'text-blue-600 dark:text-blue-500' : 'text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                      >
                          {link.name}
                      </Link>
                    </motion.div>
                    ))}
                </div>
                
                <div className="flex flex-col gap-2 text-center md:text-left relative mt-6 md:mt-0">
                    <div className="hidden md:block w-px h-full bg-slate-200 dark:bg-slate-800 absolute -left-6 top-0 bottom-0"></div>
                    <motion.h3 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Company</motion.h3>
                    {links.slice(4).map((link) => (
                    <motion.div key={link.name} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } } }} whileTap={{ scale: 0.95 }}>
                      <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-1 text-4xl font-extrabold tracking-tight hover:translate-x-2 transition-transform w-fit mx-auto md:mx-0 ${
                          pathname === link.href ? 'text-blue-600 dark:text-blue-500' : 'text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                      >
                          {link.name}
                      </Link>
                    </motion.div>
                    ))}
                </div>
              </div>
              
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pt-8 mt-6 border-t border-slate-100 dark:border-slate-800 w-full sm:hidden flex justify-center">
                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center relative bg-slate-900 dark:bg-blue-600 text-white px-8 py-5 rounded-full font-bold text-lg transition-all w-full max-w-xs group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute inset-[-2px] rounded-full border-2 border-blue-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 bg-slate-900 dark:bg-blue-600 rounded-full m-[1px] group-hover:bg-slate-800 dark:group-hover:bg-blue-500 transition-colors"></div>
                  <span className="relative z-10 w-full text-center drop-shadow-md">Enquire Now</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
