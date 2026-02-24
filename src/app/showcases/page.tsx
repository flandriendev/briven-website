"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ShowcaseItem {
  author: string;
  avatar: string;
  category: { emoji: string; label: string };
  likes: number;
  description: string;
  link?: string;
}

const showcases: ShowcaseItem[] = [
  {
    author: "@devmarkus",
    avatar: "/avatars/markus.jpg",
    category: { emoji: "⚡", label: "Automation" },
    likes: 42,
    description:
      "Set up Briven on a Mac Mini with Tailscale. It processes my emails, triages them by urgency, drafts responses, and syncs action items to my calendar — all running on my private tailnet. Zero cloud dependency.",
    link: "#",
  },
  {
    author: "@sarahcodes",
    avatar: "/avatars/sarah.jpg",
    category: { emoji: "🔧", label: "Developer" },
    likes: 38,
    description:
      "Using Briven's multi-agent cooperation for my CI pipeline. One agent reviews PRs, another runs tests, and a third deploys to staging. They coordinate via A2A protocol. My team thought I hired a junior dev.",
    link: "#",
  },
  {
    author: "@jensbuilds",
    avatar: "/avatars/jens.jpg",
    category: { emoji: "🏠", label: "Smart Home" },
    likes: 35,
    description:
      "Connected Briven to my Home Assistant via MCP. I message it on Telegram: 'movie night' and it dims the lights, turns on the projector, and queues up my watchlist. All voice-driven through Whisper STT.",
    link: "#",
  },
  {
    author: "@linuxpete",
    avatar: "/avatars/pete.jpg",
    category: { emoji: "🛡️", label: "Security" },
    likes: 31,
    description:
      "Running Briven as a security monitor on my VPS fleet. It checks logs every 15 minutes via scheduled tasks, flags anomalies, and sends me a Discord alert with a summary. The /atlas governance keeps it from going rogue.",
    link: "#",
  },
  {
    author: "@annaresearch",
    avatar: "/avatars/anna.jpg",
    category: { emoji: "🔬", label: "Research" },
    likes: 29,
    description:
      "Briven's hybrid memory (FAISS + BM25) is incredible for research. I feed it papers all week, then on Friday ask it to synthesize findings. It remembers everything across sessions with semantic search. Game changer.",
    link: "#",
  },
  {
    author: "@tomhacks",
    avatar: "/avatars/tom.jpg",
    category: { emoji: "🤖", label: "Multi-Agent" },
    likes: 27,
    description:
      "Built a content pipeline with 3 Briven agents: researcher gathers data, writer drafts articles, editor reviews. Sequential delegation handles the workflow. Outputs to Slack via webhook. Fully self-hosted.",
    link: "#",
  },
  {
    author: "@devflandr",
    avatar: "/avatars/flandr.jpg",
    category: { emoji: "📧", label: "Messaging" },
    likes: 25,
    description:
      "Briven handles all my messaging channels — Telegram for quick tasks, WhatsApp for family reminders, email for formal replies. One agent, five channels, zero exposed ports. Tailscale makes it feel like magic.",
    link: "#",
  },
  {
    author: "@cloudykim",
    avatar: "/avatars/kim.jpg",
    category: { emoji: "📊", label: "Productivity" },
    likes: 24,
    description:
      "Every morning at 7am Briven sends me a daily briefing on Telegram: weather, calendar, top emails, and a prioritized task list. Cron scheduling with auto-retry means it never misses. Better than any commercial assistant.",
    link: "#",
  },
  {
    author: "@rustynova",
    avatar: "/avatars/nova.jpg",
    category: { emoji: "🧩", label: "Skills" },
    likes: 22,
    description:
      "Published my first SKILL.md for Briven — it connects to my finance API, tracks expenses, and generates monthly reports. The portable skill format means it works in Claude and Cursor too. One skill, three platforms.",
    link: "#",
  },
  {
    author: "@dockerdan",
    avatar: "/avatars/dan.jpg",
    category: { emoji: "🐳", label: "Deployment" },
    likes: 20,
    description:
      "Deployed Briven in Docker with the visual TUI installer. Took 10 minutes from zero to working agent. The isolation means untrusted skills can't touch my host system. Security-first approach done right.",
    link: "#",
  },
  {
    author: "@voicevera",
    avatar: "/avatars/vera.jpg",
    category: { emoji: "🎙️", label: "Voice" },
    likes: 19,
    description:
      "Briven with Whisper STT + Kokoro TTS on my home server. I talk to it through Telegram voice messages and it responds with synthesized speech. Local voice AI without sending audio to any cloud. Privacy preserved.",
    link: "#",
  },
  {
    author: "@hackerhiro",
    avatar: "/avatars/hiro.jpg",
    category: { emoji: "🔍", label: "Recon" },
    likes: 17,
    description:
      "Using the hacker agent profile for CTF competitions. Briven's tool execution with exec-approvals means it can run recon tools but I still approve every command. 94 extension hooks let me log everything.",
    link: "#",
  },
];

const categoryColors: Record<string, string> = {
  Automation: "#f97316",
  Developer: "#3b82f6",
  "Smart Home": "#22c55e",
  Security: "#ef4444",
  Research: "#a855f7",
  "Multi-Agent": "#06b6d4",
  Messaging: "#ec4899",
  Productivity: "#eab308",
  Skills: "#f59e0b",
  Deployment: "#0ea5e9",
  Voice: "#8b5cf6",
  Recon: "#64748b",
};

export default function ShowcasesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4 pt-20 pb-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
              <span className="text-primary mr-2">⟩</span>Showcase
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              What people are building with Briven. Real projects, real
              automation, real infrastructure.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 gap-4 [&>*]:mb-4">
            {showcases.map((item, idx) => {
              const color =
                categoryColors[item.category.label] || "#6b7280";
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.4 }}
                  className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(238,69,70,0.08)] transition-all duration-300 break-inside-avoid"
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover shrink-0"
                      />
                      <span className="text-sm font-semibold text-foreground">
                        {item.author}
                      </span>
                    </div>
                    <span
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                      style={{
                        color,
                        background: `${color}15`,
                        border: `1px solid ${color}25`,
                      }}
                    >
                      {item.category.emoji} {item.category.label}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                      <Heart className="w-4.5 h-4.5 text-primary" />
                      {item.likes}
                    </span>
                    {item.link && (
                      <span className="text-xs text-primary/70 group-hover:text-primary transition-colors flex items-center gap-1">
                        View <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground tracking-tight mb-2">
              Built something cool?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Share your Briven setup with the community. Tag us on X or drop it
              in Discord.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://github.com/flandriendev/briven"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-primary/25 bg-primary/[0.06] text-foreground hover:border-primary hover:-translate-y-px transition-all"
              >
                Share on GitHub
              </Link>
              <Link
                href="https://skillshub.briven.ai"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-border bg-card text-foreground hover:bg-secondary hover:-translate-y-px transition-all"
              >
                Browse Skills
              </Link>
              <Link
                href="https://discord.com/channels/1475388668721107081/1475388669639790765"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-border bg-card text-foreground hover:bg-secondary hover:-translate-y-px transition-all"
              >
                Join Discord
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
