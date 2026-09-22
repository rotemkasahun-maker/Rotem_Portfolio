"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./route-transition.module.css";

type SheetPhase = "idle" | "enter" | "covered" | "exit";

const SHEET_MS = 320;
const SHEET_STAGGER_MS = 65;
const COVER_COMPLETE_MS = SHEET_STAGGER_MS + SHEET_MS;
const EXIT_COMPLETE_MS = SHEET_STAGGER_MS + SHEET_MS;

function shouldAnimateNavigation(anchor: HTMLAnchorElement): string | null {
  if (anchor.target === "_blank") return null;
  if (anchor.hasAttribute("download")) return null;

  const rawHref = anchor.getAttribute("href");
  if (!rawHref || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return null;
  if (rawHref.startsWith("#")) return null;

  let url: URL;
  try {
    url = new URL(rawHref, window.location.origin);
  } catch {
    return null;
  }

  if (url.origin !== window.location.origin) return null;

  const currentPath = window.location.pathname + window.location.search;
  const targetPath = url.pathname + url.search;
  if (currentPath === targetPath) return null;

  return url.pathname + url.search + url.hash;
}

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<SheetPhase>("idle");

  const isAnimating = useRef(false);
  const isCovered = useRef(false);
  const routeReady = useRef(false);
  const pendingTarget = useRef<string | null>(null);
  const pendingHash = useRef("");
  const prefersReduced = useRef(false);
  const coverTimer = useRef<number | null>(null);
  const exitTimer = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (coverTimer.current !== null) {
      window.clearTimeout(coverTimer.current);
      coverTimer.current = null;
    }
    if (exitTimer.current !== null) {
      window.clearTimeout(exitTimer.current);
      exitTimer.current = null;
    }
  }, []);

  const resetTransition = useCallback(() => {
    isAnimating.current = false;
    isCovered.current = false;
    routeReady.current = false;
    pendingTarget.current = null;
    setPhase("idle");
  }, []);

  const beginExit = useCallback(() => {
    if (!isAnimating.current || !isCovered.current || !routeReady.current) return;

    window.scrollTo(0, 0);
    setPhase("exit");

    clearTimers();
    exitTimer.current = window.setTimeout(() => {
      if (pendingHash.current) {
        const hash = pendingHash.current;
        pendingHash.current = "";
        window.requestAnimationFrame(() => {
          document.querySelector(hash)?.scrollIntoView({ block: "start" });
        });
      }

      resetTransition();
      exitTimer.current = null;
    }, EXIT_COMPLETE_MS);
  }, [clearTimers, resetTransition]);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!isAnimating.current) return;

    routeReady.current = true;
    beginExit();
  }, [pathname, beginExit]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (prefersReduced.current || isAnimating.current) return;
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const target = shouldAnimateNavigation(anchor);
      if (!target) return;

      event.preventDefault();

      const hashIndex = target.indexOf("#");
      pendingHash.current = hashIndex >= 0 ? target.slice(hashIndex) : "";
      pendingTarget.current = hashIndex >= 0 ? target.slice(0, hashIndex) || "/" : target;

      isAnimating.current = true;
      isCovered.current = false;
      routeReady.current = false;

      clearTimers();
      setPhase("enter");

      coverTimer.current = window.setTimeout(() => {
        isCovered.current = true;
        setPhase("covered");

        if (pendingTarget.current) {
          router.push(pendingTarget.current);
        }

        coverTimer.current = null;
      }, COVER_COMPLETE_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimers();
    };
  }, [router, clearTimers]);

  return (
    <>
      {children}
      <div
        className={styles.overlay}
        data-phase={phase}
        aria-hidden={phase === "idle"}
      >
        <div className={styles.layerPage} aria-hidden="true" />
        <div className={styles.layerContent} aria-hidden="true" />
      </div>
    </>
  );
}
