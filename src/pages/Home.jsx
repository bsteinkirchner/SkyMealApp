import Popular from "../components/Popular";
import Categories from "../components/Categories";
import MealPlan from "./MealPlan";
import React from 'react'; 

function Home() {
  return (
    <div>
        <Categories />
        <Popular />
        <MealPlan />
    </div>
  )
}

export default Home;