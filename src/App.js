import React from 'react';
import { SkynetClient, genKeyPairFromSeed } from 'skynet-js';
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Nav from "./components/Nav/Nav";

const client = new SkynetClient();
const { privateKey } = genKeyPairFromSeed("");

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;