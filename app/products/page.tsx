import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Products — Bludot Labs',
  description:
    'Enterprise software products, research initiatives, and engineering projects built by Bludot Labs.',
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="blueprint" />
        <div className="hero-glow" />

        <div className="wrap">
          <p className="eyebrow">PRODUCTS &amp; PLATFORMS</p>

          <h1>From Enterprise Deployments to Category-Defining Software.</h1>

          <p>
            Every product at Bludot begins inside a real operational workflow.
            We partner with organizations, solve complex engineering problems,
            and evolve those solutions into software that scales far beyond a
            single customer.
          </p>
        </div>
      </section>

      {/* Production */}
      <section className="products" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">PRODUCTION</p>
              <h2 style={{ marginTop: '20px' }}>Live Products</h2>
            </div>

            <p>
              Products actively deployed with real users, real customers and
              production workloads.
            </p>
          </div>

          <div className="product-grid">
            <ProductCard
              index="01"
              name="FRENZO"
              status="LIVE"
              headline="Programmable links for modern teams"
              description="Branded links, QR codes, click-level analytics and campaign attribution built for teams that treat every interaction as measurable."
              image="/frenzo.png"
              href="https://frenzo.app"
            />

            <ProductCard
              index="02"
              name="ATCAMPUS"
              status="LIVE"
              headline="Campus infrastructure for modern institutions"
              description="Powering events, approvals, registrations, budgeting and institutional workflows across higher education."
              image="/atcampus.png"
              href="https://atcampus.in"
            />

            <ProductCard
              index="03"
              name="DENTURA"
              status="LAUNCHING SOON"
              headline="Operational intelligence for dental practices"
              description="Practice management, financial visibility and AI-powered operational workflows for modern clinics."
              image="/dentura.png"
              href="/"
            />
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="page-section-alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">RESEARCH &amp; INCUBATION</p>
              <h2 style={{ marginTop: '20px' }}>
                The Next Generation of Systems
              </h2>
            </div>

            <p>
              Long-term products born from customer discovery, engineering
              research and operational insight.
            </p>
          </div>

          <div className="product-grid">
            <ProductCard
              index="04"
              name="WAREABOUTS"
              status="RESEARCH"
              headline="Operational intelligence for global freight"
              description="Building the coordination layer between enterprises, freight forwarders, carriers and supply chains. Currently in active customer discovery with logistics operators."
              href="/products/wareabouts"
              linkLabel="Read Thesis"
            />

            <ProductCard
              index="05"
              name="FLOWOS"
              status="RESEARCH"
              headline="Clinical workflow engine"
              description="An AI-native workflow engine exploring how healthcare operations can move beyond fragmented software into autonomous execution."
              href="/products/flowos"
              linkLabel="Learn More"
            />
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="page-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">ENGINEERING ARCHIVE</p>
              <h2 style={{ marginTop: '20px' }}>
                Where Today's Products Began
              </h2>
            </div>

            <p>
              Every production platform started as an experiment. These projects
              shaped the engineering principles behind Bludot Labs.
            </p>
          </div>

          <div className="product-grid">
            <ProductCard
              index="A1"
              name="BLUELINK"
              status="ARCHIVE"
              headline="IoT water management platform"
              description="Early infrastructure project exploring connected devices, monitoring and operational visibility for domestic water systems."
              href="/engineering-archive"
              linkLabel="Explore Archive"
            />

            <ProductCard
              index="A2"
              name="SWACHORBIT"
              status="ARCHIVE"
              headline="Orbital debris intelligence platform"
              description="Interactive mission planning dashboard for monitoring orbital debris and evaluating accelerated deorbiting strategies. Originally conceptualized as a space sustainability initiative and awarded First Prize at IIT Madras."
              href="https://swachorbit.bludotlabs.com"
              linkLabel="Launch Platform"
            />

            <ProductCard
              index="A3"
              name="PROJECT VELOCITY"
              status="ARCHIVE"
              headline="Early logistics optimisation research"
              description="Exploring routing, multimodal freight planning and operational intelligence—the engineering foundation behind Wareabouts."
              href="/engineering-archive"
              linkLabel="Explore Archive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}