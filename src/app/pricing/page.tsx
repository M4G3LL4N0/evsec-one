import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Get a first look at your digital exposure and understand where to begin.",
    features: [
      "Basic Privacy Score",
      "Exposure summary",
      "Limited scan flow",
      "Starter recommendations",
    ],
  },
  {
    name: "Plus",
    price: "$19/mo",
    description: "Ongoing monitoring and stronger visibility into personal data exposure.",
    features: [
      "Full Privacy Score breakdown",
      "Breach and exposure alerts",
      "Broker removal queue",
      "Priority action center",
    ],
  },
  {
    name: "Family",
    price: "$49/mo",
    description: "Protect multiple people with centralized visibility and monitoring.",
    features: [
      "Everything in Plus",
      "Multi-person protection",
      "Shared household monitoring",
      "Expanded reporting",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Pricing
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple pricing for personal digital protection
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Start free, understand your exposure, and upgrade when you want deeper monitoring
            and guided protection.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl border ${
                tier.name === 'Plus' 
                  ? 'border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-black/20 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20'
                  : 'border-white/10 bg-gradient-to-b from-black/40 to-black/20 hover:bg-black/30'
              } p-8 backdrop-blur transition-all hover:border-white/20 relative overflow-hidden group`}
            >
              {tier.name === 'Plus' && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent opacity-30" />
              )}
              <div className="text-sm text-white/60">{tier.name}</div>
              <h2 className="mt-2 text-3xl font-semibold">{tier.price}</h2>
              <p className="mt-4 text-white/70">{tier.description}</p>

              <ul className="mt-8 space-y-3 text-sm text-white/75">
                {tier.features.map((feature) => (
                  <li key={feature} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/scan"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
