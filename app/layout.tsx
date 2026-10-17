import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageIntro } from "@/components/page-intro";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICpEP SE – PUP Manila",
  description:
    "Institute of Computer Engineers of the Philippines – Student Edition, PUP Manila chapter.",
};

// Runs before first paint and opts the intro in. Contract: docs/intro.md
const INTRO_SCRIPT = `(function(){try{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.documentElement.dataset.intro=sessionStorage.getItem("icpep:intro")?"repeat":"play"}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-intro="skip"
      // INTRO_SCRIPT rewrites this before hydration.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        <PageIntro />
        {children}
      </body>
    </html>
  );
}
