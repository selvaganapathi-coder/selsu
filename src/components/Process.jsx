import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { steps } from "../site";

export default function Process() {
  return (
    <section className="section section--soft">
      <div className="wrap">
        <SectionHead eyebrow="How it runs" title="From first call to go-live" />

        <ol className="steps">
          {steps.map((step) => (
            <Reveal as="li" key={step.no}>
              <span className="step-no">{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
