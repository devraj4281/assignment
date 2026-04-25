"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, CheckCircle, Navigation } from 'lucide-react';

const steps = [
  {
    title: "Diagnostic Assessment",
    description: "We deploy our proprietary CAT framework to evaluate your enterprise's core competencies and identify latent friction points.",
    icon: Search,
  },
  {
    title: "Program Blueprinting",
    description: "Our architects map out a hyper-personalized curriculum syncing your operational realities with C-suite objectives.",
    icon: PenTool,
  },
  {
    title: "Execution & Immersion",
    description: "Leadership teams undergo intense, focused modules delivered by globally recognized faculty.",
    icon: Navigation,
  },
  {
    title: "Validation & Scaling",
    description: "Post-immersion tracking solidifies integration, providing verifiable data to clear the runway for broader implementation.",
    icon: CheckCircle,
  }
];

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Grow the primary line's height relative to the scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="relative py-24 bg-white border-y border-[#e5e7eb]" ref={containerRef}>
      <div className="relative container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <span className="text-[#1a73e8] font-bold text-[11px] tracking-[1.5px] uppercase mb-4 block">Process</span>
          <h2 className="font-playfair text-3xl md:text-[42px] font-bold text-[#121c28] mb-6 leading-tight">
            The Sovereign Methodology
          </h2>
          <p className="text-lg text-[#414754]">
            A rigorous, structured pathway transitioning teams from stagnant to exceptionally capable.
          </p>
        </div>

        <div className="relative">
          {/* Background tracker line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#eef4ff] -translate-x-1/2" />
          
          {/* Active tracker line */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 top-0 w-[2px] bg-[#1a73e8] -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <div key={i} className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center w-full max-w-5xl mx-auto mb-16 last:mb-0">
                
                {/* Left Side Content */}
                <div className="hidden md:block text-right pr-12 lg:pr-20">
                  {isEven && (
                    <div>
                      <h3 className="text-xl font-bold text-[#121c28] font-manrope">{step.title}</h3>
                      <p className="text-[#414754] mt-2 text-[15px]">{step.description}</p>
                    </div>
                  )}
                </div>

                {/* Center Node */}
                <div className="relative flex justify-center z-10 mr-6 md:mr-0">
                  <div className="w-[80px] h-[80px] bg-white border-[3px] border-[#1a73e8] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-6 h-6 text-[#1a73e8]" />
                  </div>
                </div>

                {/* Right Side Content (Desktop) / Main Content (Mobile) */}
                <div className="md:pl-12 lg:pl-20">
                  <div className={`${isEven ? 'md:hidden' : 'block'}`}>
                    <h3 className="text-xl font-bold text-[#121c28] mb-2 font-manrope">{step.title}</h3>
                    <p className="text-[#414754] text-[15px] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
