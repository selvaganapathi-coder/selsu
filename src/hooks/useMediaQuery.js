import { useEffect, useState } from "react";

/* Subscribes to a media query instead of re-reading it on every event, which
   is what the hand-written version used to do on each pointer move. */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = (event) => setMatches(event.matches);

    setMatches(mql.matches);
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/* The width at which the nav switches from a mobile panel to a menu bar.
   Kept in step with the 960px breakpoint in styles.css. */
export const DESKTOP_QUERY = "(min-width: 961px)";
