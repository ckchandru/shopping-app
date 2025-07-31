import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <br />
      <Link to="/">Back to Store</Link>
    </div>
  );
};

export default ProductDetail;
