"use client";

import { SiteHeader } from "@/components/site-header";
import { useEffect, useRef, useState } from "react";
import styles from "./case-study-lab.module.css";

export default function CaseStudyLab() {
  const [activeSection, setActiveSection] = useState<string>("opening");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const featuredFigureRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) sectionObserver.observe(ref);
    });

    const motionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-revealed", "true");
            motionObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    if (featuredFigureRef.current) {
      motionObserver.observe(featuredFigureRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      motionObserver.disconnect();
    };
  }, []);

  return (
    <main className={styles.lab}>
      <div className={styles.headerShell}>
        <SiteHeader />
      </div>

      <aside className={styles.stickyIndex}>
        <nav>
          <a
            href="#opening"
            className={activeSection === "opening" ? styles.active : ""}
          >
            Opening
          </a>
          <a
            href="#observed"
            className={activeSection === "observed" ? styles.active : ""}
          >
            Observed friction
          </a>
          <a
            href="#mechanism"
            className={activeSection === "mechanism" ? styles.active : ""}
          >
            The mechanism
          </a>
          <a
            href="#composition"
            className={activeSection === "composition" ? styles.active : ""}
          >
            Layout rhythm
          </a>
          <a
            href="#reflection"
            className={activeSection === "reflection" ? styles.active : ""}
          >
            What follows
          </a>
        </nav>
      </aside>

      <article className={styles.canvas}>
        <section
          id="opening"
          ref={(el) => (sectionRefs.current["opening"] = el)}
          className={styles.opening}
        >
          <p className={styles.kicker}>Internal working draft · 2026</p>
          <span className={styles.ruleMark} />
          <h1>
            <span>Building a</span>
            <span>Reusable System</span>
          </h1>
          <p className={styles.intro}>
            Every case study used to start from scratch. Before rebuilding any real project, this page tests whether the same editorial language can carry different kinds of evidence — compact, featured, annotated — without feeling assembled from parts.
          </p>
        </section>

        <div className={styles.story}>
          <section
            id="observed"
            ref={(el) => (sectionRefs.current["observed"] = el)}
            className={styles.beat}
          >
            <p className={styles.beatLabel}>Observed friction</p>
            <p className={styles.body}>
              Not every image deserves the same presence. Supporting evidence should prove a point without dominating the narrative — the way a WhatsApp screenshot might sit inside a text-led service story.
            </p>

            <figure className={styles.compactFigure}>
              <div className={styles.imagePlaceholder} style={{ aspectRatio: "4/3" }} />
              <figcaption>
                <span className={styles.figureNumber}>Fig. 01</span>
                Supporting capture from an observed intake flow
              </figcaption>
            </figure>

            <p className={styles.body}>
              Compact figures stay within the reading column. They hold just enough surface treatment to feel intentional — not raw files dropped onto paper.
            </p>

            <figure className={styles.featuredFigure} ref={featuredFigureRef}>
              <div className={styles.imagePlaceholder} style={{ aspectRatio: "16/10" }} />
              <figcaption>
                <span className={styles.figureNumber}>Fig. 02</span>
                A screen worth stopping for — the intervention state
              </figcaption>
            </figure>

            <p className={styles.body}>
              When an artifact is central to understanding the work, it earns more room: slightly wider, a touch more depth, a deliberate offset from the text spine. Still not a hero billboard.
            </p>
          </section>

          <section
            id="mechanism"
            ref={(el) => (sectionRefs.current["mechanism"] = el)}
            className={styles.beat}
          >
            <p className={styles.beatLabel}>The mechanism</p>
            <p className={styles.body}>
              Some moments need annotation — a leader line, a micro label, an anchor on the artifact itself. The detail layer should read at desktop and collapse gracefully on mobile.
            </p>

            <figure className={styles.annotatedFigure}>
              <div className={styles.annotationContainer}>
                <div className={styles.imagePlaceholder} style={{ aspectRatio: "16/9" }} />

                <div className={styles.annotation} style={{ left: "18%", top: "22%" }}>
                  <svg className={styles.annotationLeader} width="60" height="40">
                    <path d="M 0 0 L 45 30 L 60 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div className={styles.annotationLabel}>
                    <span className={styles.annotationMark}>A</span>
                    <p>Pre-filled from context</p>
                  </div>
                </div>

                <div className={styles.annotation} style={{ right: "15%", top: "45%" }}>
                  <svg className={styles.annotationLeader} width="50" height="30">
                    <path d="M 50 0 L 20 20 L 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div className={styles.annotationLabel}>
                    <span className={styles.annotationMark}>B</span>
                    <p>Confidence indicator</p>
                  </div>
                </div>

                <div className={styles.annotation} style={{ left: "52%", bottom: "18%" }}>
                  <svg className={styles.annotationLeader} width="40" height="45">
                    <path d="M 20 45 L 20 10 L 40 0" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div className={styles.annotationLabel}>
                    <span className={styles.annotationMark}>C</span>
                    <p>Only asks for missing</p>
                  </div>
                </div>
              </div>
              <figcaption>
                <span className={styles.figureNumber}>Fig. 03</span>
                Interpretation layer with static callouts
              </figcaption>
            </figure>
          </section>

          <section
            id="composition"
            ref={(el) => (sectionRefs.current["composition"] = el)}
            className={styles.beat}
          >
            <p className={styles.beatLabel}>Layout rhythm</p>
            <p className={styles.body}>
              Editorial layouts are rarely symmetric. Text and media sit at deliberately different scales — rhythm through asymmetry, not a generic half-and-half card.
            </p>

            <div className={styles.textMediaSplit}>
              <div className={styles.splitText}>
                <p className={styles.body}>
                  The text column stays within reading width. Media breaks free when the story needs spatial tension, but the caption and figure number still tie it back to the same thread.
                </p>
                <p className={styles.body}>
                  Related states can appear as a pair — unequal scale, deliberate offset, no fake spacer blocks holding the layout apart.
                </p>
              </div>
              <figure className={styles.splitMedia}>
                <div className={styles.imagePlaceholder} style={{ aspectRatio: "3/4" }} />
                <figcaption>
                  <span className={styles.figureNumber}>Fig. 04</span>
                  Evidence offset from the reading spine
                </figcaption>
              </figure>
            </div>

            <div className={styles.twoUpMedia}>
              <figure className={styles.twoUpPrimary}>
                <div className={styles.imagePlaceholder} style={{ aspectRatio: "16/10" }} />
              </figure>
              <figure className={styles.twoUpSecondary}>
                <div className={styles.imagePlaceholder} style={{ aspectRatio: "4/5" }} />
              </figure>
              <figcaption className={styles.twoUpCaption}>
                <span className={styles.figureNumber}>Fig. 05–06</span>
                Before and after, related but not equal in scale
              </figcaption>
            </div>
          </section>

          <section
            id="reflection"
            ref={(el) => (sectionRefs.current["reflection"] = el)}
            className={styles.beat}
          >
            <div className={styles.pullQuote}>
              <p>
                The system should work with the content,<br />
                not force it into a template.
              </p>
            </div>

            <p className={styles.body}>
              Major statements create pause through scale and placement — not rounded cards, not generic blockquotes. A deliberate typographic beat in the middle of the story.
            </p>

            <div className={styles.insightCallout}>
              <span className={styles.calloutLabel}>Decision</span>
              <p>
                Smaller analytical notes use the same grammar at lower hierarchy: hairline mark, micro label, restrained surface. Decisions, constraints, and observations that support the thread without interrupting it.
              </p>
            </div>
          </section>

          <section className={styles.closing}>
            <p className={styles.closingStatement}>
              One language.<br />
              Composed differently each time.
            </p>
            <p className={styles.closingNote}>
              studio golda by ROTKA
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
