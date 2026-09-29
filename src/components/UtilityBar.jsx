import Icon from "./Icon";
import { contact } from "../site";

/* Hidden below 640px, where the fixed call bar covers the same ground. */
export default function UtilityBar() {
  return (
    <div className="utility">
      <div className="wrap utility-inner">
        <p className="utility-note">Founder-led software for businesses and campuses</p>
        <ul className="utility-links">
          <li>
            <a href={contact.phoneHref}>
              <Icon name="phone" />
              {contact.phone}
            </a>
          </li>
          <li>
            <a href={contact.emailHref}>
              <Icon name="mail" />
              {contact.email}
            </a>
          </li>
          <li>
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
