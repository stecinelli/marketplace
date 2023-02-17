import React from 'react';
import CartItem from '../Components/CartItem';

function Cart() {
  const cardStyle = {
    maxWidth: '540px',
  };
  return (
    <div className="container" data-bs-scroll="true">
      <p className="fw-semibold fs-4">Shopping Cart</p>
      <div className="card mb-3" style={cardStyle}>
        <CartItem />
        <CartItem />
      </div>
      <p className="fw-semibold fs-2">Total:</p>
      <button type="button" className="btn btn-primary">Go to Payment</button>
    </div>
  );
}

export default Cart;
