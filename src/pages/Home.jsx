import Popular from "../components/Popular";
import GroceryList from "../components/GroceryList";
import Nutrition from "./Nutrition";
import React from 'react';

function Home() {
  return (
    <div>
        <Popular />
        <GroceryList />
        <Nutrition />
    </div>
  )
}

export default Home;