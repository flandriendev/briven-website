"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrivenLogo from "@/components/BrivenLogo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full pt-16 pb-12 flex flex-col items-center justify-center text-center px-6 max-[480px]:px-4 overflow-hidden">
      {/* Space gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[80px] rounded-full" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary/8 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[200px] bg-orange-500/5 blur-[100px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center max-w-3xl"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mt-14 mb-6">
          <BrivenLogo className="w-40 h-40" />
        </motion.div>

        {/* Brand name */}
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl font-bold tracking-tighter mb-4 text-foreground"
        >
          Briven
        </motion.h1>

        {/* Tagline in brand color */}
        <motion.p
          variants={itemVariants}
          className="text-primary text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-8"
        >
          Personal, autonomous AI agent framework.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
        >
          Built on Python/FastAPI, disciplined by /atlas, and secured by
          Tailscale zero-trust networking. Self-extending, memory-persistent,
          with native messaging for Telegram, WhatsApp, Discord, Slack, and
          email.
        </motion.p>

        {/* Announcement pill */}
        <motion.div variants={itemVariants}>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-card/80 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/15 px-2 py-0.5 rounded">
              New
            </span>
            <span>Briven AI Skill Tools Section</span>
            <span className="text-primary">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
