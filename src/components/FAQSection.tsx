"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior C-suite experience to enroll?",
    answer: "No. While our programs are rigorously designed for executive mindsets, ambitious mid-level managers on a rapid trajectory to leadership are also encouraged to apply. Our curriculum scales to meet your exact organizational tier.",
  },
  {
    question: "How is the Sovereign Methodology different from traditional MBA programs?",
    answer: "Traditional MBAs teach historical case studies. We teach real-time operational frameworks with AI integration. Our focus is purely on high-velocity scaling, enterprise security, and immediate execution rather than theoretical business administration.",
  },
  {
    question: "Can these strategies be deployed across a global remote team?",
    answer: "Absolutely. Sovereign Edge principles are specifically architected for distributed workforce models, leaning heavily into asynchronous communication best practices and zero-trust operational security.",
  },
  {
    question: "What is the typical timeframe to see ROI on the team training?",
    answer: "Most enterprise partners report systemic productivity improvements within the first 6 weeks post-immersion, particularly in cross-departmental alignment and speed of execution.",
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#f8f9ff]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-[#1a73e8] font-bold text-[11px] tracking-[1.5px] uppercase mb-4 block">Insights</span>
          <h2 className="font-playfair text-3xl md:text-[42px] font-bold text-[#121c28] mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'border-[#1a73e8] shadow-[0_10px_30px_rgba(26,115,232,0.08)]' : 'border-[#e5e7eb] hover:border-[#c1c6d6]'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-semibold text-[16px] md:text-[18px] font-manrope pr-4 transition-colors ${isOpen ? 'text-[#1a73e8]' : 'text-[#121c28]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#1a73e8] text-white' : 'bg-[#f8f9ff] text-[#414754]'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 text-[#414754] text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
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
