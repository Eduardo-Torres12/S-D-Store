import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">S&D Store</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
