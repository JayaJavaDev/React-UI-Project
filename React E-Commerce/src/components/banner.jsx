function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <p className="banner-subtitle">WELCOME TO SHOPEASE</p>

        <h1>
          Discover Your
          <br />
          Favourite Products
        </h1>

        <p className="banner-description">
          Find quality products at affordable prices.
          Shop your everyday essentials in one place.
        </p>

        <a href="#products" className="shop-button">
          Shop Now
        </a>
      </div>

      <div className="banner-decoration">
        <span>🛍️</span>
      </div>
    </section>
  );
}

export default Banner;