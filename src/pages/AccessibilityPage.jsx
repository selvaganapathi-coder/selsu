import { Link } from "react-router-dom";
import { contact } from "../site";
import PageMeta from "../components/PageMeta";

const UPDATED = "20 September 2026";

/* Aligned with GIGW accessibility principles and WCAG 2.1 Level AA goals. */
export default function AccessibilityPage() {
  return (
    <section className="section page-hero">
      <PageMeta
        title="Accessibility Statement — SELSU"
        description="How the SELSU website aims to meet Guidelines for Indian Government Websites (GIGW) accessibility principles and WCAG 2.1."
      />
      <div className="wrap legal">
        <p className="eyebrow">Compliance</p>
        <h1>Accessibility statement</h1>
        <p className="lede page-lede">
          SELSU aims to make this website usable by everyone, including people who use keyboards,
          screen readers or magnification. We follow the accessibility principles in the{" "}
          <strong>Guidelines for Indian Government Websites (GIGW)</strong> and target{" "}
          <strong>WCAG 2.1 Level AA</strong>.
        </p>
        <p className="legal-meta">Last reviewed: {UPDATED}</p>

        <div className="legal-body">
          <h2>What we provide</h2>
          <ul>
            <li>Skip link to jump to the main content</li>
            <li>Semantic headings, landmarks and labelled form fields</li>
            <li>Keyboard access to navigation, tabs, menus and the contact form</li>
            <li>Visible focus styles and text alternatives for meaningful images</li>
            <li>Respect for “reduce motion” system settings</li>
            <li>Privacy policy, terms and this accessibility statement linked in the footer</li>
          </ul>

          <h2>Known limits</h2>
          <p>
            Decorative product mockups are simplified UI illustrations. Some chart graphics are
            conveyed with nearby text. Third-party WhatsApp or analytics tools follow their own
            accessibility practices.
          </p>

          <h2>Feedback</h2>
          <p>
            If you find a barrier, tell us what page you were on and what you tried to do. We will
            work to fix issues that are reasonably within our control.
          </p>
          <p>
            Email: <a href={contact.emailHref}>{contact.email}</a>
            <br />
            Phone / WhatsApp: <a href={contact.phoneHref}>{contact.phone}</a>
            <br />
            Or use the <Link to="/#contact">contact form</Link>.
          </p>

          <h2>Language</h2>
          <p>
            This site is published in English (India). If you need information in another language,
            contact us and we will help where we can.
          </p>

          <p>
            <Link to="/privacy">Privacy policy</Link>
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
