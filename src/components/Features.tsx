"use client";

import { motion } from "framer-motion";
import { Shield, Blocks, Bot, FileCheck2, Cpu, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Tailscale Zero-Trust",
    description:
      "No exposed public ports. Encrypted WireGuard tunnels on your private tailnet with ACL enforcement.",
    icon: <Shield className="h-7 w-7 text-primary" />,
    href: "/features/tailscale-zero-trust",
  },
  {
    title: "Portable Skills",
    description:
      "SKILL.md standard compatible with Claude Code, Cursor, and OpenAI Codex CLI. One skill, multiple platforms.",
    icon: <Blocks className="h-7 w-7 text-primary" />,
    href: "/skills",
  },
  {
    title: "Multi-LLM via LiteLLM",
    description:
      "Model-agnostic via LiteLLM. OpenRouter, Anthropic, xAI, OpenAI, DeepSeek, Google, Groq, and more.",
    icon: <Cpu className="h-7 w-7 text-primary" />,
    href: "/features/multi-llm",
  },
  {
    title: "Multi-Agent Cooperation",
    description:
      "Sequential delegation, parallel execution (2-8 sub-agents), and A2A protocol for cross-system orchestration.",
    icon: <Bot className="h-7 w-7 text-primary" />,
    href: "/features/multi-agent",
  },
  {
    title: "/atlas Governance",
    description:
      "The /atlas instruction layer governs agent behavior. System prompt always reads /atlas before any action.",
    icon: <FileCheck2 className="h-7 w-7 text-primary" />,
    href: "/features/atlas-governance",
  },
  {
    title: "Hybrid Memory System",
    description:
      "SQLite + FAISS embeddings + BM25 hybrid search. Persistent memory across sessions with semantic recall.",
    icon: <Zap className="h-7 w-7 text-primary" />,
    href: "/features/hybrid-memory",
  },
];

export default function Features() {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-semibold tracking-tight mb-3">
        <span className="text-primary mr-2">⟩</span>What It Does
      </h2>
      <p className="text-muted-foreground mb-10 max-w-xl">
        Everything you need to build, deploy, and manage secure AI agents on
        your own infrastructure.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
          >
            <Link
              href={feature.href}
              className="flex flex-col items-center text-center h-full bg-card border border-border rounded-[14px] p-5 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(238,69,70,0.2)] transition-all duration-300 group no-underline"
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-sm font-semibold tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
