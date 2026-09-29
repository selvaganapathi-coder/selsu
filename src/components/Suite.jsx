import Icon from "./Icon";
import Reveal from "./Reveal";
import TickList from "./TickList";
import { products, services } from "../site";

/* The mesh reuses the product and service icons purely as decoration. */
const TILES = [...products, ...services].slice(0, 6);

const POINTS = [
  "Both platforms under one roll-out plan",
  "Design and campaigns handled in house",
  "Training and handover included",
  "Direct line to the founder",
];

export default function Suite() {
  return (
    <section className="suite">
      <div className="wrap suite-inner">
        <Reveal className="suite-copy">
          <p className="eyebrow eyebrow--light">All in one place</p>
          <h2>One vendor for the software, the design and the support</h2>
          <p>
            Most institutions end up with one team for software, another for creatives and a third for
            the website. SELSU covers all three, so nothing falls between vendors and you have one
            number to call.
          </p>
          <TickList items={POINTS} light />
          <div className="suite-actions">
            <a className="btn btn-light btn-lg" href="#contact">
              Book a walkthrough
            </a>
            <a className="btn btn-bare btn-lg" href="#services">
              See all services
            </a>
          </div>
        </Reveal>

        <Reveal className="suite-mesh" aria-hidden="true">
          {TILES.map((tile) => (
            <span className={`tile tile--${tile.tone} tile--lg`} key={tile.name}>
              <Icon name={tile.icon} />
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
