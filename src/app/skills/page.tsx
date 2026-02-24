"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { skills, categories } from "@/lib/skills";
import {
  Globe,
  FolderOpen,
  Terminal,
  Send,
  MessageCircle,
  Mail,
  Sparkles,
  Shield,
  Brain,
  Hash,
  MessageSquare,
  Mic,
  Database,
  Clock,
  Users,
  ShieldCheck,
  ArrowLeft,
  Search,
  Megaphone,
  AtSign,
  Camera,
  Briefcase,
  MessagesSquare,
  Video,
  GitBranch,
  Code2,
  Box,
  Rocket,
  Bug,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  FolderOpen: <FolderOpen className="h-6 w-6" />,
  Terminal: <Terminal className="h-6 w-6" />,
  Send: <Send className="h-6 w-6" />,
  MessageCircle: <MessageCircle className="h-6 w-6" />,
  Mail: <Mail className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Brain: <Brain className="h-6 w-6" />,
  Hash: <Hash className="h-6 w-6" />,
  MessageSquare: <MessageSquare className="h-6 w-6" />,
  Mic: <Mic className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Clock: <Clock className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Megaphone: <Megaphone className="h-6 w-6" />,
  AtSign: <AtSign className="h-6 w-6" />,
  Camera: <Camera className="h-6 w-6" />,
  Briefcase: <Briefcase className="h-6 w-6" />,
  MessagesSquare: <MessagesSquare className="h-6 w-6" />,
  Video: <Video className="h-6 w-6" />,
  GitBranch: <GitBranch className="h-6 w-6" />,
  Code2: <Code2 className="h-6 w-6" />,
  Box: <Box className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
  Bug: <Bug className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
};

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const availableCount = skills.filter((s) => s.status === "available").length;
  const comingSoonCount = skills.filter(
    (s) => s.status === "coming-soon"
  ).length;

  const filtered = skills.filter((s) => {
    const matchesCategory =
      activeCategory === "All" || s.category === activeCategory;
    const matchesSearch =
      search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group filtered skills by category (preserving category order)
  const categoryOrder = [
    "Data",
    "System",
    "Developer",
    "Messaging",
    "Security",
    "Core",
    "Interface",
    "Social",
  ];
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      skills: filtered.filter((s) => s.category === cat),
    }))
    .filter((g) => g.skills.length > 0);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4 pt-20 pb-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
              <span className="text-primary mr-2">⟩</span>Skill Tools
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Reusable capabilities for your Briven agents. Install any skill
              with a single command to extend what your agents can do.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm font-medium text-primary">
                Available ({availableCount})
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Coming Soon ({comingSoonCount})
              </span>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-primary/15 text-primary border-primary/30"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills grouped by category */}
          {grouped.map((group) => (
            <div key={group.category} className="mb-12">
              <h2 className="text-xl font-semibold tracking-tight text-foreground mb-6">
                {group.category}
                <span className="text-muted-foreground font-normal text-sm ml-2">
                  ({group.skills.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <Link
                    key={skill.slug}
                    href={`/skills/${skill.slug}`}
                    className={`group relative overflow-hidden bg-card border rounded-2xl p-5 transition-all no-underline ${
                      skill.status === "coming-soon"
                        ? "border-amber-500/20 hover:border-amber-500/40 opacity-75 hover:opacity-100"
                        : "border-border hover:border-primary/40"
                    }`}
                  >
                    {skill.status === "coming-soon" && (
                      <div className="absolute top-0 right-0 bg-amber-500/90 text-[9px] font-bold uppercase tracking-wider text-black px-2.5 py-0.5 rounded-bl-lg">
                        Soon
                      </div>
                    )}
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 mt-0.5 ${
                          skill.status === "coming-soon"
                            ? "text-amber-500/70"
                            : "text-primary"
                        }`}
                      >
                        {iconMap[skill.icon]}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate mb-1">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No skills match your search.
              </p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
