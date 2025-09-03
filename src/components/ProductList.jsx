import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Producto 1", price: 20, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Producto 2", price: 35, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Producto 3", price: 50, image: "https://via.placeholder.com/200" },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
