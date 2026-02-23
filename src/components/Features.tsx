"use client";

import { motion } from "framer-motion";
import { Shield, Blocks, Bot, FileCheck2, Cpu, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Tailscale Security",
    description:
      "Zero-trust networking out of the box. Your agents run securely on your private tailnet, anywhere in the world.",
    icon: <Shield className="h-6 w-6 text-primary" />,
  },
  {
    title: "Modular Skills",
    description:
      "Extend functionality via Python. Seamlessly hook into Telegram, WhatsApp, Email, and more.",
    icon: <Blocks className="h-6 w-6 text-primary" />,
  },
  {
    title: "Multi-LLM Support",
    description:
      "Model-agnostic to the core. Bring your own models locally or securely connect to cloud providers.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
  },
  {
    title: "Self-Correcting Agents",
    description:
      "Built-in reasoning loops handle errors gracefully and autonomously retry failed tasks.",
    icon: <Bot className="h-6 w-6 text-primary" />,
  },
  {
    title: "/atlas Discipline",
    description:
      "Strict project guidelines maintained through the /atlas system for consistent, high-quality generation.",
    icon: <FileCheck2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Native Python/FastAPI",
    description:
      "High performance, async-first architecture. The perfect bridge between AI and infrastructure.",
    icon: <Zap className="h-6 w-6 text-primary" />,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/40 transition-colors duration-300">
              <div className="mb-5">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>
              <Link
                href="#"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
