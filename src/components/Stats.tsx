import { Users, Globe2, Award, Building2 } from 'lucide-react';

export function Stats() {
  const stats = [
    { label: "Global Enterprise Partners", value: "500+", icon: <Building2 className="w-8 h-8 text-[#1a73e8]" /> },
    { label: "Executives Transformed", value: "12,000+", icon: <Users className="w-8 h-8 text-[#1a73e8]" /> },
    { label: "Countries Represented", value: "45+", icon: <Globe2 className="w-8 h-8 text-[#1a73e8]" /> },
    { label: "Industry Awards", value: "24", icon: <Award className="w-8 h-8 text-[#1a73e8]" /> }
  ];

  return (
    <section id="stats" className="py-24 bg-[#f8f9ff] border-y border-[#e5e7eb]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-manrope text-3xl md:text-[40px] font-bold text-[#121c28]">Proven Global Impact</h2>
          <p className="text-lg text-[#414754] mt-4 max-w-2xl mx-auto">Metrics that define our legacy in executive transformation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-[#ffffff] rounded-2xl shadow-sm border border-[#e5e7eb] hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-[#ebf2ff] rounded-full flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <div className="font-manrope text-4xl font-extrabold text-[#121c28] mb-2">{stat.value}</div>
              <p className="text-[#414754] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
