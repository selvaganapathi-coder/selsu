import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import TickList from "./TickList";
import { products } from "../site";

export default function Products({ onShowProduct }) {
  return (
    <section className="section" id="products">
      <div className="wrap">
        <SectionHead
          eyebrow="Core products"
          title="Software products for business and education"
          sub="Custom builds for any organisation, plus College and Placement platforms. Start with one or run them together."
        />

        <div className="product-grid">
          {products.map((product) => (
            <Reveal as="article" className="product-card" id={product.id} key={product.id}>
              <span className={`tile tile--${product.tone} tile--lg`}>
                <Icon name={product.icon} />
              </span>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <TickList items={product.features} />
              <div className="product-links">
                <Link className="link-arrow" to={`/products/${product.id}`}>
                  Product details <Icon name="arrow" />
                </Link>
                <a
                  className="link-arrow"
                  href={`#viewer`}
                  onClick={() => onShowProduct(product.id)}
                >
                  See in viewer <Icon name="arrow" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
