import { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import Catalog from "./Components/Catalog";
import ButtonFetchData from "./Components/ButtonFetchData";
import FetchError from "./Components/FetchError";

export default function App() {
  const [ships, setShips] = useState([]);
  const [requestError, setError] = useState("");

  const url = "https://api.spacexdata.com/v3/ships";

  const fetchData = () => {
    fetch(url)
      .then((response) => {
        setShips([]);
        if (response.status != 200) {
          throw "Error getting data!";
        } else {
          setError("");
          return response.json();
        }
      })
      .then((json) => {
        setShips(json);
      })
      .catch((error) => {
        setError("Ошибка при получении данных!");
      });
  };

  return (
    <>
      <Header />
      <ButtonFetchData fetchData={fetchData} />
      <FetchError error={requestError} />
      <Catalog objData={ships} />
    </>
  );
}
