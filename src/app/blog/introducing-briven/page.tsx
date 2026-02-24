import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  title: "Introducing Briven – Blog",
  description:
    "From a weekend hack to a full autonomous agent framework. The story of how Briven came to be, where it stands today, and what comes next.",
};

export default function IntroducingBrivenPost() {
  return (
    <>
      <ReadingProgress readTime="6 min read" />
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4 pt-20 pb-16">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Introducing Briven
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                JVC
              </span>
              <span className="font-medium text-foreground">J.Van Cutsem</span>
              <span>·</span>
              <time>February 20, 2026</time>
              <span>·</span>
              <span>6 min read</span>
            </div>
          </header>

          {/* Article body */}
          <article className="prose-briven">
            <p>
              My name is <strong>J.Van Cutsem</strong>, and a few months ago I
              started building an AI agent that could actually run on my own
              infrastructure. Not a chatbot. Not a wrapper around an API. A real
              agent &mdash; one that remembers, learns, executes code, talks to
              my tools, and follows rules I define.
            </p>
            <p>
              What started as a weekend experiment is now{" "}
              <strong>Briven</strong> &mdash; a personal, autonomous AI agent
              framework that is self-extending, memory-persistent, and
              structurally governed by an instruction layer called{" "}
              <code>/atlas</code>. And the first agent running on top of it?
              That would be <strong>Linus</strong> &mdash; a lazy AI panda with
              a soul, the official Briven bot, and my co-pilot throughout this
              entire journey.
            </p>
            <p>
              Today, I am excited to introduce the project publicly.
            </p>

            <h2>The Problem</h2>
            <p>
              Most AI tools today are cloud-hosted SaaS products. Your data
              lives on someone else&apos;s servers. Your prompts get logged.
              Your workflows depend on uptime you don&apos;t control. And when
              the API changes or the price goes up, you have no alternative.
            </p>
            <p>
              I wanted something different: an AI agent that runs on{" "}
              <em>my</em> hardware, uses <em>my</em> API keys, stores memory
              locally, and follows rules <em>I</em> write. No vendor lock-in.
              No data leaving my network. That conviction is what led me to
              build Briven from scratch &mdash; and Linus became the living
              proof that the idea works.
            </p>

            <h2>What Briven Is</h2>
            <p>
              Briven is not pre-programmed for specific tasks. It adapts to
              whatever you throw at it &mdash; gathering information, executing
              code, browsing the web, managing files, sending messages, and
              learning from every interaction.
            </p>
            <p>The architecture is built on six layers called the <strong>GOTCHA framework</strong>:</p>
            <ul>
              <li>
                <strong>Goals</strong> &mdash; process definitions that tell
                the agent what to work toward
              </li>
              <li>
                <strong>Orchestration</strong> &mdash; the AI manager that
                coordinates execution, always reading <code>/atlas</code> first
              </li>
              <li>
                <strong>Tools</strong> &mdash; deterministic scripts that do
                the actual work
              </li>
              <li>
                <strong>Context</strong> &mdash; domain knowledge, tone, and
                ideal customer profiles
              </li>
              <li>
                <strong>Hard Prompts</strong> &mdash; reusable LLM instruction
                templates
              </li>
              <li>
                <strong>Args</strong> &mdash; behavior settings like models,
                modes, and schedules
              </li>
            </ul>
            <p>
              Before every action, the agent reads its <code>/atlas</code>{" "}
              guidelines. This keeps it disciplined &mdash; checking goals,
              using existing tools, and documenting failures rather than
              improvising.
            </p>

            <h2>Key Capabilities</h2>
            <p>
              Briven ships with a set of built-in capabilities that cover the
              essentials:
            </p>
            <ul>
              <li>
                <strong>Hybrid Memory</strong> &mdash; SQLite for structured
                persistence, FAISS vector embeddings for semantic search, and
                BM25 for keyword matching. Your agent remembers across sessions.
              </li>
              <li>
                <strong>Multi-Agent Cooperation</strong> &mdash; spawn 2-8
                sub-agents in parallel, delegate tasks sequentially, or use the
                A2A protocol for cross-system orchestration.
              </li>
              <li>
                <strong>Multi-LLM via LiteLLM</strong> &mdash; model-agnostic
                from day one. OpenRouter, Anthropic, xAI, OpenAI, DeepSeek,
                Google, Groq, and more. Switch models with a single env var.
              </li>
              <li>
                <strong>Messaging</strong> &mdash; Telegram, WhatsApp, Discord,
                Slack, and Email. Your agent meets you where you already are.
              </li>
              <li>
                <strong>Voice</strong> &mdash; Whisper for speech-to-text,
                Kokoro for text-to-speech, with full WebUI microphone
                integration.
              </li>
              <li>
                <strong>Skill Scanner</strong> &mdash; 25+ dangerous pattern
                regexes and optional VirusTotal SHA-256 lookup before installing
                any third-party skill.
              </li>
            </ul>

            <h2>Security: Tailscale-first</h2>
            <p>
              Briven has root-level access in its environment. That is the
              reality of an autonomous agent that can execute code, manage
              files, and control infrastructure. We do not hide from this.
            </p>
            <p>
              Instead, the entire networking layer is built on{" "}
              <strong>Tailscale</strong>. No exposed public ports. Encrypted
              WireGuard tunnels. ACL enforcement so only{" "}
              <code>tag:admin</code> devices can reach the agent. Combined with
              UFW and Fail2ban hardening, your agent lives inside a private
              mesh network that is invisible to the public internet.
            </p>

            <h2>Fully Customizable</h2>
            <p>
              Every prompt in Briven lives in the <code>prompts/</code>{" "}
              directory and is fully editable. Tools in{" "}
              <code>python/tools/</code> extend without touching the core.
              Subagent profiles in <code>agents/</code> let you create
              specialized personas. And the <code>BRIVEN_SET_*</code> env-var
              prefix lets you override any setting without editing
              configuration files.
            </p>
            <p>
              Briven is not a black box. It is a framework you own, modify,
              and extend.
            </p>

            <h2>The SKILL.md Standard</h2>
            <p>
              Skills in Briven follow the <strong>SKILL.md</strong> standard
              &mdash; portable, structured agent capabilities compatible with
              Claude Code, Cursor, OpenAI Codex CLI, and GitHub Copilot. Write
              a skill once, use it across platforms.
            </p>
            <p>
              The Skills Hub at{" "}
              <Link href="https://skillshub.briven.ai">
                skillshub.briven.ai
              </Link>{" "}
              will serve as the public registry for sharing and discovering
              community-built skills.
            </p>

            <h2>Real-world Use Cases</h2>
            <p>
              People are already using Briven for things I never anticipated:
            </p>
            <ul>
              <li>
                Financial analysis &mdash; scraping, correlating, and charting
                market trends
              </li>
              <li>
                Excel automation &mdash; validation, cleaning, consolidation,
                and report generation
              </li>
              <li>
                Server monitoring &mdash; scheduled CPU, disk, and memory
                checks with threshold alerts
              </li>
              <li>
                API integration &mdash; learning and storing integration
                patterns across services
              </li>
              <li>
                Multi-client isolation &mdash; separate projects with isolated
                memory and secrets
              </li>
            </ul>

            <h2>The Road Ahead</h2>
            <p>
              Security remains the top priority. We are continuing to harden
              the codebase, expand the skill scanner, and improve the
              exec-approval system. Beyond security, the roadmap includes:
            </p>
            <ul>
              <li>Skills Hub marketplace with creator payouts</li>
              <li>More messaging integrations (social platforms)</li>
              <li>MCP server support for tool federation</li>
              <li>Improved observability and audit dashboards</li>
            </ul>

            <h2>Get Involved</h2>
            <p>
              Briven is 100% open-source and MIT-licensed. You can install it
              with a single command:
            </p>
            <pre>
              <code>
                curl -fsSL
                https://raw.githubusercontent.com/flandriendev/briven/main/install.sh
                | bash
              </code>
            </pre>
            <p>
              If you want to support the project, consider{" "}
              <Link href="https://github.com/sponsors/flandriendev">
                sponsoring
              </Link>
              . Every contribution funds development and helps keep the project
              free for everyone.
            </p>

            <h2>Thank You</h2>
            <p>
              To everyone who has contributed code, filed issues, joined the
              Discord, or just tried the project &mdash; thank you. Briven
              exists because of this community.
            </p>
            <p>
              From me, J.Van Cutsem, and from Linus &mdash; your agent, your
              machine, your rules. Welcome to Briven.
            </p>

            <hr />

            <p>
              <Link href="https://github.com/flandriendev/briven">
                GitHub
              </Link>{" "}
              |{" "}
              <Link href="https://discord.com/channels/1475388668721107081/1475388669639790765">
                Discord
              </Link>{" "}
              |{" "}
              <Link href="/docs/quick-start">Quick Start Guide</Link>
            </p>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}
