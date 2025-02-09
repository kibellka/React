import "./ButtonFetchData.css";

export default function ButtonFetchData({ fetchData }) {
  return (
    <div>
      <button className="btn" onClick={fetchData}>
        Fetch Ships
      </button>
    </div>
  );
}
