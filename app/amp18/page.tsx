import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "FROM AMP18 × BLUDOT LABS",
    description:
        "Thanks for scanning. Discover what we're building at Bludot Labs.",
};

const products = [
    {
        name: "Wareabouts",
        category: "AI Logistics",
        description:
            "AI-native operations platform for freight forwarders, bringing shipments, documentation, collaboration and operational intelligence into one workspace.",
        href: "/wareabouts",
    },
    {
        name: "atCampus",
        category: "Higher Education",
        description:
            "Campus operating system powering events, approvals and student operations across autonomous institutions.",
        href: "/case-studies/sairam",
    },
    {
        name: "Frenzo",
        category: "SaaS",
        description:
            "Modern branded links and analytics platform with paying users across the DACH region.",
        href: "https://frenzo.app",
    },
];

export default function EventLandingPage() {
    return (
        <main>

            {/* Hero */}

            <section className="page-hero">
                <div className="blueprint" />
                <div className="hero-glow" />

                <div className="wrap" style={{ maxWidth: "860px" }}>
                    <p className="eyebrow">WELCOME</p>

                    <h1>
                        You weren't supposed
                        <br />
                        to end up here.
                    </h1>

                    <p
                        style={{
                            marginTop: "32px",
                            fontSize: "18px",
                            lineHeight: "1.9",
                            color: "var(--ink-1)",
                        }}
                    >
                        Thanks for scanning the card.
                        <br />
                        We're <strong>Bludot Labs</strong> — an engineering-led AI company
                        based in Chennai, building software for industries that still run on
                        spreadsheets, emails and disconnected workflows.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            marginTop: "42px",
                            flexWrap: "wrap",
                        }}
                    >
                        <Link href="/about" className="btn btn-primary">
                            Meet the Team
                            <span className="arrow">→</span>
                        </Link>

                        <Link href="/contact" className="btn btn-ghost">
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy */}

            <section className="page-section">
                <div className="wrap">

                    <div
                        style={{
                            maxWidth: "920px",
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        <p className="eyebrow">OUR PHILOSOPHY</p>

                        <h2
                            style={{
                                marginTop: "28px",
                                fontSize: "52px",
                                lineHeight: "1.2",
                            }}
                        >
                            We don't chase ideas.
                            <br />
                            We study industries.
                            <br />
                            Then we engineer software.
                        </h2>

                        <p
                            style={{
                                marginTop: "28px",
                                color: "var(--ink-1)",
                                fontSize: "18px",
                                lineHeight: "1.9",
                            }}
                        >
                            Every product starts the same way — by spending time inside an
                            industry, understanding how people actually work, and designing
                            software around operational reality instead of assumptions.
                        </p>
                    </div>

                </div>
            </section>

            {/* Products */}

            <section className="page-section-alt">
                <div className="wrap">

                    <div className="section-head">
                        <div>
                            <p className="eyebrow">WHAT WE'RE BUILDING</p>
                            <h2 style={{ marginTop: "18px" }}>
                                Three products.
                                <br />
                                One engineering philosophy.
                            </h2>
                        </div>

                        <p>
                            Each product exists because we spent time understanding an
                            industry before writing a single line of code.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                            gap: "28px",
                            marginTop: "60px",
                        }}
                    >
                        {products.map((product) => (
                            <div
                                key={product.name}
                                style={{
                                    border: "1px solid var(--line)",
                                    borderRadius: "22px",
                                    padding: "36px",
                                    background: "var(--bg-0)",
                                    transition: "all .25s ease",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "var(--mono)",
                                        fontSize: "11px",
                                        color: "var(--blue)",
                                        textTransform: "uppercase",
                                        letterSpacing: ".12em",
                                    }}
                                >
                                    {product.category}
                                </p>

                                <h3
                                    style={{
                                        marginTop: "18px",
                                        fontSize: "28px",
                                    }}
                                >
                                    {product.name}
                                </h3>

                                <p
                                    style={{
                                        marginTop: "18px",
                                        color: "var(--ink-1)",
                                        lineHeight: "1.8",
                                    }}
                                >
                                    {product.description}
                                </p>

                                <Link
                                    href={product.href}
                                    className="btn btn-ghost"
                                    style={{ marginTop: "28px" }}
                                >
                                    Explore
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Timeline */}

            <section className="page-section">
                <div className="wrap">

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4,1fr)",
                            borderTop: "1px solid var(--line)",
                        }}
                    >
                        {[
                            {
                                year: "2023",
                                text: "Started building products and participating in startup competitions.",
                            },
                            {
                                year: "2024",
                                text: "Focused on enterprise software and customer discovery.",
                            },
                            {
                                year: "2025",
                                text: "Healthcare and education deployments shaped our engineering philosophy.",
                            },
                            {
                                year: "2026",
                                text: "Building Wareabouts — AI-native software for freight operations.",
                            },
                        ].map((item) => (
                            <div
                                key={item.year}
                                style={{
                                    padding: "36px",
                                    borderRight: "1px solid var(--line)",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "var(--mono)",
                                        color: "var(--blue)",
                                        fontSize: "12px",
                                        marginBottom: "18px",
                                    }}
                                >
                                    {item.year}
                                </p>

                                <p
                                    style={{
                                        lineHeight: "1.8",
                                        color: "var(--ink-1)",
                                    }}
                                >
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Quote */}

            <section className="page-section-alt">

                <div
                    className="wrap"
                    style={{
                        maxWidth: "900px",
                        textAlign: "center",
                    }}
                >
                    <p className="eyebrow">OUR BELIEF</p>

                    <h2
                        style={{
                            marginTop: "28px",
                            fontSize: "48px",
                            lineHeight: "1.25",
                        }}
                    >
                        Software shouldn't just
                        <br />
                        record operations.
                        <br />
                        It should help people
                        <br />
                        make better decisions.
                    </h2>
                </div>

            </section>

            {/* CTA */}

            <section className="final-cta">
                <div className="blueprint" />
                <div className="hero-glow" />

                <div className="wrap">

                    <p
                        className="eyebrow"
                        style={{ justifyContent: "center" }}
                    >
                        LET'S CONNECT
                    </p>

                    <h2
                        style={{
                            marginTop: "24px",
                        }}
                    >
                        Curious about what we're building?
                    </h2>

                    <p
                        style={{
                            maxWidth: "620px",
                            margin: "24px auto 0",
                            color: "var(--ink-1)",
                            lineHeight: "1.8",
                        }}
                    >
                        Whether you're a founder, operator, investor, engineer or simply
                        someone who enjoys building ambitious things, we'd love to hear from
                        you.
                    </p>

                    <div className="hero-ctas">

                        <Link href="/contact" className="btn btn-primary">
                            Start a Conversation
                            <span className="arrow">→</span>
                        </Link>

                        <Link href="/about" className="btn btn-ghost">
                            Meet the Team
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}