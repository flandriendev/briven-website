import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  title: "Briven Partners with mavi Finans – Blog",
  description:
    "Introducing mavi Finans as our payment infrastructure partner. Built on top of Stripe, mavi Finans brings localized payment processing to the Briven ecosystem.",
};

export default function MaviFinansPost() {
  return (
    <>
      <ReadingProgress readTime="4 min read" />
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-[720px] mx-auto px-6 max-[480px]:px-4 pt-20 pb-16">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Briven Partners with mavi Finans for Payment Handling
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Image
                src="/companies/flndrn.svg"
                alt="flndrn"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="font-medium text-foreground">flndrn</span>
              <span>·</span>
              <time>February 24, 2026</time>
              <span>·</span>
              <span>4 min read</span>
            </div>
          </header>

          {/* Partner logo */}
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-10 mb-10">
            <Image
              src="/companies/mavi-finans.svg"
              alt="mavi Finans"
              width={220}
              height={80}
              className="h-16 w-auto"
            />
          </div>

          {/* Article body */}
          <article className="prose-briven">
            <p>
              Today we are announcing our partnership with{" "}
              <strong>mavi Finans</strong> as the payment infrastructure behind
              Briven. This is a significant step for the project &mdash; one
              that lets us handle sponsorships, skill marketplace transactions,
              and future commercial offerings through a payment layer we trust
              and control.
            </p>

            <h2>What is mavi Finans?</h2>
            <p>
              mavi Finans is a payment processing platform built on top of
              Stripe. It wraps Stripe&apos;s battle-tested infrastructure with a
              layer of localized payment logic &mdash; multi-currency support,
              European tax handling, and a dashboard tailored for open-source
              projects and developer platforms.
            </p>
            <p>
              Think of it as Stripe with a European soul. Same reliability, same
              PCI compliance, but with tooling designed for projects like ours
              that operate across borders and need clean, transparent billing.
            </p>

            <h2>Why mavi Finans?</h2>
            <p>
              We evaluated several options for payment handling &mdash; from
              direct Stripe integration to platforms like Lemonsqueezy and Polar.
              mavi Finans stood out for a few reasons:
            </p>
            <ul>
              <li>
                <strong>Built on Stripe</strong> &mdash; no reinventing the
                wheel. All the security, fraud protection, and payment method
                coverage of Stripe, accessible through a simpler integration
                layer.
              </li>
              <li>
                <strong>EU-first approach</strong> &mdash; SEPA Direct Debit,
                Bancontact, iDEAL, and other European payment methods are first-class
                citizens, not afterthoughts.
              </li>
              <li>
                <strong>Open-source friendly</strong> &mdash; transparent fee
                structure, no surprise charges, and a dashboard that makes sense
                for projects with sponsorship tiers.
              </li>
              <li>
                <strong>Developer experience</strong> &mdash; clean API, webhook
                handling that actually works, and documentation written by people
                who build software.
              </li>
            </ul>

            <h2>What This Means for Briven</h2>
            <p>
              With mavi Finans handling payment processing, we can now properly
              support:
            </p>
            <ul>
              <li>
                <strong>Sponsor tiers</strong> &mdash; Supporter, Early Adopter,
                and Builder plans with recurring billing through a clean checkout
                flow.
              </li>
              <li>
                <strong>Skills Hub transactions</strong> &mdash; when the Skills
                Hub marketplace goes live, mavi Finans will handle purchases,
                creator payouts, and revenue splits.
              </li>
              <li>
                <strong>Custom skill requests</strong> &mdash; Builder tier
                sponsors get 1 custom skill request per month. mavi Finans
                tracks these entitlements automatically.
              </li>
            </ul>

            <h2>The Integration</h2>
            <p>
              mavi Finans is currently in production clone build stage &mdash; we
              are finalizing the deployment on top of Stripe&apos;s
              infrastructure. Once live, the integration will be transparent to
              users: when you sponsor Briven or purchase a skill, the checkout
              is powered by mavi Finans under the hood.
            </p>
            <p>
              The technical integration uses mavi&apos;s webhook-based event
              system, which maps cleanly to Briven&apos;s existing event-driven
              architecture. Payment confirmations, subscription changes, and
              failed payment retries all flow through as structured events.
            </p>

            <h2>Timeline</h2>
            <p>
              We expect mavi Finans to be fully operational within the coming
              weeks. In the meantime, existing sponsorships through GitHub
              Sponsors continue to work as before. Once the migration is
              complete, we will notify all existing sponsors with instructions
              for the transition.
            </p>

            <h2>Looking Ahead</h2>
            <p>
              This partnership is about building a sustainable financial layer
              for Briven without compromising on our open-source values.
              Everything remains free and MIT-licensed. Payments exist to fund
              development, reward contributors, and build a marketplace where
              skill creators can earn from their work.
            </p>
            <p>
              More details on mavi Finans and the Skills Hub marketplace will
              follow in upcoming posts.
            </p>

            <hr />

            <p>
              Questions? Join the{" "}
              <Link href="https://discord.com/channels/1475388668721107081/1475388669639790765">
                Discord
              </Link>{" "}
              or open an issue on{" "}
              <Link href="https://github.com/flandriendev/briven">GitHub</Link>
              .
            </p>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
}
