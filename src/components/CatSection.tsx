"use client";

import { motion } from 'framer-motion';
import { Target, BarChart, Shield, CheckCircle, TrendingUp, Activity } from 'lucide-react';

export function CatSection() {
  return (
    <section id="cat" className="py-24 bg-white border-y border-[#e5e7eb] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy & Value Props */}
          <div>
            <span className="text-[#1a73e8] font-bold text-[11px] tracking-[1.5px] uppercase mb-4 block">Proprietary Technology</span>
            <h2 className="font-playfair text-3xl md:text-[42px] font-bold text-[#121c28] mb-6 leading-tight">
              Competency Assessment Toolkit <br className="hidden md:block" />
              <span className="text-slate-400 font-normal italic">(CAT)</span>
            </h2>
            <p className="text-lg text-[#414754] mb-8 leading-relaxed">
              Our flagship diagnostic engine. CAT strips away organizational bias to reveal the raw, actionable data behind your team's performance, friction points, and unutilized potential.
            </p>
            
            <ul className="space-y-5">
              {[
                "Pinpoint critical leadership bottlenecks in real-time.",
                "Map team competencies against industry-leading benchmarks.",
                "Generate custom curriculum blueprints based on hard data."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-[#121c28] font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Fake Dashboard / UI Graphic */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full" />
            
            <div className="relative bg-[#f8f9ff] border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
              {/* Header of fake dashboard */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none">Diagnostic Overview</h4>
                    <span className="text-xs text-slate-500">Live Team Analysis</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wider">
                  HEALTHY
                </div>
              </div>

              {/* Fake Progress Bars */}
              <div className="space-y-6">
                {[
                  { label: "Strategic Alignment", score: 92, color: "bg-blue-600" },
                  { label: "Operational Velocity", score: 78, color: "bg-indigo-500" },
                  { label: "Cross-functional Comms", score: 65, color: "bg-slate-400" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">{stat.label}</span>
                      <span className="font-bold text-slate-900">{stat.score}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                        className={`h-full ${stat.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <TrendingUp className="w-5 h-5 text-green-500 mb-2" />
                  <div className="text-2xl font-bold text-slate-900">14.2%</div>
                  <div className="text-xs text-slate-500 font-medium">Efficiency Delta</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <Shield className="w-5 h-5 text-blue-500 mb-2" />
                  <div className="text-2xl font-bold text-slate-900">A+</div>
                  <div className="text-xs text-slate-500 font-medium">Security Rating</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
