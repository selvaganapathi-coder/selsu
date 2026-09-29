/* Icons here are decorative: every one sits next to its own label, so they are
   hidden from assistive technology. */
export default function Icon({ name, className = "ico" }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  );
}
