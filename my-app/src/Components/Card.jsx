import "./Card.css";

export default function Card({ cardObj }) {
  return (
    <li className="card">
      <img
        src={cardObj.image != null ? cardObj.image : "/default.png"}
        alt={cardObj.ship_name}
      />
      <div>
        <h3>{cardObj.ship_name}</h3>
        <p>
          Порт приписки <span>{cardObj.home_port}</span>
        </p>
        <p>
          Год постройки <span>{cardObj.year_built}</span>
        </p>
      </div>
    </li>
  );
}
