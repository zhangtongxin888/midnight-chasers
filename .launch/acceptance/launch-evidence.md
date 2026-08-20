# Midnight Chasers Kimi v3 launch evidence

Run: `midnight-chasers-20260820-043000`

Formal domain: `https://midnight-chasers.wiki`

Worker status: **待总控验收**. The worker-side implementation, deployment, domain, crawl, visual, and GSC submission gates have been checked; final acceptance remains with the coordinator.

## Evidence table

| Check | Formal URL or resource | Checked at (UTC) | Actual result | Evidence |
|---|---|---:|---|---|
| Independent repository | `https://github.com/zhangtongxin888/midnight-chasers` | 2026-08-20 05:13 | Pass | Kimi v3 source was committed to `main` as `d573e1451ce0138e991d82b4ef79b93d2122edea`; canonical redirect normalization was committed and pushed as `22cefc62431bf6b6bccb5bf5c3f2f8b3ba55f941`. `origin/main` matched the formal repository before this evidence update. |
| Repository isolation | `/Users/zhangtongxin/sites/midnight-chasers` | 2026-08-20 05:13 | Pass | Only the Midnight Chasers formal repository and its `.launch` artifacts were changed. The one-time Kimi candidate directory had no formal remote or deployment authority. |
| Handoff validation | `roblox-batch-site-launch/scripts/validate_handoffs.mjs` | 2026-08-20 05:14 | Pass | The required validator ran against `grok-research-v2.json`, `research-approved.json`, and `kimi-design-v3.json`, then exited 0 with `handoff validation passed`. Research approval SHA-256 is `5f262933b8b5b76c684fb10bdc9dd9320029d31a9aa36d91164ab89637b7d07b`; final Kimi v3 design SHA-256 is `1700ed342aabfcd90fcd62b5971c2c1f2f6d8e8b7cd6bc100c07daf60a8f67ca`. |
| Design approval | `.launch/acceptance/design-approved.json` | 2026-08-20 04:52 | Pass | Status is `approved`; final decision is `approved_pending_coordinator_acceptance`. The approval records the final design hash, responsive evidence, asset review, accessibility checks, and preservation of the commercial runtime. |
| Eight-page integration | Formal Next.js source | 2026-08-20 04:52 | Pass | Kimi v3 content is integrated through shared Next.js route/rendering modules for `/`, `/beginner-guide`, `/codes`, `/cash-boosts`, `/gamepasses`, `/maps`, `/vehicles`, and `/faq`. Trailing-slash variants permanently normalize to the same no-slash canonical pages. |
| Content guardrails | Eight formal pages | 2026-08-20 04:52 | Pass | Every page has exactly one H1 and no H1 begins with `[SUSPENSION!]`. The only promoted current code is `ThanksFor940k`; no fixed group-plus-VIP combined percentage is published. |
| Primary CTA | `https://midnight-chasers.wiki/beginner-guide` | 2026-08-20 04:52 | Pass | The largest hero action is an internal link to the beginner guide. External Roblox actions remain secondary. |
| Commercial package preservation | `components/ads/`, `lib/adsterra.generated.ts`, `lib/runtime-config.ts` | 2026-08-20 05:02 | Pass | Existing Adsterra components and runtime configuration were not edited. Local production renders retained one root-layout ad shell at 375, 768, and 1440 widths. |
| Lint | `npm run lint` | 2026-08-20 05:05 | Pass | ESLint and the site-specific content/route checks exited 0. Generated `.vercel` output is excluded from source linting. |
| Tests | `npm test` | 2026-08-20 05:05 | Pass | 5/5 tests passed: route/content structure, code and cash claims, metadata/JSON-LD, internal links/fragments, and responsive script/CSS behavior. |
| Type check | `npm run typecheck` | 2026-08-20 05:05 | Pass | TypeScript exited 0. |
| Production build | `npm run build` | 2026-08-20 05:05 | Pass | Next.js 16.1.6 production build completed. `/` was prerendered, seven `[slug]` pages were statically generated, and `robots.txt` plus `sitemap.xml` were generated. |
| Vercel production deployment | `dpl_FvLjSWGLBd2c8YU9ybdHx2GPvD51` | 2026-08-20 05:13 | Pass | Project `prj_8npNk0tMCjWhlcVGuzA3RmUDcH75` reports `target=production` and `readyState=READY`. Deployment URL is `midnight-chasers-62mf2eb7r-zhangtongxin888s-projects.vercel.app`; apex and `www` are production aliases. |
| Vercel domain verification | Apex and `www` | 2026-08-20 05:09 | Pass | `vercel domains verify ... --json` returned `status=ok`, `configured_correctly`, `misconfigured=false`, `issues=[]`, and project `verified=true` for both names. Apex remains configured by A records; `www` remains configured by CNAME. |
| DNS scope | Spaceship authoritative zone | 2026-08-20 05:09 | Pass, read-only | No DNS record or nameserver was changed in this run. Existing authoritative nameservers remain `launch1.spaceship.net` and `launch2.spaceship.net`; Vercel confirms the current A/CNAME values are correct. |
| Formal apex HTTPS | `https://midnight-chasers.wiki/` | 2026-08-20 05:08 | Pass | HTTPS returns 200 with the formal page, unique canonical, metadata, OG image, and JSON-LD. |
| Alternate-host redirect | `https://www.midnight-chasers.wiki/test/path?x=1` | 2026-08-20 05:08 | Pass | Redirects to the apex while preserving the path and query. HTTP-to-HTTPS checks also preserved path and query. |
| Formal key pages | Eight sitemap routes | 2026-08-20 05:08 | Pass | All eight pages return indexable HTTP 200 HTML with a single self-canonical. The production verifier accepted the complete set. |
| Formal robots | `https://midnight-chasers.wiki/robots.txt` | 2026-08-20 05:08 | Pass | HTTP 200; crawling is allowed and the formal sitemap URL is declared. |
| Formal sitemap | `https://midnight-chasers.wiki/sitemap.xml` | 2026-08-20 05:13 | Pass | HTTP 200 with `application/xml`. The response contains exactly eight canonical-host URLs, and a Googlebot user-agent receives the same successful response. |
| Production launch verifier | `verify_launch.py midnight-chasers.wiki` | 2026-08-20 05:08 | Pass | DNS, HTTPS, canonical, metadata, OG image, JSON-LD, crawl directives, all eight sitemap pages, and alternate-host redirects passed. It emitted one non-blocking warning that Content-Security-Policy is absent. |
| Responsive 375px | All eight formal routes | 2026-08-20 05:02 | Pass | Browser checks found no horizontal overflow, broken images, browser errors, canonical mismatch, duplicate JSON-LD, or duplicate H1. Screenshot: `screenshots/v3-home-375.png`. |
| Responsive 768px | All eight formal routes | 2026-08-20 05:02 | Pass | The same full-route checks passed at tablet width. Screenshot: `screenshots/v3-home-768.png`. |
| Responsive 1440px | All eight formal routes | 2026-08-20 05:02 | Pass | The same full-route checks passed at desktop width. Screenshot: `screenshots/v3-home-1440.png`. |
| GSC ownership | Domain property `sc-domain:midnight-chasers.wiki` | 2026-08-20 05:13 | Pass, preserved | The already verified Domain Property was used; ownership and its DNS verification were not recreated or changed. |
| GSC sitemap update | `https://midnight-chasers.wiki/sitemap.xml` | 2026-08-20 05:24 | Submitted; Google refresh pending | After no GSC CLI was available, the coordinator granted an exclusive browser lock. The exact existing sitemap was resubmitted in the matching Domain Property. The final detail refresh displayed `无法读取此站点地图` and the prior discovered count of 1, while the live XML returned HTTP 200 from both Vercel apex addresses with a Googlebot user-agent and contained exactly 8 URLs. The coordinator explicitly accepted recording this transient post-resubmission state as waiting for Google to fetch; no success or larger discovered count is claimed. The worker-created GSC tab was closed and the browser lock was released. |

