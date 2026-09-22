import type { Metadata } from "next";
import "./globals.css";
import { MotionSystem } from "@/components/motion-system";
import { RouteTransition } from "@/components/route-transition";

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
      <body className="antialiased">
        <MotionSystem />
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
