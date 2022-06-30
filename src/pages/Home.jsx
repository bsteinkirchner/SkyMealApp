import Popular from "../components/Popular";
import List from "../components/List";
import Nutrition from "./Nutrition";
import React from 'react';

function Home() {
  return (
    <div>
        <Popular />
        <List />
        <Nutrition />
    </div>
  )
}

export default Home;