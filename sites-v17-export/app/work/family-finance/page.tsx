import Link from "next/link";

type DecisionProps = { label: string; title: string; children: React.ReactNode };

function Decision({ label, title, children }: DecisionProps) {
  return (
    <details className="ff-decision">
      <summary>
        <span>
          <span className="ff-decision-label">{label}</span>
          <span className="ff-decision-title">{title}</span>
        </span>
        <span aria-hidden="true" className="ff-decision-mark">+</span>
      </summary>
      <div className="ff-decision-body">{children}</div>
    </details>
  );
}

function NotificationProof({ children, note, title = "Family Finance", time = "now" }: { children: React.ReactNode; note: string; title?: string; time?: string }) {
  return (
    <div className="ff-proof-wrap">
      <div className="ff-proof" aria-label={note}>
        <div className="ff-proof-top"><span>{title}</span><span>{time}</span></div>
        {children}
      </div>
      <p className="ff-proof-note">{note}</p>
    </div>
  );
}

export default function FamilyFinance() {
  return (
    <main className="ff-page">
      <header className="ff-header">
        <Link className="ff-brand" href="/">studio golda by ROTKA</Link>
        <p className="ff-role">UX RESEARCH &amp; PRODUCT THINKING</p>
        <nav aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/about">About</Link><a href="mailto:hello@rotemkasahun.com">Contact</a></nav>
      </header>

      <section className="ff-opening">
        <div className="ff-opening-copy">
          <p className="ff-kicker">01 / Family Finance</p>
          <h1><span className="motion-headline-line">I wanted to know</span><span className="motion-headline-line">where our money</span><span className="motion-headline-line">was going.</span></h1>
          <p className="ff-collect">So I started collecting things.</p>
        </div>
        <div className="ff-evidence-stage" aria-label="Financial source evidence">
          <img className="ff-evidence ff-bank" src="/evidence/bank-june.png" alt="Bank statement source evidence" />
          <img className="ff-evidence ff-receipt" src="/evidence/receipt.png" alt="Receipt source evidence" />
        </div>
        <div className="ff-problem">
          <p>The problem wasn’t finding the information,</p>
          <h2><span className="motion-headline-line">It was me.</span></h2>
        </div>
        <p className="ff-bridge">I didn’t want another system to manage.<br />I wanted something to <strong>manage it for me.</strong></p>
      </section>

      <section className="ff-beat ff-everything">
        <div className="ff-two-col">
          <div><p className="ff-kicker">02 / Everything in one place</p><h2>Now everything<br />was in one place.</h2></div>
          <div className="ff-unresolved" aria-label="Real Family Finance product evidence not available in this runtime" />
        </div>
        <p className="ff-plain-line">But the system still expected me to do the boring parts.</p>
        <div className="ff-ticker" aria-label="Tasks the system still expected from the user"><div>Upload receipt <i>·</i> Review transaction <i>·</i> Confirm category <i>·</i> Match receipt <i>·</i> Add missing document <i>·</i> Review exception</div></div>
        <p className="ff-oh">Oh hell no.</p>
        <div className="ff-decisions"><Decision label="UX / PRODUCT DECISION" title="A transaction doesn’t tell the whole story"><p>A payment and its reimbursement can describe one household expense, not two unrelated money movements.</p><p>The product needs to preserve household meaning instead of treating every transaction as the whole story.</p></Decision></div>
      </section>

      <section className="ff-beat"><div className="ff-two-col"><div><p className="ff-kicker">03 / Automation</p><h2>So I kept<br />giving it more<br />to do.</h2></div><div><NotificationProof time="today" note="Illustrative external notification state"><strong>Monthly statement still missing</strong><p>The credit-card statement is expected now. Add it when it arrives.</p><span className="ff-action">Add document</span></NotificationProof><div className="ff-decisions"><Decision label="UX / PRODUCT DECISION" title="Expected monthly document"><p>Some inputs still arrive manually, but their expected timing is known.</p><p>Surface one clear action only when the expected monthly document is actually missing.</p></Decision></div></div></div></section>

      <section className="ff-beat"><div className="ff-two-col"><div><p className="ff-kicker">04 / Ask only when needed</p><h2>When it really<br />does need me,<br />it can ask.</h2><div className="ff-decisions"><Decision label="UX / PRODUCT DECISION" title="Timing changes friction"><p>Too early can interrupt before a digital receipt arrives. Too late means the paper receipt may already be buried in a bag.</p><p>The 30-second window keeps the ask close to checkout while the purchase is still fresh.</p></Decision><Decision label="UX / PRODUCT DECISION" title="Don’t ask when you already know enough"><p>Exact product identity and useful classification are different levels of certainty.</p><p>Ask only when the missing detail would change the useful category.</p></Decision></div></div><NotificationProof note="30 sec — likely still at checkout · illustrative notification state"><strong>Purchase detected · Rami Levy</strong><p>No receipt received yet.</p><span className="ff-action">Photograph receipt</span></NotificationProof></div></section>

      <section className="ff-beat"><p className="ff-kicker">05 / Item-level understanding</p><p className="ff-major-line">Three receipts.<br />One understanding.</p><p className="ff-house">I really need to stop buying random stuff for the house.</p></section>

      <section className="ff-beat"><div className="ff-two-col"><div><p className="ff-kicker">06 / Insights</p><h2>Suddenly the data<br />could tell me<br />other things as well.</h2></div><div className="ff-unresolved" aria-label="Real Family Finance Insights evidence not available in this runtime" /></div></section>

      <section className="ff-beat"><div className="ff-two-col"><div><p className="ff-kicker">07 / Motivation</p><p className="ff-later-text">Making it easier helped. But I also wanted a reason to keep going,</p><p className="ff-later-text">because making it easier didn’t automatically make it something I’d want to stick with.</p><div className="ff-decisions"><Decision label="UX / PRODUCT DECISION" title="Make unavoidable work worth doing"><p>Some manual contribution is still unavoidable while the product is learning.</p><p>Reward only the work the system genuinely still needs, tying it to a meaningful Madrid goal rather than generic gamification.</p></Decision></div></div><div className="ff-unresolved" aria-label="Real Family Finance motivation evidence not available in this runtime" /></div></section>

      <section className="ff-beat ff-status"><p className="ff-kicker">08 / Current state</p><p>It’s currently in development, and I’m still refining it as we use it.</p><div className="ff-decisions"><Decision label="UX / PRODUCT DECISION" title="Don’t promise a balance you can’t yet trust"><p>Correct math and complete data are different things.</p><p>Balance and Safe-to-Spend stay out until reconciliation and posted / pending / unknown semantics are reliable enough to support them.</p></Decision></div></section>

      <section className="ff-beat ff-ending"><div><p className="ff-kicker">09 / Ending</p><h2>The story stops.<br />The product continues.</h2></div></section>
      <footer className="ff-footer"><span>studio golda by ROTKA</span><Link href="/#work">Back to selected work ↑</Link></footer>
    </main>
  );
}
