import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import useStickyHeader from "../hooks/useStickyHeader";
import useMediaQuery, { DESKTOP_QUERY } from "../hooks/useMediaQuery";
import { contact, products, services } from "../site";

function NavMenu({ id, label, isOpen, isDesktop, onToggle, onOpen, onClose, panelClass, children }) {
  const triggerRef = useRef(null);
  const panelId = `menu-${id}`;

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      onClose();
      triggerRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <li
      className="has-menu"
      onPointerEnter={isDesktop ? onOpen : undefined}
      onPointerLeave={isDesktop ? onClose : undefined}
    >
      <button
        type="button"
        className="nav-trigger"
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {label} <Icon name="chevron" className="ico caret" />
      </button>

      <div className={panelClass} id={panelId} hidden={!isOpen}>
        {children}
      </div>
    </li>
  );
}

function MegaItem({ to, tone, icon, title, description }) {
  return (
    <Link className="mega-item" to={to}>
      <span className={`tile tile--${tone}`}>
        <Icon name={icon} />
      </span>
      <span>
        <b>{title}</b>
        <small>{description}</small>
      </span>
    </Link>
  );
}

export default function Header() {
  const stuck = useStickyHeader();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    setNavOpen(false);
    setOpenMenu(null);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  useEffect(() => {
    if (!openMenu) return undefined;

    const onClick = (event) => {
      if (!event.target.closest(".has-menu")) setOpenMenu(null);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openMenu]);

  const handleNavClick = (event) => {
    if (isDesktop || !event.target.closest("a")) return;
    setNavOpen(false);
    setOpenMenu(null);
  };

  const toggleNav = () => {
    setNavOpen((open) => {
      if (open) setOpenMenu(null);
      return !open;
    });
  };

  const menuProps = (id) => ({
    id,
    isOpen: openMenu === id,
    isDesktop,
    onOpen: () => setOpenMenu(id),
    onClose: () => setOpenMenu((current) => (current === id ? null : current)),
    onToggle: () => setOpenMenu((current) => (current === id ? null : id)),
  });

  return (
    <header className={`site-header${stuck ? " is-stuck" : ""}`} id="top" role="banner">
      <div className="wrap header-inner">
        <Link className="brand" to="/" aria-label="SELSU home">
          <img
            src="/assets/selsu-logo.svg"
            alt="SELSU"
            width="320"
            height="96"
            decoding="async"
            fetchPriority="high"
          />
        </Link>

        <nav
          className={`nav${navOpen ? " is-open" : ""}`}
          id="nav"
          aria-label="Primary"
          onClick={handleNavClick}
        >
          <ul className="nav-list">
            <NavMenu {...menuProps("products")} label="Products" panelClass="mega mega--wide">
              <div className="mega-grid mega-grid--3">
                {products.map((product) => (
                  <MegaItem
                    key={product.id}
                    to={`/products/${product.id}`}
                    tone={product.tone}
                    icon={product.icon}
                    title={product.name}
                    description={product.short}
                  />
                ))}
              </div>
              <p className="mega-foot">
                <Link to="/?view=custom#viewer">
                  See products in action <Icon name="arrow" />
                </Link>
              </p>
            </NavMenu>

            <NavMenu {...menuProps("services")} label="Services" panelClass="mega mega--wide">
              <div className="mega-grid mega-grid--3">
                {services.map((service) => (
                  <MegaItem
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    tone={service.tone}
                    icon={service.icon}
                    title={service.name}
                    description={service.short}
                  />
                ))}
              </div>
            </NavMenu>

            <li>
              <Link to="/#why">Why SELSU</Link>
            </li>
            <li>
              <Link to="/#company">Company</Link>
            </li>
            <li>
              <Link to="/#faq">FAQ</Link>
            </li>
          </ul>

          <div className="nav-cta">
            <a className="btn btn-ghost" href={contact.phoneHref}>
              Talk to Selva
            </a>
            <Link className="btn btn-primary" to="/#contact">
              Book a walkthrough
            </Link>
          </div>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="nav"
          aria-label="Menu"
          onClick={toggleNav}
        >
          <Icon name="menu" className="ico open" />
          <Icon name="close" className="ico shut" />
        </button>
      </div>
    </header>
  );
}
