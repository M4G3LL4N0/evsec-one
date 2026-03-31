import Link from "next/link";
import { siteConfig } from "@/lib/site";

const layers = [
  {
    label: "Exposure Discovery",
    title: "See where your data is visible.",
    body: "Broker listings, breach residue, public discoverability, and profile exposure brought into one calm control layer.",
  },
  {
    label: "Removal Workflows",
    title: "Reduce what the internet can see.",
    body: "Structured suppression queues, repeat monitoring, and guided actions instead of vague privacy advice.",
  },
  {
    label: "Identity Monitoring",
    title: "Track risk before it compounds.",
    body: "Security posture, new findings, and practical priorities surfaced in a format normal people can actually use.",
  },
];

const pillars = [
  {
    eyebrow: "Clarity",
    title: "Consumer-readable security",
    body: "No security theater. No niche jargon. Just a premium interface that explains what matters, why it matters, and what to do next.",
  },
  {
    eyebrow: "Control",
    title: "Action, not just awareness",
    body: "EvSec-One is built around reduction of exposure, not passive dashboards that tell users they have a problem and stop there.",
  },
  {
    eyebrow: "Infrastructure",
    title: "Built to scale into a system",
    body: "The surface product feels simple, but the underlying direction is a real protection layer for modern personal digital life.",
  },
];

const stats = [
  { label: "Protection Layers", value: "5" },
  { label: "Core User Outcome", value: "Less Exposure" },
  { label: "Positioning", value: "Security for Everyone" },
  { label: "Operating Model", value: "Calm + Premium" },
];

