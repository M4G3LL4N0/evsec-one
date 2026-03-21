import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="py-24">
      <SectionHeading
        title="Simple Pricing"
        subtitle="Choose the plan that fits your needs. Start protecting your digital life today."
      />
      
      <div className="mt-16 grid md:grid-cols-3 gap-8 container">
        {/* Starter Plan */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="mt-4 text-white/60">For individuals getting started with privacy</p>
          <div className="mt-8">
            <span className="text-4xl font-bold">$9</span>
            <span className="text-white/60">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Privacy Score tracking
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Exposure monitoring
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Monthly broker removal
            </li>
          </ul>
          <Button className="w-full mt-8" asChild>
            <a href="/scan">Get Started</a>
          </Button>
        </div>

        {/* Plus Plan */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold">Plus</h3>
          <p className="mt-4 text-white/60">For individuals wanting comprehensive protection</p>
          <div className="mt-8">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-white/60">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Everything in Starter
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Weekly broker removal
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Breach alerts
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Priority support
            </li>
          </ul>
          <Button className="w-full mt-8" asChild>
            <a href="/scan">Get Started</a>
          </Button>
        </div>

        {/* Family Plan */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold">Family</h3>
          <p className="mt-4 text-white/60">For families wanting complete protection</p>
          <div className="mt-8">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-white/60">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Everything in Plus
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Up to 5 family members
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Child protection features
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <CheckIcon /> Family dashboard
            </li>
          </ul>
          <Button className="w-full mt-8" asChild>
            <a href="/scan">Get Started</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-green-400"
    >
      <path
        d="M13.3333 4L5.99996 11.3333L2.66663 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
