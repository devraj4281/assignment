"use client";

import { Button } from './Button';
import { TrendingUp } from 'lucide-react';

export function ElevateWorkforce() {
  return (
    <section id="enterprise-solutions" className="py-24 md:py-32 px-6 bg-[#ffffff]">
      <div className="container mx-auto">
        <div className="bg-[#ffffff] rounded-[24px] px-6 py-16 md:py-24 text-center border border-[#e5e7eb] shadow-xl max-w-[1000px] mx-auto relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
          <TrendingUp className="absolute top-[-20%] right-[-5%] w-[300px] h-[300px] text-[#f8f9ff] -z-10 opacity-70" />
          <h2 className="font-manrope text-4xl md:text-[48px] font-bold text-[#121c28] mb-4">Elevate Your Workforce</h2>
          <p className="text-lg text-[#414754] mb-12 max-w-[600px] mx-auto leading-relaxed">
            Partner with Sovereign to design custom enterprise learning architectures that drive strategic alignment and operational excellence.
          </p>
          <form className="flex flex-col sm:flex-row items-center w-full max-w-[500px] mx-auto bg-white sm:rounded-full p-1.5 border border-[#e5e7eb] shadow-sm">
            <input 
              type="email" 
              placeholder="Enter corporate email" 
              className="flex-1 w-full h-12 px-6 bg-transparent outline-none font-inter text-[15px] placeholder-[#727785] rounded-full sm:rounded-none sm:rounded-l-full mb-2 sm:mb-0" 
              required 
            />
            <button className="h-12 px-8 rounded-full bg-[#eef4ff] text-[#1a73e8] font-bold text-[14px] hover:bg-[#1a73e8] hover:text-white transition-colors w-full sm:w-auto flex-shrink-0">
              Request Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
