import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Extensions – Briven",
  description:
    "Learn how to extend Briven with custom tools, extensions, prompts, and subagents.",
};

export default function ExtensionsPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Extensions"
        subtitle="Briven is designed with extensibility as a core principle — customize through modular components that can be replaced or enhanced independently."
      >
        <section>
          <h2>Key Extensible Components</h2>

          <h3>Extensions</h3>
          <p>
            Extensions hook into specific lifecycle points in agent operations.
            The framework supports multiple extension points including:
          </p>
          <ul>
            <li>
              <code>agent_init</code>
            </li>
            <li>
              <code>before_main_llm_call</code>
            </li>
            <li>Various message loop phases</li>
          </ul>
          <p>
            Extensions are discovered automatically from default and
            agent-specific directories, with agent-specific versions overriding
            defaults.
          </p>

          <h3>Tools</h3>
          <p>
            Tools are modular functionality providers invoked through LLM
            responses. They follow a standard lifecycle:
          </p>
          <ol>
            <li>Initialization</li>
            <li>
              <code>before_execution</code>
            </li>
            <li>
              <code>execute</code>
            </li>
            <li>
              <code>after_execution</code>
            </li>
          </ol>
          <p>Tools can be overridden at the agent level.</p>

          <h3>API Endpoints</h3>
          <p>Expose framework functionality to external systems.</p>

          <h3>Helpers</h3>
          <p>
            Shared utility functions that support extensibility across
            components.
          </p>
        </section>

        <section>
          <h2>Prompt Customization</h2>
          <p>Prompts offer multiple customization features:</p>
          <ul>
            <li>
              <strong>Variable substitution</strong> using{" "}
              <code>{"{{var}}"}</code> syntax
            </li>
            <li>
              <strong>Dynamic variable loaders</strong> through corresponding
              Python files
            </li>
            <li>
              <strong>File inclusion</strong> via{" "}
              <code>{'{{ include "path" }}'}</code> syntax
            </li>
          </ul>
          <p>Custom prompts belong in agent-specific directories.</p>
        </section>

        <section>
          <h2>Subagents</h2>
          <p>
            Subagents enable specialized behavior by mirroring the root directory
            structure within <code>/agents/&#123;agent_profile&#125;/</code>.
            Each subagent can:
          </p>
          <ul>
            <li>Override extensions, tools, and prompts</li>
            <li>
              Maintain a <code>settings.json</code> for configuration overrides
            </li>
            <li>Have their own knowledge base and memory</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <p>
            Projects provide isolated workspaces stored under{" "}
            <code>/briven/usr/projects/</code>. Each project contains a{" "}
            <code>.brivenproj</code> folder managing:
          </p>
          <ul>
            <li>Instructions and knowledge</li>
            <li>Memory (dedicated or shared)</li>
            <li>
              Environment variables (both sensitive <code>secrets.env</code> and
              non-sensitive <code>variables.env</code>)
            </li>
          </ul>
          <p>
            This enables multi-client or multi-domain workflows without context
            mixing.
          </p>
        </section>

        <section>
          <h2>Creating a Custom Tool</h2>
          <p>
            To create a custom tool, define a tool specification and optionally
            place prompt overrides in agent profiles. Tools should:
          </p>
          <ol>
            <li>Implement the standard lifecycle methods</li>
            <li>Handle initialization and cleanup properly</li>
            <li>Return structured results for the agent to process</li>
          </ol>
        </section>

        <section>
          <h2>Creating a Custom Extension</h2>
          <p>
            Extensions are Python modules placed in{" "}
            <code>python/extensions</code>. They can:
          </p>
          <ol>
            <li>Hook into agent lifecycle events</li>
            <li>Modify agent behavior before or after LLM calls</li>
            <li>Process messages in the message loop</li>
          </ol>
          <p>
            Agent-specific extensions go in{" "}
            <code>agents/&#123;profile&#125;/extensions/</code> and
            automatically override defaults.
          </p>
        </section>

        <hr />

        <p>
          See also: <Link href="/docs/architecture">Architecture</Link> |{" "}
          <Link href="/docs/contributing">Contributing</Link> |{" "}
          <Link href="/docs/mcp-setup">MCP Setup</Link>
        </p>
      </ContentPage>
    </>
  );
}
