import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "atCampus — Sri Sairam Engineering College | Bludot Labs",
    description:
        "How Bludot Labs digitized event management and IQAC compliance across Sri Sairam Engineering College.",
};

const metrics = [
    { value: "154", label: "Departments" },
    { value: "613", label: "Events Managed" },
    { value: "713", label: "Users" },
    { value: "1,501", label: "Files Uploaded" },
];

const features = [
    {
        title: "Unified Event Workflow",
        description:
            "A centralized system replacing fragmented approvals, emails and spreadsheets.",
    },
    {
        title: "IQAC Compliance",
        description:
            "Documentation generated automatically as departments work normally.",
    },
    {
        title: "Department Dashboards",
        description:
            "Real-time visibility into every event, venue and approval across campus.",
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

                    <p className="eyebrow">HIGHER EDUCATION • PRODUCTION</p>

                    <h1 style={{ maxWidth: 900 }}>
                        atCampus — Campus Event & Compliance OS
                    </h1>

                    <p
                        style={{
                            maxWidth: 720,
                            fontSize: "1.15rem",
                            color: "var(--muted)",
                        }}
                    >
                        A centralized operations platform built for Sri Sairam Engineering
                        College to digitize campus events, automate compliance and simplify
                        institutional workflows.
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            gap: 24,
                            marginTop: 60,
                        }}
                    >
                        {metrics.map((metric) => (
                            <div key={metric.label}>
                                <h2
                                    style={{
                                        fontSize: "3rem",
                                        marginBottom: 4,
                                    }}
                                >
                                    {metric.value}
                                </h2>

                                <p>{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            marginTop: 70,
                            borderRadius: 28,
                            overflow: "hidden",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <Image
                            src="/atcampuscase.png"
                            alt="atCampus Dashboard"
                            width={1600}
                            height={900}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </div>

                </div>
            </section>

            {/* PROBLEM */}

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

                        <p className="eyebrow">THE PROBLEM</p>

                        <h1>
                            Campus operations had become fragmented.
                        </h1>

                    </div>

                    <div>

                        <p>
                            Hundreds of academic, technical and cultural events were managed
                            using spreadsheets, WhatsApp groups, emails and manual paperwork.
                        </p>

                        <br />

                        <p>
                            Documentation for IQAC and NAAC audits required repetitive manual
                            work across departments with no centralized visibility into campus
                            activity.
                        </p>

                    </div>

                </div>

            </section>

            {/* SOLUTION */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">OUR SOLUTION</p>

                    <h2 style={{ marginBottom: 60 }}>
                        One platform for the complete event lifecycle.
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3,1fr)",
                            gap: 24,
                        }}
                    >
                        {features.map((feature) => (

                            <div
                                key={feature.title}
                                style={{
                                    padding: 36,
                                    border: "1px solid var(--border)",
                                    borderRadius: 24,
                                }}
                            >
                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                            </div>

                        ))}
                    </div>

                </div>

            </section>

            {/* IMPACT */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        OUTCOMES
                    </p>

                    <h2>
                        Operational improvements across the institution.
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

                            <h3>Campus-wide standardization</h3>

                            <p>
                                Every department now follows a consistent workflow for planning,
                                approvals, registrations and reporting, replacing disconnected
                                manual processes.
                            </p>

                        </div>

                        <div>

                            <h3>Compliance built into daily operations</h3>

                            <p>
                                Documentation required for IQAC and institutional reporting is
                                generated naturally as departments manage events instead of being
                                compiled manually after completion.
                            </p>

                        </div>
                    </div>
                </div>

            </section>

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        PLATFORM CAPABILITIES
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2,1fr)",
                            gap: "22px",
                            marginTop: "40px"
                        }}
                    >

                        <div className="card">
                            <h3>Event Proposal & Approval</h3>
                            <p>Multi-level institutional approval workflows.</p>
                        </div>

                        <div className="card">
                            <h3>Registration Management</h3>
                            <p>Online registrations with participant management.</p>
                        </div>

                        <div className="card">
                            <h3>Venue Management</h3>
                            <p>Centralized scheduling and conflict-free venue allocation.</p>
                        </div>

                        <div className="card">
                            <h3>IQAC Documentation</h3>
                            <p>Automatically generated institutional records.</p>
                        </div>

                        <div className="card">
                            <h3>Department Dashboards</h3>
                            <p>Operational visibility across events and activities.</p>
                        </div>

                        <div className="card">
                            <h3>Role-Based Access</h3>
                            <p>Separate workflows for students, faculty and administrators.</p>
                        </div>

                    </div>

                </div>

            </section>
            {/* TECH */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">TECH STACK</p>

                    <div
                        style={{
                            display: "flex",
                            gap: 14,
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            "Next.js",
                            "FastAPI",
                            "PostgreSQL",
                            "Tailwind CSS",
                            "Supabase",
                            "AWS",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="tag"
                            >
                                {tech}
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
                        READY TO MODERNIZE YOUR OPERATIONS?
                    </p>

                    <h2>
                        Let's build software that people actually use.
                    </h2>

                    <div className="hero-ctas">

                        <Link
                            href="/contact"
                            className="btn btn-primary"
                        >
                            Book a Discovery Call
                            <span className="arrow">→</span>
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}