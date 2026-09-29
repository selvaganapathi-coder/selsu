import { Link, Navigate, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import TickList from "../components/TickList";
import PageMeta from "../components/PageMeta";
import { services } from "../site";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <section className="section page-hero">
      <PageMeta title={`${service.name} — SELSU`} description={service.blurb} />
      <div className="wrap page-layout">
        <p className="eyebrow">Service</p>
        <div className="page-title-row">
          <span className={`tile tile--${service.tone} tile--lg`}>
            <Icon name={service.icon} />
          </span>
          <div>
            <h1>{service.name}</h1>
            <p className="lede page-lede">{service.detail}</p>
          </div>
        </div>

        <div className="page-grid">
          <div>
            <h2>Included</h2>
            <TickList items={service.points} />
            <div className="page-actions">
              <Link className="btn btn-primary btn-lg" to="/#contact">
                Request this service
              </Link>
              <Link className="btn btn-outline btn-lg" to="/#services">
                All services
              </Link>
            </div>
          </div>

          <aside className="page-aside">
            <h3>Works well with</h3>
            <ul className="module-list">
              <li>
                <Link to="/products/custom">Custom Software</Link>
              </li>
              <li>
                <Link to="/products/college">College Software</Link>
              </li>
              <li>
                <Link to="/products/placement">Placement Software</Link>
              </li>
            </ul>
            <p className="page-aside-note">
              Take this standalone, or alongside either platform under one rollout plan.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
