import type { ReactNode } from "react";

type CaseStudyShellProps = {
  children: ReactNode;
  className?: string;
};

export function CaseStudyShell({ children, className = "" }: CaseStudyShellProps) {
  return <main className={`golda-work-page case-study-shell ${className}`.trim()}>{children}</main>;
}

export function CaseOpening({ children }: { children: ReactNode }) {
  return <section className="case106-opening">{children}</section>;
}

export function CaseLabel({ children, id }: { children: ReactNode; id?: string }) {
  return <p id={id} className="case106-label">{children}</p>;
}

export function ProcessStrip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <ol className={`case106-process ${className}`.trim()}>{children}</ol>;
}
