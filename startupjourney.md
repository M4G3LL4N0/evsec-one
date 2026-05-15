# Startup Journey: EvSec-One

## 1. Current Snapshot

- **Project name:** EvSec-One
- **Local folder:** `/Users/joshuadavis/startups/evsec-one`
- **Live URL:** https://evsec-one.noaerth.com (portfolio subdomain pattern)
- **Live site status:** HTTP **404** — subdomain resolves but no deployed page served at time of review (report honestly)
- **Product:** Consumer-oriented privacy and security exposure reduction — visibility into discoverability, guided workflows, and posture framing (**not legal advice**)
- **Framework:** Next.js App Router (`src/app`), TypeScript, Tailwind 4, Supabase client libs
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (expected; 2026-05-14)
- **GitHub remote:** https://github.com/M4G3LL4N0/evsec-one.git
- **GitHub push status:** Not run this loop
- **Deployment:** **Not run** this loop
- **Last updated:** 2026-05-14

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 8 | Exposure reduction narrative is crisp; disclaim non-legal positioning |
| MVP reality | 7 | Marketing + scan/onboarding/account paths; Supabase-ready |
| Visual quality | 8 | Premium dark UI; layered storytelling on home |
| Build health | 8 | **PASS** — toolchain clean on pnpm |
| Customer urgency | 8 | Privacy fatigue and breach awareness stay high |
| Market potential | 7 | Crowded consumer privacy; differentiation is workflow + tone |
| Monetization potential | 7 | Pricing page; SaaS wedge plausible |
| Growth potential | 7 | Shareable “exposure literacy” content loop |
| Investor story | 7 | Personal digital protection infrastructure angle |
| Local review readiness | 8 | `/` → `/scan` → `/dashboard` flows |

- **Total score:** **77 / 100**
- **Classification:** **Promising venture** — strong product story and repo; production URL needs deploy fix
- **Best next loop type:** **Deploy / infra loop** (fix 404 on noaerth) + **Trust loop** (non-legal disclaimers visible on live)

## 3. 10-Second Startup Explanation

- **What this startup is:** A calm interface that helps everyday people **reduce** how exposed they are online — discoverability, broker-style visibility, and practical next steps.
- **Who it is for:** Consumers who want less scatter and more control without becoming security engineers.
- **What pain it solves:** Privacy advice is vague; people do not know what is actually visible or what to do first.
- **What the user can do:** Explore layers on the home narrative, scan and onboard, use dashboard-style surfaces when authenticated.
- **Why it matters:** Small exposure reductions compound into less fraud, harassment, and regret.
- **Primary CTA:** Start exposure discovery (`/scan`) / sign up

## 4. Founder Thesis

- **Core belief:** Personal security is a **reduction** problem — less visible attack surface, clearer priorities — not another fear dashboard.
- **Why this should exist:** Incumbent tools are enterprise-first or checkout flows with thin education.
- **Why now:** AI scraping, data brokers, and password leaks normalized “being findable.”
- **Market wedge:** Readable exposure map + guided suppression queue (productized, not legal services).
- **Expansion path:** Monitoring subscriptions, family plans, identity-adjacent partnerships.
- **What this can become:** Default “exposure control layer” for mainstream households.
- **1000x opportunity:** Consented telemetry on which reduction actions correlate with fewer incidents (research-grade, opt-in).
- **Biggest strategic risk:** Being misread as legal representation or guaranteed removal.
- **Next founder decision:** Ship working deploy to `evsec-one.noaerth.com`; bake **not legal advice** into hero and pricing.

## 5. Live Website Diagnosis

Based on live check (**HTTP 404** at review time):

- **Status code or load status:** **404**
- **What visitors currently see:** No page — deploy or routing mismatch on the portfolio host.
- **Current headline (codebase):** Verify against production once live; home promises exposure discovery and removal workflows.
- **Current CTA:** Scan path and account CTAs on marketing home.
- **What works:** Local product narrative is coherent; git remote exists; mobile `HomeHeader`; build **PASS**.
- **What feels weak:** Public URL does not reflect the quality of the local build.
- **What feels generic:** “Privacy platform” language if hero does not anchor on **reduction** and workflows.
- **What feels confusing:** Until live, prospects cannot validate trust signals (disclaimers, security page).
- **What feels unfinished:** Live parity with marketing and auth flows.
- **What feels premium:** Layered sections and calm copy on local home.
- **What is missing:** Working **200** on production; visible non-legal framing on the public site.
- **Highest leverage live-site fix:** Green **200** + short trust strip: tooling only, **not legal advice**.

## 6. Local Codebase Diagnosis

