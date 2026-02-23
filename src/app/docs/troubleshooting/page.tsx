import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Troubleshooting – Briven",
  description:
    "Frequently asked questions and troubleshooting steps for common Briven issues.",
};

export default function TroubleshootingPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Troubleshooting"
        subtitle="Frequently asked questions and solutions for common issues."
      >
        <section>
          <h2>Frequently Asked Questions</h2>

          <h3>How do I ask Briven to work directly on my files?</h3>
          <p>
            Place the files/directories in <code>/briven/usr</code>. Briven will
            be able to perform tasks on them.
          </p>

          <h3>When I input something in chat, nothing happens.</h3>
          <p>
            Check if you have set up API keys in the Settings page. Without API
            keys, Briven cannot call LLM providers.
          </p>

          <h3>
            I get &ldquo;Invalid model ID.&rdquo; What does that mean?
          </h3>
          <p>
            Verify the <strong>provider</strong> and <strong>model naming</strong>
            . For example, <code>openai/gpt-5.3</code> is correct for
            OpenRouter, but incorrect for the native OpenAI provider which goes
            without prefix.
          </p>

          <h3>Does ChatGPT Plus include API access?</h3>
          <p>
            No. ChatGPT Plus does not include API credits. You must provide a
            separate OpenAI API key in Settings.
          </p>

          <h3>Where is chat history stored?</h3>
          <p>
            Chat history lives at <code>/briven/usr/chats/</code> inside the
            container.
          </p>

          <h3>How do I integrate open-source models?</h3>
          <p>
            Refer to the installation guide for configuring local models (Ollama,
            LM Studio, etc.). Some LLM providers offer free usage tiers,
            including Groq, Mistral, SambaNova, and CometAPI.
          </p>

          <h3>How can I make Briven retain memory between sessions?</h3>
          <p>
            Use <strong>Settings → Backup &amp; Restore</strong> and avoid
            mapping the entire <code>/briven</code> directory.
          </p>

          <h3>My browser agent fails or is unreliable.</h3>
          <p>
            The built-in browser agent is currently unstable on some systems. Use
            Skills or MCP alternatives such as Browser OS, Chrome DevTools, or
            Playwright MCP. See{" "}
            <Link href="/docs/mcp-setup">MCP Setup</Link>.
          </p>

          <h3>My secrets disappeared after a backup restore.</h3>
          <p>
            Secrets are stored in <code>/briven/usr/secrets.env</code> and are
            not always included in backup archives. Copy them manually.
          </p>

          <h3>How do I adjust API rate limits?</h3>
          <p>
            Use the model rate limit fields in Settings (Chat/Utility/Browser
            model sections) to set request/input/output limits.
          </p>

          <h3>
            My <code>code_execution_tool</code> doesn&apos;t work.
          </h3>
          <ul>
            <li>Ensure Docker is installed and running</li>
            <li>
              On macOS, grant Docker Desktop access to your project files
            </li>
            <li>Verify that the Docker image is updated</li>
          </ul>

          <h3>Can Briven interact with external APIs?</h3>
          <p>
            Yes, by creating custom tools or using MCP servers. See{" "}
            <Link href="/docs/extensions">Extensions</Link> and{" "}
            <Link href="/docs/mcp-setup">MCP Setup</Link>.
          </p>
        </section>

        <section>
          <h2>Installation Issues</h2>
          <ul>
            <li>
              <strong>Docker Issues:</strong> If Docker containers fail to start,
              verify your Docker installation. On macOS, ensure you&apos;ve
              granted Docker access to your project files. Verify the Docker
              image is updated.
            </li>
            <li>
              <strong>Web UI not reachable:</strong> Ensure at least one host
              port is mapped to container port 80. If you used{" "}
              <code>0:80</code>, check the assigned port in Docker Desktop.
            </li>
          </ul>
        </section>

        <section>
          <h2>Usage Issues</h2>
          <ul>
            <li>
              <strong>Terminal commands not executing:</strong> Ensure the Docker
              container is running. Check SSH settings if applicable. Try
              removing and re-pulling the Docker image.
            </li>
            <li>
              <strong>Error messages:</strong> Pay close attention to error
              messages in the Web UI or terminal. Search for the specific error
              online or in community forums.
            </li>
            <li>
              <strong>Performance issues:</strong> May be due to resource
              limitations, network latency, or prompt complexity, especially with
              local models.
            </li>
          </ul>
        </section>

        <section>
          <h2>Where to Get Help</h2>
          <ul>
            <li>
              <Link
                href="https://discord.com/channels/1475388668721107081/1475388669639790765"
                target="_blank"
              >
                Join the Discord community
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/flandriendev/briven/issues"
                target="_blank"
              >
                Open a GitHub issue
              </Link>
            </li>
          </ul>
        </section>

        <hr />

        <p>
          See also: <Link href="/docs/quick-start">Quick Start</Link> |{" "}
          <Link href="/docs/usage">Usage Guide</Link> |{" "}
          <Link href="/docs/mcp-setup">MCP Setup</Link>
        </p>
      </ContentPage>
    </>
  );
}
