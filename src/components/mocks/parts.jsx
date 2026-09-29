import Icon from "../Icon";

/* Shared building blocks for the faux product screenshots. The whole mock is
   decorative, so the outer container carries aria-hidden and nothing in here
   needs a label. */

export function MockBar({ label }) {
  return (
    <div className="mock-bar">
      <span className="mock-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="mock-addr">{label}</span>
    </div>
  );
}

export function MockHead({ placeholder }) {
  return (
    <div className="mock-head">
      <span className="mock-search">
        <Icon name="search" /> {placeholder}
      </span>
      <span className="mock-avatar" />
    </div>
  );
}

export function Kpis({ items }) {
  return (
    <div className="mock-kpis">
      {items.map((item) => (
        <div className="kpi" key={item.label}>
          <span className={`sq sq--${item.tone}`} />
          <b>{item.value}</b>
          <small>{item.label}</small>
        </div>
      ))}
    </div>
  );
}

export function MockList({ items, row = false }) {
  return (
    <ul className={`mock-list${row ? " mock-list--row" : ""}`}>
      {items.map((item) => (
        <li key={item.label}>
          <span className={`sq sq--${item.tone}`} />
          {item.label} <b>{item.value}</b>
        </li>
      ))}
    </ul>
  );
}

export function Pipeline({ stages }) {
  return (
    <ul className="pipeline">
      {stages.map((stage) => (
        <li key={stage.label} style={{ "--c": `var(--${stage.tone})` }}>
          <b>{stage.value}</b>
          <small>{stage.label}</small>
        </li>
      ))}
    </ul>
  );
}

/* Stroke settings shared by every chart line. */
export const LINE = {
  fill: "none",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const BLUE = "#2563EB";
export const TEAL = "#14B8A6";
