'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
  {
    title: "5 Strategies to Enhance Corporate Campus Security",
    excerpt: "Learn how modern access control and vigilant manned guarding can secure large IT parks against rising threats.",
    category: "Security",
    date: "October 12, 2025",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/security-blog/800/600"
  },
  {
    title: "The Future of Mechanized Housekeeping in Healthcare",
    excerpt: "A deep dive into the latest technologies and sanitization protocols redefining hospital hygiene standards.",
    category: "Facility Management",
    date: "September 28, 2025",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/clean-hospital/800/600"
  },
  {
    title: "Why Agile Staffing is Crucial for Manufacturing Peaks",
    excerpt: "How partnering with a reliable staffing provider ensures your assembly line never misses a beat during demand surges.",
    category: "Staffing",
    date: "September 15, 2025",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/factory-workers/800/600"
  },
  {
    title: "Safehands Expands Operations to Bangalore Region",
    excerpt: "We are thrilled to announce our new regional hub, bringing elite facility management to the Silicon Valley of India.",
    category: "Company Updates",
    date: "August 30, 2025",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/bangalore-office/800/600"
  },
  {
    title: "Integrating Electronic Surveillance with Manned Guards",
    excerpt: "The hybrid security approach that provides 360-degree coverage for residential complexes and retail malls.",
    category: "Security",
    date: "August 18, 2025",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/cctv-blog/800/600"
  },
  {
    title: "Cost Avoidance through Proactive Property Maintenance",
    excerpt: "Discover how treating facility management as an investment rather than an expense saves money in the long run.",
    category: "Facility Management",
    date: "August 02, 2025",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/maintenance/800/600"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Security", "Facility Management", "Staffing", "Company Updates"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-600/10 blur-3xl z-0 rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-8 relative"
          >
            <span className="flex h-2 w-2 relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Latest Updates
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter"
          >
            Insights & News
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Stay updated with the latest trends in security, facility management, and company news from Safehands.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 dark:bg-slate-950 transition-colors duration-300 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-wrap justify-center gap-3 mb-20 bg-white dark:bg-slate-900 p-3 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 w-max mx-auto relative z-30"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all relative ${
                  activeCategory === category 
                    ? 'text-white' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {activeCategory === category && (
                   <motion.div 
                     layoutId="activeCategory"
                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
                     className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-500/30"
                   />
                )}
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, idx) => (
              <motion.article 
                key={post.title}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col relative perspective-1000"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-slate-100 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow relative bg-white dark:bg-slate-900 transition-colors z-10 transition-transform duration-500 rounded-t-[2.5rem] -mt-10">
                  <div className="flex items-center gap-5 text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 w-full">
                    <span className="flex items-center gap-2"><BookOpen size={16} className="text-blue-500" /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="flex items-center gap-2"><Clock size={16} className="text-blue-500" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-[1.4]">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow text-lg">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/post-${idx + 1}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold group/link mt-auto w-fit uppercase text-sm tracking-wider">
                    Read Article 
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors duration-300 ml-2">
                       <ArrowRight size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-24 text-slate-500">
              <p className="text-lg">No posts found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-slate-900/50 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Get the latest facility management tips, security trends, and Safehands updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative group" onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }}>
              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
                className="flex-grow px-6 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-medium placeholder-slate-400"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap active:scale-95"
              >
                Subscribe Now
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
