import "./FetchError.css";

export default function FetchError({ error }) {
  return (
    <div className="error">
      <h1>{error}</h1>
    </div>
  );
}
