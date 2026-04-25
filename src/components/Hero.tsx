import Image from 'next/image';
import { Button } from './Button';

export function Hero() {
  return (
    <section id="home" className="relative bg-[#ffffff] overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28">
      {/* Subtle texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#f4f7fe] via-[#ffffff] to-[#ffffff] -z-10" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">
        <div className="max-w-[600px]">
          <span className="inline-block text-[#b8860b] font-bold text-[11px] tracking-[2px] uppercase mb-6 bg-[#d4af37]/10 px-3 py-1.5 rounded-sm border border-[#d4af37]/20 backdrop-blur-sm">
            EXECUTIVE EDUCATION RETHOUGHT
          </span>
          <h1 className="font-playfair text-4xl lg:text-[54px] font-bold leading-[1.12] tracking-tight text-[#121c28] mb-6 drop-shadow-sm">
            Architecting the <br className="hidden lg:block"/> Future of <br className="hidden lg:block"/> <span className="bg-gradient-to-r from-[#1a73e8] to-[#0c4a9e] bg-clip-text text-transparent italic pe-2">C-Suite Leadership</span>
          </h1>
          <p className="text-lg text-[#414754] mb-10 max-w-[90%] leading-relaxed">
            Master the strategic imperatives of tomorrow. Transform your organizational trajectory with bespoke, AI-native frameworks designed for global enterprise leaders.
          </p>
          <div className="flex flex-wrap gap-4 mb-14">
            <Button variant="primary">Explore Pathways</Button>
            <Button variant="ghost">Consult Admission</Button>
          </div>
          
          {/* Data Ticker Ribbon */}
          <div className="flex items-center gap-8 border-l-[3px] border-[#d4af37] pl-6 bg-gradient-to-r from-[#f8f9ff]/80 to-transparent py-3 backdrop-blur-sm rounded-r-lg max-w-fit">
            <div>
               <p className="text-[#121c28] font-bold text-[24px] font-playfair tracking-tight drop-shadow-sm">140+</p>
               <p className="text-[10px] uppercase tracking-widest text-[#727785] font-bold mt-1">Countries Reached</p>
            </div>
            <div className="h-10 w-px bg-[#d1dbec]"></div>
            <div>
               <p className="text-[#121c28] font-bold text-[24px] font-playfair tracking-tight drop-shadow-sm">72%</p>
               <p className="text-[10px] uppercase tracking-widest text-[#727785] font-bold mt-1">Role Elevation</p>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-[28px] overflow-hidden shadow-[0_48px_100px_rgba(26,115,232,0.18)] w-full ring-1 ring-[#e5e7eb] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a73e8]/20 to-transparent mix-blend-overlay z-10 transition-opacity duration-700 opacity-40 group-hover:opacity-0" />
          <Image src="/hero-img-new.png" alt="Corporate Executive Team" width={800} height={500} className="w-full h-auto object-cover block transition-transform duration-[1.5s] ease-out group-hover:scale-105" priority />
        </div>
      </div>
    </section>
  );
}
