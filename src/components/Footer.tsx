
export function Footer() {
  return (
    <footer className="py-16 border-t border-[#e5e7eb] bg-[#ffffff]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        <div className="max-w-[280px]">
          <a href="#" className="flex items-center gap-2 mb-6">
            <div className="relative w-5 h-5 bg-[#1a73e8] rounded-sm">
              <div className="absolute top-1 left-1 -right-1 -bottom-1 bg-[#adc7ff] rounded-sm -z-10" />
            </div>
            <span className="font-manrope font-bold text-[18px] text-[#121c28] tracking-wide">Sovereign</span>
          </a>
          <p className="text-[#414754] text-[13px] leading-[1.6]">&copy; {new Date().getFullYear()} Sovereign. All Rights Reserved.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#121c28] mb-2">Company</h4>
            <a href="#" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">About Us</a>
            <a href="#" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">Leadership</a>
            <a href="#" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#121c28] mb-2">Programs</h4>
            <a href="#programs" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">Executive Pathways</a>
            <a href="#enterprise-solutions" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">Enterprise Solutions</a>
            <a href="#faculty" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">Alumni Network</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold text-[#121c28] mb-2">Legal & Social</h4>
            <a href="#" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#414754] text-[13px] hover:text-[#1a73e8] transition-colors">Terms of Service</a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-[#414754] hover:text-[#1a73e8] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-[#414754] hover:text-[#1a73e8] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="text-[#414754] hover:text-[#1a73e8] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
