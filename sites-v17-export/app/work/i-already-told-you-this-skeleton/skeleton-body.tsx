"use client";

import { case106Content as c } from "@/content/case-106";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./skeleton.module.css";
import { useSkeletonMotionReveal } from "./use-skeleton-motion";

type ReadingMode = "tldr" | "detailed";
type BodyPhase = "idle" | "exit" | "enter-pending" | "enter";

const BODY_OUT_MS = 200;
const BODY_IN_DELAY_MS = 80;
const BODY_IN_MS = 300;
const MODE_TRANSITION_MS = BODY_OUT_MS + BODY_IN_DELAY_MS + BODY_IN_MS;

function TldrBody() {
  const motionRef = useSkeletonMotionReveal();

  return (
    <div className={styles.body} ref={motionRef} data-region="body">
      <section className={styles.beatTldrRequest} data-beat="tldr-request">
        <p className={styles.sectionHeading} data-motion="fade" data-role="label">
          {c.headings.theRequest}
        </p>
        <figure className={styles.evidencePlain} data-role="evidence">
          <img
            src={c.evidence.repetition.src}
            alt={c.evidence.repetition.alt}
            width={c.evidence.repetition.width}
            height={c.evidence.repetition.height}
          />
        </figure>
        {c.tldr.request.paragraphs.map((line, index) => (
          <p
            key={line}
            className={styles.interventionBody}
            data-role={index === 0 ? "display" : "body"}
          >
            {line}
          </p>
        ))}
        <figure className={styles.evidencePlainSecond} data-role="evidence">
          <img
            src={c.evidence.mosquitoes.src}
            alt={c.evidence.mosquitoes.alt}
            width={c.evidence.mosquitoes.width}
            height={c.evidence.mosquitoes.height}
          />
        </figure>
      </section>

      <section className={styles.beatTldrProposal} data-beat="tldr-proposal">
        <p className={styles.sectionHeading} data-motion="fade" data-role="label">
          {c.headings.theProposal}
        </p>
        <p
          className={styles.interventionHeadline}
          data-motion="rise"
          data-motion-delay="1"
          data-role="display"
        >
          {c.tldr.proposal.headline}
        </p>
        <p
          className={styles.interventionBody}
          data-motion="fade"
          data-motion-delay="1"
          data-role="body"
        >
          {c.tldr.proposal.body}
        </p>
      </section>

      <section className={styles.beatTldrImpact} data-beat="tldr-impact">
        <p className={styles.sectionHeading} data-motion="fade" data-role="label">
          {c.headings.expectedImpact}
        </p>
        {c.tldr.impact.paragraphs.map((line) => (
          <p key={line} className={styles.interventionBody} data-role="body">
            {line}
          </p>
        ))}
      </section>
    </div>
  );
}

