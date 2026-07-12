'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow">CONTACT</p>
          <h1>Start With a Workflow Audit</h1>
          <p>We map how work actually moves through your operation before we design anything. No pitch. No proposals. Just an honest look at where the friction is.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

            <div>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>WHAT TO EXPECT</p>
              {[
                { step: '01', title: 'Workflow Audit Session', desc: 'A 60–90 minute structured session where we map how work actually moves through your operation.' },
                { step: '02', title: 'Friction Map', desc: 'We document every handoff, delay, and manual step we find. This is yours to keep regardless of what happens next.' },
                { step: '03', title: 'Build Proposal', desc: 'If there is a system worth building, we will tell you exactly what it is, how long it takes, and what it costs.' },
                { step: '04', title: 'Pilot or Pass', desc: 'We only take on engagements where we are confident we can deliver a measurable outcome. If it is not the right fit, we will say so.' },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', gap: '24px', paddingBottom: '32px', marginBottom: '32px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--blue)', flexShrink: 0, marginTop: '2px' }}>{item.step}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--display)', fontWeight: '600', fontSize: '16px', marginBottom: '8px' }}>{item.title}</p>
                    <p style={{ color: 'var(--ink-1)', fontSize: '14px', lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '8px' }}>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-2)', marginBottom: '8px' }}>OR REACH US DIRECTLY</p>
                <a href="mailto:hello@bludotlabs.com" style={{ color: 'var(--blue)', fontFamily: 'var(--mono)', fontSize: '14px' }}>hello@bludotlabs.com</a>
              </div>
            </div>

            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', padding: '40px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--blue)', marginBottom: '16px' }}>RECEIVED</p>
                  <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>We&apos;ll be in touch within 24 hours.</h3>
                  <p style={{ color: 'var(--ink-1)', fontSize: '14px' }}>In the meantime, read a case study or explore our products.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                >
                  <p className="eyebrow" style={{ marginBottom: '8px' }}>REQUEST AUDIT</p>
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                    { id: 'org', label: 'Organisation', type: 'text', placeholder: 'Your Company' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'hello@yourorg.com' },
                    { id: 'role', label: 'Your Role', type: 'text', placeholder: 'CTO / Principal / Operations Head' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{field.label}</label>
                      <input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required style={{ width: '100%', background: 'var(--bg-0)', border: '1px solid var(--line-strong)', color: 'var(--ink-0)', fontFamily: 'var(--sans)', fontSize: '14px', padding: '12px 14px', outline: 'none' }} />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="challenge" style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-2)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Describe Your Biggest Operational Bottleneck</label>
                    <textarea id="challenge" name="challenge" rows={4} placeholder="Where does work get stuck? What takes too long? What is manual that should be automatic?" required style={{ width: '100%', background: 'var(--bg-0)', border: '1px solid var(--line-strong)', color: 'var(--ink-0)', fontFamily: 'var(--sans)', fontSize: '14px', padding: '12px 14px', outline: 'none', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Request Workflow Audit <span className="arrow">→</span></button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
