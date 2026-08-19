# Midnight Chasers launch evidence

Run: `midnight-chasers-20260819-224500`

Formal domain: `https://midnight-chasers.wiki`

Worker status: **待总控验收** — this is not a claim that the site is live.

## Evidence table

| Check | Formal URL or resource | Checked at (UTC) | Actual result | Evidence |
|---|---|---:|---|---|
| Independent repository | `https://github.com/zhangtongxin888/midnight-chasers` | 2026-08-19 16:21 | Pass | Commit `96df716eabe8e5439d19f4f46a8156ff581c7828` was fast-forwarded and pushed to `main`. |
| Repository isolation | Local formal repository | 2026-08-19 16:21 | Pass | Only Midnight Chasers source and its `.launch` artifacts were changed; no other game repository was touched. |
| Vercel Git binding | Project `prj_8npNk0tMCjWhlcVGuzA3RmUDcH75` | 2026-08-19 16:27 | Pass | Vercel project link is GitHub `zhangtongxin888/midnight-chasers`, production branch `main`, and production metadata references commit `96df716e...`. |
| Production deployment | Deployment `dpl_FqRZTvBC1BzwakvqzhiTXm11pWT5` | 2026-08-19 16:27 | Pass | Vercel reports `target=production`, `readyState=READY`, and `readySubstate=PROMOTED`. The Vercel hostname is deployment evidence only, not the formal site address. |
| Local lint | `npm run lint` | 2026-08-19 16:29 | Pass | ESLint completed with exit code 0. |
| Local type check | `npm run typecheck` | 2026-08-19 16:29 | Pass | TypeScript completed with exit code 0. |
| Local tests | `npm test` | 2026-08-19 16:29 | Pass | 3/3 tests passed: internal primary CTA, required guide sections, and canonical crawl configuration. |
| Local production build | `npm run build` | 2026-08-19 16:29 | Pass | Next.js 16.1.6 build completed; `/`, `/robots.txt`, and `/sitemap.xml` were statically generated. |
| Build routes vs sitemap | `.next/server/app-paths-manifest.json` and sitemap | 2026-08-19 16:23 | Pass | The only public indexable HTML route is `/`; the sitemap contains exactly that canonical URL. Framework error pages and metadata routes are intentionally excluded. |
| Candidate isolation | `/Users/zhangtongxin/sites/midnight-chasers-kimi-candidate` | 2026-08-19 16:28 | Pass | Candidate contained only listed current-game frontend/config files, no `.git`, no remote, and no detected credentials. Formal implementation was selectively rewritten. |
| Requested handoff validation | `.launch/design/kimi-design-v1.json` | 2026-08-19 16:28 | Fail | The exact requested validator exited 1 with `design primary CTA must lead to the beginner guide`; this package was not silently approved. |
| Fallback handoff validation | `.launch/design/codex-design-v1.json` | 2026-08-19 16:28 | Pass | The same validator exited 0 with `handoff validation passed`. |
| Primary CTA | `/#quick-start` | 2026-08-19 16:29 | Pass by source/test | The largest hero button targets the internal beginner guide. The Roblox link is a smaller secondary action. |
| Required content | Home page sections | 2026-08-19 16:29 | Pass by source/test | Quick start, core gameplay loop, advanced route, common mistakes, FAQ, and natural internal links are present. |
| Responsive 375px | Formal page | 2026-08-19 16:30 | Blocked | Browser lock was withheld. Mobile CSS breakpoint and layout rules passed static review, but no rendered screenshot was produced. |
| Responsive 768px | Formal page | 2026-08-19 16:30 | Blocked | Browser lock was withheld. Tablet CSS breakpoint and layout rules passed static review, but no rendered screenshot was produced. |
| Responsive 1440px | Formal page | 2026-08-19 16:30 | Blocked | Browser lock was withheld. Desktop grid rules passed static review, but no rendered screenshot was produced. |
| Deployment home page | Vercel production alias | 2026-08-19 16:27 | Pass | HTTP 200, `text/html`, 40,046 bytes. This alias is not recorded as the formal address. |
| Deployment robots | Vercel production alias `/robots.txt` | 2026-08-19 16:27 | Pass | HTTP 200, `text/plain`; allows crawling and declares `https://midnight-chasers.wiki/sitemap.xml`. |
| Deployment sitemap | Vercel production alias `/sitemap.xml` | 2026-08-19 16:27 | Pass | HTTP 200, `application/xml`; 1 canonical HTML URL. |
| Deployment OG asset | Vercel production alias `/og.svg` | 2026-08-19 16:27 | Pass | HTTP 200, `image/svg+xml`; original artwork is present. |
| Canonical | Initial production HTML | 2026-08-19 16:28 | Pass in deployed artifact | Exactly one canonical tag points to `https://midnight-chasers.wiki`; OG image is absolute and JSON-LD is present once. |
| Security headers | Vercel production alias | 2026-08-19 16:28 | Pass | `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Frame-Options` were returned. |
| DNS ownership/attachment | Vercel project domains | 2026-08-19 16:25 | Pass | Apex and `www` were added to the correct Vercel project; Vercel reports ownership as current scope and project verification true. |
| DNS write | Spaceship authoritative zone | 2026-08-19 16:27 | Blocked by browser lock | Current apex A values remain parking IPs `34.216.117.25` and `54.149.79.189`; `www` has no CNAME. Required apex records are `216.198.79.1` and `64.29.17.1`; required `www` CNAME is `89c66f358ec50681.vercel-dns-017.com.` No MX, TXT, or CAA values were returned in the snapshot. |
| Main-domain HTTPS | `https://midnight-chasers.wiki/` | 2026-08-19 16:28 | Blocked | Direct TLS connection timed out while the domain still points at parking records. Formal HTTPS is not claimed. |
| `www` redirect | `https://www.midnight-chasers.wiki/` | 2026-08-19 16:28 | Blocked | `www` does not currently resolve. A permanent host redirect is configured in `vercel.json`, but cannot be verified before DNS is changed. |
| Formal key page | `https://midnight-chasers.wiki/` | 2026-08-19 16:28 | Blocked | The formal domain still serves parking infrastructure over HTTP and has no working HTTPS route to the deployment. |
| Formal robots | `https://midnight-chasers.wiki/robots.txt` | 2026-08-19 16:28 | Blocked | Cannot be verified until DNS and TLS are active. |
| Formal sitemap HTTP and URL count | `https://midnight-chasers.wiki/sitemap.xml` | 2026-08-19 16:28 | Blocked | Cannot be verified on the formal domain until DNS and TLS are active; deployed artifact contains 1 URL. |
| GSC ownership | Domain property `sc-domain:midnight-chasers.wiki` | 2026-08-19 16:30 | Blocked by browser lock | No GSC page was opened and no verification record was requested or written. Ownership is not claimed. |
| GSC Sitemap | `https://midnight-chasers.wiki/sitemap.xml` | 2026-08-19 16:30 | Blocked by browser lock | No sitemap submission was attempted. Status is not claimed as successful. |
| Homepage indexing request | `https://midnight-chasers.wiki/` | 2026-08-19 16:30 | Blocked by browser lock | No indexing request was made. |

