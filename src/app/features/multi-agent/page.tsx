import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Multi-Agent Cooperation – Briven",
  description:
    "Sequential delegation, parallel execution with 2-8 sub-agents, and A2A protocol for cross-system orchestration in Briven.",
};

export default function MultiAgentPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Multi-Agent Cooperation"
        subtitle="Sequential delegation, parallel execution (2-8 sub-agents), and A2A protocol for cross-system orchestration."
      >
        <section>
          <h2>Agent Hierarchy</h2>
          <p>
            Every Briven agent has a superior (human or parent agent) and can
            spawn subordinates. This hierarchical structure enables structured
            problem-solving, efficient resource allocation, and context
            isolation between sub-tasks.
          </p>
        </section>

        <section>
          <h2>Cooperation Modes</h2>

          <h3>Sequential Delegation</h3>
          <p>
            Use <code>call_subordinate</code> for detailed task handoff to a
            single sub-agent. The parent agent waits for the result before
            continuing. Ideal for multi-step workflows where each step depends
            on the previous one.
          </p>

          <h3>Parallel Execution</h3>
          <p>
            Use <code>call_agents_parallel</code> to spawn 2-8 concurrent
            sub-agents via <code>asyncio.gather()</code>. All agents run
            simultaneously and results are collected when all complete. Perfect
            for divide-and-conquer tasks like research, data gathering, or
            independent processing.
          </p>

          <h3>A2A Protocol</h3>
          <p>
            Use <code>a2a_chat</code> for Agent-to-Agent communication via the
            FastA2A protocol. This enables cross-system orchestration where
            Briven agents can communicate with other A2A-compatible agent
            systems.
          </p>
        </section>

        <section>
          <h2>Agent Profiles</h2>
          <p>
            Briven ships with 5 specialized agent profiles, each with tailored
            system prompts and tool configurations:
          </p>
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>briven</code>
                </td>
                <td>Root agent — general-purpose, full tool access</td>
              </tr>
              <tr>
                <td>
                  <code>developer</code>
                </td>
                <td>Code generation, review, and development tasks</td>
              </tr>
              <tr>
                <td>
                  <code>researcher</code>
                </td>
                <td>Information gathering, analysis, and synthesis</td>
              </tr>
              <tr>
                <td>
                  <code>hacker</code>
                </td>
                <td>Security testing, CTF, and reconnaissance</td>
              </tr>
              <tr>
                <td>
                  <code>default</code>
                </td>
                <td>Minimal profile for custom sub-agents</td>
              </tr>
            </tbody>
          </table>
          <p>
            Profiles live in the <code>agents/</code> directory. You can create
            custom profiles by adding new directories with specialized prompts
            and tool configurations.
          </p>
        </section>

        <section>
          <h2>Tool Methods</h2>
          <p>
            The multi-agent system exposes 5 agent tool methods for
            orchestration:
          </p>
          <ul>
            <li>
              <code>call_subordinate</code> — delegate a task to a single
              sub-agent
            </li>
            <li>
              <code>call_agents_parallel</code> — run 2-8 agents concurrently
            </li>
            <li>
              <code>a2a_chat</code> — Agent-to-Agent cross-system
              communication
            </li>
            <li>
              <code>response</code> — send a response back to the superior
              agent
            </li>
            <li>
              <code>wait</code> — pause execution for timing coordination
            </li>
          </ul>
        </section>

        <section>
          <h2>Use Cases</h2>
          <ul>
            <li>
              <strong>Content pipeline</strong> — researcher gathers data,
              writer drafts articles, editor reviews
            </li>
            <li>
              <strong>CI/CD automation</strong> — one agent reviews PRs,
              another runs tests, a third deploys to staging
            </li>
            <li>
              <strong>Research synthesis</strong> — parallel agents search
              different sources, a coordinator synthesizes findings
            </li>
            <li>
              <strong>Multi-client isolation</strong> — separate agents per
              client with isolated memory and secrets
            </li>
          </ul>
        </section>

        <hr />

        <p>
          See also:{" "}
          <Link href="/features/atlas-governance">/atlas Governance</Link> |{" "}
          <Link href="/features/hybrid-memory">Hybrid Memory System</Link>
        </p>
      </ContentPage>
    </>
  );
}
