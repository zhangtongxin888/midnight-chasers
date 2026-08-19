import { CodeCopy } from "@/components/CodeCopy";

const robloxUrl = "https://www.roblox.com/games/13822562292/Midnight-Chasers-Highway-Racing";

const guideSteps = [
  {
    time: "00:00",
    title: "Open the right experience",
    text: "Use Roblox place 13822562292 and check that the creator is Midnight In-dev.",
    tag: "Get in",
  },
  {
    time: "02:00",
    title: "Claim the community boost",
    text: "Join the official Midnight In-dev community for the advertised 25% cash boost.",
    tag: "+25%",
  },
  {
    time: "04:00",
    title: "Redeem the current code",
    text: "Open the yellow Store control under Spawn, select Codes, paste the code, and press Redeem.",
    tag: "Claim",
  },
  {
    time: "06:00",
    title: "Start with a clean drive",
    text: "Choose an available car or motorcycle and learn the road on a regular drive before taking faster traffic lines.",
    tag: "Drive",
  },
  {
    time: "10:00",
    title: "Choose your next run",
    text: "Race at speed, explore highways and cities with friends, or bring a vehicle to a meetup.",
    tag: "Repeat",
  },
];

const faqs = [
  {
    question: "What is Midnight Chasers?",
    answer:
      "Midnight Chasers: Highway Racing is a Roblox vehicle simulation by Midnight In-dev. Its official description focuses on highway driving, traffic cut-ups, racing, exploration, and vehicle meetups.",
  },
  {
    question: "Where is the Codes menu?",
    answer:
      "Look for the yellow Store control on the left side of the in-game display, below Spawn. Open Store, choose Codes, enter the code, and select Redeem.",
  },
  {
    question: "Why did a code fail?",
    answer:
      "Check capitalization and remove spaces before or after the code. Codes also expire, so an older list can be out of date.",
  },
  {
    question: "Do I need VIP to start?",
    answer:
      "No. VIP is an optional paid gamepass advertised with a 50% cash boost. The official community advertises a separate 25% cash boost for members. The source does not confirm whether they stack.",
  },
  {
    question: "Which vehicle should I buy first?",
    answer:
      "There is no verified universal best first purchase here. Begin with a vehicle available to you, learn the traffic rhythm, and choose later around the driving style you enjoy.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Midnight Chasers Wiki",
  url: "https://midnight-chasers.wiki/",
  description:
    "An independent, fact-checked beginner guide for Midnight Chasers: Highway Racing on Roblox.",
  inLanguage: "en",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to guide
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Midnight Chasers Wiki home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>
            MIDNIGHT <b>CHASERS</b>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#quick-start">Start guide</a>
          <a href="#codes">Codes</a>
          <a href="#advanced-route">Advanced route</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-play" href={robloxUrl} target="_blank" rel="noreferrer">
          Open Roblox <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero grid-bg" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span /> INDEPENDENT PLAYER GUIDE</p>
              <h1>
                OWN THE
                <em>NIGHT RUN.</em>
              </h1>
              <p className="hero-lead">
                A fact-checked route into <strong>Midnight Chasers</strong>—from your first spawn to codes,
                boosts, and the highway driving loop.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#quick-start">
                  Start the beginner guide <span aria-hidden="true">→</span>
                </a>
                <a className="button secondary" href={robloxUrl} target="_blank" rel="noreferrer">
                  Open on Roblox <span aria-hidden="true">↗</span>
                </a>
              </div>
              <dl className="hero-facts" aria-label="Verified game facts">
                <div><dt>Server cap</dt><dd>14</dd></div>
                <div><dt>Group boost</dt><dd>25%</dd></div>
                <div><dt>VIP boost</dt><dd>50%</dd></div>
              </dl>
            </div>

            <div className="night-visual" role="img" aria-label="Abstract neon highway at night">
              <span className="moon" />
              <span className="city city-left" />
              <span className="city city-right" />
              <span className="road" />
              <span className="road-edge road-left" />
              <span className="road-edge road-right" />
              <span className="lane lane-one" />
              <span className="lane lane-two" />
              <span className="car"><i /><b>MC</b></span>
              <span className="visual-chip visual-chip-top"><small>DRIVE STYLE</small><b>YOUR LINE</b></span>
              <span className="visual-chip visual-chip-bottom"><small>SERVER CAP</small><b>14 PLAYERS</b></span>
            </div>
          </div>
        </section>

        <div className="status-bar">
          <div className="shell">
            <span className="verified">✓ FACT-CHECKED GUIDE</span>
            <span>PLACE ID <b>13822562292</b></span>
            <span>DEVELOPER <b>MIDNIGHT IN-DEV</b></span>
            <span>CHECKED <b>AUG 19, 2026</b></span>
          </div>
        </div>

        <section className="section grid-bg" id="quick-start">
          <div className="shell">
            <div className="section-heading split">
              <div>
                <p className="kicker">STARTER ROUTE / 01</p>
                <h2>YOUR FIRST <em>10 MINUTES</em></h2>
              </div>
              <p>Five simple moves based on approved game facts—without invented starter cars, prices, or grind routes.</p>
            </div>
            <ol className="timeline">
              {guideSteps.map((step, index) => (
                <li key={step.time}>
                  <span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <time>{step.time}</time>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  <span className="step-tag">{step.tag}</span>
                </li>
              ))}
            </ol>
            <div className="section-next">
              <a href="#core-loop">Next: learn the driving loop <span aria-hidden="true">→</span></a>
              <span>Roblox place 13822562292</span>
            </div>
          </div>
        </section>

        <section className="codes" id="codes">
          <div className="shell codes-layout">
            <div className="code-card">
              <div className="card-top"><span className="live"><i /> CHECKED AUG 19, 2026</span><span>02 / CODES</span></div>
              <p className="code-label">CURRENT CODE IN THE OFFICIAL DESCRIPTION</p>
              <div className="code-row"><strong>ThanksFor940k</strong><CodeCopy /></div>
              <p className="code-note">Codes change and expire. The next milestone shown when checked was 960,000 likes.</p>
            </div>
            <div className="redeem">
              <p className="kicker">QUICK CLAIM</p>
              <h2>CODE IN.<br /><em>REWARD OUT.</em></h2>
              <ol>
                <li><span>1</span><div><b>Open Store</b><p>Use the yellow control on the left, under Spawn.</p></div></li>
                <li><span>2</span><div><b>Choose Codes</b><p>Open the Codes tab inside Store.</p></div></li>
                <li><span>3</span><div><b>Paste and redeem</b><p>Keep capitalization exact and remove extra spaces.</p></div></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section grid-bg" id="core-loop">
          <div className="shell">
            <div className="section-heading">
              <p className="kicker">CORE PLAY / 03</p>
              <h2>CHOOSE YOUR <em>LINE</em></h2>
            </div>
            <div className="card-grid">
              <article className="feature-card">
                <span>01</span><div className="card-icon" aria-hidden="true">↯</div>
                <h3>Cut through traffic</h3>
                <p>Weave through highway traffic in supercars, hypercars, regular cars, motorcycles, and more.</p>
                <b>NO-HESI STYLE</b>
              </article>
              <article>
                <span>02</span><div className="card-icon" aria-hidden="true">→</div>
                <h3>Race at speed</h3>
                <p>Move from a regular drive into faster runs when you are ready.</p>
                <b>RACE</b>
              </article>
              <article>
                <span>03</span><div className="card-icon" aria-hidden="true">◎</div>
                <h3>Drive together</h3>
                <p>Explore highways and cities with friends or host a meetup to show vehicles.</p>
                <b>EXPLORE + MEET</b>
              </article>
            </div>
            <div className="section-next"><a href="#advanced-route">Next: build a better route <span aria-hidden="true">→</span></a></div>
          </div>
        </section>

        <section className="boosts" id="advanced-route">
          <div className="shell boost-layout">
            <div className="boost-copy">
              <p className="kicker">ADVANCED ROUTE / 04</p>
              <h2>BUILD SPEED.<br /><em>KEEP CONTROL.</em></h2>
              <p>Progress without leaning on unsourced “best car” lists: learn a regular drive, add traffic lines, then choose the social or racing route you enjoy.</p>
              <ul>
                <li><b>1</b><span>Learn the road and traffic rhythm before chasing speed.</span></li>
                <li><b>2</b><span>Use the free community boost and current official code first.</span></li>
                <li><b>3</b><span>Treat VIP as optional; its listed benefit is a 50% cash boost.</span></li>
              </ul>
              <p className="fine-print">No VIP price or boost stacking claim is made here because those details were not confirmed.</p>
            </div>
            <div className="boost-cards">
              <article>
                <small>OFFICIAL COMMUNITY</small><strong>+25%</strong><h3>Join Midnight In-dev</h3>
                <p>Community membership is advertised with a cash boost.</p>
                <a href="https://www.roblox.com/communities/16528477" target="_blank" rel="noreferrer">Open official community ↗</a>
              </article>
              <article className="vip">
                <small>OPTIONAL VIP</small><strong>+50%</strong><h3>VIP gamepass</h3>
                <p>A paid option, not a requirement for your first run.</p><span>✓ VERIFIED BENEFIT</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section mistakes grid-bg" id="mistakes">
          <div className="shell mistake-layout">
            <div>
              <p className="kicker">PIT WALL / 05</p>
              <h2>DON&apos;T LOSE A RUN <em>BEFORE IT STARTS.</em></h2>
            </div>
            <div className="mistake-list">
              <article><span>01</span><b>!</b><div><h3>Wrong capitalization</h3><p>Enter codes exactly as shown.</p></div></article>
              <article><span>02</span><b>!</b><div><h3>Hidden spaces</h3><p>Remove spaces before and after pasted text.</p></div></article>
              <article><span>03</span><b>!</b><div><h3>Expired lists</h3><p>Old milestone codes may last only days or weeks.</p></div></article>
              <article><span>04</span><b>!</b><div><h3>Made-up specifics</h3><p>Be careful with unsourced prices, starter cars, and “best” builds.</p></div></article>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="shell faq-layout">
            <div>
              <p className="kicker">COMMON QUESTIONS / 06</p>
              <h2>QUICK<br /><em>ANSWERS.</em></h2>
              <p>Short answers grounded in the official experience page and checked guide sources.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-top">
          <div><p>READY FOR YOUR FIRST RUN?</p><h2>START WITH THE GUIDE.<br /><em>THEN OWN THE ROAD.</em></h2></div>
          <a className="button primary" href="#quick-start">Revisit the starter route <span aria-hidden="true">↑</span></a>
        </div>
        <div className="shell footer-bottom">
          <a className="brand" href="#top"><span>MIDNIGHT <b>CHASERS</b></span></a>
          <p>Independent fan-made guide. Not affiliated with Roblox or Midnight In-dev.</p>
          <div><a href={robloxUrl} target="_blank" rel="noreferrer">Official game ↗</a><a href="https://x.com/MidnightIndev" target="_blank" rel="noreferrer">Official X ↗</a></div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
