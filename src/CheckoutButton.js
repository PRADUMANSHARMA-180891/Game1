import React from 'react';

function CheckoutButton({ handleCheckout }) {
  return (
    <button className="checkout-button" onClick={handleCheckout}>
      Checkout
    </button>
  );
}

export default CheckoutButton;