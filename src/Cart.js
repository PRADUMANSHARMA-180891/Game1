import React from 'react';

function Cart({ cartItems, onRemoveItem }) {
  function getTotalPrice() {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  return (
    <div>
      <h2>Cart</h2>
      {!cartItems || cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => onRemoveItem(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: ${getTotalPrice().toFixed(2)}</p>
        </>
      )
      }
    </div>
  );
}

export default Cart;