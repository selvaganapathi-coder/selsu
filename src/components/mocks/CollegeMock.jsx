import { useState } from "react";
import { BLUE, Kpis, LINE, MockBar, MockList, TEAL } from "./parts";

const NAV = ["Dashboard", "Students", "Departments", "Attendance", "Examinations", "Fees", "Reports"];

const VIEWS = {
  Dashboard: {
    kpis: [
      { tone: "blue", value: "2,348", label: "Students" },
      { tone: "teal", value: "142", label: "Courses" },
      { tone: "sage", value: "87.6%", label: "Attendance" },
      { tone: "yellow", value: "94%", label: "Fees" },
    ],
    title: "Attendance overview",
    chart: true,
    list: [
      { tone: "blue", label: "Computer Science", value: "524" },
      { tone: "teal", label: "Electronics", value: "412" },
      { tone: "sage", label: "Mechanical", value: "376" },
    ],
  },
  Students: {
    kpis: [
      { tone: "blue", value: "2,348", label: "Active" },
      { tone: "teal", value: "186", label: "New this year" },
      { tone: "sage", value: "41", label: "Departments" },
      { tone: "coral", value: "12", label: "On hold" },
    ],
    title: "Recent student records",
    chart: false,
    list: [
      { tone: "blue", label: "A. Kumar · CSE", value: "III" },
      { tone: "teal", label: "S. Priya · ECE", value: "II" },
      { tone: "sage", label: "R. Mehta · MECH", value: "IV" },
    ],
  },
  Departments: {
    kpis: [
      { tone: "blue", value: "8", label: "Depts" },
      { tone: "teal", value: "142", label: "Courses" },
      { tone: "sage", value: "96", label: "Faculty" },
      { tone: "yellow", value: "4", label: "Blocks" },
    ],
    title: "Department strength",
    chart: false,
    list: [
      { tone: "blue", label: "Computer Science", value: "524" },
      { tone: "teal", label: "Electronics", value: "412" },
      { tone: "sage", label: "Mechanical", value: "376" },
    ],
  },
  Attendance: {
    kpis: [
      { tone: "sage", value: "87.6%", label: "This week" },
      { tone: "blue", value: "92%", label: "CSE" },
      { tone: "teal", value: "84%", label: "ECE" },
      { tone: "coral", value: "79%", label: "CIVIL" },
    ],
    title: "Attendance trend",
    chart: true,
    list: [
      { tone: "blue", label: "Present today", value: "1,980" },
      { tone: "yellow", label: "Late", value: "64" },
      { tone: "coral", label: "Absent", value: "304" },
    ],
  },
  Examinations: {
    kpis: [
      { tone: "blue", value: "18", label: "Upcoming" },
      { tone: "teal", value: "6", label: "In progress" },
      { tone: "sage", value: "42", label: "Published" },
      { tone: "yellow", value: "3", label: "Revaluation" },
    ],
    title: "Exam schedule snapshot",
    chart: false,
    list: [
      { tone: "blue", label: "CSE · Mid-sem", value: "12 Mar" },
      { tone: "teal", label: "ECE · Practical", value: "14 Mar" },
      { tone: "sage", label: "MECH · Theory", value: "18 Mar" },
    ],
  },
  Fees: {
    kpis: [
      { tone: "yellow", value: "94%", label: "Collected" },
      { tone: "blue", value: "₹2.1Cr", label: "YTD" },
      { tone: "coral", value: "6%", label: "Pending" },
      { tone: "teal", value: "128", label: "Reminders" },
    ],
    title: "Collection by department",
    chart: false,
    list: [
      { tone: "blue", label: "Computer Science", value: "98%" },
      { tone: "teal", label: "Electronics", value: "93%" },
      { tone: "sage", label: "Mechanical", value: "91%" },
    ],
  },
  Reports: {
    kpis: [
      { tone: "blue", value: "24", label: "Saved" },
      { tone: "teal", value: "7", label: "Scheduled" },
      { tone: "sage", value: "3", label: "Shared today" },
      { tone: "yellow", value: "11", label: "Exports" },
    ],
    title: "Popular reports",
    chart: false,
    list: [
      { tone: "blue", label: "Attendance weekly", value: "PDF" },
      { tone: "teal", label: "Fee defaulters", value: "XLS" },
      { tone: "sage", label: "Exam results", value: "PDF" },
    ],
  },
};

export default function CollegeMock() {
  const [module, setModule] = useState("Dashboard");
  const view = VIEWS[module] || VIEWS.Dashboard;

  return (
    <div className="mock mock--flat mock--interactive">
      <MockBar label={`College Software · ${module}`} />

      <div className="mock-app">
        <aside className="mock-nav">
          <p className="mock-nav-brand">
            <span className="sq sq--blue" /> College
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
