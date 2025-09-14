import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const products = [
  { id: 1, name: "Camiseta Básica", price: 20, size: "M", category: "Ropa", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Pantalón Jeans", price: 35, size: "L", category: "Ropa", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Tenis Deportivos", price: 50, size: "M", category: "Calzado", image: "https://via.placeholder.com/200" },
  { id: 4, name: "Gorra Casual", price: 15, size: "U", category: "Accesorios", image: "https://via.placeholder.com/200" },
  { id: 5, name: "Sudadera", price: 40, size: "XL", category: "Ropa", image: "https://via.placeholder.com/200" },
];

function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Ropa", "Calzado", "Accesorios"];

  // Filtrar por categoría
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "Todos") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  return (
    <div>
      {/* Lista de categorías */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Buscador de productos */}
      <SearchBar setFilteredProducts={setFilteredProducts} products={products} />

      {/* Lista de productos */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
