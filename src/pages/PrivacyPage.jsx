import { Link } from "react-router-dom";
import { contact } from "../site";
import PageMeta from "../components/PageMeta";

const UPDATED = "20 September 2026";

export default function PrivacyPage() {
  return (
    <section className="section page-hero">
      <PageMeta
        title="Privacy Policy — SELSU"
        description="How SELSU collects, uses and protects personal data under India’s Digital Personal Data Protection Act, 2023."
      />
      <div className="wrap legal">
        <p className="eyebrow">Legal</p>
        <h1>Privacy policy</h1>
        <p className="lede page-lede">
          This policy explains how SELSU (“we”, “us”) handles personal data shared through this
          website, in line with the Digital Personal Data Protection Act, 2023 (DPDP Act) and good
          practice for Indian websites.
        </p>
        <p className="legal-meta">Last updated: {UPDATED}</p>

        <div className="legal-body">
          <h2>1. Who we are</h2>
          <p>
            SELSU is a software company owned and led by Selva. For privacy questions we act as the
            data fiduciary for enquiries made on this site. Contact:{" "}
            <a href={contact.emailHref}>{contact.email}</a>,{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>.
          </p>

          <h2>2. What we collect</h2>
          <p>When you use the contact form or message us, we may process:</p>
          <ul>
            <li>Name, phone / WhatsApp number, organisation name</li>
            <li>Interest area and free-text requirement</li>
            <li>Technical data such as browser type if analytics is enabled</li>
          </ul>
          <p>
            Enquiry copies may be stored in your browser’s local storage (on your device) and opened
            in WhatsApp so Selva can reply. We do not ask for passwords, Aadhaar, PAN or payment card
            details on this website.
          </p>

          <h2>3. Purpose and lawful use</h2>
          <p>We use personal data only to:</p>
          <ul>
            <li>Respond to your enquiry and arrange demos or quotes</li>
            <li>Deliver software or services you request</li>
            <li>Improve this website (anonymised analytics, if enabled)</li>
          </ul>
          <p>
            We rely on your consent when you submit the form (and tick the consent box), and on
            legitimate use to reply to a request you initiated. We do not sell personal data.
          </p>

          <h2>4. Sharing</h2>
          <p>
            Data may be processed through WhatsApp (Meta Platforms) when you continue an enquiry
            there, and through Formspree or similar if a form endpoint is configured. Those
            providers process data under their own terms. We do not share enquiries with unrelated
            third parties for marketing.
          </p>

          <h2>5. Retention</h2>
          <p>
            We keep enquiry details only as long as needed to respond and, if you become a client,
            for the duration of the engagement and any legal retention period. Local storage on your
            device can be cleared by you in the browser.
          </p>

          <h2>6. Your rights (DPDP Act)</h2>
          <p>Subject to the Act, you may request:</p>
          <ul>
            <li>Access to personal data we hold about you from website enquiries</li>
            <li>Correction of inaccurate data</li>
            <li>Erasure where retention is no longer necessary</li>
            <li>Withdrawal of consent for further contact from form submissions</li>
          </ul>
          <p>
            To exercise these rights, email <a href={contact.emailHref}>{contact.email}</a> with the
            subject “Privacy request”. We will respond within a reasonable period.
          </p>

          <h2>7. Security</h2>
          <p>
            We use HTTPS on the live site, limit access to enquiry data, and avoid collecting
            sensitive personal data on this marketing website. No method of transmission is fully
            secure; please do not send passwords or financial credentials through the form.
          </p>

          <h2>8. Children</h2>
          <p>
            This site is aimed at organisations and adults. We do not knowingly collect personal data
            from children for marketing purposes.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update this policy; the “Last updated” date at the top will change. Continued use
            of the site after updates means you have read the revised policy.
          </p>

          <p>
            <Link to="/accessibility">Accessibility statement</Link>
            {" · "}
            <Link to="/terms">Terms of use</Link>
            {" · "}
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
