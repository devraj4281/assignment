"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, BarChart2, Shield, Zap, Target, BookOpen,
  MessageCircle, Users, Mail, Menu, X, Home, TrendingUp, Building2
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', hasMegaMenu: false, microCopy: 'Platform Overview', icon: Home },
  { name: 'Stats', href: '#stats', hasMegaMenu: false, microCopy: 'ROI Tracking', icon: TrendingUp },
  { name: 'Clients', href: '#clients', hasMegaMenu: false, microCopy: 'Partners', icon: Building2 },
  {
    name: 'Sovereign Edge',
    href: '#sovereign-edge',
    hasMegaMenu: true,
    megaMenuContent: [
      { title: 'Strategic Alignment', microCopy: 'Vision Sync', icon: Target, href: '#sovereign-edge' },
      { title: 'Operational Excellence', microCopy: 'Velocity Engine', icon: Zap, href: '#sovereign-edge' },
      { title: 'Enterprise Security', microCopy: 'Threat-Proof', icon: Shield, href: '#sovereign-edge' },
    ]
  },
  {
    name: 'CAT',
    href: '#cat',
    hasMegaMenu: true,
    megaMenuContent: [
      { title: 'Assessment Metrics', microCopy: 'Benchmarking', icon: BarChart2, href: '#cat' },
      { title: 'Training Pathways', microCopy: 'Architecture', icon: Target, href: '#cat' },
    ]
  },
  {
    name: 'Resources',
    href: '#how-it-works',
    hasMegaMenu: true,
    megaMenuContent: [
      { title: 'How It Works', microCopy: 'Methodology', icon: BookOpen, href: '#how-it-works' },
      { title: 'FAQs', microCopy: 'Questions', icon: MessageCircle, href: '#faqs' },
      { title: 'Testimonials', microCopy: 'Success', icon: Users, href: '#testimonials' },
      { title: 'Contact Us', microCopy: 'Enquiries', icon: Mail, href: '#contact' }
    ]
  }
];

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Body Scroll Lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1)).concat(['faqs', 'testimonials', 'contact']);
      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      if (window.scrollY < 50) currentSection = '';
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const elem = document.getElementById(href.substring(1));
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">

          <div className="flex-1">
            <a href="#" className="inline-flex items-center gap-2" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}>
              <div className="w-5 h-5 bg-blue-600 rounded-[4px]" />
              <span className="font-playfair font-black text-[20px] sm:text-[22px] tracking-widest italic uppercase">SOVEREIGN</span>
            </a>
          </div>

          <div className="hidden xl:flex flex-none">
            <nav className="flex items-center gap-x-8 relative" onMouseLeave={() => setHoveredLink('')}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                const isHovered = hoveredLink === link.name;
                return (
                  <div key={link.name} className="relative group" onMouseEnter={() => setHoveredLink(link.name)}>
                    <a href={link.href} onClick={(e) => handleClick(e, link.href)}
                      className={`relative z-10 px-3 py-2 text-[13px] font-semibold transition-colors ${isActive || isHovered ? 'text-blue-600' : 'text-slate-600'
                        }`}
                    >
                      {link.name}
                      {link.hasMegaMenu && <ChevronDown className="inline-block ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />}
                    </a>
                    {(isActive || isHovered) && (
                      <motion.div layoutId="header-pill" className="absolute inset-0 bg-blue-50 rounded-full -z-0" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="hidden lg:inline-flex bg-blue-600 text-white px-7 py-2 rounded-full font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Request Demo</button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="xl:hidden p-2.5 bg-slate-50 rounded-full border border-slate-200">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[999] xl:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] flex flex-col max-h-[92dvh] overflow-hidden shadow-2xl"
            >
              <div className="flex justify-center py-4 flex-shrink-0">
                <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
              </div>

              <div className="px-6 flex justify-between items-center flex-shrink-0 mb-4">
                <span className="font-playfair font-black italic text-lg tracking-widest text-[#121c28]">SOVEREIGN</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600"><X size={18} /></button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-10 space-y-8">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.name} className="contents">
                      {!link.hasMegaMenu && (
                        <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="flex flex-row items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl active:bg-blue-50 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm">
                            <link.icon size={16} />
                          </div>
                          <span className="text-[13px] font-bold text-slate-900">{link.name}</span>
                        </a>
                      )}

                      {link.hasMegaMenu && link.megaMenuContent?.map(sub => (
                        <a key={sub.title} href={sub.href} onClick={(e) => handleClick(e, sub.href)} className="flex flex-col gap-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl active:bg-blue-50 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm">
                            <sub.icon size={16} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-slate-900 leading-tight">{sub.title}</span>
                            <span className="text-[9px] text-slate-500 font-medium leading-tight mt-1">{sub.microCopy}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/20 active:scale-95 transition-all">
                  Request Enterprise Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}