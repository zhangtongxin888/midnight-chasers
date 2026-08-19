# Midnight Chasers launch evidence

Run: `midnight-chasers-20260819-224500`

Formal domain: `https://midnight-chasers.wiki`

Worker status: **待总控验收** — all worker-side launch gates are complete; final acceptance remains with the coordinator.

## Evidence table

| Check | Formal URL or resource | Checked at (UTC) | Actual result | Evidence |
|---|---|---:|---|---|
| Independent repository | `https://github.com/zhangtongxin888/midnight-chasers` | 2026-08-19 16:21 | Pass | Commit `96df716eabe8e5439d19f4f46a8156ff581c7828` was fast-forwarded and pushed to `main`. |
| Repository isolation | Local formal repository | 2026-08-19 16:21 | Pass | Only Midnight Chasers source and its `.launch` artifacts were changed; no other game repository was touched. |
| Vercel Git binding | Project `prj_8npNk0tMCjWhlcVGuzA3RmUDcH75` | 2026-08-19 19:25 | Pass | Vercel project link is GitHub `zhangtongxin888/midnight-chasers`, production branch `main`, and the promoted production deployment references commit `a156bb89...`. |
| Production deployment | Deployment `dpl_FStjNPk5iJHLE5BzSgiFdCZv8jcS` | 2026-08-19 19:25 | Pass | Vercel reports `target=production`, `readyState=READY`, and `readySubstate=PROMOTED`. The Vercel hostname is deployment evidence only, not the formal site address. |
| Local lint | `npm run lint` | 2026-08-19 16:29 | Pass | ESLint completed with exit code 0. |
| Local type check | `npm run typecheck` | 2026-08-19 16:29 | Pass | TypeScript completed with exit code 0. |
| Local tests | `npm test` | 2026-08-19 16:29 | Pass | 3/3 tests passed: internal primary CTA, required guide sections, and canonical crawl configuration. |
| Local production build | `npm run build` | 2026-08-19 16:29 | Pass | Next.js 16.1.6 build completed; `/`, `/robots.txt`, and `/sitemap.xml` were statically generated. |
| Build routes vs sitemap | `.next/server/app-paths-manifest.json` and sitemap | 2026-08-19 16:23 | Pass | The only public indexable HTML route is `/`; the sitemap contains exactly that canonical URL. Framework error pages and metadata routes are intentionally excluded. |
| Candidate isolation | `/Users/zhangtongxin/sites/midnight-chasers-kimi-candidate` | 2026-08-19 16:28 | Pass | Candidate contained only listed current-game frontend/config files, no `.git`, no remote, and no detected credentials. Formal implementation was selectively rewritten. |
| Requested handoff validation | `.launch/design/kimi-design-v1.json` | 2026-08-19 16:28 | Fail | The exact requested validator exited 1 with `design primary CTA must lead to the beginner guide`; this package was not silently approved. |
| Fallback handoff validation | `.launch/design/codex-design-v1.json` | 2026-08-19 16:28 | Pass | The same validator exited 0 with `handoff validation passed`. |
| Primary CTA | `/#quick-start` | 2026-08-19 19:23 | Pass by rendered interaction | The largest hero button is `Start the beginner guide`; its target is `#quick-start`. At 768px, clicking it produced the formal URL `https://midnight-chasers.wiki/#quick-start`. The Roblox link remains a smaller secondary action. |
| Required content | Home page sections | 2026-08-19 16:29 | Pass by source/test | Quick start, core gameplay loop, advanced route, common mistakes, FAQ, and natural internal links are present. |
| Responsive 375px | `https://midnight-chasers.wiki/` | 2026-08-19 19:18 | Pass | Rendered and visually inspected at 375px. `clientWidth`, `innerWidth`, and `scrollWidth` were all 375; no horizontal overflow or cutoff was present. The largest CTA was the 347x59px internal beginner-guide button. |
| Responsive 768px | `https://midnight-chasers.wiki/` | 2026-08-19 19:19 | Pass | Rendered and visually inspected at 768px. All three page-width measurements were 768; the one-column layout was legible with no horizontal overflow, and the internal beginner-guide CTA was successfully clicked. |
| Responsive 1440px | `https://midnight-chasers.wiki/` | 2026-08-19 19:19 | Pass | Rendered and visually inspected at 1440px. All three page-width measurements were 1440; the two-column layout was legible with no horizontal overflow. The largest CTA was the 247.59x59px internal beginner-guide button. |
| Deployment home page | Vercel production alias | 2026-08-19 16:27 | Pass | HTTP 200, `text/html`, 40,046 bytes. This alias is not recorded as the formal address. |
| Deployment robots | Vercel production alias `/robots.txt` | 2026-08-19 16:27 | Pass | HTTP 200, `text/plain`; allows crawling and declares `https://midnight-chasers.wiki/sitemap.xml`. |
| Deployment sitemap | Vercel production alias `/sitemap.xml` | 2026-08-19 16:27 | Pass | HTTP 200, `application/xml`; 1 canonical HTML URL. |
| Deployment OG asset | Vercel production alias `/og.svg` | 2026-08-19 16:27 | Pass | HTTP 200, `image/svg+xml`; original artwork is present. |
| Canonical | Initial production HTML | 2026-08-19 16:28 | Pass in deployed artifact | Exactly one canonical tag points to `https://midnight-chasers.wiki`; OG image is absolute and JSON-LD is present once. |
| Security headers | Vercel production alias | 2026-08-19 16:28 | Pass | `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Frame-Options` were returned. |
| DNS ownership/attachment | Vercel project domains | 2026-08-19 16:25 | Pass | Apex and `www` were added to the correct Vercel project; Vercel reports ownership as current scope and project verification true. |
| DNS write | Spaceship authoritative zone | 2026-08-19 19:21 | Pass | The public parking apex A values `34.216.117.25` and `54.149.79.189` were replaced with the complete Vercel set `216.198.79.1` and `64.29.17.1`; `www` CNAME was added as `89c66f358ec50681.vercel-dns-017.com.`. The GSC TXT record was appended at `@`. Nameservers remained `launch1.spaceship.net` and `launch2.spaceship.net`; the initial custom-record list had no MX, TXT, CAA, or unrelated subdomain records to alter. |
| DNS propagation | Authoritative NS, `1.1.1.1`, and `8.8.8.8` | 2026-08-19 19:25 | Pass | Both authoritative nameservers and both public resolvers returned the two apex A values, the exact `www` CNAME, and the appended Google verification TXT record. |
| Vercel domain verification | Apex and `www` | 2026-08-19 19:25 | Pass | `vercel domains verify` returned `status=ok`, `reason=configured_correctly`, `misconfigured=false`, `issues=[]`, and `conflicts=[]` for both domains. Apex was configured by A; `www` was configured by CNAME. |
| TLS certificate | Apex and `www` | 2026-08-19 19:25 | Pass | Vercel certificate `cert_AHZRyRL8AGAcMR0RkSHubmpH` covers both names, renews automatically, and expires in 90 days. TLS 1.3 handshakes to both apex A addresses verified successfully with CN `midnight-chasers.wiki`. |
| Main-domain HTTPS | `https://midnight-chasers.wiki/` | 2026-08-19 19:25 | Pass | Formal apex HTTPS returns 200. |
| `www` redirect | `https://www.midnight-chasers.wiki/test/path?x=1` | 2026-08-19 19:25 | Pass | HTTPS returns 308 to `https://midnight-chasers.wiki/test/path?x=1`, preserving the full path and query. |
| Formal key page | `https://midnight-chasers.wiki/` | 2026-08-19 19:25 | Pass | Formal homepage returns indexable HTML with one canonical URL, complete social metadata, valid JSON-LD, and the required guide sections. |
| Formal robots | `https://midnight-chasers.wiki/robots.txt` | 2026-08-19 19:25 | Pass | HTTP 200, `text/plain`; crawling is allowed and the formal sitemap URL is declared. |
| Formal sitemap HTTP and URL count | `https://midnight-chasers.wiki/sitemap.xml` | 2026-08-19 19:25 | Pass | HTTP 200, `application/xml`; exactly 1 canonical-host URL is present and it returns indexable 200 HTML with a self-canonical. |
| Production launch verifier | `verify_launch.py midnight-chasers.wiki` | 2026-08-19 19:25 | Pass | The required verifier passed DNS, canonical HTTPS, metadata, JSON-LD, crawl, sitemap, one-page indexability, and alternate-host redirects. It emitted one non-blocking warning that Content-Security-Policy is absent. |
| GSC ownership | Domain property `sc-domain:midnight-chasers.wiki` | 2026-08-19 19:22 | Pass | The full Google TXT verification record was appended without replacing another record. Search Console displayed the exact success text `已完成所有权验证` and method `域名提供商`. |
| GSC Sitemap | `https://midnight-chasers.wiki/sitemap.xml` | 2026-08-19 19:23 | Pass | Search Console first displayed `已成功提交站点地图`; the submitted-sitemap table then displayed the exact status `成功`, with 1 discovered page. |
| Homepage indexing request | `https://midnight-chasers.wiki/` | 2026-08-19 19:23 | Pass | Requested exactly once. Search Console displayed `已请求编入索引` and confirmed that the URL was added to the priority crawl queue. |

