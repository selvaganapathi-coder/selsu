/* ==========================================================================
   SELSU — site content and configuration.
   Contact details live here only, so a number change is a one-line edit.
   ========================================================================== */

export const contact = {
  phone: "+91 86672 38643",
  phoneHref: "tel:+918667238643",
  email: "hello@selsu.com",
  emailHref: "mailto:hello@selsu.com",
  whatsappNumber: "918667238643",
  whatsappUrl: "https://wa.me/918667238643",
};

/* Optional: set VITE_FORMSPREE_ID in .env to POST leads to Formspree.
   Without it, the form still validates and hands off to WhatsApp. */
export const formEndpoint = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null;

export const analyticsId = import.meta.env.VITE_GA_ID || null;

/* Products: custom software for any business, plus specialised education tools. */
export const products = [
  {
    id: "custom",
    name: "Custom Software",
    icon: "code",
    tone: "navy",
    short: "Web apps, portals and tools built for your workflow.",
    summary:
      "Bespoke software for businesses of any kind — CRMs, portals, dashboards, internal tools and industry workflows shaped around how you actually work.",
    features: [
      "Web apps and client portals",
      "Internal tools and dashboards",
      "Integrations with what you already use",
      "Role-based access and reporting",
      "Owned and maintained with you",
    ],
    viewerLead:
      "From a first brief to a live system: we design, build and hand over software that matches your process — not a rigid off-the-shelf box.",
    viewerFeatures: [
      "Discovery and architecture",
      "UI built for your users",
      "APIs and third-party integrations",
      "Training and ongoing support",
    ],
    viewerCta: "Request a custom build",
    pageLead:
      "Need software that does not exist as a ready-made product? SELSU designs and builds custom systems for shops, factories, offices, clinics, logistics and more — with the same founder-led delivery as our education products.",
    modules: ["Dashboard", "Records", "Workflows", "Reports", "Users", "Integrations", "Settings"],
  },
  {
    id: "college",
    name: "College Software",
    icon: "college",
    tone: "blue",
    short: "Administration, academics and department workflows.",
    summary:
      "Campus administration, academic operations and department workflows in one structured platform.",
    features: [
      "Student and staff records",
      "Department workflows",
      "Attendance, exams and fees",
      "Role-based access",
      "Operational dashboards",
    ],
    viewerLead:
      "A single record for every student and staff member, with the day-to-day academic workflows built around it.",
    viewerFeatures: [
      "Admissions to alumni records",
      "Attendance and examinations",
      "Fees and collection reports",
      "Department-level dashboards",
    ],
    viewerCta: "Request a College demo",
    pageLead:
      "Run admissions, academics, attendance, exams and fees from one structured campus platform — with roles your departments already understand.",
    modules: ["Dashboard", "Students", "Departments", "Attendance", "Examinations", "Fees", "Reports"],
  },
  {
    id: "placement",
    name: "Placement Software",
    icon: "placement",
    tone: "teal",
    short: "Drives, eligibility, applications and offers.",
    summary:
      "End-to-end placement management for drives, eligibility, applications and offer outcomes.",
    features: [
      "Student and company profiles",
      "Drive planning and scheduling",
      "Eligibility rules and shortlists",
      "Application pipelines",
      "Offer tracking and reports",
    ],
    viewerLead:
      "Plan drives, apply eligibility rules, move candidates through stages and report on offers without spreadsheets.",
    viewerFeatures: [
      "Drive and company management",
      "Automatic eligibility filtering",
      "Stage-by-stage pipelines",
      "Offer and outcome reporting",
    ],
    viewerCta: "Request a Placement demo",
    pageLead:
      "Plan drives, filter eligibility, move candidates through stages and report offers — without the spreadsheet scramble every season.",
    modules: ["Dashboard", "Students", "Companies", "Drives", "Pipeline", "Offers", "Reports"],
  },
];

