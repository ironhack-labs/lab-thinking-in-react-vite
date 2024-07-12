/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className={`card ${!product.inStock && "card--out-of-stock"}`}>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>In stock: {product.inStock ? "✅" : "❌"}</p>
    </div>
  );
};

export default ProductCard;
