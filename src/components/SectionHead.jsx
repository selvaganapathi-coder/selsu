import Reveal from "./Reveal";

/* The eyebrow / heading / sub-heading block that opens most sections. */
export default function SectionHead({ eyebrow, title, sub, light = false }) {
  return (
    <Reveal as="header" className="section-head">
      <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}
