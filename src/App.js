import React from 'react';
//import { SkynetClient, genKeyPaidFromSeed, genKeyPairFromSeed } from 'skynet-js';
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

//const client = new SkynetClient();
//const { privateKey } = genKeyPairFromSeed("");

function App() {
  return(
    <div className="App">
      <h1>SkyMeals</h1>
      <BrowserRouter>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;