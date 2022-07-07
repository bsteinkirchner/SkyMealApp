import React from 'react';
import { SkynetClient, genKeyPairFromSeed } from 'skynet-js';
import Nav from "./components/Nav/Nav";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

const client = new SkynetClient();
const { privateKey } = genKeyPairFromSeed("");
const dataKey = "skyMeals";
const json = {example: "hello."};

async function setJSONExample() {
  await client.db.setJSON(privateKey, dataKey, json);
}

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;