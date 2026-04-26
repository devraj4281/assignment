"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Body Scroll Lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Optimized Scroll Spy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sectionsToObserve = navLinks
      .map(link => link.href.substring(1))
      .concat(['faqs', 'testimonials', 'contact']);

    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const elem = document.getElementById(href.substring(1));
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setHoveredLink(null);
    }
  }, []);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex-1">
            <a href="#" className="inline-flex items-center gap-2 group" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}>
              <div className="w-5 h-5 bg-blue-600 rounded-[4px] transition-transform duration-300 group-hover:scale-110" />
              <span className="font-playfair font-black text-[20px] sm:text-[22px] tracking-widest italic uppercase text-slate-900">SOVEREIGN</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex flex-none">
            <nav className="flex items-center gap-x-8 relative" onMouseLeave={() => setHoveredLink(null)}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                const isHovered = hoveredLink === link.name;
                const showPill = isActive || isHovered;

                return (
                  <div 
                    key={link.name} 
                    className="relative group h-20 flex items-center" 
                    onMouseEnter={() => setHoveredLink(link.name)}
                  >
                    <a href={link.href} onClick={(e) => handleClick(e, link.href)}
                      className={`relative z-10 px-3 py-2 text-[13px] font-semibold transition-colors flex items-center gap-1 ${
                        showPill ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {link.name}
                      {link.hasMegaMenu && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />}
                    </a>

                    {/* Animated Pill Background */}
                    {showPill && (
                      <motion.div 
                        layoutId="header-pill" 
                        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-9 bg-blue-50 rounded-full -z-0" 
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }} 
                      />
                    )}

                    {/* PREMIUM DESKTOP DROPDOWN 
                      - Added backdrop-blur-xl
                      - Softened shadows & borders
                      - Fixed typography colors 
                    */}
                    <AnimatePresence>
                      {link.hasMegaMenu && isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[280px] bg-white/95 backdrop-blur-xl border border-slate-100/80 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-2.5 z-50 overflow-hidden"
                        >
                          <div className="flex flex-col gap-0.5">
                            {link.megaMenuContent?.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                // Changed items-start to items-center for tighter grouping
                                className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-slate-50/80 transition-all duration-200 group"
                              >
                                {/* Removed top margin, reacts on row hover */}
                                <div className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shadow-sm">
                                  <item.icon size={16} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col text-left">
                                  {/* Title is slate-800 by default, blue ONLY on hover */}
                                  <span className="text-[13px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                                    {item.title}
                                  </span>
                                  <span className="text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
                                    {item.microCopy}
                                  </span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="hidden lg:inline-flex bg-blue-600 text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-[0_8px_20px_-6px_rgba(29,78,216,0.4)] hover:bg-blue-700 active:scale-95 transition-all">
              Request Demo
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="xl:hidden p-2.5 bg-slate-50 rounded-full border border-slate-200">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[999] xl:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] flex flex-col max-h-[92dvh] overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="flex justify-center py-4 flex-shrink-0">
                <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
              </div>

              <div className="px-6 flex justify-between items-center flex-shrink-0 mb-4">
                <span className="font-playfair font-black italic text-lg tracking-widest text-[#121c28]">SOVEREIGN</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 hover:bg-slate-200 transition-colors rounded-full text-slate-600"><X size={18} /></button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-10 space-y-6">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      {/* Standard Links */}
                      {!link.hasMegaMenu && (
                        <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="flex flex-row items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl active:bg-blue-50 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm">
                            {link.icon && <link.icon size={16} />}
                          </div>
                          <span className="text-[14px] font-bold text-slate-900">{link.name}</span>
                        </a>
                      )}

                      {/* Mega Menu Links (Hierarchical rendering) */}
                      {link.hasMegaMenu && (
                        <div className="flex flex-col gap-2 mt-2 bg-slate-50/50 border border-slate-100 p-3 rounded-3xl">
                          <div className="px-3 pb-1 pt-2">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{link.name}</span>
                          </div>
                          {link.megaMenuContent?.map(sub => (
                            <a key={sub.title} href={sub.href} onClick={(e) => handleClick(e, sub.href)} className="flex flex-row items-center gap-4 p-3 bg-white rounded-2xl active:bg-blue-50 transition-colors shadow-sm border border-slate-100/50">
                              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600">
                                <sub.icon size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-bold text-slate-900 leading-tight">{sub.title}</span>
                                <span className="text-[10px] text-slate-500 font-medium leading-tight mt-1">{sub.microCopy}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-[0_8px_20px_-6px_rgba(29,78,216,0.4)] active:scale-95 transition-all mt-4">
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