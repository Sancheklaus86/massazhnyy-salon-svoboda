import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AnimationsSection } from '@/components/sections/AnimationsSection';
import { InteractivitySection } from '@/components/sections/InteractivitySection';
import { VisualEffectsSection } from '@/components/sections/VisualEffectsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export default function HomePage() {
  return (
    <main className="relative bg-dark-primary text-white dark">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AnimationsSection />
      <InteractivitySection />
      <VisualEffectsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