function DetailedBody() {
  const motionRef = useSkeletonMotionReveal();

  return (
    <div className={styles.body} ref={motionRef} data-region="body">
      <div className={styles.detailedRequestBeat} data-beat="detailed-request">
        <figure className={styles.evidenceFirst} data-role="evidence">
          <img
            src={c.evidence.repetition.src}
            alt={c.evidence.repetition.alt}
            width={c.evidence.repetition.width}
            height={c.evidence.repetition.height}
          />
        </figure>

        <section className={styles.beatKeyMoment} data-beat="key-moment">
          <p className={styles.sectionHeading} data-motion="fade" data-role="label">
            {c.headings.theRequest}
          </p>
          <p
            className={styles.keyMoment}
            data-motion="rise"
            data-motion-delay="1"
            data-role="display"
          >
            {c.detailed.request}
          </p>
        </section>
      </div>

      <div className={styles.detailedWhyBeat} data-beat="detailed-why">
        <section className={styles.beatWhy} data-beat="why-matters">
          <p className={styles.sectionHeading} data-motion="fade" data-role="label">
            {c.headings.whyItMatters}
          </p>
          <p
            className={styles.whyItMatters}
            data-motion="rise"
            data-motion-delay="1"
            data-role="display"
          >
            {c.detailed.whyItMatters}
          </p>
        </section>

        <figure className={styles.evidenceSecond} data-role="evidence">
          <img
            src={c.evidence.mosquitoes.src}
            alt={c.evidence.mosquitoes.alt}
            width={c.evidence.mosquitoes.width}
            height={c.evidence.mosquitoes.height}
          />
        </figure>
      </div>

      <section className={styles.beatSolution} data-beat="solution">
        <p className={styles.sectionHeading} data-motion="fade" data-role="label">
          {c.headings.myProposal}
        </p>
        <p
          className={styles.interventionHeadline}
          data-motion="rise"
          data-motion-delay="1"
          data-role="display"
        >
          {c.detailed.proposal.headline}
        </p>
        <p
          className={styles.interventionBody}
          data-motion="fade"
          data-motion-delay="1"
          data-role="body"
        >
          {c.detailed.proposal.body}
        </p>
      </section>

      <section className={styles.beatCheckNext} data-beat="check-next">
        <p className={styles.sectionHeading} data-motion="fade" data-role="label">
          {c.headings.whatIdCheckNext}
        </p>
        <ol className={styles.checkNext} data-motion="fade" data-motion-delay="1" data-role="body">
          {c.detailed.checkNext.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>

      <section className={styles.beatConclusion} data-beat="conclusion">
        <p
          className={styles.conclusion}
          data-motion="rise"
          data-motion-closing="true"
          data-role="display"
        >
          {c.detailed.conclusion}
        </p>
      </section>

      <section className={styles.beatStatus} data-beat="status">
        <p className={styles.sectionHeading} data-role="label">
          {c.headings.status}
        </p>
        <p className={styles.status} data-role="metadata">
          {c.detailed.status}
        </p>
      </section>
    </div>
  );
}

function ModeBody({ mode }: { mode: ReadingMode }) {
  return mode === "tldr" ? <TldrBody /> : <DetailedBody />;
}

export function SkeletonBody() {
  const [activeMode, setActiveMode] = useState<ReadingMode>("tldr");
  const [displayMode, setDisplayMode] = useState<ReadingMode>("tldr");
  const [bodyPhase, setBodyPhase] = useState<BodyPhase>("idle");
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  const isTransitioning = useRef(false);
  const prefersReduced = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const exitTimer = useRef<number | null>(null);
  const finishTimer = useRef<number | null>(null);

  const inactiveMode: ReadingMode = displayMode === "tldr" ? "detailed" : "tldr";

  const clearTimers = useCallback(() => {
    if (exitTimer.current !== null) {
      window.clearTimeout(exitTimer.current);
      exitTimer.current = null;
    }
    if (finishTimer.current !== null) {
      window.clearTimeout(finishTimer.current);
      finishTimer.current = null;
    }
  }, []);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const requestMode = useCallback(
    (next: ReadingMode) => {
      if (next === activeMode && !isTransitioning.current) return;
      if (isTransitioning.current) return;

      setActiveMode(next);

      if (prefersReduced.current) {
        setDisplayMode(next);
        return;
      }

      const currentHeight = viewportRef.current?.getBoundingClientRect().height ?? 0;
      const nextHeight = measureRef.current?.getBoundingClientRect().height ?? currentHeight;

      isTransitioning.current = true;
      clearTimers();

      setViewportHeight(currentHeight);
      setBodyPhase("exit");

      window.requestAnimationFrame(() => {
        setViewportHeight(nextHeight);
      });

      exitTimer.current = window.setTimeout(() => {
        setDisplayMode(next);
        setBodyPhase("enter-pending");

        window.requestAnimationFrame(() => {
          setBodyPhase("enter");
        });

        exitTimer.current = null;
      }, BODY_OUT_MS);

      finishTimer.current = window.setTimeout(() => {
        setViewportHeight(null);
        setBodyPhase("idle");
        isTransitioning.current = false;
        finishTimer.current = null;
      }, MODE_TRANSITION_MS);
    },
    [activeMode, clearTimers],
  );

  return (
    <div className={styles.readingModeShell} data-mode={activeMode} data-region="reading-mode">
      <div className={styles.toggle}>
        <div
          className={styles.toggleTrack}
          role="group"
          aria-label="Case study reading mode"
          data-mode={activeMode}
        >
          <span className={styles.toggleCapsule} aria-hidden="true" />
          <button
            type="button"
            className={styles.toggleButton}
            aria-pressed={activeMode === "tldr"}
            onClick={() => requestMode("tldr")}
          >
            {c.toggle.tldr}
          </button>
          <button
            type="button"
            className={styles.toggleButton}
            aria-pressed={activeMode === "detailed"}
            onClick={() => requestMode("detailed")}
          >
            {c.toggle.detailed}
          </button>
        </div>
      </div>

      <div
        className={styles.bodyViewport}
        ref={viewportRef}
        data-height-anim={viewportHeight !== null ? "true" : undefined}
        style={viewportHeight !== null ? { height: `${viewportHeight}px` } : undefined}
      >
        <div className={styles.bodySurface} data-phase={bodyPhase}>
          <ModeBody mode={displayMode} />
        </div>
      </div>

      <div className={styles.bodyMeasure} ref={measureRef} aria-hidden="true">
        <ModeBody mode={inactiveMode} />
      </div>
    </div>
  );
}
