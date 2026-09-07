import { CaseLabel, CaseOpening, CaseStudyShell, ProcessStrip } from "@/components/case-study";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import styles from "./case-106-refinement.module.css";

export const metadata: Metadata = {
  title: "I Already Told You This — Rotem Kasahun",
};

const currentFlow = [
  "Write issue + location",
  "Generic intake",
  "Repeat issue",
  "Complete the remaining fields",
  "Submit",
];

const betterFlow = [
  "Write issue + location",
  "Use what’s already there",
  "Ask only for what’s missing",
  "Submit",
];

const checksBeforeBuilding = [
  "Which fields are actually mandatory?",
  "At what point does a WhatsApp message become an official 106 request?",
  "What information can the existing WhatsApp and service-management setup already receive automatically?",
  "Which requests should always go to a human?",
];

const checksIfPiloted = [
  "Does it reduce the number of messages needed to submit a request?",
  "Do more residents complete the flow?",
  "Can issue and location be extracted accurately enough?",
];

export default function IAlreadyToldYouThis() {
  return (
    <CaseStudyShell className={`case-106 ${styles.refined}`}>
      <div className="golda-header-shell"><SiteHeader /></div>

      <CaseOpening>
        <div className="case106-opening-copy">
          <CaseLabel>A real-life annoyance / service design / 2026</CaseLabel>
          <h1><span className="motion-headline-line">I Already Told You This</span></h1>
          <p className="case106-intro">I told the city what was wrong.</p>
          <p className="case106-intro">I told them where it was.</p>
          <p className="case106-intro">Then their WhatsApp asked me to do it again.</p>
          <p className="case106-meta">Observed in use · Unsolicited service improvement proposal · Not commissioned by the municipality</p>
        </div>
        <figure className="case106-hero-evidence">
          <img src="/106/whatsapp-mosquitoes.jpg" alt="WhatsApp exchange in Hebrew where a report about mosquitoes at the Yad Labanim dog park is followed by a generic intake request" width={691} height={1536} />
          <figcaption>Observed municipal 106 WhatsApp intake</figcaption>
        </figure>
      </CaseOpening>

      <section className="case106-moment case106-section" aria-labelledby="moment-title">
        <div className="case106-heading"><CaseLabel id="moment-title">The moment</CaseLabel></div>
        <div className="case106-moment-grid">
          <div className="case106-copy"><p>I had already written the problem and the location.</p><p>I used WhatsApp the way I normally would: I wrote what I needed and where the problem was.</p><p>The automated reply then asked me to describe the issue again.</p></div>
          <dl className="case106-annotations"><div><dt>Issue</dt><dd>Mosquitoes</dd></div><div><dt>Request</dt><dd>Pest control</dd></div><div><dt>Location</dt><dd>Yad Labanim dog park</dd></div></dl>
        </div>
      </section>

      <section className="case106-why case106-section" aria-labelledby="why-title">
        <div className="case106-heading"><CaseLabel id="why-title">Why it matters</CaseLabel></div>
        <div className="case106-why-layout">
          <figure className="case106-secondary-evidence"><img src="/106/whatsapp-repetition.jpg" alt="WhatsApp exchange in Hebrew showing a detailed resident request followed by a generic automated intake request" width={691} height={1536} /><figcaption>A second observed interaction</figcaption></figure>
          <div className="case106-copy"><p>The second time it happened, I just didn’t continue.</p><p>That made me wonder what happens to reports that stop at this point.</p><p>If a 106 request is only created after the automated intake is completed, repetition like this could mean some reports never make it into the system.</p><p className="case106-caveat">I don’t know whether that’s how Petah Tikva’s backend works. It’s the first thing I’d want to verify.</p></div>
        </div>
      </section>

      <section className="case106-before-after case106-section" aria-labelledby="current-better-title">
        <CaseLabel id="current-better-title">Current → Better</CaseLabel>
        <div className="case106-comparison"><div><h2>Current</h2><ProcessStrip>{currentFlow.map((item) => <li key={item}>{item}</li>)}</ProcessStrip></div><div><h2>Better</h2><ProcessStrip>{betterFlow.map((item) => <li key={item}>{item}</li>)}</ProcessStrip></div></div>
      </section>

      <section className="case106-intervention case106-section" aria-labelledby="intervention-title">
        <div className="case106-heading"><CaseLabel id="intervention-title">The intervention</CaseLabel></div>
        <div className="case106-copy case106-intervention-copy"><p>Use the message before asking for it again.</p><p>I wouldn’t replace the 106 flow with an AI chatbot.</p><p>I’d add a narrow interpretation step before the existing intake: extract what the resident has already said, check which required fields are still missing, and ask only for those.</p></div>

        <div className="case106-example" aria-labelledby="example-title">
          <CaseLabel id="example-title">Resident message:</CaseLabel>
          <div className="case106-example-grid">
            <div className="case106-message" dir="rtl" lang="he">נשמח להדברת יתושים בגינת כלבים יד לבנים</div>
            <dl className="case106-extraction"><div><dt>Issue</dt><dd>Mosquitoes</dd></div><div><dt>Request</dt><dd>Pest control</dd></div><div><dt>Location</dt><dd>Yad Labanim dog park</dd></div><div><dt>Category</dt><dd>Pest control</dd></div><div><dt>Confidence</dt><dd>High</dd></div></dl>
          </div>
          <div className="case106-respond"><p>Instead of asking for the problem again:</p><blockquote>I understood that you’re reporting mosquitoes at the Yad Labanim dog park. I only need your full name to complete the request.</blockquote><p>If the required identity details are already available, the request could simply move forward.</p></div>
        </div>
      </section>

      <section className="case106-validation case106-section" aria-labelledby="checks-title">
        <div className="case106-heading"><CaseLabel id="checks-title">What I’d check next</CaseLabel></div>
        <div className="case106-validation-grid"><div><p>Before building it:</p><ul className="case106-measures">{checksBeforeBuilding.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p>If piloted:</p><ul className="case106-measures">{checksIfPiloted.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
        <p className="case106-note">I’d keep the extraction constrained: predefined fields, no guessing, and human fallback when confidence is low.</p>
      </section>

      <footer className="case106-ending"><div className="case106-status"><CaseLabel>Status</CaseLabel><p>Unsolicited service improvement proposal.</p><p>Not commissioned, implemented or validated by the Municipality of Petah Tikva.</p><p>The proposal was documented and sent to the municipality for consideration.</p></div><div className="case106-final"><p>People shouldn’t have to repeat information they’ve already given a service.</p></div><p className="case106-footer">studio golda by ROTKA</p></footer>
    </CaseStudyShell>
  );
}
