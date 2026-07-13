import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Alliance Freight Express — Case Study | Bludot Labs",
    description:
        "How Bludot Labs partnered with Alliance Freight Express to redesign freight forwarding operations and lay the foundation for Wareabouts.",
};

const metrics = [
    { value: "15+", label: "Years in Business" },
    { value: "200+", label: "Countries Served" },
    { value: "1", label: "Discovery Partner" },
    { value: "2026", label: "Research Started" },
];

const capabilities = [
    {
        title: "Operational Discovery",
        description:
            "Mapped end-to-end freight forwarding workflows from exporter onboarding to international delivery.",
    },
    {
        title: "Workflow Standardization",
        description:
            "Documented operational SOPs across documentation, customs, carrier selection and shipment coordination.",
    },
    {
        title: "Operations Dashboard",
        description:
            "Designed a centralized workspace to replace fragmented spreadsheets, emails and manual coordination.",
    },
    {
        title: "Documentation Intelligence",
        description:
            "Researched AI-assisted handling of export documentation, compliance and shipment records.",
    },
    {
        title: "Carrier Coordination",
        description:
            "Studied decision-making between DHL, FedEx, airlines and shipping lines to standardize shipment planning.",
    },
    {
        title: "Foundation for Wareabouts",
        description:
            "Customer discovery that became the first real-world validation for Wareabouts' logistics thesis.",
    },
];

export default function Page() {
    return (
        <main>
            {/* HERO */}

            <section className="page-hero">
                <div className="blueprint" />
                <div className="hero-glow" />

                <div className="wrap">

                    <p className="eyebrow">
                        CASE STUDY · LOGISTICS
                    </p>

                    <h1
                        style={{
                            maxWidth: 920,
                        }}
                    >
                        Understanding Freight Forwarding Operations Through Alliance Freight
                        Express
                    </h1>

                    <p
                        style={{
                            maxWidth: 760,
                            fontSize: "1.1rem",
                            color: "var(--muted)",
                        }}
                    >
                        Rather than beginning with software, we began with operators.
                        Alliance Freight Express became our first logistics discovery
                        partner, helping us understand how international freight forwarding
                        actually works and where operational intelligence can create value.
                    </p>

                    <div
                        style={{
                            marginTop: 64,
                            borderRadius: 28,
                            overflow: "hidden",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <Image
                            src="/wareabouts.png"
                            alt="Wareabouts Logistics Research"
                            width={1600}
                            height={900}
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                            }}
                        />
                    </div>

                </div>
            </section>

            {/* METRICS */}

            <section className="page-section">

                <div className="wrap">

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            gap: 36,
                        }}
                    >
                        {metrics.map((metric) => (

                            <div key={metric.label}>

                                <h2
                                    style={{
                                        fontSize: "3rem",
                                        marginBottom: 8,
                                    }}
                                >
                                    {metric.value}
                                </h2>

                                <p>{metric.label}</p>

                            </div>

                        ))}
                    </div>

                </div>

            </section>

            {/* CHALLENGE */}

            <section className="page-section">

                <div
                    className="wrap"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.4fr",
                        gap: 80,
                    }}
                >

                    <div>

                        <p className="eyebrow">
                            THE CHALLENGE
                        </p>

                        <h1>
                            Freight forwarding is fundamentally a coordination problem.
                        </h1>

                    </div>

                    <div>

                        <p>
                            Modern freight forwarders coordinate exporters, customs brokers,
                            airlines, shipping lines and overseas agents through fragmented
                            systems including spreadsheets, emails, WhatsApp and multiple
                            carrier portals.
                        </p>

                        <br />

                        <p>
                            Every shipment involves documentation, compliance, carrier
                            selection, customer communication and operational decision-making,
                            yet much of this process remains manual despite decades of digital
                            transformation across logistics.
                        </p>

                    </div>

                </div>

            </section>

            {/* APPROACH */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        OUR APPROACH
                    </p>

                    <h2
                        style={{
                            marginBottom: 60,
                        }}
                    >
                        Start with workflows, not software.
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3,1fr)",
                            gap: 24,
                        }}
                    >

                        {capabilities.map((item) => (

                            <div
                                key={item.title}
                                style={{
                                    padding: 36,
                                    border: "1px solid var(--border)",
                                    borderRadius: 24,
                                }}
                            >

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* DISCOVERIES */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        KEY DISCOVERIES
                    </p>

                    <h2>
                        What we learned from customer discovery.
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2,1fr)",
                            gap: 60,
                            marginTop: 60,
                        }}
                    >

                        <div>

                            <h3>
                                Freight forwarders coordinate information—not trucks.
                            </h3>

                            <p>
                                The greatest operational complexity lies in documentation,
                                compliance, carrier selection and communication rather than
                                physical transportation itself.
                            </p>

                        </div>

                        <div>

                            <h3>
                                Existing software solves records—not decisions.
                            </h3>

                            <p>
                                Operators still make critical decisions manually every day.
                                Coordinating multiple stakeholders remains largely dependent on
                                human experience rather than operational intelligence.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* WHY IT MATTERS */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        WHY IT MATTERS
                    </p>

                    <div
                        style={{
                            maxWidth: 920,
                        }}
                    >

                        <h2>
                            This became the foundation of Wareabouts.
                        </h2>

                        <p
                            style={{
                                marginTop: 24,
                                lineHeight: 1.9,
                            }}
                        >
                            Rather than building another transportation management system,
                            this research fundamentally changed our understanding of logistics.
                            We realized the industry's biggest opportunity wasn't moving
                            freight—it was coordinating it. That insight evolved into
                            Wareabouts: an operational intelligence platform designed to become
                            the coordination layer between enterprises, freight forwarders,
                            carriers and global supply chains.
                        </p>

                    </div>

                </div>

            </section>

            {/* TECH */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        RESEARCH AREAS
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: 14,
                            flexWrap: "wrap",
                        }}
                    >

                        {[
                            "Freight Forwarding",
                            "International Logistics",
                            "Customs",
                            "Carrier Networks",
                            "Operational Intelligence",
                            "Workflow Automation",
                            "AI Systems",
                        ].map((item) => (

                            <span
                                key={item}
                                className="tag"
                            >
                                {item}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="final-cta">

                <div className="blueprint" />
                <div className="hero-glow" />

                <div className="wrap">

                    <p className="eyebrow">
                        BUILDING THE FUTURE OF LOGISTICS
                    </p>

                    <h2>
                        We're working with logistics operators to engineer the next
                        generation of freight operations.
                    </h2>

                    <div className="hero-ctas">

                        <Link
                            href="/contact"
                            className="btn btn-primary"
                        >
                            Talk to Our Team
                            <span className="arrow">→</span>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}