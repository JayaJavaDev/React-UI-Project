
import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import ProductCard from "./components/Productcard";
import products from "./data/productData";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((previousItems) =>
      previousItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="app">
      <Header cartCount={cartItems.length} />

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

        {/* Shopping Cart */}
        <section className="cart-section" id="cart">
          <h2>Shopping Cart ({cartItems.length})</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={`${item.id}-${index}`}>
                <span>{item.name} - ₹{item.price}</span>

                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
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
