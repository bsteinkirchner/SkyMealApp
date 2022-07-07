import React from 'react';
import Home from "./Home";
import Diet from "./Diet";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Nutrition from './Nutrition';
import GroceryList from './GroceryList';
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/diet/:type" element={<Diet/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path ="/recipe/:name" element={<Recipe/>} />
        <Route path ="/Nutrition" element={<Nutrition />}/>
        <Route path ="/GroceryList" element={<GroceryList />} />
      </Routes>
  );
}

export default Pages;