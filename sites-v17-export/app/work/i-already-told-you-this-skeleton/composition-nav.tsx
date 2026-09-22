import Link from "next/link";
import styles from "./composition-nav.module.css";

const BASE = "/work/i-already-told-you-this-skeleton";

type CompositionNavProps = {
  active: "index" | "baseline" | "a" | "b" | "c";
};

const links = [
  { id: "baseline" as const, href: BASE, label: "Baseline" },
  { id: "a" as const, href: `${BASE}/explore/a`, label: "A" },
  { id: "b" as const, href: `${BASE}/explore/b`, label: "B" },
  { id: "c" as const, href: `${BASE}/explore/c`, label: "C" },
];

export function CompositionNav({ active }: CompositionNavProps) {
  return (
    <nav className={styles.nav} aria-label="Composition exploration">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={active === link.id ? styles.active : undefined}
          aria-current={active === link.id ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
