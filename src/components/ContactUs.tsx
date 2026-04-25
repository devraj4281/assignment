"use client";

import { Button } from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactUs() {
  return (
    <section id="contact" className="py-24 bg-[#f8f9ff] border-t border-[#e5e7eb]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#1a73e8] font-bold text-[11px] tracking-[1.5px] uppercase mb-4 block">GET IN TOUCH</span>
            <h2 className="font-manrope text-3xl md:text-[40px] font-bold text-[#121c28] mb-6 leading-tight">Let's shape the future of your organization.</h2>
            <p className="text-lg text-[#414754] mb-10 max-w-xl">Our executive advisors are ready to craft a bespoke pathway designed specifically for your corporate objectives and scale constraints.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center border border-[#e5e7eb] shadow-sm">
                  <Phone className="w-5 h-5 text-[#1a73e8]" />
                </div>
                <div>
                  <p className="text-[#727785] text-sm font-medium">Global Support</p>
                  <p className="font-medium text-[#121c28] text-[15px]">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center border border-[#e5e7eb] shadow-sm">
                  <Mail className="w-5 h-5 text-[#1a73e8]" />
                </div>
                <div>
                  <p className="text-[#727785] text-sm font-medium">Direct Inquiry</p>
                  <p className="font-medium text-[#121c28] text-[15px]">enterprise@sovereign.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center border border-[#e5e7eb] shadow-sm">
                  <MapPin className="w-5 h-5 text-[#1a73e8]" />
                </div>
                <div>
                  <p className="text-[#727785] text-sm font-medium">Headquarters</p>
                  <p className="font-medium text-[#121c28] text-[15px]">100 Innovation Way, New York, NY</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#ffffff] p-8 md:p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
            <h3 className="font-manrope text-2xl font-bold text-[#121c28] mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold text-[#414754] mb-2 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-[8px] border border-[#e5e7eb] focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] outline-none text-[#121c28] transition-colors bg-[#f8f9ff] focus:bg-[#ffffff]" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-[#414754] mb-2 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-[8px] border border-[#e5e7eb] focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] outline-none text-[#121c28] transition-colors bg-[#f8f9ff] focus:bg-[#ffffff]" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#414754] mb-2 uppercase tracking-wide">Corporate Email</label>
                <input type="email" className="w-full h-12 px-4 rounded-[8px] border border-[#e5e7eb] focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] outline-none text-[#121c28] transition-colors bg-[#f8f9ff] focus:bg-[#ffffff]" placeholder="jane.doe@company.com" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#414754] mb-2 uppercase tracking-wide">How can we help?</label>
                <textarea rows={4} className="w-full p-4 rounded-[8px] border border-[#e5e7eb] focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] outline-none resize-none text-[#121c28] transition-colors bg-[#f8f9ff] focus:bg-[#ffffff]" placeholder="Describe your organizational needs..."></textarea>
              </div>
              <Button variant="primary" className="w-full h-14 mt-2">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
