import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* React Router does not scroll to #hash on its own when navigating from
   another route. This runs after each location change. */
export default function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
