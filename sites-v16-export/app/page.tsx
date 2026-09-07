import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const projects = [
  ["01", "Family Finance", "/work/family-finance"],
  ["02", "Tiny Tool", "/work/tiny-tool"],
  ["03", "Building This Portfolio", "/work/building-this-portfolio"],
] as const;

export default function Home() {
  return <main className="golda-home">
    <section className="golda-hero">
      <SiteHeader />
      <img className="golda-lettuce" src="/home-lettuce-source.png" alt="Lettuce" />
      <div className="golda-statement">
        <h1><span className="motion-headline-line">I kept forgetting</span><span className="motion-headline-line">the lettuce</span></h1>
        <p className="golda-display-small">In my fridge.</p>
        <h2><span className="motion-headline-line">The problem wasn’t me.</span></h2>
        <p className="golda-display-small">It was where I put it.</p>
      </div>
      <p className="golda-intro">I design around the small frictions<br />of daily life — where behavior,<br />systems, and environment quietly<br />shape what happens next.</p>
      <ol className="golda-index" id="work">
        {projects.map(([number, name, href]) => <li key={number}><Link href={href}><span>{number}</span><b>{name}</b><i aria-hidden="true">→</i></Link></li>)}
      </ol>
      <div className="golda-facts"><div><span>Focus</span><p>Product / UX</p></div><div><span>Tools</span><p>AI, Research, Design</p></div><div><span>Available for</span><p>Opportunities</p></div></div>
    </section>
    <section className="golda-shift">
      <div className="golda-shift-copy"><p className="golda-label">The real shift</p><span className="golda-rule-mark" /><h2><span className="motion-headline-line">Out of sight,</span><span className="motion-headline-line">out of mind.</span></h2><p>The vegetables were stored<br />where I couldn’t see them.<br />Moving them into view made<br />them easier to remember —<br />and easier to use.</p></div>
      <div className="golda-fridge golda-before"><p><span>Before</span>Hidden in the drawer</p><img src="/home-fridge-before-source.png" alt="Vegetables hidden in a fridge drawer" /></div>
      <div className="golda-arrow" aria-hidden="true">→</div>
      <div className="golda-fridge golda-after"><p><span>After</span>Visible where I see them</p><img src="/home-fridge-after-source.png" alt="Vegetables visible on refrigerator shelves" /></div>
      <div className="golda-shift-ending"><span aria-hidden="true">↗</span><p>When the environment works with me,<br />my behavior changes.<br />That’s where better systems start.</p></div>
    </section>
  </main>;
}
