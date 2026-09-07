import type { Metadata } from "next";
import "./globals.css";
import { MotionSystem } from "@/components/motion-system";

export const metadata: Metadata = {
  title: "Rotem Kasahun",
  description: "Rotem Kasahun — portfolio",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><MotionSystem />{children}</body>
    </html>
  );
}
