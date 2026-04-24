'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, UserCheck, Briefcase } from 'lucide-react';

// Inline SVG badge for text-only credential items
const BadgeLogo = ({ label, sublabel, color = '#1e3a5f' }: { label: string; sublabel?: string; color?: string }) => (
  <div
    style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${color}`,
      borderRadius: 8,
      padding: '6px 14px',
      minWidth: 110,
      height: 64,
      background: '#fff',
    }}
  >
    <span style={{ fontSize: 15, fontWeight: 800, color, letterSpacing: 1, lineHeight: 1 }}>{label}</span>
    {sublabel && <span style={{ fontSize: 10, fontWeight: 600, color: '#64748b', marginTop: 3, letterSpacing: 0.5 }}>{sublabel}</span>}
  </div>
);

type CredLogo =
  | { type: 'img'; src: string; alt: string }
  | { type: 'badge'; label: string; sublabel?: string; color?: string; alt: string };

const CRED_LOGOS: CredLogo[] = [
  { type: 'badge', label: 'MSME', sublabel: 'Certified', color: '#0f4c81', alt: 'MSME Certified' },
  { type: 'badge', label: 'TELANGANA', sublabel: 'Govt. Registered', color: '#7b1c1c', alt: 'Government of Telangana' },
  { type: 'img', src: '/iso.png', alt: 'ISO Certified' },
  { type: 'img', src: '/epfo.png', alt: 'EPFO Registered' },
  { type: 'img', src: '/esic.png', alt: 'ESIC Registered' },
  { type: 'img', src: '/gst.png', alt: 'GST Registered' },
];

import { TestimonialsSection } from '../components/TestimonialsSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Framer-style Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Subtle background glow/mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900/30 blur-3xl rounded-full mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm mb-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-colors duration-300"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Clean Spaces | Safe Places | Better Lives
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[90px] font-extrabold text-slate-900 dark:text-slate-50 tracking-tighter leading-[0.95] mb-8 max-w-5xl transition-colors duration-300"
          >
            Premier Security & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 dark:from-blue-400 dark:to-blue-600">
              Facility Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium transition-colors duration-300"
          >
            Safeguarding your assets and elevating operational efficiency with elite security and professional facility management services tailored for excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/20 dark:shadow-blue-900/20 hover:scale-105"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sectors"
              className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-105"
            >
              Our Sectors
            </Link>
          </motion.div>
        </div>

        {/* Hyper-realistic Security Image Frame */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8"
          style={{ perspective: 1000 }}
        >
          <motion.div 
            whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative aspect-[16/9] md:aspect-[2.2/1] rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/10 border-[8px] border-white/50 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-900 ring-1 ring-slate-200/50 dark:ring-slate-800/50"
          >
            <Image
              src="/hero-image.png"
              alt="Professional highly trained staff member standing confidently"
              fill
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/20 mix-blend-overlay pointer-events-none" />
          </motion.div>
        </motion.div>
      </section>

      {/* Animated "Our Creds" Marquee */}
      <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden flex flex-col items-center transition-colors duration-300">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8"
        >
          Trust & Credentials
        </motion.p>
        <div className="w-full flex overflow-hidden mask-image-linear-edges relative py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35
            }}
            className="flex whitespace-nowrap gap-16 md:gap-24 min-w-max items-center pr-16 md:pr-24 dark:invert-[0.15] dark:brightness-125 dark:contrast-125 z-0"
          >
            {/* Double array to create seamless loop */}
            {[...CRED_LOGOS, ...CRED_LOGOS, ...CRED_LOGOS, ...CRED_LOGOS].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center transition-transform hover:scale-105 duration-300">
                {logo.type === 'img' ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-sm mix-blend-multiply dark:mix-blend-normal"
                  />
                ) : (
                  <BadgeLogo label={logo.label} sublabel={logo.sublabel} color={logo.color} />
                )}
              </div>
            ))}
          </motion.div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .mask-image-linear-edges {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}} />
      </section>

      {/* Services Section - Prioritizing Housekeeping */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-300" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tighter leading-tight transition-colors duration-300"
              >
                Operational Excellence.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300"
              >
                Specialized teams ensuring hygienic environments, safety, and operational scale.
              </motion.p>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            
            {/* Priority 1: Elite Housekeeping (Massive Span) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="lg:col-span-3 group relative overflow-hidden bg-slate-900 rounded-[40px] shadow-2xl min-h-[500px] flex flex-col justify-end p-8 md:p-16 text-white"
            >
              {/* Hyper-realistic housekeeping background image */}
              <Image 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop"
                alt="Housekeeping professional diligently polishing a corporate glass window"
                fill
                className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
              
              <div className="relative z-10 max-w-2xl">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-6"
                >
                  <UserCheck size={16} /> Priority Expertise
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]"
                >
                  Elite Corporate Housekeeping.
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-slate-300 mb-8 font-medium leading-relaxed"
                >
                  World-class soft services and mechanized cleaning protocols ensuring deeply hygienic and immaculate professional work environments day unconditionally.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link href="/services#housekeeping" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform duration-300">
                    Discover Our Methods <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Security Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -10 }}
              className="lg:col-span-2 group relative overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] p-8 md:p-12 min-h-[380px] flex flex-col shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500">
                  <Shield size={28} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 tracking-tight transition-colors duration-300">Security Services</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed max-w-md transition-colors duration-300">
                Comprehensive manned guarding, executive protection, and electronic surveillance solutions for total peace of mind.
              </p>
              <div className="mt-auto z-10">
                <Link href="/services#security" className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Explore Security <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none" 
              />
            </motion.div>

            {/* Staffing Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[32px] p-8 md:p-12 flex-1 flex flex-col shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 tracking-tight transition-colors duration-300">Staffing Solutions</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 text-[16px] font-medium leading-relaxed transition-colors duration-300">
                Specialized manpower provisioning matching your scale requirements.
              </p>
              <div className="mt-auto">
                  <Link href="/services#staffing" className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Explore Manpower <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Sectors CTA with Appear Effect */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-950 relative transition-colors duration-300">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto rounded-[40px] bg-slate-900 dark:bg-slate-900 text-white relative overflow-hidden p-12 md:p-24 text-center shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/5 hover:scale-[1.02] transition-transform duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(59,130,246,0.1)_360deg)] pointer-events-none mix-blend-screen"
          />
          <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6"
              >
                Catering to Diverse Industries.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
              >
                From corporate offices and IT parks to healthcare facilities and retail, we deliver tailored solutions that ensure safety and service consistency.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="/sectors"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 hover:scale-105 px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-white/10"
                >
                  View All Sectors <ArrowRight size={18} />
                </Link>
              </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
