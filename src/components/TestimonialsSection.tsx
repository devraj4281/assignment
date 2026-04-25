"use client";

import { Box, Triangle, Hexagon, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sovereign didn't just train our executives; they fundamentally rewired how our leadership team approaches systemic challenges. The CAT diagnostics were eerily accurate.",
    name: "Sarah Jenkins",
    role: "Chief Operating Officer",
    company: "Vertex Capital",
    icon: Triangle,
    initials: "SJ"
  },
  {
    quote: "The ROI was obvious within the first quarter. Their methodology strips away corporate fluff and hones in on metrics that actually move the needle for our enterprise.",
    name: "Marcus Thorne",
    role: "VP of Global Strategy",
    company: "Axiom Networks",
    icon: Hexagon,
    initials: "MT"
  },
  {
    quote: "A masterclass in operational excellence. The Sovereign Edge curriculum has become mandatory for all incoming directors at our firm. Completely unparalleled.",
    name: "Elena Rostova",
    role: "Director of Operations",
    company: "Nexus Logistics",
    icon: Box,
    initials: "ER"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#f8f9ff] border-t border-[#e5e7eb]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#1a73e8] font-bold text-[11px] tracking-[1.5px] uppercase mb-4 block">Social Proof</span>
          <h2 className="font-playfair text-3xl md:text-[42px] font-bold text-[#121c28] mb-6 leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#414754] max-w-2xl mx-auto">
            Don't just take our word for it. Here is what leading executives spanning Fortune 500s and high-growth scale-ups say about the Sovereign impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const CompanyIcon = t.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                {/* Subtle BG Icon */}
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 rotate-12 transition-transform group-hover:rotate-6 duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Company Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <CompanyIcon className="w-5 h-5 text-slate-800" />
                    <span className="font-bold text-slate-900 tracking-wide text-sm uppercase">{t.company}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-600 mb-8 leading-relaxed italic">
                    "{t.quote}"
                  </p>

                  {/* Author block */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold font-playfair shadow-md">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                    </div>
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
