import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aakashshetty.dev"),
  title: "Aakash B Shetty | Software Developer",
  description:
    "Portfolio of Aakash B Shetty - Full-stack developer. Explore featured projects, engineering achievements, and technical skills.",
  keywords: [
    "Aakash B Shetty",
    "Software Developer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "AI Integration",
    "Portfolio",
  ],
  authors: [{ name: "Aakash B Shetty" }],
  openGraph: {
    title: "Aakash B Shetty | Software Developer",
    description:
      "Portfolio of Aakash B Shetty - Full-stack developer. Explore featured projects, engineering achievements, and technical skills.",
    url: "https://aakashshetty.dev",
    siteName: "Aakash B Shetty Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Aakash B Shetty Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash B Shetty | Software Developer",
    description:
      "Portfolio of Aakash B Shetty - Full-stack developer. Explore featured projects, engineering achievements, and technical skills.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} dark`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
