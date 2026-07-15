import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ marginBottom: '14px' }}>
              <Image
                src="/image-removebg-preview.png"
                alt="Bludot Labs"
                width={320}
                height={160}
                className="footer-logo"
              />
            </Link>
            <p>An AI-native engineering company building mission-critical software for healthcare, higher education, and logistics operations.</p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <Link href="/solutions">Solutions</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/products">Products</Link>
            <Link href="/research">Research</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@bludotlabs.com">hello@bludotlabs.com</a>
            <Link href="/contact">Request a Workflow Audit</Link>
          </div>
          <div className="footer-col">
            <h4>Elsewhere</h4>
            <a href="https://in.linkedin.com/company/bludot-labs" target="_blank" rel="noopener">LinkedIn</a>
            <a href="#">X / Twitter</a>
            <a href="https://www.instagram.com/bludotlabs/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 BLUDOT LABS</p>
          <p><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · SYSTEM STATUS: ONLINE</p>
        </div>
      </div>
    </footer>
  );
}
