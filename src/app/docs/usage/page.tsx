import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Usage Guide – Briven",
  description:
    "Complete usage guide for Briven — basic operations, tools, projects, tasks, memory, and more.",
};

export default function UsagePage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Usage Guide"
        subtitle="Everything you need to know about using Briven day-to-day."
      >
        <section>
          <h2>Basic Operations</h2>

          <h3>Restart Framework</h3>
          <p>
            Click the <strong>Restart</strong> button in the sidebar dropdown to
            reinitialize and restart the container. Use this when you encounter
            unexpected behavior or want to apply changes to framework code.
          </p>

          <h3>Action Buttons</h3>
          <p>Located beneath the chat input box:</p>
          <ul>
            <li>
              <strong>Pause/Resume Agent</strong> — Toggle to pause and resume
              chat flow and command execution
            </li>
            <li>
              <strong>Import Knowledge</strong> — Import external files (.txt,
              .pdf, .csv, .html, .json, .md) into the knowledge base stored at{" "}
              <code>/briven/knowledge/custom/main</code>
            </li>
            <li>
              <strong>File Browser</strong> — Upload, download, rename, delete,
              and navigate files in the Briven environment
            </li>
            <li>
              <strong>Context</strong> — View the complete context window sent to
              the LLM (system prompts, conversation, instructions)
            </li>
            <li>
              <strong>History</strong> — Access chat history in JSON format
              (stored at <code>/briven/usr/chats/</code>)
            </li>
            <li>
              <strong>Nudge</strong> — Restart the agent&apos;s last process
              when it becomes unresponsive
            </li>
          </ul>

          <h3>File Attachments</h3>
          <p>
            Click the attachment icon in the chat input to attach one or
            multiple files. Briven can process, move, and operate on attached
            files. When working with multiple files, attach them all at once and
            give batch instructions.
          </p>
        </section>

        <section>
          <h2>Tool Usage</h2>
          <p>
            Briven includes default tools like knowledge search (powered by
            SearXNG), code execution, and communication. Understand the
            capabilities of these tools and how to invoke them.
          </p>

          <h3>Browser Agent &amp; MCP Alternatives</h3>
          <p>
            The built-in browser agent has dependency issues on some systems. If
            web automation is critical, prefer MCP-based browser tools:
          </p>
          <ul>
            <li>Browser OS MCP</li>
            <li>Chrome DevTools MCP</li>
            <li>Playwright MCP</li>
          </ul>
          <p>
            See <Link href="/docs/mcp-setup">MCP Setup</Link> for configuration.
          </p>

          <h3>Agent-to-Agent (A2A) Communication</h3>
          <p>
            Briven instances can communicate with each other using the A2A
            protocol for task delegation, distributed workflows, and
            project-specific collaboration. Enable it via{" "}
            <strong>Settings → MCP/A2A → Briven A2A Server</strong>.
          </p>
          <p>
            See <Link href="/docs/a2a-setup">A2A Setup</Link> for detailed
            configuration.
          </p>

          <h3>Example: Financial Analysis</h3>
          <p>Combine multiple tools in a single prompt:</p>
          <blockquote>
            <p>
              Please be a professional financial analyst. Find last month
              Bitcoin/USD price trend and make a chart. The chart must have
              highlighted key points corresponding with dates of major news about
              cryptocurrency. Use the <code>search_engine</code> and{" "}
              <code>document_query</code> tools to find the data, and the{" "}
              <code>code_execution_tool</code> for the chart.
            </p>
          </blockquote>
        </section>

        <section>
          <h2>Multi-Agent Cooperation</h2>
          <ul>
            <li>
              <strong>Sub-Agents</strong> — Agents can create sub-agents to
              delegate sub-tasks, helping manage complexity
            </li>
            <li>
              <strong>Communication</strong> — Agents communicate via structured
              messages, sharing information and coordinating actions
            </li>
            <li>
              <strong>Hierarchy</strong> — Superior agents delegate to
              subordinates for structured problem-solving
            </li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <p>
            Projects are isolated workspaces with dedicated context,
            instructions, memory, and secrets for specific tasks or clients.
          </p>

          <h3>What Projects Provide</h3>
          <ul>
            <li>
              <strong>Isolated workspace</strong> under{" "}
              <code>/briven/usr/projects/&lt;project_name&gt;/</code>
            </li>
            <li>
              <strong>Custom instructions</strong> automatically injected into
              system prompts
            </li>
            <li>
              <strong>Dedicated or shared memory</strong> to control context
              isolation
            </li>
            <li>
              <strong>Project-scoped secrets and variables</strong> for secure
              credential management
            </li>
            <li>
              <strong>Git repository integration</strong> for cloning and working
              with codebases
            </li>
            <li>
              <strong>File structure injection</strong> for automatic codebase
              awareness
            </li>
          </ul>

          <h3>Creating Projects</h3>
          <p>Access via the Dashboard &gt; Projects or the project dropdown:</p>
          <ul>
            <li>
              <strong>Empty Projects</strong> — Click &ldquo;Create
              project&rdquo;, enter a title and color tag
            </li>
            <li>
              <strong>Git-Based Projects</strong> — Enter a Git repository URL
              to clone directly into the workspace
            </li>
          </ul>

          <h3>Configuration</h3>
          <ul>
            <li>
              <strong>Instructions</strong> — Injected into the system prompt
              when the project is active. Be specific about roles, paths,
              workflows, and quality standards.
            </li>
            <li>
              <strong>Memory Isolation</strong> — &ldquo;Own memory&rdquo;
              (recommended for client work) or &ldquo;Global memory&rdquo;
            </li>
            <li>
              <strong>Variables</strong> (non-sensitive) stored in{" "}
              <code>.brivenproj/variables.env</code>
            </li>
            <li>
              <strong>Secrets</strong> (sensitive) stored in{" "}
              <code>.brivenproj/secrets.env</code>
            </li>
          </ul>

          <h3>Project Directory Structure</h3>
          <pre>
            <code>
              {`/briven/usr/projects/<project_name>/
├── .brivenproj/           # Project metadata
│   ├── project.json       # Main configuration
│   ├── variables.env      # Non-sensitive config
│   ├── secrets.env        # Sensitive credentials
│   ├── agents.json        # Subagent settings
│   ├── instructions/      # Additional instruction files
│   └── knowledge/         # Project knowledge base
├── src/                   # Your actual project files
└── ...`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Tasks &amp; Scheduling</h2>
          <p>
            Tasks are autonomous work units executed in dedicated or shared chat
            contexts. Access via <strong>Settings → Tasks Scheduler</strong>.
          </p>

          <h3>Task Types</h3>
          <ul>
            <li>
              <strong>Scheduled Tasks</strong> — Run on a recurring cron schedule
              (e.g. <code>0 9 * * *</code> for daily at 9 AM)
            </li>
            <li>
              <strong>Planned Tasks</strong> — Execute at specific predetermined
              times
            </li>
            <li>
              <strong>Ad-hoc Tasks</strong> — Manual execution for on-demand
              work
            </li>
          </ul>

          <h3>Common Patterns</h3>
          <pre>
            <code>
              {`# Every day at 9 AM
0 9 * * *

# Every hour
0 * * * *

# Every Monday at 10 AM
0 10 * * 1

# Every 15 minutes
*/15 * * * *`}
            </code>
          </pre>

          <p>
            Tasks can be linked to projects, inheriting project instructions,
            secrets, and memory automatically.
          </p>
        </section>

        <section>
          <h2>Secrets &amp; Variables</h2>
          <p>
            Use <strong>Settings → Secrets</strong> and{" "}
            <strong>Variables</strong> to store credentials and configuration
            values. Reference them by name in prompts.
          </p>
          <ul>
            <li>
              <strong>Secrets</strong> (sensitive) — API keys, passwords, tokens.
              Stored at <code>/briven/usr/secrets.env</code>
            </li>
            <li>
              <strong>Variables</strong> (non-sensitive) — URLs, usernames, flags
            </li>
          </ul>
        </section>

        <section>
          <h2>Remote Access via Tunneling</h2>
          <p>
            Briven includes a secure tunneling feature using{" "}
            <Link href="https://pypi.org/project/flaredantic/" target="_blank">
              Flaredantic
            </Link>{" "}
            to expose your local instance to the internet:
          </p>
          <ol>
            <li>
              Open <strong>Settings → External Services → Flare Tunnel</strong>
            </li>
            <li>
              Click <strong>Create Tunnel</strong> to generate a secure HTTPS URL
            </li>
            <li>Share the URL to provide access to your instance</li>
          </ol>
          <p>
            <strong>Important:</strong> Always set up authentication before
            creating a tunnel.
          </p>
        </section>

        <section>
          <h2>Voice Interface</h2>
          <h3>Text-to-Speech</h3>
          <p>
            Toggle the <strong>Speech</strong> switch in Preferences to enable
            voice responses. Uses browser-built-in voice synthesis for low
            latency across all platforms.
          </p>

          <h3>Speech-to-Text</h3>
          <p>
            Click the microphone button to send voice messages using
            OpenAI&apos;s Whisper model (runs locally — no API key required).
            Configure model size, language code, and silence detection in
            Settings.
          </p>
          <p>
            All STT and TTS runs locally within the container — no data is
            transmitted to external servers.
          </p>
        </section>

        <section>
          <h2>Memory Management</h2>
          <p>
            Open the <strong>Memory</strong> button in the sidebar to access the
            Memory Dashboard:
          </p>
          <ul>
            <li>
              <strong>Filter</strong> by memory directory, area, and limit
            </li>
            <li>
              <strong>Search</strong> with adjustable threshold (0.00–1.00)
            </li>
            <li>
              <strong>View, edit, and delete</strong> individual memory entries
            </li>
            <li>
              <strong>Clear</strong> bulk memories by filter
            </li>
          </ul>
          <p>Memory types include:</p>
          <ul>
            <li>
              <strong>Knowledge Memories</strong> — from uploaded knowledge files
            </li>
            <li>
              <strong>Conversation Memories</strong> — from chat interactions
            </li>
          </ul>
          <p>
            <strong>Best practices:</strong> Review periodically, remove outdated
            entries, use specific search terms, and use &ldquo;Own
            memory&rdquo; for project isolation.
          </p>
        </section>

        <section>
          <h2>Backup &amp; Restore</h2>
          <p>
            Access via <strong>Settings → Backup &amp; Restore</strong>:
          </p>
          <ul>
            <li>
              <strong>Create Backup</strong> — Exports knowledge, memory, chats,
              config, skills, and files as a ZIP archive
            </li>
            <li>
              <strong>Restore from Backup</strong> — Upload a ZIP to restore
              with options to overwrite, skip, or backup existing files
            </li>
            <li>
              <strong>Cross-system compatible</strong> — Backups work across
              different operating systems
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Secrets in{" "}
            <code>/briven/usr/secrets.env</code> may not be included in backup
            archives. Keep a manual copy.
          </p>
        </section>

        <section>
          <h2>File Browser</h2>
          <ul>
            <li>Navigate directories with path bar and &ldquo;Up&rdquo; button</li>
            <li>Create, rename, delete files and directories</li>
            <li>Upload multiple files simultaneously</li>
            <li>Download files or folders (as zip archives)</li>
            <li>Edit files up to 100MB in the built-in File Editor</li>
          </ul>
          <p>
            Keep your working files in <code>/briven/usr</code> or inside a
            Project workspace.
          </p>
        </section>

        <hr />

        <p>
          See also: <Link href="/docs/quick-start">Quick Start</Link> |{" "}
          <Link href="/docs/mcp-setup">MCP Setup</Link> |{" "}
          <Link href="/docs/a2a-setup">A2A Setup</Link> |{" "}
          <Link href="/docs/troubleshooting">Troubleshooting</Link>
        </p>
      </ContentPage>
    </>
  );
}
