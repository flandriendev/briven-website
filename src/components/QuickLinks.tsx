"use client";

import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Github, Heart } from "lucide-react";
import Link from "next/link";

const links = [
  {
    icon: <MessageCircle className="h-7 w-7 text-primary" />,
    label: "Discord",
    description: "Join the community",
    href: "https://discord.com/channels/1475388668721107081/1475388669639790765",
  },
  {
    icon: <BookOpen className="h-7 w-7 text-primary" />,
    label: "Documentation",
    description: "Learn the ropes",
    href: "/docs",
  },
  {
    icon: <Github className="h-7 w-7 text-primary" />,
    label: "GitHub",
    description: "View the source",
    href: "https://github.com/flandriendev/briven",
  },
  {
    icon: <Heart className="h-7 w-7 text-primary" />,
    label: "Sponsors",
    description: "Support the project",
    href: "https://github.com/sponsors/flandriendev",
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link, idx) => (
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
              className="flex flex-col items-center text-center bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="mb-3">{link.icon}</div>
              <span className="text-sm font-semibold text-foreground">
                {link.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {link.description}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
