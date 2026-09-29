import { useEffect, useRef } from "react";

/* If the browser cannot observe intersections, or the visitor asked for less
   motion, the reveal class is never applied at all — so content starts visible
   rather than relying on an observer that will not run. */
export const ANIMATE_REVEALS =
  typeof window !== "undefined" &&
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* One observer serves every revealed element rather than one observer each. */
let observer;

function sharedObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
  }
  return observer;
}

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !ANIMATE_REVEALS) return undefined;

    const obs = sharedObserver();
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return ref;
}
