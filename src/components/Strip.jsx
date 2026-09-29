import { audiences } from "../site";

export default function Strip() {
  return (
    <section className="strip">
      <div className="wrap">
        <p className="strip-label">Built for</p>
        <ul className="strip-list">
          {audiences.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
