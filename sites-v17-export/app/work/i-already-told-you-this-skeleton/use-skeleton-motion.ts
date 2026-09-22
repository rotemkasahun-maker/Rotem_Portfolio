"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./skeleton.module.css";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function useSkeletonMotionReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-motion]"));
    if (items.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      items.forEach((el) => el.classList.add(styles.isRevealed));
      return;
    }

    const reveal = (el: HTMLElement) => {
      el.classList.add(styles.isRevealed);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    items.forEach((el) => {
      if (isInViewport(el)) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
