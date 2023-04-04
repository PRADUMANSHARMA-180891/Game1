import React,{useState} from "react";
function GameCard({ game }) {
    const [quantity, setQuantity] = useState(0);
    const handleAddToCart = () => {
      // Here you would typically add the game to the user's cart
      alert(`Added ${quantity} ${game.title} to cart`);
      setQuantity(0);
    };
  
    return (
      <div className="game-card">
        <img src={game.image} alt={game.title} />
        <h2>{game.title}</h2>
        <p>${game.price}</p>
        <div className="quantity">
          <label htmlFor={`quantity-${game.id}`}>Quantity:</label>
          <input
            id={`quantity-${game.id}`}
            type="number"
            min="0"
            value={quantity}
            onChange={e => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    );
  }
  
  export default GameCard