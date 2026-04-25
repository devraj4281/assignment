import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ClientsSection } from '@/components/ClientsSection';
import { SovereignEdgeSection } from '@/components/SovereignEdgeSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FAQSection } from '@/components/FAQSection';
import { ElevateWorkforce } from '@/components/ElevateWorkforce';
import { ContactUs } from '@/components/ContactUs';
import { CatSection } from '@/components/CatSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ClientsSection />
      <SovereignEdgeSection />
      
      <CatSection />

      <HowItWorksSection />
      <FAQSection />

      <TestimonialsSection />

      <ElevateWorkforce />
      <ContactUs />
    </main>
  );
}