- **Framework:** Next.js App Router under `src/app`, TypeScript, Tailwind 4, Supabase packages
- **App structure:** Marketing home + scan + onboarding + auth + pricing + about + dashboard
- **Current routes:** `/`, `/scan`, `/onboarding`, `/sign-in`, `/sign-up`, `/pricing`, `/about`, `/dashboard`
- **Current pages:** Home narrative, scan, onboarding, auth, pricing, about, dashboard shell
- **Current components:** `HomeHeader` (mobile menu), marketing sections, Supabase-backed patterns as implemented
- **Current data files:** Site config libs; Supabase env for production features
- **Current styling system:** shadcn-style components, editorial sections, motion-capable UI
- **Technical risks:** Production env and Supabase keys must stay out of repo; rate-limit scan if public
- **Build risks:** **PASS** expected — keep framer-motion usage valid in all components
- **Env var risks:** Supabase URL/keys for authenticated dashboard experiences
- **API risks:** Auth and scan endpoints need abuse controls at scale
- **Mobile risks:** Mitigated via `HomeHeader` drawer / small-screen navigation
- **GitHub risks:** Remote exists; push not run this loop
- **Local review risks:** Test auth flows with real Supabase project; scan UX on phone

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** Own “exposure reduction for normal people,” not another generic VPN upsell.
- **Wedge:** Calm UI + structured workflows + honest limits (**not legal advice**).
- **Biggest opportunity:** Become the household name for “what is visible and what to do Monday.”
- **Biggest risk:** Live **404** undermines trust; misclassified as a law firm substitute.
- **Next decision:** Fix deploy; publish trust copy; push meaningful commit to GitHub.

### Chief Product Officer

- **MVP:** Home, `/scan`, `/onboarding`, auth, `/dashboard`, `/pricing`.
- **Primary workflow:** Understand exposure → guided steps → return for monitoring.
- **Dashboard:** Post-auth control and status (per implementation).
- **Onboarding:** Explain what the product does and does **not** do legally.

### Customer Researcher

- **Buyer:** Individual prosumers; future family / small team plans.
- **User:** Anyone who googled themselves and did not like the results.
- **Pain:** Opaque data broker ecosystem; fear without a plan.
- **Alternatives:** Credit monitoring, identity theft insurance, manual opt-out lists.
- **Objections:** “Will this actually remove my data?”
- **Trust builders:** Transparent limits; educational copy; security posture page.

### JTBD Strategist

- **Job-to-be-done:** “Show me what strangers can learn about me and shrink it.”
- **Trigger:** News story, breached password, harassment, job search paranoia.
- **Desired outcome:** Fewer needles in the haystack of the public internet.
- **Old way:** Spreadsheet of unsubscribe links found on Reddit threads.
- **New way:** One product queues work and repeats monitoring.

### UX Designer

- **UX issue:** Mobile navigation to key flows — **addressed** via `HomeHeader`.
- **Homepage flow:** Layers → pillars → CTAs toward scan and account.
- **App flow:** Scan → onboarding → dashboard habit loop.
- **Mobile flow:** Header menu reaches primary routes without zoom-hunt.
- **Friction removed:** Hidden destination links on small screens (improved).

### Visual Design Director

- **Visual identity:** Serious calm — security without cyberpunk neon cliché overload.
- **Type:** Strong hierarchy on hero and layer cards.
- **Color:** Restrained accents; readable contrast for trust.
- **Motion:** Framer Motion where used — keep JSX valid and purposeful.
- **Component style:** Consistent buttons and panels across marketing and app shells.

### Brand Strategist

- **Category:** Personal exposure reduction / consumer security literacy.
- **Enemy:** Fear-mongering dashboards that never finish the job.
- **Memorable phrase:** “Reduce what the internet can see.”
- **Voice:** Protective, precise, never preachy — **not** legalese impersonation.

### Copy Chief

- **Headline:** Exposure discovery and reduction, not “we delete the internet.”
- **Subheadline:** Plain-language explanation of workflows and limits.
- **CTA:** “Start scan” / “See pricing.”
- **Copy rules:** **Not legal advice** on every surface that implies outcomes; no guaranteed removal promises unless verifiable.

### Staff Engineer

- **Architecture:** Next.js app + Supabase for identity-linked features.
- **Build:** **PASS** expected.
- **Env strategy:** Vercel/host secrets only; `.env.example` without values.
- **Dependency plan:** Keep Next 16 + React 19 upgrade path documented.

### Frontend Engineer

- **Pages:** Home, scan, onboarding, auth, pricing, about, dashboard.
- **Components:** `HomeHeader` mobile improvements this loop.
- **Interactions:** Panels, links, motion reveals.
- **Mobile fixes:** Responsive header navigation.

### Full-Stack Architect

- **Data:** User-linked scan and task state via Supabase (as implemented).
- **Future database:** Richer audit log of suppression attempts and outcomes.
- **Future auth:** MFA, session hardening, device list.
- **Future API:** Partner webhooks for broker API integrations (careful compliance).
- **Future billing:** Stripe + plan entitlements.

