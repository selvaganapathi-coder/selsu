import Icon from "./Icon";
import Reveal from "./Reveal";
import { contact } from "../site";

export default function Company() {
  return (
    <section className="section" id="company">
      <div className="wrap company">
        <div>
          <p className="eyebrow">Company</p>
          <h2>A software company for businesses — and campuses</h2>
          <p className="sub">
            SELSU develops custom software across industries, alongside College Software and
            Placement Software for education. Professional services — website, design, campaigns and
            training — wrap around the products. The company is owned and led by Selva, so ownership
            and communication stay clear.
          </p>
        </div>

        <Reveal as="aside" className="founder">
          <p className="founder-label">Sales &amp; demos</p>
          <div className="founder-id">
            <span className="founder-avatar">S</span>
            <div>
              <h3>Selva</h3>
              <p>Founder &amp; Owner</p>
            </div>
          </div>
          <ul className="founder-links">
            <li>
              <a href={contact.phoneHref}>
                <Icon name="phone" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="chat" />
                Message on WhatsApp
              </a>
            </li>
            <li>
              <a href={contact.emailHref}>
                <Icon name="mail" />
                {contact.email}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
