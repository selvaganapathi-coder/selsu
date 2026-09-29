import { useState } from "react";
import { Kpis, LINE, MockBar, MockList, Pipeline, TEAL } from "./parts";

const NAV = ["Dashboard", "Students", "Companies", "Drives", "Pipeline", "Offers", "Reports"];

const STAGES = [
  { tone: "blue", value: "500", label: "Applied" },
  { tone: "teal", value: "320", label: "Shortlisted" },
  { tone: "sage", value: "180", label: "Assessment" },
  { tone: "yellow", value: "120", label: "Interview" },
  { tone: "coral", value: "312", label: "Offered" },
];

const VIEWS = {
  Dashboard: {
    kpis: [
      { tone: "teal", value: "42", label: "Drives" },
      { tone: "blue", value: "500", label: "Registered" },
      { tone: "sage", value: "312", label: "Offers" },
      { tone: "coral", value: "78%", label: "Placed" },
    ],
    title: "Application pipeline",
    pipeline: true,
    chart: true,
    list: [
      { tone: "blue", label: "Accepted", value: "200" },
      { tone: "yellow", label: "Pending", value: "60" },
      { tone: "coral", label: "Declined", value: "32" },
    ],
  },
  Students: {
    kpis: [
      { tone: "blue", value: "500", label: "Registered" },
      { tone: "teal", value: "420", label: "Eligible" },
      { tone: "sage", value: "312", label: "Offered" },
      { tone: "yellow", value: "88", label: "Pending docs" },
    ],
    title: "Eligible this season",
    list: [
      { tone: "blue", label: "CSE · 8.2 CGPA+", value: "148" },
      { tone: "teal", label: "ECE · 7.5 CGPA+", value: "96" },
      { tone: "sage", label: "MECH · 7.0 CGPA+", value: "84" },
    ],
  },
  Companies: {
    kpis: [
      { tone: "teal", value: "38", label: "Partners" },
      { tone: "blue", value: "12", label: "New" },
      { tone: "sage", value: "9", label: "On campus" },
      { tone: "coral", value: "4", label: "Virtual" },
    ],
    title: "Active company partners",
    list: [
      { tone: "blue", label: "TechNova", value: "24 roles" },
      { tone: "teal", label: "BuildRight", value: "12 roles" },
      { tone: "sage", label: "DataPeak", value: "8 roles" },
    ],
  },
  Drives: {
    kpis: [
      { tone: "teal", value: "6", label: "This week" },
      { tone: "blue", value: "14", label: "Scheduled" },
      { tone: "sage", value: "22", label: "Completed" },
      { tone: "yellow", value: "3", label: "Deferred" },
    ],
    title: "Upcoming drives",
    list: [
      { tone: "blue", label: "TechNova · Aptitude", value: "Mon" },
      { tone: "teal", label: "BuildRight · Interview", value: "Wed" },
      { tone: "sage", label: "DataPeak · HR", value: "Fri" },
    ],
  },
  Pipeline: {
    kpis: [
      { tone: "blue", value: "500", label: "Applied" },
      { tone: "teal", value: "320", label: "Shortlist" },
      { tone: "yellow", value: "120", label: "Interview" },
      { tone: "coral", value: "312", label: "Offered" },
    ],
    title: "Stage-by-stage",
    pipeline: true,
    list: [
      { tone: "blue", label: "Moved today", value: "48" },
      { tone: "teal", label: "Stuck > 7 days", value: "19" },
      { tone: "coral", label: "Dropped", value: "7" },
    ],
  },
  Offers: {
    kpis: [
      { tone: "sage", value: "312", label: "Offers" },
      { tone: "blue", value: "200", label: "Accepted" },
      { tone: "yellow", value: "60", label: "Pending" },
      { tone: "coral", value: "32", label: "Declined" },
    ],
    title: "Offers this season",
    chart: true,
    list: [
      { tone: "blue", label: "Highest CTC", value: "12 LPA" },
      { tone: "teal", label: "Median CTC", value: "4.8 LPA" },
      { tone: "sage", label: "Internships", value: "54" },
    ],
  },
  Reports: {
    kpis: [
      { tone: "blue", value: "16", label: "Saved" },
      { tone: "teal", value: "5", label: "Board packs" },
      { tone: "sage", value: "9", label: "Exports" },
      { tone: "yellow", value: "2", label: "Scheduled" },
    ],
    title: "Placement reports",
    list: [
      { tone: "blue", label: "Offer summary", value: "PDF" },
      { tone: "teal", label: "Dept-wise placed", value: "XLS" },
      { tone: "sage", label: "Company feedback", value: "PDF" },
    ],
  },
};

export default function PlacementMock() {
  const [module, setModule] = useState("Dashboard");
  const view = VIEWS[module] || VIEWS.Dashboard;

  return (
    <div className="mock mock--flat mock--interactive">
      <MockBar label={`Placement Software · ${module}`} />

      <div className="mock-app">
        <aside className="mock-nav">
          <p className="mock-nav-brand">
            <span className="sq sq--teal" /> Placement
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
            {view.pipeline ? <Pipeline stages={STAGES} /> : null}
            {view.chart ? (
              <>
                <p className="mock-panel-title mock-panel-title--split">Offers this season</p>
                <svg
                  className="chart chart--short"
                  viewBox="0 0 300 64"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon
                    points="10,48 55,40 100,42 145,28 190,30 235,18 285,10 285,60 10,60"
                    fill="rgba(20,184,166,.12)"
                  />
                  <polyline
                    points="10,48 55,40 100,42 145,28 190,30 235,18 285,10"
                    stroke={TEAL}
                    {...LINE}
                  />
                </svg>
              </>
            ) : null}
            <MockList items={view.list} row />
          </div>
        </div>
      </div>
    </div>
  );
}
