import { useEffect, useState } from "react";

/* True once the page has scrolled far enough for the header to earn a shadow. */
export default function useStickyHeader(threshold = 4) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const update = () => setStuck(window.scrollY > threshold);

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return stuck;
}
