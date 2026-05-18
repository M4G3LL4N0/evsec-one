# User Truth Report: Evsec One

**Edition:** Cursor User Truth Engine  
**Date:** 2026-05-18  
**Folder:** `/Users/joshuadavis/startups/evsec-one`  
**Proof ladder:** 4  
**Build:** PASS (VERIFIED)

---

## 1. Product Read

| Field | Assessment |
|-------|------------|
| Appears to be | Evsec One — B2B workflow |
| Currently does | Next.js app; routes: /about, /dashboard, /onboarding, /, /pricing, /scan, /sign-in, /sign-up |
| Appears to promise | Security for everyone. |
| Current proof level | 4 |
| Risk level | MEDIUM — demo/traction claims |

**Inspected:** `package.json`, /Users/joshuadavis/startups/evsec-one/src/app/page.tsx, /Users/joshuadavis/startups/evsec-one/src/app/layout.tsx, `startupjourney.md`, `CLAIM_REGISTER.md`, `TrustStrip` pattern.

---

## 2. Primary User

- **Who:** Team lead tired of generic tools
- **Situation:** Responsible for outcomes when the process fails
- **Main pain:** Manual workflow, unclear ROI, distrust of AI hype
- **Workaround today:** Spreadsheets, email threads, shared codes, generic tools
- **Desired outcome:** Complete one useful workflow with labeled demo data
- **Buying trigger:** One painful incident or audit question they cannot answer
- **Trust requirement:** Labeled demo, no fake metrics, clear limits

---

## 3. Secondary Users

| Segment | Pain | Use case | Priority |
|---------|------|----------|----------|
| Buyer / budget owner | Prove ROI | Pilot approval | P1 |
| End operator | Speed | Daily workflow | P1 |
| IT / security reviewer | Risk | Access and data handling | P2 |

---

## 4. Wrong Users

- **Everyone on the internet**
- Why distraction: they need different proof, pricing, and support than this MVP can offer

---

## 5. Pain Ranking

| Pain | Severity | Frequency | Urgency | WTP | Retention | Priority |
|------|----------|-----------|---------|-----|-----------|----------|
| Functional: manual steps | 85 | 80 | 75 | 70 | 72 | 1 |
| Time: slow handoffs | 78 | 75 | 70 | 65 | 68 | 2 |
| Trust: fear of wrong access/data | 70 | 65 | 80 | 75 | 80 | 1 |
| Financial: rework cost | 65 | 60 | 55 | 70 | 60 | 3 |
| Emotional: stress from ambiguity | 72 | 70 | 68 | 50 | 65 | 4 |

---

## 6. Current Workarounds

| Workaround | Why users use it | Weakness | Opportunity |
|------------|------------------|----------|-------------|
| Email + PDF | Familiar | No live verification | Exportable audit trail |
| Shared codes | Fast | Insecure, no revoke | Time-bounded credentials |
| Generic AI chat | Feels modern | No workflow | Structured demo with steps |

---

## 7. MVP Fit

| Feature | User need | Quality (0-10) | Decision | Reason |
|---------|-----------|------------------|----------|--------|
| Homepage | Explain who/pain/CTA | 6 | improve | Clarity for first visit |
| Demo route | First value | 2 | build | PLANNED — add interactive demo |
| TrustStrip / labels | Honest expectations | 7 | keep | Portfolio trust pattern |
| Dashboard | Power user retention | 6 | improve | After demo proof |
| Pricing | Buyer conversion | 3 | delay | After pilot pricing test |

**Gap:** Add /demo — landing alone is not MVP

---

## 8. Messaging Strategy

| Item | Copy |
|------|------|
| Main promise | Complete one useful workflow with labeled demo data |
| Homepage headline (target) | Complete one useful workflow with labeled demo data |
| Subheadline (target) | For team lead tired of generic tools — try a labeled demo before production claims |
| Primary CTA | See how it works |
| Secondary CTA | How it works |
| One-sentence pitch | Evsec One helps team lead tired of generic tools manual workflow, unclear roi, distrust of ai hype. |
| Words to use | specific, demo, audit, export, policy, minutes |
| Words to avoid | revolutionary, seamless, AI-powered platform, transform |

