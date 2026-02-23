import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { skills, getSkillBySlug } from "@/lib/skills";
import {
  ArrowLeft,
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
  CheckCircle2,
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
import SkillCopyButton from "./copy-button";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-8 w-8" />,
  FolderOpen: <FolderOpen className="h-8 w-8" />,
  Terminal: <Terminal className="h-8 w-8" />,
  Send: <Send className="h-8 w-8" />,
  MessageCircle: <MessageCircle className="h-8 w-8" />,
  Mail: <Mail className="h-8 w-8" />,
  Sparkles: <Sparkles className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
  Brain: <Brain className="h-8 w-8" />,
  Hash: <Hash className="h-8 w-8" />,
  MessageSquare: <MessageSquare className="h-8 w-8" />,
  Mic: <Mic className="h-8 w-8" />,
  Database: <Database className="h-8 w-8" />,
  Clock: <Clock className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8" />,
  Megaphone: <Megaphone className="h-8 w-8" />,
  AtSign: <AtSign className="h-8 w-8" />,
  Camera: <Camera className="h-8 w-8" />,
  Briefcase: <Briefcase className="h-8 w-8" />,
  MessagesSquare: <MessagesSquare className="h-8 w-8" />,
  Video: <Video className="h-8 w-8" />,
  GitBranch: <GitBranch className="h-8 w-8" />,
  Code2: <Code2 className="h-8 w-8" />,
  Box: <Box className="h-8 w-8" />,
  Rocket: <Rocket className="h-8 w-8" />,
  Bug: <Bug className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
};

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Skill Not Found – Briven" };
  return {
    title: `${skill.name} – Briven Skills`,
    description: skill.description,
  };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
          {/* Back link */}
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to skills
          </Link>

          {/* Skill header */}
          <div className="flex items-start gap-5 mb-10">
            <div className="shrink-0 p-4 rounded-2xl border text-primary bg-primary/10 border-primary/20">
              {iconMap[skill.icon]}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  {skill.name}
                </h1>
                {skill.status === "coming-soon" && (
                  <span className="text-xs font-bold uppercase tracking-wider text-black bg-amber-500/90 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {skill.longDescription}
              </p>
            </div>
          </div>

          {/* Install command */}
          <div className="bg-card border border-border rounded-2xl p-5 mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Install
              </span>
              <span className="text-[10px] text-muted-foreground/60 bg-secondary px-2 py-0.5 rounded">
                {skill.category}
              </span>
            </div>
            <div className="flex items-center justify-between bg-[#0d0f16] border border-border rounded-xl p-4">
              <code className="text-sm font-mono text-primary/90">
                <span className="text-muted-foreground/40 select-none mr-3">
                  $
                </span>
                {skill.installCommand}
              </code>
              <SkillCopyButton command={skill.installCommand} />
            </div>
            <p className="text-xs text-muted-foreground/50 mt-3">
              Source: <code className="text-xs">{skill.toolPath}</code>
            </p>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold tracking-tight text-foreground mb-4">
              Features
            </h2>
            <ul className="space-y-3">
              {skill.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage example */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold tracking-tight text-foreground mb-4">
              Usage Example
            </h2>
            <div className="bg-[#0d0f16] border border-border rounded-2xl p-5 overflow-x-auto">
              <pre className="text-sm font-mono text-primary/80 whitespace-pre">
                {skill.usage}
              </pre>
            </div>
          </div>

          {/* Related skills */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground mb-4">
              Related Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills
                .filter(
                  (s) =>
                    s.slug !== skill.slug && s.category === skill.category
                )
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/skills/${related.slug}`}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors no-underline"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {iconMap[related.icon] && (
                        <span className="[&_svg]:h-4 [&_svg]:w-4">
                          {iconMap[related.icon]}
                        </span>
                      )}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {related.name}
                      </span>
                      <span className="block text-xs text-muted-foreground/60">
                        {related.category}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
