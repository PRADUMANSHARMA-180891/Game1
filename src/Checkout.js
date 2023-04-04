import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutButton from './CheckoutButton';

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  // Define the paymentStatus state variable to keep track of whether the payment was successful or not
  const [paymentStatus, setPaymentStatus] = useState(null);

  function handleCheckout() {
    // Simulate a payment process by setting the paymentStatus to "processing" for 2 seconds,
    // then randomly setting it to either "success" or "error"
    setPaymentStatus('processing');
    setTimeout(() => {
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        setPaymentStatus('success');
        clearCart(); // Clear the cart only if payment is successful
        navigate('/confirmation');
      } else {
        setPaymentStatus('error');
      }
    }, 2000);
  }

  const total = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map(item => (
        <div key={item.id} className="checkout-item">
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </div>
      ))}
      <div className="checkout-total">
        <h4>Total</h4>
        <p>${total}</p>
      </div>
      {paymentStatus === 'processing' ? (
        <p>Processing payment...</p>
      ) : paymentStatus === 'success' ? (
        <p>Payment successful!</p>
      ) : paymentStatus === 'error' ? (
        <p>Error processing payment. Please try again later.</p>
      ) : (
        <CheckoutButton handleCheckout={handleCheckout} />
      )}
    </div>
  );
}

export default Checkout;