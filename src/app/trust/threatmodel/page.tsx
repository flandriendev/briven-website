"use client";

import { useState } from "react";
import Link from "next/link";
import BrivenLogo from "@/components/BrivenLogo";
import { X } from "lucide-react";
import {
  threats,
  tactics,
  attackChains,
  trustBoundaries,
  type Threat,
} from "./threats";

function riskColor(risk: string) {
  switch (risk) {
    case "Critical":
      return "#ef4444";
    case "High":
      return "#f97316";
    case "Medium":
      return "#eab308";
    case "Low":
      return "#22c55e";
    default:
      return "#6b7280";
  }
}

const stats = {
  total: threats.length,
  critical: threats.filter((t) => t.risk === "Critical").length,
  high: threats.filter((t) => t.risk === "High").length,
  medium: threats.filter((t) => t.risk === "Medium").length,
  low: threats.filter((t) => t.risk === "Low").length,
};

export default function ThreatModelPage() {
  const [selected, setSelected] = useState<Threat | null>(null);

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      {/* Sticky topbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4 h-[52px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <BrivenLogo className="h-7 w-7" />
            <span className="font-semibold text-sm tracking-tight">
              Briven
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/trust"
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              Trust
            </Link>
            <Link
              href="/trust/threatmodel"
              className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-primary"
            >
              Threat Model
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-[720px] mx-auto px-6 max-[480px]:px-4 py-10">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight mb-2">
            Threat Model
          </h1>
          <p className="text-sm text-muted-foreground">
            MITRE ATLAS Framework for AI Agent Security
          </p>
          <div className="flex items-center gap-3 mt-3">
            <span className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-muted-foreground border border-border">
              v1.0-draft
            </span>
            <span className="text-xs text-muted-foreground">
              MITRE ATLAS 2025
            </span>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-3 mb-10">
          <div className="text-center p-3 rounded-xl border border-border bg-card">
            <div className="text-2xl font-bold text-foreground">
              {stats.total}
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">
              Total Threats
            </div>
          </div>
          {(
            [
              ["critical", stats.critical, "#ef4444"],
              ["high", stats.high, "#f97316"],
              ["medium", stats.medium, "#eab308"],
              ["low", stats.low, "#22c55e"],
            ] as const
          ).map(([label, count, color]) => (
            <div
              key={label}
              className="text-center p-3 rounded-xl border border-border bg-card"
            >
              <div className="text-2xl font-bold" style={{ color }}>
                {count}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5 capitalize">
                {label} Risk
              </div>
            </div>
          ))}
        </div>

        {/* Filter legend */}
        <div className="flex items-center gap-2 mb-6">
          {(["Critical", "High", "Medium", "Low"] as const).map((r) => (
            <span
              key={r}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: riskColor(r) }}
              />
              {r}
            </span>
          ))}
        </div>

        {/* Threat Matrix */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-4">
            Threat Matrix by ATLAS Tactic
          </h2>

          <div className="overflow-x-auto -mx-6 px-6 max-[480px]:-mx-4 max-[480px]:px-4">
            <div className="flex gap-2.5 min-w-max pb-4">
              {tactics.map((tactic) => {
                const tacticThreats = threats.filter(
                  (t) => t.tactic === tactic.name
                );
                return (
                  <div key={tactic.name} className="w-[180px] shrink-0">
                    <div className="p-3 rounded-xl bg-secondary border border-border mb-2">
                      <div className="font-semibold text-foreground text-xs">
                        {tactic.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-mono">
                        {tactic.atlas}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {tacticThreats.map((threat) => (
                        <button
                          key={threat.id}
                          onClick={() => setSelected(threat)}
                          className={`text-left w-full p-2.5 rounded-lg border transition-colors cursor-pointer ${
                            selected?.id === threat.id
                              ? "border-primary bg-primary/5"
                              : "border-border bg-card hover:bg-secondary"
                          }`}
                        >
                          <div className="text-[10px] font-mono text-muted-foreground">
                            {threat.id}
                          </div>
                          <div className="text-xs font-medium text-foreground leading-snug mt-0.5">
                            {threat.name}
                          </div>
                          <div className="flex gap-1 mt-1.5 flex-wrap">
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {threat.atlas}
                            </span>
                            <span
                              className="text-[10px] font-semibold px-1.5 py-px rounded"
                              style={{
                                color: riskColor(threat.risk),
                                background: `${riskColor(threat.risk)}15`,
                              }}
                            >
                              {threat.risk}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Critical Attack Chains */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-4">
            Critical Attack Chains
          </h2>
          <div className="flex flex-col gap-3">
            {attackChains.map((chain) => (
              <div
                key={chain.title}
                className="p-4 rounded-xl border border-border bg-card"
              >
                <div className="font-semibold text-foreground text-sm mb-2">
                  {chain.title}
                </div>
                <div className="flex flex-wrap items-center gap-1 mb-2">
                  {chain.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          const t = threats.find((th) => th.id === step);
                          if (t) setSelected(t);
                        }}
                        className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-secondary border border-border text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                      >
                        {step}
                      </button>
                      {i < chain.steps.length - 1 && (
                        <span className="text-muted-foreground text-xs">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {chain.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Boundaries */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-4">
            Trust Boundaries
          </h2>
          <div className="flex flex-col gap-3">
            {trustBoundaries.map((b) => (
              <div
                key={b.num}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <div className="w-[38px] h-[38px] rounded-xl bg-primary grid place-items-center text-white font-black text-sm shrink-0">
                  {b.num}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {b.title}
                  </p>
                  <p className="text-xs text-muted-foreground mb-1.5">
                    {b.subtitle}
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    {b.controls.map((c) => (
                      <li key={c} className="flex items-start gap-1.5">
                        <span className="text-primary mt-1">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ATLAS attribution */}
        <section className="mb-6 p-4 rounded-xl border border-border bg-card text-xs text-muted-foreground">
          <p>
            Built on{" "}
            <a
              href="https://atlas.mitre.org/"
              target="_blank"
              className="text-primary underline underline-offset-2"
            >
              MITRE ATLAS
            </a>{" "}
            (Adversarial Threat Landscape for AI Systems)
          </p>
          <p className="mt-1">
            ATLAS is maintained by{" "}
            <a
              href="https://www.mitre.org/"
              target="_blank"
              className="text-primary underline underline-offset-2"
            >
              MITRE
            </a>{" "}
            in collaboration with the AI security community.
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <a
              href="https://atlas.mitre.org/techniques"
              target="_blank"
              className="text-primary underline underline-offset-2"
            >
              ATLAS Techniques
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href="https://atlas.mitre.org/tactics"
              target="_blank"
              className="text-primary underline underline-offset-2"
            >
              ATLAS Tactics
            </a>
          </div>
          <p className="mt-2">
            Report security issues to{" "}
            <a
              href="mailto:security@briven.ai"
              className="text-primary underline underline-offset-2"
            >
              security@briven.ai
            </a>
          </p>
          <p className="mt-1 text-muted-foreground/60">
            Briven Threat Model v1.0-draft
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-5 border-t border-border text-center text-sm text-muted-foreground">
          Briven Security Program
          <span className="inline-block w-1 h-1 rounded-full bg-primary mx-2.5 align-middle" />
          <Link
            href="https://briven.ai"
            className="text-primary/70 hover:text-primary transition-colors"
          >
            briven.ai
          </Link>
          <span className="inline-block w-1 h-1 rounded-full bg-primary mx-2.5 align-middle" />
          <Link
            href="https://skillshub.briven.ai"
            className="text-primary/70 hover:text-primary transition-colors"
          >
            skillshub.briven.ai
          </Link>
        </footer>
      </main>

      {/* Detail overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 p-5 border-b border-border">
              <div>
                <div className="text-xs text-muted-foreground font-mono mb-1">
                  {selected.id} &bull; {selected.tactic}
                </div>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {selected.name}
                </h3>
                <div className="flex gap-1.5 mt-2">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{
                      color: riskColor(selected.risk),
                      background: `${riskColor(selected.risk)}15`,
                      border: `1px solid ${riskColor(selected.risk)}30`,
                    }}
                  >
                    {selected.risk} Risk
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-secondary border border-border text-muted-foreground">
                    {selected.atlas}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-0.5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto text-sm">
              {(
                [
                  ["Description", selected.description],
                  ["Attack Vector", selected.attackVector],
                  ["Affected Components", selected.affected],
                  ["Current Mitigations", selected.mitigations],
                  ["Residual Risk", selected.residualRisk],
                  ["Recommendations", selected.recommendations],
                ] as const
              ).map(([label, value]) => (
                <div key={label}>
                  <div className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-1">
                    {label}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
