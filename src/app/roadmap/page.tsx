import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Roadmap – Briven",
  description: "Planned features and development priorities for Briven.",
};

export default function RoadmapPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Roadmap"
        subtitle="The Briven development roadmap. Priorities may shift based on community feedback."
      >
        <section>
          <h2>In Progress</h2>
          <ul>
            <li>
              <strong>Installer polish</strong> — Visual TUI refinements, more
              channel pairing flows
            </li>
            <li>
              <strong>Documentation site</strong> — Hosted docs at
              docs.briven.ai
            </li>
          </ul>
        </section>

        <section>
          <h2>Short-term</h2>
          <ul>
            <li>
              <strong>Skill marketplace</strong> — Browse, install, and share
              community skills
            </li>
            <li>
              <strong>Voice input/output</strong> — Kokoro TTS + Whisper STT
              integration (Python 3.12)
            </li>
            <li>
              <strong>Mobile-friendly Web UI</strong> — Responsive layout for
              phone/tablet access
            </li>
            <li>
              <strong>Session export</strong> — Export conversation history as
              Markdown or PDF
            </li>
            <li>
              <strong>Improved RAG pipeline</strong> — Chunking strategies,
              reranking, citation support
            </li>
          </ul>
        </section>

        <section>
          <h2>Medium-term</h2>
          <ul>
            <li>
              <strong>Multi-user support</strong> — Role-based access control,
              per-user memory isolation
            </li>
            <li>
              <strong>Plugin system</strong> — Hot-reload extensions without
              restarting
            </li>
            <li>
              <strong>Dashboard</strong> — System health, agent activity, memory
              stats, cost tracking
            </li>
            <li>
              <strong>Webhook triggers</strong> — Start agent tasks from
              external events (GitHub, Stripe, etc.)
            </li>
            <li>
              <strong>Scheduled reports</strong> — Automated email/Telegram
              digests on a cron schedule
            </li>
          </ul>
        </section>

        <section>
          <h2>Long-term</h2>
          <ul>
            <li>
              <strong>Self-hosted model support</strong> — Native Ollama/vLLM
              integration without API keys
            </li>
            <li>
              <strong>Agent collaboration network</strong> — Cross-instance A2A
              for distributed workloads
            </li>
            <li>
              <strong>Fine-tuned agent models</strong> — Task-specific
              fine-tuning from memory/session logs
            </li>
            <li>
              <strong>Desktop app</strong> — Electron/Tauri wrapper for native
              macOS/Windows/Linux experience
            </li>
            <li>
              <strong>End-to-end encryption</strong> — Encrypted memory and
              communication channels
            </li>
          </ul>
        </section>

        <section>
          <h2>Completed</h2>
          <ul>
            <li>Visual TUI installer with pairing flows</li>
            <li>Tailscale zero-trust networking + ACL enforcement</li>
            <li>Multi-agent cooperation (subordinate spawning)</li>
            <li>Persistent memory (SQLite + embeddings + BM25)</li>
            <li>MCP + A2A protocol support</li>
            <li>Skills system (SKILL.md standard)</li>
            <li>20+ LLM provider support via LiteLLM</li>
            <li>Docker deployment</li>
            <li>UFW + Fail2ban hardening in installer</li>
          </ul>
        </section>

        <hr />

        <p>
          Have a feature request?{" "}
          <Link
            href="https://github.com/flandriendev/briven/issues"
            target="_blank"
          >
            Open an issue
          </Link>{" "}
          or join the{" "}
          <Link
            href="https://discord.com/channels/1475388668721107081/1475388669639790765"
            target="_blank"
          >
            Discord
          </Link>
          .
        </p>
      </ContentPage>
    </>
  );
}
