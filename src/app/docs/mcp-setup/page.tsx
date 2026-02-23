import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "MCP Setup – Briven",
  description:
    "Connect Briven to external MCP servers to expand functionality with browser automation, databases, and more.",
};

export default function McpSetupPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="MCP Setup"
        subtitle="Connect Briven to external MCP (Model Context Protocol) servers to expand functionality."
      >
        <section>
          <h2>What MCP Servers Do</h2>
          <p>
            MCP servers enable specialized capabilities beyond Briven&apos;s
            built-in tools:
          </p>
          <ul>
            <li>Browser automation (Chrome DevTools, Playwright)</li>
            <li>Database access (SQLite, PostgreSQL)</li>
            <li>File system operations</li>
            <li>External API integrations</li>
            <li>Custom tool implementations</li>
          </ul>
        </section>

        <section>
          <h2>Setup Process</h2>
          <ol>
            <li>
              Go to <strong>Settings</strong> → <strong>MCP/A2A</strong> tab →{" "}
              <strong>External MCP Servers</strong>
            </li>
            <li>Edit the JSON configuration to add your desired servers</li>
            <li>Save and restart if prompted</li>
          </ol>
        </section>

        <section>
          <h2>Configuration Example</h2>
          <p>
            A basic setup using <code>npx</code> to run Chrome DevTools MCP:
          </p>
          <pre>
            <code>
              {`{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Accessing Tools</h2>
          <p>
            Once connected, tools are named with the server prefix (e.g.{" "}
            <code>chrome_devtools.navigate_to_url</code>). Briven automatically
            discovers and uses them when appropriate based on your prompts.
          </p>
        </section>

        <section>
          <h2>Docker Networking</h2>
          <ul>
            <li>
              <strong>macOS / Windows:</strong> Use{" "}
              <code>host.docker.internal</code> for host connections
            </li>
            <li>
              <strong>Linux:</strong> Run MCP servers in the same Docker network
              or use the host network
            </li>
          </ul>
        </section>

        <section>
          <h2>Recommended MCP Servers</h2>
          <p>
            The built-in browser agent has dependency issues on some systems. If
            web automation is critical, prefer MCP-based browser tools:
          </p>
          <ul>
            <li>
              <strong>Browser OS MCP</strong> — full browser automation
            </li>
            <li>
              <strong>Chrome DevTools MCP</strong> — Chrome debugging protocol
            </li>
            <li>
              <strong>Playwright MCP</strong> — cross-browser automation
            </li>
          </ul>
        </section>

        <hr />

        <p>
          See also: <Link href="/docs/a2a-setup">A2A Setup</Link> |{" "}
          <Link href="/docs/extensions">Extensions</Link> |{" "}
          <Link href="/docs/usage">Usage Guide</Link>
        </p>
      </ContentPage>
    </>
  );
}
