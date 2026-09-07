import { CaseLabel, CaseOpening, CaseStudyShell, ProcessStrip } from "@/components/case-study";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import styles from "./case-106-refinement.module.css";

export const metadata: Metadata = {
  title: "I Already Told You This — Rotem Kasahun",
};

const currentFlow = [
  "Resident writes issue + location",
  "Generic automated intake message",
  "Resident repeats information",
  "Required fields completed",
  "Request proceeds",
];

const interventionFlow = [
  "Incoming message",
  "Extract issue / location / requested action",
  "Classify municipal category",
  "Check what required information is still missing",
  "Ask only for the missing information",
  "Pass structured data into the existing workflow",
];

const measures = [
  "Request completion rate",
  "Messages required to submit",
  "Time to submission",
  "Category accuracy",
  "Location extraction accuracy",
  "Clarification rate",
  "Human escalation rate",
];

const questions = [
  "At what point does a WhatsApp conversation become an official 106 request?",
  "Which fields are mandatory for each municipal category?",
  "Does the WhatsApp channel already receive identifying information from the resident?",
  "Who currently classifies incoming requests?",
  "How often do residents abandon the automated intake sequence?",
  "Which categories create the most rework for operators?",
  "What APIs or integration capabilities exist between WhatsApp and the municipal service platform?",
  "Which requests must always reach a human?",
];

