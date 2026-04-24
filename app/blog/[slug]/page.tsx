'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';

// For demo purposes, we define a single article struct, ideally this would be fetched based on slug.
export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const [showShare, setShowShare] = useState(false);

  const article = {
    title: "5 Strategies to Enhance Corporate Campus Security",
    excerpt: "Learn how modern access control and vigilant manned guarding can secure large IT parks against rising threats.",
    category: "Security",
    date: "October 12, 2025",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/security-blog/1200/600",
    content: `
      <h2>The Changing Landscape of Corporate Security</h2>
      <p>Corporate campuses are more than just workplaces; they are micro-cities. With thousands of employees, visitors, and vendors entering daily, the security perimeter must be both impenetrable to threats and invisible to authorized personnel.</p>
      
      <h3>1. Advanced Access Control Systems</h3>
      <p>Gone are the days of simple ID badges. Modern facilities require biometric scanners, mobile credentials, and frictionless entry systems that integrate seamlessly with visitor management platforms.</p>
      
      <h3>2. Highly Trained Manned Guarding</h3>
      <p>Technology is only as good as the people operating it. Well-trained, alert security personnel provide the human element necessary for threat assessment and rapid response. They act as the first line of defense and the face of the company's security posture.</p>

      <h3>3. Comprehensive Surveillance Integration</h3>
      <p>CCTV is no longer just for recording incidents after they happen. AI-powered surveillance can now detect anomalies, track unauthorized access attempts, and alert guards in real-time, enabling proactive threat mitigation.</p>
      
      <h2>Conclusion</h2>
      <p>Enhancing corporate campus security requires a multifaceted approach. By combining advanced technology with expert personnel, companies can create a safe, welcoming environment for everyone.</p>
    `
  };

  return (
    <article className="flex flex-col w-full bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="text-blue-600 uppercase tracking-widest">{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5"><BookOpen size={14} /> {article.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            {article.excerpt}
          </p>
        </header>
      </div>

      {/* Featured Image */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl"
        >
          <Image 
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Content & Sharing */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Share Sidebar (Desktop) / Top (Mobile) */}
          <div className="md:w-16 shrink-0 flex flex-row md:flex-col gap-4 items-center md:items-start pt-2">
            <span className="text-xs font-bold text-slate-400 border-r md:border-r-0 md:border-b border-slate-200 pr-4 md:pr-0 md:pb-4 uppercase tracking-wider">Share</span>
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Share2 size={18} />
            </button>
          </div>

          {/* Article HTML Content */}
          <div 
            className="prose prose-lg prose-slate prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-2xl max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Discussion / CTA */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to secure your facility?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Our experts can conduct a comprehensive audit of your premises and propose a tailored security strategy.
            </p>
            <Link href="/quote" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 hover:scale-105 transition-all w-fit">
              Request a Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
