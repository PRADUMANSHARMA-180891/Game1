import { useState } from "react";


import CheckoutButton from './CheckoutButton';

function Checkout({ cart, clearCart }) {
 // const history = useHistory();

  // Define the paymentStatus state variable to keep track of whether the payment was successful or not
  const [paymentStatus, setPaymentStatus] = useState(null);

  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
   const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('');
  


  
  function handleCheckout() {
   
    setPaymentStatus('processing');
    setTimeout(() => {
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        setPaymentStatus('success');
        clearCart(); 
       // history.push('/confirmation');
       window.location.reload();
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
          <h4>{item.name}</h4>
          <p>${item.price}</p>
        </div>
      ))}
      <div className="checkout-total">
        <h4>Total</h4>
        <p>${total}</p>
      </div>
    
      <div className="checkout-datetime">
        <h4>Event Start Time</h4>
        <input
          type="datetime-local"
          value={eventStartTime}
          onChange={e => setEventStartTime(e.target.value)}
        />
        <h4>Event End Time</h4>
        <input
          type="datetime-local"
          value={eventEndTime}
          onChange={e => setEventEndTime(e.target.value)}
        />
      </div>

      <h4>Location</h4>
        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
        >
          <option value="">Select location</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Delhi">Delhi</option>
          <option value="Patna">Patna</option>
        </select>
        <h4>Distance</h4>
        {location && <p>{distance} km</p>}



      
      {/* Add payment method field */}
      <label>
        Payment method:
        <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
          <option value="">--Please select--</option>
          <option value="credit">Credit card</option>
          <option value="phonepe">PayPal</option>
          <option value="googlepay">Google Pay</option>
        </select>
      </label>
      <br />
      {/* Add Enquiry button */}
      <button onClick={() => console.log('Enquiry button clicked')}>Enquiry</button>
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