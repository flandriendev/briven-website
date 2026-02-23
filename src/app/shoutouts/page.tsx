"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shoutouts = [
  {
    quote:
      "Briven is exactly what I needed. Self-hosted, secure, and it just works. Set it up on my Mac Mini and it's been running flawlessly.",
    handle: "@devmarkus",
    avatar: "/avatars/markus.jpg",
  },
  {
    quote:
      "The Tailscale integration is chef's kiss. Zero-trust networking without any of the headaches. My agents run securely across all my devices.",
    handle: "@sarahcodes",
    avatar: "/avatars/sarah.jpg",
  },
  {
    quote:
      "Finally an AI agent framework that respects my data. Everything stays on my infrastructure. The /atlas discipline keeps outputs consistent.",
    handle: "@jensbuilds",
    avatar: "/avatars/jens.jpg",
  },
  {
    quote:
      "Modular skills are a game-changer. I hooked up Telegram, WhatsApp, and email in one afternoon. The Python/FastAPI base makes extending it trivial.",
    handle: "@annadev_",
    avatar: "/avatars/anna.jpg",
  },
  {
    quote:
      "Been looking for something like this for months. Open source, self-correcting agents, multi-LLM support. Briven checks every box.",
    handle: "@tomstack",
    avatar: "/avatars/tom.jpg",
  },
  {
    quote:
      "Set up Briven on a $5 VPS with Tailscale and it's been serving my team perfectly. The quick start script made deployment a breeze.",
    handle: "@lucaships",
    avatar: "/avatars/lucas.jpg",
  },
  {
    quote:
      "The self-correcting agent loop is incredibly robust. It handles edge cases I didn't even think about. Production-ready out of the box.",
    handle: "@emilycli",
    avatar: "/avatars/emily.jpg",
  },
  {
    quote:
      "I replaced three separate tools with Briven. It handles my calendar, emails, and Telegram bots all from one framework. Brilliant architecture.",
    handle: "@pietervdb",
    avatar: "/avatars/pieter.jpg",
  },
  {
    quote:
      "The MCP and A2A setup guides are excellent. Had multi-agent orchestration running in under an hour. This project has serious potential.",
    handle: "@noahmaker",
    avatar: "/avatars/noah.jpg",
  },
  {
    quote:
      "As someone who cares deeply about privacy, Briven is a breath of fresh air. No cloud dependency, no data leaving my network. Love it.",
    handle: "@linapriv",
    avatar: "/avatars/lina.jpg",
  },
  {
    quote:
      "Contributing to Briven has been great. The codebase is clean, well-documented, and the community on Discord is super helpful.",
    handle: "@maxopensrc",
    avatar: "/avatars/max.jpg",
  },
  {
    quote:
      "Swapped from a cloud-hosted agent to Briven on my own infra. Faster responses, zero API costs for the framework itself, full control.",
    handle: "@sofieai",
    avatar: "/avatars/sofie.jpg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function ShoutoutsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
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
              <span className="text-primary mr-2">⟩</span>Shoutouts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              What the community is saying about Briven. Real feedback from
              developers who run it on their own infrastructure.
            </p>
          </motion.div>

          {/* Masonry-style grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {shoutouts.map((s, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="break-inside-avoid group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(238,69,70,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <Image
                    src={s.avatar}
                    alt={s.handle}
                    width={48}
                    height={48}
                    className="rounded-full bg-secondary shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                    <span className="text-sm font-medium text-primary">
                      {s.handle}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
