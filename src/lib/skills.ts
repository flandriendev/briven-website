export type SkillStatus = "available" | "coming-soon";

export interface Skill {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  status: SkillStatus;
  icon: string;
  toolPath: string;
  installCommand: string;
  features: string[];
  usage: string;
}

export const skills: Skill[] = [
  // ── Available skills ──
  {
    slug: "web-browsing",
    name: "Web Browsing",
    description:
      "Browse, scrape, and extract data from any website using headless browsers.",
    longDescription:
      "Full web browsing and scraping capabilities powered by Playwright. Navigate pages, fill forms, extract structured data, take screenshots, and interact with dynamic JavaScript-rendered content — all from within your agent.",
    category: "Data",
    status: "available",
    icon: "Globe",
    toolPath: "lib/browser/",
    installCommand: "briven skill add web-browsing",
    features: [
      "Headless browser automation via Playwright",
      "CSS & XPath selectors for data extraction",
      "Screenshot capture and PDF generation",
      "JavaScript execution on pages",
      "Cookie and session management",
    ],
    usage: `from briven.skills import web_browsing

result = await web_browsing.scrape("https://example.com")
print(result.text)`,
  },
  {
    slug: "file-management",
    name: "File Management",
    description:
      "Read, write, move, and manage files and directories on your system.",
    longDescription:
      "Complete filesystem operations for your agents. Read and write files in any format, traverse directory trees, copy/move/delete, and monitor for changes. Sandboxed to your configured paths for security.",
    category: "System",
    status: "available",
    icon: "FolderOpen",
    toolPath: "tools/file_manager.py",
    installCommand: "briven skill add file-management",
    features: [
      "Read/write files in any text or binary format",
      "Directory listing and recursive traversal",
      "Copy, move, rename, and delete operations",
      "File watching and change detection",
      "Path sandboxing for security",
    ],
    usage: `from briven.skills import file_management

content = file_management.read("./data/config.json")
file_management.write("./output/result.txt", content)`,
  },
  {
    slug: "code-execution",
    name: "Code Execution",
    description:
      "Execute Python code in a sandboxed interpreter with full output capture.",
    longDescription:
      "Run arbitrary Python code safely within a sandboxed environment. Perfect for data analysis, computation, script execution, and dynamic code generation. Captures stdout, stderr, and return values with timeout protection.",
    category: "Developer",
    status: "available",
    icon: "Terminal",
    toolPath: "tools/code_interpreter.py",
    installCommand: "briven skill add code-execution",
    features: [
      "Sandboxed Python execution environment",
      "Full stdout/stderr capture",
      "Timeout and memory limits",
      "Package import support",
      "Return value serialization",
    ],
    usage: `from briven.skills import code_execution

result = await code_execution.run("""
import math
print(math.factorial(20))
""")`,
  },
  {
    slug: "telegram",
    name: "Telegram Messaging",
    description:
      "Send and receive messages, media, and commands via Telegram bots.",
    longDescription:
      "Full Telegram Bot API integration powered by aiogram. Send text, images, documents, and rich media. Receive messages and commands from users. Supports inline keyboards, callbacks, and group chat management.",
    category: "Messaging",
    status: "available",
    icon: "Send",
    toolPath: "tools/telegram.py",
    installCommand: "briven skill add telegram",
    features: [
      "Send/receive text, images, and documents",
      "Inline keyboard and callback handling",
      "Group and channel management",
      "Command registration and routing",
      "Webhook and polling modes",
    ],
    usage: `from briven.skills import telegram

await telegram.send_message(
    chat_id=CHAT_ID,
    text="Hello from Briven!"
)`,
  },
  {
    slug: "whatsapp",
    name: "WhatsApp Messaging",
    description:
      "Send and receive WhatsApp messages via the Business API.",
    longDescription:
      "Connect your agents to WhatsApp using the official Business API. Send text, templates, media messages, and receive incoming messages with webhook support. Perfect for customer-facing agent workflows.",
    category: "Messaging",
    status: "available",
    icon: "MessageCircle",
    toolPath: "tools/whatsapp.py",
    installCommand: "briven skill add whatsapp",
    features: [
      "WhatsApp Business API integration",
      "Template and freeform messaging",
      "Media sharing (images, documents, audio)",
      "Webhook-based message receiving",
      "Contact and conversation management",
    ],
    usage: `from briven.skills import whatsapp

await whatsapp.send_message(
    to="+31612345678",
    text="Your report is ready."
)`,
  },
  {
    slug: "email",
    name: "Email Send/Receive",
    description:
      "Send emails via SMTP and read inbox via IMAP with full attachment support.",
    longDescription:
      "Complete email integration with SMTP sending and IMAP receiving. Compose HTML or plain-text emails, add attachments, read and filter inbox messages, and manage folders. Supports OAuth and app passwords.",
    category: "Messaging",
    status: "available",
    icon: "Mail",
    toolPath: "tools/email.py",
    installCommand: "briven skill add email",
    features: [
      "SMTP sending with HTML support",
      "IMAP inbox reading and filtering",
      "Attachment handling (send and receive)",
      "Multiple account support",
      "OAuth2 and app password authentication",
    ],
    usage: `from briven.skills import email

await email.send(
    to="user@example.com",
    subject="Daily Report",
    body=report_html,
    html=True
)`,
  },
  {
    slug: "claude-code",
    name: "Claude Code Generation",
    description:
      "Generate, review, and refactor code using Anthropic's Claude API.",
    longDescription:
      "Leverage Claude's advanced code generation capabilities directly within your agent. Generate new code, refactor existing files, review pull requests, write tests, and explain complex codebases — all powered by the Anthropic API.",
    category: "Developer",
    status: "available",
    icon: "Sparkles",
    toolPath: "tools/claude_code.py",
    installCommand: "briven skill add claude-code",
    features: [
      "Code generation from natural language",
      "Refactoring and code improvement",
      "Code review and explanation",
      "Test generation",
      "Multi-file context awareness",
    ],
    usage: `from briven.skills import claude_code

generated = await claude_code.generate(
    prompt="Create a FastAPI endpoint for user auth",
    language="python"
)`,
  },
  {
    slug: "tailscale",
    name: "Tailscale Networking",
    description:
      "Manage your Tailscale tailnet — status, peers, ACLs, and secure connections.",
    longDescription:
      "Core Briven skill for zero-trust networking. Check tailnet status, list and ping peers, manage ACLs, and ensure secure connectivity across all your agent nodes. The foundation of Briven's security model.",
    category: "Security",
    status: "available",
    icon: "Shield",
    toolPath: "tools/tailscale.py",
    installCommand: "briven skill add tailscale",
    features: [
      "Tailnet status monitoring",
      "Peer discovery and health checks",
      "ACL policy management",
      "Secure node-to-node communication",
      "DNS and MagicDNS integration",
    ],
    usage: `from briven.skills import tailscale

status = await tailscale.status()
peers = await tailscale.list_peers()
print(f"Connected to {len(peers)} nodes")`,
  },
  {
    slug: "memory",
    name: "Memory & Persistence",
    description:
      "Persistent agent memory with SQLite storage, logs, and context recall.",
    longDescription:
      "Give your agents long-term memory. Store and retrieve facts, conversation history, task logs, and structured data using SQLite. Agents can remember past interactions, user preferences, and learned knowledge across sessions.",
    category: "Core",
    status: "available",
    icon: "Brain",
    toolPath: "tools/memory/",
    installCommand: "briven skill add memory",
    features: [
      "SQLite-backed persistent storage",
      "Conversation history tracking",
      "Structured fact storage and retrieval",
      "Session-aware context management",
      "Log aggregation and search",
    ],
    usage: `from briven.skills import memory

await memory.store("user_preference", {"theme": "dark"})
pref = await memory.recall("user_preference")`,
  },

  // ── Previously coming soon — now available ──
  {
    slug: "slack",
    name: "Slack Integration",
    description:
      "Send messages, manage channels, and respond to events in Slack workspaces.",
    longDescription:
      "Full Slack workspace integration. Send messages to channels, respond to mentions, manage threads, and react to events using the Slack Web API. Perfect for team-facing agent workflows and internal automation.",
    category: "Messaging",
    status: "available",
    icon: "Hash",
    toolPath: "tools/slack.py",
    installCommand: "briven skill add slack",
    features: [
      "Channel messaging and threading",
      "Event-driven responses (mentions, reactions)",
      "File sharing and rich attachments",
      "Slash command handling",
      "Workspace and channel management",
    ],
    usage: `from briven.skills import slack

await slack.send_message(
    channel="#general",
    text="Deployment complete!"
)`,
  },
  {
    slug: "discord",
    name: "Discord Integration",
    description:
      "Bot commands, messaging, and event handling for Discord servers.",
    longDescription:
      "Run a full Discord bot from your Briven agent. Respond to commands, send rich embeds, manage roles, and handle server events. Supports slash commands, buttons, modals, and all modern Discord interaction patterns.",
    category: "Messaging",
    status: "available",
    icon: "MessageSquare",
    toolPath: "tools/discord.py",
    installCommand: "briven skill add discord",
    features: [
      "Slash commands and interactions",
      "Rich embed and button support",
      "Voice channel awareness",
      "Role and permission management",
      "Event-driven architecture",
    ],
    usage: `from briven.skills import discord

await discord.send_embed(
    channel_id=CHANNEL,
    title="Status Update",
    description="All systems operational."
)`,
  },
  {
    slug: "voice",
    name: "Voice Interface",
    description:
      "Speech-to-text and text-to-speech for voice-controlled agents.",
    longDescription:
      "Add voice capabilities to your agents with speech recognition and synthesis. Convert spoken commands to text, generate natural voice responses, and build fully voice-controlled agent interactions.",
    category: "Interface",
    status: "available",
    icon: "Mic",
    toolPath: "tools/voice.py",
    installCommand: "briven skill add voice",
    features: [
      "Speech-to-text via SpeechRecognition",
      "Text-to-speech generation",
      "Multiple language support",
      "Wake word detection",
      "Audio streaming support",
    ],
    usage: `from briven.skills import voice

text = await voice.listen()
await voice.speak("I understood: " + text)`,
  },
  {
    slug: "advanced-memory",
    name: "Advanced Memory",
    description:
      "Hybrid search with embeddings, BM25, and daily knowledge logs.",
    longDescription:
      "Next-generation agent memory combining vector embeddings with BM25 full-text search. Daily knowledge logs, semantic recall, and intelligent context windowing give your agents human-like memory capabilities.",
    category: "Core",
    status: "available",
    icon: "Database",
    toolPath: "tools/advanced_memory/",
    installCommand: "briven skill add advanced-memory",
    features: [
      "Vector embedding storage and search",
      "BM25 full-text search",
      "Hybrid ranking (vector + keyword)",
      "Daily knowledge log aggregation",
      "Semantic context windowing",
    ],
    usage: `from briven.skills import advanced_memory

await advanced_memory.remember("The user prefers dark mode")
results = await advanced_memory.search("user preferences")`,
  },
  {
    slug: "scheduler",
    name: "Tasks & Scheduling",
    description:
      "Schedule recurring jobs, cron-like tasks, and delayed executions.",
    longDescription:
      "Give your agents the ability to schedule future work. Create cron-like recurring jobs, one-time delayed tasks, and complex scheduling patterns. Integrates with the agent loop for seamless async execution.",
    category: "System",
    status: "available",
    icon: "Clock",
    toolPath: "tools/scheduler.py",
    installCommand: "briven skill add scheduler",
    features: [
      "Cron expression scheduling",
      "One-time delayed execution",
      "Recurring job management",
      "Timezone-aware scheduling",
      "Job persistence across restarts",
    ],
    usage: `from briven.skills import scheduler

await scheduler.every("1h", task=check_inbox)
await scheduler.at("2025-01-01 00:00", task=send_report)`,
  },
  {
    slug: "multi-agent",
    name: "Multi-Agent Collaboration",
    description:
      "Spawn and orchestrate 2-8 sub-agents for parallel task execution.",
    longDescription:
      "Enable multi-agent workflows where a lead agent can spawn, coordinate, and collect results from multiple sub-agents running in parallel. Perfect for divide-and-conquer tasks, research, and complex multi-step workflows.",
    category: "Core",
    status: "available",
    icon: "Users",
    toolPath: "tools/multi_agent.py",
    installCommand: "briven skill add multi-agent",
    features: [
      "Spawn 2-8 async sub-agents",
      "Task delegation and result collection",
      "Inter-agent message passing",
      "Parallel and sequential execution modes",
      "Agent lifecycle management",
    ],
    usage: `from briven.skills import multi_agent

results = await multi_agent.delegate([
    {"task": "Research competitors", "agent": "researcher"},
    {"task": "Draft report", "agent": "writer"},
])`,
  },
  {
    slug: "skill-scanner",
    name: "Skill Security Scanner",
    description:
      "Scan skills for malicious code using VirusTotal before installation.",
    longDescription:
      "Protect your agent infrastructure by scanning skills and plugins before installation. Integrates with VirusTotal to detect malicious payloads, suspicious patterns, and known threats. A critical safety layer for production deployments.",
    category: "Security",
    status: "available",
    icon: "ShieldCheck",
    toolPath: "tools/skill_scanner.py",
    installCommand: "briven skill add skill-scanner",
    features: [
      "VirusTotal integration for file scanning",
      "Static code analysis for suspicious patterns",
      "Dependency vulnerability checking",
      "Pre-install safety verification",
      "Scan history and audit trail",
    ],
    usage: `from briven.skills import skill_scanner

report = await skill_scanner.scan("./skills/new_plugin/")
if report.safe:
    await skill_scanner.approve(report.id)`,
  },

  // ── Coming soon – Social Skill Tools ──
  {
    slug: "facebook",
    name: "Facebook",
    description:
      "Post updates, manage pages, and fetch comments via Facebook Graph API.",
    longDescription:
      "Full Facebook integration powered by the Graph API. Post status updates, manage business pages, fetch and reply to comments, upload media, and monitor page insights — all from within your Briven agent.",
    category: "Social",
    status: "coming-soon",
    icon: "Megaphone",
    toolPath: "tools/facebook.py",
    installCommand: "briven skill add facebook",
    features: [
      "Post text, images, and video updates",
      "Page and business account management",
      "Comment fetching and reply automation",
      "Page insights and analytics",
      "Webhook-based event notifications",
    ],
    usage: `from briven.skills import facebook

await facebook.post(
    page_id=PAGE_ID,
    message="New release is live!"
)`,
  },
  {
    slug: "x-twitter",
    name: "X.com (Twitter)",
    description:
      "Tweet, reply, and search posts using the X API v2.",
    longDescription:
      "Connect your agents to X.com (formerly Twitter) via the X API v2. Post tweets, reply to conversations, search trending topics, manage followers, and monitor mentions in real time.",
    category: "Social",
    status: "coming-soon",
    icon: "AtSign",
    toolPath: "tools/x_twitter.py",
    installCommand: "briven skill add x-twitter",
    features: [
      "Post tweets and threads",
      "Reply and quote tweet automation",
      "Search posts and trending topics",
      "Mention and follower monitoring",
      "Media upload support",
    ],
    usage: `from briven.skills import x_twitter

await x_twitter.tweet("Briven agents are live!")
mentions = await x_twitter.get_mentions()`,
  },
  {
    slug: "instagram",
    name: "Instagram",
    description:
      "Post photos and stories, and get comments via Instagram Graph API.",
    longDescription:
      "Integrate your agents with Instagram using the Graph API. Publish photos and stories, retrieve and respond to comments, track engagement metrics, and automate your social media presence.",
    category: "Social",
    status: "coming-soon",
    icon: "Camera",
    toolPath: "tools/instagram.py",
    installCommand: "briven skill add instagram",
    features: [
      "Photo and carousel publishing",
      "Story creation and management",
      "Comment retrieval and replies",
      "Engagement metrics and insights",
      "Hashtag and mention tracking",
    ],
    usage: `from briven.skills import instagram

await instagram.post_photo(
    image_url="https://example.com/photo.jpg",
    caption="Powered by Briven"
)`,
  },
  {
    slug: "linkedin",
    name: "LinkedIn",
    description:
      "Post updates, share articles, and manage connections via LinkedIn API v2.",
    longDescription:
      "Professional networking integration via the LinkedIn API v2. Share updates and articles, manage your professional network, track post engagement, and automate LinkedIn presence for your agents.",
    category: "Social",
    status: "coming-soon",
    icon: "Briefcase",
    toolPath: "tools/linkedin.py",
    installCommand: "briven skill add linkedin",
    features: [
      "Post text and article updates",
      "Share rich media content",
      "Connection management",
      "Engagement analytics",
      "Company page management",
    ],
    usage: `from briven.skills import linkedin

await linkedin.share(
    text="Excited to announce our new AI agent platform!",
    visibility="PUBLIC"
)`,
  },
  {
    slug: "reddit",
    name: "Reddit",
    description:
      "Post and comment in subreddits, and fetch threads via the Reddit API.",
    longDescription:
      "Full Reddit API integration for your Briven agents. Submit posts, comment on threads, browse and search subreddits, monitor mentions, and track karma — all automated through your agent workflows.",
    category: "Social",
    status: "coming-soon",
    icon: "MessagesSquare",
    toolPath: "tools/reddit.py",
    installCommand: "briven skill add reddit",
    features: [
      "Submit posts to subreddits",
      "Comment and reply automation",
      "Thread and subreddit browsing",
      "Mention and keyword monitoring",
      "Upvote/downvote tracking",
    ],
    usage: `from briven.skills import reddit

await reddit.submit(
    subreddit="briven",
    title="New Skill Tools Released",
    text="Check out our latest agent capabilities."
)`,
  },
  {
    slug: "tiktok",
    name: "TikTok",
    description:
      "Upload videos and get comments via the TikTok API.",
    longDescription:
      "Connect your agents to TikTok for automated video publishing and engagement. Upload videos, retrieve comments, track views and likes, and manage your TikTok presence directly from Briven.",
    category: "Social",
    status: "coming-soon",
    icon: "Video",
    toolPath: "tools/tiktok.py",
    installCommand: "briven skill add tiktok",
    features: [
      "Video upload and publishing",
      "Comment retrieval and moderation",
      "View and engagement analytics",
      "Hashtag challenge tracking",
      "Content scheduling support",
    ],
    usage: `from briven.skills import tiktok

await tiktok.upload_video(
    file_path="./content/demo.mp4",
    caption="AI agents in action #briven"
)`,
  },

  // ── Coming soon – Dev Skill Tools ──
  {
    slug: "github",
    name: "GitHub",
    description:
      "Commit code, create PRs, and manage issues via the GitHub API.",
    longDescription:
      "Full GitHub integration for development workflows. Commit and push code, create and review pull requests, manage issues and labels, trigger workflows, and automate your entire development pipeline from Briven.",
    category: "Developer",
    status: "coming-soon",
    icon: "GitBranch",
    toolPath: "tools/github.py",
    installCommand: "briven skill add github",
    features: [
      "Commit, push, and branch management",
      "Pull request creation and review",
      "Issue tracking and label management",
      "GitHub Actions workflow triggers",
      "Repository and webhook management",
    ],
    usage: `from briven.skills import github

await github.create_pr(
    repo="briven/core",
    title="Add new skill",
    branch="feature/new-skill"
)`,
  },
  {
    slug: "vscode-control",
    name: "VS Code Control",
    description:
      "Open files, run commands, and control VS Code programmatically.",
    longDescription:
      "Remote-control Visual Studio Code from your Briven agents. Open files, navigate to symbols, execute editor commands, manage extensions, and integrate with the VS Code API for seamless developer-agent collaboration.",
    category: "Developer",
    status: "coming-soon",
    icon: "Code2",
    toolPath: "tools/vscode_control.py",
    installCommand: "briven skill add vscode-control",
    features: [
      "Open and navigate files programmatically",
      "Execute VS Code commands and tasks",
      "Extension management and control",
      "Workspace and editor state inspection",
      "Integrated terminal command execution",
    ],
    usage: `from briven.skills import vscode_control

await vscode_control.open_file("src/main.py", line=42)
await vscode_control.run_command("editor.action.formatDocument")`,
  },
  {
    slug: "docker-management",
    name: "Docker Management",
    description:
      "Build, run, and manage Docker containers programmatically.",
    longDescription:
      "Container management powered by docker-py. Build images, run and stop containers, manage volumes and networks, inspect logs, and orchestrate your containerized infrastructure — all from your Briven agent.",
    category: "Developer",
    status: "coming-soon",
    icon: "Box",
    toolPath: "tools/docker_management.py",
    installCommand: "briven skill add docker-management",
    features: [
      "Build images from Dockerfiles",
      "Container lifecycle management (run, stop, remove)",
      "Volume and network management",
      "Log streaming and inspection",
      "Docker Compose integration",
    ],
    usage: `from briven.skills import docker_management

container = await docker_management.run(
    image="python:3.12",
    command="python script.py"
)`,
  },
  {
    slug: "cicd-tool",
    name: "CI/CD Tool",
    description:
      "Integrate with GitHub Actions or Jenkins for automated builds and deploys.",
    longDescription:
      "Automate your CI/CD pipelines from Briven. Trigger GitHub Actions workflows, monitor Jenkins builds, check pipeline status, and manage deployments — bringing continuous integration directly into your agent workflows.",
    category: "Developer",
    status: "coming-soon",
    icon: "Rocket",
    toolPath: "tools/cicd_tool.py",
    installCommand: "briven skill add cicd-tool",
    features: [
      "GitHub Actions workflow dispatch",
      "Jenkins job triggering and monitoring",
      "Build status and log retrieval",
      "Deployment pipeline management",
      "Artifact download and inspection",
    ],
    usage: `from briven.skills import cicd_tool

await cicd_tool.trigger(
    repo="briven/core",
    workflow="deploy.yml",
    ref="main"
)`,
  },
  {
    slug: "code-review",
    name: "Code Review",
    description:
      "Analyze code for bugs and security issues using Claude or local linters.",
    longDescription:
      "Automated code review powered by Claude and local linting tools. Detect bugs, security vulnerabilities, code smells, and style issues. Generate review comments, suggest fixes, and enforce coding standards across your codebase.",
    category: "Developer",
    status: "coming-soon",
    icon: "Bug",
    toolPath: "tools/code_review.py",
    installCommand: "briven skill add code-review",
    features: [
      "AI-powered bug detection via Claude",
      "Security vulnerability scanning",
      "Code style and quality analysis",
      "Automated review comment generation",
      "Local linter integration (ESLint, Ruff, etc.)",
    ],
    usage: `from briven.skills import code_review

report = await code_review.analyze("src/auth.py")
for issue in report.issues:
    print(f"{issue.severity}: {issue.message}")`,
  },
  {
    slug: "api-testing",
    name: "API Testing",
    description:
      "Send and test API requests with a Postman-like interface.",
    longDescription:
      "Comprehensive API testing tool for your agents. Send HTTP requests, validate responses, run test suites, and automate API health checks. Built on the requests library with Postman-like collection support.",
    category: "Developer",
    status: "coming-soon",
    icon: "Zap",
    toolPath: "tools/api_testing.py",
    installCommand: "briven skill add api-testing",
    features: [
      "HTTP request builder (GET, POST, PUT, DELETE)",
      "Response validation and assertions",
      "Test collection and suite management",
      "Environment variable support",
      "Request history and replay",
    ],
    usage: `from briven.skills import api_testing

response = await api_testing.get("https://api.example.com/users")
assert response.status == 200
print(response.json())`,
  },
];

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find((s) => s.slug === slug);
}

export function getAvailableSkills(): Skill[] {
  return skills.filter((s) => s.status === "available");
}

export function getComingSoonSkills(): Skill[] {
  return skills.filter((s) => s.status === "coming-soon");
}

export const categories = [
  "All",
  ...Array.from(new Set(skills.map((s) => s.category))),
];
