import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { chatFallback, chatIntents, contact } from "../site";

function matchIntent(text) {
  for (const intent of chatIntents) {
    if (intent.patterns.some((pattern) => pattern.test(text))) return intent;
  }
  return null;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi — ask about custom software, College or Placement products, demos, pricing or WhatsApp.",
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    const intent = matchIntent(text);
    const reply = intent
      ? { from: "bot", text: intent.reply, link: intent.link }
      : { from: "bot", text: chatFallback };

    setMessages((prev) => [...prev, { from: "user", text }, reply]);
    setInput("");
  };

  return (
    <div className={`chatbot${open ? " is-open" : ""}`}>
      {open && (
        <div className="chatbot-panel" role="dialog" aria-modal="true" aria-label="SELSU assistant">
          <header className="chatbot-head">
            <div>
              <strong>SELSU assistant</strong>
              <p>Quick answers · then talk to Selva</p>
            </div>
            <button type="button" className="chatbot-x" aria-label="Close chat" onClick={() => setOpen(false)}>
              <Icon name="close" />
            </button>
          </header>

          <div className="chatbot-log">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`chatbot-bubble chatbot-bubble--${message.from}`}>
                <p>{message.text}</p>
                {message.link && (
                  <a href={message.link.href} target="_blank" rel="noopener noreferrer">
                    {message.link.label}
                  </a>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form className="chatbot-form" onSubmit={send}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about demo, price…"
              aria-label="Message"
              autoComplete="off"
            />
            <button type="submit" className="btn btn-primary" aria-label="Send">
              <Icon name="arrow" />
            </button>
          </form>

          <p className="chatbot-foot">
            Or{" "}
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp Selva
            </a>
          </p>
        </div>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "chat"} />
      </button>
    </div>
  );
}
