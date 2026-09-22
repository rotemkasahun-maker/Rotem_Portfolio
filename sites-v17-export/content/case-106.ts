export const case106Content = {
  pageTitle: "I Already Told You This",

  shared: {
    metadata: "A REAL-LIFE ANNOYANCE / SERVICE DESIGN / 2026",
    title: "I Already Told You This",
    hero: [
      "I sent the municipal service center the request and the location.",
      "Then the WhatsApp flow asked me to provide them again.",
    ],
  },

  toggle: {
    tldr: "TL;DR",
    detailed: "Detailed",
  },

  evidence: {
    mosquitoes: {
      src: "/106/whatsapp-mosquitoes.jpg",
      alt: "WhatsApp screenshot",
      width: 691,
      height: 1536,
    },
    repetition: {
      src: "/106/whatsapp-repetition.jpg",
      alt: "WhatsApp screenshot",
      width: 691,
      height: 1536,
    },
  },

  headings: {
    theRequest: "THE REQUEST",
    whyItMatters: "WHY IT MATTERS",
    myProposal: "MY PROPOSAL",
    theProposal: "THE PROPOSAL",
    expectedImpact: "EXPECTED IMPACT",
    whatIdCheckNext: "WHAT I'D CHECK NEXT",
    status: "STATUS",
  },

  tldr: {
    request: {
      paragraphs: [
        "I had already sent the municipal service center the request and the location.",
        "The WhatsApp flow asked me to provide them again.",
      ],
    },
    proposal: {
      headline: "Add a narrow AI interpretation layer before the intake flow.",
      body: "Not a chatbot. The layer would read the resident’s message, identify and categorize the request, map the information already provided to the required fields, and determine what is still missing.",
    },
    impact: {
      paragraphs: [
        "This could make the flow feel more natural and reduce friction for residents.",
        "It could increase the likelihood that residents complete the process and that the request reaches the right handling path, while reducing unnecessary manual work for the municipality.",
      ],
    },
  },

  detailed: {
    request: "I had already sent the municipal service center the request and the location.",
    whyItMatters: "The second time it happened, I just didn’t continue.",
    proposal: {
      headline: "Add a small AI interpretation layer before the intake flow.",
      body: "The layer would read the resident’s message, extract the information already there, map it to the municipality’s required fields, and check what is still missing. If something is missing, ask only for that. If everything required is already there, move the request forward.",
    },
    checkNext: [
      "What fields are mandatory?",
      "At what point is an official request created?",
      "What can the current setup receive automatically?",
      "Which fields still require human handling?",
      "Can known sender details be reused safely if privacy/policy permits?",
      "Can landmarks/parks be resolved reliably?",
      "What validation is needed for extraction/completion accuracy?",
    ],
    conclusion: "People shouldn’t have to repeat information they’ve already given a service.",
    status:
      "Unsolicited service improvement proposal · Sent to the Municipality of Petah Tikva for consideration · Not commissioned, implemented or validated",
  },
} as const;
