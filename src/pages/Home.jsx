import Popular from "../components/HomeFeatures/Popular";
import Categories from "../components/HomeFeatures/Categories";
import Search from "../components/HomeFeatures/Search";
import {Body} from "./Page.style";
import Footer from "../components/Footer/Footer";
import React from 'react'; 

function Home() {
  return (
    <Body>
        <Search />
        <Categories />
        <Popular/>
        <Footer/>
    </Body>
  )
}

export default Home;