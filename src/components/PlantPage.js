import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  

 const addItem = (newItem) => {
  setItems(items => 
  [newItem, ...items]
  )
 }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => {
        const fetchedData = data.map(item => (
          { ...item, inStock: true }));
        setItems(fetchedData);
      });
  }, []);

  
 const filteredItems = () => 
  items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
 

  const toggleItemsInStock = (id) => {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  return (
    <main>
      <NewPlantForm addItem={addItem}/>
      <Search  value={search} setSearch={setSearch}/>
      <PlantList items={filteredItems} toggleInStock={toggleItemsInStock} />
    </main>
  );
}

export default PlantPage;
