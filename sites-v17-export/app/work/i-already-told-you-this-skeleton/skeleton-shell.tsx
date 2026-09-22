import { case106Content as c } from "@/content/case-106";
import type { Metadata } from "next";
import { CompositionNav } from "./composition-nav";
import { SkeletonBody } from "./skeleton-body";
import styles from "./skeleton.module.css";

export type CompositionExplore = "a" | "b" | "c";

export const skeletonMetadata: Metadata = { title: c.pageTitle };

type SkeletonShellProps = {
  explore?: CompositionExplore;
};

export function SkeletonShell({ explore }: SkeletonShellProps) {
  return (
    <main className={styles.page} data-explore={explore}>
      <div className={styles.contentField} data-region="content">
        {explore ? <CompositionNav active={explore} /> : null}
        <header className={styles.opening} data-region="opening">
          <p className={styles.metadata} data-role="metadata">
            {c.shared.metadata}
          </p>
          <h1 className={styles.title} data-role="display">
            {c.shared.title}
          </h1>
          {c.shared.hero.map((line) => (
            <p key={line} className={styles.hero} data-role="body">
              {line}
            </p>
          ))}
        </header>

        <SkeletonBody />
      </div>
    </main>
  );
}
