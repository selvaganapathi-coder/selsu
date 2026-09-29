import { Link } from "react-router-dom";
import { contact } from "../site";
import PageMeta from "../components/PageMeta";

const UPDATED = "20 September 2026";

export default function TermsPage() {
  return (
    <section className="section page-hero">
      <PageMeta
        title="Terms of Use — SELSU"
        description="Terms for using the SELSU website and requesting demos or services."
      />
      <div className="wrap legal">
        <p className="eyebrow">Legal</p>
        <h1>Terms of use</h1>
        <p className="lede page-lede">
          These terms govern use of the SELSU website and enquiries made through it. They are
          intended for users in India.
        </p>
        <p className="legal-meta">Last updated: {UPDATED}</p>

        <div className="legal-body">
          <h2>1. About this site</h2>
          <p>
            This website describes SELSU products and services. Content is informational and may
            change without notice. Mockups illustrate typical workflows and may differ in a live
            deployment.
          </p>

          <h2>2. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Misuse forms, chat or contact channels (spam, abuse, malware)</li>
            <li>Attempt unauthorised access to systems or data</li>
            <li>Copy branding or content for commercial use without permission</li>
          </ul>

          <h2>3. Enquiries and demos</h2>
          <p>
            Submitting the contact form or messaging on WhatsApp is a request for contact, not a
            purchase. Quotes, timelines and scope are confirmed separately after discovery.
          </p>

          <h2>4. Services and software</h2>
          <p>
            Delivery of software or professional services is governed by the agreement or statement
            of work shared for that engagement. Website terms do not replace a signed contract.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            SELSU name, logo and site content are owned by SELSU / Selva unless otherwise stated.
            You may not use them without permission.
          </p>

          <h2>6. Liability</h2>
          <p>
            This marketing site is provided “as is”. To the extent permitted by Indian law, SELSU is
            not liable for decisions made solely on the basis of marketing descriptions on this site.
            Nothing here limits liability that cannot be excluded under applicable law.
          </p>

          <h2>7. Governing law</h2>
          <p>
            These terms are governed by the laws of India. Courts in India shall have jurisdiction,
            subject to mandatory consumer protections where they apply.
          </p>

          <h2>8. Contact</h2>
          <p>
            <a href={contact.emailHref}>{contact.email}</a> ·{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>

          <p>
            <Link to="/privacy">Privacy policy</Link>
            {" · "}
            <Link to="/accessibility">Accessibility</Link>
            {" · "}
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
