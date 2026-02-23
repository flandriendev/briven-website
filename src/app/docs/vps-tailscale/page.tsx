import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "VPS + Tailscale Setup – Briven",
  description:
    "Ultra-safe VPS deployment guide for Briven with Tailscale zero-trust networking.",
};

export default function VpsTailscalePage() {
  return (
    <>
      <Header />
      <ContentPage
        title="VPS + Tailscale Setup"
        subtitle="Hostinger KVM + Ubuntu 24.04 + Tailscale Zero-Trust. Never expose port 8000 or 22 publicly — only via Tailscale."
      >
        <section>
          <h2>Overview</h2>
          <p>
            This guide provides a complete, copy-paste-ready deployment of
            Briven on a VPS with triple-layer security:
          </p>
          <ol>
            <li>
              <strong>Tailscale zero-trust</strong> — no public ports, encrypted
              mesh networking
            </li>
            <li>
              <strong>UFW firewall</strong> — defense in depth, deny-all default
            </li>
            <li>
              <strong>Fail2ban</strong> — intrusion detection and automatic
              banning
            </li>
          </ol>
        </section>

        <section>
          <h2>Step 1 — Pre-VPS Preparation</h2>
          <h3>1.1 Create a Tailscale Account</h3>
          <ul>
            <li>
              Sign up at{" "}
              <Link href="https://login.tailscale.com" target="_blank">
                login.tailscale.com
              </Link>
            </li>
            <li>
              Install Tailscale on your Mac:{" "}
              <code>brew install --cask tailscale</code>
            </li>
            <li>Confirm your machine appears in the admin console</li>
            <li>
              Note your local Tailscale IP: <code>tailscale ip -4</code>
            </li>
          </ul>

          <h3>1.2 Prepare Your .env File Locally</h3>
          <pre>
            <code>
              {`mkdir -p ~/briven-deploy
cat > ~/briven-deploy/.env << 'EOF'
# ── Authentication (REQUIRED) ──────────
AUTH_LOGIN=youruser
AUTH_PASSWORD=YourStr0ng!Pass#2026

# ── LLM Provider (pick at least one) ──
API_KEY_OPENROUTER=sk-or-v1-xxxxxxxxxxxx

# ── Working directory on VPS ───────────
BRIVEN_SET_work_dir=/root/briven-workspace
EOF`}
            </code>
          </pre>

          <h3>1.3 Generate an SSH Key Pair</h3>
          <pre>
            <code>
              {`ssh-keygen -t ed25519 -C "briven-vps" -f ~/.ssh/briven_vps
cat ~/.ssh/briven_vps.pub
# Copy this public key — paste it during VPS creation`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Step 2 — VPS Creation &amp; Initial Hardening</h2>
          <h3>2.1 Rent the VPS</h3>
          <table>
            <thead>
              <tr>
                <th>Setting</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plan</td>
                <td>KVM 1 (1 vCPU, 4 GB RAM) or KVM 2</td>
              </tr>
              <tr>
                <td>OS</td>
                <td>Ubuntu 24.04 LTS</td>
              </tr>
              <tr>
                <td>Region</td>
                <td>Closest to you</td>
              </tr>
              <tr>
                <td>SSH Key</td>
                <td>Paste your public key</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Minimum 4 GB RAM recommended.</strong> Briven loads
            sentence-transformers and embedding models into memory.
          </p>

          <h3>2.2 First SSH &amp; Immediate Hardening</h3>
          <pre>
            <code>
              {`ssh -i ~/.ssh/briven_vps root@YOUR_VPS_PUBLIC_IP

# Update the system
apt update && apt upgrade -y

# Create a non-root user
adduser --disabled-password --gecos "Briven" briven
usermod -aG sudo briven

# Copy SSH key to new user
mkdir -p /home/briven/.ssh
cp /root/.ssh/authorized_keys /home/briven/.ssh/
chown -R briven:briven /home/briven/.ssh
chmod 700 /home/briven/.ssh
chmod 600 /home/briven/.ssh/authorized_keys`}
            </code>
          </pre>

          <h3>2.3 Harden SSH</h3>
          <pre>
            <code>
              {`cat >> /etc/ssh/sshd_config << 'EOF'

# ── Briven hardening ──────────────────
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
MaxAuthTries 3
AllowUsers briven
EOF

# Validate config (don't restart SSH yet!)
sshd -t`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Step 3 — Tailscale + UFW + Fail2ban</h2>
          <h3>3.1 Install Tailscale</h3>
          <pre>
            <code>
              {`curl -fsSL https://tailscale.com/install.sh | sh
tailscale up
tailscale ip -4    # Write down this IP!
tailscale status   # Should show your Mac and VPS`}
            </code>
          </pre>

          <h3>3.2 Test Tailscale Connectivity (from your Mac)</h3>
          <pre>
            <code>
              {`ping -c 3 100.x.x.x    # replace with VPS Tailscale IP
ssh -i ~/.ssh/briven_vps briven@100.x.x.x`}
            </code>
          </pre>

          <h3>3.3 Configure UFW</h3>
          <pre>
            <code>
              {`sudo apt install -y ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow Tailscale interface (CRITICAL — do this FIRST)
sudo ufw allow in on tailscale0

# Allow SSH and Briven only over Tailscale
sudo ufw allow from 100.64.0.0/10 to any port 22 proto tcp
sudo ufw allow from 100.64.0.0/10 to any port 8000 proto tcp

sudo ufw enable
sudo ufw status verbose`}
            </code>
          </pre>

          <h3>3.4 Now Restart SSH</h3>
          <pre>
            <code>
              {`sudo systemctl restart sshd

# Test from Mac (should work):
ssh -i ~/.ssh/briven_vps briven@100.x.x.x

# Test public SSH (should fail):
ssh -i ~/.ssh/briven_vps briven@YOUR_PUBLIC_IP -o ConnectTimeout=5`}
            </code>
          </pre>

          <h3>3.5 Install Fail2ban</h3>
          <pre>
            <code>
              {`sudo apt install -y fail2ban

sudo cat > /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime  = 3600
findtime = 600
maxretry = 3
banaction = ufw
ignoreip = 127.0.0.1/8 ::1 100.64.0.0/10

[sshd]
enabled  = true
port     = ssh
filter   = sshd
logpath  = /var/log/auth.log
maxretry = 3
EOF

sudo systemctl enable fail2ban
sudo systemctl start fail2ban`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Step 4 — Install Briven</h2>
          <h3>4.1 System Dependencies</h3>
          <pre>
            <code>
              {`sudo apt install -y python3 python3-pip python3-venv python3-dev \\
    build-essential git curl wget \\
    libffi-dev libssl-dev libjpeg-dev libpng-dev \\
    tesseract-ocr poppler-utils ffmpeg

python3 --version   # Must be 3.10+`}
            </code>
          </pre>

          <h3>4.2 Run the Installer</h3>
          <pre>
            <code>
              curl -fsSL
              https://raw.githubusercontent.com/flandriendev/briven/main/install.sh
              | bash
            </code>
          </pre>

          <h3>4.3 Deploy Your .env</h3>
          <pre>
            <code>
              {`# From your Mac:
scp -i ~/.ssh/briven_vps ~/briven-deploy/.env briven@100.x.x.x:~/briven/.env

# On VPS — add Tailscale bind address:
TS_IP=$(tailscale ip -4)
echo "BRIVEN_SET_host=$TS_IP" >> ~/briven/.env`}
            </code>
          </pre>

          <h3>4.4 Create systemd Service</h3>
          <pre>
            <code>
              {`sudo cat > /etc/systemd/system/briven.service << EOF
[Unit]
Description=Briven AI Framework
After=network.target tailscaled.service

[Service]
Type=simple
User=briven
WorkingDirectory=/home/briven/briven
Environment="PATH=/home/briven/briven/.venv/bin:/usr/local/bin:/usr/bin:/bin"
ExecStart=/home/briven/briven/.venv/bin/uvicorn run_ui:app --host $(tailscale ip -4) --port 8000
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable briven`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Step 5 — Testing</h2>
          <h3>Manual Start (foreground)</h3>
          <pre>
            <code>
              {`cd ~/briven
source .venv/bin/activate
TS_IP=$(tailscale ip -4)
uvicorn run_ui:app --host "$TS_IP" --port 8000`}
            </code>
          </pre>

          <h3>Test Access from Mac</h3>
          <pre>
            <code>
              {`curl -s -o /dev/null -w "%{http_code}" http://100.x.x.x:8000/
# Expected: 302 (redirect to login)

open "http://100.x.x.x:8000"`}
            </code>
          </pre>

          <h3>Safe Test Prompts</h3>
          <ol>
            <li>
              <strong>Heartbeat:</strong>{" "}
              <code>Hello, what is your name and what can you do?</code>
            </li>
            <li>
              <strong>Memory check:</strong>{" "}
              <code>Remember that my favorite color is blue.</code>
            </li>
            <li>
              <strong>Tool check:</strong>{" "}
              <code>
                What time is it right now? What is today&apos;s date?
              </code>
            </li>
            <li>
              <strong>Tailscale status:</strong>{" "}
              <code>
                Run the Tailscale status check and show me which devices are
                connected.
              </code>
            </li>
          </ol>
        </section>

        <section>
          <h2>Step 6 — Rollback &amp; Emergency</h2>
          <h3>Locked Out of SSH</h3>
          <p>
            Use your VPS provider&apos;s KVM/browser console. From there run{" "}
            <code>sudo ufw disable</code> to regain access.
          </p>

          <h3>Briven Won&apos;t Start</h3>
          <pre>
            <code>
              {`journalctl -u briven --since "5 minutes ago" --no-pager
# Common fixes:
pip install -r requirements.txt   # missing dependency
sudo lsof -i :8000               # port in use`}
            </code>
          </pre>

          <h3>Full Rollback</h3>
          <pre>
            <code>
              {`sudo systemctl stop briven && sudo systemctl disable briven
cp ~/briven/.env ~/briven-deploy-backup.env
rm -rf ~/briven
curl -fsSL https://raw.githubusercontent.com/flandriendev/briven/main/install.sh | bash
cp ~/briven-deploy-backup.env ~/briven/.env`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Step 7 — Post-Setup Recommendations</h2>
          <h3>Enable Auto-Updates</h3>
          <pre>
            <code>
              {`sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades`}
            </code>
          </pre>

          <h3>Start via systemd</h3>
          <pre>
            <code>
              {`sudo systemctl start briven
sudo systemctl status briven`}
            </code>
          </pre>

          <h3>Weekly Backup</h3>
          <pre>
            <code>
              {`tar -czf ~/briven-backup-$(date +%Y%m%d).tar.gz \\
    ~/briven/.env \\
    ~/briven/memory/ \\
    ~/briven/data/ \\
    ~/briven/knowledge/ \\
    ~/briven-workspace/`}
            </code>
          </pre>
        </section>

        <section>
          <h2>Security Architecture</h2>
          <p>This guide provides a triple-layer security posture:</p>
          <ol>
            <li>
              <strong>Tailscale zero-trust</strong> — no public ports, encrypted
              mesh networking
            </li>
            <li>
              <strong>UFW firewall</strong> — defense in depth, deny-all default
            </li>
            <li>
              <strong>Fail2ban</strong> — intrusion detection and automatic
              banning
            </li>
          </ol>
          <p>Combined with Briven&apos;s built-in protections:</p>
          <ul>
            <li>
              <strong>Login guard</strong> — brute-force protection with
              exponential backoff
            </li>
            <li>
              <strong>Security headers</strong> — X-Content-Type-Options,
              X-Frame-Options, Referrer-Policy
            </li>
            <li>
              <strong>Audit logging</strong> — all security events logged
            </li>
          </ul>
        </section>

        <hr />

        <p>
          See also:{" "}
          <Link href="/docs/troubleshooting">Troubleshooting Guide</Link> |{" "}
          <Link href="/docs/mac-mini-setup">Mac Mini Setup</Link>
        </p>
      </ContentPage>
    </>
  );
}
