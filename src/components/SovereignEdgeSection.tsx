import { Shield, Zap, Target, TrendingUp, Award, Clock } from 'lucide-react';

const edgeFeatures = [
  {
    title: "Strategic Alignment",
    description: "Our frameworks bridge the gap between high-level corporate vision and ground-level execution.",
    icon: Target,
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    title: "Operational Excellence",
    description: "Streamline workflows and eliminate bottlenecks with AI-native methodologies.",
    icon: Zap,
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    title: "Enterprise Security",
    description: "Robust, compliance-focused training that ensures your scaling efforts are risk-free.",
    icon: Shield,
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    title: "Performance Metrics",
    description: "Data-driven insights and KPIs to evaluate team growth.",
    icon: TrendingUp,
    span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
  },
  {
    title: "Global Recognition",
    description: "Certifications respected by Fortune 500 companies worldwide.",
    icon: Award,
    span: "col-span-1 md:col-span-3 lg:col-span-1 row-span-1",
  }
];

export function SovereignEdgeSection() {
  return (
    <section id="sovereign-edge" className="py-24 bg-[#f8f9ff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#1a73e8] font-bold text-[11px] tracking-[1.5px] uppercase mb-4 block">The Sovereign Edge</span>
          <h2 className="font-playfair text-3xl md:text-[42px] font-bold text-[#121c28] mb-6 leading-tight">
            Cultivate High-Performance Teams
          </h2>
          <p className="text-lg text-[#414754] max-w-2xl mx-auto">
            Discover the structural methodologies that empower enterprise leaders to architect unparalleled market advantage.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)] max-w-5xl mx-auto">
          {edgeFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i} 
                className={`group relative bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#e5e7eb] hover:shadow-[0_20px_40px_rgba(26,115,232,0.08)] transition-all duration-300 overflow-hidden ${feature.span}`}
              >
                {/* Subtle Gradient Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#1a73e8] to-[#d4af37] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                <div className="absolute inset-0 bg-white rounded-3xl z-0" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#eef4ff] text-[#1a73e8] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a73e8] group-hover:text-white transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-manrope text-xl font-bold text-[#121c28] mb-3">{feature.title}</h3>
                    <p className="text-[#414754] text-[15px] leading-relaxed">{feature.description}</p>
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
