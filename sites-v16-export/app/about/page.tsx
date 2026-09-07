import { SiteHeader } from "@/components/site-header";

export default function About() {
  return <main className="golda-work-page golda-about-page">
    <div className="golda-header-shell"><SiteHeader /></div>
    <section className="about-opening"><p>Hi, I’m Rotem Kasahun,</p><h1><span className="motion-headline-line">and OMG thank</span><span className="motion-headline-line">God for AI!</span></h1><div className="about-body"><p>So listen, I don’t know how to code (yet?), and I’m not a visual designer.</p><p>I’m mostly self-taught, perpetually curious, and currently spending a ridiculous amount of time exploring what I can make with AI.</p><p>I love finding problems, pulling them apart, and figuring out how things could work better.</p><p>AI finally lets me go from:</p><p className="about-shift">Someone should make this<br /><span>to</span><br />Fine, I’ll do it myself.</p></div></section>
    <section className="about-principles"><div><span>Behavior</span><p>I pay attention to what people actually do,<br />not what a system expects them to do.</p></div><div><span>Systems</span><p>I like turning messy inputs, exceptions<br />and repetitive work into something<br />that can take care of itself.</p></div><div><span>Environment</span><p>Sometimes the interface isn't the problem.<br />Sometimes it's where the lettuce is.</p></div></section>
    <footer className="about-footer"><div><span>Focus</span><p>Product / UX</p></div><div><span>How I work</span><p>Research / Systems / AI-assisted building</p></div><div><span>Currently</span><p>Building products, testing ideas, learning by making</p></div></footer>
  </main>;
}
