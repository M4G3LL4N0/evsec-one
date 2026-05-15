# Noaerth Upgrade Report: EvSec-One

## Summary

- **Project:** EvSec-One
- **Folder:** `evsec-one`
- **Live URL:** https://evsec-one.noaerth.com
- **Date:** 2026-05-14
- **Framework:** Next.js 16 (`src/app`), Tailwind 4, TypeScript, Supabase clients, Framer Motion
- **Build command:** `pnpm build`
- **GitHub:** https://github.com/M4G3LL4N0/evsec-one.git
- **Deployment:** **Not run**

## What This Startup Is

Consumer privacy and security **exposure reduction** product — clearer visibility into discoverability plus guided workflows. Positioning must remain **not legal advice**. Routes locally include `/`, `/scan`, `/onboarding`, `/sign-in`, `/sign-up`, `/pricing`, `/about`, `/dashboard`.

## Live Site Review

- **Status:** HTTP **404** at review — host/subdomain resolves but no page served; document honestly until deploy is fixed.
- **What was weak:** No public page to validate trust narrative or disclaimers live.
- **What changed locally:** Marketing `HomeHeader` with mobile navigation affordances.

## Improvements Made

- **UX / Mobile:** `HomeHeader` menu for small screens on marketing paths.
- **Documentation:** This report + `startupjourney.md` (loop entry 2026-05-14).

## Routes

- `/`, `/scan`, `/onboarding`, `/sign-in`, `/sign-up`, `/pricing`, `/about`, `/dashboard`

## Build Result

- **pnpm build:** **PASS** (expected)

## Deployment Result

- **Not run**

## Remaining Issues

- Resolve **404** on production subdomain — deploy pipeline or project linkage on noaerth host.
- Keep **not legal advice** prominently in marketing copy wherever outcomes are discussed.
- Git commit/push not run this loop.

## Next Steps

- Deploy to production and confirm **HTTP 200** on https://evsec-one.noaerth.com .
- Verify Supabase env and auth flows on deployed URL.
- Commit mobile header + docs; push to GitHub when ready.
