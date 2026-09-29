import Icon from "./Icon";
import Reveal from "./Reveal";
import HeroMock from "./mocks/HeroMock";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <a className="pill" href="#contact">
          <span>New</span> Custom software for any business — plus campus products
          <Icon name="arrow" />
        </a>

        <h1>Software for your business, campus and everything in between.</h1>
        <p className="lede">
          SELSU builds custom software for companies of every kind — and ships College Software and
          Placement Software for education. Website, design, campaigns and training sit around the
          products. You work directly with the founder, start to finish.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#contact">
            Book a walkthrough
          </a>
          <a className="btn btn-outline btn-lg" href="#products">
            Explore products
          </a>
        </div>

        <p className="hero-meta">
          <span>
            <Icon name="check" /> No setup fee to talk
          </span>
          <span>
            <Icon name="check" /> Reply on WhatsApp or phone
          </span>
        </p>
      </div>

      <Reveal className="wrap hero-stage">
        <HeroMock />
      </Reveal>
    </section>
  );
}
