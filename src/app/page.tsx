import { Hero } from "@/components/marketing/hero";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { ProblemSection } from "@/components/marketing/problem-section";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ScorePreview } from "@/components/marketing/score-preview";
import { Testimonials } from "@/components/marketing/testimonials";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <FeatureGrid />
      <HowItWorks />
      <ScorePreview />
      <Testimonials />
      <PricingPreview />
      <FinalCta />
    </main>
  );
}