## Browser-lock record and recovery point

At 2026-08-19 16:26 UTC, this worker requested the global browser lock after completing code, repository push, Vercel Git binding, deployment, and domain attachment. The coordinator replied that the Trade queue still owned the lock and explicitly instructed this worker not to open Chrome, Spaceship, or GSC.

Recovery begins with these already verified Vercel recommendations:

1. In the existing Spaceship DNS zone, preserve unrelated records and replace the two parking apex A records with both `216.198.79.1` and `64.29.17.1`.
2. Add `www` CNAME `89c66f358ec50681.vercel-dns-017.com.`.
3. Re-run `vercel domains verify midnight-chasers.wiki` and `vercel domains verify www.midnight-chasers.wiki`; wait for both HTTPS endpoints and the permanent `www` redirect.
4. Run the production launch verifier against the formal domain and confirm the homepage, robots, sitemap, canonical, key sections, and security headers.
5. Create or reuse the GSC Domain Property, add its exact DNS verification record without replacing unrelated TXT records, verify ownership, submit the full sitemap URL, confirm GSC shows success, and request indexing once for the canonical homepage.
6. Render and inspect the formal page at 375, 768, and 1440 widths, then change `.launch/acceptance/design-approved.json` from blocked to approved only if all visual checks pass.

## Providers and fallback

| Role | Actual provider/model | Result |
|---|---|---|
| Research | Grok / `grok-4.6` | Research package supplied and fact-gated. |
| Fact review | Codex / `gpt-5.6-sol` | Approval file accepted identity, developer, and enough guide facts; rejected unsupported compound claims. |
| Design | Codex fallback / `gpt-5.6-sol` | Kimi package failed validation; the recorded Codex fallback package passed. |
| Formal implementation | Codex / `gpt-5.6-sol` | Rewrote and shipped the production source, tests, SEO, deployment configuration, and Vercel project. |
| Hosting | Vercel | Production deployment Ready and Git-bound; formal DNS/TLS is still blocked. |

Final worker conclusion: **待总控验收**. DNS, formal HTTPS, `www`, rendered viewport checks, GSC ownership, GSC sitemap success, and indexing request remain unverified; therefore this evidence must not be interpreted as “上线成功”.
