import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import styles from "./experience.module.css";
import { ExperienceMotion } from "./experience-motion";

export const metadata: Metadata = { 
  title: "I Already Told You This — Rotem Kasahun" 
};

const checksBeforeBuilding = [
  "Which fields are actually mandatory?",
  "At what point does a WhatsApp message become an official 106 request?",
  "What information can the existing WhatsApp and service-management setup already receive automatically?",
  "Which requests should always go to a human?"
];

const checksIfPiloted = [
  "Does it reduce the number of messages needed to submit a request?",
  "Do more residents complete the flow?",
  "Can issue and location be extracted accurately enough?"
];

export default function IAlreadyToldYouThisExperience() {
  return (
    <main className={styles.experience}>
      <ExperienceMotion />
      <div className={styles.headerShell}>
        <SiteHeader />
      </div>

      {/* Opening — establish the situation */}
      <section className={styles.opening}>
        <div className={styles.openingLabel}>
          <span>A real-life annoyance / service design / 2026</span>
        </div>
        <div className={styles.openingStage}>
          <h1 className={styles.title}>
            <span className="motion-headline-line">I Already</span>
            <span className="motion-headline-line">Told You</span>
            <span className="motion-headline-line">This</span>
          </h1>
          <div className={styles.hero}>
            <p className={styles.heroCopy}>I told the city what was wrong.</p>
            <p className={styles.heroCopy}>I told them where it was.</p>
            <p className={styles.heroCopy}>Then their WhatsApp asked me to do it again.</p>
          </div>
        </div>
      </section>

      {/* The Moment — first evidence */}
      <section className={styles.moment}>
        <div className={styles.momentCopy}>
          <p className={styles.beat}>The moment</p>
          <h2 className={styles.statement}>
            <span className="motion-headline-line">I had already</span>
            <span className="motion-headline-line">given them</span>
            <span className="motion-headline-line">the information.</span>
          </h2>
        </div>
        
        <div className={styles.evidenceStage}>
          <figure className={styles.evidence}>
            <img 
              src="/106/whatsapp-mosquitoes.jpg" 
              alt="WhatsApp exchange showing resident report followed by generic automated intake"
              width={691}
              height={1536}
            />
          </figure>
          
          <div className={styles.annotations}>
            <div className={styles.annotationItem}>
              <span>Issue</span>
              <p>Mosquitoes</p>
            </div>
            <div className={styles.annotationItem}>
              <span>Request</span>
              <p>Pest control</p>
            </div>
            <div className={styles.annotationItem}>
              <span>Location</span>
              <p>Yad Labanim dog park</p>
            </div>
          </div>
        </div>

        <div className={styles.momentContext}>
          <p>I used WhatsApp the way I normally would: I wrote what I needed and where the problem was.</p>
          <p>The automated reply then asked me to describe the issue again.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className={styles.why}>
        <div className={styles.whyStatement}>
          <p className={styles.beat}>Why it matters</p>
          <h2 className={styles.keyline}>
            <span className="motion-headline-line">The second time</span>
            <span className="motion-headline-line">it happened,</span>
            <span className="motion-headline-line">I just didn't continue.</span>
          </h2>
        </div>

        <div className={styles.whyEvidence}>
          <figure className={styles.secondEvidence}>
            <img 
              src="/106/whatsapp-repetition.jpg" 
              alt="A second observed interaction showing the same repetition pattern"
              width={691}
              height={1536}
            />
            <figcaption>A second observed interaction</figcaption>
          </figure>
        </div>

        <div className={styles.whyReasoning}>
          <p>That made me wonder what happens to reports that stop at this point.</p>
          <p>If a 106 request is only created after the automated intake is completed, repetition like this could mean some reports never make it into the system.</p>
          <p className={styles.caveat}>I don't know whether that's how Petah Tikva's backend works. It's the first thing I'd want to verify.</p>
        </div>
      </section>

      {/* The Intervention */}
      <section className={styles.intervention}>
        <div className={styles.interventionIntro}>
          <p className={styles.beat}>The intervention</p>
          <h2 className={styles.interventionTitle}>
            <span className="motion-headline-line">Add a small AI</span>
            <span className="motion-headline-line">interpretation layer</span>
            <span className="motion-headline-line">before the intake flow.</span>
          </h2>
        </div>

        <div className={styles.interventionFlow}>
          <div className={styles.flowMessage}>
            <span className={styles.flowLabel}>Resident message:</span>
            <div className={styles.messageExample} dir="rtl" lang="he">
              נשמח להדברת יתושים בגינת כלבים יד לבנים
            </div>
          </div>

          <div className={styles.flowInterpret}>
            <span className={styles.flowLabel}>Interpretation layer</span>
            <p>The layer would read the resident's message, extract the information already there, map it to the municipality's required fields, and check what is still missing.</p>
            <p>If something is missing, ask only for that. If everything required is already there, move the request forward.</p>
          </div>

          <div className={styles.flowExtract}>
            <span className={styles.flowLabel}>Extracted information</span>
            <dl className={styles.extraction}>
              <div>
                <dt>Issue</dt>
                <dd>Mosquitoes</dd>
              </div>
              <div>
                <dt>Request</dt>
                <dd>Pest control</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Yad Labanim dog park</dd>
              </div>
              <div>
                <dt>Confidence</dt>
                <dd>High</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* What I'd Check Next */}
      <section className={styles.checks}>
        <p className={styles.beat}>What I'd check next</p>
        
        <div className={styles.checkGroups}>
          <div className={styles.checkGroup}>
            <h3>Before building it:</h3>
            <ol>
              {checksBeforeBuilding.map((check, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {check}
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.checkGroup}>
            <h3>If piloted:</h3>
            <ol>
              {checksIfPiloted.map((check, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {check}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className={styles.checksNote}>
          I'd keep the extraction constrained: predefined fields, no guessing, and human fallback when confidence is low.
        </p>
      </section>

      {/* Ending */}
      <section className={styles.ending}>
        <div className={styles.conclusion}>
          <p className={styles.finalStatement}>
            <span className="motion-headline-line">People shouldn't have</span>
            <span className="motion-headline-line">to repeat information</span>
            <span className="motion-headline-line">they've already given</span>
            <span className="motion-headline-line">a service.</span>
          </p>
        </div>

        <div className={styles.status}>
          <p className={styles.beat}>Status</p>
          <p className={styles.statusText}>
            Unsolicited service improvement proposal · Sent to the Municipality of Petah Tikva for consideration · Not commissioned, implemented or validated
          </p>
        </div>

        <footer className={styles.footer}>
          studio golda by ROTKA
        </footer>
      </section>
    </main>
  );
}
