import Image from "next/image";
import Link from "next/link";

type Metric = {
    value: string;
    unit?: string;
    label: string;
};

type Testimonial = {
    quote: string;
    author: string;
    role?: string;
};

type CTA = {
    title: string;
    description: string;
    button: string;
};

type Props = {
    category: string;
    title: string;
    subtitle: string;

    heroImage: string;

    overview: string[];

    challenge: string[];

    solution: string[];

    architecture: string[];

    metrics: Metric[];

    results: string[];

    testimonial?: Testimonial;

    techStack?: string[];

    timeline?: {
        title: string;
        description: string;
    }[];

    screenshots?: string[];

    cta: CTA;
};

export default function CaseStudyTemplate({
    category,
    title,
    subtitle,
    heroImage,
    overview,
    challenge,
    solution,
    architecture,
    metrics,
    results,
    testimonial,
    techStack,
    timeline,
    screenshots,
    cta,
}: Props) {
    return (
        <main>
            {/* Hero */}

            <section className="page-hero">
                <div className="blueprint" />
                <div className="hero-glow" />

                <div className="wrap">

                    <p className="eyebrow">{category}</p>

                    <h1>{title}</h1>

                    <p className="hero-subtitle">
                        {subtitle}
                    </p>

                    <div
                        style={{
                            marginTop: 60,
                            borderRadius: 24,
                            overflow: "hidden",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <Image
                            src={heroImage}
                            alt={title}
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

            {/* Overview */}

            <section className="page-section">

                <div className="wrap">

                    <h2>Overview</h2>

                    {overview.map((text) => (
                        <p
                            key={text}
                            style={{
                                maxWidth: 900,
                                marginBottom: 24,
                            }}
                        >
                            {text}
                        </p>
                    ))}
                </div>

            </section>

            {/* Metrics */}

            <section className="page-section">

                <div className="wrap">

                    <div className="metrics-grid">

                        {metrics.map((metric) => (

                            <div className="metric-card" key={metric.label}>

                                <h2>
                                    {metric.value}
                                    {metric.unit && (
                                        <span>{metric.unit}</span>
                                    )}
                                </h2>

                                <p>{metric.label}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Challenge */}

            <section className="page-section">

                <div className="wrap">

                    <h2>The Challenge</h2>

                    <ul className="feature-list">

                        {challenge.map((item) => (
                            <li key={item}>{item}</li>
                        ))}

                    </ul>

                </div>

            </section>

            {/* Solution */}

            <section className="page-section">

                <div className="wrap">

                    <h2>The Solution</h2>

                    <ul className="feature-list">

                        {solution.map((item) => (
                            <li key={item}>{item}</li>
                        ))}

                    </ul>

                </div>

            </section>

            {/* Architecture */}

            <section className="page-section">

                <div className="wrap">

                    <h2>Architecture</h2>

                    <div className="architecture-grid">

                        {architecture.map((item) => (

                            <div
                                key={item}
                                className="architecture-card"
                            >
                                {item}
                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Timeline */}

            {timeline && (

                <section className="page-section">

                    <div className="wrap">

                        <h2>Implementation Timeline</h2>

                        <div className="timeline">

                            {timeline.map((step) => (

                                <div
                                    key={step.title}
                                    className="timeline-card"
                                >
                                    <h3>{step.title}</h3>

                                    <p>{step.description}</p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            )}

            {/* Screenshots */}

            {screenshots && (

                <section className="page-section">

                    <div className="wrap">

                        <h2>Product Screenshots</h2>

                        <div className="screenshot-grid">

                            {screenshots.map((image) => (

                                <Image
                                    key={image}
                                    src={image}
                                    alt=""
                                    width={900}
                                    height={600}
                                />

                            ))}

                        </div>

                    </div>

                </section>

            )}

            {/* Results */}

            <section className="page-section">

                <div className="wrap">

                    <h2>Impact</h2>

                    <ul className="feature-list">

                        {results.map((item) => (
                            <li key={item}>{item}</li>
                        ))}

                    </ul>

                </div>

            </section>

            {/* Tech */}

            {techStack && (

                <section className="page-section">

                    <div className="wrap">

                        <h2>Technology Stack</h2>

                        <div className="architecture-grid">

                            {techStack.map((tech) => (

                                <div
                                    key={tech}
                                    className="architecture-card"
                                >
                                    {tech}
                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            )}

            {/* Testimonial */}

            {testimonial && (

                <section className="page-section">

                    <div className="wrap">

                        <blockquote className="testimonial">

                            <p>"{testimonial.quote}"</p>

                            <footer>

                                {testimonial.author}

                                {testimonial.role && (
                                    <> • {testimonial.role}</>
                                )}

                            </footer>

                        </blockquote>

                    </div>

                </section>

            )}

            {/* CTA */}

            <section className="final-cta">

                <div className="blueprint" />
                <div className="hero-glow" />

                <div className="wrap">

                    <h2>{cta.title}</h2>

                    <p>{cta.description}</p>

                    <div className="hero-ctas">

                        <Link
                            href="/contact"
                            className="btn btn-primary"
                        >
                            {cta.button}
                            <span className="arrow">→</span>
                        </Link>

                    </div>

                </div>

            </section>
        </main>
    );
}