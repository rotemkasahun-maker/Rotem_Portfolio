"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const groups = [
  [".golda-statement h1, .golda-statement h2, .golda-shift h2, .tiny-case-story h1, .about-opening h1, .ff-opening h1", "headline"],
  [".golda-intro, .golda-shift-copy > p:last-child, .tiny-case-story > p, .ff-collect", "copy"],
  [".golda-role, .golda-lenses, .golda-index li, .golda-facts div, .golda-label, .tiny-case-label, .tiny-section-label, .about-opening > p, .ff-kicker", "micro"],
  [".golda-lettuce, .golda-fridge, .tiny-main-product, .tiny-detail-product, .tiny-mobile-product, .ff-evidence, .ff-proof-wrap, .locked-page img", "artifact"],
] as const;

export function MotionSystem() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionItems = new Map<HTMLElement, string>();
    const observed = new Set<HTMLElement>();

    const setOrder = (element: HTMLElement, order: number) => {
      element.style.setProperty("--motion-order", String(Math.min(order, 4)));
    };

    const prepare = (element: HTMLElement, kind: string) => {
      element.dataset.motion = kind;
    };

    groups.forEach(([selector, kind]) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        if (kind === "copy") setOrder(element, index);
        if (element.matches(".tiny-mobile-product, .ff-receipt")) element.style.setProperty("--motion-delay", "var(--artifact-delay)");
        if (kind === "micro" && element.matches(".golda-index li, .golda-facts div, .about-principles > div")) {
          setOrder(element, index);
        }
        motionItems.set(element, kind);
      });
    });

    document.querySelectorAll<HTMLElement>(".tiny-flow-list li").forEach((element, index) => {
      setOrder(element, index);
      motionItems.set(element, "step");
    });

    if (reduce) {
      return;
    }

    document.documentElement.classList.add("motion-enabled");

    const reveal = (element: HTMLElement) => {
      const kind = motionItems.get(element);
      if (!kind || element.classList.contains("is-in-view")) return;
      prepare(element, kind);
      window.requestAnimationFrame(() => element.classList.add("is-in-view"));
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
          observed.delete(entry.target as HTMLElement);
        }
      }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    motionItems.forEach((_, item) => {
      if (item.getBoundingClientRect().top < window.innerHeight * 0.88) reveal(item);
      else {
        observer.observe(item);
        observed.add(item);
      }
    });

    const parallax = Array.from(document.querySelectorAll<HTMLElement>(".golda-lettuce, .golda-fridge"));
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight * 0.5;
      parallax.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.max(-1, Math.min(1, (rect.top + rect.height * 0.5 - viewportCenter) / window.innerHeight));
        const max = element.matches(".golda-lettuce") ? 18 : element.matches(".golda-fridge") ? 12 : 16;
        element.style.setProperty("--motion-parallax-y", `${Math.round(distance * -max)}px`);
      });
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateParallax); };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      observed.forEach((item) => item.removeAttribute("data-motion"));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-enabled");
    };
  }, [pathname]);

  return null;
}
