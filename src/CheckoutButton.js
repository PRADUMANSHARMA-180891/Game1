import React from 'react';

function CheckoutButton({ handleCheckout }) {
 
  return (
    <button className="checkout-button" onClick={handleCheckout}>
      Pay
      
    </button>
    
  );
}

export default CheckoutButton;