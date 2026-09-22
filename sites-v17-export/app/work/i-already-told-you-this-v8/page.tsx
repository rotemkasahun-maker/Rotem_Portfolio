import { SiteHeader } from "@/components/site-header";
import styles from "./v8.module.css";

export default function IAlreadyToldYouThisV8() {
  return (
    <div className={styles.page}>
      <div className={styles.headerShell}>
        <SiteHeader />
      </div>

      <main className={styles.main}>
        {/* A. OPENING — Asymmetric art-directed composition */}
        <section className={styles.opening}>
          <p className={styles.openingIdentifier}>I Already Told You This</p>
          <p className={styles.openingMeta}>A REAL-LIFE ANNOYANCE / SERVICE DESIGN / 2026</p>
          <h1 className={styles.openingNarrative}>
            <span className={styles.openingLead}>I told the city what was wrong.</span>
            <span className={styles.openingMid}>I told them where it was.</span>
            <span className={styles.openingTurn}>Then their WhatsApp asked me to do it again.</span>
          </h1>
        </section>

        {/* B. THE MOMENT — Evidence object with annotations */}
        <section className={styles.moment}>
          <h2 className={styles.momentHeadline}>I had already given them the problem and the location.</h2>
          
          <div className={styles.screenshotFrame}>
            <img 
              src="/106/whatsapp-mosquitoes.jpg" 
              alt="WhatsApp exchange in Hebrew showing a report about mosquitoes at Yad Labanim dog park, followed by an automated request asking for the problem type again"
            />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.annotations}>
              {/* ISSUE annotation - coordinates to be positioned during visual inspection */}
              <line x1="28" y1="24" x2="12" y2="20" />
              <text x="10" y="19" fontSize="2.4">ISSUE</text>
              
              {/* LOCATION annotation - coordinates to be positioned during visual inspection */}
              <line x1="58" y1="52" x2="78" y2="48" />
              <text x="80" y="47" fontSize="2.4">LOCATION</text>
            </svg>
          </div>
        </section>

        {/* C. WHY IT MATTERS — Quiet behavioral beat */}
        <section className={styles.why}>
          <p className={styles.whyStatement}>
            The second time it happened, I just didn&rsquo;t continue.
          </p>
          <p className={styles.whyCopy}>
            The observed flow raises a question about what happens to reports that stop at this point. 
            I don&rsquo;t know whether this is how Petah Tikva&rsquo;s backend works; that is the first thing I&rsquo;d want to verify.
          </p>
        </section>

        {/* D. CURRENT → BETTER — One editorial comparison with visual density difference */}
        <section className={styles.comparisonSection}>
          <div className={styles.comparison}>
            <div className={styles.pathCurrent}>
              <h3>CURRENT</h3>
              <div className={styles.step}>Resident writes problem + location</div>
              <div className={styles.step}>Automated flow receives message</div>
              <div className={styles.step}>System asks for problem again</div>
              <div className={styles.step}>System asks for location again</div>
            </div>
            
            <div className={styles.pathBetter}>
              <h3>BETTER</h3>
              <div className={styles.step}>Resident writes problem + location</div>
              <div className={styles.step}>Interpretation layer extracts existing information</div>
              <div className={styles.step}>System checks required fields</div>
              <div className={styles.step}>Determines what is missing</div>
              <div className={styles.step}>Asks only for missing information</div>
              <div className={styles.step}>If complete, moves forward</div>
            </div>
          </div>
        </section>

        {/* E. INTERVENTION — Spatial system diagram */}
        <section className={styles.intervention}>
          <h2 className={styles.interventionHeadline}>
            Add a small AI interpretation layer before the intake flow.
          </h2>
          <p className={styles.interventionCopy}>
            The layer would read the resident&rsquo;s message, extract the information already there, 
            map it to the municipality&rsquo;s required fields, and check what is still missing. 
            If something is missing, ask only for that. If everything required is already there, 
            move the request forward.
          </p>

          <div className={styles.interventionSystem}>
            <div className={styles.systemNode}>
              <strong>MESSAGE</strong>
              Natural-language resident input
            </div>
            <div className={styles.systemArrow}>→</div>
            <div className={styles.systemNode}>
              <strong>READ</strong>
              Extract what is already there
            </div>
            <div className={styles.systemArrow}>→</div>
            <div className={styles.systemNode}>
              <strong>MAP</strong>
              Classify to required fields
            </div>
            <div className={styles.systemArrow}>→</div>
            <div className={styles.systemNode}>
              <strong>CHECK</strong>
              Determine what is missing
            </div>
            <div className={styles.systemArrow}>→</div>
            <div className={styles.systemNode}>
              <strong>ASK</strong>
              Request only missing info
            </div>
            <div className={styles.systemArrow}>→</div>
            <div className={styles.systemNode}>
              <strong>FORWARD</strong>
              If complete, move request
            </div>
          </div>
        </section>

        {/* F. EVIDENCE REPRISE — Asymmetric grid overlap */}
        <section className={styles.evidenceReprise}>
          <figure className={styles.screenshotAlpha}>
            <img 
              src="/106/whatsapp-mosquitoes.jpg" 
              alt="First observed WhatsApp exchange about mosquitoes"
            />
          </figure>
          <figure className={styles.screenshotBeta}>
            <img 
              src="/106/whatsapp-repetition.jpg" 
              alt="Second observed WhatsApp exchange showing repeated intake request"
            />
          </figure>
        </section>

        {/* G. WHAT I'D CHECK NEXT — Compact analytical list */}
        <section className={styles.checkNext}>
          <h2 className={styles.checkNextHeadline}>What I&rsquo;d check next</h2>
          <ol className={styles.checkNextList}>
            <li>
              <span>What fields are mandatory?</span>
            </li>
            <li>
              <span>At what point is an official request created?</span>
            </li>
            <li>
              <span>What can the current setup receive automatically?</span>
            </li>
            <li>
              <span>Which fields still require human handling?</span>
            </li>
            <li>
              <span>Can known sender details be reused safely if policy/privacy permits?</span>
            </li>
            <li>
              <span>Can landmarks or parks be resolved reliably?</span>
            </li>
            <li>
              <span>What validation would be needed for message extraction and completion?</span>
            </li>
          </ol>
        </section>

        {/* H. CONCLUSION — Closing statement */}
        <section className={styles.conclusion}>
          <p className={styles.conclusionStatement}>
            People shouldn&rsquo;t have to repeat information they&rsquo;ve already given a service.
          </p>
          <p className={styles.conclusionStatus}>
            Unsolicited service improvement proposal · Sent to the Municipality of Petah Tikva for consideration · 
            Not commissioned, implemented or validated
          </p>
        </section>
      </main>
    </div>
  );
}
