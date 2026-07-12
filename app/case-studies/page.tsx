import type { Metadata } from 'next';
import Link from 'next/link';
import CaseStudyCard from '@/components/CaseStudyCard';

export const metadata: Metadata = {
  title: 'Case Studies — Bludot Labs',
  description: 'Production deployments across Healthcare, Higher Education, and Logistics. Read detailed case studies with real metrics.',
};

const categories = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    studies: [
      {
        tag: 'HEALTHCARE · AI REACTIVATION',
        title: 'Balaji Dental — AI Patient Reactivation',
        description: 'A multi-agent AI system to identify and reactivate dormant patients. The system classifies treatment history, generates personalised outreach, and books appointments autonomously.',
        sector: 'Healthcare',
        metrics: [
          { value: '3×', label: 'Reactivation rate vs manual' },
          { value: '<5', unit: 'min', label: 'Lead response latency' },
          { value: '87', unit: '%', label: 'Classification accuracy' },
          { value: '6', unit: 'wk', label: 'End-to-end build time' },
        ],
        href: '/case-studies/balaji-dental',
      },
    ],
  },
  {
    id: 'higher-education',
    label: 'Higher Education',
    studies: [
      {
        tag: 'HIGHER EDUCATION · OPERATIONS',
        title: 'atCampus — Campus Event & Compliance OS',
        description: 'Enterprise campus operations platform making IQAC compliance a byproduct of daily event management. Deployed at Sri Sairam Engineering College across 154 departments.',
        sector: 'Higher Education',
        metrics: [
          { value: '154', label: 'Departments on platform' },
          { value: '~0', unit: 'hr', label: 'Manual paperwork per event' },
          { value: '1-click', label: 'NAAC/AQAR export' },
          { value: '3', unit: 'wk', label: 'From audit to deployment' },
        ],
        href: '/case-studies/sairam-atcampus',
      },
    ],
  },
  {
    id: 'logistics',
    label: 'Logistics',
    studies: [
      {
        tag: 'LOGISTICS · AI AUDIT',
        title: 'Logistics AI Infrastructure Audit',
        description: 'A deep-dive architecture audit of logistics operations across a regional freight network, identifying where AI decision layers could reduce cost and improve delivery reliability.',
        sector: 'Logistics',
        metrics: [
          { value: '23', unit: '%', label: 'Projected route cost savings' },
          { value: '4', label: 'Integration points mapped' },
          { value: '11', unit: 'day', label: 'Audit-to-report cycle' },
          { value: '1', label: 'Deployment roadmap delivered' },
        ],
        href: '/case-studies/logistics-ai-audit',
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow">CASE STUDIES</p>
          <h1>Production Systems, Real Metrics</h1>
          <p>Every system here is running in production, validated against real operational data. We don&apos;t publish demos or prototypes.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          {categories.map((cat) => (
            <div key={cat.id} style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                <p className="eyebrow">{cat.label}</p>
              </div>
              {cat.studies.map((study) => (
                <CaseStudyCard key={study.href} {...study} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>YOUR CASE STUDY NEXT</p>
          <h2 style={{ marginTop: '24px' }}>Ready to build something that ships?</h2>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">Request a Workflow Audit <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