export default function IAlreadyToldYouThis() {
  return (
    <CaseStudyShell className={`case-106 ${styles.refined}`}>
      <div className="golda-header-shell"><SiteHeader /></div>

      <CaseOpening>
        <div className="case106-opening-copy">
          <CaseLabel>A real-life annoyance / service design / 2026</CaseLabel>
          <h1><span className="motion-headline-line">I Already Told You This</span></h1>
          <p className="case106-intro">A small friction in Petah Tikva’s municipal WhatsApp service revealed a larger service-design problem: the system was collecting information without understanding information residents had already provided.</p>
          <p className="case106-meta">Observed in use · Unsolicited service improvement proposal · Not commissioned by the municipality</p>
        </div>
        <figure className="case106-hero-evidence">
          <img src="/106/whatsapp-mosquitoes.jpg" alt="WhatsApp exchange in Hebrew where a report about mosquitoes at the Yad Labanim dog park is followed by a generic intake request" width={691} height={1536} />
          <figcaption>Observed municipal 106 WhatsApp intake</figcaption>
        </figure>
      </CaseOpening>

      <section className="case106-moment case106-section" aria-labelledby="moment-title">
        <div className="case106-heading"><CaseLabel id="moment-title">The moment</CaseLabel><h2>The information wasn’t missing.<br />It was already in the message.</h2></div>
        <div className="case106-moment-grid">
          <div className="case106-copy"><p>I opened the conversation the way people naturally use WhatsApp: I wrote what I needed and where the problem was.</p><p>The automated response then asked for my full name, address and a description of the issue — including information I had already provided.</p><p className="case106-keyline">The interface treated a complete sentence as unstructured input.</p></div>
          <dl className="case106-annotations"><div><dt>Issue</dt><dd>mosquitoes</dd></div><div><dt>Request</dt><dd>pest control</dd></div><div><dt>Location</dt><dd>Yad Labanim dog park</dd></div></dl>
        </div>
      </section>

      <section className="case106-why case106-section" aria-labelledby="why-title">
        <div className="case106-heading"><CaseLabel id="why-title">Why it matters</CaseLabel><h2>This wasn’t only repetitive UX.<br />It created a point of abandonment.</h2></div>
        <div className="case106-why-layout">
          <figure className="case106-secondary-evidence"><img src="/106/whatsapp-repetition.jpg" alt="WhatsApp exchange in Hebrew showing a detailed resident request followed by a generic automated intake request" width={691} height={1536} /><figcaption>A second observed interaction</figcaption></figure>
          <div className="case106-copy"><p>When the same interaction happened again, I didn’t repeat the request.</p><p>If a municipal request is only created after the resident completes the automated sequence, this kind of friction can create a gap between “a resident reported a problem” and “a service request entered the system.”</p><p className="case106-keyline">A message can exist in the conversation without becoming a case.</p><p className="case106-caveat">This is a hypothesis based on the observed interaction and should be verified against the municipality&apos;s actual intake workflow.</p></div>
        </div>
      </section>

      <section className="case106-flow-zone" aria-label="Current flow and design question">
        <div className="case106-section case106-current-flow"><CaseLabel>Current flow</CaseLabel><ol className="case106-current-flow-sequence">{currentFlow.map((item, index) => <li key={item} className={`case106-current-flow-step case106-current-flow-step-${index + 1}`}>{item}</li>)}</ol><p className="case106-caption">The system asks for fields without first checking whether they already exist in the resident&apos;s message.</p></div>
        <blockquote className="case106-question">How might the service use information residents have already provided —<br />without turning the experience into an open-ended AI chatbot?</blockquote>
      </section>

      <section className="case106-intervention case106-section" aria-labelledby="intervention-title">
        <div className="case106-heading"><CaseLabel id="intervention-title">The intervention</CaseLabel><h2>Not a chatbot.<br />A constrained intake layer.</h2></div>
        <div className="case106-copy case106-intervention-copy"><p>I would not give a generative model permission to freely conduct the conversation.</p><p>Instead, I would place a narrowly defined interpretation layer between the incoming WhatsApp message and the existing 106 intake workflow.</p></div>
        <ProcessStrip className="case106-intervention-flow">{interventionFlow.map((item) => <li key={item}>{item}</li>)}</ProcessStrip>

        <div className="case106-example" aria-labelledby="example-title">
          <CaseLabel id="example-title">Structured example</CaseLabel>
          <div className="case106-example-grid">
            <div className="case106-message" dir="rtl" lang="he">נשמח להדברת יתושים בגינת כלבים יד לבנים</div>
            <dl className="case106-extraction"><div><dt>Issue</dt><dd>Mosquitoes</dd></div><div><dt>Request</dt><dd>Pest control</dd></div><div><dt>Location</dt><dd>Yad Labanim dog park</dd></div><div><dt>Category</dt><dd>Sanitation / Pest control</dd></div><div><dt>Confidence</dt><dd>High</dd></div></dl>
          </div>
          <div className="case106-respond"><p>Instead of a generic form, the system could ask:</p><blockquote>I understood that you&apos;re reporting mosquitoes at the Yad Labanim dog park. I only need your full name to complete the request.</blockquote><p>Or, if the required identity details are already available:</p><blockquote>Request received. Your report about mosquitoes at the Yad Labanim dog park has been submitted.</blockquote></div>
        </div>
      </section>

      <section className="case106-before-after case106-section" aria-labelledby="before-after-title">
        <CaseLabel id="before-after-title">Before / after</CaseLabel>
        <div className="case106-comparison"><div><h2>Before</h2><ProcessStrip>{["Write the problem", "Receive generic form", "Repeat problem", "Repeat location", "Provide remaining fields", "Submit"].map((item) => <li key={item}>{item}</li>)}</ProcessStrip></div><div><h2>After</h2><ProcessStrip>{["Write the problem", "System extracts what is already known", "Ask only for missing information", "Submit"].map((item) => <li key={item}>{item}</li>)}</ProcessStrip></div></div>
        <p className="case106-closing">The improvement is not more conversation.<br />It is less unnecessary conversation.</p>
      </section>

      <section className="case106-guardrails case106-section" aria-labelledby="guardrails-title">
        <div className="case106-heading"><CaseLabel id="guardrails-title">AI without the chatbot problem</CaseLabel><h2>Understanding language does not require giving the model control of the conversation.</h2></div>
        <ol className="case106-guardrail-list"><li><b>01</b><span><strong>Closed schema</strong> predefined fields only.</span></li><li><b>02</b><span><strong>Closed taxonomy</strong> classification maps only to municipality-defined categories.</span></li><li><b>03</b><span><strong>No guessing</strong> low-confidence extraction triggers clarification.</span></li><li><b>04</b><span><strong>Human fallback</strong> ambiguous, sensitive or unusual requests can be routed to a representative.</span></li></ol>
        <p className="case106-note">Keep the original resident message attached to the structured data.</p>
      </section>

      <section className="case106-architecture case106-section" aria-labelledby="architecture-title">
        <CaseLabel id="architecture-title">Implementation principle</CaseLabel>
        <div className="case106-architecture-copy"><p>The proposal does not depend on replacing the municipality&apos;s existing 106 platform.</p><p>The exact implementation would depend on the municipality&apos;s WhatsApp provider, CRM / service-management system, required fields and available APIs.</p></div>
        <ProcessStrip className="case106-architecture-strip"><li>WhatsApp</li><li>AI extraction layer</li><li>validation rules</li><li>existing 106 workflow</li></ProcessStrip>
        <div className="case106-options"><p>If direct integration is available: populate existing intake fields automatically.</p><p>If it is not: surface extracted information to the operator first, reducing manual classification and re-entry.</p></div>
      </section>

      <section className="case106-validation case106-section" aria-labelledby="validation-title">
        <div className="case106-heading"><CaseLabel id="validation-title">Pilot + validation</CaseLabel><h2>A pilot does not need to understand every municipal request.</h2></div>
        <div className="case106-validation-grid"><div className="case106-copy"><p>Start with a few high-volume, relatively unambiguous categories such as sanitation, gardening, lighting and pest control.</p><p className="case106-keyline">It is whether using information already present in the message reduces abandonment and unnecessary repetition.</p></div><div><CaseLabel>Measure</CaseLabel><ul className="case106-measures">{measures.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
        <div className="case106-open-questions"><CaseLabel>Open questions</CaseLabel><ol>{questions.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</li>)}</ol></div>
      </section>

      <footer className="case106-ending"><div className="case106-status"><CaseLabel>Status</CaseLabel><p>A service improvement proposal, not a shipped product.</p><p>This case study documents an observed service friction, the system hypothesis behind it and a possible intervention.</p><p>It has not been implemented or validated with the Municipality of Petah Tikva.</p><p>The proposal was also documented and prepared for submission to the municipality.</p></div><div className="case106-final"><p>People should not have to translate themselves into forms when they have already explained what happened.</p><p>The opportunity is not to make municipal services more conversational.</p><p>It is to make them better at listening.</p></div><p className="case106-footer">studio golda by ROTKA</p></footer>
    </CaseStudyShell>
  );
}
