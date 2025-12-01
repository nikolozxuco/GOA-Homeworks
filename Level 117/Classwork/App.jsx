import React from "react";
import GroceryItem from "./GroceryItem";

function App() {
  return (
    <div>
      <h1>Grocery Store</h1>

      <GroceryItem name="Eggs" />
      <GroceryItem name="Banana" />
      <GroceryItem name="Strawberry" />
      <GroceryItem name="bread" />
    </div>
  );
}

export default App;
