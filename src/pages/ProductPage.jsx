import { Link, Navigate, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import TickList from "../components/TickList";
import PageMeta from "../components/PageMeta";
import { products } from "../site";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) return <Navigate to="/" replace />;

  return (
    <section className="section page-hero">
      <PageMeta title={`${product.name} — SELSU`} description={product.summary} />
      <div className="wrap page-layout">
        <p className="eyebrow">Product</p>
        <div className="page-title-row">
          <span className={`tile tile--${product.tone} tile--lg`}>
            <Icon name={product.icon} />
          </span>
          <div>
            <h1>{product.name}</h1>
            <p className="lede page-lede">{product.pageLead}</p>
          </div>
        </div>

        <div className="page-grid">
          <div>
            <h2>What you get</h2>
            <TickList items={product.features} />
            <div className="page-actions">
              <Link className="btn btn-primary btn-lg" to="/#contact">
                {product.viewerCta}
              </Link>
              <Link className="btn btn-outline btn-lg" to={`/?view=${product.id}#viewer`}>
                See product view
              </Link>
            </div>
          </div>

          <aside className="page-aside">
            <h3>Modules</h3>
            <ul className="module-list">
              {product.modules.map((module) => (
                <li key={module}>{module}</li>
              ))}
            </ul>
            <p className="page-aside-note">
              Start with one product and add the other later — they work alone or together.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
