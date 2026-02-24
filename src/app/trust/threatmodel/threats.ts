export interface Threat {
  id: string;
  name: string;
  tactic: string;
  atlas: string;
  risk: "Critical" | "High" | "Medium" | "Low";
  description: string;
  attackVector: string;
  affected: string;
  mitigations: string;
  residualRisk: string;
  recommendations: string;
}

export const threats: Threat[] = [
  // Reconnaissance
  {
    id: "T-RECON-001",
    name: "Agent Endpoint Discovery",
    tactic: "Reconnaissance",
    atlas: "AML.T0006",
    risk: "Medium",
    description:
      "Attacker scans for exposed Briven gateway endpoints on Tailscale or public networks.",
    attackVector: "Network scanning, Shodan queries, DNS enumeration",
    affected: "Gateway, exposed API endpoints",
    mitigations:
      "Tailscale zero-trust by default, bind to loopback, no public ports",
    residualRisk: "Misconfigured gateways may be discoverable",
    recommendations:
      "Document secure deployment, add rate limiting on discovery endpoints",
  },
  {
    id: "T-RECON-002",
    name: "Channel Integration Probing",
    tactic: "Reconnaissance",
    atlas: "AML.T0006",
    risk: "Low",
    description:
      "Attacker probes messaging channels to identify AI-managed accounts.",
    attackVector: "Sending test messages, observing response patterns",
    affected: "Telegram, WhatsApp, email integrations",
    mitigations: "Pairing requirements filter unknown senders",
    residualRisk: "Limited value from discovery alone",
    recommendations: "Consider response timing randomization",
  },
  {
    id: "T-RECON-003",
    name: "Skill Capability Reconnaissance",
    tactic: "Reconnaissance",
    atlas: "AML.T0006",
    risk: "Low",
    description:
      "Attacker analyzes Skills Hub to identify high-value targets and popular skills.",
    attackVector:
      "Browsing Skills Hub, analyzing download stats, identifying skills with sensitive permissions",
    affected: "Skills Hub public listings",
    mitigations: "None — public by design",
    residualRisk: "Attackers can prioritize targets",
    recommendations:
      "Monitor for suspicious browsing patterns, rate limit API access",
  },
  // Initial Access
  {
    id: "T-ACCESS-001",
    name: "Pairing Code Interception",
    tactic: "Initial Access",
    atlas: "AML.T0040",
    risk: "Medium",
    description:
      "Attacker intercepts pairing code during the grace period.",
    attackVector: "Shoulder surfing, network sniffing, social engineering",
    affected: "Device pairing system",
    mitigations: "Short expiry window, codes sent via existing channel",
    residualRisk: "Grace period exploitable",
    recommendations: "Reduce grace period, add confirmation step",
  },
  {
    id: "T-ACCESS-002",
    name: "AllowFrom Spoofing",
    tactic: "Initial Access",
    atlas: "AML.T0040",
    risk: "Medium",
    description:
      "Attacker spoofs allowed sender identity in messaging channel.",
    attackVector:
      "Phone number spoofing, username impersonation (channel-dependent)",
    affected: "AllowFrom validation per channel",
    mitigations: "Channel-specific identity verification",
    residualRisk: "Some channels vulnerable to spoofing",
    recommendations:
      "Document channel-specific risks, add cryptographic verification where possible",
  },
  {
    id: "T-ACCESS-003",
    name: "Token Theft",
    tactic: "Initial Access",
    atlas: "AML.T0040",
    risk: "High",
    description:
      "Attacker steals authentication tokens from config files.",
    attackVector: "Malware, unauthorized device access, config backup exposure",
    affected: "Briven config storage, credential files",
    mitigations: "File permissions, Tailscale device auth",
    residualRisk: "Tokens stored locally",
    recommendations:
      "Implement token encryption at rest, add token rotation",
  },
  {
    id: "T-ACCESS-004",
    name: "Malicious Skill as Entry Point",
    tactic: "Initial Access",
    atlas: "AML.T0010.001",
    risk: "Critical",
    description:
      "User installs malicious skill from Skills Hub, granting attacker initial access.",
    attackVector:
      "Social engineering, typosquatting, fake popular skills, SEO manipulation",
    affected: "Skills Hub discovery, skill installation flow",
    mitigations: "GitHub account verification, download stats visibility",
    residualRisk: "Users may install without verification",
    recommendations:
      "Prominent security warnings, verified publisher badges, install confirmations",
  },
  {
    id: "T-ACCESS-005",
    name: "Compromised Skill Update",
    tactic: "Initial Access",
    atlas: "AML.T0010.001",
    risk: "High",
    description:
      "Attacker compromises legitimate skill and pushes malicious update to existing users.",
    attackVector:
      "Account takeover of skill publisher, social engineering, credential theft",
    affected: "Skills Hub update mechanism, existing skill installations",
    mitigations: "Version fingerprinting",
    residualRisk: "Trusted skills become attack vectors",
    recommendations:
      "Update signing, publisher 2FA requirement, update diff review",
  },
  {
    id: "T-ACCESS-006",
    name: "Prompt Injection via Channel",
    tactic: "Initial Access",
    atlas: "AML.T0051.000",
    risk: "High",
    description:
      "Attacker gains initial access by sending malicious prompts through messaging channel.",
    attackVector:
      "Direct messages to agent-managed channels (Telegram, WhatsApp, email)",
    affected: "All channel integrations",
    mitigations: "AllowFrom lists, pairing requirements",
    residualRisk:
      "Misconfigured allowlists, social engineering to get added",
    recommendations:
      "Default-deny channel access, audit logging of new senders",
  },
  // Execution
  {
    id: "T-EXEC-001",
    name: "Direct Prompt Injection",
    tactic: "Execution",
    atlas: "AML.T0051.000",
    risk: "Critical",
    description:
      "Attacker sends crafted prompts to manipulate agent behavior.",
    attackVector: "Channel messages containing adversarial instructions",
    affected: "Agent LLM, all input surfaces",
    mitigations: "Pattern detection, external content wrapping",
    residualRisk:
      "Detection only, no blocking; sophisticated attacks bypass",
    recommendations:
      "Implement multi-layer defense, output validation, user confirmation for sensitive actions",
  },
  {
    id: "T-EXEC-002",
    name: "Indirect Prompt Injection",
    tactic: "Execution",
    atlas: "AML.T0051.001",
    risk: "High",
    description:
      "Attacker embeds malicious instructions in fetched content.",
    attackVector: "Malicious URLs, poisoned emails, compromised webhooks",
    affected: "Web fetch, email ingestion, external data sources",
    mitigations: "Content wrapping with XML tags and security notice",
    residualRisk: "LLM may ignore wrapper instructions",
    recommendations:
      "Implement content sanitization, separate execution contexts",
  },
  {
    id: "T-EXEC-003",
    name: "Tool Argument Injection",
    tactic: "Execution",
    atlas: "AML.T0051.000",
    risk: "High",
    description:
      "Attacker manipulates tool arguments through prompt injection.",
    attackVector: "Crafted prompts that influence tool parameter values",
    affected: "All tool invocations",
    mitigations: "Exec approvals for dangerous commands",
    residualRisk: "Relies on user judgment",
    recommendations:
      "Implement argument validation, parameterized tool calls",
  },
  {
    id: "T-EXEC-004",
    name: "Exec Approval Bypass",
    tactic: "Execution",
    atlas: "AML.T0043",
    risk: "High",
    description:
      "Attacker crafts commands that bypass approval allowlist.",
    attackVector:
      "Command obfuscation, alias exploitation, path manipulation",
    affected: "Exec approvals, command allowlist",
    mitigations: "Allowlist + ask mode",
    residualRisk: "No command sanitization",
    recommendations: "Implement command normalization, expand blocklist",
  },
  {
    id: "T-EXEC-005",
    name: "Malicious Skill Code Execution",
    tactic: "Execution",
    atlas: "AML.T0010.001",
    risk: "Critical",
    description:
      "Malicious skill executes arbitrary code when loaded by agent.",
    attackVector:
      "Skill contains obfuscated malicious code that runs on load or invocation",
    affected: "Skill runtime, agent process, host system",
    mitigations: "Pattern-based moderation",
    residualRisk: "Skills execute with agent privileges, no sandbox yet",
    recommendations:
      "Skill sandboxing, capability-based permissions, code scanning",
  },
  {
    id: "T-EXEC-006",
    name: "MCP Server Command Injection",
    tactic: "Execution",
    atlas: "AML.T0051.000",
    risk: "High",
    description:
      "Attacker exploits MCP server to execute commands via tool calls.",
    attackVector:
      "Prompt injection causes agent to invoke MCP tools with malicious arguments",
    affected: "MCP server integrations, external tool providers",
    mitigations: "Tool policy enforcement",
    residualRisk: "MCP servers may have broad permissions",
    recommendations:
      "MCP server allowlisting, argument validation, least-privilege MCP configs",
  },
  // Persistence
  {
    id: "T-PERSIST-001",
    name: "Skill-Based Persistence",
    tactic: "Persistence",
    atlas: "AML.T0010.001",
    risk: "Critical",
    description:
      "Malicious skill remains installed, re-executing across agent restarts.",
    attackVector:
      "Skill persists in user config, loads automatically on agent start",
    affected: "Skill installation, agent startup",
    mitigations: "None — skills persist by design",
    residualRisk: "Malicious skills survive reboots, updates",
    recommendations:
      "Skill integrity verification on load, periodic re-scanning, removal tools",
  },
  {
    id: "T-PERSIST-002",
    name: "Poisoned Skill Update Persistence",
    tactic: "Persistence",
    atlas: "AML.T0010.001",
    risk: "High",
    description:
      "Malicious update to legitimate skill maintains persistent access.",
    attackVector:
      "Auto-update pulls compromised version, persists across sessions",
    affected: "Skills Hub versioning, auto-update flows",
    mitigations: "Version fingerprinting",
    residualRisk: "Trusted skill becomes persistent backdoor",
    recommendations:
      "Update signing, version pinning, update notifications",
  },
  {
    id: "T-PERSIST-003",
    name: "Agent Configuration Tampering",
    tactic: "Persistence",
    atlas: "AML.T0010.002",
    risk: "Medium",
    description:
      "Attacker modifies agent configuration to persist access.",
    attackVector:
      "Config file modification, settings injection via compromised skill",
    affected: "Agent config, tool policies, allowlists",
    mitigations: "File permissions",
    residualRisk: "Requires local access or prior compromise",
    recommendations:
      "Config integrity verification, audit logging for config changes",
  },
  {
    id: "T-PERSIST-004",
    name: "Stolen Token Persistence",
    tactic: "Persistence",
    atlas: "AML.T0040",
    risk: "High",
    description:
      "Attacker maintains access using stolen authentication tokens.",
    attackVector:
      "Tokens stolen via T-ACCESS-003 used for ongoing access",
    affected: "Gateway authentication, API access",
    mitigations: "Tailscale device-level auth",
    residualRisk: "Attacker retains access until token manually revoked",
    recommendations:
      "Token expiration, rotation policy, anomaly detection",
  },
  {
    id: "T-PERSIST-005",
    name: "Prompt Injection Memory Poisoning",
    tactic: "Persistence",
    atlas: "AML.T0051.000",
    risk: "Medium",
    description:
      "Attacker injects instructions that persist in agent memory/context.",
    attackVector:
      "Inject prompts that modify agent behavior for subsequent interactions",
    affected: "Session context, agent memory systems",
    mitigations: "Session isolation per sender",
    residualRisk: "Within-session persistence possible",
    recommendations:
      "Context sanitization, memory boundaries, session timeouts",
  },
  // Defense Evasion
  {
    id: "T-EVADE-001",
    name: "Moderation Pattern Bypass",
    tactic: "Defense Evasion",
    atlas: "AML.T0043",
    risk: "High",
    description:
      "Attacker crafts skill content to evade moderation patterns.",
    attackVector:
      "Unicode homoglyphs, encoding tricks, dynamic loading, code obfuscation",
    affected: "Skills Hub moderation",
    mitigations: "Pattern-based flag rules",
    residualRisk: "Simple regex easily bypassed",
    recommendations:
      "Add behavioral analysis, AST-based detection",
  },
  {
    id: "T-EVADE-002",
    name: "Content Wrapper Escape",
    tactic: "Defense Evasion",
    atlas: "AML.T0043",
    risk: "Medium",
    description:
      "Attacker crafts content that escapes XML wrapper context.",
    attackVector:
      "Tag manipulation, context confusion, instruction override",
    affected: "External content wrapping",
    mitigations: "XML tags + security notice",
    residualRisk: "Novel escapes discovered regularly",
    recommendations: "Multiple wrapper layers, output-side validation",
  },
  {
    id: "T-EVADE-003",
    name: "Approval Prompt Manipulation",
    tactic: "Defense Evasion",
    atlas: "AML.T0043",
    risk: "Medium",
    description:
      "Attacker crafts requests that appear benign in approval prompts.",
    attackVector:
      "Misleading command descriptions, hiding malicious flags in long commands",
    affected: "Exec approval UI, user decision making",
    mitigations: "Approval prompt shows full command",
    residualRisk: "Users may approve without careful review",
    recommendations:
      "Highlight dangerous flags, command summarization, risk scoring",
  },
  {
    id: "T-EVADE-004",
    name: "Staged Payload Delivery",
    tactic: "Defense Evasion",
    atlas: "AML.T0043",
    risk: "High",
    description:
      "Skill downloads malicious payload after passing initial scan.",
    attackVector:
      "Clean skill passes moderation, then fetches malicious code at runtime",
    affected: "Skills Hub scanning, skill runtime",
    mitigations: "None — runtime fetches not monitored",
    residualRisk: "Scans only check initial code",
    recommendations:
      "Runtime network monitoring, outbound fetch restrictions for skills",
  },
  // Discovery
  {
    id: "T-DISC-001",
    name: "Tool Enumeration",
    tactic: "Discovery",
    atlas: "AML.T0040",
    risk: "Low",
    description:
      "Attacker enumerates available tools through prompting.",
    attackVector: "'What tools do you have?' style queries",
    affected: "Agent tool registry",
    mitigations: "None specific",
    residualRisk: "Tools generally documented",
    recommendations: "Consider tool visibility controls",
  },
  {
    id: "T-DISC-002",
    name: "Session Data Extraction",
    tactic: "Discovery",
    atlas: "AML.T0040",
    risk: "Medium",
    description:
      "Attacker extracts sensitive data from session context.",
    attackVector: "'What did we discuss?' queries, context probing",
    affected: "Session transcripts, context window",
    mitigations: "Session isolation per sender",
    residualRisk: "Within-session data accessible",
    recommendations:
      "Implement sensitive data redaction in context",
  },
  {
    id: "T-DISC-003",
    name: "System Prompt Extraction",
    tactic: "Discovery",
    atlas: "AML.T0040",
    risk: "Medium",
    description:
      "Attacker extracts system prompt to understand agent capabilities and restrictions.",
    attackVector:
      "Prompt injection asking agent to reveal instructions",
    affected: "Agent system prompt, /atlas policies",
    mitigations: "LLM instruction following, /atlas discipline",
    residualRisk:
      "System prompts often extractable with creative prompts",
    recommendations: "System prompt hardening, extraction detection",
  },
  {
    id: "T-DISC-004",
    name: "Environment Enumeration",
    tactic: "Discovery",
    atlas: "AML.T0040",
    risk: "Medium",
    description:
      "Attacker enumerates environment variables and system configuration.",
    attackVector:
      "Prompt injection causing agent to run env, printenv, or read config files",
    affected: "Host environment, credentials in env vars",
    mitigations: "Exec approvals",
    residualRisk: "Approved commands may leak sensitive info",
    recommendations: "Sensitive env var filtering, output redaction",
  },
  // Exfiltration
  {
    id: "T-EXFIL-001",
    name: "Data Theft via Web Fetch",
    tactic: "Exfiltration",
    atlas: "AML.T0009",
    risk: "High",
    description:
      "Attacker exfiltrates data by instructing agent to send to external URL.",
    attackVector:
      "Prompt injection causing agent to POST data to attacker server",
    affected: "Web fetch tool",
    mitigations: "SSRF blocking for internal networks",
    residualRisk: "External URLs permitted",
    recommendations:
      "Implement URL allowlisting, data classification awareness",
  },
  {
    id: "T-EXFIL-002",
    name: "Unauthorized Message Sending",
    tactic: "Exfiltration",
    atlas: "AML.T0009",
    risk: "Medium",
    description:
      "Attacker causes agent to send messages containing sensitive data.",
    attackVector: "Prompt injection causing agent to message attacker",
    affected: "Message tool, channel integrations",
    mitigations: "Outbound messaging gating",
    residualRisk: "Gating may be bypassed",
    recommendations:
      "Require explicit confirmation for new recipients",
  },
  {
    id: "T-EXFIL-003",
    name: "Credential Harvesting via Skill",
    tactic: "Exfiltration",
    atlas: "AML.T0009",
    risk: "Critical",
    description:
      "Malicious skill harvests credentials from agent context and environment.",
    attackVector:
      "Skill code reads environment variables, config files, API keys",
    affected: "Skill execution environment, Briven config directory",
    mitigations: "Tailscale device isolation",
    residualRisk: "Skills run with agent privileges",
    recommendations:
      "Skill sandboxing, credential isolation, capability-based access",
  },
  {
    id: "T-EXFIL-004",
    name: "Transcript Exfiltration",
    tactic: "Exfiltration",
    atlas: "AML.T0009",
    risk: "High",
    description:
      "Attacker exfiltrates conversation transcripts containing sensitive data.",
    attackVector:
      "Skill or prompt injection reads and sends transcript files",
    affected: "Session transcripts, Briven sessions directory",
    mitigations: "File permissions",
    residualRisk: "Skills can read transcript files",
    recommendations:
      "Transcript encryption, skill filesystem isolation",
  },
  // Impact
  {
    id: "T-IMPACT-001",
    name: "Unauthorized Command Execution",
    tactic: "Impact",
    atlas: "AML.T0031",
    risk: "Critical",
    description:
      "Attacker executes arbitrary commands on user system.",
    attackVector:
      "Prompt injection combined with exec approval bypass",
    affected: "Shell execution, command execution, host system",
    mitigations: "Exec approvals, deny-by-default execution",
    residualRisk: "Host execution without sandbox",
    recommendations: "Default to sandbox, improve approval UX",
  },
  {
    id: "T-IMPACT-002",
    name: "Resource Exhaustion (DoS)",
    tactic: "Impact",
    atlas: "AML.T0031",
    risk: "High",
    description:
      "Attacker exhausts API credits or compute resources.",
    attackVector:
      "Automated message flooding, expensive tool calls, infinite loops",
    affected:
      "Gateway, agent sessions, API provider, user billing",
    mitigations: "Tailscale access control",
    residualRisk: "No per-sender rate limiting",
    recommendations:
      "Implement per-sender rate limits, cost budgets, circuit breakers",
  },
  {
    id: "T-IMPACT-003",
    name: "Reputation Damage",
    tactic: "Impact",
    atlas: "AML.T0031",
    risk: "Medium",
    description:
      "Attacker causes agent to send harmful/offensive content.",
    attackVector:
      "Prompt injection causing inappropriate responses to contacts",
    affected: "Output generation, channel messaging, user reputation",
    mitigations: "LLM provider content policies",
    residualRisk: "Provider filters imperfect",
    recommendations:
      "Output filtering layer, user controls, message review queue",
  },
  {
    id: "T-IMPACT-004",
    name: "Data Destruction",
    tactic: "Impact",
    atlas: "AML.T0031",
    risk: "High",
    description:
      "Attacker causes agent to delete or corrupt user data.",
    attackVector:
      "Prompt injection causing rm, format, or destructive database operations",
    affected: "User files, databases, configurations",
    mitigations: "Exec approvals for destructive commands",
    residualRisk:
      "Approved destructive commands may be disguised",
    recommendations:
      "Destructive command confirmation, backup recommendations, undo capability",
  },
  {
    id: "T-IMPACT-005",
    name: "Financial Fraud via Agent",
    tactic: "Impact",
    atlas: "AML.T0031",
    risk: "High",
    description:
      "Attacker uses agent to perform unauthorized financial transactions.",
    attackVector:
      "Prompt injection causes agent to interact with financial APIs or services",
    affected: "Financial integrations, payment tools",
    mitigations: "Tool-specific policies",
    residualRisk: "Agents may have access to financial tools",
    recommendations:
      "Financial operation confirmation, transaction limits, separate approval flow",
  },
];

