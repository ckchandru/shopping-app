import React from 'react';

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Order Summary</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button>Place Order</button>
    </div>
  );
};

export default Checkout;
