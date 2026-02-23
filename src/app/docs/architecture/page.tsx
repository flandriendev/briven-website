import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Architecture – Briven",
  description:
    "Overview of Briven's modular, extensible architecture and core components.",
};

export default function ArchitecturePage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Architecture"
        subtitle="Briven employs a modular, extensible architecture centered on a hierarchical agent system."
      >
        <section>
          <h2>Core Architecture Elements</h2>

          <h3>Runtime</h3>
          <p>
            Briven operates within Docker containers, requiring only Docker and a
            web browser on the host system. This ensures consistent environment
            across platforms and simplified deployment and updates.
          </p>

          <h3>Agents</h3>
          <p>
            The framework&apos;s primary actors receive instructions, reason
            through problems, and delegate tasks hierarchically. Communication
            flows through structured messages including thoughts, tool selection,
            and responses.
          </p>

          <h3>Tools</h3>
          <p>
            Built-in tools enable agents to execute code, search information via
            SearXNG, manage memory, and delegate tasks. Users can create custom
            tools by defining specifications and placing prompt overrides in
            agent profiles.
          </p>

          <h3>Memory System</h3>
          <p>
            A hybrid approach combines automatic framework management with manual
            user input. The system categorizes memory into storage/retrieval,
            fragments, solutions, and metadata. Embeddings are generated locally
            using a small default model for efficiency.
          </p>

          <h3>Prompts</h3>
          <p>
            Markdown files in the <code>/prompts</code> directory control
            behavior. Custom overrides can be placed in agent-specific
            directories, and Briven merges them with defaults automatically.
          </p>

          <h3>Knowledge</h3>
          <p>
            User-provided information stored in{" "}
            <code>/knowledge/custom/main</code> supports various formats
            including PDFs, CSV, and Markdown files.
          </p>

          <h3>Skills</h3>
          <p>
            Using the SKILL.md standard, skills provide contextual expertise
            loaded dynamically. They are token-efficient since they don&apos;t
            remain in the system prompt permanently.
          </p>

          <h3>Extensions</h3>
          <p>
            Modular Python components in <code>python/extensions</code> handle
            specific functionalities while keeping the codebase organized. See{" "}
            <Link href="/docs/extensions">Extensions</Link> for details.
          </p>
        </section>

        <section>
          <h2>Agent Hierarchy</h2>
          <p>
            Briven uses a hierarchical structure where superior agents delegate
            tasks to subordinate agents. This enables:
          </p>
          <ul>
            <li>Structured problem-solving</li>
            <li>Efficient resource allocation</li>
            <li>Context isolation between sub-tasks</li>
            <li>Specialized agent behavior via subagent profiles</li>
          </ul>
        </section>

        <section>
          <h2>Security Layers</h2>
          <ul>
            <li>
              <strong>Login guard</strong> — Brute-force protection with
              exponential backoff and 15-minute lockout
            </li>
            <li>
              <strong>Security headers</strong> — X-Content-Type-Options,
              X-Frame-Options, Referrer-Policy, Permissions-Policy
            </li>
            <li>
              <strong>Audit logging</strong> — All security events are logged
            </li>
            <li>
              <strong>Tailscale integration</strong> — Zero-trust networking with
              ACL enforcement
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Flow</h2>
          <ol>
            <li>User sends a message via the Web UI or messaging integration</li>
            <li>
              The agent receives the message along with system prompts, project
              instructions, and memory context
            </li>
            <li>
              The agent reasons and selects appropriate tools (code execution,
              search, memory, etc.)
            </li>
            <li>
              Tools execute and return results to the agent for further reasoning
            </li>
            <li>
              The agent formulates a response and optionally stores new memories
            </li>
            <li>
              The response is sent back to the user via the same channel
            </li>
          </ol>
        </section>

        <section>
          <h2>Technology Stack</h2>
          <ul>
            <li>
              <strong>Backend:</strong> Python / FastAPI / Uvicorn
            </li>
            <li>
              <strong>Frontend:</strong> Web UI with real-time WebSocket updates
            </li>
            <li>
              <strong>Database:</strong> SQLite for persistent memory
            </li>
            <li>
              <strong>Search:</strong> Hybrid search (embeddings + BM25)
            </li>
            <li>
              <strong>LLM:</strong> LiteLLM for 20+ provider support
            </li>
            <li>
              <strong>Networking:</strong> Tailscale for zero-trust mesh
            </li>
            <li>
              <strong>Deployment:</strong> Docker with systemd service
            </li>
          </ul>
        </section>

        <hr />

        <p>
          See also: <Link href="/docs/extensions">Extensions</Link> |{" "}
          <Link href="/docs/contributing">Contributing</Link> |{" "}
          <Link href="/docs/usage">Usage Guide</Link>
        </p>
      </ContentPage>
    </>
  );
}