## Launch completion record

The coordinator later released the browser lock exclusively for Midnight Chasers. The worker resumed from this document, used the existing authenticated Chrome session only for the target Spaceship zone and GSC property, and closed both target tabs immediately after completion. No other site's DNS or GSC state was changed.

The recovery checklist completed as follows:

1. Rechecked Vercel recommendations immediately before writing DNS; the complete recommended set was unchanged.
2. Replaced only the conflicting parking web records, added the required `www` CNAME, and later appended the GSC TXT record. Nameservers were not changed.
3. Verified propagation through both authoritative nameservers, Cloudflare DNS, Google DNS, and Vercel until both domains reported `misconfigured=false`.
4. Issued and verified TLS, tested the apex and path-preserving `www` redirect, and passed the formal-domain launch verifier.
5. Verified the GSC Domain Property, submitted the formal sitemap to exact status `成功`, and requested homepage indexing once.
6. Rendered and approved the formal homepage at 375, 768, and 1440 widths; the largest actionable CTA enters the internal beginner guide.

## Providers and fallback

| Role | Actual provider/model | Result |
|---|---|---|
| Research | Grok / `grok-4.6` | Research package supplied and fact-gated. |
| Fact review | Codex / `gpt-5.6-sol` | Approval file accepted identity, developer, and enough guide facts; rejected unsupported compound claims. |
| Design | Codex fallback / `gpt-5.6-sol` | Kimi package failed validation; the recorded Codex fallback package passed. |
| Formal implementation | Codex / `gpt-5.6-sol` | Rewrote and shipped the production source, tests, SEO, deployment configuration, and Vercel project. |
| Hosting | Vercel | Production deployment Ready and Git-bound; formal DNS, TLS, apex HTTPS, and `www` redirect passed. |

Final worker conclusion: **待总控验收**. All requested worker-side DNS, TLS, formal-site, rendered viewport, GSC ownership, sitemap, and one-time indexing checks passed; the coordinator retains final acceptance authority.
