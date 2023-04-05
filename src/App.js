import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GameList from "./GameList";
import Checkout from "./Checkout";
import "./App.css"

const games = [
  {
    id: 1,
    name: "Hi Stricker",
    description: "Description for Hi Stricker",
    price: 10,
  },
  {
    id: 2,
    name: "puch Challenge",
    description: "Description for puch Challenge",
    price: 20,
  },
  {
    id: 3,
    name: "Bow and Arrow",
    description: "Description for Bow and Arrow",
    price: 30,
  },
  {
    id: 4,
    name: "Catch fish",
    description: "Description for Catch fish",
    price: 40,
  },
];

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const handleLogin = (userData) => {
    // Handle login logic here
    setUser(userData);
  };

  const handleSignup = (userData) => {
    // Handle signup logic here
    setUser(userData);
  };

  const handleAddToCart = (game) => {
    setCart([...cart, game]);
  };

  const handleRemoveFromCart = (gameToRemove) => {
    setCart(cart.filter((game) => game.id !== gameToRemove.id));
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <GameList games={games} handleAddToCart={handleAddToCart} />
          <Checkout cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      ) : (
        <div>
          <Login handleLogin={handleLogin} />
          <Signup handleSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default App;