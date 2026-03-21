import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="py-24 container">
      <SectionHeading
        title="About Opsera"
        subtitle="We're building a new standard for personal security in the digital age."
      />
      
      <div className="mt-16 max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-white/80">
            At Opsera, we believe everyone deserves control over their digital footprint. 
            We're making advanced privacy and security practices accessible to everyone, 
            not just tech experts.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">The Problem</h3>
          <p className="text-white/80">
            Your personal data is being bought, sold, and exposed across countless 
            broker networks and breach ecosystems. Most people don't even know 
            where their information is being shared or how to protect it.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Our Principles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-semibold">Clarity</h4>
              <p className="text-white/80">
                We explain complex security concepts in simple terms.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Control</h4>
              <p className="text-white/80">
                You should decide who has access to your information.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Privacy by Default</h4>
              <p className="text-white/80">
                We believe privacy should be the standard, not an option.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Calm Security</h4>
              <p className="text-white/80">
                Protection shouldn't mean paranoia. We keep you safe without the stress.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Button asChild>
            <a href="/scan">Check Your Privacy Score</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
