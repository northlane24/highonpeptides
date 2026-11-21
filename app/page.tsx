const topics = [
  { number: '01', title: 'Metabolic research', description: 'A closer look at incretin biology, metabolism and emerging clinical evidence.', icon: '↗' },
  { number: '02', title: 'Skin & aesthetics', description: 'Peptide science in skin biology, cosmetic research and tissue signaling.', icon: '✳' },
  { number: '03', title: 'Recovery & repair', description: 'What researchers are investigating—and where the evidence still falls short.', icon: '⌁' },
  { number: '04', title: 'Longevity science', description: 'Separating promising hypotheses from premature claims about aging.', icon: '◌' },
];
const guideCards = [
  { label: 'THE BASICS', title: 'Peptides, explained', text: 'A clear introduction to what peptides are, how they differ from proteins, and why they matter in biology.', time: '6 MIN READ', mark: '01' },
  { label: 'HOW SCIENCE WORKS', title: 'From lab discovery to medicine', text: 'Understand preclinical research, clinical trial phases and what it takes for a therapy to become approved.', time: '8 MIN READ', mark: '02' },
  { label: 'READ THE EVIDENCE', title: 'How to read a peptide study', text: 'A practical guide to study design, endpoints, sample sizes and the limits of interpreting a headline.', time: '7 MIN READ', mark: '03' },
];

export default function Home() {
  return <main>
    <div className="topline"><span>INDEPENDENT SCIENCE & INDUSTRY INTELLIGENCE</span><span>Evidence first. Hype last.</span></div>
    <header className="header">
      <a className="brand" href="#top"><span className="brand-mark"><i/><i/><i/></span><span>HIGH<span className="brand-light">ON</span>PEPTIDES</span></a>
      <nav><a href="#latest">Latest</a><a href="#explore">Explore</a><a href="#library">Library</a><a href="#learn">Learn</a></nav>
      <a className="header-cta" href="#about">About us <span>↗</span></a>
    </header>
    <section className="hero" id="top">
      <div className="hero-left">
        <div className="eyebrow"><span className="live-dot"/> THE PEPTIDE LANDSCAPE, IN FOCUS</div>
        <h1>The peptide<br/>industry. <em>Decoded.</em></h1>
        <p className="hero-copy">Science moves fast. We make it easier to follow—bringing research, regulation and industry signals into one clear picture.</p>
        <div className="hero-actions"><a className="button-primary" href="#latest">Explore the latest <span>↗</span></a><a className="text-link" href="#learn">New to peptides? Start here <span>→</span></a></div>
        <div className="hero-footnote"><span>SCIENCE</span><b>·</b><span>RESEARCH</span><b>·</b><span>INDUSTRY</span></div>
      </div>
      <div className="hero-art" aria-label="Abstract scientific illustration">
        <div className="orb orb-one"/><div className="orb orb-two"/><div className="orb orb-three"/>
        <div className="art-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/>
        <div className="art-label label-top"><span>PEPTIDE SIGNALS</span><b>01 / 03</b></div>
        <div className="art-label label-bottom"><span>SCIENCE IN CONTEXT</span><b>HOP · EST. 2026</b></div>
      </div>
    </section>
    <section className="ticker"><span className="ticker-tag">OUR LENS</span><p>Follow the evidence <b>✳</b> Understand the context <b>✳</b> Know what’s established—and what isn’t</p></section>
    <section className="section latest" id="latest">
      <div className="section-head"><div><p className="kicker">01 / THE SIGNAL</p><h2>What’s happening<br/><em>right now.</em></h2></div><p className="section-intro">Research updates, regulatory shifts and industry moves worth paying attention to. We’re building a sourced daily briefing—no noise, no filler.</p></div>
      <div className="latest-placeholder"><div className="placeholder-icon">◎</div><div><h3>The daily intelligence feed is being initialized.</h3><p>Stories will appear here after source review. We won’t publish a headline just to fill a space.</p></div><span className="status-pill">SOURCE-LED UPDATES</span></div>
    </section>
    <section className="section explore" id="explore">
      <div className="section-head"><div><p className="kicker">02 / EXPLORE THE SCIENCE</p><h2>Curiosity, with<br/><em>context.</em></h2></div><p className="section-intro">Explore the areas researchers are studying. Topics are a map of scientific interest—not a promise of benefit or effectiveness.</p></div>
      <div className="topic-grid">{topics.map((t)=><a className="topic-card" href="#library" key={t.number}><span className="topic-num">{t.number}</span><span className="topic-icon">{t.icon}</span><h3>{t.title}</h3><p>{t.description}</p><span className="card-arrow">↗</span></a>)}</div>
    </section>
    <section className="section library" id="library">
      <div className="section-head"><div><p className="kicker">03 / THE LIBRARY</p><h2>Know your<br/><em>molecules.</em></h2></div><p className="section-intro">A growing reference for peptide profiles, their research history, evidence landscape and regulatory context.</p></div>
      <div className="library-feature"><div className="library-visual"><div className="hex hex1"/><div className="hex hex2"/><div className="hex hex3"/><span className="visual-caption">MOLECULAR NOTES<br/>VOL. 001</span></div><div className="library-content"><p className="kicker">REFERENCE COLLECTION · IN DEVELOPMENT</p><h3>Start with the<br/><em>fundamentals.</em></h3><p>Profiles will distinguish approved medicines, clinical-stage candidates, early research and compounds with limited evidence.</p><a href="#learn" className="arrow-link">Explore the guides <span>→</span></a></div></div>
    </section>
    <section className="section learn" id="learn">
      <div className="section-head"><div><p className="kicker">04 / PEPTIDE 101</p><h2>Build your<br/><em>understanding.</em></h2></div><p className="section-intro">Clear, approachable guides for making sense of the science—without a degree, and without the marketing spin.</p></div>
      <div className="guide-grid">{guideCards.map((g)=><article className="guide-card" key={g.mark}><div className="guide-top"><span>{g.label}</span><span>{g.mark}</span></div><h3>{g.title}</h3><p>{g.text}</p><div className="guide-bottom"><span>{g.time}</span><span>↗</span></div></article>)}</div>
    </section>
    <section className="about-strip" id="about"><div className="about-symbol">H<span>+</span>P</div><div><p className="kicker">OUR EDITORIAL PROMISE</p><h2>Evidence is the story.<br/><em>Not the footnote.</em></h2></div><p>We distinguish established medicine from investigation, human evidence from preclinical findings, and data from speculation. Informational content is not medical advice.</p></section>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark"><i/><i/><i/></span><span>HIGH<span className="brand-light">ON</span>PEPTIDES</span></a><span>THE PEPTIDE INDUSTRY. DECODED.</span><span>© 2026 HIGHONPEPTIDES</span></footer>
  </main>;
}
