export function Faculty() {
  const faculty = [
    { name: "Dr. Elena Rostova", role: "Chair of AI Ethics", initials: "ER", bgColor: "bg-[#e8f0fe] text-[#1a73e8]", bio: "Former Head of Data Ethics at major tech pioneers. Specializes in responsible AI scaling and corporate oversight." },
    { name: "Marcus Chen", role: "Professor of Strategy", initials: "MC", bgColor: "bg-[#fce8e6] text-[#c5221f]", bio: "Renowned author and strategic consultant focused on dynamic resilience during severe market volatility." },
    { name: "Sarah Jenkins", role: "Product Ecosystems Lead", initials: "SJ", bgColor: "bg-[#e6f4ea] text-[#137333]", bio: "Two decades orchestrating hyper-growth product matrices globally. Advises top Fortune 50 executives." }
  ];

  return (
    <section id="faculty" className="py-24 bg-[#ffffff]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="font-manrope text-3xl md:text-[40px] font-bold text-[#121c28]">World-Class Faculty</h2>
            <p className="text-[18px] text-[#414754] mt-2 max-w-2xl">Learn directly from the architects of modern enterprise strategy.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map((member, i) => (
            <div key={i} className="border border-[#e5e7eb] rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-default">
              <div className={`w-16 h-16 ${member.bgColor} rounded-full flex items-center justify-center font-manrope text-xl font-bold mb-6`}>
                {member.initials}
              </div>
              <h3 className="font-manrope text-[22px] font-bold text-[#121c28] mb-1">{member.name}</h3>
              <p className="text-[#1a73e8] font-medium text-sm mb-4">{member.role}</p>
              <p className="text-[#414754] text-[15px] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
