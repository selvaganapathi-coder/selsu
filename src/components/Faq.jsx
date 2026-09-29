import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { faqs } from "../site";

export default function Faq() {
  return (
    <section className="section section--soft" id="faq">
      <div className="wrap faq-wrap">
        <SectionHead eyebrow="FAQ" title="Common questions" />

        <div className="faq">
          {faqs.map((faq) => (
            <Reveal as="details" key={faq.q}>
              <summary>
                {faq.q}
                <Icon name="chevron" />
              </summary>
              <p>{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
