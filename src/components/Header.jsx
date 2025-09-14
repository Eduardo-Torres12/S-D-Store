import "../styles/styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>Bienvenido a S&D Store</h2>
      <p>Los mejores productos para ti</p>
      <Link to="/productos" className="btn-shop">Ir a productos</Link>
    </header>
  );
}

export default Header;
