import { Link } from "react-router-dom";
import { contact, footerColumns } from "../site";

function FooterLink({ link }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    );
  }
  if (link.href.startsWith("tel:") || link.href.startsWith("mailto:")) {
    return <a href={link.href}>{link.label}</a>;
  }
  return <Link to={link.href}>{link.label}</Link>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link to="/">
            <img src="/assets/selsu-logo.svg" alt="SELSU" width="320" height="96" loading="lazy" decoding="async" />
          </Link>
          <p>Custom software, College &amp; Placement platforms, and the services around them.</p>
          <ul className="footer-contact">
            <li>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* details/summary = accordion on small screens; open columns on desktop via CSS. */}
        <nav className="footer-cols" aria-label="Footer">
          {footerColumns.map((column) => (
            <details key={column.title} className="footer-acc">
              <summary>{column.title}</summary>
              <ul>
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>
      </div>

      <div className="wrap footer-bottom">
        <p>© {year} SELSU. All rights reserved. Owned and led by Selva.</p>
        <p className="footer-compliance">
          <Link to="/accessibility">Accessibility</Link>
          {" · "}
          <Link to="/privacy">Privacy</Link>
          {" · "}
          <Link to="/terms">Terms</Link>
          {" · "}
          Aligned with GIGW accessibility principles &amp; DPDP Act, 2023
        </p>
      </div>
    </footer>
  );
}
