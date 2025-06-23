import React from "react";

function PlantCard({name, price, image, toggleInStock, inStock}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary"
                onClick={toggleInStock}
                >In Stock</button>
      ) : (
        <button onClick={toggleInStock}
        >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
