import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "a11yGuard — Accessibility checking on every pull request",
  description:
    "Detect accessibility regressions between PRs without punishing existing debt. Keep new code WCAG-compliant and accessible for all users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
