"use client";

import { useEffect, useRef, useState } from "react";

interface ReadingProgressProps {
  readTime: string;
}

export default function ReadingProgress({ readTime }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = rect.height;
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;

      // Show bar once we've scrolled past the article start
      const started = scrollY > articleTop - windowH * 0.5;
      setVisible(started);

      if (articleHeight <= 0) return;

      const scrolled = scrollY - articleTop + windowH * 0.5;
      const pct = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));
      setProgress(pct);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: "none" }}
    >
      {/* Track */}
      <div className="h-1 w-full bg-border/40">
        {/* Fill */}
        <div
          className="h-full bg-primary transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Reading time label */}
      <div
        className="absolute right-4 top-2 text-[10px] font-medium text-muted-foreground/60 transition-opacity duration-300"
        style={{ opacity: visible && progress < 100 ? 1 : 0 }}
      >
        {readTime}
      </div>
    </div>
  );
}
