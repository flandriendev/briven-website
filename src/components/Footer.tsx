"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Skills", href: "/skills" },
  { label: "Changelog", href: "/changelog" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Sponsors", href: "https://github.com/sponsors/flandriendev" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-8">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Inline navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Attribution & socials */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/flandriendev/briven"
              target="_blank"
              className="text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              <span className="sr-only">X.com</span>
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/40 text-center">
            &copy; {new Date().getFullYear()} Built by{" "}
            <span style={{ color: "#fbe731" }}>flndrn</span>, <span style={{ color: "#bcee68" }}>Linus bot</span> &amp; <span style={{ color: "#ee4546" }}>community</span>.
            Independent project.
          </p>
        </div>
      </div>
    </footer>
  );
}
