import type { Metadata } from "next";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Changelog – Briven",
  description: "Release notes and version history for Briven.",
};

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Changelog"
        subtitle="All notable changes to Briven are documented here."
      >
        <section>
          <h2>[Unreleased]</h2>

          <h3>Added</h3>
          <ul>
            <li>
              Visual TUI installer with progress bar, colored output, and
              security notice
            </li>
            <li>
              Telegram bot pairing flow (auto-discovers chat ID via Telegram
              API)
            </li>
            <li>
              Messaging channel setup during install (Telegram, WhatsApp,
              Discord, Slack, Email)
            </li>
            <li>UFW + Fail2ban security hardening step in installer</li>
            <li>LLM provider selection with 12 providers (numbered menu)</li>
            <li>Python 3.13+ compatibility auto-patching</li>
            <li>
              <code>/tmp</code> space check with automatic{" "}
              <code>TMPDIR</code> fallback
            </li>
          </ul>

          <h3>Fixed</h3>
          <ul>
            <li>
              Dependency resolution failures from exact <code>==</code> pins
              (loosened to compatible ranges)
            </li>
            <li>
              ANSI escape codes rendering as literal text in installer boxes
            </li>
            <li>
              Script crash from SIGPIPE when generating pairing codes (
              <code>tr|head</code> + <code>pipefail</code>)
            </li>
            <li>
              <code>{"((KEY_COUNT++))"}</code> crash with <code>set -e</code>{" "}
              (replaced with safe arithmetic)
            </li>
          </ul>

          <h3>Changed</h3>
          <ul>
            <li>
              Requirements.txt: langchain ecosystem, pydantic, browser-use,
              mcp, unstructured now use version ranges instead of exact pins
            </li>
            <li>
              Installer redesigned from 10-step guided flow to visual TUI with
              draw_box panels
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>[1.0.0] — 2026-02-23</h2>

          <h3>Added</h3>
          <ul>
            <li>Initial release of Briven AI Agent Framework</li>
            <li>GOTCHA Framework architecture (/atlas-governed)</li>
            <li>Multi-agent cooperation with subordinate spawning</li>
            <li>
              Persistent memory system (SQLite + embeddings + BM25 hybrid
              search)
            </li>
            <li>Tailscale zero-trust networking with ACL enforcement</li>
            <li>Web UI with real-time WebSocket updates</li>
            <li>
              20+ built-in tools (browser automation, code execution, search,
              memory, etc.)
            </li>
            <li>
              Skills system (SKILL.md standard, compatible with Claude Code,
              Cursor, Codex CLI)
            </li>
            <li>MCP server/client support</li>
            <li>Agent-to-Agent (A2A) protocol</li>
            <li>Docker deployment with Tailscale integration</li>
            <li>VPS installer with guided setup</li>
            <li>LiteLLM multi-provider switching (20+ providers)</li>
            <li>
              Messaging integrations (Telegram, WhatsApp, Discord, Slack,
              Email)
            </li>
            <li>Scheduler with cron-based task automation</li>
            <li>
              Knowledge base with RAG (document ingestion + hybrid search)
            </li>
          </ul>
        </section>
      </ContentPage>
    </>
  );
}
