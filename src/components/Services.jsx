import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { services } from "../site";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Professional services"
          title="Everything around the products"
          sub="Take any of these standalone, or alongside either platform."
        />

        <div className="service-grid">
          {services.map((service) => (
            <Reveal as="article" className="service-card" key={service.slug}>
              <span className={`tile tile--${service.tone}`}>
                <Icon name={service.icon} />
              </span>
              <h3>{service.name}</h3>
              <p>{service.blurb}</p>
              <Link className="link-arrow" to={`/services/${service.slug}`}>
                Learn more <Icon name="arrow" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
