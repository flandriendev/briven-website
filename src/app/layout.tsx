import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ConvexClientProvider from "@/components/ConvexClientProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Briven – Secure Self-Hosted AI Agent Framework",
  description:
    "Secure, extensible, self-hosted AI agent framework with Tailscale zero-trust security, modular skills, and multi-LLM support.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Briven – Secure Self-Hosted AI Agent Framework",
    description:
      "Secure, extensible, self-hosted AI agent framework with Tailscale zero-trust security, modular skills, and multi-LLM support.",
    images: ["/og-image.png"],
    type: "website",
    url: "https://briven.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briven – Secure Self-Hosted AI Agent Framework",
    description:
      "Secure, extensible, self-hosted AI agent framework with Tailscale zero-trust security.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://briven.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-primary/30 selection:text-white`}
      >
        <ConvexClientProvider>
          {children}
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
