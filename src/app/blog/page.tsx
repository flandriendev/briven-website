"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4 pt-20 pb-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground mb-4 italic">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Updates, announcements, and stories from the Briven project.
            </p>
          </motion.div>

          {/* Post list */}
          <div className="space-y-6">
            {posts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-card border border-border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(238,69,70,0.12)] no-underline"
                >
                  {/* Date + read time */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground/60 mb-3">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {/* Author + tags */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {post.author.avatar ? (
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      ) : (
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                          JVC
                        </span>
                      )}
                      <span className="text-xs font-medium text-muted-foreground">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-primary/60 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
