import { useState } from "react";
import { BLUE, Kpis, LINE, MockBar, MockList, TEAL } from "./parts";

const NAV = ["Dashboard", "Records", "Workflows", "Reports", "Users", "Integrations", "Settings"];

const VIEWS = {
  Dashboard: {
    kpis: [
      { tone: "blue", value: "1,284", label: "Active records" },
      { tone: "teal", value: "46", label: "Open tasks" },
      { tone: "sage", value: "98%", label: "Uptime" },
      { tone: "yellow", value: "12", label: "Integrations" },
    ],
    title: "Activity this week",
    chart: true,
    list: [
      { tone: "blue", label: "Orders processed", value: "318" },
      { tone: "teal", label: "Tickets closed", value: "94" },
      { tone: "sage", label: "Reports run", value: "27" },
    ],
  },
  Records: {
    kpis: [
      { tone: "blue", value: "8.4k", label: "Total" },
      { tone: "teal", value: "162", label: "Added this month" },
      { tone: "sage", value: "3", label: "Data sources" },
      { tone: "coral", value: "11", label: "Flags" },
    ],
    title: "Recent records",
    list: [
      { tone: "blue", label: "Customer · North zone", value: "Active" },
      { tone: "teal", label: "Vendor · Packing", value: "Review" },
      { tone: "sage", label: "Asset · Line 2", value: "OK" },
    ],
  },
  Workflows: {
    kpis: [
      { tone: "blue", value: "9", label: "Live flows" },
      { tone: "teal", value: "4", label: "In draft" },
      { tone: "sage", value: "210", label: "Runs today" },
      { tone: "yellow", value: "2", label: "Needs fix" },
    ],
    title: "Workflow status",
    list: [
      { tone: "blue", label: "Lead → quote", value: "On" },
      { tone: "teal", label: "Invoice reminder", value: "On" },
      { tone: "coral", label: "Stock alert", value: "Paused" },
    ],
  },
  Reports: {
    kpis: [
      { tone: "blue", value: "18", label: "Saved" },
      { tone: "teal", value: "6", label: "Scheduled" },
      { tone: "sage", value: "5", label: "Shared today" },
      { tone: "yellow", value: "14", label: "Exports" },
    ],
    title: "Popular reports",
    list: [
      { tone: "blue", label: "Sales weekly", value: "PDF" },
      { tone: "teal", label: "Ops board pack", value: "XLS" },
      { tone: "sage", label: "SLA summary", value: "PDF" },
    ],
  },
  Users: {
    kpis: [
      { tone: "blue", value: "64", label: "Users" },
      { tone: "teal", value: "8", label: "Roles" },
      { tone: "sage", value: "3", label: "Teams" },
      { tone: "coral", value: "2", label: "Invites" },
    ],
    title: "Access overview",
    list: [
      { tone: "blue", label: "Admins", value: "4" },
      { tone: "teal", label: "Managers", value: "12" },
      { tone: "sage", label: "Staff", value: "48" },
    ],
  },
  Integrations: {
    kpis: [
      { tone: "teal", value: "12", label: "Connected" },
      { tone: "blue", value: "3", label: "API keys" },
      { tone: "sage", value: "1.2k", label: "Calls / day" },
      { tone: "yellow", value: "0", label: "Errors" },
    ],
    title: "Connected systems",
    list: [
      { tone: "blue", label: "WhatsApp Business", value: "Live" },
      { tone: "teal", label: "Accounting export", value: "Live" },
      { tone: "sage", label: "SMS gateway", value: "Live" },
    ],
  },
  Settings: {
    kpis: [
      { tone: "blue", value: "ON", label: "2FA" },
      { tone: "teal", value: "IST", label: "Timezone" },
      { tone: "sage", value: "7d", label: "Backups" },
      { tone: "yellow", value: "v2.4", label: "Release" },
    ],
    title: "Workspace settings",
    list: [
      { tone: "blue", label: "Brand theme", value: "Set" },
      { tone: "teal", label: "Email domain", value: "Verified" },
      { tone: "sage", label: "Audit log", value: "On" },
    ],
  },
};

export default function CustomMock() {
  const [module, setModule] = useState("Dashboard");
  const view = VIEWS[module] || VIEWS.Dashboard;

  return (
    <div className="mock mock--flat mock--interactive">
      <MockBar label={`Custom Software · ${module}`} />

      <div className="mock-app">
        <aside className="mock-nav">
          <p className="mock-nav-brand">
            <span className="sq sq--navy" /> Workspace
          </p>
          <ul>
            {NAV.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className={item === module ? "is-on" : undefined}
                  onClick={() => setModule(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="mock-main">
          <Kpis items={view.kpis} />

          <div className="mock-panel">
            <p className="mock-panel-title">{view.title}</p>
            {view.chart ? (
              <svg
                className="chart chart--tall"
                viewBox="0 0 300 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon
                  points="10,78 55,58 100,64 145,40 190,46 235,26 285,18 285,104 10,104"
                  fill="rgba(37,99,235,.12)"
                />
                <polyline
                  points="10,78 55,58 100,64 145,40 190,46 235,26 285,18"
                  stroke={BLUE}
                  {...LINE}
                />
                <polyline
                  points="10,88 55,74 100,78 145,62 190,66 235,52 285,44"
                  stroke={TEAL}
                  {...LINE}
                />
              </svg>
            ) : null}
            <MockList items={view.list} row={!view.chart} />
          </div>
        </div>
      </div>
    </div>
  );
}
