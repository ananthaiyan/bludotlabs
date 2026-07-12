import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Balaji Dental Care — Case Study | Bludot Labs",
    description:
        "How Bludot Labs engineered an AI-powered patient reactivation and financial operations system for Balaji Dental Care.",
};

const metrics = [
    { value: "21", label: "Days to Deployment" },
    { value: "₹60K+", label: "Recovered Revenue" },
    { value: "1", label: "Clinic" },
    { value: "100%", label: "Custom Workflow" },
];

const capabilities = [
    {
        title: "Patient Reactivation",
        description:
            "Automatically identifies inactive patients and initiates personalized outreach campaigns.",
    },
    {
        title: "Financial Dashboard",
        description:
            "Daily visibility into treatment revenue, collections, outstanding payments and business performance.",
    },
    {
        title: "Treatment Tracking",
        description:
            "Centralized treatment history, pending procedures and patient-level financial records.",
    },
    {
        title: "Operational Reporting",
        description:
            "Practice-level dashboards replacing fragmented spreadsheets and manual reporting.",
    },
    {
        title: "Custom Workflows",
        description:
            "Designed around the clinic's existing operational processes rather than forcing new ones.",
    },
    {
        title: "Foundation for AI",
        description:
            "Built as the first step toward autonomous practice operations through Dentura.",
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
                        CASE STUDY · HEALTHCARE
                    </p>

                    <h1
                        style={{
                            maxWidth: 900,
                        }}
                    >
                        Engineering Operational Intelligence for Balaji Dental Care
                    </h1>

                    <p
                        style={{
                            maxWidth: 760,
                            fontSize: "1.1rem",
                            color: "var(--muted)",
                        }}
                    >
                        Bludot Labs partnered with Balaji Dental Care to digitize patient
                        operations, improve financial visibility and lay the foundation for
                        AI-native clinical workflows through Dentura.
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
                            src="/balajidental.png"
                            alt="Dentura Dashboard"
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
                            Valuable patient relationships were being lost after treatment.
                        </h1>

                    </div>

                    <div>

                        <p>
                            Balaji Dental Care relied on manual spreadsheets, phone calls and
                            disconnected records to manage patient follow-ups and financial
                            operations.
                        </p>

                        <br />

                        <p>
                            Patients requiring periodic reviews often went months without
                            follow-up, while practice owners lacked a centralized view of
                            revenue, pending treatments and business performance.
                        </p>

                    </div>

                </div>

            </section>

            {/* SOLUTION */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        THE SOLUTION
                    </p>

                    <h2
                        style={{
                            marginBottom: 60,
                        }}
                    >
                        A custom operational platform built around the clinic.
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

            {/* RESULTS */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        OUTCOMES
                    </p>

                    <h2>
                        Immediate operational improvements.
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
                                Revenue recovered through patient reactivation
                            </h3>

                            <p>
                                Automated identification of inactive patients enabled the clinic
                                to reconnect with existing patients, generating more than
                                ₹60,000 in additional revenue within the initial deployment.
                            </p>

                        </div>

                        <div>

                            <h3>
                                Better operational visibility
                            </h3>

                            <p>
                                Financial reporting, treatment tracking and patient management
                                moved into a centralized platform, reducing dependence on
                                fragmented spreadsheets and manual reporting.
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
                            maxWidth: 900,
                        }}
                    >

                        <h2>
                            This project became the foundation for Dentura.
                        </h2>

                        <p
                            style={{
                                marginTop: 24,
                                lineHeight: 1.9,
                            }}
                        >
                            What began as a custom software engagement evolved into a broader
                            product vision. The operational patterns discovered while working
                            closely with Balaji Dental Care became the foundation for
                            Dentura—Bludot's healthcare operations platform focused on
                            practice management, AI workflows and intelligent clinical
                            operations.
                        </p>

                    </div>

                </div>

            </section>

            {/* TECH */}

            <section className="page-section">

                <div className="wrap">

                    <p className="eyebrow">
                        ENGINEERING STACK
                    </p>

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
                            "Supabase",
                            "Tailwind CSS",
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
                        READY TO MODERNIZE YOUR PRACTICE?
                    </p>

                    <h2>
                        Let's engineer software around your workflows—not the other way
                        around.
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