export const services = [
  {
    slug: "website-development",
    name: "Website Development",
    icon: "web",
    tone: "navy",
    short: "Business and institution sites.",
    blurb: "Business and institution sites built to last, with content you can maintain.",
    detail:
      "Clear information architecture, fast pages and an editing workflow your team can own after handover — for companies, colleges and campus businesses alike.",
    points: [
      "Responsive layouts for marketing and operations",
      "Content you can update without a developer",
      "SEO basics and analytics hooks included",
      "Optional integration with SELSU software",
    ],
  },
  {
    slug: "ai-ads",
    name: "AI Ads",
    icon: "ads",
    tone: "coral",
    short: "Creatives for growth campaigns.",
    blurb: "Performance creatives and copy for marketing, admissions and recruitment campaigns.",
    detail:
      "Ad creatives and copy for product launches, admissions windows and hiring drives — built to test quickly and keep brand consistent across channels.",
    points: [
      "Campaign concepts for sales, admissions and hiring",
      "Variants ready for Meta, Google and WhatsApp",
      "On-brand visuals using your identity",
      "Iteration based on what actually gets clicks",
    ],
  },
  {
    slug: "poster-design",
    name: "Poster Design",
    icon: "design",
    tone: "yellow",
    short: "Events, launches and announcements.",
    blurb: "Print and digital creatives for events, launches and announcements, on brand every time.",
    detail:
      "Posters and print-ready creatives for events, launches, results days and announcements — consistent with your brand, delivered on deadline.",
    points: [
      "Event, launch and notice creatives",
      "Print and digital sizes in one brief",
      "Templates you can reuse across the year",
      "Fast turnaround for last-minute needs",
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    icon: "social",
    tone: "sage",
    short: "Content operations for your pages.",
    blurb: "Content operations that keep your pages active and consistent.",
    detail:
      "A steady content rhythm for your channels — posts, stories and announcements that stay on brand without burning your staff’s time.",
    points: [
      "Monthly content calendar",
      "Post and story creatives ready to publish",
      "Caption and hashtag sets per campaign",
      "Reporting on what your audience engages with",
    ],
  },
  {
    slug: "custom-development",
    name: "Custom Development",
    icon: "code",
    tone: "blue",
    short: "Extensions and integrations.",
    blurb: "Extensions, integrations and automation for the tools you already run.",
    detail:
      "When off-the-shelf stops short: integrations, automations and extensions that connect SELSU products — or the tools you already run — into one workflow.",
    points: [
      "API and spreadsheet integrations",
      "Role-based portals and internal tools",
      "Automation for repetitive tasks",
      "Handover docs and training for your team",
    ],
  },
  {
    slug: "placement-training",
    name: "Placement Training",
    icon: "training",
    tone: "teal",
    short: "Candidate readiness programs.",
    blurb: "Readiness programs that lift aptitude, communication and interview outcomes.",
    detail:
      "Structured readiness programs that lift aptitude, communication and interview performance — timed to your drive calendar, not a generic syllabus.",
    points: [
      "Aptitude and soft-skills modules",
      "Mock interviews with feedback",
      "Drive-season scheduling that fits your calendar",
      "Optional pairing with Placement Software",
    ],
  },
];

export const audiences = [
  "Businesses & startups",
  "Factories & shops",
  "Offices & clinics",
  "Engineering colleges",
  "Universities",
  "Placement cells",
];

export const testimonials = [
  {
    quote:
      "They built the portal around how our team already worked. No forced templates — just software that fit.",
    name: "Operations lead",
    org: "Mid-size trading company",
  },
  {
    quote:
      "We finally stopped chasing attendance and fee data across departments. One login, one picture of the campus.",
    name: "Dean of Academics",
    org: "Engineering college, Tamil Nadu",
  },
  {
    quote:
      "Drive season used to mean three spreadsheets. The pipeline view alone paid for the switch.",
    name: "Placement officer",
    org: "Arts & science college",
  },
];

export const pricing = [
  {
    name: "Walkthrough",
    price: "Free",
    note: "No setup fee to talk",
    points: [
      "Live demo of any product",
      "Fit check for your organisation",
      "Reply on WhatsApp or phone",
    ],
    cta: "Book a walkthrough",
    href: "/#contact",
    featured: false,
  },
  {
    name: "Product or build",
    price: "Quote-based",
    note: "After a short discovery",
    points: [
      "Custom, College or Placement",
      "Configuration and training",
      "Direct founder support",
    ],
    cta: "Request a quote",
    href: "/#contact",
    featured: true,
  },
  {
    name: "Full engagement",
    price: "Custom",
    note: "Software + services",
    points: [
      "Multiple products under one plan",
      "Website, design or training add-ons",
      "One rollout, one point of contact",
    ],
    cta: "Plan a rollout",
    href: "/#contact",
    featured: false,
  },
];

export const values = [
  {
    icon: "cube",
    tone: "blue",
    title: "Software for any sector",
    body: "Custom systems for businesses, plus specialised College and Placement platforms — not limited to one industry.",
  },
  {
    icon: "user",
    tone: "teal",
    title: "Founder-led",
    body: "You work with Selva directly, from the first call through configuration and go-live. No account-manager relay.",
  },
  {
    icon: "steps",
    tone: "sage",
    title: "Clear implementation",
    body: "Discovery, build or configuration, training and handover, with someone accountable at every step.",
  },
  {
    icon: "shield",
    tone: "coral",
    title: "Support that answers",
    body: "Reach us on WhatsApp or phone during the working day. Practical help from people who know your setup.",
  },
];

export const steps = [
  {
    no: "01",
    title: "Discover",
    body: "We map your requirements, existing tools and how your team works day to day.",
  },
  {
    no: "02",
    title: "Configure",
    body: "Product setup or custom build, roles and workflows shaped to your organisation.",
  },
  {
    no: "03",
    title: "Launch",
    body: "Go-live with data migration and hands-on training for your team.",
  },
  {
    no: "04",
    title: "Support",
    body: "Ongoing improvements, reporting help and a direct line when you need it.",
  },
];

export const faqs = [
  {
    q: "What exactly do you sell — products or services?",
    a: "Both. We build custom software for any business, and ship College Software and Placement Software as ready products. Website, design, campaigns, development and training can run alongside or on their own.",
  },
  {
    q: "Can we see a live demo before deciding?",
    a: `Yes. Book a walkthrough using the form below, or message Selva directly on WhatsApp at ${contact.phone} and we will arrange a session for your team.`,
  },
  {
    q: "Do you only work with colleges?",
    a: "No. We develop software for businesses across sectors. College and Placement Software are specialised products for education — they are part of what we build, not the only thing.",
  },
  {
    q: "Who will we actually be working with?",
    a: "SELSU is owned and led by Selva, who handles demos and delivery directly. You get one point of contact rather than a handover chain.",
  },
  {
    q: "Can we start with just one product?",
    a: "Yes. Many clients begin with a custom module or one education product, then add more later. Everything can run independently or together.",
  },
  {
    q: "How does pricing work?",
    a: "Walkthroughs are free. Quotes come after a short discovery so they match your scope and modules — not a one-size list online.",
  },
];

export const chatIntents = [
  {
    patterns: [/\b(hi|hello|hey|good\s*(morning|afternoon|evening))\b/i],
    reply: "Hi — I can help with custom software, College or Placement products, demos, pricing or WhatsApp. What do you need?",
  },
  {
    patterns: [/\b(price|pricing|cost|fee|quote|budget)\b/i],
    reply:
      "Walkthroughs are free. Quotes come after a short discovery call. Use the contact form or ask for WhatsApp and I will hand you the link.",
  },
  {
    patterns: [/\b(demo|walkthrough|trial|see\s*(it|product))\b/i],
    reply: "Happy to arrange a live walkthrough. Jump to the contact form on this page, or say “WhatsApp” to message Selva directly.",
  },
  {
    patterns: [/\b(custom|business|software|app|portal|crm|erp|build)\b/i],
    reply:
      "We build custom software for any business — portals, dashboards, internal tools and integrations. Open Products → Custom Software, or ask for a custom build.",
  },
  {
    patterns: [/\b(college|campus|attendance|fees?|exam)\b/i],
    reply:
      "College Software covers student records, departments, attendance, exams and fees. Open Products → College Software, or ask for a College demo.",
  },
  {
    patterns: [/\b(placement|drive|offer|recruit)\b/i],
    reply:
      "Placement Software handles drives, eligibility, pipelines and offers. Open Products → Placement Software, or ask for a Placement demo.",
  },
  {
    patterns: [/\b(whatsapp|wa|chat|message|call|phone|contact)\b/i],
    reply: `You can reach Selva on WhatsApp at ${contact.phone}, call the same number, or email ${contact.email}.`,
    link: { href: contact.whatsappUrl, label: "Open WhatsApp" },
  },
  {
    patterns: [/\b(service|website|ads?|poster|social|training)\b/i],
    reply:
      "Alongside software we offer website, AI ads, poster design, social media, custom development and placement training. Browse Services in the menu for details.",
  },
];

export const chatFallback =
  "I can help with custom software, College or Placement products, demos, pricing, services or WhatsApp. Try one of those, or use the contact form below.";

export const interestOptions = [
  "Custom Software",
  "College Software demo",
  "Placement Software demo",
  "Multiple products",
  ...services.map((service) => service.name),
];

export const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Custom Software", href: "/products/custom" },
      { label: "College Software", href: "/products/college" },
      { label: "Placement Software", href: "/products/placement" },
      { label: "Product view", href: "/?view=custom#viewer" },
    ],
  },
  {
    title: "Services",
    links: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "Why SELSU", href: "/#why" },
      { label: "About", href: "/#company" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    title: "Talk to us",
    links: [
      { label: contact.phone, href: contact.phoneHref },
      { label: contact.email, href: contact.emailHref },
      { label: "WhatsApp", href: contact.whatsappUrl, external: true },
    ],
  },
];
