import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, UserCheck, Layers, Bug, Fingerprint } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Security – Briven",
  description:
    "Briven Security Program — security posture, threat model, and how we think about agents that take real-world actions.",
};

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      {/* Sticky topbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4 h-[52px] flex items-center justify-between">
          <Link href="/" className="flex items-center text-foreground">
            <Image src="/briven.svg" alt="Briven" width={44} height={44} className="size-26" />
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/trust"
              className="px-3.5 py-1.5 rounded-lg text-sm font-semibold text-primary"
            >
              Trust
            </Link>
            <Link
              href="/trust/threatmodel"
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              Threat Model
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-[720px] mx-auto px-6 max-[480px]:px-4 py-10">
        <article>
          {/* Article header */}
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Trust
            </h1>
          </header>

          {/* Article body */}
          <div className="trust-content">
            {/* Intro */}
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Security posture, roadmap, and how we think about agents that can
              take real-world actions.
            </p>

            {/* Section: A New Era */}
            <div className="mt-7">
              <h2>A Self-Hosted-First Security Model</h2>
              <p>
                AI agents are fundamentally different from traditional software.
                They interpret natural language, make autonomous decisions,
                execute system commands, and interact with messaging platforms on
                your behalf. This creates security challenges that conventional
                software models were never designed to address.
              </p>
              <p>
                Briven is built from the ground up with the principle that{" "}
                <strong>your agents run on your infrastructure</strong>, under
                your control, with zero-trust networking ensuring nothing is
                exposed to the public internet unless you explicitly allow it.
              </p>
            </div>

            {/* Section: Context */}
            <div className="mt-7">
              <h2>Context</h2>
              <p>
                To understand our security posture, it helps to understand what
                Briven agents are capable of:
              </p>
              <ul>
                <li>Execute shell commands on the host system</li>
                <li>
                  Send and receive messages across Telegram, WhatsApp, and email
                </li>
                <li>Read, write, and manage files on the local filesystem</li>
                <li>Fetch and process web content</li>
                <li>Schedule and run tasks autonomously</li>
                <li>Access APIs and external services via modular skills</li>
              </ul>
              <p>
                We identify four primary risk categories:
              </p>
              <ul>
                <li>
                  <strong>Prompt injection</strong> &mdash; Malicious input that
                  attempts to override agent instructions
                </li>
                <li>
                  <strong>Indirect injection</strong> &mdash; Payloads embedded
                  in fetched content, emails, or external data
                </li>
                <li>
                  <strong>Misconfiguration abuse</strong> &mdash; Overly
                  permissive settings, exposed ports, or missing auth
                </li>
                <li>
                  <strong>Identity risks</strong> &mdash; Unauthorized message
                  sending or impersonation via messaging channels
                </li>
              </ul>
            </div>

            {/* Section: Scope */}
            <div className="mt-7">
              <h2>Scope</h2>
              <p>
                The security program encompasses the entire Briven ecosystem:
              </p>
              <ul>
                <li>
                  <strong>Core Platform</strong> &mdash; CLI gateway, execution
                  engine, tool implementations
                </li>
                <li>
                  <strong>Integrations</strong> &mdash; Telegram, WhatsApp,
                  email channel adapters
                </li>
                <li>
                  <strong>Services</strong> &mdash; Skills Hub marketplace,
                  documentation site
                </li>
                <li>
                  <strong>Extensions</strong> &mdash; Third-party skills,
                  plugins, community contributions
                </li>
                <li>
                  <strong>Operations</strong> &mdash; Supply chain, dependencies,
                  CI/CD pipeline
                </li>
              </ul>
            </div>

            {/* Section: Program Overview */}
            <div className="mt-7">
              <h2>Program Overview</h2>
              <p>
                Our security program is structured in four phases, each building
                on the last:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3.5">
                {[
                  {
                    num: 1,
                    title: "Transparency",
                    desc: "Open threat model development with community input.",
                  },
                  {
                    num: 2,
                    title: "Security Roadmap",
                    desc: "Public, GitHub-tracked defensive engineering goals.",
                  },
                  {
                    num: 3,
                    title: "Code Review",
                    desc: "Comprehensive manual and automated security assessment.",
                  },
                  {
                    num: 4,
                    title: "Security Triage",
                    desc: "Formal vulnerability reporting with response SLAs.",
                  },
                ].map((phase) => (
                  <div
                    key={phase.num}
                    className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
                  >
                    <div className="w-[38px] h-[38px] rounded-xl bg-primary grid place-items-center text-white font-black text-sm shrink-0">
                      {phase.num}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {phase.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase 1 */}
            <div className="mt-7">
              <h2>Phase 1: Transparency</h2>
              <p>
                Open threat model development covering input manipulation,
                authentication and access control, data security, infrastructure
                hardening, operational security, and supply chain management. We
                believe security through obscurity is no security at all.
              </p>

              <div className="overflow-x-auto mt-3 mb-5">
                <table className="w-full border-collapse rounded-xl border border-border bg-card overflow-hidden text-sm min-w-[480px]">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="text-left text-foreground font-semibold px-3 py-2.5 border-b border-border">
                        Category
                      </th>
                      <th className="text-left text-foreground font-semibold px-3 py-2.5 border-b border-border">
                        Coverage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Input Manipulation", "Prompt injection, indirect injection via external data"],
                      ["Authentication & Access", "Channel pairing, command permissions, session isolation"],
                      ["Data Security", "Local-only storage, no telemetry, encrypted transport"],
                      ["Infrastructure", "Tailscale zero-trust, SSRF protection, port isolation"],
                      ["Operations", "CI/CD hardening, dependency auditing, release signing"],
                      ["Supply Chain", "Skill vetting, plugin sandboxing, dependency pinning"],
                    ].map(([cat, cov]) => (
                      <tr key={cat}>
                        <td className="px-3 py-2.5 border-b border-border font-medium text-foreground/80">
                          {cat}
                        </td>
                        <td className="px-3 py-2.5 border-b border-border">
                          {cov}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mt-7">
              <h2>Phase 2: Product Security Roadmap</h2>
              <p>
                Public, GitHub-tracked defensive engineering goals. Every
                security initiative is visible and trackable by the community.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "Prompt Injection Protection",
                  "Privacy Enhancements",
                  "Granular Access Control",
                  "Supply Chain Security",
                  "Skill Sandboxing",
                  "Audit Logging",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mt-7">
              <h2>Phase 3: Code Review</h2>
              <p>
                Comprehensive manual and automated security assessment of the
                entire codebase. Critical findings are remediated before public
                disclosure. As an open-source project, the code is always
                available for independent review.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "Agent Execution",
                  "Tool Implementations",
                  "Message Processing",
                  "Gateway & Auth",
                  "Channel Adapters",
                  "API Surface",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Phase 4 */}
            <div className="mt-7">
              <h2>Phase 4: Security Triage</h2>
              <p>
                Formal vulnerability reporting process with defined response
                SLAs:
              </p>

              <div className="mt-3 p-4 rounded-xl border-l-[3px] border-l-primary bg-primary/[0.04] border border-border border-l-primary">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Report a vulnerability
                </p>
                <p className="text-sm mb-3">
                  Use GitHub Security Advisories or reach out directly:
                </p>
                <span className="inline-block px-3 py-2 rounded-lg bg-[#0d0f16] border border-border font-mono text-primary text-sm font-semibold">
                  security@briven.ai
                </span>
              </div>

              <p className="mt-4">Please include:</p>
              <ul>
                <li>Steps to reproduce the vulnerability</li>
                <li>Demonstrated impact and potential severity</li>
                <li>Any suggested remediation if applicable</li>
              </ul>

              <h3>Response SLAs</h3>
              <div className="overflow-x-auto mt-3 mb-5">
                <table className="w-full border-collapse rounded-xl border border-border bg-card overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="text-left text-foreground font-semibold px-3 py-2.5 border-b border-border">
                        Severity
                      </th>
                      <th className="text-left text-foreground font-semibold px-3 py-2.5 border-b border-border">
                        Response Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Critical", "24 hours"],
                      ["High", "48 hours"],
                      ["Medium", "5 business days"],
                      ["Low", "14 business days"],
                    ].map(([sev, time]) => (
                      <tr key={sev}>
                        <td className="px-3 py-2.5 border-b border-border font-medium text-foreground/80">
                          {sev}
                        </td>
                        <td className="px-3 py-2.5 border-b border-border">
                          {time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Current Security Posture */}
            <div className="mt-7">
              <h2>Current Security Posture</h2>
              <p>
                Briven ships with the following security measures enabled by
                default:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 mb-3">
                {[
                  {
                    icon: Shield,
                    title: "Tailscale Zero-Trust",
                    desc: "Encrypted WireGuard tunnels on your private tailnet. No public ports.",
                  },
                  {
                    icon: Lock,
                    title: "Exec-Approval System",
                    desc: "Agent has root-level access — run in Docker or a dedicated VM. Exec-approvals gate dangerous operations.",
                  },
                  {
                    icon: UserCheck,
                    title: "Pairing Required",
                    desc: "Unknown senders must be paired before interacting with agents.",
                  },
                  {
                    icon: Layers,
                    title: "Session Isolation",
                    desc: "Each agent session runs in its own context. No cross-contamination.",
                  },
                  {
                    icon: Bug,
                    title: "Skill Security Scanner",
                    desc: "25+ dangerous pattern regexes, VirusTotal hash lookup, and frontmatter validation for skills.",
                  },
                  {
                    icon: Fingerprint,
                    title: "Self-Hosted by Design",
                    desc: "Your data never leaves your infrastructure. Zero telemetry.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 p-3.5 rounded-xl border border-border bg-card"
                    >
                      <div className="w-8 h-8 rounded-[10px] bg-primary grid place-items-center shrink-0">
                        <Icon className="w-[18px] h-[18px] text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-7">
              <h2>Frequently Asked Questions</h2>

              <div className="flex flex-col gap-3 mt-3">
                {[
                  {
                    q: "Is Briven safe to run on my personal infrastructure?",
                    a: "Yes. Briven is designed specifically for self-hosted environments. With Tailscale zero-trust networking, your agents are never exposed to the public internet. You maintain full control over what your agents can access and do.",
                  },
                  {
                    q: "Why is the project open source?",
                    a: "Transparency is a core security principle. Open source means anyone can audit the code, identify issues, and contribute fixes. We believe this leads to stronger, more trustworthy software than closed-source alternatives.",
                  },
                  {
                    q: "What about third-party skills and extensions?",
                    a: "Third-party skills are sandboxed and must declare their required permissions. We review submissions to the Skills Hub and provide clear guidance on evaluating community-contributed skills before installing them.",
                  },
                  {
                    q: "How can I contribute to Briven's security?",
                    a: "Report vulnerabilities via our responsible disclosure process, audit the source code on GitHub, contribute security-focused improvements, or join the community on Discord to discuss security best practices.",
                  },
                ].map((item) => (
                  <div
                    key={item.q}
                    className="p-3.5 rounded-xl border border-border bg-card"
                  >
                    <p className="font-bold text-foreground text-sm tracking-tight">
                      {item.q}
                    </p>
                    <p className="text-sm mt-2">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                href="https://github.com/flandriendev/briven"
                target="_blank"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[10px] text-sm font-semibold border border-primary/25 bg-primary/[0.06] text-foreground hover:border-primary hover:-translate-y-px transition-all"
              >
                View on GitHub
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[10px] text-sm font-semibold border border-border bg-card text-foreground hover:bg-secondary hover:border-border hover:-translate-y-px transition-all"
              >
                Read Full Documentation
              </Link>
            </div>

            {/* Footer */}
            <footer className="mt-6 pt-5 border-t border-border text-center text-sm text-muted-foreground">
              Briven Security Program
              <span className="inline-block w-1 h-1 rounded-full bg-primary mx-2.5 align-middle" />
              <Link
                href="https://briven.ai"
                className="text-primary/70 hover:text-primary transition-colors no-underline"
              >
                briven.ai
              </Link>
              <span className="inline-block w-1 h-1 rounded-full bg-primary mx-2.5 align-middle" />
              <Link
                href="https://skillshub.briven.ai"
                className="text-primary/70 hover:text-primary transition-colors no-underline"
              >
                skillshub.briven.ai
              </Link>
            </footer>
          </div>
        </article>
      </main>
    </div>
  );
}
