"use client";

import { motion } from "framer-motion";
import { Shield, Blocks, Bot, FileCheck2, Cpu, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Tailscale Security",
    description:
      "Zero-trust networking out of the box. Your agents run securely on your private tailnet, anywhere in the world.",
    icon: <Shield className="h-7 w-7 text-primary" />,
    href: "/docs/vps-tailscale",
  },
  {
    title: "Modular Skills",
    description:
      "Extend functionality via Python. Seamlessly hook into Telegram, WhatsApp, Email, and more.",
    icon: <Blocks className="h-7 w-7 text-primary" />,
    href: "/skills",
  },
  {
    title: "Multi-LLM Support",
    description:
      "Model-agnostic to the core. Bring your own models locally or securely connect to cloud providers.",
    icon: <Cpu className="h-7 w-7 text-primary" />,
    href: "/docs/architecture",
  },
  {
    title: "Self-Correcting Agents",
    description:
      "Built-in reasoning loops handle errors gracefully and autonomously retry failed tasks.",
    icon: <Bot className="h-7 w-7 text-primary" />,
    href: "/docs/usage",
  },
  {
    title: "/atlas Discipline",
    description:
      "Strict project guidelines maintained through the /atlas system for consistent, high-quality generation.",
    icon: <FileCheck2 className="h-7 w-7 text-primary" />,
    href: "/docs/usage",
  },
  {
    title: "Native Python/FastAPI",
    description:
      "High performance, async-first architecture. The perfect bridge between AI and infrastructure.",
    icon: <Zap className="h-7 w-7 text-primary" />,
    href: "/docs/architecture",
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
      <div className="grid grid-cols-3 gap-4">
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
