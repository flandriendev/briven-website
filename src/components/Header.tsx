import Link from "next/link";
import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-end">
        <Link
          href="https://github.com/flandriendev/briven"
          target="_blank"
          className="text-muted-foreground/60 hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
