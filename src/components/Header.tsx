"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart2, Shield, Zap, Target, BookOpen, MessageCircle, Users, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', hasMegaMenu: false },
  { name: 'Stats', href: '#stats', hasMegaMenu: false },
  { name: 'Clients', href: '#clients', hasMegaMenu: false },
  { 
    name: 'Sovereign Edge', 
    href: '#sovereign-edge', 
    hasMegaMenu: true,
    megaMenuContent: [
      { title: 'Strategic Alignment', desc: 'Syncing team goals with corporate vision', icon: Target, href: '#sovereign-edge' },
      { title: 'Operational Excellence', desc: 'Streamlining processes for high efficiency', icon: Zap, href: '#sovereign-edge' },
      { title: 'Enterprise Security', desc: 'Robust frameworks for secure scaling', icon: Shield, href: '#sovereign-edge' },
    ]
  },
  { 
    name: 'CAT', 
    href: '#cat', 
    hasMegaMenu: true,
    megaMenuContent: [
      { title: 'Assessment Metrics', desc: 'Evaluate your current team standing', icon: BarChart2, href: '#cat' },
      { title: 'Training Pathways', desc: 'Bespoke courses for specialized growth', icon: Target, href: '#cat' },
    ]
  },
  {
    name: 'Resources',
    href: '#how-it-works',
    hasMegaMenu: true,
    megaMenuContent: [
      { title: 'How It Works', desc: 'The Sovereign Methodology process', icon: BookOpen, href: '#how-it-works' },
      { title: 'FAQs', desc: 'Common enterprise questions answered', icon: MessageCircle, href: '#faqs' },
      { title: 'Testimonials', desc: 'Success stories and proof of work', icon: Users, href: '#testimonials' },
      { title: 'Contact Us', desc: 'Get in touch with our partnerships team', icon: Mail, href: '#contact' }
    ]
  }
];

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Use internal hrefs from standard links or first item of mega menu
      const sections = navLinks.map(link => link.href.substring(1)).concat(['faqs', 'testimonials', 'contact']);
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        currentSection = '';
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#e5e7eb]/60 shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-10 h-20 flex items-center">
        
        {/* 1. Left Anchor (Logo) */}
        <div className="flex-1">
          <a href="#" className="inline-flex items-center gap-2" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <div className="relative w-5 h-5 bg-gradient-to-br from-[#1a73e8] to-[#0c4a9e] rounded-[4px] shadow-[inset_0_1px_rgba(255,255,255,0.4)]">
              <div className="absolute top-1 left-1 -right-1 -bottom-1 bg-[#d4af37]/30 rounded-[4px] -z-10 blur-[2px]" />
            </div>
            <span className="font-playfair font-black text-[22px] text-[#121c28] tracking-widest italic drop-shadow-sm">SOVEREIGN</span>
          </a>
        </div>
        
        {/* 2. Center Anchor (Navigation) */}
        <div className="flex-none">
          <nav className="hidden xl:flex items-center gap-x-8 relative" onMouseLeave={() => setHoveredLink('')}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1) || 
                (link.megaMenuContent && link.megaMenuContent.some(c => c.href.substring(1) === activeSection));
                
              const isHovered = hoveredLink === link.name;
              const hasMenu = link.hasMegaMenu;

              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setHoveredLink(link.name)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleClick(e, link.href);
                    }}
                    className={`relative flex items-center gap-1 z-10 px-3 py-2 text-[14px] font-medium tracking-wide transition-colors ${
                      isActive || isHovered ? 'text-[#1a73e8]' : 'text-[#414754]'
                    }`}
                  >
                    {link.name}
                    {hasMenu && <ChevronDown className="w-4 h-4 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                  </a>

                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="header-pill"
                      className="absolute inset-0 bg-[#eef4ff] rounded-full -z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {hasMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[320px]">
                      <div className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#e5e7eb] p-2 relative">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-[#e5e7eb] rotate-45"></div>
                        <div className="relative z-10 bg-white list-none">
                          {link.megaMenuContent?.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a key={item.title} href={item.href} onClick={(e) => handleClick(e, item.href)} className="flex items-start gap-4 p-3 hover:bg-[#f8f9ff] rounded-xl transition-colors group/item block">
                                <div className="w-10 h-10 rounded-lg bg-[#eef4ff] text-[#1a73e8] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#1a73e8] group-hover/item:text-white transition-colors">
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <h4 className="text-[14px] font-bold text-[#121c28] mb-0.5">{item.title}</h4>
                                  <p className="text-[12px] text-[#727785] leading-snug">{item.desc}</p>
                                </div>
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* 3. Right Anchor (Button) */}
        <div className="flex-1 flex justify-end">
          <button className="hidden lg:inline-flex bg-blue-600 text-white px-8 py-2.5 rounded-full font-semibold hover:shadow-blue-500/20 shadow-lg transition-all active:scale-95 text-[14px]">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
}