export const tactics = [
  { name: "Reconnaissance", atlas: "AML.TA0002" },
  { name: "Initial Access", atlas: "AML.TA0004" },
  { name: "Execution", atlas: "AML.TA0005" },
  { name: "Persistence", atlas: "AML.TA0006" },
  { name: "Defense Evasion", atlas: "AML.TA0007" },
  { name: "Discovery", atlas: "AML.TA0008" },
  { name: "Exfiltration", atlas: "AML.TA0010" },
  { name: "Impact", atlas: "AML.TA0011" },
];

export const attackChains = [
  {
    title: "Malicious Skill Full Kill Chain",
    steps: ["T-RECON-003", "T-EVADE-001", "T-ACCESS-004", "T-EXEC-005", "T-PERSIST-001", "T-EXFIL-003"],
    description:
      "Recon Skills Hub \u2192 Craft evasive skill \u2192 User installs \u2192 Code executes \u2192 Persists \u2192 Harvests credentials",
  },
  {
    title: "Skill Supply Chain Attack",
    steps: ["T-ACCESS-005", "T-EVADE-004", "T-EXEC-005", "T-PERSIST-002", "T-EXFIL-004"],
    description:
      "Compromise publisher \u2192 Push staged payload \u2192 Execute on update \u2192 Maintain persistence \u2192 Exfil transcripts",
  },
  {
    title: "Prompt Injection to RCE",
    steps: ["T-ACCESS-006", "T-EXEC-001", "T-EVADE-003", "T-EXEC-004", "T-IMPACT-001"],
    description:
      "Access via channel \u2192 Inject prompt \u2192 Manipulate approval \u2192 Bypass checks \u2192 Execute commands",
  },
  {
    title: "Indirect Injection Data Theft",
    steps: ["T-EXEC-002", "T-DISC-004", "T-EXFIL-001"],
    description:
      "Poison fetched content \u2192 Enumerate environment \u2192 Exfiltrate via web fetch",
  },
  {
    title: "Token Theft Persistent Access",
    steps: ["T-ACCESS-003", "T-PERSIST-004", "T-DISC-002", "T-EXFIL-002"],
    description:
      "Steal tokens \u2192 Maintain access \u2192 Extract session data \u2192 Exfil via messages",
  },
  {
    title: "Financial Fraud Chain",
    steps: ["T-ACCESS-006", "T-EXEC-001", "T-DISC-001", "T-IMPACT-005"],
    description:
      "Gain channel access \u2192 Inject prompts \u2192 Enumerate financial tools \u2192 Execute fraud",
  },
];

export const trustBoundaries = [
  {
    num: 1,
    title: "Supply Chain",
    subtitle: "Skills Hub",
    controls: [
      "Skill publishing (semver, manifest required)",
      "Pattern-based moderation flags",
      "Code scanning & analysis",
      "GitHub account verification",
    ],
  },
  {
    num: 2,
    title: "Channel Access Control",
    subtitle: "Gateway",
    controls: [
      "Device pairing (short grace period)",
      "AllowFrom / AllowList validation",
      "Token / Tailscale auth",
    ],
  },
  {
    num: 3,
    title: "Session Isolation",
    subtitle: "Agent Sessions",
    controls: [
      "Session key = agent:channel:peer",
      "Tool policies per agent",
      "Transcript logging",
    ],
  },
  {
    num: 4,
    title: "Tool Execution",
    subtitle: "Execution Sandbox",
    controls: [
      "Deny-by-default command execution",
      "Exec approvals for dangerous operations",
      "SSRF protection (DNS pinning + IP blocking)",
    ],
  },
  {
    num: 5,
    title: "External Content",
    subtitle: "Fetched URLs / Emails / Webhooks",
    controls: [
      "External content wrapping (XML tags)",
      "Security notice injection",
    ],
  },
];
