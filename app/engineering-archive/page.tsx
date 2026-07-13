import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Innovation Archive — Bludot Labs',
  description:
    'The engineering history behind Bludot Labs. Every project here shaped how we build enterprise systems today.',
};

const archived = [
  {
    code: 'A1',
    name: 'BlueLink',
    year: '2023',
    description:
      'IoT-based domestic water management system built to monitor household water usage, detect leakages, and provide consumption analytics through connected sensors and a centralized dashboard.',
    learnings: [
      'Building reliable IoT data pipelines',
      'Designing real-time monitoring dashboards',
      'Deploying hardware-software systems in the real world',
    ],
  },
  {
    code: "A2",
    name: "SwachOrbit",
    year: "2023",
    description:
      "An orbital debris mitigation concept that won First Prize at IIT Madras. Today, SwachOrbit exists as a live interactive dashboard for monitoring space debris, visualizing orbital decay, and exploring mission planning for sustainable deorbiting of defunct satellites.",
    learnings: [
      "Orbital mechanics and debris modelling",
      "Mission planning for active debris removal",
      "Interactive aerospace data visualization",
    ],
  },
  {
    code: 'A3',
    name: 'Project Velocity',
    year: '2025',
    description:
      'Early logistics optimisation research exploring vehicle routing, shipment planning, and multimodal freight orchestration. This work eventually evolved into the Wareabouts thesis.',
    learnings: [
      'Constraint-based route optimisation',
      'Understanding logistics operations',
      'The importance of operational coordination over transportation',
    ],
  },
  {
    code: 'A4',
    name: 'Early Healthcare Systems',
    year: '2025',
    description:
      'A collection of internal healthcare tools including financial dashboards, patient management workflows, and clinic operations software that ultimately evolved into Dentura.',
    learnings: [
      'Healthcare workflow automation',
      'Designing software for clinical operations',
      'Building systems around real operator feedback',
    ],
  },
];

export default function InnovationArchivePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />

        <div className="wrap">
          <p className="eyebrow">ENGINEERING ARCHIVE</p>

          <h1>Every Product Has a Story.</h1>

          <p>
            Before our production platforms came years of prototypes,
            experiments, hackathons, research projects, and customer
            conversations. These projects weren't failures—they became the
            engineering principles behind Bludot Labs.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {archived.map((project) => (
              <div
                key={project.code}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1.2fr 1fr',
                  gap: '56px',
                  padding: '56px 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'start',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '11px',
                      color: 'var(--ink-2)',
                      marginBottom: '10px',
                    }}
                  >
                    {project.code}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      color: 'var(--ink-2)',
                    }}
                  >
                    {project.year}
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '24px',
                      marginBottom: '16px',
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    style={{
                      color: 'var(--ink-1)',
                      fontSize: '15px',
                      lineHeight: '1.8',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      color: 'var(--blue)',
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      marginBottom: '18px',
                    }}
                  >
                    Engineering Lessons
                  </p>

                  {project.learnings.map((lesson) => (
                    <p
                      key={lesson}
                      style={{
                        color: 'var(--ink-1)',
                        fontSize: '13px',
                        lineHeight: '1.7',
                        marginBottom: '10px',
                        paddingLeft: '14px',
                        borderLeft: '1px solid var(--line-strong)',
                      }}
                    >
                      ↳ {lesson}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '64px 0',
          background: 'var(--bg-1)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div
          className="wrap"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--ink-2)',
                marginBottom: '8px',
              }}
            >
              TODAY
            </p>

            <h3 style={{ fontSize: '22px' }}>
              Those experiments became enterprise products.
            </h3>
          </div>

          <Link href="/products" className="btn btn-ghost">
            Explore Products <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}