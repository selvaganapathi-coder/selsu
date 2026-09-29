import { BLUE, Kpis, LINE, MockBar, MockHead, MockList } from "./parts";

const NAV_ITEMS = ["Dashboard", "Records", "Workflows", "Reports", "Users", "Integrations", "Settings"];

const KPIS = [
  { tone: "blue", value: "1,284", label: "Active records" },
  { tone: "teal", value: "46", label: "Open tasks" },
  { tone: "sage", value: "98%", label: "Uptime" },
  { tone: "yellow", value: "12", label: "Integrations" },
];

const LIST = [
  { tone: "blue", label: "Orders processed", value: "318" },
  { tone: "teal", label: "Tickets closed", value: "94" },
  { tone: "sage", label: "Reports run", value: "27" },
  { tone: "coral", label: "Alerts", value: "5" },
];

/* Generic workspace mock — SELSU builds software beyond campus products. */
export default function HeroMock() {
  return (
    <div className="mock" aria-hidden="true">
      <MockBar label="selsu.app / workspace / dashboard" />

      <div className="mock-app">
        <aside className="mock-nav">
          <p className="mock-nav-brand">
            <span className="sq sq--navy" /> Workspace
          </p>
          <ul>
            {NAV_ITEMS.map((item, index) => (
              <li key={item} className={index === 0 ? "is-on" : undefined}>
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="mock-main">
          <MockHead placeholder="Search records, tasks, users" />
          <Kpis items={KPIS} />

          <div className="mock-panels">
            <div className="mock-panel">
              <p className="mock-panel-title">Activity this week</p>
              <svg className="chart" viewBox="0 0 300 96" preserveAspectRatio="none" aria-hidden="true">
                <polygon
                  points="10,66 50,50 90,56 130,34 170,40 210,22 250,28 290,14 290,92 10,92"
                  fill="rgba(37,99,235,.12)"
                />
                <polyline
                  points="10,66 50,50 90,56 130,34 170,40 210,22 250,28 290,14"
                  stroke={BLUE}
                  {...LINE}
                />
              </svg>
            </div>

            <div className="mock-panel">
              <p className="mock-panel-title">Highlights</p>
              <MockList items={LIST} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
