import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import GameList from './GameList';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Checkout from './Checkout';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(item) {
    setCartItems(cartItems.filter(i => i.id !== item.id));
  }

  function handleLogin(user) {
    setUser(user);
    navigate('/');
  }

  function handleLogout() {
    setUser(null);
    setCartItems([]);
    navigate('/');
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<GameList onAddToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onRemoveItem={removeFromCart} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout cartItems={cartItems} onClearCart={() => setCartItems([])} />
            ) : (
              // <Navigate to="/login" />
              <button>ehoh</button>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;