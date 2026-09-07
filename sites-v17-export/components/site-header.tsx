import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="golda-header">
      <Link className="golda-name" href="/">Rotem Kasahun</Link>
      <nav className="golda-nav" aria-label="Primary navigation">
        <Link href="#work">Work</Link><Link href="/about">About</Link><a href="mailto:hello@rotemkasahun.com">Contact</a>
      </nav>
      <p className="golda-role"><span aria-hidden="true" />AI Product Builder &amp; Problem Solver</p>
      <div className="golda-lenses" aria-label="Portfolio lenses"><span>Behavior</span><span>Systems</span><span>Environment</span></div>
    </header>
  );
}
