/* Rendered once at the top of the app. Every icon elsewhere is an <Icon>,
   which references these symbols by id. */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function IconSprite() {
  return (
    <svg className="sprite" aria-hidden="true" focusable="false">
      <symbol id="i-college" viewBox="0 0 24 24" {...STROKE}>
        <path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16" />
        <path d="M14 10h4a1 1 0 0 1 1 1v10M8 8h3M8 12h3M8 16h3" />
      </symbol>

      <symbol id="i-placement" viewBox="0 0 24 24" {...STROKE}>
        <rect x="3" y="7.5" width="18" height="13" rx="2" />
        <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18" />
      </symbol>

      <symbol id="i-web" viewBox="0 0 24 24" {...STROKE}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
      </symbol>

      <symbol id="i-ads" viewBox="0 0 24 24" {...STROKE}>
        <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3.5v-13L6 10H4a1 1 0 0 0-1 1Z" />
        <path d="M14 8.8a4 4 0 0 1 0 6.4M17 6a7.5 7.5 0 0 1 0 12" />
      </symbol>

      <symbol id="i-design" viewBox="0 0 24 24" {...STROKE}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 16.5l5-4 3 2 4-3.5 6 4.5" />
        <circle cx="8.5" cy="9" r="1.4" />
      </symbol>

      <symbol id="i-social" viewBox="0 0 24 24" {...STROKE}>
        <circle cx="18" cy="5.5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="18.5" r="2.5" />
        <path d="m15.7 6.8-7.4 4M8.3 13.2l7.4 4" />
      </symbol>

      <symbol id="i-code" viewBox="0 0 24 24" {...STROKE}>
        <path d="M9 7.5 4.5 12 9 16.5M15 7.5 19.5 12 15 16.5" />
      </symbol>

      <symbol id="i-training" viewBox="0 0 24 24" {...STROKE}>
        <path d="M2.5 8.5 12 4.2l9.5 4.3L12 12.8 2.5 8.5Z" />
        <path d="M6.5 10.6V16c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-5.4" />
      </symbol>

      <symbol id="i-cube" viewBox="0 0 24 24" {...STROKE}>
        <path d="M12 2.8l8 4.4v9.6l-8 4.4-8-4.4V7.2l8-4.4Z" />
        <path d="m4.2 7.4 7.8 4.3 7.8-4.3M12 11.7V21.2" />
      </symbol>

      <symbol id="i-user" viewBox="0 0 24 24" {...STROKE}>
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </symbol>

      <symbol id="i-steps" viewBox="0 0 24 24" {...STROKE}>
        <path d="M9.5 6h11M9.5 12h11M9.5 18h11" />
        <path d="m3 6 1.4 1.4L7 4.8M3 12l1.4 1.4L7 10.8M3 18l1.4 1.4L7 16.8" />
      </symbol>

      <symbol id="i-shield" viewBox="0 0 24 24" {...STROKE}>
        <path d="M12 3l7.5 3v5.6c0 4.5-3.1 8.1-7.5 9.4-4.4-1.3-7.5-4.9-7.5-9.4V6L12 3Z" />
        <path d="m8.8 12 2.2 2.2 4.2-4.4" />
      </symbol>

      <symbol id="i-check" viewBox="0 0 24 24" {...STROKE} strokeWidth={2.1}>
        <path d="M4.5 12.5l5 5 10-11" />
      </symbol>

      <symbol id="i-arrow" viewBox="0 0 24 24" {...STROKE} strokeWidth={1.8}>
        <path d="M5 12h13M12.5 6l6 6-6 6" />
      </symbol>

      <symbol id="i-phone" viewBox="0 0 24 24" {...STROKE}>
        <path d="M4.6 4.5h3.5l1.5 3.9-2 1.4a11 11 0 0 0 5 5l1.4-2 3.9 1.5v3.5a1.4 1.4 0 0 1-1.5 1.4A15.4 15.4 0 0 1 3.2 6a1.4 1.4 0 0 1 1.4-1.5Z" />
      </symbol>

      <symbol id="i-chat" viewBox="0 0 24 24" {...STROKE}>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3.5 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5Z" />
      </symbol>

      <symbol id="i-mail" viewBox="0 0 24 24" {...STROKE}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.6 6.4 8.4 6 8.4-6" />
      </symbol>

      <symbol id="i-search" viewBox="0 0 24 24" {...STROKE} strokeWidth={1.8}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </symbol>

      <symbol id="i-menu" viewBox="0 0 24 24" {...STROKE} strokeWidth={1.9}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </symbol>

      <symbol id="i-close" viewBox="0 0 24 24" {...STROKE} strokeWidth={1.9}>
        <path d="M6 6l12 12M18 6 6 18" />
      </symbol>

      <symbol id="i-chevron" viewBox="0 0 24 24" {...STROKE} strokeWidth={2}>
        <path d="m6 9.5 6 6 6-6" />
      </symbol>
    </svg>
  );
}
