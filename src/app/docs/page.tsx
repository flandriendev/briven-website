import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Documentation – Briven",
  description:
    "Complete documentation for Briven, the secure self-hosted AI agent framework.",
};

const sections = [
  {
    title: "Getting Started",
    links: [
      {
        label: "Quick Start",
        href: "/docs/quick-start",
        description: "One-command installation on Ubuntu/Debian",
      },
      {
        label: "Mac Mini Setup",
        href: "/docs/mac-mini-setup",
        description: "Native Python + Tailscale setup on Mac Mini",
      },
      {
        label: "VPS + Tailscale",
        href: "/docs/vps-tailscale",
        description: "VPS deployment with Tailscale zero-trust networking",
      },
    ],
  },
  {
    title: "Usage Guides",
    links: [
      {
        label: "Usage Guide",
        href: "/docs/usage",
        description: "Basic and advanced usage, projects, tasks, memory management",
      },
      {
        label: "MCP Setup",
        href: "/docs/mcp-setup",
        description: "MCP server/client configuration",
      },
      {
        label: "A2A Setup",
        href: "/docs/a2a-setup",
        description: "Agent-to-Agent protocol for multi-agent orchestration",
      },
      {
        label: "Troubleshooting",
        href: "/docs/troubleshooting",
        description: "Common issues and solutions",
      },
    ],
  },
  {
    title: "Developer",
    links: [
      {
        label: "Architecture",
        href: "/docs/architecture",
        description: "GOTCHA Framework, system design, and components",
      },
      {
        label: "Extensions",
        href: "/docs/extensions",
        description: "Extending Briven with custom tools and plugins",
      },
      {
        label: "Contributing",
        href: "/docs/contributing",
        description: "How to contribute to Briven",
      },
    ],
  },
  {
    title: "Reference",
    links: [
      {
        label: "Changelog",
        href: "/changelog",
        description: "Release notes and version history",
      },
      {
        label: "Roadmap",
        href: "/roadmap",
        description: "Planned features and priorities",
      },
      {
        label: "Privacy Policy",
        href: "/privacy",
        description: "Data handling and privacy",
      },
      {
        label: "Terms of Service",
        href: "/terms",
        description: "Usage terms",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Documentation"
        subtitle="Everything you need to build, deploy, and manage secure AI agents with Briven."
      >
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group block p-4 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors no-underline"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentPage>
    </>
  );
}
