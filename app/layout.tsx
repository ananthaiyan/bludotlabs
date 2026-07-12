import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://bludotlabs.com"),

  title: {
    default: "Bludot Labs",
    template: "%s | Bludot Labs",
  },

  description:
    "AI-native engineering company building mission-critical software for healthcare, higher education and logistics.",

  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://bludotlabs.com",
    siteName: "Bludot Labs",
    title: "Bludot Labs",
    description:
      "Engineering Autonomous Systems That Turn Bottlenecks Into Revenue.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bludot Labs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bludot Labs",
    description:
      "Engineering Autonomous Systems That Turn Bottlenecks Into Revenue.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
