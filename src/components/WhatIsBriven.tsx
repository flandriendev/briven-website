"use client";

import { motion } from "framer-motion";

export default function WhatIsBriven() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-6"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-foreground">
        <span className="text-primary mr-2">⟩</span>What is Briven?
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Briven is a personal, autonomous AI agent framework — self-extending,
        memory-persistent, and structurally governed by the{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">
          /atlas
        </code>{" "}
        instruction layer. Built on Python/FastAPI with Tailscale zero-trust
        networking, hybrid memory (SQLite + FAISS + BM25), multi-agent
        cooperation, and messaging integrations for Telegram, WhatsApp,
        Discord, Slack, and email.
      </p>
    </motion.section>
  );
}
