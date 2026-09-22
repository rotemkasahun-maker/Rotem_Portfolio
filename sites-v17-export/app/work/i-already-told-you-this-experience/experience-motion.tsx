"use client";

import { useEffect } from "react";

export function ExperienceMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (reduce) {
      return;
    }

    document.documentElement.classList.add("motion-enabled");

    // Define elements for motion treatment
    const motionElements = new Map<HTMLElement, string>();

    // Headlines
    document.querySelectorAll<HTMLElement>(".motion-headline-line").forEach((element) => {
      const parent = element.parentElement;
      if (parent && !parent.dataset.motion) {
        parent.dataset.motion = "headline";
        motionElements.set(parent, "headline");
      }
    });

    // Copy blocks
    const copySelectors = [
      ".heroCopy",
      ".momentContext p",
      ".whyReasoning p",
      ".flowInterpret p",
    ];
    copySelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.dataset.motion = "copy";
        element.style.setProperty("--motion-order", String(Math.min(index, 4)));
        motionElements.set(element, "copy");
      });
    });

    // Micro elements (beats, labels)
    document.querySelectorAll<HTMLElement>(".beat, .openingLabel span, .flowLabel").forEach((element, index) => {
      element.dataset.motion = "micro";
      element.style.setProperty("--motion-order", String(Math.min(index, 4)));
      motionElements.set(element, "micro");
    });

    // Artifacts (evidence images)
    document.querySelectorAll<HTMLElement>(".evidence, .secondEvidence").forEach((element) => {
      element.dataset.motion = "artifact";
      motionElements.set(element, "artifact");
    });

    // Annotations with stagger
    document.querySelectorAll<HTMLElement>(".annotationItem").forEach((element, index) => {
      element.dataset.motion = "step";
      element.style.setProperty("--motion-order", String(index));
      motionElements.set(element, "step");
    });

    // Extraction items with stagger
    document.querySelectorAll<HTMLElement>(".extraction > div").forEach((element, index) => {
      element.dataset.motion = "step";
      element.style.setProperty("--motion-order", String(index));
      motionElements.set(element, "step");
    });

    // Check list items
    document.querySelectorAll<HTMLElement>(".checkGroup li").forEach((element, index) => {
      element.dataset.motion = "step";
      element.style.setProperty("--motion-order", String(Math.min(index, 4)));
      motionElements.set(element, "step");
    });

    // Intersection observer for reveals
    const reveal = (element: HTMLElement) => {
      if (element.classList.contains("is-in-view")) return;
      window.requestAnimationFrame(() => element.classList.add("is-in-view"));
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    // Observe all motion elements
    motionElements.forEach((_, element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.88) {
        reveal(element);
      } else {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      motionElements.forEach((_, element) => {
        element.removeAttribute("data-motion");
      });
    };
  }, []);

  return null;
}
