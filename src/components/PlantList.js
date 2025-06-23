import React from "react";
import PlantCard from "./PlantCard";

function PlantList({items, toggleInStock}) {
  return (
    <ul className="cards">{items().map(item => {
      return <PlantCard key={item.id} 
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        toggleInStock={() => toggleInStock(item.id)} 
                        inStock={item.inStock}                       
                        />
    })}</ul>
  );
}

export default PlantList;
