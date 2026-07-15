import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Bludot Labs",
  description:
    "Meet the team behind Bludot Labs — an engineering-led company building AI-native software for healthcare, logistics and higher education.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand workflows, stakeholders, bottlenecks and operational reality.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Design systems around existing operations instead of forcing organizations to change.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Ship production-ready software rapidly and iterate using real operational feedback.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Transform proven systems into platforms capable of serving entire industries.",
  },
];

const FOUNDERS = [
  {
    photo: "/ananth.jpg",
    name: "Ananthaiyan Pillai",
    role: "FOUNDER & CEO",
    bio: "Leads product strategy, enterprise partnerships and customer discovery. Focused on understanding operational systems before engineering software around them.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ananthaiyan-pillai-4074211b9/" },
      { label: "X", href: "https://x.com/ananthjpillai" },
      { label: "Instagram", href: "https://www.instagram.com/ananthaiyan/" },
    ],
  },
  {
    photo: "/rashim.jpg",
    name: "Rashim RB",
    role: "CO-FOUNDER & CTO",
    bio: "Leads systems architecture, backend engineering and infrastructure. Responsible for building reliable, production-grade platforms that scale with enterprise operations.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rashimrb/" },
      { label: "X", href: "https://x.com/rashimbuilds" },
      { label: "Instagram", href: "https://www.instagram.com/raashhhim" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />

        <div className="wrap">
          <p className="eyebrow">ABOUT BLUDOT LABS</p>

          <h1 className="hero-heading">
            A small team engineering software for organizations that can&apos;t
            afford operational bottlenecks.
          </h1>

          <p className="hero-sub">
            Bludot Labs is an engineering-led company building operational
            software across healthcare, logistics and higher education. Every
            product begins inside a real workflow, every engagement starts
            with customer discovery, and every system is designed to become
            part of how an organization operates.
          </p>

          <div className="hero-actions">
            <Link href="/case-studies" className="btn btn-primary">
              Explore Case Studies
              <span className="arrow">→</span>
            </Link>

            <Link href="/contact" className="btn btn-ghost">
              Start a Conversation
            </Link>
          </div>

          <div className="hero-photo">
            <Image
              src="/team/bludot-team.jpg"
              alt="Bludot Labs Founding Team"
              width={1800}
              height={900}
              className="mono-image"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WHO WE ARE */}
      {/* ===================================================== */}

      <section className="page-section">
        <div className="wrap who-grid">
          <div>
            <p className="eyebrow">WHO WE ARE</p>

            <h2 className="who-heading">
              We don&apos;t build software first.
              <br />
              We understand operations first.
            </h2>
          </div>

          <div>
            <p className="body-copy">
              Bludot Labs was founded on a simple observation: most
              enterprise software fails because it is designed around
              features instead of workflows.
            </p>

            <p className="body-copy">
              Before we design interfaces, write APIs or train AI models, we
              spend time understanding how an organization actually
              operates. We sit with administrators, doctors, freight
              forwarders and operators to map how work moves through their
              business — not how software assumes it should.
            </p>

            <p className="body-copy body-copy-last">
              That philosophy has shaped everything we build — from
              healthcare operations and campus infrastructure to logistics
              intelligence. Every product in our portfolio began as a real
              operational problem before it became software.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* HOW WE WORK */}
      {/* ===================================================== */}

      <section className="page-section-alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2 className="section-heading">
                Every engagement follows the same engineering process.
              </h2>
            </div>

            <p className="section-note">
              We don&apos;t arrive with predefined software. We engineer
              systems around the way your organization already works.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="process-card">
                <p className="process-number">{step.number}</p>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FOUNDING TEAM */}
      {/* ===================================================== */}

      <section className="page-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">FOUNDING TEAM</p>
              <h2 className="section-heading">Every engagement is founder-led.</h2>
            </div>

            <p className="section-note">
              We don&apos;t hand projects to account managers. The people you
              meet during discovery are the people designing the systems
              you&apos;ll eventually deploy.
            </p>
          </div>

          <div className="founder-grid">
            {FOUNDERS.map((founder) => (
              <div key={founder.name} className="founder-card">
                <div className="founder-photo-wrap">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={800}
                    height={900}
                    className="mono-image founder-photo"
                  />
                </div>

                <div className="founder-body">
                  <p className="founder-role">{founder.role}</p>
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-bio">{founder.bio}</p>

                  <div className="founder-links">
                    {founder.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="final-cta">
        <div className="blueprint" />
        <div className="hero-glow" />

        <div className="wrap cta-wrap">
          <p className="eyebrow">START A CONVERSATION</p>

          <h2 className="cta-heading">
            Have an operational bottleneck worth engineering out?
          </h2>

          <p className="cta-sub">
            Every engagement starts the same way — with a conversation about
            how your organization actually works today.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Start a Conversation
              <span className="arrow">→</span>
            </Link>

            <Link href="/case-studies" className="btn btn-ghost">
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-heading {
          max-width: 920px;
        }

        .hero-sub {
          max-width: 720px;
          margin-top: 26px;
          font-size: 1.08rem;
          color: var(--ink-1);
          line-height: 1.85;
        }

        .hero-actions {
          display: flex;
          gap: 18px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .hero-photo {
          margin-top: 68px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--line);
        }

        .mono-image {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(1) contrast(1.08) brightness(0.97);
          transition: filter 0.5s ease, transform 0.5s ease;
        }

        .mono-image:hover {
          filter: grayscale(1) contrast(1.18) brightness(1.02);
        }

        .who-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.3fr;
          gap: 72px;
          align-items: start;
        }

        .who-heading {
          margin-top: 18px;
          max-width: 420px;
        }

        .body-copy {
          font-size: 17px;
          line-height: 1.95;
          color: var(--ink-1);
          margin-bottom: 30px;
        }

        .body-copy-last {
          margin-bottom: 0;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 64px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .section-heading {
          margin-top: 16px;
          max-width: 600px;
        }

        .section-note {
          max-width: 400px;
          color: var(--ink-1);
          line-height: 1.8;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .process-card {
          padding: 32px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: var(--bg-1);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .process-card:hover {
          border-color: var(--blue);
          transform: translateY(-4px);
        }

        .process-number {
          font-family: var(--mono);
          color: var(--blue);
          margin-bottom: 16px;
          font-size: 12px;
        }

        .process-title {
          margin-bottom: 16px;
        }

        .process-desc {
          line-height: 1.8;
          color: var(--ink-1);
        }

        .founder-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
        }

        .founder-card {
          border: 1px solid var(--line);
          border-radius: 22px;
          overflow: hidden;
          background: var(--bg-1);
          transition: border-color 0.3s ease;
        }

        .founder-card:hover {
          border-color: var(--blue);
        }

        .founder-photo-wrap {
          overflow: hidden;
          height: 440px;
        }

        .founder-photo {
          height: 100%;
          object-fit: cover;
        }

        .founder-card:hover .founder-photo {
          transform: scale(1.03);
        }

        .founder-body {
          padding: 32px;
        }

        .founder-role {
          color: var(--blue);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }

        .founder-name {
          font-size: 28px;
          margin-bottom: 16px;
        }

        .founder-bio {
          line-height: 1.9;
          color: var(--ink-1);
          margin-bottom: 24px;
        }

        .founder-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-wrap {
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
        }

        .cta-heading {
          margin-top: 18px;
        }

        .cta-sub {
          max-width: 520px;
          margin: 22px auto 0;
          color: var(--ink-1);
          line-height: 1.85;
        }

        .cta-wrap .hero-actions {
          justify-content: center;
        }

        @media (max-width: 900px) {
          .who-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .founder-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .process-grid {
            grid-template-columns: 1fr;
          }

          .founder-photo-wrap {
            height: 360px;
          }
        }
      `}</style>
    </main>
  );
}