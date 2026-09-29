import SectionHead from "./SectionHead";
import TickList from "./TickList";
import CustomMock from "./mocks/CustomMock";
import CollegeMock from "./mocks/CollegeMock";
import PlacementMock from "./mocks/PlacementMock";
import { products } from "../site";
import { useRef } from "react";

const MOCKS = {
  custom: CustomMock,
  college: CollegeMock,
  placement: PlacementMock,
};

export default function Viewer({ activeId, onSelect }) {
  const tabRefs = useRef([]);
  const activeIndex = products.findIndex((product) => product.id === activeId);

  /* Arrow keys move between tabs and take focus with them, which is what the
     tablist pattern expects. */
  const handleKeyDown = (event) => {
    const moves = {
      ArrowRight: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: products.length - 1,
    };

    const target = moves[event.key];
    if (target === undefined) return;

    event.preventDefault();
    const index = (target + products.length) % products.length;
    onSelect(products[index].id);
    tabRefs.current[index]?.focus();
  };

  return (
    <section className="section section--soft" id="viewer">
      <div className="wrap">
        <SectionHead eyebrow="Product view" title="See how each platform is laid out" />

        <div className="tabs" role="tablist" aria-label="Products">
          {products.map((product, index) => {
            const isActive = product.id === activeId;

            return (
              <button
                key={product.id}
                type="button"
                className={`tab${isActive ? " is-active" : ""}`}
                id={`tab-${product.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`view-${product.id}`}
                tabIndex={isActive ? 0 : -1}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                onClick={() => onSelect(product.id)}
                onKeyDown={handleKeyDown}
              >
                {product.name}
              </button>
            );
          })}
        </div>

        <div className="viewer">
          {products.map((product) => {
            const Mock = MOCKS[product.id];

            return (
              <div
                key={product.id}
                className="viewer-panel"
                id={`view-${product.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${product.id}`}
                tabIndex={0}
                hidden={product.id !== activeId}
              >
                <div className="viewer-copy">
                  <h3>{product.name}</h3>
                  <p>{product.viewerLead}</p>
                  <TickList items={product.viewerFeatures} />
                  <a className="btn btn-primary" href="/#contact">
                    {product.viewerCta}
                  </a>
                </div>
                <Mock />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
