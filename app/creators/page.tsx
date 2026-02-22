"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const creators = [
  { name: "Creator One", role: "Role (optional)", link: "" },
  { name: "Creator Two", role: "Role (optional)", link: "" },
  { name: "Creator Three", role: "Role (optional)", link: "" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-5 md:px-12 md:py-6">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-foreground transition-colors hover:text-primary md:text-3xl"
          >
            a11yGuard
          </Link>
          <nav className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="default" className="font-semibold" asChild>
              <Link href="/#how-it-works">How it works</Link>
            </Button>
            <Button size="default" className="font-semibold" asChild>
              <Link href="/#setup">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main
        className="min-h-[calc(100vh-theme(spacing.24))] px-6 pt-28 pb-20"
        style={{ background: "var(--section-sky)" }}
      >
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Creators
            </h1>
            <p className="mb-12 text-lg text-slate-700">
              The people behind a11yGuard. Edit the{" "}
              <code className="rounded bg-white/80 px-1.5 py-0.5 text-foreground shadow-sm">
                creators
              </code>{" "}
              array in{" "}
              <code className="rounded bg-white/80 px-1 py-0.5 text-sm shadow-sm">
                app/creators/page.tsx
              </code>{" "}
              to add your names and links.
            </p>
          </motion.div>

          <motion.ul
            className="grid gap-6 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {creators.map((person, i) => (
              <motion.li key={i} variants={item}>
                <Card className="h-full border-2 border-primary/20 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {person.link ? (
                        <a
                          href={person.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline-offset-4 hover:no-underline"
                        >
                          {person.name}
                        </a>
                      ) : (
                        person.name
                      )}
                    </CardTitle>
                    {person.role && (
                      <p className="text-sm text-slate-600">{person.role}</p>
                    )}
                  </CardHeader>
                </Card>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="outline" className="border-foreground/20 bg-white hover:bg-muted" asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </motion.p>
        </div>
      </main>
    </div>
  );
}
