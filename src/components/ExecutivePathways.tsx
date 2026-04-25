import { Brain, Globe, Briefcase, Clock, Award } from 'lucide-react';

const pathways = [
  {
    title: "Artificial Intelligence Strategy",
    description: "Operationalize AI frameworks for enterprise-wide transformation and competitive advantage.",
    duration: "12 Weeks",
    certification: "Dual Cert",
    icon: <Brain className="w-6 h-6" />,
    level: "Advanced Level"
  },
  {
    title: "Global Corporate Strategy",
    description: "Navigate geopolitical shifts and market volatility to architect resilient global operating models.",
    duration: "8 Weeks",
    certification: "Exec Cert",
    icon: <Globe className="w-6 h-6" />,
    level: "Executive Level"
  },
  {
    title: "Chief Product Officer Ascent",
    description: "Master product-led growth, portfolio economics, and visionary product leadership at scale.",
    duration: "10 Weeks",
    certification: "Mastery Cert",
    icon: <Briefcase className="w-6 h-6" />,
    level: "Senior Level"
  }
];

export function ExecutivePathways() {
  return (
    <section id="programs" className="bg-[#ffffff] py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="font-manrope text-3xl md:text-[32px] font-bold text-[#121c28]">Executive Pathways</h2>
            <p className="text-[18px] text-[#414754] mt-2">Curated immersions for strategic dominance.</p>
          </div>
          <a href="#" className="text-[#1a73e8] font-semibold text-[14px] hover:underline">View All Programs &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => (
            <div key={index} className="bg-[#ffffff] border border-[#e5e7eb] rounded-[16px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#dce3ec] text-[#1a73e8] rounded-[8px] flex items-center justify-center font-bold font-manrope">
                  {pathway.icon}
                </div>
                <div className="text-[11px] font-bold uppercase text-[#414754] border border-[#c1c6d6] rounded-full px-3 py-1">
                  {pathway.level}
                </div>
              </div>
              <h3 className="font-manrope text-[24px] font-semibold text-[#121c28] mb-4 min-h-[64px]">{pathway.title}</h3>
              <p className="text-[#414754] mb-8 flex-grow">{pathway.description}</p>
              
              <div className="flex gap-6 pt-6 border-t border-[#e5e7eb]">
                <span className="flex items-center gap-2 text-[13px] text-[#414754] font-medium">
                   <Clock className="w-4 h-4 text-[#727785]" />
                   {pathway.duration}
                </span>
                <span className="flex items-center gap-2 text-[13px] text-[#414754] font-medium">
                   <Award className="w-4 h-4 text-[#727785]" />
                   {pathway.certification}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
