import "../styles/styles.css";

function Categorias() {
  const categorias = ["Ropa", "Calzado", "Accesorios", "Electrónica"];

  return (
    <section className="categorias">
      <h2>Categorías</h2>
      <div className="categorias-lista">
        {categorias.map((categoria) => (
          <button key={categoria} className="categoria-btn">
            {categoria}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categorias;
