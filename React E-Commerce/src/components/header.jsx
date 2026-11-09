
const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="logo">
        Shop<span>Ease</span>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </nav>

      <div className="cart">
        <a href="#cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-text">Cart</span>
          <span className="cart-count">{cartCount}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
