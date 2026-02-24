import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ContentPage({
  title,
  subtitle,
  children,
}: ContentPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[860px] mx-auto px-6 max-[480px]:px-4 py-16 pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </header>

        <article className="prose-briven">{children}</article>
      </div>
      <Footer />
    </div>
  );
}
