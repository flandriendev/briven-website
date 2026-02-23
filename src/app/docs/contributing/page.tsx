import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Contributing – Briven",
  description: "How to contribute code, documentation, or improvements to Briven.",
};

export default function ContributingPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Contributing"
        subtitle="Contributions to improve Briven are very welcome! This guide outlines how to contribute code, documentation, or other improvements."
      >
        <section>
          <h2>Getting Started</h2>
          <ul>
            <li>
              See <Link href="/docs/extensions">Extensions</Link> for
              instructions on creating custom extensions
            </li>
            <li>
              See <Link href="/docs/architecture">Architecture</Link> for an
              overview of the system design
            </li>
          </ul>

          <ol>
            <li>
              <strong>Fork the Repository</strong> — Fork the{" "}
              <Link
                href="https://github.com/flandriendev/briven"
                target="_blank"
              >
                Briven repository
              </Link>{" "}
              on GitHub
            </li>
            <li>
              <strong>Clone Your Fork</strong> — Clone your forked repository to
              your local machine
            </li>
            <li>
              <strong>Create a Branch</strong> — Use a descriptive name that
              reflects the purpose of your contribution (e.g.{" "}
              <code>fix-memory-leak</code>, <code>add-search-tool</code>,{" "}
              <code>improve-docs</code>)
            </li>
          </ol>
        </section>

        <section>
          <h2>Making Changes</h2>
          <ul>
            <li>
              <strong>Code Style</strong> — Follow the existing code style.
              Briven generally follows PEP 8 conventions.
            </li>
            <li>
              <strong>Documentation</strong> — Update documentation if your
              changes affect user-facing functionality. Documentation is written
              in Markdown.
            </li>
            <li>
              <strong>Commit Messages</strong> — Write clear and concise commit
              messages that explain the purpose of your changes.
            </li>
          </ul>
        </section>

        <section>
          <h2>Submitting a Pull Request</h2>
          <ol>
            <li>
              <strong>Push Your Branch</strong> — Push your branch to your forked
              repository on GitHub
            </li>
            <li>
              <strong>Create a Pull Request</strong> — Target the{" "}
              <code>development</code> branch in the main Briven repository
            </li>
            <li>
              <strong>Provide Details</strong> — In your PR description, clearly
              explain the purpose and scope of your changes. Include relevant
              context, test results, and any helpful information for reviewers.
            </li>
            <li>
              <strong>Address Feedback</strong> — Be responsive to feedback from
              the community
            </li>
          </ol>
        </section>

        <section>
          <h2>Documentation</h2>
          <p>
            The documentation is built using Markdown. Contributions to
            documentation are appreciated even if you don&apos;t know Markdown —
            we look forward to improving Briven for everyone&apos;s benefit.
          </p>
        </section>

        <section>
          <h2>Community</h2>
          <ul>
            <li>
              <Link
                href="https://discord.com/channels/1475388668721107081/1475388669639790765"
                target="_blank"
              >
                Join the Discord
              </Link>{" "}
              to discuss ideas and ask questions
            </li>
            <li>
              <Link
                href="https://github.com/flandriendev/briven/issues"
                target="_blank"
              >
                Open a GitHub issue
              </Link>{" "}
              for bug reports or feature requests
            </li>
          </ul>
        </section>

        <hr />

        <p>
          See also: <Link href="/docs/architecture">Architecture</Link> |{" "}
          <Link href="/docs/extensions">Extensions</Link>
        </p>
      </ContentPage>
    </>
  );
}
