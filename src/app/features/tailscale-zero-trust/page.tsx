import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Tailscale Zero-Trust Networking – Briven",
  description:
    "How Briven uses Tailscale for zero-trust networking with no exposed ports, encrypted WireGuard tunnels, and ACL enforcement.",
};

export default function TailscaleZeroTrustPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Tailscale Zero-Trust"
        subtitle="No exposed public ports. Encrypted WireGuard tunnels on your private tailnet with ACL enforcement."
      >
        <section>
          <h2>Why Zero-Trust?</h2>
          <p>
            Traditional server setups expose ports to the public internet and
            rely on firewalls to keep attackers out. Briven takes a different
            approach: <strong>no ports are exposed at all</strong>. Instead,
            all communication flows through Tailscale&apos;s encrypted WireGuard
            mesh network.
          </p>
          <p>
            This means your Briven agent is only reachable from devices on your
            private tailnet — your laptop, your phone, your other servers. The
            public internet never sees port 8000.
          </p>
        </section>

        <section>
          <h2>How It Works</h2>
          <ul>
            <li>
              <strong>WireGuard tunnels</strong> — All traffic between your
              devices is encrypted end-to-end using WireGuard, a modern,
              high-performance VPN protocol
            </li>
            <li>
              <strong>No public ports</strong> — Briven binds to its Tailscale
              IP, not <code>0.0.0.0</code>. Without a Tailscale auth key, it
              binds to <code>127.0.0.1:8000</code> (local only)
            </li>
            <li>
              <strong>ACL enforcement</strong> — Only devices tagged{" "}
              <code>tag:admin</code> can reach Briven on port 8000. All others
              are denied
            </li>
            <li>
              <strong>MagicDNS</strong> — Access your agent by hostname instead
              of IP, e.g. <code>http://briven-vps:8000</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>Tailscale Integration in Briven</h2>
          <p>
            Briven includes a dedicated Tailscale tool at{" "}
            <code>tools/tailscale.py</code> that provides:
          </p>
          <ul>
            <li>Tailnet status monitoring and health checks</li>
            <li>Peer discovery — see all connected devices</li>
            <li>
              ACL management via <code>--apply-acl</code> and{" "}
              <code>--acl-status</code> flags
            </li>
            <li>Secure node-to-node communication for multi-agent setups</li>
          </ul>
        </section>

        <section>
          <h2>Configuration</h2>
          <p>
            Set your Tailscale auth key in <code>usr/.env</code>:
          </p>
          <pre>
            <code>
              {`# Tailscale (optional but recommended)
TAILSCALE_AUTHKEY=tskey-auth-...
TAILSCALE_API_KEY=tskey-api-...     # For ACL enforcement (optional)`}
            </code>
          </pre>
          <p>
            With <code>TAILSCALE_AUTHKEY</code> set, the Docker container
            auto-authenticates and binds to its Tailscale IP. Without it,
            Briven binds to <code>127.0.0.1:8000</code> for local access only.
          </p>
        </section>

        <section>
          <h2>Combined with Host Hardening</h2>
          <p>
            For VPS deployments, Briven&apos;s installer can set up a
            triple-layer security posture:
          </p>
          <ol>
            <li>
              <strong>Tailscale zero-trust</strong> — no public ports, encrypted
              mesh networking
            </li>
            <li>
              <strong>UFW firewall</strong> — defense in depth with deny-all
              default policy
            </li>
            <li>
              <strong>Fail2ban</strong> — SSH brute-force protection with
              automatic banning
            </li>
          </ol>
        </section>

        <hr />

        <p>
          See also:{" "}
          <Link href="/docs/vps-tailscale">VPS + Tailscale Setup Guide</Link> |{" "}
          <Link href="/features/multi-agent">Multi-Agent Cooperation</Link>
        </p>
      </ContentPage>
    </>
  );
}
