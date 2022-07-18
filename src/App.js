import React from 'react';
import Nav from "./components/Nav/Nav";
import Pages from "./pages/Pages";
import "./index.scss"
import { HashRouter } from "react-router-dom";


function App() {
   
  return(
    <div className="App">
      <HashRouter>
        <Nav />
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;