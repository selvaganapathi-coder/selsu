import { useEffect } from "react";
import { analyticsId } from "../site";

/* Loads GA4 only when VITE_GA_ID is set at build time. */
export default function Analytics() {
  useEffect(() => {
    if (!analyticsId || document.getElementById("selsu-ga")) return undefined;

    const script = document.createElement("script");
    script.id = "selsu-ga";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", analyticsId);

    return undefined;
  }, []);

  return null;
}