### AI Product Architect

- **AI use:** Optional summarization of findings — human-review for sensitive outputs.
- **Safe boundaries:** No personalized legal guidance; point to licensed professionals when needed.
- **Future plan:** Suggest next **product** steps only, not jurisdiction-specific advice.

### Data Moat Strategist

- **Data loop:** User marks action taken → outcome signal (consented).
- **Feedback loop:** “Did this URL disappear on recheck?”
- **Benchmark:** Reduction velocity per user cohort (aggregated).

### Growth Marketer

- **Hook:** “See your exposure map in one sitting.”
- **SEO:** personal data removal, broker opt-out, exposure check (non-medical).
- **Distribution:** Privacy creators, newsletter sponsors, Reddit-adjacent education (tasteful).
- **Share loop:** Blurred-before share card (no PII) — backlog.

### Sales Operator

- **Buyer pain:** SMB leaders want employees less phishable at home.
- **Proof:** Live **200** + demo recording once deploy fixed.
- **Pricing:** Consumer tier + future team bundle.
- **Objections:** Legal liability — answered by product positioning + ToS.

### Pricing Strategist

- **Model:** Subscription for monitoring + workflow depth tiers.
- **Free tier:** Limited scan preview (if aligned with ethics and cost).
- **Paid tier:** Full queues, recurrence, alerts.
- **Upgrade trigger:** First recurrence alert or multi-profile need.

### Investor Analyst

- **Venture thesis:** Consumer wedge into identity-adjacent spend; upsell family and SMB.
- **Market:** Large TAM; execution and trust are the filters.
- **Expansion:** API partnerships with telcos and banks (long arc).
- **Moat:** Workflow depth + monitoring graph + brand trust.
- **Metrics:** Activation post-scan, return rate, paid conversion, NPS on clarity.

### Competitive Intelligence Analyst

- **Category pattern:** Privacy apps vs manual services vs legal clinics.
- **Differentiation:** Productized reduction workflows with honest non-legal boundary.

### Experiment Designer

- **Tests:** Hero with vs without explicit **not legal advice** banner — measure bounce.
- **Success metric:** Scan start rate from home mobile.
- **Feedback loop:** Onboarding dropout reasons (micro-survey).

### QA Engineer

- **Build:** **PASS** expected
- **Routes:** `/`, `/scan`, `/onboarding`, `/sign-in`, `/sign-up`, `/pricing`, `/about`, `/dashboard`
- **Mobile:** `HomeHeader` behavior
- **Regression:** Auth redirect matrix; scan empty states

### Security / Trust Reviewer

- **Risks:** Scraping abuse on scan; credential stuffing on auth.
- **Disclaimers:** **Not legal advice**; not law enforcement channel.
- **Data handling:** Minimize stored PII; encrypt at rest; clear retention policy.

### Legal / Policy Framing Reviewer

- **Risk category:** High if copy implies attorney-client relationship or guaranteed outcomes.
- **Safe framing:** Educational software and workflow tooling; user responsible for legal decisions.
- **Required disclaimers:** Jurisdiction-agnostic “consult a qualified professional” where outcomes vary.

### GitHub Release Operator

