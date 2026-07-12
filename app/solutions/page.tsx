import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions — Bludot Labs',
  description: 'Bludot builds AI systems for Healthcare, Higher Education, and Logistics. Explore our sector-specific solutions.',
};

const solutions = [
  {
    index: '01',
    tag: '§ LOGISTICS',
    href: '/solutions/logistics',
    title: 'Freight & Network Intelligence',
    description: 'Decision-layer systems built on top of national logistics infrastructure. We turn fragmented fleet, freight, and compliance data into real-time operational choices.',
    problems: ['Freight decisions made on instinct', 'Fragmented data across carriers', 'No visibility into route efficiency', 'Manual compliance reporting'],
    outcomes: ['Real-time routing decisions', 'ULIP/government API integration', 'Unified fleet & freight dashboard', 'Automated audit trails'],
  },
  {
    index: '02',
    tag: '§ HEALTHCARE',
    href: '/solutions/healthcare',
    title: 'Clinical & Practice Operations',
    description: 'Financial and clinical operating systems that close the gap between care delivered and revenue captured. Built for dental clinics, hospitals, and specialist practices.',
    problems: ['Revenue leakage at front desk', 'Dormant patients not reactivated', 'Manual financial tracking', 'No treatment-level visibility'],
    outcomes: ['Per-patient revenue tracking', 'AI-driven patient reactivation', 'Daily financial OS', 'Compliance-ready records'],
  },
  {
    index: '03',
    tag: '§ HIGHER EDUCATION',
    href: '/solutions/higher-education',
    title: 'Campus Operations & Compliance',
    description: 'Enterprise platforms that make IQAC compliance a byproduct of daily event management — not an annual scramble. Built for autonomous colleges.',
    problems: ['Manual approval workflows', 'NAAC/AQAR reports built from scratch', 'Event data in spreadsheets', 'Budget visibility gaps'],
    outcomes: ['HOD → IQAC digital approvals', 'One-click NAAC/AQAR exports', 'Centralised event database', 'Real-time budget tracking'],
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow">SOLUTIONS</p>
          <h1>Built for Industries Where Failure Is Not an Option</h1>
          <p>We operate in sectors where operational failure has real consequences. Every system we build is designed for that level of accountability.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          {solutions.map((s) => (
            <div key={s.index} style={{ marginBottom: '80px', paddingBottom: '80px', borderBottom: '1px solid var(--line)' }}>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>{s.tag}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
                <div>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', marginBottom: '20px' }}>{s.title}</h2>
                  <p style={{ color: 'var(--ink-1)', fontSize: '16px', lineHeight: '1.75', marginBottom: '32px' }}>{s.description}</p>
                  <Link href={s.href} className="btn btn-primary">Explore {s.title.split(' ')[0]} Solutions <span className="arrow">→</span></Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                  <div style={{ padding: '24px', borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Problems We Solve</p>
                    {s.problems.map((p) => <p key={p} style={{ color: 'var(--ink-1)', fontSize: '13px', lineHeight: '1.6', marginBottom: '8px' }}>↳ {p}</p>)}
                  </div>
                  <div style={{ padding: '24px', borderBottom: '1px solid var(--line)' }}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Outcomes We Deliver</p>
                    {s.outcomes.map((o) => <p key={o} style={{ color: 'var(--ink-0)', fontSize: '13px', lineHeight: '1.6', marginBottom: '8px' }}>✓ {o}</p>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>WORK WITH US</p>
          <h2 style={{ marginTop: '24px' }}>Ready to map your workflow?</h2>
          <p>We start every engagement with a structured workflow audit — no pitch, no proposals.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">Request a Workflow Audit <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
