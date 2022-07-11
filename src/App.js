import React from 'react';
import Nav from "./components/Nav/Nav";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import "./index.scss"
import { BrowserRouter } from "react-router-dom";

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