import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 — Page Not Found",
};

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 text-center px-4">
            <p className="text-sm font-medium tracking-widest uppercase text-[#ee4546]">
                404
            </p>
            <h1 className="text-3xl font-bold text-[#f6f6f8]">Page not found</h1>
            <p className="text-[rgba(246,246,248,0.5)] max-w-sm">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <Link
                href="/"
                className="rounded-md bg-[#ee4546] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
                Back to home
            </Link>
        </main>
    );
}
