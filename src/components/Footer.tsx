"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { RiGithubFill, RiTwitterXLine } from "react-icons/ri";

const allNavLinks = [
  { label: "Docs", href: "/docs" },
  // { label: "GitHub", href: "https://github.com/flandriendev/briven" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Shoutouts", href: "/shoutouts" },
  // { label: "Showcases", href: "/showcases" },
  // TODO: Production – change href to "https://trust.briven.ai"
  { label: "Trust", href: "/trust" },
  // { label: "Changelog", href: "/changelog" },
  // { label: "Roadmap", href: "/roadmap" },
  // { label: "Sponsors", href: "https://github.com/sponsors/flandriendev" },
  // { label: "Privacy", href: "/privacy" },
  // { label: "Terms", href: "/terms" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Filter out the link matching the current top-level section, prepend Home when not on homepage
  const currentSection = "/" + pathname.split("/").filter(Boolean)[0];
  const navLinks = (() => {
    const filtered = allNavLinks.filter((link) => {
      if (link.href.startsWith("http")) return true;
      return link.href !== currentSection;
    });
    if (!isHome) {
      return [{ label: "Home", href: "/" }, ...filtered];
    }
    return filtered;
  })();
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex items-center gap-5"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -180 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 200, damping: 15 },
                },
              }}
            >
              <Link
                href="https://github.com/flandriendev/briven"
                target="_blank"
                className="footer-social-icon footer-social-github group"
              >
                <span className="sr-only">GitHub</span>
                <RiGithubFill className="h-5 w-5 relative z-10" />
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: 180 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 200, damping: 15 },
                },
              }}
            >
              <Link
                href="https://x.com/briven_ai"
                target="_blank"
                className="footer-social-icon footer-social-x group"
              >
                <span className="sr-only">X.com</span>
                <RiTwitterXLine className="h-5 w-5 relative z-10" />
              </Link>
            </motion.div>
          </motion.div>
          <p className="text-xs text-muted-foreground/40 text-center">
            &copy; {new Date().getFullYear()}  Built by{" "}
            <span style={{ color: "#afff92" }}>Linus</span>
            <Image src="/Linus.svg" alt="Linus" width={16} height={16} className="inline-block size-4 align-middle mx-1" />
            a lazy AI panda with a <span style={{ color: "#afff92" }}>soul</span>, by <span style={{ color: "#ee4546" }}>flndrn</span> &amp; <span style={{ color: "#ee4546" }}>community</span>.
            open-source project.
          </p>
        </div>
      </div>
    </footer>
  );
}
