import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import FloatingChat from "@/app/components/FloatingChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vexjkt.com"),
  title: "VEXJKT — Experience the Unforgettable | Jakarta Nightlife Events",
  description:
    "VEXJKT is Jakarta's premier event organizer for nightlife experiences. Discover upcoming club nights, themed parties, and exclusive events. Book your table or grab tickets now.",
  keywords: [
    "VEXJKT",
    "Jakarta nightlife",
    "event organizer Jakarta",
    "club events",
    "party Jakarta",
    "tickets Jakarta",
  ],
  openGraph: {
    title: "VEXJKT — Experience the Unforgettable",
    description:
      "Jakarta's premier nightlife event organizer. We organize events, you make memories.",
    url: "https://vexjkt.com",
    siteName: "VEXJKT",
    images: [{ url: "/images/hero-background.jpg", width: 1200, height: 630 }],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEXJKT — Experience the Unforgettable",
    description: "Jakarta's premier nightlife event organizer.",
    images: ["/images/hero-background.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-background text-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <FloatingChat />
      </body>
    </html>
  );
}
