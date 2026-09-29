import Icon from "./Icon";

export default function TickList({ items, light = false }) {
  return (
    <ul className={`ticks${light ? " ticks--light" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}
