import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "A2A Setup – Briven",
  description:
    "Enable Agent-to-Agent communication between Briven instances using the A2A protocol.",
};

export default function A2aSetupPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="A2A Setup"
        subtitle="Enable direct Agent-to-Agent communication between multiple Briven instances."
      >
        <section>
          <h2>What is A2A?</h2>
          <p>
            A2A enables direct communication between multiple Briven instances.
            This allows:
          </p>
          <ul>
            <li>
              <strong>Distributed workflows</strong> — Delegate tasks to
              specialized agent instances
            </li>
            <li>
              <strong>Context isolation</strong> — Maintain separate workspaces
              for different agents
            </li>
            <li>
              <strong>Long-running collaboration</strong> — Persistent
              agent-to-agent conversations
            </li>
            <li>
              <strong>Project-specific delegation</strong> — Route work to agents
              with specific project contexts
            </li>
          </ul>
        </section>

        <section>
          <h2>Enabling the A2A Server</h2>
          <h3>Step 1: Open A2A Configuration</h3>
          <ol>
            <li>
              Click <strong>Settings</strong> in the sidebar
            </li>
            <li>
              Navigate to the <strong>MCP/A2A</strong> tab
            </li>
            <li>
              Scroll to <strong>Briven A2A Server</strong>
            </li>
            <li>
              Toggle <strong>Enable A2A server</strong> to ON
            </li>
          </ol>

          <h3>Step 2: Get Connection URL</h3>
          <ol>
            <li>
              Click <strong>connection example</strong> to view your A2A
              connection details
            </li>
            <li>
              The dialog displays your <strong>API Token</strong> and{" "}
              <strong>A2A Connection URL</strong>
            </li>
            <li>Optionally select a project for project-specific connections</li>
          </ol>

          <h3>Step 3: Save Configuration</h3>
          <p>
            Click <strong>Save</strong> to apply. The A2A server is now active
            and ready to accept connections.
          </p>
        </section>

        <section>
          <h2>Connection URL Format</h2>
          <p>Basic format:</p>
          <pre>
            <code>
              {"http://YOUR_HOST:PORT/a2a/t-YOUR_API_TOKEN"}
            </code>
          </pre>
          <p>With project context:</p>
          <pre>
            <code>
              {"http://YOUR_HOST:PORT/a2a/t-YOUR_API_TOKEN/p-PROJECT_NAME"}
            </code>
          </pre>
          <p>
            When a project is specified, all A2A conversations run in that
            project&apos;s context with access to project-specific resources and
            knowledge.
          </p>
        </section>

        <section>
          <h2>Example Use Cases</h2>
          <h3>Local Development</h3>
          <pre>
            <code>
              {`Instance 1: http://localhost:8080/a2a/t-abc123xyz
Instance 2: http://localhost:8081/a2a/t-def456uvw`}
            </code>
          </pre>

          <h3>Remote Agent Collaboration</h3>
          <pre>
            <code>
              http://agent.example.com:8080/a2a/t-remote-token
            </code>
          </pre>

          <h3>Project-Specific Delegation</h3>
          <pre>
            <code>
              http://localhost:8081/a2a/t-frontend-token/p-webapp-ui
            </code>
          </pre>
        </section>

        <section>
          <h2>A2A vs MCP</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>A2A</th>
                <th>MCP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Purpose</td>
                <td>Agent-to-agent chat delegation</td>
                <td>Tool/function access</td>
              </tr>
              <tr>
                <td>Use Case</td>
                <td>Long-running conversations</td>
                <td>Specific tool calls</td>
              </tr>
              <tr>
                <td>Context</td>
                <td>Full chat context</td>
                <td>Function parameters only</td>
              </tr>
              <tr>
                <td>Best For</td>
                <td>Workflow delegation</td>
                <td>Tool integration</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Security Considerations</h2>
          <ul>
            <li>
              <strong>Token Protection</strong> — Keep API tokens secure; they
              provide full access to your instance
            </li>
            <li>
              <strong>Network Access</strong> — Use firewalls or reverse proxies
              to restrict A2A endpoint access
            </li>
            <li>
              <strong>HTTPS</strong> — Use HTTPS for production deployments
            </li>
            <li>
              <strong>Credential Rotation</strong> — Changing your password
              invalidates all existing A2A connection URLs
            </li>
          </ul>
        </section>

        <section>
          <h2>Testing Your Connection</h2>
          <pre>
            <code>
              {`curl -X POST http://localhost:8080/a2a/t-YOUR_TOKEN \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hello from another agent"}'`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Troubleshooting</h2>
          <ul>
            <li>
              <strong>Connection Refused</strong> — Verify A2A server is enabled
              and Briven is running
            </li>
            <li>
              <strong>Invalid Token</strong> — Token may have changed due to
              credential updates; regenerate from Settings
            </li>
            <li>
              <strong>Project Not Found</strong> — Verify the project name
              matches exactly (case-sensitive)
            </li>
          </ul>
        </section>

        <hr />

        <p>
          See also: <Link href="/docs/mcp-setup">MCP Setup</Link> |{" "}
          <Link href="/docs/usage">Usage Guide</Link> |{" "}
          <Link href="/docs/architecture">Architecture</Link>
        </p>
      </ContentPage>
    </>
  );
}
