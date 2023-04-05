import React from "react";

const GameList = ({ games, handleAddToCart }) => {
  return (
    <div className="game-list-container">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <h3>{game.name}</h3>
          <p>{game.description}</p>
          <p>Price: {game.price}$</p>
          <button onClick={() => handleAddToCart(game)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default GameList;