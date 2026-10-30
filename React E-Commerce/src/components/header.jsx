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
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Cart</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;