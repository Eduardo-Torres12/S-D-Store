import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/carrito" element={<h2>Tu carrito está vacío</h2>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
