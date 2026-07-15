import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  metadataBase: new URL("https://bludotlabs.com"),

  title: {
    default: "Bludot Labs",
    template: "%s | Bludot Labs",
  },

  applicationName: "Bludot Labs",

  description:
    "AI-native engineering company building mission-critical software for healthcare, higher education, and logistics organizations.",

  keywords: [
    "Bludot Labs",
    "AI Engineering",
    "Healthcare AI",
    "Higher Education Software",
    "Logistics AI",
    "Workflow Automation",
    "Enterprise AI",
    "AI Agents",
    "AI Infrastructure",
    "Dentura",
    "atCampus",
    "Wareabouts",
  ],

  authors: [
    {
      name: "Bludot Labs",
      url: "https://bludotlabs.com",
    },
  ],

  creator: "Bludot Labs",
  publisher: "Bludot Labs",

  alternates: {
    canonical: "https://bludotlabs.com",
  },

  category: "Technology",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",

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

    creator: "@bludotlabs",
  },

  appleWebApp: {
    capable: true,
    title: "Bludot Labs",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
  },

  // Add this after verifying your site in Google Search Console
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Bludot Labs",

    url: "https://bludotlabs.com",

    logo: "https://bludotlabs.com/logo.png",

    description:
      "AI-native engineering company building mission-critical software for healthcare, higher education, and logistics.",

    sameAs: [
      "https://github.com/ananthaiyan/bludotlabs",
      "https://www.linkedin.com/company/bludotlabs",
    ],
  };

  return (
    <html lang="en">
      <body>
        <ScrollObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}