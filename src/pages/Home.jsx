import Popular from "../components/Popular";
import Categories from "../components/Categories";
import OnHand from "../components/OnHand/OnHand";
import React from 'react';

function Home() {
  return (
    <div>
        <Categories />
        <Popular />
        <OnHand />
    </div>
  )
}

export default Home;