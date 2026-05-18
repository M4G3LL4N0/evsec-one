import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SubpageVisual variant="about" />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          About EvSec-One
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy and personal security made usable.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          EvSec-One helps everyday people understand where their data is exposed,
          what risks matter most, and what to do next. We turn confusing privacy
          problems into a clear, actionable protection workflow.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-10 pointer-events-none" />
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-black/40 to-black/20 p-6 backdrop-blur hover:border-white/20 transition-colors">
            <h2 className="text-xl font-medium">Why we exist</h2>
            <p className="mt-3 text-white/70">
              Personal data is scattered across brokers, breach datasets, public
              listings, and tracking systems. Most people have no visibility into
              how exposed they are or how to improve it.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-medium">What EvSec-One does</h2>
            <p className="mt-3 text-white/70">
              We give users a Privacy Score, exposure visibility, removal guidance,
              monitoring, and a calm action plan to improve their digital safety
              over time.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-medium">Our principles</h2>
            <p className="mt-3 text-white/70">
              Clarity over jargon. Practical protection over fear. Consumer-grade
              usability with serious security thinking underneath.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-medium">Why now</h2>
            <p className="mt-3 text-white/70">
              Data exposure is growing faster than consumer understanding. People
              need a personal security system that feels modern, simple, and
              actionable.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <Link
            href="/scan"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
          >
            Check Your Privacy Score
          </Link>
        </div>
      </section>
    </main>
  );
}
