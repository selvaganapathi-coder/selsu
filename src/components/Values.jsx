import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { values } from "../site";

export default function Values() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <SectionHead
          eyebrow="Why SELSU"
          title="One vendor for the software, the design and the support"
          sub="Whether you need a custom system for your business or campus platforms for education, SELSU covers the build, the creatives and the website — with founder-led delivery."
        />

        <div className="value-grid">
          {values.map((value) => (
            <Reveal as="article" className="value" key={value.title}>
              <span className={`tile tile--${value.tone}`}>
                <Icon name={value.icon} />
              </span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
