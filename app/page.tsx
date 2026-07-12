'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import CaseStudyCard from '@/components/CaseStudyCard';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const revealRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    revealRef.current = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealRef.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>

      {/* ============================= HERO ============================= */}
      <section className="hero">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: "72px",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div className="hero-content">
              <p className="eyebrow">AI-NATIVE ENGINEERING COMPANY</p>
              <h1>Engineering Autonomous Systems That Turn Bottlenecks Into <span className="accent">Revenue.</span></h1>
              <p className="hero-sub">Bludot partners with healthcare, higher-education, and logistics organizations to study how work actually moves through their operations — then engineers intelligent software systems that remove friction and deliver measurable business outcomes.</p>
              <div className="hero-ctas">
                <Link href="/contact" className="btn btn-primary">Request a Workflow Audit <span className="arrow">→</span></Link>
                <Link href="/case-studies" className="btn btn-ghost">View Case Studies</Link>
              </div>
              <div className="hero-trust reveal">
                <span className="trust-label">Deployed At</span>
                <span className="trust-item">Sri Sairam Engineering College</span>
                <span className="trust-sep">·</span>
                <span className="trust-item">Balaji Dental Hospital</span>
                <span className="trust-sep">·</span>
                <span className="trust-item">Frenzo — Live in DACH</span>
              </div>
            </div>

          </div>
          <div className="hero-meta">
            <div><p className="label">Track Record</p><p className="value">2 Deployments · 1 Live Platform</p></div>
            <div><p className="label">Core Sectors</p><p className="value">Healthcare · Higher Ed · Logistics</p></div>
            <div><p className="label">Engagement Model</p><p className="value">Discover → Design → Build → Scale</p></div>
            <div><p className="label">Studio Structure</p><p className="value">Engineering-Led, Not Agency-Led</p></div>
          </div>
        </div>
      </section>

      {/* ============================= INDUSTRIES ============================= */}
      <section className="industries" id="industries">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">01 — WHERE WE OPERATE</p>
              <h2 style={{ marginTop: '20px' }}>Trusted Across Critical Industries</h2>
            </div>
            <p>Every sector we work in shares one trait: operational failure has real consequences — for patients, for institutions, for supply chains. We build for that level of accountability.</p>
          </div>
          <div className="industry-grid reveal">
            <div className="industry">
              <span className="index-tag">§ LOGISTICS</span>
              <h3>Freight &amp; Network Intelligence</h3>
              <p>Freight decisions are still made on instinct and phone calls. We engineer decision-layer systems on top of national logistics infrastructure that turn fragmented data into real-time operational choices.</p>
              <ul>
                <li><span>Network integration</span><span>Government logistics APIs</span></li>
                <li><span>Decision latency</span><span>Real-time routing</span></li>
                <li><span>Data sources unified</span><span>Fleet, freight, compliance</span></li>
              </ul>
            </div>
            <div className="industry">
              <span className="index-tag">§ HEALTHCARE</span>
              <h3>Clinical &amp; Practice Operations</h3>
              <p>Revenue leaks silently at the front desk and in the treatment chair. We build financial and clinical operating systems that close the gap between care delivered and revenue captured.</p>
              <ul>
                <li><span>Lead response latency</span><span>Minutes, not days</span></li>
                <li><span>Revenue visibility</span><span>Per-patient, per-day</span></li>
                <li><span>Compliance tracking</span><span>Built-in, not bolted on</span></li>
              </ul>
            </div>
            <div className="industry">
              <span className="index-tag">§ HIGHER EDUCATION</span>
              <h3>Campus Operations &amp; Compliance</h3>
              <p>Autonomous colleges run hundreds of events a year against strict accreditation cycles. We build platforms that make approval, budget, and compliance tracking a byproduct of normal operations, not a scramble before audit.</p>
              <ul>
                <li><span>Departments served</span><span>154 at Sri Sairam</span></li>
                <li><span>Approval workflow</span><span>HOD → IQAC automated</span></li>
                <li><span>NAAC/AQAR exports</span><span>One-click reports</span></li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/solutions" className="btn btn-ghost">Explore Solutions <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ============================= FEATURED CASE STUDIES ============================= */}
      <section className="cases" id="work">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">02 — CASE STUDIES</p>
              <h2 style={{ marginTop: '20px' }}>Systems in Production</h2>
            </div>
            <p>Production-grade software, built and shipped in tight iterations, validated against real operational data from day one — not a demo environment.</p>
          </div>
          <div className="reveal">
            <CaseStudyCard
              tag="HIGHER EDUCATION · OPERATIONS"
              title="atCampus — Campus Event & Compliance OS"
              description="An enterprise campus operations platform built to make IQAC compliance a byproduct of daily event management rather than an annual scramble. Deployed at Sri Sairam Engineering College across 154 departments."
              sector="Higher Education"
              metrics={[
                { value: '154', label: 'Departments on platform' },
                { value: '~0', unit: 'hr', label: 'Manual paperwork per event' },
                { value: '1-click', label: 'NAAC/AQAR export' },
                { value: '3', unit: 'wk', label: 'From audit to deployment' },
              ]}
              href="/case-studies/sairam-atcampus"
            />
            <CaseStudyCard
              tag="HEALTHCARE · AI REACTIVATION"
              title="Balaji Dental — AI Patient Reactivation"
              description="A multi-agent AI system built to identify and reactivate dormant patients at Balaji Dental Hospital. The system classifies treatment history, generates personalised outreach, and books appointments autonomously."
              sector="Healthcare"
              metrics={[
                { value: '3×', label: 'Reactivation rate vs manual' },
                { value: '<5', unit: 'min', label: 'Lead response latency' },
                { value: '87', unit: '%', label: 'Classification accuracy' },
                { value: '6', unit: 'wk', label: 'End-to-end build time' },
              ]}
              href="/case-studies/balaji-dental"
            />
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link href="/case-studies" className="btn btn-ghost">All Case Studies <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ============================= PRODUCTS ============================= */}
      <section className="products" id="products">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">03 — PRODUCTS &amp; PLATFORMS</p>
              <h2 style={{ marginTop: '20px' }}>Currently in the Field</h2>
            </div>
            <p>Alongside client engagements, Bludot operates its own portfolio of products — systems we&apos;ve built, deployed, and continue to run ourselves.</p>
          </div>
          <div className="product-grid reveal">
            <ProductCard
              index="01"
              name="FRENZO"
              status="LIVE"
              headline="Link infrastructure &amp; insights for marketing teams"
              description="Branded links, click-level analytics, and campaign attribution in one place — built for teams that treat every link as a measurable channel."
              image="/frenzo.png"
              href="https://frenzo.app"
            />
            <ProductCard
              index="02"
              name="ATCAMPUS"
              status="LIVE"
              headline="Campus operations &amp; compliance platform"
              description="Event, budget, and approval management for autonomous colleges — deployed and running in production today."
              image="/atcampus.png"
              href="https://atcampus.in"
            />
            <ProductCard
              index="03"
              name="DENTURA"
              status="LIVE"
              headline="Financial OS for dental practices"
              description="Daily revenue tracking and patient-level financial visibility for clinics, built toward full treatment and records management."
              image="/dentura.png"
              href="https://dentura.in"
            />
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link href="/products" className="btn btn-ghost">View All Products <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ============================= ENGINEERING PRINCIPLES ============================= */}
      <section className="manifesto" id="manifesto">
        <div className="blueprint" />
        <div className="wrap">
          <div className="manifesto-inner">
            <p className="eyebrow">ENGINEERING PRINCIPLES</p>
            <h2>
              We don&apos;t build <span className="strike">slide decks</span>.<br />
              We don&apos;t build <span className="strike">demos</span>.<br />
              We build <span className="glow">systems that run.</span>
            </h2>
            <p className="manifesto-foot">Every engagement begins with a workflow audit. We map how work actually moves before we write a single line of code. What gets built is always tied to a specific operational outcome — not a feature list.</p>
          </div>
        </div>
      </section>

      {/* ============================= FINAL CTA ============================= */}
      <section className="final-cta" id="contact">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>GET STARTED</p>
          <h2 style={{ marginTop: '24px' }}>Let&apos;s find the bottleneck costing you the most.</h2>
          <p>We start with a workflow audit — a structured session where we map how work actually moves through your operation. No pitch. No proposals. Just an honest look at where the friction is.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">Request a Workflow Audit <span className="arrow">→</span></Link>
            <a href="mailto:hello@bludotlabs.com" className="btn btn-ghost">hello@bludotlabs.com</a>
          </div>
        </div>
      </section>

    </main>
  );
}
