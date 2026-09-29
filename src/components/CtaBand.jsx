import Reveal from "./Reveal";
import { contact } from "../site";

export default function CtaBand() {
  return (
    <section className="cta">
      <Reveal className="wrap cta-inner">
        <div>
          <h2>Ready to put SELSU to work?</h2>
          <p>Book a walkthrough of any product, or tell us what you need built.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-dark btn-lg" href="#contact">
            Book a walkthrough
          </a>
          <a
            className="btn btn-bare-dark btn-lg"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
