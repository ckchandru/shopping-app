import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      <>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
        <Link to="/checkout">Go to Checkout</Link>
      </>
    )}
  </div>
);

export default Cart;
