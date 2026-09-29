import Icon from "./Icon";
import { contact } from "../site";

/* Fixed to the bottom of the viewport on small screens only. */
export default function CallBar() {
  return (
    <div className="callbar">
      <a className="btn btn-primary" href={contact.phoneHref}>
        <Icon name="phone" />
        Call
      </a>
      <a
        className="btn btn-outline"
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="chat" />
        WhatsApp
      </a>
    </div>
  );
}
