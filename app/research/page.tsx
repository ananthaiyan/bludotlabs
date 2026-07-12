import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research — Bludot Labs',
  description: 'Technical articles, engineering insights, and industry analysis from the Bludot Labs team.',
};

const articles = [
  {
    category: 'LOGISTICS · AI',
    title: "Why India's Logistics Stack Needs an AI Decision Layer",
    date: 'July 2026',
    readTime: '8 min read',
    excerpt: 'ULIP gives us the data. The question is: who processes it fast enough to act? An argument for autonomous decision-layer systems in freight operations.',
    href: '/research/india-logistics-ai-decision-layer',
    featured: true,
  },
  {
    category: 'ENGINEERING · ARCHITECTURE',
    title: 'Understanding ULIP: What the Data Tells Us',
    date: 'June 2026',
    readTime: '6 min read',
    excerpt: 'A technical breakdown of the Unified Logistics Interface Platform — what data flows through it, what gaps exist, and what opportunities that creates for intelligent systems.',
    href: '/research/understanding-ulip',
    featured: false,
  },
  {
    category: 'HEALTHCARE · AI',
    title: 'The Revenue Leak Nobody Talks About in Dental Practice',
    date: 'May 2026',
    readTime: '5 min read',
    excerpt: 'Most dental clinics lose 20–40% of potential monthly revenue to dormant patient lists. Here is the anatomy of that leak and how AI changes the equation.',
    href: '/research/dental-revenue-leak',
    featured: false,
  },
  {
    category: 'HIGHER EDUCATION · COMPLIANCE',
    title: 'NAAC in 2026: Why Manual Compliance Is Broken',
    date: 'April 2026',
    readTime: '7 min read',
    excerpt: 'Autonomous colleges spend thousands of person-hours producing NAAC documentation that should be a natural byproduct of how events are run. Here is a better architecture.',
    href: '/research/naac-compliance-architecture',
    featured: false,
  },
];

export default function ResearchPage() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main>
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow">RESEARCH</p>
          <h1>Engineering Thinking, Written Down</h1>
          <p>Technical articles, industry analysis, and architecture notes from the team that builds the systems.</p>
        </div>
      </section>

      {featured && (
        <section className="page-section-alt">
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--blue)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>FEATURED · {featured.category}</p>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '20px' }}>{featured.title}</h2>
                <p style={{ color: 'var(--ink-1)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '32px' }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-2)' }}>{featured.date}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-2)' }}>{featured.readTime}</span>
                </div>
                <Link href={featured.href} className="btn btn-primary">Read Article <span className="arrow">→</span></Link>
              </div>
              <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--ink-2)', textAlign: 'center', lineHeight: '1.8' }}>
                  India&apos;s freight network generates<br />
                  <span style={{ fontFamily: 'var(--display)', fontSize: '42px', color: 'var(--blue)', fontWeight: '700', display: 'block', margin: '16px 0' }}>2.3B</span>
                  data points per day via ULIP.<br />
                  Almost none of it is acted on in real time.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="page-section">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: '40px' }}>ALL ARTICLES</p>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {rest.map((article) => (
              <Link key={article.href} href={article.href} style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'start', gap: '32px', padding: '32px 0', borderBottom: '1px solid var(--line)', transition: 'background .2s ease' }} className="arch-row">
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>{article.category}</p>
                  <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{article.title}</h3>
                  <p style={{ color: 'var(--ink-1)', fontSize: '13.5px', lineHeight: '1.7' }}>{article.excerpt}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end', minWidth: '100px' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-2)' }}>{article.date}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-2)' }}>{article.readTime}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--blue)', marginTop: '8px' }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
