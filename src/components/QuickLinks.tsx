"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  BookOpen,
  Github,
  Heart,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const links: {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
  glowColor: string;
}[] = [
  {
    icon: MessageCircle,
    label: "Discord",
    description: "Join the community",
    href: "https://discord.com/channels/1475388668721107081/1475388669639790765",
    glowColor: "#5865F2",
  },
  {
    icon: BookOpen,
    label: "Documentation",
    description: "Learn the ropes",
    href: "/docs",
    glowColor: "#3b82f6",
  },
  {
    icon: Github,
    label: "GitHub",
    description: "View the source",
    href: "https://github.com/flandriendev/briven",
    glowColor: "#ffffff",
  },
  {
    icon: Heart,
    label: "Sponsors",
    description: "Support the project",
    href: "https://github.com/sponsors/flandriendev",
    glowColor: "#fbe731",
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
        {links.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="group flex flex-col items-center text-center bg-card border border-border rounded-2xl p-6 transition-all duration-300"
                style={{ border: "1px solid transparent" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${link.glowColor}30`;
                  el.style.boxShadow = `0 0 30px ${link.glowColor}20, 0 0 60px ${link.glowColor}10`;
                  el.style.backgroundColor = `${link.glowColor}08`;
                  const icon = el.querySelector(".quick-link-icon") as HTMLElement;
                  if (icon) icon.style.color = link.glowColor;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "transparent";
                  el.style.boxShadow = "none";
                  el.style.backgroundColor = "";
                  const icon = el.querySelector(".quick-link-icon") as HTMLElement;
                  if (icon) icon.style.color = "";
                }}
              >
                <div className="mb-3">
                  <Icon className="quick-link-icon h-7 w-7 text-primary transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {link.label}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {link.description}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
