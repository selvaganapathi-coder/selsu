import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { testimonials } from "../site";

export default function Testimonials() {
  return (
    <section className="section section--soft" id="proof">
      <div className="wrap">
        <SectionHead
          eyebrow="Social proof"
          title="What clients tell us"
          sub="Roles across academics and placement — in their words."
        />

        <div className="proof-grid">
          {testimonials.map((item) => (
            <Reveal as="blockquote" className="proof-card" key={item.quote}>
              <p>“{item.quote}”</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.org}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
