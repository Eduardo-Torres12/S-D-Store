import ProductCard from "../components/ProductCard";
import "../styles/styles.css";

const featuredProducts = [
  { id: 1, name: "Camiseta Básica", price: 20, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Tenis Deportivos", price: 45, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Gorra Casual", price: 15, image: "https://via.placeholder.com/200" },
];

function Home() {
  return (
    <div className="home">
      {/* Sección Principal */}
      <section className="hero">
        <h1>Bienvenido a S&D Store 🛍️</h1>
        <p>Encuentra las mejores ofertas en ropa, calzado y accesorios.</p>
        <button className="btn-shop">Explorar productos</button>
      </section>

      {/* Productos Destacados */}
      <section className="featured">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Promociones */}
      <section className="promotions">
        <h2>Promociones y Ofertas</h2>
        <div className="promo-banner">
          <p>🔥 20% de descuento en toda la sección de calzado 🔥</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
