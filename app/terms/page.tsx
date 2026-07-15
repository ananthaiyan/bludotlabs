import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Bludot Labs',
  description: 'Terms of Service and usage conditions for Bludot Labs.',
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />
        <div className="wrap">
          <p className="eyebrow reveal">LEGAL</p>
          <h1 className="reveal">Terms of Service</h1>
          <p className="reveal">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="prose reveal">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the website and services provided by Bludot Labs, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.</p>
            
            <h2>2. Intellectual Property</h2>
            <p>All content, designs, algorithms, and systems present on this website are the intellectual property of Bludot Labs unless otherwise stated. Unauthorized reproduction or reverse-engineering is strictly prohibited.</p>

            <h2>3. Service Provision</h2>
            <p>We provide enterprise-grade automation and AI solutions. The details of any technical engagement, including service-level agreements (SLAs), deliverables, and pricing, will be outlined in a separate Statement of Work (SOW) or master service agreement.</p>

            <h2>4. Limitation of Liability</h2>
            <p>Bludot Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our website or general services. Our liability in specific engagements is governed by the respective contracts.</p>

            <h2>5. Modifications</h2>
            <p>We reserve the right to modify or replace these Terms at any time. Material changes will be indicated by an updated &quot;Last updated&quot; date.</p>

            <h2>6. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Bludot Labs operates, without regard to its conflict of law provisions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
