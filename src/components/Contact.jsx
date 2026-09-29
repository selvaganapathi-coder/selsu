import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { contact, formEndpoint, interestOptions } from "../site";

const STORAGE_KEY = "selsu.leads";
const PHONE_RE = /^(?:\+?91[\s-]?)?[6-9]\d{9}$/;

function saveLead(data) {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    saved.push({ ...data, at: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch {
    /* Private mode can refuse storage. */
  }
}

function composeMessage(data) {
  return [
    "New enquiry from selsu.com",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Organisation: ${data.org}`,
    `Interested in: ${data.interest}`,
    `Requirement: ${data.message}`,
  ].join("\n");
}

function Field({ id, label, wide = false, children }) {
  return (
    <div className={`field${wide ? " field--wide" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

function openWhatsApp(data) {
  const url = `${contact.whatsappUrl}?text=${encodeURIComponent(composeMessage(data))}`;
  return window.open(url, "_blank", "noopener");
}

export default function Contact() {
  const [note, setNote] = useState(null);
  const [invalid, setInvalid] = useState({});
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = [...form.querySelectorAll("input, select, textarea")].filter(
      (field) => field.name && field.name !== "company_website"
    );

    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: bots fill this hidden field; humans never see it.
    if (data.company_website) {
      setNote({ text: "Thanks — we will be in touch.", state: "is-ok" });
      form.reset();
      return;
    }

    const failed = {};
    let firstInvalid = null;

    for (const field of fields) {
      let bad = !field.checkValidity();
      if (field.name === "phone" && data.phone && !PHONE_RE.test(String(data.phone).replace(/\s+/g, ""))) {
        bad = true;
      }
      if (field.name === "consent" && !field.checked) {
        bad = true;
      }
      if (bad) {
        failed[field.name] = true;
        firstInvalid ??= field;
      }
    }

    setInvalid(failed);

    if (firstInvalid) {
      setNote({
        text: failed.consent
          ? "Please confirm consent so we can contact you about this enquiry."
          : failed.phone && !failed.name
            ? "Enter a valid 10-digit Indian mobile number."
            : "Please complete the highlighted fields.",
        state: "is-bad",
      });
      firstInvalid.focus();
      return;
    }

    const payload = {
      name: data.name,
      phone: data.phone,
      org: data.org,
      interest: data.interest,
      message: data.message,
      consent: true,
    };

    setBusy(true);
    saveLead(payload);

    try {
      if (formEndpoint) {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("formspree");
        setNote({
          text: "Thanks — your request was sent. Opening WhatsApp as a backup…",
          state: "is-ok",
        });
      }

      const opened = openWhatsApp(payload);
      if (opened) {
        setNote({
          text: formEndpoint
            ? "Sent. Continue in WhatsApp if you want to add anything."
            : "Thanks — continue in WhatsApp to send your request.",
          state: "is-ok",
        });
        form.reset();
        setInvalid({});
      } else if (!formEndpoint) {
        setNote({ text: `Popup blocked. Email us at ${contact.email} instead.`, state: "is-bad" });
      }
    } catch {
      const opened = openWhatsApp(payload);
      setNote({
        text: opened
          ? "Form service unavailable — continue in WhatsApp."
          : `Could not send. Email ${contact.email} or call ${contact.phone}.`,
        state: opened ? "is-ok" : "is-bad",
      });
    } finally {
      setBusy(false);
    }
  };

  const handleInput = (event) => {
    const { name } = event.target;
    if (!invalid[name]) return;
    if (name === "phone") {
      if (PHONE_RE.test(String(event.target.value).replace(/\s+/g, ""))) {
        setInvalid(({ phone: _p, ...rest }) => rest);
      }
      return;
    }
    if (event.target.checkValidity()) {
      setInvalid(({ [name]: _cleared, ...rest }) => rest);
    }
  };

  const flag = (name) => (invalid[name] ? "true" : undefined);

  return (
    <section className="section" id="contact">
      <div className="wrap contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Tell us what you need</h2>
          <p className="sub">
            Share a short brief and we will reply on WhatsApp or phone, usually the same working day.
          </p>
          <ul className="contact-facts">
            <li>
              <Icon name="phone" />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <Icon name="mail" />
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              <Icon name="chat" />
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Selva
              </a>
            </li>
          </ul>
        </div>

        <Reveal
          as="form"
          className="contact-form"
          noValidate
          onSubmit={handleSubmit}
          onInput={handleInput}
        >
          {/* Honeypot — leave empty */}
          <input
            className="hp"
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <Field id="f-name" label="Full name">
            <input
              id="f-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={flag("name")}
              required
            />
          </Field>

          <Field id="f-phone" label="Phone / WhatsApp">
            <input
              id="f-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="10-digit mobile"
              pattern="^(?:\+?91[\s-]?)?[6-9]\d{9}$"
              aria-invalid={flag("phone")}
              required
            />
          </Field>

          <Field id="f-org" label="Organisation">
            <input
              id="f-org"
              name="org"
              type="text"
              autoComplete="organization"
              placeholder="Company or college"
              aria-invalid={flag("org")}
              required
            />
          </Field>

          <Field id="f-interest" label="What are you interested in?">
            <select
              id="f-interest"
              name="interest"
              defaultValue=""
              aria-invalid={flag("interest")}
              required
            >
              <option value="">Select an option</option>
              {interestOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>

          <Field id="f-message" label="Your requirement" wide>
            <textarea
              id="f-message"
              name="message"
              rows="4"
              placeholder="A line or two about what you need"
              aria-invalid={flag("message")}
              aria-describedby={invalid.message ? "formNote" : undefined}
              required
            />
          </Field>

          <div className="field field--wide consent">
            <label className="consent-label" htmlFor="f-consent">
              <input
                id="f-consent"
                name="consent"
                type="checkbox"
                value="yes"
                required
                aria-invalid={flag("consent")}
                aria-describedby="consent-help"
              />
              <span>
                I consent to SELSU contacting me about this enquiry using the details I provided. See
                the <a href="/privacy">privacy policy</a>.
              </span>
            </label>
            <p id="consent-help" className="sr-only">
              Required under India’s Digital Personal Data Protection Act for processing your
              enquiry.
            </p>
          </div>

          <div className="form-foot">
            <button className="btn btn-primary btn-lg" type="submit" disabled={busy}>
              {busy ? "Sending…" : "Send request"}
            </button>
            <p
              className={`form-note${note ? ` ${note.state}` : ""}`}
              id="formNote"
              role="status"
              aria-live="polite"
            >
              {note?.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
