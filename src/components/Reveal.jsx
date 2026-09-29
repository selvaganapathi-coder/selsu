import { ANIMATE_REVEALS, useReveal } from "../hooks/useReveal";

/* Fades its child in once it scrolls into view. Renders as a plain element of
   whichever tag is asked for, so it can wrap sections, cards or list items. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal();
  const classes = [ANIMATE_REVEALS ? "reveal" : "", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes || undefined} {...rest}>
      {children}
    </Tag>
  );
}
