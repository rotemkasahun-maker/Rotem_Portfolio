import { SiteHeader } from "@/components/site-header";

export default function TinyTool() {
  return (
    <main className="golda-work-page golda-tiny-page">
      <div className="golda-header-shell"><SiteHeader /></div>

      <section className="tiny-case-opening" aria-labelledby="tiny-tool-title">
        <div className="tiny-case-label"><p>Tiny Tool</p></div>
        <div className="tiny-case-story">
          <h1 id="tiny-tool-title"><span className="motion-headline-line">Wait — who was I</span><span className="motion-headline-line">talking to again?</span></h1>
          <p>I posted the same idea for a family-focused project in a few Facebook groups.</p>
          <p>A lot of people reached out. Some commented on the posts, some messaged me on Messenger, and some conversations moved to WhatsApp.</p>
          <p>Then I had a new problem:<br />I couldn’t remember who I was talking to or what she’d told me.</p>
          <p className="tiny-case-resolution">So I came up with a very specific mini CRM.</p>
        </div>
      </section>

      <section className="tiny-case-tool" aria-labelledby="tiny-tool-label">
        <p className="tiny-section-label" id="tiny-tool-label">The Tool</p>
        <img
          className="tiny-main-product"
          src="/tiny-tool/crm-people-desktop.png"
          alt="Tiny Tool People CRM view showing people, sources, conversations and reminders"
          width={1075}
          height={478}
          priority
        />
      </section>

      <section className="tiny-case-flow" aria-labelledby="tiny-flow-label">
        <p className="tiny-section-label" id="tiny-flow-label">How it works (in simple words)</p>
        <ol className="tiny-flow-list">
          <li>Connect the sources</li>
          <li>Pull the conversations together</li>
          <li>Match them to people</li>
          <li>Remember the context</li>
          <li>Know what happens next</li>
        </ol>
      </section>

      <section className="tiny-case-thread" aria-labelledby="tiny-thread-label">
        <p className="tiny-section-label" id="tiny-thread-label">One person, one thread</p>
        <div className="tiny-thread-products">
          <img
            className="tiny-detail-product"
            src="/tiny-tool/crm-dana-thread.png"
            alt="Dana Levi conversation detail with Facebook, Messenger and WhatsApp journey"
            width={635}
            height={284}
          />
          <img
            className="tiny-mobile-product"
            src="/tiny-tool/crm-mobile-people.png"
            alt="Tiny Tool mobile People view"
            width={214}
            height={435}
          />
        </div>
      </section>

      <footer className="tiny-tool-footer">studio golda by ROTKA</footer>
    </main>
  );
}
