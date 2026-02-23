import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Quick Start – Briven",
  description:
    "Get started with Briven in minutes using the one-command installer.",
};

export default function QuickStartPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Quick Start"
        subtitle="Get Briven up and running in minutes."
      >
        <section>
          <h2>Native Install (Recommended)</h2>
          <p>
            The framework offers a streamlined setup via a single command for
            fresh Ubuntu/Debian VPS systems:
          </p>
          <pre>
            <code>
              curl -fsSL
              https://raw.githubusercontent.com/flandriendev/briven/main/install.sh
              | bash
            </code>
          </pre>
          <p>
            The installation includes an interactive text-based interface with
            progress tracking. It automates system dependencies, Python
            configuration, Tailscale integration, firewall setup, and systemd
            service creation while guiding you through configuration so the
            system is immediately operational.
          </p>
        </section>

        <section>
          <h2>Configuration Steps During Install</h2>
          <ol>
            <li>
              <strong>Tailscale authentication key</strong> — implements
              zero-trust networking without public port exposure
            </li>
            <li>
              <strong>LLM API keys</strong> — supports OpenRouter, Anthropic,
              xAI/Grok, OpenAI, DeepSeek, Google, Groq, Mistral, Perplexity,
              Cohere, HuggingFace, and Sambanova
            </li>
            <li>
              <strong>Messaging channels</strong> — optional integration with
              Telegram, WhatsApp, Discord, Slack, or Email
            </li>
            <li>
              <strong>UFW + Fail2ban</strong> — optional firewall hardening with
              SSH brute-force protection
            </li>
            <li>
              <strong>Tailscale ACL</strong> — optional access restriction to{" "}
              <code>tag:admin</code> devices only
            </li>
          </ol>
          <p>
            After completion, access the interface at{" "}
            <code>{"http://<your-tailscale-ip>:8000"}</code> from any device on
            your tailnet.
          </p>
        </section>

        <section>
          <h2>Post-Installation Configuration</h2>
          <pre>
            <code>
              {`nano ~/briven/usr/.env          # Edit API keys or add new providers
sudo systemctl restart briven   # Apply changes
journalctl -u briven -f         # Watch logs`}
            </code>
          </pre>
          <p>
            <strong>Supported systems:</strong> Ubuntu 22.04/24.04 and Debian
            12/13. Python 3.13+ receives automatic dependency patches.
          </p>
        </section>

        <section>
          <h2>Docker Install (Optional)</h2>
          <pre>
            <code>
              {`git clone https://github.com/flandriendev/briven.git && cd briven
cp usr/.env.example usr/.env && nano usr/.env   # Add your API keys

TAILSCALE_AUTHKEY=tskey-auth-xxxxx docker compose up -d --build`}
            </code>
          </pre>
          <p>
            Without the auth key, the container binds to{" "}
            <code>127.0.0.1:8000</code> (local-only access). With it, automatic
            authentication and Tailscale IP binding occur.
          </p>
        </section>

        <section>
          <h2>Next Steps</h2>
          <ul>
            <li>
              <Link href="/docs/mac-mini-setup">Mac Mini Setup</Link> — Native
              Python + Tailscale setup on macOS
            </li>
            <li>
              <Link href="/docs/vps-tailscale">VPS + Tailscale</Link> — Full
              VPS deployment with zero-trust networking
            </li>
            <li>
              <Link href="/docs/usage">Usage Guide</Link> — Learn how to use
              Briven day-to-day
            </li>
          </ul>
        </section>
      </ContentPage>
    </>
  );
}
