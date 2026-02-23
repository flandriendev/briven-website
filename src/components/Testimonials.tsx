"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
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
];

const testimonialsRow2 = [
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

function TestimonialCard({
  quote,
  handle,
  avatar,
}: {
  quote: string;
  handle: string;
  avatar: string;
}) {
  return (
    <div className="flex-shrink-0 w-[360px] bg-card border border-border rounded-2xl p-5 mx-2">
      <div className="flex items-start gap-3">
        <Image
          src={avatar}
          alt={handle}
          width={40}
          height={40}
          className="rounded-full bg-secondary shrink-0"
        />
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            &ldquo;{quote}&rdquo;
          </p>
          <span className="text-sm font-medium text-primary">{handle}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          <span className="text-primary mr-2">⟩</span>What People Say
        </h2>
        <Link
          href="/shoutouts"
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View all →
        </Link>
      </div>

      {/* Row 1: slides right to left */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-left">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <TestimonialCard key={`r1-${idx}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2: slides left to right */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-right">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, idx) => (
            <TestimonialCard key={`r2-${idx}`} {...t} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
