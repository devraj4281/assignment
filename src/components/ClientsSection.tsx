"use client";

import Marquee from "react-fast-marquee";

const clients = [
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Salesforce", src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Oracle", src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 border-b border-[#e5e7eb] bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-[#727785] text-sm font-semibold uppercase tracking-[0.15em] mb-12">
          Empowering leadership teams at 500+ global enterprises
        </p>
      </div>
      <div className="relative">
        {/* Soft edge gradients for marquee */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <Marquee speed={40} pauseOnHover autoFill>
          {clients.map((client, i) => (
            <div 
              key={i} 
              className="mx-12 lg:mx-20 flex items-center justify-center transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            >
              <img 
                src={client.src} 
                alt={`${client.name} logo`} 
                className="h-8 md:h-10 object-contain w-auto max-w-[140px]" 
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
