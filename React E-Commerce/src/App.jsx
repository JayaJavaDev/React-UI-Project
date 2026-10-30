import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import ProductCard from "./components/Productcard";
import products from "./data/productData";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((previousCount) => previousCount + 1);
  };

  return (
    <div className="app">
      <Header cartCount={cartCount} />

      <main>
        <Banner />

        <section className="products-section" id="products">
          <div className="section-heading">
            <p className="section-subtitle">OUR COLLECTION</p>
            <h2>Featured Products</h2>
            <p>Explore our latest collection of products.</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>About ShopEase</h2>
          <p>
            ShopEase brings you quality products at affordable prices.
            Enjoy a simple and convenient shopping experience.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;