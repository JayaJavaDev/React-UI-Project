const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>

        <p className="product-price">₹{product.price}</p>

        <button
          className="add-cart-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;