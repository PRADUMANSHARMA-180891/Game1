import React from "react";
import GameCard from "./GameCard"
const gamesData = [
    {
      id: 1,
      title: 'Super Mario Bros.',
      price: 29.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      title: 'The Legend of Zelda',
      price: 39.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'Pokemon Red',
      price: 19.99,
      image: 'https://via.placeholder.com/150'
    }
  ];
  
  function GameList() {
    return (
      <div className="game-list">
        {gamesData.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    );
  }
  
  
  

export default GameList;