import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Hybrid Memory System – Briven",
  description:
    "SQLite + FAISS vector embeddings + BM25 hybrid search. Persistent memory across sessions with semantic recall and daily knowledge logs.",
};

export default function HybridMemoryPage() {
  return (
    <>
      <Header />
      <ContentPage
        title="Hybrid Memory System"
        subtitle="SQLite + FAISS embeddings + BM25 hybrid search. Persistent memory across sessions with semantic recall."
      >
        <section>
          <h2>Overview</h2>
          <p>
            Briven&apos;s memory system gives agents the ability to remember
            across sessions. It combines three storage and retrieval mechanisms
            into one unified system: SQLite for structured persistence, FAISS
            vector embeddings for semantic search, and BM25 for keyword-based
            full-text search.
          </p>
        </section>

        <section>
          <h2>Architecture</h2>

          <h3>SQLite Storage</h3>
          <p>
            All memory entries are stored in a local SQLite database. This
            includes facts, conversation history, task logs, and structured
            data. SQLite provides reliable, file-based persistence with no
            external dependencies.
          </p>

          <h3>FAISS Vector Embeddings</h3>
          <p>
            New memory entries are automatically embedded using{" "}
            <code>sentence-transformers</code> with a small default model for
            efficiency. These embeddings are indexed in FAISS, enabling fast
            semantic similarity search — finding memories by meaning, not just
            keywords.
          </p>

          <h3>BM25 Full-Text Search</h3>
          <p>
            Alongside vector search, BM25 provides traditional keyword-based
            ranking. This catches exact matches that semantic search might miss,
            like specific names, error codes, or configuration values.
          </p>

          <h3>Hybrid Ranking</h3>
          <p>
            When searching memory, Briven combines vector and BM25 results with
            configurable weighting between keyword and semantic results. This
            hybrid approach delivers the best of both worlds.
          </p>
        </section>

        <section>
          <h2>Memory Types</h2>
          <ul>
            <li>
              <strong>Persistent curated facts</strong> — stored in{" "}
              <code>memory/MEMORY.md</code>, these are verified facts the agent
              has learned and confirmed
            </li>
            <li>
              <strong>Daily session logs</strong> — timestamped entries in{" "}
              <code>memory/logs/YYYY-MM-DD.md</code> capturing what happened in
              each session
            </li>
            <li>
              <strong>Chat persistence</strong> — full conversation history at{" "}
              <code>usr/chats/&#123;context_id&#125;/chat.json</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>Memory Tools</h2>
          <p>
            The memory system is exposed through several tools in{" "}
            <code>python/tools/</code>:
          </p>
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>memory_save</code>
                </td>
                <td>Store a new memory entry with automatic embedding</td>
              </tr>
              <tr>
                <td>
                  <code>memory_load</code>
                </td>
                <td>Retrieve memories by key or search</td>
              </tr>
              <tr>
                <td>
                  <code>memory_delete</code>
                </td>
                <td>Remove specific memory entries</td>
              </tr>
              <tr>
                <td>
                  <code>memory_forget</code>
                </td>
                <td>Bulk removal of memories matching a pattern</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Memory Consolidation</h2>
          <p>
            Briven includes LLM-based memory consolidation to keep the
            knowledge base clean. Over time, the agent can review its stored
            memories, merge duplicates, resolve contradictions, and remove
            outdated information — maintaining a curated, high-quality knowledge
            base.
          </p>
        </section>

        <section>
          <h2>How It Compares</h2>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Briven</th>
                <th>Typical Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cross-session memory</td>
                <td>Yes (SQLite + files)</td>
                <td>Usually none</td>
              </tr>
              <tr>
                <td>Semantic search</td>
                <td>FAISS embeddings</td>
                <td>Rare</td>
              </tr>
              <tr>
                <td>Keyword search</td>
                <td>BM25</td>
                <td>Basic grep</td>
              </tr>
              <tr>
                <td>Hybrid ranking</td>
                <td>Configurable weights</td>
                <td>Not available</td>
              </tr>
              <tr>
                <td>Self-hosted</td>
                <td>100% local</td>
                <td>Often cloud-dependent</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr />

        <p>
          See also:{" "}
          <Link href="/features/atlas-governance">/atlas Governance</Link> |{" "}
          <Link href="/features/multi-agent">Multi-Agent Cooperation</Link>
        </p>
      </ContentPage>
    </>
  );
}
