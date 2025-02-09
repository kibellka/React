import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>SpaceX API</h1>
        <p className="homework-info">ДЗ к занятию 35. React</p>
      </header>
      <p>
        Внешнее API https://api.spacexdata.com/v3/ships без VPN почему-то не
        всегда доступно (аналогично и с https://catfact.ninja/facts). Если будет
        ошибка, то она выведется под кнопкой. Чтобы ошибки не было надо
        запустить приложение с VPN.
      </p>
    </>
  );
}
