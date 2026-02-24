import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Multi-LLM Support via LiteLLM – Briven",
  description:
    "Briven is model-agnostic via LiteLLM, supporting 20+ LLM providers including OpenRouter, Anthropic, xAI, OpenAI, DeepSeek, Google, and more.",
};

export default function MultiLlmPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Multi-LLM via LiteLLM"
        subtitle="Model-agnostic to the core. Bring any provider — switch models with a single env var."
      >
        <section>
          <h2>How It Works</h2>
          <p>
            Briven uses{" "}
            <Link href="https://github.com/BerriAI/litellm" target="_blank">
              LiteLLM
            </Link>{" "}
            for multi-provider LLM switching. This means you can use any
            supported model from any provider without changing your agent code.
            Just set the API key and model name in your <code>usr/.env</code>.
          </p>
        </section>

        <section>
          <h2>Supported Providers</h2>
          <p>
            Configure one or more providers by adding the corresponding API key:
          </p>
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Env Variable</th>
                <th>Example Models</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenRouter</td>
                <td>
                  <code>API_KEY_OPENROUTER</code>
                </td>
                <td>200+ models with one key (recommended)</td>
              </tr>
              <tr>
                <td>Anthropic</td>
                <td>
                  <code>API_KEY_ANTHROPIC</code>
                </td>
                <td>Claude 4.5, Claude 4</td>
              </tr>
              <tr>
                <td>xAI / Grok</td>
                <td>
                  <code>API_KEY_XAI</code>
                </td>
                <td>Strong reasoning and code</td>
              </tr>
              <tr>
                <td>OpenAI</td>
                <td>
                  <code>API_KEY_OPENAI</code>
                </td>
                <td>GPT-4o, o1, o3</td>
              </tr>
              <tr>
                <td>DeepSeek</td>
                <td>
                  <code>API_KEY_DEEPSEEK</code>
                </td>
                <td>Cost-effective models</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>
                  <code>API_KEY_GOOGLE</code>
                </td>
                <td>Gemini (multimodal)</td>
              </tr>
              <tr>
                <td>Groq</td>
                <td>
                  <code>API_KEY_GROQ</code>
                </td>
                <td>Fast inference</td>
              </tr>
              <tr>
                <td>Mistral</td>
                <td>
                  <code>API_KEY_MISTRAL</code>
                </td>
                <td>Mistral Large, Codestral</td>
              </tr>
              <tr>
                <td>Perplexity</td>
                <td>
                  <code>API_KEY_PERPLEXITY</code>
                </td>
                <td>Search-augmented</td>
              </tr>
              <tr>
                <td>Cohere</td>
                <td>
                  <code>API_KEY_COHERE</code>
                </td>
                <td>Command R+</td>
              </tr>
              <tr>
                <td>HuggingFace</td>
                <td>
                  <code>API_KEY_HUGGINGFACE</code>
                </td>
                <td>Open-source models</td>
              </tr>
              <tr>
                <td>Sambanova</td>
                <td>
                  <code>API_KEY_SAMBANOVA</code>
                </td>
                <td>Enterprise inference</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Switching Models</h2>
          <p>
            Set your default chat model via the <code>BRIVEN_SET_*</code> env
            var prefix:
          </p>
          <pre>
            <code>
              {`# In usr/.env
BRIVEN_SET_chat_model=openrouter/anthropic/claude-sonnet-4-6`}
            </code>
          </pre>
          <p>
            You can also switch models at runtime through the Web UI settings
            panel without restarting the agent.
          </p>
        </section>

        <section>
          <h2>Why Multi-Provider?</h2>
          <ul>
            <li>
              <strong>No vendor lock-in</strong> — switch providers anytime
              without code changes
            </li>
            <li>
              <strong>Cost optimization</strong> — use cheaper models for simple
              tasks, powerful models for complex reasoning
            </li>
            <li>
              <strong>Redundancy</strong> — if one provider goes down, switch
              to another
            </li>
            <li>
              <strong>Experimentation</strong> — compare model performance
              across providers on your specific workloads
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
