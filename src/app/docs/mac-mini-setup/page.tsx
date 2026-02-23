import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Mac Mini Setup – Briven",
  description:
    "Native Python + Tailscale setup for Briven on Mac Mini. No Docker required.",
};

export default function MacMiniSetupPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Mac Mini Setup"
        subtitle="Native Python + Tailscale setup. No Docker required."
      >
        <section>
          <h2>Prerequisites</h2>
          <ul>
            <li>macOS 13+ (Ventura or later)</li>
            <li>
              Python 3.10+ (<code>brew install python@3.12</code> recommended)
            </li>
            <li>
              <Link href="https://tailscale.com/download/mac" target="_blank">
                Tailscale
              </Link>{" "}
              installed and logged in
            </li>
            <li>
              Git (<code>brew install git</code>)
            </li>
            <li>An LLM API key (OpenRouter, OpenAI, Anthropic, etc.)</li>
          </ul>
        </section>

        <section>
          <h2>1. Install Tailscale</h2>
          <pre>
            <code>
              {`# Download from https://tailscale.com/download/mac or via brew:
brew install --cask tailscale
open -a Tailscale   # log in via the menu bar icon
tailscale ip -4     # note your Tailscale IP (e.g. 100.x.x.x)`}
            </code>
          </pre>
          <p>
            No port forwarding needed. Briven will bind to your Tailscale IP for
            secure access.
          </p>
        </section>

        <section>
          <h2>2. Clone &amp; Install Briven</h2>
          <pre>
            <code>
              {`# One-liner (recommended):
curl -fsSL https://raw.githubusercontent.com/flandriendev/briven/main/install.sh | bash

# Or manually:
git clone https://github.com/flandriendev/briven.git ~/briven
cd ~/briven
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt`}
            </code>
          </pre>
        </section>

        <section>
          <h2>3. Configure Environment</h2>
          <pre>
            <code>
              {`cp .env.example .env
nano .env   # or open with your editor`}
            </code>
          </pre>
          <p>Minimum required fields:</p>
          <pre>
            <code>
              {`# Pick at least one LLM provider:
API_KEY_OPENROUTER=sk-or-...
# API_KEY_OPENAI=sk-...
# API_KEY_ANTHROPIC=sk-ant-...

# Set your working directory:
BRIVEN_SET_work_dir=/Users/yourname/briven-workspace

# Optional: bind to Tailscale IP automatically
# BRIVEN_SET_host=100.x.x.x`}
            </code>
          </pre>
        </section>

        <section>
          <h2>4. Start Briven</h2>
          <pre>
            <code>
              {`cd ~/briven
source .venv/bin/activate

# Get your Tailscale IP
TS_IP=$(tailscale ip -4)

# Start server bound to Tailscale IP (secure — only tailnet peers can reach it)
uvicorn run_ui:app --host "$TS_IP" --port 8000`}
            </code>
          </pre>
          <p>
            Access from any device on your tailnet:{" "}
            <code>http://100.x.x.x:8000</code>
          </p>
          <p>For localhost-only (no Tailscale):</p>
          <pre>
            <code>uvicorn run_ui:app --host 127.0.0.1 --port 8000</code>
          </pre>
        </section>

        <section>
          <h2>5. Auto-start with launchd</h2>
          <p>Create a launchd plist so Briven starts automatically on login:</p>
          <pre>
            <code>
              {`cat > ~/Library/LaunchAgents/com.briven.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.briven</string>
  <key>ProgramArguments</key>
  <array>
    <string>/Users/yourname/briven/.venv/bin/uvicorn</string>
    <string>run_ui:app</string>
    <string>--host</string>
    <string>0.0.0.0</string>
    <string>--port</string>
    <string>8000</string>
  </array>
  <key>WorkingDirectory</key>
  <string>/Users/yourname/briven</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
</dict>
</plist>
EOF

# Replace 'yourname' with your actual macOS username:
sed -i '' "s/yourname/$(whoami)/g" ~/Library/LaunchAgents/com.briven.plist

# Load it:
launchctl load ~/Library/LaunchAgents/com.briven.plist`}
            </code>
          </pre>
          <p>Manage the service:</p>
          <pre>
            <code>
              {`launchctl start com.briven    # start
launchctl stop com.briven     # stop
launchctl unload ~/Library/LaunchAgents/com.briven.plist  # remove
tail -f /tmp/briven.log       # view logs`}
            </code>
          </pre>
        </section>

        <section>
          <h2>6. Tailscale Serve (optional HTTPS)</h2>
          <p>
            Tailscale Serve wraps your local port with HTTPS on your tailnet —
            no cert management needed:
          </p>
          <pre>
            <code>
              {`tailscale serve 8000
# Access via: https://your-machine-name.your-tailnet.ts.net`}
            </code>
          </pre>
        </section>

        <section>
          <h2>7. Verify Installation</h2>
          <pre>
            <code>
              {`# Check Tailscale status
python tools/tailscale.py --status

# Check Briven is running
curl http://$(tailscale ip -4):8000/api/health 2>/dev/null && echo "OK"

# Open in browser
open "http://$(tailscale ip -4):8000"`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Updating</h2>
          <pre>
            <code>
              {`cd ~/briven
git pull
source .venv/bin/activate
pip install -r requirements.txt
# Restart the service:
launchctl stop com.briven && launchctl start com.briven`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Troubleshooting</h2>
          <table>
            <thead>
              <tr>
                <th>Problem</th>
                <th>Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Port not accessible from other devices</td>
                <td>
                  Ensure you&apos;re binding to Tailscale IP, not 127.0.0.1
                </td>
              </tr>
              <tr>
                <td>
                  <code>uvicorn: command not found</code>
                </td>
                <td>
                  Activate venv: <code>source .venv/bin/activate</code>
                </td>
              </tr>
              <tr>
                <td>Agent not responding</td>
                <td>
                  Check logs: <code>tail -f /tmp/briven.log</code>
                </td>
              </tr>
              <tr>
                <td>LLM errors</td>
                <td>
                  Verify API key in <code>.env</code>, check provider dashboard
                </td>
              </tr>
              <tr>
                <td>Tailscale not connected</td>
                <td>
                  Run <code>tailscale up</code> and log in
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            See also:{" "}
            <Link href="/docs/troubleshooting">Troubleshooting Guide</Link>
          </p>
        </section>
      </ContentPage>
    </>
  );
}
