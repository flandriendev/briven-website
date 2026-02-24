"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const tabs = [
  {
    label: "One-liner",
    command:
      "curl -fsSL https://raw.githubusercontent.com/flandriendev/briven/main/install.sh | bash",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    label: "Docker",
    command:
      "git clone https://github.com/flandriendev/briven.git && cd briven && docker compose up -d --build",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
];

export default function QuickStart() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(tabs[activeTab].command);
    setCopied(true);
    toast.success("Command copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <h2 className="text-3xl font-semibold tracking-tight mb-3">
        <span className="text-primary mr-2">⟩</span>Quick Start
      </h2>
      <p className="text-muted-foreground mb-8">
        Get up and running in seconds. Works everywhere.
      </p>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {/* Tab bar */}
        <div className="flex items-center gap-2 px-4 pt-4 pb-0">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                activeTab === idx
                  ? tab.color
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code block */}
        <div className="relative p-4 pt-5">
          <div className="flex items-center justify-between bg-[#0d0f16] border border-border rounded-xl p-4 pl-5 overflow-x-auto">
            <code className="text-sm md:text-base font-mono text-primary/90 whitespace-nowrap overflow-hidden">
              <span className="text-muted-foreground select-none opacity-50 mr-3">
                $
              </span>
              {tabs[activeTab].command}
            </code>
            <div className="pl-4 ml-auto bg-[#0d0f16] sticky right-0">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 hover:bg-muted hover:text-foreground text-muted-foreground transition-all"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
