import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import TickList from "./TickList";
import { pricing } from "../site";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <SectionHead
          eyebrow="Pricing"
          title="Start with a free walkthrough"
          sub="Quotes come after discovery so they match your scope — business build or campus product."
        />

        <div className="price-grid">
          {pricing.map((tier) => (
            <Reveal
              as="article"
              className={`price-card${tier.featured ? " price-card--featured" : ""}`}
              key={tier.name}
            >
              <p className="price-name">{tier.name}</p>
              <p className="price-amount">{tier.price}</p>
              <p className="price-note">{tier.note}</p>
              <TickList items={tier.points} />
              <a className={`btn ${tier.featured ? "btn-primary" : "btn-outline"}`} href={tier.href}>
                {tier.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