const capabilities = [
  "Privacy score and exposure posture",
  "Public data broker visibility",
  "Removal queue and suppression flow",
  "Breach and identity monitoring",
  "Guided hardening recommendations",
  "Personal digital safety dashboard",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="hero-orb left-[-140px] top-[70px] h-[280px] w-[280px] bg-cyan-400/20" />
      <div className="hero-orb right-[-80px] top-[120px] h-[260px] w-[260px] bg-blue-500/20" />
      <div className="hero-orb left-[28%] top-[320px] h-[260px] w-[260px] bg-violet-500/14" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#07101fcc]/90 backdrop-blur-xl">
        <div className="shell flex items-center justify-between gap-6 px-5 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            EvSec-One
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/68 md:flex">
            {siteConfig.nav.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/scan"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white/92 transition hover:bg-white/10"
            >
              Scan
            </Link>
            <a
              href={`https://${siteConfig.noaerthSubdomain}`}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#78b8ff] via-[#74f0cf] to-[#9d7cff] px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(116,240,207,0.22)] transition hover:scale-[1.01]"
            >
              Open {siteConfig.domain}
            </a>
          </div>
        </div>
      </header>

      <section className="grid-glow relative pt-16 md:pt-24">
        <div className="shell px-5">
          <div className="panel overflow-hidden rounded-[34px] px-6 py-8 md:px-10 md:py-12">
            <div className="mx-auto max-w-[980px] text-center">
              <div className="mb-5 inline-flex items-center rounded-full badge-chip px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/72">
                Consumer Privacy / Security Infrastructure
              </div>

              <h1 className="mx-auto max-w-[980px] text-[42px] font-semibold leading-[0.96] tracking-[-0.05em] md:text-[74px]">
                Security for everyone.
                <br />
                <span className="bg-gradient-to-r from-white via-[#9cd5ff] to-[#74f0cf] bg-clip-text text-transparent">
                  Premium control for modern digital life.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-[860px] text-lg leading-8 text-white/68 md:text-[22px] md:leading-9">
                EvSec-One turns personal digital security into a clear operating layer:
                exposure visibility, removal workflows, posture monitoring, and guided
                protection designed for normal people — not just security experts.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/scan"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-[#78b8ff] to-[#74f0cf] px-6 py-3.5 text-base font-semibold text-slate-950 shadow-[0_16px_45px_rgba(116,240,207,0.24)] transition hover:scale-[1.01]"
                >
                  Check Your Exposure
                </Link>
                <a
                  href="#platform"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-base font-medium text-white/90 transition hover:bg-white/10"
                >
                  See Platform
                </a>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="panel-soft rounded-3xl px-5 py-5 text-left">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/46">
                      {stat.label}
                    </div>
                    <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="pt-8 md:pt-12">
        <div className="shell px-5">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="panel rounded-[34px] px-6 py-6 md:px-8 md:py-8">
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                Platform
              </div>
              <h2 className="mt-4 max-w-[620px] text-[34px] font-semibold leading-tight tracking-[-0.04em] md:text-[52px]">
                A calmer interface for a high-friction problem.
              </h2>
              <p className="mt-5 max-w-[660px] text-base leading-8 text-white/66 md:text-lg">
                The product should feel like premium consumer software, not an anxiety
                machine. That means clear prioritization, beautiful hierarchy, and a
                protection model that tells users exactly what to do next.
              </p>

              <div className="mt-8 space-y-4">
                {layers.map((layer) => (
                  <div key={layer.title} className="panel-soft rounded-[28px] p-5 md:p-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/44">
                      {layer.label}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {layer.title}
                    </h3>
                    <p className="mt-3 max-w-[620px] text-white/64">{layer.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel rounded-[34px] p-4 md:p-6">
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,32,62,0.96),rgba(9,12,22,0.96))] p-4 md:p-5">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-white/42">
                      EvSec-One Console
                    </div>
                    <div className="mt-1 text-lg font-semibold">Digital Exposure Overview</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-white/74">
                    Live posture
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="panel-soft rounded-3xl p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-white/46">
                      Privacy Score
                    </div>
                    <div className="mt-3 text-6xl font-semibold tracking-[-0.06em]">74</div>
                    <div className="mt-2 text-sm text-white/62">Moderate exposure, high upside</div>
                    <div className="mt-5 h-3 rounded-full bg-white/8">
                      <div className="metric-bar h-3 w-[74%] rounded-full" />
                    </div>
                  </div>

                  <div className="panel-soft rounded-3xl p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-white/46">
                      Exposure Mix
                    </div>
                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-sm text-white/72">
                          <span>Data broker visibility</span>
                          <span>High</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-white/8">
                          <div className="metric-bar-warm h-2.5 w-[78%] rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-sm text-white/72">
                          <span>Breach residue</span>
                          <span>Medium</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-white/8">
                          <div className="metric-bar h-2.5 w-[48%] rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-sm text-white/72">
                          <span>Posture hardening</span>
                          <span>Improving</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-white/8">
                          <div className="metric-bar h-2.5 w-[62%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4">
                  <div className="panel-soft rounded-3xl p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-white/46">
                          Priority Queue
                        </div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight">
                          Reduce what can be found first.
                        </div>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-white/74">
                        Guided
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3">
                      <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                        <div className="text-sm font-medium text-white">
                          Remove public broker listings
                        </div>
                        <div className="mt-1 text-sm text-white/58">
                          Highest leverage reduction path across personal discoverability.
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                        <div className="text-sm font-medium text-white">
                          Rotate compromised credentials
                        </div>
                        <div className="mt-1 text-sm text-white/58">
                          Historical breach associations still affect account risk.
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                        <div className="text-sm font-medium text-white">
                          Enable higher-friction account hardening
                        </div>
                        <div className="mt-1 text-sm text-white/58">
                          MFA, alias usage, and browser privacy settings improve posture fast.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layers" className="pt-8 md:pt-12">
        <div className="shell px-5">
          <div className="panel rounded-[34px] px-6 py-8 md:px-8 md:py-10">
            <div className="max-w-[760px]">
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                Product Layers
              </div>
              <h2 className="mt-4 text-[34px] font-semibold tracking-[-0.04em] md:text-[52px]">
                Not a single tool. A layered protection system.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66 md:text-lg">
                EvSec-One is built as a stack of understandable protection layers, so the
                user experience stays simple while the underlying product grows more
                powerful over time.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="panel-soft glow-line rounded-[28px] px-5 py-6"
                >
                  <div className="text-xs uppercase tracking-[0.16em] text-white/42">
                    Layer {index + 1}
                  </div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="pt-8 md:pt-12">
        <div className="shell px-5">
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="panel rounded-[32px] px-6 py-7 md:px-7 md:py-8">
                <div className="text-xs uppercase tracking-[0.2em] text-white/42">
                  {pillar.eyebrow}
                </div>
                <h3 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.04em]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/64">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-evsec" className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="shell px-5">
          <div className="panel rounded-[36px] px-6 py-8 text-center md:px-10 md:py-12">
            <div className="mx-auto max-w-[880px]">
              <div className="text-xs uppercase tracking-[0.24em] text-white/42">
                Why EvSec-One
              </div>
              <h2 className="mt-4 text-[36px] font-semibold leading-tight tracking-[-0.05em] md:text-[58px]">
                A premium security product for people who should never have needed to
                become experts.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/66 md:text-lg">
                The category should feel modern, high-trust, and useful from the first
                screen. EvSec-One is designed to make exposure reduction and personal
                digital safety feel clear, controlled, and inevitable.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/scan"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-[#78b8ff] to-[#74f0cf] px-6 py-3.5 text-base font-semibold text-slate-950 shadow-[0_16px_45px_rgba(116,240,207,0.24)] transition hover:scale-[1.01]"
                >
                  Start with a Scan
                </Link>
                <a
                  href={`https://${siteConfig.noaerthSubdomain}`}
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-base font-medium text-white/90 transition hover:bg-white/10"
                >
                  Use {siteConfig.noaerthSubdomain}
                </a>
              </div>
            </div>
          </div>

          <footer className="px-1 pt-6 text-sm text-white/46">
            <div className="flex flex-col gap-4 border-t border-white/8 pt-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-medium text-white/76">EvSec-One</span>
                <span className="ml-2">Security for everyone.</span>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <span>{siteConfig.domain}</span>
                <span>{siteConfig.noaerthSubdomain}</span>
                <span>Built under Noaerth</span>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
