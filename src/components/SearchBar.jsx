import { useState } from "react";
import "../styles/styles.css";

function SearchBar({ onFilter }) {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");

  const handleSearch = () => {
    onFilter({ query, price, size });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="">Precio</option>
        <option value="low">Menor a $30</option>
        <option value="mid">$30 - $50</option>
        <option value="high">Mayor a $50</option>
      </select>
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">Talla</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <button onClick={handleSearch}>Filtrar</button>
    </div>
  );
}

export default SearchBar;
