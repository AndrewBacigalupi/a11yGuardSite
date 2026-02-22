"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const creators = [
  { name: "Zach Klein", role: "", link: "https://www.zachkklein.com/" },
  { name: "Thee Thakong", role: "", link: "https://www.linkedin.com/in/theetat-thakong/" },
  { name: "Ethan Li", link: "https://www.linkedin.com/in/ethan-li-8832a3291/"},
  { name: "Alex Vu", link: "https://www.linkedin.com/in/alexvu24/"},
  { name: "Andrew Bacigalupi", link: "https://www.andrewbacigalupi.com"},
  { name: "William Goldman", role: "", link: "https://www.goldmanwilliam.com" }
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
        <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-8 py-5  md:px-24 md:py-6">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-foreground transition-colors hover:text-primary md:text-3xl"
          >
            a11yGuard
          </Link>
          <nav className="flex items-center gap-3 md:gap-4">
            <Button variant="outline" size="default" className="h-14 min-w-[140px]  font-semibold text-xl border-border hover:bg-muted hover:text-foreground md:h-16 md:min-w-[160px] md:px-8 md:text-2xl" asChild>
              <a href="#how-it-works">How It Works</a>
            </Button>
            <Button size="default" className="h-14 min-w-[140px] px-6 font-semibold text-xl md:h-16 md:min-w-[160px] md:px-8 md:text-2xl" asChild>
              <a href="#setup">Get started</a>
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
            <h1 className="mb-8 mt-16 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Creators
            </h1>
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
                          className="text-primary underline-offset-4 hover:underline"
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
