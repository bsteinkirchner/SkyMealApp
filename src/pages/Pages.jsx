import React from 'react';
import Home from "./Home";
import Diet from "./Diet";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Nutrition from './Nutrition';
import GroceryList from './GroceryList';
import SearchByIngredients from './SearchByIngredients';
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
        <Route path ="/SearchByIngredients/:name" element={<SearchByIngredients/>}/>
      </Routes>
  );
}

export default Pages;