import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cakrasera.com"), // Replace with your actual domain
  title: {
    default: "Rakhel Cakra Kusumadinata Sera | Fullstack Web Developer",
    template: "%s | Rakhel Cakra Kusumadinata Sera",
  },
  description:
    "Rakhel Cakra Kusumadinata Sera (Cakra) - Professional Fullstack Web Developer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Based in Tangerang Selatan, Indonesia.",
  keywords: [
    "Rakhel Cakra Kusumadinata Sera",
    "Rakhel Cakra",
    "Cakra Sera",
    "Cakra",
    "Fullstack Developer",
    "Web Developer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tangerang Developer",
    "Indonesian Web Developer",
  ],
  authors: [
    { name: "Rakhel Cakra Kusumadinata Sera", url: "https://cakrasera.com" },
  ],
  creator: "Rakhel Cakra Kusumadinata Sera",
  publisher: "Rakhel Cakra Kusumadinata Sera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cakrasera.com",
    title: "Rakhel Cakra Kusumadinata Sera | Fullstack Web Developer",
    description:
      "Professional Fullstack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Rakhel Cakra Kusumadinata Sera Portfolio",
    images: [
      {
        url: "/images/web-profile-img.jpg",
        width: 1200,
        height: 630,
        alt: "Rakhel Cakra Kusumadinata Sera - Fullstack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakhel Cakra Kusumadinata Sera | Fullstack Web Developer",
    description:
      "Professional Fullstack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/images/web-profile-img.jpg"],
    creator: "@YourTwitterHandle", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png?v=2",
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rakhel Cakra Kusumadinata Sera",
    alternateName: ["Cakra Sera", "Rakhel Cakra", "Cakra"],
    url: "https://cakrasera.com",
    image: "https://cakrasera.com/images/web-profile-img.jpg",
    jobTitle: "Fullstack Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tangerang Selatan",
      addressRegion: "Banten",
      addressCountry: "Indonesia",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Palangka Raya",
    },
    knowsAbout: [
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Vue.js",
      "Nuxt.js",
      "MongoDB",
      "PostgreSQL",
      "Frontend Development",
      "Backend Development",
      "Fullstack Development",
    ],
    sameAs: [
      "https://github.com/CakraSera",
      "https://www.linkedin.com/in/rakhelcakrakusumadinatasera/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