## Implementation and review notes

- The Kimi HTML was not deployed as an isolated replacement. Its eight pages are now source content consumed by a shared, typed Next.js renderer, keeping routes, metadata, sitemap generation, tests, and future edits in one module boundary.
- Two design references to unapproved facts and their dependent copy were removed before approval. Officially supported gameplay descriptions were retained without turning inference into fact.
- The first Kimi v3 deployment exposed a trailing-slash redirect mismatch during formal verification. Commit `22cefc62431bf6b6bccb5bf5c3f2f8b3ba55f941` normalized route and canonical behavior; deployment `dpl_FvLjSWGLBd2c8YU9ybdHx2GPvD51` is the verified Ready result.
- Existing Adsterra runtime files were preserved. The final layout only adds the shared candidate client script and keeps the prior advertisement shell in production renders.
- GSC ownership was not redone, DNS was not touched, and no new homepage indexing request was made.

## Providers

| Role | Actual provider/model | Result |
|---|---|---|
| Research | Grok / `grok-4.6` | `grok-research-v2.json` was fact-gated through `research-approved.json`. |
| Fact and design review | Codex / `gpt-5.6-sol` | Unsupported claims were removed; final handoffs and production behavior were approved. |
| Candidate design | Kimi / `kimi-code/k3` | Kimi v3 supplied the accepted eight-page visual/content candidate. |
| Formal implementation and launch | Codex / `gpt-5.6-sol` | Integrated Next.js source, tests, SEO, deployment, domain checks, GSC resubmission, and evidence. |
| Hosting | Vercel | Production deployment is Ready on the formal apex and `www` alias. |

Final worker conclusion: **待总控验收**. The coordinator must independently recheck the fact/design approvals, commits, production deployment, eight key pages, robots, sitemap, canonicals, GSC ownership, and GSC sitemap status before declaring the site launched.
