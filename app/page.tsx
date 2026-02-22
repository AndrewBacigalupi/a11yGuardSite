"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroGraphic } from "@/components/hero-graphic";
import { Copy } from 'lucide-react';


const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function Home() {
  const workflowYaml = `name: Accessibility Regression Check

on:
  pull_request:

jobs:
  a11y:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - name: Run accessibility check
        uses: zachkklein/WCAG_PR_Checker@main
        with:
          APP_DIR: '.'
          BUILD_DIR: 'public'
          URLS: '/'
          OPENROUTER_API_KEY: \${{ secrets.OPENROUTER_API_KEY }}`;
  const [copied, setCopied] = useState(false);

  const handleCopyWorkflow = async () => {
    try {
      await navigator.clipboard.writeText(workflowYaml);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = workflowYaml;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Nav - large, translucent, bold logo + two buttons */}
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

      <main>
        {/* Hero - sky tint, gradient feel */}
        <section
          className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28"
          style={{ background: "var(--section-sky)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(8, 145, 178, 0.15) 0%, transparent 50%)",
            }}
          />
          <motion.div
            className="relative mx-auto max-w-5xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl mt-16 font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-8xl">
              Accessibility
              <br />
              <span className="bg-gradient-to-r from-primary via-cyan-600 to-secondary bg-clip-text text-transparent">
                that ships with every PR
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-2xl text-slate-700 md:text-4xl">
              <a href="https://github.com/zachkklein/WCAG_PR_Checker" className="font-bold italic">a11yGuard</a> runs accessibility checks on every pull request. New code stays
              compliant—without punishing existing debt.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Button size="lg" className="h-16 min-w-[150px] px-10 text-xl md:h-20 md:min-w-[150px] md:px-12 md:text-2xl" asChild>
                <a href="#setup" className="no-underline">
                  Get started
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-16 min-w-[150px] px-10 text-xl border-foreground/20 bg-white hover:bg-muted md:h-20 md:min-w-[150px] md:px-12 md:text-2xl" asChild>
                <Link href="/creators">Meet the team</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto mt-16 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
          </motion.div>
        </section>

        {/* Problem - white, extra large text, all centered */}
        <section id="problem" className="border-y border-border/50 bg-white px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              className="mb-8 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
              {...fadeInUp}
            >
              The Problem
            </motion.h2>
            <motion.p
              className="mx-auto max-w-6xl text-4xl leading-relaxed text-slate-700 md:text-4xl"
              {...fadeInUp}
            >
              Over <strong className="text-destructive text-4xl">95% of websites</strong> do not
              comply with Web Content Accessibility Guidelines (WCAG). Millions of users
              who rely on assistive tech,
              keyboard navigation, or clear contrast are left unable to effectively
              understand and utilize the important information on <span className="italic font-bold">billions</span> of sites.
            </motion.p>
          </div>
        </section>

        {/* How it works - mild tint */}
        <section id="how-it-works" className="border-y border-border/50 px-6 py-24 md:py-32" style={{ background: "var(--section-mild)" }}>
          <div className="mx-auto max-w-6xl">
            <motion.h2
              className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl"
              {...fadeInUp}
            >
              How It Works
            </motion.h2>
            <ol className="grid gap-12 md:gap-14 md:grid-cols-2">
              {[
                "Builds base branch and PR branch on every PR.",
                "Runs axe-core on both via Playwright.",
                "Diffs results—new violations flagged, resolved ones highlighted and accepted.",
                "Posts a structured comment and Gemini-3 reviews the violations and resolves the issues.",
              ].map((step, i) => (
                <motion.li
                  key={step}
                  {...fadeInUp}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-6 md:gap-8"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow md:h-20 md:w-20 md:text-3xl">
                    {i + 1}
                  </span>
                  <span className="text-2xl  text-slate-800 md:text-3xl">{step}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* Setup - light blue, code block stands out */}
        <section id="setup" className="px-6 py-24 md:py-32" style={{ background: "var(--section-sky)" }}>
          <div className="mx-auto max-w-5xl">
            <motion.h2
              className="mb-6 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl"
              {...fadeInUp}
            >
              Step-by-step setup
            </motion.h2>
            <motion.p
              className="mb-10 text-center text-xl text-slate-700 md:text-2xl"
              {...fadeInUp}
            >
              Add one workflow file. No scripts, no extra config.
            </motion.p>

            <motion.div {...fadeInUp}>
              <p className="mb-2 text-lg font-medium text-slate-600">
                1. Create{" "}
                <code className="rounded bg-white/90 px-2 py-1 text-foreground shadow-sm">
                  .github/workflows/a11y.yml
                </code>
              </p>
            </motion.div>
            <motion.div
              className="relative overflow-x-auto rounded-xl border-2 border-primary/20 bg-white/80 p-6 pr-16 shadow-lg"
              {...fadeInUp}
            >
              <button
                type="button"
                onClick={handleCopyWorkflow}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-transparent text-slate-500 transition hover:text-slate-400 focus-visible:outline-none"
                aria-label={copied ? "Copied workflow to clipboard" : "Copy workflow to clipboard"}
                title={copied ? "Copied" : "Copy"}
              >
                <Copy />
              </button>
              <div
                role="status"
                aria-live="polite"
                className={`pointer-events-none absolute right-4 top-14 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm transition ${
                  copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                }`}
              >
                Copied
              </div>
              <pre className="text-base text-slate-800 whitespace-pre md:text-lg">
                {workflowYaml}
              </pre>
            </motion.div>
            <motion.div
              className="mt-8 rounded-xl text-center border-2 border-primary/30 bg-white/90 p-6"
              {...fadeInUp}
            >
              <p className="text-2xl text-foreground">For more details on inputs and customizations, find us on <a href="https://github.com/marketplace/actions/a11y-diff" className="font-bold hover:underline ">GitHub Marketplace</a></p>
              
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white py-6">
        <div className="mx-auto max-w-5xl px-6 text-center text-xl text-slate-600">
          <Link href="/creators" className="text-primary hover:underline">
            Creators
          </Link>
        </div>
      </footer>
    </div>
  );
}
