"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Skills", href: "/skills" },
  { label: "Shoutouts", href: "/shoutouts" },
  { label: "Showcases", href: "/showcases" },
  { label: "Changelog", href: "/changelog" },
  // { label: "Roadmap", href: "/roadmap" },
  // TODO: Production – change href to "https://trust.briven.ai"
  { label: "Trust", href: "/trust" },
  // { label: "Sponsors", href: "https://github.com/sponsors/flandriendev" },
  // { label: "Privacy", href: "/privacy" },
  // { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-8">
      <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4 py-10">
        {/* Inline navigation links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="flex flex-wrap items-center justify-center gap-y-2 mb-8"
        >
          {navLinks.map((link, idx) => (
            <motion.span
              key={link.label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
              }}
              className="flex items-center"
            >
              {idx > 0 && (
                <span className="w-1 h-1 rounded-full bg-primary mx-3" />
              )}
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="text-sm text-primary/70 hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                {link.label}
              </Link>
            </motion.span>
          ))}
        </motion.div>

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
              <RiTwitterXLine className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/40 text-center">
            &copy; {new Date().getFullYear()}  Built by{" "}
            <span style={{ color: "#afff92" }}>Linus</span>
            <Image src="/Linus.svg" alt="Linus" width={16} height={16} className="inline-block size-4 align-middle mx-1" />
            a lazy AI panda with a <span style={{ color: "#afff92" }}>soul</span>, by <span style={{ color: "#ee4546" }}>flndrn</span> &amp; <span style={{ color: "#ee4546" }}>community</span>.
            Independent open-source project.
          </p>
        </div>
      </div>
    </footer>
  );
}
