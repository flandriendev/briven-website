"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { skills } from "@/lib/skills";
import {
  Globe,
  FolderOpen,
  Terminal,
  Mail,
  Brain,
  Mic,
  Database,
  Clock,
  Users,
  ShieldCheck,
  ArrowLeft,
  Search,
  Rocket,
  Bug,
  Zap,
} from "lucide-react";
import {
  RiTelegramFill,
  RiWhatsappFill,
  RiSlackFill,
  RiDiscordFill,
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiRedditFill,
  RiTiktokFill,
  RiGithubFill,
  RiAnthropicFill,
} from "react-icons/ri";
import { IoLogoDocker } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { SiTailscale } from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  /* Lucide — generic skills */
  Globe: <Globe className="h-7 w-7" />,
  FolderOpen: <FolderOpen className="h-7 w-7" />,
  Terminal: <Terminal className="h-7 w-7" />,
  Mail: <Mail className="h-7 w-7" />,
  Brain: <Brain className="h-7 w-7" />,
  Mic: <Mic className="h-7 w-7" />,
  Database: <Database className="h-7 w-7" />,
  Clock: <Clock className="h-7 w-7" />,
  Users: <Users className="h-7 w-7" />,
  ShieldCheck: <ShieldCheck className="h-7 w-7" />,
  Rocket: <Rocket className="h-7 w-7" />,
  Bug: <Bug className="h-7 w-7" />,
  Zap: <Zap className="h-7 w-7" />,
  /* React-icons — brand icons */
  Telegram: <RiTelegramFill className="h-7 w-7" />,
  WhatsApp: <RiWhatsappFill className="h-7 w-7" />,
  Slack: <RiSlackFill className="h-7 w-7" />,
  Discord: <RiDiscordFill className="h-7 w-7" />,
  Facebook: <RiFacebookFill className="h-7 w-7" />,
  XTwitter: <RiTwitterXFill className="h-7 w-7" />,
  Instagram: <RiInstagramFill className="h-7 w-7" />,
  LinkedIn: <RiLinkedinFill className="h-7 w-7" />,
  Reddit: <RiRedditFill className="h-7 w-7" />,
  TikTok: <RiTiktokFill className="h-7 w-7" />,
  GitHub: <RiGithubFill className="h-7 w-7" />,
  Anthropic: <RiAnthropicFill className="h-7 w-7" />,
  Tailscale: <SiTailscale className="h-7 w-7" />,
  VSCode: <VscVscode className="h-7 w-7" />,
  Docker: <IoLogoDocker className="h-7 w-7" />,
  MaviFinans: <Image src="/companies/mavi-finans.svg" alt="mavi Finans" width={28} height={28} className="h-7 w-7" />,
};

/* ── Brand colors by skill slug ── */
const brandColors: Record<string, string> = {
  // Messaging
  telegram: "#26A5E4",
  whatsapp: "#25D366",
  slack: "#36C5F0",
  discord: "#5865F2",
  email: "#EA4335",
  // Social
  facebook: "#1877F2",
  "x-twitter": "#ffffff",
  instagram: "#E4405F",
  linkedin: "#0A66C2",
  reddit: "#FF4500",
  tiktok: "#FE2C55",
  // Security
  tailscale: "#797878",
  // Payment
  "mavi-payment-agent": "#45b1e8",
  "mavi-rewards-tracker": "#45b1e8",
  // Developer
  "claude-code": "#D97757",
  github: "#f0f0f2",
  "vscode-control": "#0076B8",
  "docker-management": "#1d63ed",
};

const categoryMeta: Record<string, { description: string }> = {
  Messaging: {
    description:
      "Connect your agents to chat apps — Telegram, WhatsApp, Discord, Slack, and more.",
  },
  Data: {
    description:
      "Browse, scrape, and extract data from the web.",
  },
  System: {
    description:
      "File management, scheduling, and system-level operations.",
  },
  Developer: {
    description:
      "Code generation, execution, reviews, and CI/CD automation.",
  },
  Security: {
    description:
      "Zero-trust networking, skill scanning, and infrastructure protection.",
  },
  Core: {
    description:
      "Memory, multi-agent orchestration, and foundational agent capabilities.",
  },
  Interface: {
    description:
      "Voice, speech-to-text, and text-to-speech interfaces.",
  },
  Social: {
    description:
      "Post, engage, and manage your social media presence.",
  },
  Payment: {
    description:
      "Payment processing, cashback rewards, and financial integrations powered by mavi Finans.",
  },
};

const categoryOrder = [
  "Messaging",
  "Core",
  "Developer",
  "Payment",
  "Data",
  "System",
  "Security",
  "Interface",
  "Social",
];

export default function SkillsPage() {
  const [search, setSearch] = useState("");

  const filtered = skills.filter((s) => {
    return (
      search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      skills: filtered.filter((s) => s.category === cat),
    }))
    .filter((g) => g.skills.length > 0);

  const totalCount = skills.length;
  const availableCount = skills.filter((s) => s.status === "available").length;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-6 max-[480px]:px-4 pt-20 pb-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </motion.div>

          {/* Hero header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground mb-4 italic">
              Skill Tools
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              {totalCount}+ skill tools for your Briven agents.
              <br className="hidden sm:block" />
              Extend agent capabilities with built-in and community skills.
            </p>

            {/* Counts */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className="text-sm font-medium text-primary">
                {availableCount} Available
              </span>
              <span className="text-sm font-medium text-amber-500/80">
                {totalCount - availableCount} Coming Soon
              </span>
            </div>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-11 pl-11 pr-4 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
              />
            </div>
          </motion.div>

          {/* Category sections */}
          {grouped.map((group, groupIdx) => (
            <motion.section
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: groupIdx * 0.04 }}
              className="mb-16"
            >
              {/* Category header */}
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-1">
                {group.category}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {categoryMeta[group.category]?.description}
              </p>

              {/* Skill cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {group.skills.map((skill, idx) => {
                  const brand = brandColors[skill.slug] || "#ee4546";
                  return (
                    <motion.div
                      key={skill.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        href={`/skills/${skill.slug}`}
                        style={{ "--brand": brand } as React.CSSProperties}
                        className={`skill-card group relative flex flex-col items-center text-center p-5 rounded-2xl border bg-card no-underline h-full ${
                          skill.status === "coming-soon"
                            ? "skill-card-soon"
                            : ""
                        }`}
                      >
                        {/* Coming soon badge */}
                        {skill.status === "coming-soon" && (
                          <div className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                            Soon
                          </div>
                        )}

                        {/* Icon */}
                        <div className="skill-card-icon mb-3 p-3 rounded-xl">
                          {iconMap[skill.icon]}
                        </div>

                        {/* Name */}
                        <h3 className="skill-card-name text-sm font-semibold tracking-tight mb-1">
                          {skill.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground/70 leading-relaxed line-clamp-2">
                          {skill.description}
                        </p>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          ))}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No skills match your search.
              </p>
            </div>
          )}

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8 mb-4"
          >
            <div className="border border-border rounded-2xl bg-card p-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">
                Ready to get started?
              </h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Install Briven and start using these skill tools in minutes.
              </p>
              <Link
                href="/docs/quick-start"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:brightness-110 transition-all no-underline"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