**Current hero (KNOWN from repo):** Security for everyone.  
**Current meta title:** EvSec-One

---

## 9. Trust Gaps

| Gap | Risk | Fix | Public-safe copy |
|-----|------|-----|------------------|
| Live URL unverified | Overclaim availability | HTTP check | "May be available at *.noaerth.com — verify" |
| No paying users in repo | Fake traction | Remove metrics | "Early MVP — validating with pilots" |
| No demo | Product theater | TrustStrip + DEMO labels | "Sample data for walkthrough only" |

---

## 10. Claim Register

| Claim | Evidence | Risk | Public-safe wording | Proof needed |
|-------|----------|------|---------------------|--------------|
| Product works locally | Build PASS | low | "Try the repo demo locally" | User session |
| Production-ready | build only | high | Do not claim | Pilot + uptime |
| Paying customers | none in repo | critical | DO NOT CLAIM | Revenue |
| See also | `CLAIM_REGISTER.md` | — | — | — |

---

## 11. User Research Questions

1. Tell me about the last time this problem wasted your afternoon.
2. What did you do instead of using a tool like this?
3. Who else got involved when things went wrong?
4. What did that workaround cost in time or money?
5. What almost made you give up on fixing it?
6. Have you paid for software to solve this before? What happened?
7. What would make you trust a demo enough to share it with your boss?
8. What proof would you need before you paid?
9. What is the smallest outcome that would make this worth it this week?
10. Where does your current process break first?
11. What report or artifact do you need at the end?
12. What would make you stop using this after day 3?
13. What words do you use internally to describe this pain?
14. What mistake are you most afraid of making?
15. If this disappeared tomorrow, what would you miss?
16. Who signs the check, and what do they care about?
17. What compliance or policy constraint blocks you today?
18. How often does this happen per week?
19. What triggers you to search for a new solution?
20. What would a successful pilot look like in 14 days?

---

## 12. Metrics

| Metric | Definition |
|--------|------------|
| North Star | **first_value_reached** (user completes core demo workflow) |
| Activation | primary_cta_clicked → demo_started |
| First value | core_action_completed with export or save |
| Retention | return_visit within 7 days |
| Revenue signal | payment_started or pilot_agreed (manual) |
| Churn signal | demo_started without core_action_completed |

**Events to add (documentation only unless analytics exists):** page_viewed, primary_cta_clicked, demo_started, core_action_completed, feedback_submitted.

---

## 13. Build Priorities

| P | Action | User pain | Effort | Impact |
|---|--------|-----------|--------|--------|
| P0 | Ship /demo MVP | No first value | M | High |
| P1 | Rewrite hero + meta for Team lead tired of generic tools | Confusion | S | High |
| P1 | FAQ: who pays, data handling, demo limits | Trust | S | Med |
| P2 | Export/share result | Retention | M | Med |
| P3 | Pricing page | Revenue | M | After pilot |

---

## 14. 7-Day User Validation Plan

| Day | Action |
|-----|--------|
| 1 | Local walkthrough: `/` — time to first value |
| 2 | Rewrite hero + CTA from section 8 |
| 3 | 5 user interviews (questions in §11) |
| 4 | Fix top 3 confusion points from interviews |
| 5 | Record 2-min demo video (labeled DEMO) |
| 6 | 10 outbound messages to Team lead tired of generic tools |
| 7 | Update CLAIM_REGISTER from findings |

---

## 15. 30-Day Product Improvement Plan

| Week | Focus |
|------|--------|
| 1 | Clarity + demo path |
| 2 | Trust + FAQ + claim safety |
| 3 | Pilot offer + pricing hypothesis |
| 4 | Retention hook (export, save, email follow-up) |

---

## 16. Final Strategy

**Evsec One** is for **Team lead tired of generic tools** who need **Complete one useful workflow with labeled demo data** without hype. Proof is at level **4**; do not sound like level 8. Next: **build /demo and run 5 sessions**, then one paid pilot. All public copy must pass `CLAIM_REGISTER.md`.

**First action:** `cd /Users/joshuadavis/startups/evsec-one && pnpm dev` → open `/`.
