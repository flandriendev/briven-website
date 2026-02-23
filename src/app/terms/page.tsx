import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Terms of Service – Briven",
  description: "Terms of service for the Briven AI agent framework.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Terms of Service"
        subtitle="Effective date: February 23, 2026"
      >
        <section>
          <h2>1. Acceptance</h2>
          <p>
            By using Briven, you agree to these terms. If you do not agree, do
            not use the software.
          </p>
        </section>

        <section>
          <h2>2. License</h2>
          <p>
            Briven is released under the <strong>MIT License</strong>. You are
            free to use, modify, and distribute the software in accordance with
            the license terms. See the{" "}
            <Link
              href="https://github.com/flandriendev/briven/blob/main/LICENSE"
              target="_blank"
            >
              LICENSE
            </Link>{" "}
            file for the full text.
          </p>
        </section>

        <section>
          <h2>3. Self-Hosted Software</h2>
          <p>
            Briven is self-hosted software. You are responsible for:
          </p>
          <ul>
            <li>
              <strong>Your infrastructure</strong> — Server security, backups,
              and maintenance.
            </li>
            <li>
              <strong>Your API keys</strong> — Safeguarding credentials for LLM
              providers and integrations.
            </li>
            <li>
              <strong>Your data</strong> — All data generated, stored, or
              processed by Briven on your server.
            </li>
            <li>
              <strong>Your usage</strong> — Ensuring your use complies with
              applicable laws and the terms of service of any third-party
              providers.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. No Warranty</h2>
          <p>
            Briven is provided <strong>&ldquo;AS IS&rdquo;</strong> without
            warranty of any kind, express or implied. This includes but is not
            limited to:
          </p>
          <ul>
            <li>
              No guarantee of availability, accuracy, or fitness for a
              particular purpose.
            </li>
            <li>
              No guarantee that AI-generated outputs are correct, safe, or
              appropriate.
            </li>
            <li>
              No guarantee of compatibility with all systems or configurations.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            The authors and contributors of Briven shall not be liable for any
            damages arising from the use of this software, including but not
            limited to:
          </p>
          <ul>
            <li>Data loss or corruption</li>
            <li>Security breaches resulting from misconfiguration</li>
            <li>Costs incurred from third-party API usage</li>
            <li>Actions taken by AI agents</li>
          </ul>
        </section>

        <section>
          <h2>6. AI Agent Responsibility</h2>
          <p>
            Briven is an autonomous AI agent framework. You acknowledge that:
          </p>
          <ul>
            <li>
              <strong>AI agents can take actions</strong> on your system,
              including executing code, browsing the web, and modifying files.
            </li>
            <li>
              <strong>You are responsible</strong> for supervising agent
              behavior and configuring appropriate guardrails.
            </li>
            <li>
              <strong>AI outputs may be incorrect</strong> — always verify
              critical information and decisions.
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Third-Party Services</h2>
          <p>
            Your use of third-party services through Briven (LLM providers,
            Tailscale, messaging platforms) is governed by their respective
            terms of service. Briven is not responsible for third-party service
            availability or policy changes.
          </p>
        </section>

        <section>
          <h2>8. Community Guidelines</h2>
          <p>
            When participating in Briven community spaces (Discord, GitHub):
          </p>
          <ul>
            <li>Be respectful and constructive.</li>
            <li>
              Do not share malicious code, exploits, or harmful content.
            </li>
            <li>Do not use Briven for illegal activities.</li>
          </ul>
        </section>

        <section>
          <h2>9. Changes</h2>
          <p>
            These terms may be updated at any time. Continued use after changes
            constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            For questions about these terms, open an issue on{" "}
            <Link
              href="https://github.com/flandriendev/briven"
              target="_blank"
            >
              GitHub
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
        </section>

        <hr />

        <p className="text-sm">
          Copyright (c) 2026 Briven by flndrn
        </p>
      </ContentPage>
    </>
  );
}
