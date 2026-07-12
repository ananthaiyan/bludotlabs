import Link from 'next/link';

interface Metric {
  value: string;
  unit?: string;
  label: string;
}

interface CaseStudyCardProps {
  tag: string;
  title: string;
  description: string;
  sector: string;
  metrics: Metric[];
  href: string;
}

export default function CaseStudyCard({ tag, title, description, sector, metrics, href }: CaseStudyCardProps) {
  return (
    <div className="case-card">
      <div className="case-visual">
        <div className="mockup">
          <div className="mockup-bar">
            <span /><span /><span />
          </div>
          <div className="mockup-body">
            <div className="mockup-row accent" style={{ width: '60%' }} />
            <div className="mockup-row" style={{ width: '85%' }} />
            <div className="mockup-chart">
              <div style={{ height: '40%' }} /><div style={{ height: '55%' }} /><div style={{ height: '35%' }} /><div style={{ height: '70%' }} /><div className="hi" style={{ height: '95%' }} /><div style={{ height: '60%' }} />
            </div>
            <div className="mockup-row" style={{ width: '40%' }} />
            <div className="mockup-row" style={{ width: '65%' }} />
          </div>
        </div>
      </div>
      <div className="case-left">
        <div>
          <p className="case-tag">{tag}</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <span className="case-sector"><span className="dot" />{sector}</span>
          <div style={{ marginTop: '20px' }}>
            <Link href={href} style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Read case study <span>→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="case-right">
        {metrics.map((m, i) => (
          <div className="metric" key={i}>
            <p className="num">{m.value}{m.unit && <span className="unit">{m.unit}</span>}</p>
            <p className="label">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
