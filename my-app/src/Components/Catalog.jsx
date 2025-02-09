import "./Card.css";
import Card from "./Card";

export default function Catalog({ objData }) {
  return (
    <div className="catalog">
      <ul className="cards">
        {objData.map((item) => (
          <Card cardObj={item} key={item.ship_name} />
        ))}
      </ul>
    </div>
  );
}
