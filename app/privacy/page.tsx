import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Bludot Labs',
  description: 'Privacy policy and data handling practices at Bludot Labs.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow reveal">LEGAL</p>
          <h1 className="reveal">Privacy Policy</h1>
          <p className="reveal">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="prose reveal">
            <h2>1. Introduction</h2>
            <p>At Bludot Labs, we build mission-critical systems for enterprise clients. We treat data privacy and security as fundamental engineering constraints, not just legal requirements. This policy outlines how we handle data collected through our website and product interactions.</p>
            
            <h2>2. Data Collection</h2>
            <p>We collect minimal data required to provide our services. This includes:</p>
            <ul>
              <li>Contact information submitted via forms (Name, Email, Organization)</li>
              <li>Usage telemetry (pages visited, interaction patterns) to improve our platforms</li>
              <li>Technical data (browser type, IP address) for security and auditing purposes</li>
            </ul>

            <h2>3. Data Usage</h2>
            <p>We use the collected information exclusively to:</p>
            <ul>
              <li>Respond to inquiries and workflow audit requests</li>
              <li>Improve and optimize our web presence and product interfaces</li>
              <li>Maintain the security and integrity of our systems</li>
            </ul>
            <p>We do not sell, rent, or trade your personal data to third parties. We do not use your data to train public AI models.</p>

            <h2>4. Security</h2>
            <p>All data is encrypted in transit and at rest. We employ industry-standard access controls and regular security audits to ensure your information remains protected.</p>

            <h2>5. Contact</h2>
            <p>If you have questions about this policy or our data practices, please contact us at <a href="mailto:hello@bludotlabs.com" style={{ color: 'var(--blue)' }}>hello@bludotlabs.com</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
