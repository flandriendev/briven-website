import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "/atlas Governance – Briven",
  description:
    "The /atlas instruction layer governs Briven agent behavior using the GOTCHA framework — Goals, Orchestration, Tools, Context, Hard Prompts, and Args.",
};

export default function AtlasGovernancePage() {
  return (
    <>
      <Header />
      <ContentPage
        title="/atlas Governance"
        subtitle="The /atlas instruction layer governs agent behavior. The system prompt always reads /atlas before any action."
      >
        <section>
          <h2>What is /atlas?</h2>
          <p>
            The <code>/atlas</code> folder is Briven&apos;s operational
            handbook. It contains the rules, guidelines, and process definitions
            that the agent must follow before taking any action. Think of it as
            the agent&apos;s discipline layer — ensuring consistent,
            process-driven behavior.
          </p>
          <p>
            Before every action, the system prompt and agent orchestration layer
            reference <code>/atlas</code>. This means the agent checks its
            goals, uses existing tools, and documents failures — rather than
            acting impulsively.
          </p>
        </section>

        <section>
          <h2>The GOTCHA Framework</h2>
          <p>
            Briven&apos;s architecture is structured around a 6-layer framework
            called GOTCHA:
          </p>
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Folder</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Goals</strong>
                </td>
                <td>
                  <code>goals/</code>
                </td>
                <td>What needs to happen (process definitions)</td>
              </tr>
              <tr>
                <td>
                  <strong>Orchestration</strong>
                </td>
                <td>AI manager</td>
                <td>Coordinates execution; reads /atlas first</td>
              </tr>
              <tr>
                <td>
                  <strong>Tools</strong>
                </td>
                <td>
                  <code>tools/</code>
                </td>
                <td>Deterministic scripts that do actual work</td>
              </tr>
              <tr>
                <td>
                  <strong>Context</strong>
                </td>
                <td>
                  <code>context/</code>
                </td>
                <td>Domain knowledge, tone, ICP</td>
              </tr>
              <tr>
                <td>
                  <strong>Hard Prompts</strong>
                </td>
                <td>
                  <code>hardprompts/</code>
                </td>
                <td>Reusable LLM instruction templates</td>
              </tr>
              <tr>
                <td>
                  <strong>Args</strong>
                </td>
                <td>
                  <code>args/</code>
                </td>
                <td>Behavior settings (models, modes, schedules)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>/atlas Directory Structure</h2>
          <p>
            The <code>/atlas</code> folder contains:
          </p>
          <ul>
            <li>
              <code>CLAUDE.md</code> — the GOTCHA framework system handbook,
              the primary governance document
            </li>
            <li>
              <code>SETUP_GUIDE.md</code> — setup reference for onboarding
            </li>
            <li>
              <code>memory/</code> — memory tools (read, write, search) that
              are part of the governance layer
            </li>
          </ul>
        </section>

        <section>
          <h2>How It Keeps Agents Disciplined</h2>
          <ul>
            <li>
              <strong>Check goals first</strong> — before acting, the agent
              reads <code>goals/manifest.md</code> to understand what it should
              be working toward
            </li>
            <li>
              <strong>Use existing tools</strong> — the agent is instructed to
              use tools from <code>tools/</code> rather than improvising
              solutions
            </li>
            <li>
              <strong>Document failures</strong> — when something goes wrong,
              the agent logs the failure for future reference
            </li>
            <li>
              <strong>Stay on-process</strong> — the GOTCHA layers ensure the
              agent follows the defined workflow rather than going off-script
            </li>
          </ul>
        </section>

        <section>
          <h2>Customization</h2>
          <p>
            Every prompt in Briven lives in the <code>prompts/</code> directory
            and is fully editable. You can:
          </p>
          <ul>
            <li>
              Edit <code>/atlas/CLAUDE.md</code> to change the governance rules
            </li>
            <li>
              Add new goals to <code>goals/</code> to direct agent behavior
            </li>
            <li>
              Create context files in <code>context/</code> to give the agent
              domain knowledge
            </li>
            <li>
              Write hard prompts in <code>hardprompts/</code> for reusable
              instruction templates
            </li>
            <li>
              Adjust settings in <code>args/</code> to change models, modes,
              and schedules
            </li>
          </ul>
          <p>
            Custom overrides can be placed in agent-specific directories, and
            Briven merges them with defaults automatically.
          </p>
        </section>

        <hr />

        <p>
          See also:{" "}
          <Link href="/features/multi-agent">Multi-Agent Cooperation</Link> |{" "}
          <Link href="/features/hybrid-memory">Hybrid Memory System</Link>
        </p>
      </ContentPage>
    </>
  );
}
