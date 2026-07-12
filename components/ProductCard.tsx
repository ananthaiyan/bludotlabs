import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  index: string;
  name: string;
  status: 'LIVE' | 'INCUBATION' | 'ARCHIVE' | 'BETA' | 'RESEARCH' | 'LAUNCHING SOON' | 'IN DEVELOPMENT';
  headline: string;
  description: string;
  image?: string;
  href: string;
  linkLabel?: string;
}

export default function ProductCard({ index, name, status, headline, description, image, href, linkLabel }: ProductCardProps) {
  const statusColor = status === 'LIVE' ? 'var(--blue)' : status === 'INCUBATION' ? '#F59E0B' : 'var(--ink-2)';

  return (
    <Link href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener' : undefined} className="product-card">
      <div className="product-top">
        <span className="index-tag">{index} / {name}</span>
        <span className="product-status" style={{ color: statusColor, borderColor: statusColor === 'var(--blue)' ? 'var(--line-strong)' : statusColor }}>{status}</span>
      </div>
      {image && (
        <div className="product-image-wrapper">
          <Image src={image} alt={`${name} Screenshot`} fill className="product-img" />
        </div>
      )}
      <h3>{headline}</h3>
      <p>{description}</p>
      <span className="product-link">{linkLabel || (href.startsWith('http') ? new URL(href).hostname : 'View details')} <span className="arrow">→</span></span>
    </Link>
  );
}