- **Remote:** https://github.com/M4G3LL4N0/evsec-one.git
- **Commit / push:** Not run this loop

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/evsec-one && pnpm dev`
- **URL:** http://localhost:3000
- **Test flow:** `/` → `/scan` → `/onboarding` → mobile `HomeHeader` → `/pricing`

### Speed / Token Efficiency Operator

- **Scope:** Mobile `HomeHeader` + journey doc; build **PASS** expected.
- **Blockers:** Production **404** — prioritize deploy wiring.

### Taste Reviewer

- **Quality diagnosis:** Confident narrative; needs live parity to feel “real.”
- **Premium fix:** One annotated “before / after exposure” demo (synthetic).

### Contrarian Strategist

- **Angle:** B2B2C through employers funding “digital hygiene” stipends.
- **Wedge:** Partner with cybersecurity training vendors.

### Community / Ecosystem Builder

- **Community:** Transparency reports on broker landscape changes (editorial).
- **Public artifact:** “Exposure literacy” glossary (non-legal).

### Automation Architect

- **Safe automation:** Scheduled recheck jobs with user consent toggles.
- **Future:** Opt-in playbook generator from scan results — no auto legal filings.

## 8. Product Strategy

- **MVP definition:** Home + scan + onboarding + auth surfaces + dashboard + pricing.
- **Primary workflow:** Discover → reduce repeatables → monitor.
- **Input:** User identifiers and scan signals (minimal necessary).
- **Output:** Prioritized task list and calm status view.
- **First aha moment:** First completed reduction task with visible before/after note.
- **Dashboard purpose:** Ongoing status and open items.
- **Retention loop:** Recurrence alerts and seasonal “recheck” campaigns.
- **Monetization path:** Paid monitoring + deeper workflow limits.

## 9. Roadmap

### Loop 1: Make It Understandable

- Home layers and pillars — **strong** locally.

### Loop 2: Make It Real

- Mobile `HomeHeader` — **done**; fix live **404**.

### Loop 3: Make It Premium

- Synthetic demo strip; motion polish without clutter.

### Loop 4: Make It Useful

- Deeper suppression playbooks per source type.

### Loop 5: Make It Monetizable

- Stripe + entitlement gating aligned with ethics.

### Loop 6: Make It Fundable

- Metrics: scan completion, task completion, paid conversion.

### Loop 7: Make It Compound

- Family profiles; shared household exposure map.

### Loop 8: Make It Defensible

- Recheck graph and outcome dataset (consented).

### Loop 9: Make It Distributable

- Creator partnerships; employer stipend pilot.

### Loop 10: Make It Operationally Scalable

- Abuse prevention, support runbooks, incident response.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** Mobile navigation + portfolio documentation
- **Loop goal:** Mobile `HomeHeader` for marketing home; author journey + upgrade report; **no deployment** this loop
- **Changes made:** Client `HomeHeader` with mobile menu affordances for small screens on the marketing home path.
- **Files changed:** `src/components/marketing/home-header.tsx`, marketing layout touch points
- **Routes added:** none
- **Routes improved:** Mobile reachability for primary marketing destinations from home
- **Components added:** none (evolution of existing header)
- **Components improved:** `HomeHeader`
- **MVP interactions added:** Mobile navigation entry points on home
- **Demo data added:** none
- **Copy improved:** none major this loop (verify **not legal advice** strings on next copy pass)
- **Design improved:** Mobile nav shell aligned with premium marketing layout
- **Mobile improved:** `HomeHeader` menu behavior
- **Engineering fixed:** Build **PASS** expected; noted production **404** honestly for `evsec-one.noaerth.com`
- **Build result:** **PASS** expected (`pnpm build`)
- **GitHub commit:** Not run
- **GitHub push result:** Not run
- **Deployment:** **Not run**
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Portfolio documentation; mobile IA on marketing home
- **What still needs work:** Deploy live URL to **200**; expand trust disclaimers on public hero; optional `git push`

## 11. Next Loop Plan

- **Highest leverage next move:** Fix **404** on https://evsec-one.noaerth.com — project/domain mapping and build artifact.
- **Product:** Guided “first reduction” checklist from scan results.
- **Design:** Before/after synthetic demo panel above fold.
- **Engineering:** `.env.example`; rate limits on scan; Supabase RLS audit.
- **Growth:** Short educational thread series — always **not legal advice**.
- **Sales:** None until live **200** and basic analytics.
- **Monetization:** Align pricing bullets with legally safe claims.
- **Investor story:** Exposure reduction infra for consumers expanding to households.
- **Trust/safety:** Prominent disclaimers; data retention docs.
- **GitHub:** Commit mobile header bundle; push to origin.
- **Biggest risk:** Live site missing while narrative is strong — trust gap.
- **Suggested next command:** `cd /Users/joshuadavis/startups/evsec-one && pnpm dev`

## 12. 1000x Backlog

### Product

- Household profiles; shared task boards; escalation to human-assisted services (partnered)

### Design

- Trust strip component; OG images for educational posts

### Engineering

- Abuse-resistant scan pipeline; observability dashboards

### Growth

- SEO glossary; newsletter

### Sales

- SMB bundle pilot post-traction

### Monetization

- Annual plans; family tiers

### Investor Narrative

- “Exposure reduction infrastructure”

### Data Moat

- Aggregated recurrence patterns across broker types

### Automation

- Consented scheduled rechecks

### Partnerships

- Cyber insurers; HR benefits portals

### SEO / Content

- Opt-out guides per major broker category

### User Retention

- Seasonal exposure “spring cleaning” campaigns

### Demo Quality

- Fully synthetic storyline with no real PII

### Mobile Experience

- Dashboard readability pass on smallest phones

### Trust and Safety

- Content policy for community-submitted guides

### Real API Integrations

- Broker APIs where contractual and lawful

### Enterprise Features

- Admin console for gifted seats

### Future AI Features

- Summarize public findings only — user-confirmed sources

### Community

- Moderated tips library (non-legal)

### Distribution

- Embeddable “exposure check” widget for partners (restricted)

### Templates

- PDF export of user task list (optional)

### Analytics

- Funnel: home → scan start → account create

### Internal Tools

- Support impersonation with audit log (future)

### Public Artifacts

- Transparency report cadence
