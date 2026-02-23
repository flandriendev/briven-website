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
        Briven is a secure, native Python/FastAPI framework for building
        self-correcting AI agents. It integrates Tailscale for zero-trust
        networking, allowing agents to operate safely anywhere. With modular
        skills, strict{" "}
        <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">
          /atlas
        </code>{" "}
        discipline, and robust messaging extensions for Telegram, WhatsApp, and
        email, your agents are ready for the real world.
      </p>
    </motion.section>
  );
}
