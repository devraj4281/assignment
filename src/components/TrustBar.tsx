import { Landmark } from 'lucide-react';

export function TrustBar() {
  return (
    <section className="py-10 md:py-16 bg-[#ffffff] text-center border-b border-[#e5e7eb]">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <span className="text-[#727785] text-[12px] uppercase tracking-[1px] font-semibold">IN PRESTIGIOUS PARTNERSHIP WITH</span>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <span className="flex items-center font-manrope font-bold text-xl md:text-2xl text-[#414754] opacity-80 transition-opacity hover:opacity-100 cursor-default"><Landmark className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#1a73e8]" /> IIT</span>
          <span className="flex items-center font-manrope font-bold text-xl md:text-2xl text-[#414754] opacity-80 transition-opacity hover:opacity-100 cursor-default"><Landmark className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#1a73e8]" /> IIM</span>
          <span className="flex items-center font-manrope font-bold text-xl md:text-2xl text-[#414754] opacity-80 transition-opacity hover:opacity-100 cursor-default"><Landmark className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#1a73e8]" /> XLRI</span>
          <span className="flex items-center font-manrope font-bold text-xl md:text-2xl text-[#414754] opacity-80 transition-opacity hover:opacity-100 cursor-default"><Landmark className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#1a73e8]" /> INSEAD</span>
        </div>
      </div>
    </section>
  );
}
