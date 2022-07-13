import Popular from "../components/Popular";
import Categories from "../components/Categories";
import Search from "../components/Search";
import React from 'react'; 

function Home() {
  return (
    <div>
        <Search />
        <Categories />
        <Popular />
    </div>
  )
}

export default Home;