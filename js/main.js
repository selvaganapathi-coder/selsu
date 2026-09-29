/* ==========================================================================
   SELSU — site behaviour
   Contact details also appear as plain href values in index.html; the copy
   here is only used to compose the WhatsApp handoff message.
   ========================================================================== */

const CONFIG = {
  whatsapp: "918667238643",
  email: "hello@selsu.com",
};

const DESKTOP = "(min-width: 961px)";
const isDesktop = () => window.matchMedia(DESKTOP).matches;

/* ---------- Footer year ---------- */

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ---------- Sticky header shadow ---------- */

const header = document.querySelector(".site-header");
if (header) {
  const setStuck = () => header.classList.toggle("is-stuck", window.scrollY > 4);
  setStuck();
  window.addEventListener("scroll", setStuck, { passive: true });
}

/* ---------- Mobile navigation ---------- */

const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    if (open) closeAllMenus();
  });

  // Any navigation from inside the panel should close it.
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a") && !isDesktop()) {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      closeAllMenus();
    }
  });
}

/* ---------- Mega menus ---------- */

const menuItems = [...document.querySelectorAll(".has-menu")].map((li) => ({
  li,
  trigger: li.querySelector(".nav-trigger"),
  panel: li.querySelector(".mega"),
}));

function setMenu(item, open) {
  item.trigger.setAttribute("aria-expanded", String(open));
  item.panel.hidden = !open;
}

function closeAllMenus(except) {
  menuItems.forEach((item) => {
    if (item !== except) setMenu(item, false);
  });
}

menuItems.forEach((item) => {
  item.trigger.addEventListener("click", () => {
    const open = item.trigger.getAttribute("aria-expanded") === "true";
    closeAllMenus(item);
    setMenu(item, !open);
  });

  // Pointer affordance on desktop only; on mobile the panels expand inline.
  item.li.addEventListener("pointerenter", () => {
    if (!isDesktop()) return;
    closeAllMenus(item);
    setMenu(item, true);
  });

  item.li.addEventListener("pointerleave", () => {
    if (isDesktop()) setMenu(item, false);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".has-menu")) closeAllMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const open = menuItems.find((item) => item.trigger.getAttribute("aria-expanded") === "true");
  if (open) {
    setMenu(open, false);
    open.trigger.focus();
  }
});

/* ---------- Product viewer tabs ---------- */

const tabs = [...document.querySelectorAll('.tab[role="tab"]')];
const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));

function selectTab(index, { focus = false } = {}) {
  tabs.forEach((tab, i) => {
    const active = i === index;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (panels[i]) panels[i].hidden = !active;
  });
  if (focus) tabs[index].focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(index));

  tab.addEventListener("keydown", (event) => {
    const moves = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    selectTab((next + tabs.length) % tabs.length, { focus: true });
  });
});

// Links such as "See Placement Software" both scroll to the viewer and
// switch it to the right tab.
document.querySelectorAll("[data-view]").forEach((link) => {
  link.addEventListener("click", () => {
    const wanted = link.dataset.view;
    const index = tabs.findIndex((tab) => tab.id === `tab-${wanted}`);
    if (index >= 0) selectTab(index);
  });
});

/* ---------- Reveal on scroll ---------- */

const revealTargets = document.querySelectorAll(
  ".section-head, .product-card, .service-card, .value, .steps li, .founder, .faq details, .suite-copy, .suite-mesh, .cta-inner, .contact-form, .hero-stage"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

/* ---------- Lead form ---------- */

const form = document.getElementById("leadForm");
const note = document.getElementById("formNote");

function setNote(text, state) {
  if (!note) return;
  note.textContent = text;
  note.classList.remove("is-ok", "is-bad");
  if (state) note.classList.add(state);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = [...form.querySelectorAll("input, select, textarea")];
    let firstInvalid = null;

    fields.forEach((field) => {
      const invalid = !field.checkValidity();
      field.setAttribute("aria-invalid", String(invalid));
      if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      setNote("Please complete the highlighted fields.", "is-bad");
      firstInvalid.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    // No backend on this site, so the lead is kept locally and handed to
    // WhatsApp where it can actually be answered.
    try {
      const saved = JSON.parse(localStorage.getItem("selsu.leads") || "[]");
      saved.push({ ...data, at: new Date().toISOString() });
      localStorage.setItem("selsu.leads", JSON.stringify(saved));
    } catch {
      /* Storage may be unavailable in private mode; not worth blocking on. */
    }

    const message = [
      "New enquiry from selsu.com",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Institution: ${data.org}`,
      `Interested in: ${data.interest}`,
      `Requirement: ${data.message}`,
    ].join("\n");

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    const opened = window.open(url, "_blank", "noopener");

    if (opened) {
      setNote("Thanks — continue in WhatsApp to send your request.", "is-ok");
      form.reset();
      fields.forEach((field) => field.removeAttribute("aria-invalid"));
    } else {
      setNote(`Popup blocked. Email us at ${CONFIG.email} instead.`, "is-bad");
    }
  });

  // Clear the invalid state as soon as someone starts fixing a field.
  form.addEventListener("input", (event) => {
    if (event.target.getAttribute("aria-invalid") === "true" && event.target.checkValidity()) {
      event.target.setAttribute("aria-invalid", "false");
    }
  });
}
