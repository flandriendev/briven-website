import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Policy – Briven",
  description: "Privacy policy for the Briven AI agent framework.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Privacy Policy"
        subtitle="Effective date: February 23, 2026"
      >
        <section>
          <h2>Overview</h2>
          <p>
            Briven is a <strong>self-hosted</strong> AI agent framework. Your
            data stays on your infrastructure. We do not operate a hosted
            service, and we do not collect, store, or process your data.
          </p>
        </section>

        <section>
          <h2>What Briven Does NOT Collect</h2>
          <ul>
            <li>No telemetry or analytics</li>
            <li>No usage tracking or crash reporting</li>
            <li>No personal information</li>
            <li>No conversation logs or agent memory</li>
            <li>No API keys or credentials</li>
          </ul>
        </section>

        <section>
          <h2>Your Data, Your Server</h2>
          <p>When you install Briven on your own server:</p>
          <ul>
            <li>
              <strong>All data stays local</strong> — conversations, memory,
              knowledge base, API keys, and configuration files remain on your
              server.
            </li>
            <li>
              <strong>LLM API calls</strong> go directly from your server to
              the provider you choose (OpenAI, Anthropic, etc.). Briven does
              not proxy or log these calls.
            </li>
            <li>
              <strong>Tailscale networking</strong> is between your devices
              only. No traffic passes through Briven infrastructure.
            </li>
          </ul>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Briven integrates with third-party services that have their own
            privacy policies:
          </p>
          <ul>
            <li>
              <strong>LLM Providers</strong> (OpenAI, Anthropic, Google, etc.)
              — Your prompts and responses are subject to each
              provider&apos;s data policies.
            </li>
            <li>
              <strong>Tailscale</strong> — Network traffic routing is governed
              by{" "}
              <Link
                href="https://tailscale.com/privacy-policy"
                target="_blank"
              >
                Tailscale&apos;s privacy policy
              </Link>
              .
            </li>
            <li>
              <strong>Messaging platforms</strong> (Telegram, Discord, Slack,
              WhatsApp) — Messages sent through these channels are subject to
              each platform&apos;s policies.
            </li>
          </ul>
        </section>

        <section>
          <h2>GitHub &amp; Website</h2>
          <ul>
            <li>
              <strong>GitHub</strong> — Contributions, issues, and stars are
              governed by{" "}
              <Link
                href="https://docs.github.com/en/site-policy/privacy-policies"
                target="_blank"
              >
                GitHub&apos;s privacy policy
              </Link>
              .
            </li>
            <li>
              <strong>briven.ai</strong> — The website may use basic analytics
              (page views). No personal data is collected.
            </li>
          </ul>
        </section>

        <section>
          <h2>Open Source</h2>
          <p>
            Briven is open-source under the MIT License. You can audit the
            complete source code to verify these claims:{" "}
            <Link
              href="https://github.com/flandriendev/briven"
              target="_blank"
            >
              github.com/flandriendev/briven
            </Link>
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions, open an issue on{" "}
            <Link
              href="https://github.com/flandriendev/briven"
              target="_blank"
            >
              GitHub
            </Link>{" "}
            or reach out on{" "}
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
